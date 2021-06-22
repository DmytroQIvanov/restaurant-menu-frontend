import { lazy, Suspense, useEffect, useState } from "react"
import DishSkeleton from "../../Components/site-skeletons/Dish-skeleton/DishSkeleton"
import { fetchDishes } from "../../Functions/firebaseFunction"
import { IDish } from "../../interfaces/IDish"
// import Dish from "./DishesPageComponents/Dish"

const Dish = lazy(() => import("./DishesPageComponents/Dish"))

const DishesPage: React.FC<{ type: string }> = ({ type }) => {
    const [dishes, setDishes] = useState<IDish[]>([])

    useEffect(() => {
        fetchDishes().then(result => {
            if (type == "popular") {
                return result.filter(elem => elem.popular)
            }
            return result.filter((elem) => elem.type == type)
        }).then((result) => { setDishes(result) })
    }, [type])
    return (
        <div>

            {dishes.map(dish => (
                <Suspense fallback={<DishSkeleton />}>
                    <Dish dish={dish} />
                </Suspense>

            ))}
        </div>
    )

}

export default DishesPage