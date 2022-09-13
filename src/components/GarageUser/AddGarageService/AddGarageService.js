import React, { useEffect, useState } from 'react';
import GarageHeader from '../GarageHeader/GarageHeader';
import GarageSidebar from '../GarageSidebar/GarageSidebar';
import { useForm } from 'react-hook-form';
// import './PendingRequest.css'
const AddGarageService = () => {
    const [garageData, setGarageData] = useState([])
    const { register, handleSubmit, errors } = useForm();
    const user = sessionStorage.getItem('email');
    useEffect(() => {
        if (user) {
            fetch('http://localhost:4200/garageUser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user: user })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data[0]);
                    setGarageData(data[0]);
                })
        }
    }, [user])
    const onSubmit = data => {
        data.garageId = garageData._id;
        fetch('http://localhost:4200/addService', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data })
        })
            .then(response => response.json())
            .then(data => {
                window.alert('Service added successfully');
                window.location.reload();
            })

            .catch(error => {
                console.error(error)
            })



    }

    return (
        <div>
            <GarageHeader />
            <div className="row">
                <div className="col-md-2">
                    <GarageSidebar />
                </div>

                <div style={{ backgroundColor: '#B3E1E4', height: '100vh' }} className="col-md-10 pt-4">
                    <div className="text-center  text-primary">
                        <h2><u>Add Service</u></h2>
                    </div>
                    <div className="col-md-12">
                        <div><form className="p-3 container col-6" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group text-primary text-center">
                                <label for=""><b>Enter Service Name</b></label>
                                <input style={{ borderRadius: '15px', border: '2px solid #007BFF' }} type="text" ref={register({ required: true })} name="title" placeholder="Service Name" className="form-control" />
                                {errors.name && <span className="text-primary">This field is required</span>}
                            </div>
                            <div className="form-group text-primary text-center">
                                <label for=""><b>Enter Service Description</b></label>
                                <textarea style={{ borderRadius: '15px', border: '2px solid #007BFF' }} type="text" ref={register({ required: true })} name="description" placeholder="Service Description" className="form-control" />
                                {errors.name && <span className="text-primary">This field is required</span>}
                            </div>
                            <div className="form-group text-primary text-center">
                                <label for=""><b>Enter Service Rate</b></label>
                                <input style={{ borderRadius: '15px', border: '2px solid #007BFF' }} type="text" ref={register({ required: true })} name="rate" placeholder="Service Rate" className="form-control" />
                                {errors.name && <span className="text-primary">This field is required</span>}
                            </div>
                            <div className="form-group row">
                                <div className="form-group col-md-12 mt-4 pt-1 d-flex justify-content-center">
                                    <button type="submit" style={{ padding: '10px 90px', borderRadius: '40px' }} className="btn btn-primary text-white  font-weight-bold">Submit</button>
                                </div>
                            </div>

                        </form></div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AddGarageService;