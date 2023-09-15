import React, {useEffect, useRef} from "react";
import gsap from "gsap";
import {css, styled} from "styled-components";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import Presentation from "./ItemsComponents/Presentation";
import Experience from "./ItemsComponents/Experience";
import Projects from "./ItemsComponents/Projects";
import Study from "./ItemsComponents/Study";
import Skills from "./ItemsComponents/Contact";

import WaveIcon from "../assets/wave.svg";
import BriefCaseIcon from "../assets/briefcase.svg"
import GraduationIcon from "../assets/casquette-de-graduation.svg"
import IdeaIcon from "../assets/exchange-ideas.svg"
import LetterIcon from "../assets/letter.svg"


import Box from "./headerComponents/Box";
import constants from "../constants/constants";
import Item from "./ItemsComponents/Item";
import SocialMediaContainer from "./SocialMediaContainer";

type SmallBlockProps = {
}

gsap.registerPlugin(ScrollTrigger);

const blockAnimationDelay =  constants.duration_itemAnim;

const StyledItemContainer = styled.main`
  & {
    position: relative;
    overflow: auto;
    padding: ${constants.headerSize}px 150px 0 150px;
    min-height: 100vh;
    background-color: red;

    @media screen and (max-width: ${constants.maxWindowWidthForSideMenuButton}px) {
      padding: ${constants.headerSize}px 0 0 0;
    }
  }
`
const MainSection = (props : SmallBlockProps) =>  {

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
                //if(entry.target.classList.contains('experienceBlock')) entry.target.classList.add('activeExperienceBlock')
                if(entry.target.classList.contains('contact-block')) entry.target.classList.add('active-contact-block')
                if(entry.target.classList.contains('experience-skills-block')) entry.target.classList.add('active-experience-skills-block')
            }
        })
    })



    useEffect(() => {

        // Items : Expériences, présentations, ect...
        const itemsElements = document.querySelectorAll(".item")
        // Item des projets :
        const projectElements = document.querySelectorAll(".project")
        // Item des études
        const studyElements = document.querySelectorAll(".blockStudy")
        // Item des experiences
        const experienceElements = document.querySelectorAll(".experienceItem")
        // Item des experiences
        const skillsElements = document.querySelectorAll(".contact-block")
        //Item dans les expériences représentant le nombre d'année de travail, ect...
        const experienceBlocks = document.querySelectorAll(".experienceBlock")
        //experienceAnne
        const experienceAnne = document.querySelectorAll(".experience-skills-block")


        itemsElements.forEach((el: Element) => observer.observe((el)))
        projectElements.forEach((el: Element) => observer.observe((el)))
        studyElements.forEach((el: Element) => observer.observe((el)))
        experienceElements.forEach((el: Element) => observer.observe((el)))
        skillsElements.forEach((el: Element) => observer.observe((el)))
        experienceBlocks.forEach((el: Element) => observer.observe((el)))
        experienceAnne.forEach((el: Element) => observer.observe((el)))

    }, [] )




    useEffect(() => {
        let e: HTMLElement | null= document.getElementById("box");

    }, [])

    useEffect(() => {
        /// TEST INSPIRATION DISCORD

        const buttonContainer: Element | null= document.querySelector('.buttonContainer')
        const buttonSideMenuContainer: Element | null = document.querySelector('.side-menu-button-container')
        const items: HTMLElement[] = gsap.utils.toArray<HTMLElement>('.item')
        const buttons: Element[] = Array.from(document.querySelectorAll(".button"));
        const buttonsSideMenu: Element[] = Array.from(document.querySelectorAll(".side-menu-button"))
        const itemsMap: Map<any, any> = new Map();
        const buttonsMap: Map<any, any> = new Map();

        items.forEach((item: HTMLElement, index: number): void => {
            itemsMap.set(item, buttons[index])
        });

        buttons.forEach((button: Element, index: number): void => {
            buttonsMap.set(button, items[index] )
        })

        buttonsSideMenu.forEach((button: Element, index: number): void => {
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
            const target: Element | null = ( e.target! as HTMLElement).closest(".button");
            if (buttonsMap.has(target)) {
                buttonsMap.get(target).scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });

        buttonSideMenuContainer!.addEventListener("click", (e: Event) => {
            const target: Element | null = ( e.target! as HTMLElement).closest(".side-menu-button");
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
                <Item id={'wave-img-presentation'} keyItem={1} ref={refPresentation} icon={WaveIcon} component={<Presentation animationDelay={blockAnimationDelay}/>}/>
                <Item id={'briefCase-img'} keyItem={2} ref={refExperience} icon={BriefCaseIcon} component={<Experience animationDelay={blockAnimationDelay}/>}/>
                <Item id={'study-img'} keyItem={3} ref={refStudy} icon={GraduationIcon} component={<Study animationDelay={blockAnimationDelay}/>}/>
                <Item id={'idea-img'} keyItem={4} ref={refProjects} icon={IdeaIcon} component={<Projects animationDelay={blockAnimationDelay}/>}/>
                <Item id={'skills-img'} keyItem={5} ref={refSkills} icon={LetterIcon} component={<Skills animationDelay={blockAnimationDelay}/>}/>
               <Box />
            <SocialMediaContainer />
        </StyledItemContainer>
    );
}


export default MainSection;
