import React from 'react'

const Card = (props) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={props.img}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.type}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-secondary">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Card