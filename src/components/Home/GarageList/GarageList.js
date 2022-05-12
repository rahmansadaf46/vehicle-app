import React, { useEffect, useState } from 'react';
import GarageProfile from '../GarageProfile/GarageProfile';
// import { Link } from 'react-router-dom';
// import fakeData from '../../../fakeData';
// import { getDatabaseCart } from '../../../utilities/databaseManager';
// import MenuItem from '../MenuItem/MenuItem';
// import './Menu.css';

const GarageList = () => {
    const [garage, setGarge] = useState([]);
    // const [allItem, setAllItem] = useState([]);
    // const [search, setSearch] = useState('');
    // const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/garages')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setGarge(data);
                // setAllItem(data);
                // localStorage.setItem('item', JSON.stringify(data));

            })
        // const items = fakeData.slice(0, 6);
        // setItem(items);
    }, []);
    // console.log(allItem)
    // const itemData = localStorage.getItem('item')
    // useEffect(() => {
    //     const savedCart = getDatabaseCart();
    //     // console.log(savedCart);
    //     const productKeys = Object.keys(savedCart);
    //     const previousCart = productKeys.map(existingKey => {
    //         const product = JSON.parse(localStorage.getItem('item')).find(pd => pd._id === existingKey);
    //         // console.log(existingKey, savedCart[existingKey]);
    //         product.quantity = savedCart[existingKey];
    //         // console.log(product);
    //         return product;
    //     })
    //     // setProducts(previousCart);
    //     setCart(previousCart);
    // }, [allItem, itemData])



    // const handleSearch = value => {
    //     // console.log(value);
    //     const category = allItem.filter(pd => pd.category === value);
    //     setItem(category);
    //     // setSearch(value);

    // }




    return (
        <div style={{ borderBottom: '3px solid skyBlue', backgroundColor: '#E2F3F9', marginTop: '-50px' }} className="">
            {/* <div className="text-center cat">
                <nav>
                    <ul>
                        <li class="menu"><Link onClick={() => handleSearch('breakfast')}><b>Breakfast</b></Link></li>
                        <li class="menu"><Link onClick={() => handleSearch('lunch')}><b>Lunch</b></Link></li>
                        <li class="menu"><Link onClick={() => handleSearch('dinner')}><b>Dinner</b></Link></li>
                    </ul>
                </nav>
            </div> */}
            <div className="container mt-5 mb-5">
                <h2 style={{ color: '#EC6F54', fontFamily: "'Macondo', cursive" }} className="text-center mb-5 pt-5 "><u><b>Available Garage</b></u></h2>

                <div className="row">
                    {
                        garage.map(data => <div className="col-md-4"><GarageProfile garage={data}></GarageProfile></div>)
                    }
                </div>
            </div>


        </div>
    );
};

export default GarageList;