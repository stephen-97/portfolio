import {connect, useDispatch, useSelector} from "react-redux";
import {RefObject, useState} from "react";
import {AppDispatch, RootState, setPage, setPageSliceScroll} from "../redux/redux";
import React, {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import ExperienceFace from "./CubeComponents/ExperienceFace";
import AdoptezMoiLogo from "../assets/AdoptezMoiLogo.png";
import StudyFace from "./CubeComponents/StudyFace";
import PresentationFace from "./CubeComponents/PresentationFace";
import Presentation from "./ItemsComponents/Presentation";
import Experience from "./ItemsComponents/Experience";
import Projects from "./ItemsComponents/Projects";
import Study from "./ItemsComponents/Study";
import DOMTarget = gsap.DOMTarget;



type SmallBlockProps = {
}

gsap.registerPlugin(ScrollTrigger);

const RightSectionBlock = (props : SmallBlockProps) =>  {

    const page = useSelector((state: RootState) => state.page)
    const refPresentation= useRef<null | HTMLDivElement>(null);
    const refExperience = useRef<null | HTMLDivElement>(null);
    const refProjects= useRef<null | HTMLDivElement>(null);
    const refContact= useRef<null | HTMLDivElement>(null);
    const refStudy= useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        let e: HTMLElement | null= document.getElementById("box");
        switch (page.name) {
            case "working" :
                if(e!== null) e.style.transform = "rotate3d(0,0, 0, 90deg)";
                refExperience.current?.scrollIntoView({behavior: 'smooth'});
                break;
            case "projects":
                if(e!== null) e.style.transform = "rotate3d(0,-90,0 , 90deg)";
                refProjects.current?.scrollIntoView({behavior: 'smooth'});
                break;
            case "contact" :
                if(e!== null) e.style.transform = "rotate3d(0,90, 0, 90deg)";
                refContact.current?.scrollIntoView({behavior: 'smooth'});
                break;
            case "presentation" :
                if(e!== null) e.style.transform = "rotate3d(-45, 0, 0, 90deg)";
                refPresentation.current?.scrollIntoView({behavior: 'smooth'});
                break;
            case "study" :
                if(e!== null) e.style.transform = "rotate3d(-45, 0, 0, 90deg)";
                refStudy.current?.scrollIntoView({behavior: 'smooth'});
                break;
            }
        }, [page])

    const observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry, index: number) => {
            if (entry.isIntersecting ) {
                if(entry.target.classList.contains('item')) entry.target.classList.add('active')
                if(entry.target.classList.contains('project')) entry.target.classList.add('active-project');
                if(entry.target.classList.contains('blockStudy')) entry.target.classList.add('active-blockStudy')
                if(entry.target.classList.contains('blockExperience')) entry.target.classList.add('active-blockExperience')
            }
        })
    })


    useEffect(() => {

        // Items : Expériences, présentations, ect...
        const itemsElements = document.querySelectorAll(".item")
        // Block des projets :
        const projectElements = document.querySelectorAll(".project")
        // Block des études
        const studyElements = document.querySelectorAll(".blockStudy")
        // Block des experiences
        const experienceElements = document.querySelectorAll(".blockExperience")

        itemsElements.forEach((el: Element) => observer.observe((el)))
        projectElements.forEach((el: Element) => observer.observe((el)))
        studyElements.forEach((el: Element) => observer.observe((el)))
        experienceElements.forEach((el: Element) => observer.observe((el)))

    }, [] )




    useEffect(() => {
        /// TEST INSPIRATION DISCORD

        const buttonContainer= document.querySelector('.buttonContainer')
        const items = gsap.utils.toArray<HTMLElement>('.item')
        const buttons = Array.from(document.querySelectorAll(".button"));
        const itemsMap = new Map();
        const buttonsMap = new Map();

        items.forEach((item: HTMLElement, index: number) => {
            itemsMap.set(item, buttons[index])
        });

        buttons.forEach((button: Element, index: number) => {
            buttonsMap.set(button, items[index] )
        })

        items.forEach((section: HTMLElement, i: number) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top center",
                onEnter: () => {
                    setActive(itemsMap.get(items[i]));
                },
                onLeaveBack: () => {
                    setActive(itemsMap.get(items[i - 1]));
                }
            });
        }, []);

        buttonContainer!.addEventListener("click", (e: Event) => {
            const target =( e.target! as HTMLElement).closest(".button");
            console.error(target)
            if (buttonsMap.has(target)) {
                buttonsMap.get(target).scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });

        const setActive = (element: Element) => {
            buttons.forEach((item: Element) => {
                if (element === item) {
                    item.classList.add("activeButton");
                } else {
                    item.classList.remove("activeButton");
                }
            });

        }
    })
    return(
        <main className={"rightBlockContainer"}>
            <section ref={refPresentation} className={'item item1'}>
                <Presentation />
            </section>
            <section ref={refExperience} className={'item item2'}>
                <Experience />
            </section>
            <section ref={refStudy} className={'item item3'}>
                <Study />
            </section>
            <section ref={refProjects} className={'item item4'}>
                <Projects />
            </section>
        </main>

    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(RightSectionBlock);

/**
 *
 *
 * <div className={"blockContainerContent"}>HEY</div>
 *             <div className={"blockContainerContent"} >HEY</div>
 *             <div className={"blockContainerContent"}>HEY</div>
 *             <div className={"blockContainerContent"}>HEY</div>
 *             <div className={"blockContainerContent"}>HEY</div>
 *             <div className={"blockContainerContent"}>HEY</div>
 *             <Experience test={null} ref={refWorking} />
 *             <div className={"blockContainerContent"}>HEY</div>
 *             <div className={"blockContainerContent"}>HEY</div>
 *             <div className={"blockContainerContent"}>HEY</div>
 *             <div className={"blockContainerContent"}>HEY</div>
 *             <div className={"blockContainerContent"}>HEY</div>
 *             <div className={"blockContainerContent"}>HEY</div>
 *             <Experience test={null} ref={refProjects} />
 *             <div className={"blockContainerContent"}>HEY</div>
 *             <div className={"blockContainerContent"}>HEY</div>
 *             <div className={"blockContainerContent"}>HEY</div>
 *             <div className={"blockContainerContent"}>HEY</div>
 *             <div className={"blockContainerContent"}>HEY</div>
 *             <div className={"blockContainerContent"}>HEY</div>
 *             <Experience test={null} ref={refContact} />
 *
 * <div className={"rightBlockContainer"}>
 *                 <div className={"blockContainerContent"}>
 *                      <div className={`default ${ page.name === "working" ? "showThis" : "hideThis" }`}>
 *                          <div className={'professional-experience'}>
 *                              <div>
 *                                  2020-2023
 *                              </div>
 *                              <div>
 *                                  <div id={'companyName'}>
 *                                      Gendarmerie Nationale - STSISI
 *                                  </div>
 *                                  <div id={'postName'}>
 *                                      Développeur Full Stack & Devops
 *                                  </div>
 *                                  <div id={'description'}>
 *                                      Création d'une interface de gestion de groupe pour des administrateurs d'un réseau social et développement
 *                                      de fonctionnalités comme l'ajout d'avatar et la gestion de groupe côté serveur (Front & Back)<br/>
 *                                      Création d'une interface pour affichant plusieurs alertes concernant l'actualité de plusieurs
 *                                      directions de la gendarmerie. (Front & Back) <br />
 *                                      Conception d'une architecture pour la solution "Airflow" d'Apache", développement des script Python
 *                                      et mise en production. (devops) <br/>
 *                                  </div>
 *                                  <div id={'description'}>
 *                                      Création d'une interface de gestion de groupe pour des administrateurs d'un réseau social et développement
 *                                      de fonctionnalités comme l'ajout d'avatar et la gestion de groupe côté serveur (Front & Back)<br/>
 *                                      Création d'une interface pour affichant plusieurs alertes concernant l'actualité de plusieurs
 *                                      directions de la gendarmerie. (Front & Back) <br />
 *                                      Conception d'une architecture pour la solution "Airflow" d'Apache", développement des script Python
 *                                      et mise en production. (devops) <br/>
 *                                  </div>
 *                                  <div id={'description'}>
 *                                      Création d'une interface de gestion de groupe pour des administrateurs d'un réseau social et développement
 *                                      de fonctionnalités comme l'ajout d'avatar et la gestion de groupe côté serveur (Front & Back)<br/>
 *                                      Création d'une interface pour affichant plusieurs alertes concernant l'actualité de plusieurs
 *                                      directions de la gendarmerie. (Front & Back) <br />
 *                                      Conception d'une architecture pour la solution "Airflow" d'Apache", développement des script Python
 *                                      et mise en production. (devops) <br/>
 *                                  </div>
 *                                  <div id={'description'}>
 *                                      Création d'une interface de gestion de groupe pour des administrateurs d'un réseau social et développement
 *                                      de fonctionnalités comme l'ajout d'avatar et la gestion de groupe côté serveur (Front & Back)<br/>
 *                                      Création d'une interface pour affichant plusieurs alertes concernant l'actualité de plusieurs
 *                                      directions de la gendarmerie. (Front & Back) <br />
 *                                      Conception d'une architecture pour la solution "Airflow" d'Apache", développement des script Python
 *                                      et mise en production. (devops) <br/>
 *                                  </div>
 *                                  <div id={'description'}>
 *                                      Création d'une interface de gestion de groupe pour des administrateurs d'un réseau social et développement
 *                                      de fonctionnalités comme l'ajout d'avatar et la gestion de groupe côté serveur (Front & Back)<br/>
 *                                      Création d'une interface pour affichant plusieurs alertes concernant l'actualité de plusieurs
 *                                      directions de la gendarmerie. (Front & Back) <br />
 *                                      Conception d'une architecture pour la solution "Airflow" d'Apache", développement des script Python
 *                                      et mise en production. (devops) <br/>
 *                                  </div>
 *                                  <div id={'description'}>
 *                                      Création d'une interface de gestion de groupe pour des administrateurs d'un réseau social et développement
 *                                      de fonctionnalités comme l'ajout d'avatar et la gestion de groupe côté serveur (Front & Back)<br/>
 *                                      Création d'une interface pour affichant plusieurs alertes concernant l'actualité de plusieurs
 *                                      directions de la gendarmerie. (Front & Back) <br />
 *                                      Conception d'une architecture pour la solution "Airflow" d'Apache", développement des script Python
 *                                      et mise en production. (devops) <br/>
 *                                  </div>
 *                                  <div id={'description'}>
 *                                      Création d'une interface de gestion de groupe pour des administrateurs d'un réseau social et développement
 *                                      de fonctionnalités comme l'ajout d'avatar et la gestion de groupe côté serveur (Front & Back)<br/>
 *                                      Création d'une interface pour affichant plusieurs alertes concernant l'actualité de plusieurs
 *                                      directions de la gendarmerie. (Front & Back) <br />
 *                                      Conception d'une architecture pour la solution "Airflow" d'Apache", développement des script Python
 *                                      et mise en production. (devops) <br/>
 *                                  </div>
 *                                  <div id={'technoContainer'}>
 *                                      <span className={'techno'}>React JS</span>
 *                                      <span className={'techno'}>Node JS</span>
 *                                      <span className={'techno'}>TypeScript</span>
 *                                      <span className={'techno'}>SCSS</span>
 *                                      <span className={'techno'}>Python</span>
 *                                      <span className={'techno'}>Terraform</span>
 *                                      <span className={'techno'}>Ansible</span>
 *                                  </div>
 *                              </div>
 *                          </div>
 *                      </div>
 *                               <div className={`default ${ page.name !== "working" ? "showThis" : "hideThis" }`}>TEST 2</div>
 *                     <div className={`default ${ page.name !== "working" ? "showThis" : "hideThis" }`}>TEST 2</div>
 *                     <div className={`default ${ page.name !== "working" ? "showThis" : "hideThis" }`}>TEST 2</div>
 *                     <div className={`default ${ page.name !== "working" ? "showThis" : "hideThis" }`}>TEST 2</div>
 *                     <div className={`default ${ page.name !== "working" ? "showThis" : "hideThis" }`}>TEST 2</div>
 *
 *                 </div>
 *
 *         </div>
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *         // CUBE
 *
 *
 *             <div className={"containerBox"}>
 *                 <div id={'box'}>
 *                     <div className={'card'} id={'front'}>
 *                         <div>
 *                             <ExperienceFace />
 *                         </div>
 *                     </div>
 *                     <div className={'card'} id={'back'}>Back</div>
 *                     <div className={'card'} id={'left'}>
 *                         <StudyFace />
 *                     </div>
 *                     <div className={'card'} id={'right'}>
 *                         <div id={'rightContainer'}>
 *                             <div className={'rightContainerTitle'}>    &lt;<span className={'styledBalise'}>h3</span>&gt; Projets &lt;<span className={'styledBalise'}>/h3</span>&gt;</div>
 *                             <div className={'projectContainer'}>
 *                                 <div className={'project'}>
 *                                     <img
 *                                         className="project-img"
 *                                         src={AdoptezMoiLogo}
 *                                         alt="Logo application Addoptez moi"
 *                                     />
 *                                 </div>
 *                                 <div className={'project'}></div>
 *                             </div>
 *                         </div>
 *                     </div>
 *                     <div className={'card'} id={'top'}>
 *                         <PresentationFace />
 *                     </div>
 *                     <div className={'card'} id={'bottom'}>Bottom</div>
 *                 </div>
 *             </div>
 */