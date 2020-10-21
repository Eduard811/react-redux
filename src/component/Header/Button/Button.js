import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import classes from "./Button.module.scss";
import cartSvg from "../../../assets/img/cart.svg";

const Button = () => {

    const {totalPrice, totalCount} = useSelector(({cart}) => cart)

    return (
        <NavLink to="/cart" className={classes.button}>
            <span className={classes.button__price}>{totalPrice} ₽</span>
            <div className={classes.button__decoration} />
            <div className={classes.button__cart}>
            <img src={cartSvg} alt="" />
            <span className={classes.button__value}>{totalCount}</span>
            </div>
        </NavLink>
    )
}

export default Button
