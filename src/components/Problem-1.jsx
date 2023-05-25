import React, {useEffect, useState} from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    
    // react hook to store all the tasks
    const [tasks, setTasks] = useState([]);

    // react hooks to control the form values
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    const handleClick = (val) =>{
        setShow(val);
    }

    // handler function to submit the task data
    const submitTaskHandler = e => {
        e.preventDefault();

        setTasks([...tasks, {
            name,
            status
        }]);

        // resetting the form after submission here 
        setName('');
        setStatus('');
    }

    // function to sort the tasks when all button is clicked
    const sortTask = status => {
        if(status.toLowerCase() === 'active'){
            return 0;
        } else if(status.toLowerCase() === 'completed'){
            return 1;
        } else {   
            return 2;
        }
    }

    if(show === 'all'){
        tasks.sort((task1, task2) => sortTask(task1.status) -  sortTask(task2.status));
    } 

    const filterTasks = task => {
        return show === 'active' ? task.status.toLowerCase() === 'active' : show === 'completed' ? task.status.toLowerCase() === 'completed' : task;
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={submitTaskHandler} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input value={status} onChange={e => setStatus(e.target.value)} type="text" className="form-control" placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                tasks
                                .filter(filterTasks)
                                .map((task, index) => <tr key={index}>
                                    <td>{task.name}</td>
                                    <td>{task.status}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;