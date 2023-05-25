import React from 'react';
import ModalA from './Modal-A';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ModalB from './Modal-B';

const Problem2 = () => {

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-lg btn-outline-primary" type="button"  data-bs-toggle="modal" data-bs-target="#modal-A">All Contacts</button>
                <button className="btn btn-lg btn-outline-warning" type="button" data-bs-toggle="modal" data-bs-target="#modal-B">US Contacts</button>
                </div>
                
            </div>
            <ModalA/>
            <ModalB/>
        </div>
    );
};

export default Problem2;