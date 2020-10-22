import React from "react";
import CartFull from "../component/Cart/CartFull/CartFull";
import {useSelector} from "react-redux";
import CartEmpty from "../component/Cart/CartEmpty/CartEmpty";

const Cart = () => {
    const {totalCount} = useSelector(({cart}) => cart)
    return (
        totalCount ? <CartFull /> : <CartEmpty />
    )
}

export default Cart