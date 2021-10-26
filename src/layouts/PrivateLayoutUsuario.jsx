import React from 'react';
import Navbar from '../components/Navbar';

const PrivateLayoutUsuario = ({ children }) => {
    return (
        <div className="d-flex flex-column justify-content-between flex-wrap">
            
                <main >{children}</main>
            
        </div>
    );
};

export default PrivateLayoutUsuario;