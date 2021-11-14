import React, { useEffect, useState } from 'react';

const MyOrders = () => {
    const Email = sessionStorage.getItem("email");
    const [services, setServices] = useState([]);

    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${Email}`)
            .then((res) => res.json())
            .then((data) => setServices(data));
        // .then((data) => console.log(data));

    }, [control]);


    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteOrders/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                }
            });
        console.log(id);
    };

    return (
        <div>
            <h1>My Orders </h1>

            <div className="services">
                <div className="row container">
                    {services?.map((pd) => (
                        <div className="col-md-4">
                            <div className="service border border p-3">
                                <div className="services-img ">
                                    <img className="w-100" src={pd?.image} alt="" />
                                </div>

                                <h6>{pd?.brand}</h6>
                                <h4>{pd?.model}</h4>
                                <p>{pd?.comments}</p>
                                <h3 className="text-danger"> Price :{pd?.price}$</h3>

                                <button
                                    onClick={() => handleDelete(pd?._id)}
                                    className="btn btn-danger"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyOrders;