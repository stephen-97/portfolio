import React, {useEffect, useRef} from "react";
import gsap from "gsap";
import {css, styled} from "styled-components";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import Presentation from "./sections/Presentation";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Study from "./sections/Study";
import Skills from "./sections/Contact";
import WaveIcon from "../assets/wave.svg";
import BriefCaseIcon from "../assets/briefcase.svg"
import GraduationIcon from "../assets/casquette-de-graduation.svg"
import IdeaIcon from "../assets/exchange-ideas.svg"
import LetterIcon from "../assets/letter.svg"
import constants from "../utility/constants";
import Item from "./Section";
import SocialMediaContainer from "./SocialMediaContainer";

gsap.registerPlugin(ScrollTrigger);

const blockAnimationDelay = constants.duration_itemAnim;

const StyledItemContainer = styled.main`
  position: relative;
  overflow: auto;
  padding: ${constants.headerSize}px 0 0 0;
  min-height: 100vh;
  transition: none;
`
const Main = () => {

    const refPresentation = useRef<null | HTMLDivElement>(null);
    const refExperience = useRef<null | HTMLDivElement>(null);
    const refProjects = useRef<null | HTMLDivElement>(null);
    const refStudy = useRef<null | HTMLDivElement>(null);
    const refContatcs = useRef<null | HTMLDivElement>(null);

    const observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry, index: number) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('item')) {
                    const allItems: NodeListOf<Element> = document.querySelectorAll('.item');
                    for (let i: number = 1; i <= allItems.length; i++) {
                        if (entry.target.classList.contains(`item${i}`)) {
                            entry.target.classList.add('active')
                        }
                    }
                }
                if (entry.target.classList.contains('project')) entry.target.classList.add('active-project');
                if (entry.target.classList.contains('block-study')) entry.target.classList.add('active-block-study')
                if (entry.target.classList.contains('experienceItem')) entry.target.classList.add('activeExperienceItem')
                if (entry.target.classList.contains('contact-block')) entry.target.classList.add('active-contact-block')
                if (entry.target.classList.contains('experience-skills-block')) entry.target.classList.add('active-experience-skills-block')
                if (entry.target.classList.contains('project')) entry.target.classList.add('active-project')
            }
        })
    })


    useEffect(() => {

        // Items : Expériences, présentations, ect...
        const itemsElements = document.querySelectorAll(".item")
        // Item des projets :
        const projectElements = document.querySelectorAll(".project")
        // Item des études
        const studyElements = document.querySelectorAll(".block-study")
        // Item des experiences
        const experienceElements = document.querySelectorAll(".experienceItem")
        // Item des experiences
        const skillsElements = document.querySelectorAll(".contact-block")
        //Item dans les expériences représentant le nombre d'année de travail, ect...
        const experienceBlocks = document.querySelectorAll(".experienceBlock")
        //experienceAnne
        const experienceAnne = document.querySelectorAll(".experience-skills-block")
        //project Container
        const projectsContainers = document.querySelectorAll(".project")


        itemsElements.forEach((el: Element) => observer.observe((el)))
        projectElements.forEach((el: Element) => observer.observe((el)))
        studyElements.forEach((el: Element) => observer.observe((el)))
        experienceElements.forEach((el: Element) => observer.observe((el)))
        skillsElements.forEach((el: Element) => observer.observe((el)))
        experienceBlocks.forEach((el: Element) => observer.observe((el)))
        experienceAnne.forEach((el: Element) => observer.observe((el)))
        projectsContainers.forEach((el: Element) => observer.observe((el)))
    }, [])


    useEffect(() => {
        let e: HTMLElement | null = document.getElementById("box");

    }, [])

    useEffect(() => {
        /// TEST INSPIRATION DISCORD

        const buttonContainer: Element | null = document.querySelector('.buttonContainer')
        const buttonSideMenuContainer: Element | null = document.querySelector('#side-menu-button-container')
        const items: HTMLElement[] = gsap.utils.toArray<HTMLElement>('.item')
        const buttons: Element[] = Array.from(document.querySelectorAll(".button"));
        const buttonsSideMenu: Element[] = Array.from(document.querySelectorAll(".side-menu-button"))
        const itemsMap: Map<any, any> = new Map();
        const buttonsMap: Map<any, any> = new Map();

        items.forEach((item: HTMLElement, index: number): void => {
            itemsMap.set(item, buttons[index])
        });

        buttons.forEach((button: Element, index: number): void => {
            buttonsMap.set(button, items[index])
        })

        buttonsSideMenu.forEach((button: Element, index: number): void => {
            buttonsMap.set(button, items[index])
        })

        items.forEach((section: HTMLElement, i: number): void => {
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

        buttonContainer!.addEventListener("click", (e: Event): void => {
            const target: Element | null = (e.target! as HTMLElement).closest(".button");
            if (buttonsMap.has(target)) {
                buttonsMap.get(target).scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        });

        buttonSideMenuContainer!.addEventListener("click", (e: Event): void => {
            const target: Element | null = (e.target! as HTMLElement).closest(".side-menu-button");
            if (buttonsMap.has(target)) {
                buttonsMap.get(target).scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        });

        const setActive = (element: Element): void => {
            buttons.forEach((item: Element): void => {
                if (element === item) {
                    item.classList.add("activeButton");
                    let e: HTMLElement | null = document.querySelector<HTMLElement>('#box');
                    if (item.classList.contains('button1')) e!.style.transform = "rotate3d(0,0, 0, 90deg)";
                    if (item.classList.contains('button2')) e!.style.transform = "rotate3d(0,1, 0, 90deg)";
                    if (item.classList.contains('button3')) e!.style.transform = "rotate3d(0, 1, 0, 180deg)";
                    if (item.classList.contains('button4')) e!.style.transform = "rotate3d(0,1, 0, 270deg)";
                    if (item.classList.contains('button5')) e!.style.transform = "rotate3d(-1,0, 0, 90deg)";
                } else {
                    item.classList.remove("activeButton");
                }
            });
        }
    })

    return (
        <StyledItemContainer>
            <Item id={'wave-img-presentation'} isBgColorLight={false} keyItem={1} refProp={refPresentation}
                  icon={WaveIcon}
                  component={<Presentation animationDelay={blockAnimationDelay}/>}/>
            <Item id={'briefCase-img'} isBgColorLight={true} keyItem={2} refProp={refExperience} icon={BriefCaseIcon}
                  component={<Experience isBgColorLight={true} animationDelay={blockAnimationDelay}/>}/>
            <Item id={'study-img'} isBgColorLight={false} keyItem={3} refProp={refStudy} icon={GraduationIcon}
                  component={<Study isBgColorLight={false} animationDelay={blockAnimationDelay}/>}/>
            <Item id={'idea-img'} isBgColorLight={true} keyItem={4} refProp={refProjects} icon={IdeaIcon}
                  component={<Projects isBgColorLight={true} animationDelay={blockAnimationDelay}/>}/>
            <Item id={'skills-img'} isBgColorLight={false} keyItem={5} refProp={refContatcs} icon={LetterIcon}
                  component={<Skills animationDelay={blockAnimationDelay}/>}/>
            <SocialMediaContainer/>
        </StyledItemContainer>
    );
}

export default Main;
