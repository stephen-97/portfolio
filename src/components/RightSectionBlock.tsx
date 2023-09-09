import React, {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Presentation from "./ItemsComponents/Presentation";
import Experience from "./ItemsComponents/Experience";
import Projects from "./ItemsComponents/Projects";
import Study from "./ItemsComponents/Study";
import Skills from "./ItemsComponents/Skills";
import Wave from "../assets/wave.svg";
import BriefCase from "../assets/briefcase.svg"
import Graduation from "../assets/casquette-de-graduation.svg"
import Idea from "../assets/exchange-ideas.svg"
import Skill from "../assets/skill.svg"
import {css, styled} from "styled-components";
import Box from "./headerComponents/Box";
import constants from "../constants/constants";
import Block from "./Right/Block";
import skills from "./ItemsComponents/Skills";


type SmallBlockProps = {
}

gsap.registerPlugin(ScrollTrigger);

const blockAnimationDelay =  constants.duration_itemAnim;

const StyledItemContainer = styled.section`
  & {
    position: relative;
  }
  > div {
    background-color: #61dafb;
  }
  
`
const RightSectionBlock = (props : SmallBlockProps) =>  {

    const refPresentation= useRef<null | HTMLDivElement>(null);
    const refExperience = useRef<null | HTMLDivElement>(null);
    const refProjects= useRef<null | HTMLDivElement>(null);
    const refContact= useRef<null | HTMLDivElement>(null);
    const refStudy= useRef<null | HTMLDivElement>(null);
    const refSkills= useRef<null | HTMLDivElement>(null);

    const observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry, index: number) => {
            if (entry.isIntersecting ) {
                if(entry.target.classList.contains('item')) {
                    const allItems: NodeListOf<Element> = document.querySelectorAll('.item');
                    for(let i: number=1; i<= allItems.length; i++){
                        if(entry.target.classList.contains(`item${i}`)) {
                            entry.target.classList.add('active')
                        }
                    }
                }
                if(entry.target.classList.contains('project')) entry.target.classList.add('active-project');
                if(entry.target.classList.contains('blockStudy')) entry.target.classList.add('active-blockStudy')
                if(entry.target.classList.contains('experienceItem')) entry.target.classList.add('activeExperienceItem')
                if(entry.target.classList.contains('experienceBlock')) {
                    entry.target.classList.add('activeExperienceBlock')
                    console.log("ye")
                }
                if(entry.target.classList.contains('skills-Container')) entry.target.classList.add('active-skills-Container')
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
        const experienceElements = document.querySelectorAll(".experienceItem")
        // Block des experiences
        const skillsElements = document.querySelectorAll(".skills-Container")
        //Block dans les expériences représentant le nombre d'année de travail, ect...
        const experienceBlocks = document.querySelectorAll(".experienceBlock")

        itemsElements.forEach((el: Element) => observer.observe((el)))
        projectElements.forEach((el: Element) => observer.observe((el)))
        studyElements.forEach((el: Element) => observer.observe((el)))
        experienceElements.forEach((el: Element) => observer.observe((el)))
        skillsElements.forEach((el: Element) => observer.observe((el)))
        experienceBlocks.forEach((el: Element) => observer.observe((el)))

    }, [] )




    useEffect(() => {
        let e: HTMLElement | null= document.getElementById("box");

    }, [])

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
                start: "top bottom",
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
            if (buttonsMap.has(target)) {
                buttonsMap.get(target).scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });

        const setActive = (element: Element) => {
            buttons.forEach((item: Element) => {
                if (element === item) {
                    item.classList.add("activeButton");
                    let e = document.querySelector<HTMLElement>('#box');
                    if(item.classList.contains('button1')) e!.style.transform = "rotate3d(0,0, 0, 90deg)";
                    if(item.classList.contains('button2')) e!.style.transform = "rotate3d(0,90, 0, 90deg)";
                    if(item.classList.contains('button3')) e!.style.transform = "rotate3d(-45,0, 0, 90deg)";
                    if(item.classList.contains('button4')) e!.style.transform = "rotate3d(0,180, 0, 90deg)";

                } else {
                    item.classList.remove("activeButton");
                }
            });

        }
    })

    return(
        <StyledItemContainer>
           <div>
                <Block id={'wave-img-presentation'} keyItem={1} ref={refPresentation} icon={Wave} component={<Presentation animationDelay={blockAnimationDelay}/>}/>
                <Block id={'briefCase-img'} keyItem={2} ref={refExperience} icon={BriefCase} component={<Experience animationDelay={blockAnimationDelay}/>}/>
                <Block id={'study-img'} keyItem={3} ref={refStudy} icon={BriefCase} component={<Study animationDelay={blockAnimationDelay}/>}/>
                <Block id={'idea-img'} keyItem={4} ref={refProjects} icon={Idea} component={<Projects animationDelay={blockAnimationDelay}/>}/>
                <Block id={'skills-img'} keyItem={5} ref={refSkills} icon={Skill} component={<Skills animationDelay={blockAnimationDelay}/>}/>
               <Box />
           </div>
        </StyledItemContainer>
    );
}


export default RightSectionBlock;
