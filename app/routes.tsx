import * as React from "react";
import {IndexRoute, Route} from "react-router";

import { App } from "./containers/App";
import CounterPage from "./containers/CounterPage";
import { Home } from "./components/Home";

export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ Home }/>
        <Route path="/counter" component={ CounterPage }/>
    </Route>
);