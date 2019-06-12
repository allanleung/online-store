import React from 'react';

export default function Title(name, title) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center title-center"></div>
            <h1 className="text-capitalize front-weight-bold">
                {name} <strong className="text-blue">Title </strong>
            </h1>

        </div>
    )
}