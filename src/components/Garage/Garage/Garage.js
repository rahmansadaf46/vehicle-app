import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import fakeData from '../../../fakeData';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import './Item.css'
import Iframe from 'react-iframe';
import MessengerCustomerChat from 'react-messenger-customer-chat';

import { getDatabaseCart } from '../../../utilities/databaseManager';


const Garage = () => {
    const { id } = useParams();
    const [garage, setGarage] = useState({});
    const [services, setServices] = useState([]);
    // const [count, setCount] = useState(1);
    const itemData = localStorage.getItem('item')
    useEffect(() => {
        // setAllitem(JSON.parse(itemData))
        fetch('http://localhost:4200/garageProfile/' + id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setGarage(data);
                // setAllItem(data);
                // localStorage.setItem('item', JSON.stringify(data));

            })
        fetch('http://localhost:4200/service/' + id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data)
                // setGarage(data);
                // setAllItem(data);
                // localStorage.setItem('item', JSON.stringify(data));

            })
        // const item = JSON.parse(itemData).find(pd => pd._id === id);
        // setItem(item);
        window.scrollTo(0, 0);
    }, [itemData, id])
    const [cart, setCart] = useState([]);

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

    // const handleAddProduct = (product) => {
    //     const toBeAddedKey = product._id;
    //     const sameProduct = cart.find(pd => pd._id === toBeAddedKey);
    //     let newCount;
    //     let newCart;
    //     if (sameProduct) {
    //         newCount = sameProduct.quantity + count;
    //         sameProduct.quantity = newCount;
    //         // debugger;
    //         const others = cart.filter(pd => pd._id !== toBeAddedKey);
    //         newCart = [...others, sameProduct]
    //         addToDatabaseCart(sameProduct._id, newCount);
    //     }
    //     else {
    //         product.quantity = count;
    //         newCart = [...cart, product];
    //         addToDatabaseCart(product._id, product.quantity);
    //     }
    //     setCart(newCart);
    //     // window.location.reload();

    // }

    // const incrementCount = () => {
    //     setCount(count + 1);
    // };
    // const decrementCount = () => {
    //     setCount(count - 1);
    //     if (count > 0) {
    //         setCount(count - 1);
    //         // props.handleRemoveProduct(props.product);
    //     }
    //     if (count <= 1) {
    //         setCount(1);
    //     }

    // };
    console.log(garage.facebook);
    return (
        <div>
            <Header cart={cart.length}></Header>
            <div style={{ backgroundColor: '#E2F3F9' }}>
                <div className="container mt-5 py-5">
                    <div className="row">
                        <div className="col-md-6 text-center mt-3 pt-5">
                            <p style={{ fontSize: '80px', color: '#676E9C' }} className="mt-2 ">{garage.title}</p>
                            <div style={{ lineHeight: '0.9', color: 'black', fontSize: '25px', }}>
                                <p className="text-success font-weight-bold">{garage.description}</p>
                                <p>Contact no: <span className="text-primary"><b>{garage.mobile}</b></span></p>
                                <p className="text-dark font-weight-bold">{garage.address}</p></div>

                            {/* <button onClick={() => handleAddProduct(item)} style={{ backgroundColor: '#59C8D9', color: 'white', borderRadius: '30px', height: '40px' }} className="btn  px-4 mt-3"><ShoppingCartIcon className="mr-2" /> Add</button> */}
                            {/* <div className="row mt-4">
                            <img width="200px" className="mx-4" src={`http://localhost:4200/item/${item.image}`} alt="" />
                            <img width="200px" className="mx-2" src={`http://localhost:4200/item/${item.image}`} alt="" />
                        </div> */}
                        </div>
                        <div className="col-md-6 text-left">
                            <img style={{ width: '450px', borderRadius: '50%' }} src={`http://localhost:4200/garage/${garage.image}`} alt="" />
                        </div>
                    </div>
                    <div >
                        <h1 style={{ color: '#676E9C' }} className="text-center mt-5"><u>Available Services</u></h1>
                        <div className="row d-flex justify-content-center">{services?.map(service =>
                            <div onClick={()=>{
                                garage.service = service;
                                localStorage.setItem('serviceInfo',JSON.stringify([garage]) )
                                console.log(garage)
                                window.location.href='/serviceCheckout';
                                }} style={{ backgroundColor: '#f5fffa', borderRadius: '40px', cursor: 'pointer' }} className="col-7 garage mx-4 my-4 pb-3">
                                <div > <div ><h3 className="text-center text-warning my-3">{service.title}</h3>
                                    <p style={{ lineHeight: '0.3', color: 'gray', fontWeight: 'bold', marginBottom: '30px' }}>{service.description.split('\n').map(str => <p>{str}</p>)}</p>
                                    <hr />
                                    <h4 className="text-center mt-3"><span style={{ color: '#F58E82' }}>Service Charge:</span> <span className="text-info font-weight-bold">{service.rate}/-</span></h4>
                                </div></div>
                            </div>
                        )}</div>
                    </div><hr />
                    <h2 className="text-center text-info mt-5">Garage Location</h2>
                    <div className="d-flex justify-content-center ">
                        <Iframe url={garage.googleMap}
                            width="650px"
                            height="650px"
                            id="myId"
                            // className="myClassname"
                            display="initial"
                            position="relative" />
                    </div>
                </div>
            </div>
            <MessengerCustomerChat
                pageId={garage.facebook}
                appId="370328294888437"
            />
            <Footer></Footer>
        </div>
    );
};

export default Garage;