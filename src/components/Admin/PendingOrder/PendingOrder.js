import React, { useEffect, useState } from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import UpdateAmount from '../UpdateAmount/UpdateAmount';
import './PendingOrder.css'
const PendingOrder = () => {
    const [product, setProduct] = useState([]);


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
                const items = data.filter(item => item.finalData.status === "Pending")
                console.log(items, data)
                setProduct(items);
            })
    }, [])
    const handleChange = (data) => {
        console.log(data, "clicked")

        const finalData = {
            address: data.finalData.address,
            amount: data.finalData.amount,
            cart: data.finalData.cart,
            email: data.finalData.email,
            paymentData: data.finalData.paymentData,
            status: "Delivered",
            category: "Product",
            date: new Date().toDateString()
        }

        fetch(`http://localhost:4200/updateOrder/${data._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(finalData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    window.location.reload();
                }
            })

    }
    const [modalIsOpen, setIsOpen] = useState(false);
    const [item, setItem] = useState();
    function openModal(data) {
        setItem(data)
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <AdminHeader />
            <div className="row">
                <div className="col-md-2">
                    <AdminSidebar />
                </div>

                <div style={{ backgroundColor: '#B3E1E4', height: '100%', minHeight: '800px' }} className="col-md-10 pt-4 d-flex justify-content-center">
                        <div className="">
                            <div className="text-center pb-3 text-primary">
                                <h2><u>Pending Order</u></h2>
                            </div>
                            <div>{
                                product.map(fd => <>{fd?.finalData.category === "Product" && <><div style={{ width: '700px', height: '100%', border: '1px solid lightYellow', borderRadius: '30px', backgroundColor: 'lightYellow', marginBottom: '25px', padding: '30px' }}>

                                <div className="font-weight-bold">Order No: <span style={{ color: 'purple' }}>{fd._id.split("").slice(15, 50)}</span></div>
                                <br />
                               
                                {fd?.finalData?.cart.map(item => <p style={{ fontSize: '18px' }}><span className="font-weight-bold text-primary">{item.title}</span> <span className="font-weight-bold text-dark">: {item.quantity}pcs</span></p>)} <br />
                                <p style={{ fontSize: '18px' }}><span className="font-weight-bold text-primary">Payment ID: </span><span className="font-weight-bold text-dark">{fd.finalData.paymentData}</span> </p>
                                <br />
                                <div style={{ border: '2px solid #007BFF', padding: '15px' }}>
                                    <p className="font-weight-bold ">Address: <span className="text-primary">Flat No {fd.finalData.address.flatNo}, House No {fd.finalData.address.houseNo}, {fd.finalData.address.area}</span></p>
                                    <p className="font-weight-bold">Contact: <span className="text-primary">{fd.finalData.address.contactNo}</span></p>
                                    <p className="font-weight-bold text-dark">Email: <span className="text-primary">{fd.finalData.email}</span></p>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="d-flex col-md-6">
                                        <div className="">
                                            <p className="mt-2 font-weight-bold">Status: <span className="text-primary">{fd.finalData.status}</span> </p></div>
                                        <div style={{ position: 'relative', left: '10px', top: '7px' }} >
                                            <label class="switch">
                                                <input onChange={() => handleChange(fd)} type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                        <p className="mt-2 font-weight-bold">Amount: <span className="text-primary">{fd.finalData.amount}/-</span></p>&nbsp;&nbsp; <button onClick={() => openModal(fd)} style={{ padding: '0px 10px' }} className="btn btn-warning font-weight-bold">Edit Amount</button>
                                        <UpdateAmount modalIsOpen={modalIsOpen} item={item} closeModal={closeModal}></UpdateAmount>
                                    </div>
                                </div>

                            </div></>}</> )
                            }</div>
                        </div>
                    </div>

            </div>

        </div>
    );
};

export default PendingOrder;