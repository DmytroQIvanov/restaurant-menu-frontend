import { Link } from "react-router-dom"
import "./NavBar.sass"

//images
import heart from '../../assets/heavy-black-heart_2764.3c32be08.png'
import popular from '../../assets/popular.png'
import bread from '../../assets/bread_1f35e.336e8885.png'
import menu from '../../assets/list.png'
import find from '../../assets/searching-magnifying-glass.png'
import breakfasts from '../../assets/cooking_1f373.0f419950.png'
import bakeryProducts from "../../assets/croissant_1f950.9299034d.png"

import { useEffect, useState } from "react"
import FindBlock from "../FindBlock/FindBlock"
import { useDispatch } from "react-redux"
import { filterArray } from "../../Redux/dishesSlice"
import { useTranslation } from "react-i18next"


enum typeDish {
    breakfast = "breakfast",
    popular = "popular",
    bakery = "bakery",
    favourite = "favourite",
    bread = 'bread'
}
const NavBar = () => {
    const centerTitle = 'ХЛБНЙ'
    const [findBlock, setFindBlock] = useState(false)

    const [selectedItem, setSelectedItem] = useState<typeDish>(typeDish.popular)
    const onSelectItem = (type: typeDish) => {
        setSelectedItem(type)
    }
    const dispatch = useDispatch()
    const { t, i18n } = useTranslation()

    useEffect(() => {
        const result = localStorage.getItem('language')
        if (result) {
            console.log(result)
            // const parsedLanguage = JSON.parse(result)
            if (result == 'ru') {
                i18n.changeLanguage('ru')
            } else if (result == 'en') {
                i18n.changeLanguage('en')
            } else {
                i18n.changeLanguage('ru')
            }
        }
    }, [])

    return (

        <div className="nav-bar">
            {findBlock ? <FindBlock setFindBlock={setFindBlock} /> : <>
                <div className="nav-bar__title-block">
                    <Link to="/menu"><img src={menu} className="nav-bar__menu-icon" /></Link >
                    <div className="nav-bar__central-title-container">
                        <a className="nav-bar__central-title">{centerTitle}</a>
                        <a className="nav-bar__central-title-adress">
                            {t('nav-panel.adress')}
                        </a>
                    </div>
                    <div onClick={() => {
                        dispatch(filterArray({ find: '' }))
                        setFindBlock(!findBlock)

                    }}>
                        <img src={find} alt="find" className="nav-bar__find-icon" />
                    </div>
                </div>
                <div className="nav-bar__items-block">
                    <Link to="/dishes/popular"
                        className={`nav-bar__item-block ${selectedItem == typeDish.popular && "nav-bar__background_selected"}`}
                        onClick={() => onSelectItem(typeDish.popular)}

                    >
                        <div>
                            <img src={popular} alt="heart-item" className=""></img>
                        </div>
                        <a className="nav-bar__title-text">
                            {t("nav-panel.popular")}
                        </a>
                    </Link>
                    <Link to="/dishes/favourite"
                        className={`nav-bar__item-block ${selectedItem == typeDish.favourite && "nav-bar__background_selected"}`}
                        onClick={() => onSelectItem(typeDish.favourite)}
                    >
                        <div>
                            <img src={heart} alt="heart-item" className=""></img>
                        </div>
                        <a className="nav-bar__title-text">{t('nav-panel.favourite')}</a>
                    </Link>
                    <Link to="/dishes/bread"
                        className={`nav-bar__item-block ${selectedItem == typeDish.bread && "nav-bar__background_selected"}`}
                        onClick={() => onSelectItem(typeDish.bread)}>
                        <div>
                            <img src={bread} alt="heart-item" className=""></img>
                        </div>
                        <a className="nav-bar__title-text">{t('nav-panel.bread')}</a>
                    </Link>
                    <Link to="/dishes/breakfasts"
                        className={`nav-bar__item-block ${selectedItem == typeDish.breakfast && "nav-bar__background_selected"}`}
                        onClick={() => onSelectItem(typeDish.breakfast)}>
                        <div>
                            <img src={breakfasts} alt="heart-item" className=""></img>
                        </div>
                        <a className="nav-bar__title-text">{t('nav-panel.breakfast')}</a>
                    </Link>
                    <Link to="/dishes/bakeryProducts"
                        className={`nav-bar__item-block ${selectedItem == typeDish.bakery && "nav-bar__background_selected"}`}
                        onClick={() => onSelectItem(typeDish.bakery)}>
                        <div>
                            <img src={bakeryProducts} alt="bakery-products-item" className=""></img>
                        </div>
                        <a className="nav-bar__title-text">{t('nav-panel.bakery')}</a>
                    </Link>

                </div>

            </>}


        </div>
    )
}

export default NavBar