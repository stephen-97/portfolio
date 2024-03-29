import WaveIcon from "../assets/wave.svg";
import BriefCaseIcon from "../assets/briefcase.svg"
import GraduationIcon from "../assets/casquette-de-graduation.svg"
import IdeaIcon from "../assets/exchange-ideas.svg"
import LetterIcon from "../assets/letter.svg"
import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import TwitterIcon from "../assets/twitter.svg"
import CVIcon from "../assets/cv.svg"

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
        {name: 'Projets', icon: IdeaIcon, alt: 'Idean Icon'},
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
    {
        name: 'Linkedin',
        icon: LinkedinIcon,
        url: 'https://www.linkedin.com/in/stephen-loiola-bastos-04351814b/',
        alt: 'Linkedin Link'
    },
    {name: 'Twiiter', icon: TwitterIcon, url: 'https://twitter.com/LuciusAskeladd_', alt: 'Twitter Link'},
    {name: 'CV', icon: CVIcon, url: '/stephenCV', alt: 'CV Stephen Loiola Bastos Link'},
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
        description: "Mon premier portfolio (celui ci!). Il y aura probablement d'autres versions !",
        tags: ["React", "Typescript", "HTML", "CSS", "Responsive"],
        githubLink: 'https://github.com/stephen-97/portfolio'
    },
    {
        title: "Projet d'étude",
        description: "Simulation d'une application d'adoption d'animaux de compagnie.",
        tags: ["React Native", "Javascript", "Symfony", "Docker"],
        githubLink: 'https://gitlab.com/Stephen-97/avis_r_animaux',
        demoLink: 'https://www.linkedin.com/posts/stephen-loiola-bastos-04351814b_reactnative-developpeur-expo-activity-7075197754867621888-aWGH?utm_source=share&utm_medium=member_desktop',
    },
]

interface ISchoolExperience {
    name: string,
    schoolName: string,
    tags: Array<string>
}

const schoolExperiences: Array<ISchoolExperience> = [
    {
        name: 'RNCP36009 Directeur de projet informatique (Bac+5)',
        schoolName: 'Aston Ecole',
        tags: ['Architecture logicielle', 'Cloud Azure', 'Cybersécurité', 'Gestion de projet', 'Budgétisation', 'Normes ISO'],
    },
    {
        name: "RNCP31678 Concepteur et Développeur d'application (Bac+3/4)",
        schoolName: '2iTech Academy by M2i',
        tags: ['Merise', 'UML', 'Javascript / Typesript', 'Symfony', 'React', 'Node / Express', 'React Native', 'AWS'],
    },
    {
        name: 'L2 Informatique (Bac+2)',
        schoolName: 'Paris Descartes',
        tags: ['C', 'Java', 'OCaml', 'Algorithme', 'HTML', 'CSSO', 'Javascript', 'PHP'],
    }
]

const config  = {
    navLinks,
    socialMediaLinks,
    projects,
    schoolExperiences,
}
export default config