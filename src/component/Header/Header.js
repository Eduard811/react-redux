import React from "react"
import classes from "./Header.module.scss"
import logoSvg from "../../assets/img/pizza-logo.svg"
import Button from "./Button/Button";
import {NavLink} from "react-router-dom";

const Header = () => (
    <div className="row">
    <div className="col">
        <NavLink to="/">
            <div className={classes.logo}>
                <img src={logoSvg} alt= '' />
                <div className={classes.logo__text}>
                    <h1>React Pizza</h1>
                    <p>самая вкусная пицца во вселенной</p>
                </div>
            </div>
        </NavLink>
    </div>
        <div className="col">
            <div className={classes.wrapper__button}>
                <Button />
            </div>
        </div>
    </div>

)

export default Header