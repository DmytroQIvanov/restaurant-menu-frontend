import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchDish } from "../../Functions/firebaseFunction"
import { IDish } from "../../interfaces/IDish"
import heart from '../../assets/heart-black.png'

const DishPage = () => {
    const params: { id: string } = useParams()
    const [dish, setDish] = useState<IDish>()
    useEffect(() => {
        fetchDish(params.id).then(elem => setDish(elem))
    }, [])
    return (<div className="dish">
        <div className="dish__image-container">
            <img src={dish?.image} className="dish__image" />
            <img className="dish__heart-icon" src={heart} />
        </div>
        <div className="dish__info-container">
            <div className="dish__name">{dish?.name}</div>
            <div className="dish__price">{dish?.price} ₴</div>
        </div>
    </div>)
}

export default DishPage