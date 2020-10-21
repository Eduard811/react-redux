import React from "react";
import classes from "./Category.module.scss"

const Category = ({activeCategory, items, onClickCategory}) => {

    return (
        <div className={classes.category}>
            <div>
                <button className={activeCategory === null ? `${classes.active}` : ''}
                        onClick={() => onClickCategory(null)}>
                    <span>Все</span>
                </button>
            </div>
            {items && items.map((name, index) => (
                <div key={`${name}_${index}`}>
                    <button className={activeCategory === index ? `${classes.active}` : ''}
                            onClick={() => onClickCategory(index)}>
                        <span>{name}</span>
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Category