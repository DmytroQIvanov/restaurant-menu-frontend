import { IDish } from "../../../interfaces/IDish"
import './Dish.sass'
import heartBlack from '../../../assets/heart-black.png'
import heartRed from '../../../assets/heavy-black-heart_2764.3c32be08.png'
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Dish: React.FC<{ dish: IDish }> = ({ dish }) => {
    const [favourite, setFavourite] = useState(false)
    const [style, setStyle] = useState('dish-load')
    const params: { id: string } = useParams()

    useEffect(() => {
        const result = localStorage.getItem('favourites');
        let stringified: IDish[] = []
        if (result) {
            stringified = JSON.parse(result);
        }
        stringified.forEach(element => {
            if (element.name == dish.name) {

                setFavourite(true)
            }

        });
    }, [params.id])

    const { t, i18n } = useTranslation()

    // const addToFavourite = () => {
    //     const favouritesJSON = localStorage.getItem("favourites")
    //     let favourites: IDish[] = []
    //     if (favouritesJSON) {
    //         favourites = JSON.parse(favouritesJSON)
    //     }
    //     favourites.forEach(element => {
    //         if (element.name == dish.name) {

    //             setFavourite(false);
    //         }

    //     });
    //     if (favourite == true) {
    //         favourites.push(dish)
    //         const result = JSON.stringify(favourites)
    //         setFavourite(true)
    //         localStorage.setItem('favourites', result)
    //     }
    // }


    return (
        <div className={style} >
            <Link to={`/dish/${dish.id}`} className="dish__image-container">
                <img src={dish?.image} onLoad={() => setStyle('dish')} className="dish__image" />
                <img className="dish__heart-icon" src={favourite ? heartRed : heartBlack} onClick={() => {
                    setFavourite(!favourite)
                    // addToFavourite()
                }} />
                <div className="dish__cooking-time">{dish.cookingTime} {t('dish.cookingTime')}</div>
            </Link>
            <div className="dish__info-container">
                <div className="dish__name">{dish.name}</div>
                <div className="dish__price">{dish.price} ₴</div>
                {/* {params.id ? <div className="dish__plus">+</div> : <></>} */}


            </div>
        </div>
    )
}

export default Dish