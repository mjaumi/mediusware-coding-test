import React, { useState } from 'react';
import '../assets/css/buttons.css';

const ModalB = () => {
    // react hook to filter even data
    const [even, setEven] = useState(false);

    return (
        <>
            <div className="modal fade" id="modal-B" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal B</h1>
                            <button type="button" className="btn btn-A" data-bs-toggle="modal" data-bs-target="#modal-A">All Contacts</button>
                            <button type="button" className="btn btn-B" data-bs-target="#modal-B">US Contacts</button>
                            <button type="button" className="btn btn-C" data-bs-dismiss="modal">Close</button>
                        </div>
                    <div className="modal-body">
                        <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Country</th>
                        </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                    </div>
                    <div className="modal-footer d-flex justify-content-start">
                        <div className="form-check">
                        <input checked={even} onChange={e => setEven(e.target.checked)} className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            Only Even
                        </label>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalB;