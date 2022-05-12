import { faCookieBite, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const GarageSidebar = () => {
    return (
        <div className="sidebar d-flex  justify-content-center  py-5 px-4" style={{ height: "100vh" }}>

            <ul className="list-unstyled py-3">
                <li>
                    <Link to="/garage/pending" className="">
                        <span style={{ color: '#59C8D9', fontWeight: 'bold' }}><FontAwesomeIcon icon={faCookieBite} /> Pending Request</span>
                    </Link>
                </li>
                <br />
                <li>
                    <Link to="/garage/addService" className="">
                        <span style={{ color: '#59C8D9', fontWeight: 'bold' }}><FontAwesomeIcon icon={faPlus} /> Add Service</span>
                    </Link>
                </li>
                <br />

            </ul>

        </div>
    );
};

export default GarageSidebar;