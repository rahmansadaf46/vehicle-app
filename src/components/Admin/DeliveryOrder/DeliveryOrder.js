import React, { useEffect, useState } from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const DeliveryOrder = () => {
    const [product, setProduct] = useState([]);
    const [amount, setAmount] = useState([]);
    const [todayAmount, setTodayAmount] = useState([]);
    const [today, setToday] = useState([]);
    const email = sessionStorage.getItem('email')

    useEffect(() => {
        if (email !== "admin@gmail.com") {
            sessionStorage.clear();
            localStorage.clear();
            window.location.assign("/");
        }
    }, [email])
    useEffect(() => {
        fetch('http://localhost:4200/allOrder')
            .then(res => res.json())
            .then(data => {
                // if (data) {
                //     localStorage.setItem('student', JSON.stringify(data));

                // }
                // const email= sessionStorage.getItem('email')
                const items = data.filter(item => item.finalData.status === "Delivered")
                // console.log(items,data)
                const td = data.filter(item => item.finalData.date === new Date().toDateString())
                setToday(td)
                setProduct(items.reverse());
            })
    }, [])
    // console.log(product)
    useEffect(() => {
        let total = [];
        for (let i = 0; i < product.length; i++) {
            total.push(Number(product[i].finalData.amount));
        }
        setAmount(total.reduce((partial_sum, a) => partial_sum + a, 0));


        let todayTotal = [];
        for (let i = 0; i < today.length; i++) {
            todayTotal.push(Number(today[i].finalData.amount));
        }
        setTodayAmount(todayTotal.reduce((partial_sum, a) => partial_sum + a, 0));
    }, [product, today])

    const formatNumber = num => {
        const precision = num.toFixed(2);
        // setAmount(precision);
        return Number(precision);
    }
    return (
        <div>
            <AdminHeader />
            <div className="row">
                <div className="col-md-2">
                    <AdminSidebar />
                </div>
                {
                    product.length === 0 ? <div style={{ backgroundColor: '#B3E1E4', height: '800px' }} className="col-md-10 pt-4 d-flex justify-content-center"><h2 className="text-primary">Loading...</h2></div> : <div style={{ backgroundColor: '#B3E1E4', height: '100%', minHeight: '800px' }} className="col-md-10 pt-4 d-flex justify-content-center">
                        <div className="">

                            <div>
                                <div className="text-center pb-3 text-primary">
                                    <h2><u>Delivery Order</u></h2>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="d-flex justify-content-center">
                                            <div className="text-center " style={{ width: '550px', height: '100%', border: '4px solid #007BFF', borderRadius: '30px', backgroundColor: '#F0FFEF', marginBottom: '25px', padding: '30px' }}>
                                                <h1 className="text-primary">Today's Income: <span className="text-dark">{formatNumber(todayAmount) || 0}/-</span></h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex justify-content-center">
                                            <div className="text-center " style={{ width: '550px', height: '100%', border: '4px solid #007BFF', borderRadius: '30px', backgroundColor: '#F0FFEF', marginBottom: '25px', padding: '30px' }}>
                                                <h1 className="text-primary">Total Income: <span className="text-dark">{formatNumber(amount)}/-</span></h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                                {
                                    product.map(fd => <div className="d-flex justify-content-center">
                                        <div style={{ width: '700px', height: '100%', border: '1px solid lightYellow', borderRadius: '30px', backgroundColor: 'lightYellow', marginBottom: '25px', padding: '30px' }}>
                                            <div className="font-weight-bold">Order No: <span style={{ color: 'purple' }}>{fd._id.split("").slice(15, 50)}</span></div>
                                            <br />
                                            {fd.finalData.cart.map(item => <p style={{ fontSize: '18px' }}><span className="font-weight-bold text-primary">{item.title}</span> <span className="font-weight-bold text-dark">: {item.quantity}pcs</span></p>)} <br />
                                            <p style={{ fontSize: '18px' }}><span className="font-weight-bold text-primary">Payment ID: </span><span className="font-weight-bold text-dark">{fd.finalData.paymentData}</span> </p>
                                            <br />
                                            <div style={{ border: '2px solid #007BFF', padding: '15px' }}>
                                                <p className="font-weight-bold ">Address: <span className="text-primary">Flat No {fd.finalData.address.flatNo}, House No {fd.finalData.address.houseNo}, {fd.finalData.address.area}</span></p>
                                                <p className="font-weight-bold">Contact: <span className="text-primary">{fd.finalData.address.contactNo}</span></p>
                                                <p className="font-weight-bold text-dark">Email: <span className="text-primary">{fd.finalData.email}</span></p>
                                            </div>
                                            <br />
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <div className="">
                                                        <span className="mt-2 font-weight-bold">Status: <span className="text-success">{fd.finalData.status}</span> </span></div>

                                                </div>
                                                <div className="col-md-4 d-flex justify-content-end">
                                                    <p className="mt-2 font-weight-bold">Amount: <span className="text-primary">{fd.finalData.amount}/-</span></p>&nbsp;&nbsp;
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }</div>
                        </div>
                    </div>
                }
            </div>

        </div>
    );
};

export default DeliveryOrder;