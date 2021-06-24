import { Link } from "react-router-dom"
import './About.sass'
import Cross from "../../Components/Cross/Cross"
import { useTranslation } from "react-i18next"

const About = () => {
    const { t, i18n } = useTranslation()

    return (<div className="about">
        <Link to="/menu">
            <Cross />
        </Link>
        <div className="about__main-title">{t('about.title')}</div>

        <div className="about__text-block">
            <div>{t('about.text1')}</div>
            <div>{t('about.text2')}</div>
        </div>

    </div>)
}

export default About