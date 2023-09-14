import WaveIcon from "../assets/wave.svg";
import BriefCaseIcon from "../assets/briefcase.svg"
import GraduationIcon from "../assets/casquette-de-graduation.svg"
import IdeaIcon from "../assets/exchange-ideas.svg"
import LetterIcon from "../assets/letter.svg"

interface navLinkInterface {
    name: string,
    icon: string,

}

const navLinks: Array<navLinkInterface> =
    [
        {name: 'Présentation', icon: WaveIcon},
        {name: 'Expériences', icon: BriefCaseIcon},
        {name: 'Études', icon: GraduationIcon},
        {name: 'Projets personnels', icon: IdeaIcon},
        {name: 'Contacts', icon: LetterIcon},
    ]

interface SocialMediaInterface {
    name: string,
    icon: string,
    url: string,
}
const socialMediaLinks: Array<SocialMediaInterface> = []

export default {
    navLinks,

};