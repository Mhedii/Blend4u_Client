import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ManageProduct = () => {
    const [orders, setOrders] = useState([]);
    const { register, handleSubmit } = useForm();

    const [status, setStatus] = useState("");
    const [orderId, setOrderId] = useState("");


    const [control, setControl] = useState(false);
    const handleStatus = (e) => {
        setStatus(e.target.value);
    };

    console.log(status);
    useEffect(() => {
        fetch("http://localhost:5000/allProducts")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);


    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteProducts/${id}`, {
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
        <div className="container">
            <h1>All Products {orders.length}</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Description</th>
                        <th>Image Link</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.brand}</td>
                            <td>{pd.model}</td>
                            <td>{pd.description}</td>
                            <td>{pd.image}</td>

                            <button className="btn bg-danger p-2" onClick={() => handleDelete(pd?._id)}>Delete</button>

                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageProduct;
