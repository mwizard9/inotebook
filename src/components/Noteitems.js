import React from 'react'

const Noteitems = (props) => {
    const { notes } = props;
    return (
        <div className='col-md-3'>
            
            <div className="card" >
                <div className="card-body">
                    <div className="d-flex align-item-center">
                    <h5 className="card-title">{notes.title}</h5>
                    <i className="fa-solid fa-trash-can mx-3"></i>
                    <i className="fa-solid fa-pen-to-square mx-2"></i>
                    </div>
                    <p className="card-text">{notes.description}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Noteitems
