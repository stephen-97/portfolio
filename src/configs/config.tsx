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

export default {
    navLinks,
    socialMediaLinks,
};