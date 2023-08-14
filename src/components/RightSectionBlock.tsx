import {connect, useDispatch, useSelector} from "react-redux";
import {RefObject, useState} from "react";
import {AppDispatch, RootState, setPage} from "../redux/redux";
import React, {useEffect, useRef} from "react";
import ExperienceFace from "./CubeComponents/ExperienceFace";
import AdoptezMoiLogo from "../assets/AdoptezMoiLogo.png";
import StudyFace from "./CubeComponents/StudyFace";
import PresentationFace from "./CubeComponents/PresentationFace";
import Presentation from "./ItemsComponents/Presentation";
import Experience from "./ItemsComponents/Experience";
import Projects from "./ItemsComponents/Projects";
import Study from "./ItemsComponents/Study";



type SmallBlockProps = {
}


const RightSectionBlock = (props : SmallBlockProps) =>  {

    const page = useSelector((state: RootState) => state.page)
    const refPresentation= useRef<null | HTMLDivElement>(null);
    const refExperience = useRef<null | HTMLDivElement>(null);
    const refProjects= useRef<null | HTMLDivElement>(null);
    const refContact= useRef<null | HTMLDivElement>(null);
    const refStudy= useRef<null | HTMLDivElement>(null);

    const dispatch: AppDispatch = useDispatch();

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

    /**
     *
     *     useEffect(() => {
     *         let e: HTMLElement | null= document.getElementById("box");
     *         switch (page.name) {
     *             case "working" :
     *                 refWorking.current?.scrollIntoView({behavior: 'smooth'});
     *                 break;
     *             case "projects":
     *                 if(e!== null) e.style.transform = "rotateY(90deg)";
     *                 refProjects.current?.scrollIntoView({behavior: 'smooth'});
     *                 break;
     *             case "contact" :
     *                 if(e!== null) e.style.transform = "rotateY(-90deg)";
     *                 refContact.current?.scrollIntoView({behavior: 'smooth'});
     *                 break;
     *             }
     *         }, [page])
      */


    /**
     * OBSERVER DE BASE
     *
     * const observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
     *         entries.forEach((entry: IntersectionObserverEntry) => {
     *             if (entry.isIntersecting) {
     *                 entry.target.classList.toggle('item')
     *             }
     *         })
     *     })
     */

    const observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        //console.log(entries)
        entries.forEach((entry: IntersectionObserverEntry, index: number) => {
            if (entry.isIntersecting ) {
                if(entry.target.classList.contains('item')) entry.target.classList.add('active')
                if(entry.target.classList.contains('project')) entry.target.classList.add('active-project');
                if(entry.target.classList.contains('blockStudy')) entry.target.classList.add('active-blockStudy')
                if(entry.target.classList.contains('blockExperience')) entry.target.classList.add('active-blockExperience')
            }
        })
    })


    const observerRef: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        let refArray = {
             "refPresentation" : false,
             "refExperience": false,
             "refStudy": false,
             "refProjects": false,
        };
        entries.forEach((entry: IntersectionObserverEntry, index: number) => {

            if(entry.isIntersecting) refArray["refPresentation"] = true
            /**
             *
             * if(entry.target === refProjects.current) {
             *                 if(entry.isIntersecting) refArray["refPresentation"] = true
             *             }
             *             else refArray["refPresentation"] = false
             *
             *             if (entry.isIntersecting) {
             *                 console.log("yo")
             *             } else {
             *                 console.log("no")
             *             }
             */

        })
    })

    //project

    useEffect(() => {
        console.error(page)
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

        const onScroll = () => observerRef.observe(refProjects.current! as Element)
        window.addEventListener('scroll', onScroll);

        onScroll()
    }, [] )

    return(
        <div className={"rightBlockContainer"}>
            <div ref={refPresentation} className={'item'}>
                <Presentation />
            </div>
            <div ref={refExperience} className={'item'}>
                <Experience />
            </div>
            <div ref={refStudy} className={'item'}>
                <Study />
            </div>
            <div ref={refProjects} className={'item'}>
                <Projects />
            </div>
        </div>

    );
}

/**
 * <Presentation />
 *             <Experience />
 *             <Projects />
 *             <Study />
 * @param state
 */
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