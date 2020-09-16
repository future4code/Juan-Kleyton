import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './pages/Admin';
import CandidateDetails from './pages/CandidateDetails';
import CandidatesList from './pages/CandidatesList';
import CreateTrip from './pages/CreateTrip';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SubmitCandidature from './pages/SubmitCandidature';
import TripDetails from './pages/TripDetails';
import TripsList from './pages/TripsList';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <Home />
                </Route>
                <Route path={"/candidature"}>
                    <SubmitCandidature />
                </Route>
                <Route exact path={"/login"}>
                    <Login />
                </Route>
                <Route exact path={"/register"}>
                    <Register />
                </Route>
                <Route exact path={"/admin"}>
                    <Admin />
                </Route>
                <Route exact path={"/admin/trips"}>
                    <TripsList />
                </Route>
                <Route path={"/admin/trips/create"}>
                    <CreateTrip />
                </Route>
                <Route exact path={"/admin/trips/:trip_id"}>
                    <TripDetails />
                </Route>
                <Route exact path={"/admin/trips/:trip_id/candidates"}>
                    <CandidatesList />
                </Route>
                <Route path={"/admin/trips/:trip_id/candidates/:candidate_id"}>
                    <CandidateDetails />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;