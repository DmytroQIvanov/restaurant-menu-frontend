import { Link } from "react-router-dom"
import "./NavBar.sass"

//images
import heart from '../../assets/heavy-black-heart_2764.3c32be08.png'
import popular from '../../assets/popular.png'
import bread from '../../assets/bread_1f35e.336e8885.png'
import menu from '../../assets/list.png'
import find from '../../assets/searching-magnifying-glass.png'
import breakfasts from '../../assets/cooking_1f373.0f419950.png'
import { useState } from "react"
import FindBlock from "../FindBlock/FindBlock"


enum typeDish {
    breakfasts = "breakfasts",
    popular = "popular",
    bakeryProducts = "bakeryProducts",
    favourite = "favourite",
    bread = 'bread'
}
const NavBar = () => {
    const centerTitle = 'ХЛБНЙ'
    const centerTitleAdress = 'Большая Васильковская 67/7'
    const [findBlock, setFindBlock] = useState(false)

    const [selectedItem, setSelectedItem] = useState<typeDish>(typeDish.popular)
    const onSelectItem = (type: typeDish) => {
        setSelectedItem(type)
    }

    return (

        <div className="nav-bar">
            {findBlock ? <FindBlock setFindBlock={setFindBlock}/> : <>
                <div className="nav-bar__title-block">
                    <Link to="/settings"><img src={menu} className="nav-bar__menu-icon" /></Link >
                    <div className="nav-bar__central-title-container">
                        <a className="nav-bar__central-title">{centerTitle}</a>
                        <a className="nav-bar__central-title-adress">{centerTitleAdress}</a>
                    </div>
                    <div onClick={() => { setFindBlock(!findBlock) }}>
                        <img src={find} alt="find" className="nav-bar__find-icon" />
                    </div>
                </div>
                <div className="nav-bar__items-block">
                    <Link to="/popular"
                        className={`nav-bar__item-block ${selectedItem == typeDish.popular && "nav-bar__background_selected"}`}
                        onClick={() => onSelectItem(typeDish.popular)}

                    >
                        <div>
                            <img src={popular} alt="heart-item" className=""></img>
                        </div>
                        <a className="nav-bar__title-text">Популярные</a>
                    </Link>
                    <Link to="/favourite"
                        className={`nav-bar__item-block ${selectedItem == typeDish.favourite && "nav-bar__background_selected"}`}
                        onClick={() => onSelectItem(typeDish.favourite)}
                    >
                        <div>
                            <img src={heart} alt="heart-item" className=""></img>
                        </div>
                        <a className="nav-bar__title-text">Любимые</a>
                    </Link>
                    <Link to="/bread"
                        className={`nav-bar__item-block ${selectedItem == typeDish.bread && "nav-bar__background_selected"}`}
                        onClick={() => onSelectItem(typeDish.bread)}>
                        <div>
                            <img src={bread} alt="heart-item" className=""></img>
                        </div>
                        <a className="nav-bar__title-text">Хлеб</a>
                    </Link>
                    <Link to="/breakfasts"
                        className={`nav-bar__item-block ${selectedItem == typeDish.breakfasts && "nav-bar__background_selected"}`}
                        onClick={() => onSelectItem(typeDish.breakfasts)}>
                        <div>
                            <img src={breakfasts} alt="heart-item" className=""></img>
                        </div>
                        <a className="nav-bar__title-text">Завтраки</a>
                    </Link>

                </div>

            </>}


        </div>
    )
}

export default NavBar