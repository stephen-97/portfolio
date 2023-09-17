import WaveIcon from "../assets/wave.svg";
import BriefCaseIcon from "../assets/briefcase.svg"
import GraduationIcon from "../assets/casquette-de-graduation.svg"
import IdeaIcon from "../assets/exchange-ideas.svg"
import LetterIcon from "../assets/letter.svg"
import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import TwitterIcon from "../assets/twitter.svg"

interface navLinkInterface {
    name: string,
    icon: string,
    alt: string,
}

const navLinks: Array<navLinkInterface> =
    [
        {name: 'Présentation', icon: WaveIcon, alt: 'Wave Icon'},
        {name: 'Expériences', icon: BriefCaseIcon, alt: 'BriefCase Icon'},
        {name: 'Études', icon: GraduationIcon, alt: 'Graduation Icon'},
        {name: 'Projets personnels', icon: IdeaIcon, alt: 'Idean Icon'},
        {name: 'Contacts', icon: LetterIcon, alt: 'Contact Icon'},
    ]

interface SocialMediaInterface {
    name: string,
    icon: string,
    url: string,
    alt: string,
}

const socialMediaLinks: Array<SocialMediaInterface> = [
    {name: 'GitHub', icon: GithubIcon, url: 'https://github.com/stephen-97', alt: 'Github Link'},
    {name: 'Linkedin', icon: LinkedinIcon, url: 'https://www.linkedin.com/in/stephen-loiola-bastos-04351814b/', alt: 'Linkedin Link'},
    {name: 'Twiiter', icon: TwitterIcon, url: 'https://twitter.com/?lang=fr', alt: 'Twitter Link'},
]

interface ProjectInterface {
    title: string,
    description: string,
    tags: Array<string>,
    githubLink: string,
    demoLink?: string,
}

const projects: Array<ProjectInterface> = [
    {
        title: 'Portfolio V1',
        description: "Mon premier portfolio (celui ci!) et il y aura probablement d'autres versions!",
        tags: ["React", "Typescript", "HTML", "CSS", "Responsive"],
        githubLink: 'https://github.com/stephen-97/portfolio'
    },
    {
        title: "Projet d'étude",
        description: "Simulation d'une application d'adoption d'animaux de compagnie",
        tags: ["React Native", "Javascript", "Symfony", "Docker"],
        githubLink: 'https://gitlab.com/Stephen-97/avis_r_animaux',
        demoLink: 'https://www.linkedin.com/posts/stephen-loiola-bastos-04351814b_reactnative-developpeur-expo-activity-7075197754867621888-aWGH?utm_source=share&utm_medium=member_desktop',
    },
]
export default {

    // Data
    navLinks,
    socialMediaLinks,
    projects
};