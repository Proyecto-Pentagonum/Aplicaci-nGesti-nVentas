import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const PrivateLayoutventa = ({ children }) => {
    return (
        <div className="d-flex flex-column justify-content-between flex-wrap">
            <Navbar/>
                <main >{children}</main>
            
        </div>
    );
};

export default PrivateLayoutventa;