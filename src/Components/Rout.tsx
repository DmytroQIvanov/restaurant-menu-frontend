import NavBar from "./NavBar/NavBar"

import { Router, Route, Redirect, Switch, useParams } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Settings from "../Pages/Settings/Settings";
import DishesPage from "../Pages/DishesPage/DishesPage";
import DishPage from "../Pages/DishPage/DishPage";
import { GoogleMapComponent } from "./GoogleMap/GoogleMap";
import brandIcon from '../assets/ico-brand.f5c1b5c3.svg'

const history = createBrowserHistory();
export const Rout = () => {

    return (<>
        <Router history={history}>

            {/* <Switch> */}
            <NavBar />
            <Route path="/settings"><Settings /></Route>

            <Route path="/popular">
                <DishesPage type={'popular'} />
            </Route>
            <Route path="/breakfasts">
                <DishesPage type={'breakfasts'} />
            </Route>
            <Route path="/bread">
                <DishesPage type={'bread'} />
            </Route>

            <Route path="/favourite">
                <DishesPage type={'favourite'} />
            </Route>
            {/* </Switch> */}

            <Route path="/dish/:id">
                <DishPage />
            </Route>
            <img src={brandIcon} />
            <Redirect to="/popular" />

        </Router>
    </>)
}