import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

import About from '../About/About';
import Menu from '../Menu/Menu';
import Search from '../Search/Search';
import { getDatabaseCart } from '../../../utilities/databaseManager';
import GarageList from '../GarageList/GarageList';
// import fakeData from '../../../fakeData';

const Home = () => {
    const [cart, setCart] = useState([]);
    const itemData = localStorage.getItem('item')
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = JSON.parse(localStorage.getItem('item')).find(pd => pd._id === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart);
    }, [itemData])
    return (
        <div>
            <Header cart={cart.length}></Header>
            <Search></Search>
            <GarageList></GarageList>

            <Menu></Menu>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;