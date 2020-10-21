import React from "react"
import {Route, Switch} from "react-router-dom"
import Header from "./component/Header/Header"
import Home from "./pages/Home"
import Cart from "./pages/Cart"


function App() {
    return (
        <div className="container">
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cart" exact component={Cart} />
            </Switch>
        </div>
    )
}

export default App