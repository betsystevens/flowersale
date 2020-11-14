import React, { useState } from 'react';
import Radios from './Radios';
import useItems from '../shared/fetchData';
import { deleteData } from '../shared/deleteData';
import { baseUrl } from '../shared/config';

function FlowerDatabase() {
    const items = useItems("flowers");

    const handleDelete = ((id) => {
        alert("Deleting flower " + id);
        deleteData("flowers/" + id, {});
    });

    const handleUpload = ((id) => {
        alert("UploadImage for flower " + id);
        // TODO Navigate to Upload image modal dialog
        // deleteData("flowers/" + id, {});
    });

    const flatCards = items.map((flat) => {
        return (
            <div>
                <div key={flat.id} className="card">
                    <div className="card-header">
                        <img src={baseUrl + flat.image} alt={flat.name} />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">{flat.name}</h2>
                        <Radios values={flat.variety} />
                        <p className="card-text">{flat._id} - {flat.description}</p>
                        <button type="button" onClick={ () => handleDelete(flat._id) }>Delete</button>
                        <button type="button" onClick={ () => handleUpload(flat._id) }>Upload Image</button>
                    </div>
                </div>
            </div>
        );
    });
    
    return (
        <div className="flex-center">
            {flatCards}
        </div>
    );
}

export default FlowerDatabase;