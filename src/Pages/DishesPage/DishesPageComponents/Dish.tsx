import { IDish } from "../../../interfaces/IDish"
import './Dish.sass'
import heartBlack from '../../../assets/heart-black.png'
import heartRed from '../../../assets/heavy-black-heart_2764.3c32be08.png'
import { useState } from "react"
import { Link } from "react-router-dom"

const Dish: React.FC<{ dish: IDish }> = ({ dish }) => {
    const [favourite, setFavourite] = useState(false)
    
    return (
        <div className="dish">
            <Link to={`/dish/${dish.id}`} className="dish__image-container">
                <img src={dish?.image} className="dish__image" />
                <img className="dish__heart-icon" src={favourite ? heartRed : heartBlack} onClick={() => { setFavourite(!favourite) }} />
                <div className="dish__cooking-time">{dish.cookingTime} мин.</div>
            </Link>
            <div className="dish__info-container">
                <div className="dish__name">{dish.name}</div>
                <div className="dish__price">{dish.price} ₴</div>
            </div>
        </div>
    )
}

export default Dish