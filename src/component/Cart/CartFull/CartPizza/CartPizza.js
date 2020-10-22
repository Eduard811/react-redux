import React from "react"
import classes from "./CartPizza.module.scss"



const CartPizza = ({id, name, size, type, totalPrice, totalCount, onRemove, onPlus, onMinus, img}) => {

    const handleRemoveClick = () => {
        onRemove(id)
    }

    const handleMinusItem = () => {
        onMinus(id)
    }

    const handlePlusItem = () => {
        onPlus(id)
    }

    return (
        <div className={classes.cart__pizza}>
            <div className={classes.cart__pizza__start}>
                <img src={img} alt=""/>
                <div className={classes.cart__pizza__descriptor}>
                    <h3>{name}</h3>
                    <p>{type} тесто, {size} см.</p>
                </div>
            </div>
            <div className={classes.counter__price__delete}>
                <div className={classes.counter}>
                    <div onClick={handleMinusItem} className={classes.circle}>
                        <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"/>
                        </svg>
                    </div>
                    <span>{totalCount}</span>
                    <div onClick={handlePlusItem} className={classes.circle}>
                        <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"/>
                            <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"/>
                        </svg>
                    </div>
                </div>
                <div className={classes.price}>
                    <span>{totalPrice} ₽</span>
                </div>
                <div onClick={handleRemoveClick} className={classes.delete}>
                    <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#D7D7D7"/>
                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#D7D7D7"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default CartPizza