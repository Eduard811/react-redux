import React from "react"
import classes from "./Navbar.module.scss"
import Popup from "./Popup/Popup"
import Category from "./Category/Category"
import {useDispatch, useSelector} from "react-redux"
import {setCategory, setSortBy} from "../../redux/actions/filters";

const Navbar = React.memo(function Navbar () {

    const dispatch = useDispatch()

    const onSelectCategory = (index) => {
        dispatch(setCategory(index))
    }

    const onSelectSortType = (type) => {
        dispatch(setSortBy(type))
    }

    const {category, sortBy} = useSelector(({filters}) => filters)

    return (
        <div className={classes.navbar}>
            <Category
                activeCategory={category}
                onClickCategory={onSelectCategory}
                items={['Мясные', 'Вегитарианские', 'Гриль', 'Острые']} />
            <Popup
                activeSortType={sortBy.type}
                onClickSortType={onSelectSortType}
                items={[
                {name: 'популярности', type: 'popular', order: 'desc'},
                {name: 'цене', type: 'price', order: 'desc'},
                {name: 'алфавиту', type: 'name', order: 'asc'}
            ]} />
        </div>
    )
})

export default Navbar
