import React, { Component } from "react";
import HomePage from "./HomePage";
import GroupMemberPage from "./GroupMemberPage";
import IntroPage from "./IntroPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => (<HomePage/>)}
                        />
                        <Route
                            exact
                            path="/home"

                            render={() => (<HomePage/>)}
                        />
                        <Route
                            exact
                            path="/overview"
                            render={() => (<IntroPage/>)}
                        />
                        <Route
                            exact
                            path="/groupmember"
                            render={() => (<GroupMemberPage/>)}
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
