import { Link } from "react-router-dom"
import './Menu.sass'
import phone from '../../assets/call.png'
import Cross from "../../Components/Cross/Cross"
import about from '../../assets/information.png'
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import profile from '../../assets/user.png'
import downArrow from '../../assets/down-arrow.png'

export enum ENUMlanguage {
    EN = "EN",
    RU = "RU",
}


const Menu = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<ENUMlanguage>(ENUMlanguage.RU)

    const [languagePanel, setLanguagePanel] = useState<boolean>(false)


    const { t, i18n } = useTranslation()
    useEffect(() => {
        const language = localStorage.getItem('language')
        if (language == 'ru') {
            setSelectedLanguage(ENUMlanguage.RU)
        } else if (language == 'en') {
            setSelectedLanguage(ENUMlanguage.EN)
        }
    }, [])


    return (
        <div className="menu">

            {/* Page title */}
            <Link to="dishes/popular">
                <Cross />
            </Link>
            <div className="menu__main-title">{t("menu.yourTable")}</div>

            {/* Control panel */}
            <div className="menu_control-elem-container">
                <Link to="/profile" className="menu__control-elem-link">
                    <img src={profile} />
                    <div className="menu__control-elem">{t("menu.yourProfile")}</div>
                </Link>
                <Link to="/about" className="menu__control-elem-link">
                    <img src={about} />
                    <div className="menu__control-elem">{t("menu.about")}</div>
                </Link>

            </div>



            {/* Contacts panel */}
            <div className="menu__contacts">
                <div className="menu__number">
                    <img src={phone} />+380979197048</div>
                <a className="menu__number" href="https://teleg.run/IvanovD">Telegram</a>
            </div>


            {/* Choose language */}
            <div className="menu__language-panel">
                <a className="menu__selected-language" onClick={() => setLanguagePanel(!languagePanel)}>{selectedLanguage}
                    <img src={downArrow} /></a>
                {languagePanel &&
                    <ul className="menu__list-of-languages" >
                        <li
                            className={`menu__language-li ${selectedLanguage == ENUMlanguage.RU && "menu__language_selected"}`}
                            onClick={() => {
                                setSelectedLanguage(ENUMlanguage.RU)
                                setLanguagePanel(false)
                                i18n.changeLanguage('ru')
                                localStorage.setItem('language', 'ru')
                            }}
                        >{ENUMlanguage.RU}</li>
                        <li
                            className={`menu__language-li ${selectedLanguage == ENUMlanguage.EN && "menu__language_selected"}`}
                            onClick={() => {
                                setSelectedLanguage(ENUMlanguage.EN)
                                setLanguagePanel(false)
                                i18n.changeLanguage('en')
                                localStorage.setItem('language', 'en')
                            }}
                        > {ENUMlanguage.EN}</li>
                    </ul>
                }
            </div>

        </div >
    )
}

export default Menu