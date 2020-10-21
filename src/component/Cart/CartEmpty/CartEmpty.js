import React from "react";
import classes from "./CartEmpty.module.scss"
import {NavLink} from "react-router-dom";
import emptyCartImg from "../../../assets/img/empty-cart.png"

const CartEmpty = () => {
    return (
        <div className={classes.cart__empty__wrapper}>
            <div className={classes.cart__empty}>
                <h2>Корзина пустая  <span role="img" aria-label="smile">😕</span></h2>
                <p>Вероятнее всего, вы не заказали пиццу.</p>
                <p>Что бы заказать пиццу - перейдите на главную страницу.</p>
                <img src={emptyCartImg} alt=""/>
                <div className={classes.cart__empty__exit}>
                    <NavLink to="/">
                        <button>
                            <span>Вернуться назад</span>
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default CartEmpty