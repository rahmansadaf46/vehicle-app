import React, { useEffect, useState } from 'react';
import GarageProfile from '../GarageProfile/GarageProfile';
// import { Link } from 'react-router-dom';
// import fakeData from '../../../fakeData';
// import { getDatabaseCart } from '../../../utilities/databaseManager';
// import MenuItem from '../MenuItem/MenuItem';
// import './Menu.css';

const GarageList = ({handleLocation,area}) => {
    const [garage, setGarage] = useState([]);
    // const [allItem, setAllItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [noData, setNoData] = useState(false);
    // const [cart, setCart] = useState([]);
    useEffect(() => {
        setLoading(true)
        setGarage([])
        setNoData(false)
        fetch('http://localhost:4200/garages')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // setGarage(data);
                setLoading(false)
                let filterData = data.filter(garage=>  {return garage.area.some(data=> data === area)});
                console.log(filterData) 
                setGarage(filterData);
                if(filterData.length > 0){
                    setNoData(false)
                }else{
                    setNoData(true)
                }
                // setAllItem(data);
                // localStorage.setItem('item', JSON.stringify(data));

            })
        // const items = fakeData.slice(0, 6);
        // setItem(items);
    }, [area]);
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
        <div style={{ borderBottom: '3px solid skyBlue', backgroundColor: '#E2F3F9', marginTop: '0px',minHeight:'690px' }} className="">
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
                
                <h4 className='text-center mb-3 pt-5  text-primary'>Selected Location: <span className='text-uppercase text-dark'>{sessionStorage.getItem('location')}</span> 
                </h4>
                <div className='text-center'>
                <button onClick={()=> handleLocation()} class="btn btn-primary mb-3 font-weight-bold" type="submit">Update Location</button>
                </div>
                <h2 style={{ color: '#EC6F54' }} className="text-center mb-4  "><u><b>Available Garage</b></u></h2>
                {loading && <h2 className='text-center'>Loading...</h2>}
                {noData && <h2 className='text-center text-danger mt-5'>No Garage Found</h2>}
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