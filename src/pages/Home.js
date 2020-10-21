import React, {useEffect} from "react"
import Navbar from "../component/Navbar/Navbar"
import CardPizza from "../component/CardPizza/CardPizza"
import {useDispatch, useSelector} from "react-redux"
import {fetchPizzas} from "../redux/actions/pizzas"
import {addPizzaToCart} from "../redux/actions/cart"
import Loading from "../component/CardPizza/Loading/Loading"


const Home = () => {

    const items = useSelector(({pizzas}) => pizzas.items)
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
    const cartItems = useSelector(({cart}) => cart.items)
    const {category, sortBy} = useSelector(({filters}) => filters)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy])

    const handleAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }

    return (
        <div>
        <Navbar />
    <h1 style={{paddingTop: 32}}>Все пиццы</h1>
    <div className="row">
        {isLoaded
            ? items.map(obj =>
                <CardPizza
                    addedCount={cartItems[obj.id] && cartItems[obj.id].length }
                    onClickAddPizza={handleAddPizzaToCart}
                    key={obj.id}
                    {...obj} />)
            :
                Array(12)
                .fill(0)
                .map((_, index) => <Loading key={index} />)}
    </div>
        </div>
    )
}

export default Home