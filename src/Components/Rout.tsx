
import { Router, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';
import DishesPage from "../Pages/DishesPage/DishesPage";
import DishPage from "../Pages/DishPage/DishPage";
import brandIcon from '../assets/ico-brand.f5c1b5c3.svg'
import { useDispatch, useSelector } from "react-redux";
import { IDish } from "../interfaces/IDish";
import { lazy, Suspense, useEffect } from "react";
import { fetchDishes } from "../Functions/firebaseFunction";
import { filterArray, getDishes } from "../Redux/dishesSlice";




import './Rout.sass'


//Lazy loading

const NavBar = lazy(() => import("./NavBar/NavBar"))
const Settings = lazy(() => import("../Pages/Menu/Menu"))
const About = lazy(() => import("../Pages/About/About"))
const Profile = lazy(() => import("../Pages/Profile/Profile"))


const history = createBrowserHistory();
export const Rout = () => {
    const dishes = useSelector((state: { dishes: IDish[] }) => state.dishes)
    const dispatch = useDispatch()
    console.log(dishes)

    useEffect(() => {
        fetchDishes().then(result => {
            dispatch(getDishes(result))
            dispatch(filterArray({ type: 'popular' }))
        })
    }, [history])

    return (<>
        <Router history={history}>



            <Route path="/menu">
                <Suspense fallback={null}>
                    <Settings />
                </Suspense>
            </Route>

            <Route path="/dishes/:type">
                <Suspense fallback={<></>}>
                    <NavBar />
                </Suspense>

                <DishesPage />
            </Route>

            <Route path="/dish/:id">
                <NavBar />
                <DishPage />
            </Route>

            <Route path="/about">
                <About />
            </Route>

            <Route path="/profile">
                <Profile />
            </Route>

            <img src={brandIcon} className="rout__brand-icon" />
            <Redirect to="/dishes/popular" />

        </Router>
    </>)
}