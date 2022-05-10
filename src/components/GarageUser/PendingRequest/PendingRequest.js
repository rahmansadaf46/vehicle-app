import React from 'react';
import GarageHeader from '../GarageHeader/GarageHeader';
import GarageSidebar from '../GarageSidebar/GarageSidebar';
import './PendingRequest.css'
const PendingRequest = () => {
    // const [product, setProduct] = useState([]);


    // const email = sessionStorage.getItem('email')

    // useEffect(() => {
    //     if (email !== "admin@gmail.com") {
    //         sessionStorage.clear();
    //         localStorage.clear();
    //         window.location.assign("/");
    //     }
    // }, [email])
    // useEffect(() => {
    //     fetch('http://localhost:5000/allOrder')
    //         .then(res => res.json())
    //         .then(data => {
    //             // if (data) {
    //             //     localStorage.setItem('student', JSON.stringify(data));

    //             // }
    //             // const email= sessionStorage.getItem('email')
    //             const items = data.filter(item => item.finalData.status === "Pending")
    //             console.log(items, data)
    //             setProduct(items);
    //         })
    // }, [])
    // const handleChange = (data) => {
    //     console.log(data, "clicked")

    //     const finalData = {
    //         address: data.finalData.address,
    //         amount: data.finalData.amount,
    //         cart: data.finalData.cart,
    //         email: data.finalData.email,
    //         paymentData: data.finalData.paymentData,
    //         status: "Delivered",
    //         date: new Date().toDateString()
    //     }

    //     fetch(`http://localhost:5000/updateOrder/${data._id}`, {
    //         method: 'PATCH',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(finalData)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data) {
    //                 window.location.reload();
    //             }
    //         })

    // }
    // const [modalIsOpen, setIsOpen] = useState(false);
    // const [item, setItem] = useState();
    // function openModal(data) {
    //     setItem(data)
    //     setIsOpen(true);
    // }


    // function closeModal() {
    //     setIsOpen(false);
    // }

    return (
        <div>
            <GarageHeader />
            <div className="row">
                <div className="col-md-2">
                    <GarageSidebar />
                </div>

                <div style={{ backgroundColor: '#B3E1E4', height: '100%', minHeight: '800px' }} className="col-md-10 pt-4 d-flex justify-content-center">
                    <div className="">
                        <div className="text-center pb-3 text-primary">
                            <h2><u>Pending Request</u></h2>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default PendingRequest;