import React, {useState} from "react"
import classes from "./CardPizza.module.scss"


const CardPizza = ({id, name, imageUrl, price, types, sizes, onClickAddPizza, addedCount}) => {

    const availableTypes = ['тонкое', 'традиционное']
    const availableSizes = [26, 30, 40]
    const [activeType, setActiveType] = useState(types[0])
    const [activeSize, setActiveSize] = useState(0)

    const onSelectType = (index) => {
        setActiveType(index)
    }

    const onSelectSize = (index) => {
        setActiveSize(index)
    }

    const onAddPizza = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            size: availableSizes[activeSize],
            type: availableTypes[activeType]
        }
        onClickAddPizza(obj)
    }

    return (
        <div className="col">
        <div className={classes.pizza}>
            <div>
            <img src={imageUrl} alt=""/>
            <h1 className="pt-3">{name}</h1>
                <div className={classes.pizza__setting}>
                    <ul>
                        {availableTypes.map((type, index) => (
                            !types.includes(index) ?
                                <li
                                    key={type}
                                    style={{cursor:"default"}}
                                    className={classes.pizza__disabled}>{type}</li>
                                :
                                <li
                                    key={type}
                                    onClick={() => onSelectType(index)}
                                    className={activeType === index ? `${classes.pizza__active}` : ''}>{type}</li>))}


                        {availableSizes.map((size, index) => (
                            !sizes.includes(size) ?
                                <li
                                    key={size}
                                    style={{cursor:"default"}}
                                    className={classes.pizza__disabled}>{size} см.</li>
                                :
                                <li
                                    key={size}
                                    onClick={() => onSelectSize(index)}
                                    className={activeSize === index ? `${classes.pizza__active}` : ''}>{size} см.</li>))}
                    </ul>
                </div>
                <div className={classes.pizza__add}>
                    <p>от {price} ₽</p>
                    <button onClick={onAddPizza}><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"/>
                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"/>
                    </svg><span>Добавить</span>{addedCount && <div className={classes.counter}>{addedCount}</div>}</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CardPizza