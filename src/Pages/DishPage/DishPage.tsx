import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchDish } from "../../Functions/firebaseFunction"
import { IDish } from "../../interfaces/IDish"
import Dish from "../DishesPage/DishesPageComponents/Dish"

const DishPage = () => {
    const params: { id: string } = useParams()
    const [dish, setDish] = useState<IDish | null>()
    useEffect(() => {
        fetchDish(params.id).then(elem => setDish(elem))
    }, [])
    if (dish) return <Dish dish={dish} />

    return <></>

}

export default DishPage