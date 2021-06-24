import { lazy, Suspense, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import DishSkeleton from "../../Components/site-skeletons/Dish-skeleton/DishSkeleton"
import { IDish } from "../../interfaces/IDish"
import { filterArray } from "../../Redux/dishesSlice"

const Dish = lazy(() => import("./DishesPageComponents/Dish"))

const DishesPage = () => {

    const dispatch = useDispatch()
    const params: { type: string } = useParams()
    const type = params.type


    const dishes = useSelector(
        (state: { dishes: { filteredArray: IDish[], dishesArray: IDish[] } }) => state.dishes.filteredArray)
    console.log(dishes)
    useEffect(() => {
        dispatch(filterArray({ type }))
    }, [type])



    return (
        <div>

            {dishes.map((dish, indx) => (
                <Suspense fallback={<></>}>
                    <Dish dish={dish} key={indx} />
                </Suspense>

            ))}
        </div>
    )

}

export default DishesPage