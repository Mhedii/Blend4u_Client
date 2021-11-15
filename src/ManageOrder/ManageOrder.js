import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ManageOrder = () => {
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
        fetch("https://blend4u.herokuapp.com/allOrders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    // const status = "apporved";
    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
    };

    const onSubmit = (data) => {
        console.log(data, orderId);
        fetch(`https://blend4u.herokuapp.com/statusUpdate/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };
    const handleUpdate = (id) => {
        fetch(`https://blend4u.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });

        console.log(id);
    };
    const handleDelete = (id) => {
        fetch(`https://blend4u.herokuapp.com/deleteOrders/${id}`, {
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
            <h1>All orders {orders.length}</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Service Title</th>
                        <th>Event description</th>
                        <th>Image Link</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.name}</td>
                            <td>{pd.description}</td>
                            <td>{pd.image}</td>
                            <td>

                                <form onChange={handleStatus}>
                                    <select
                                        onChange={() => handleOrderId(pd?._id)}
                                        {...register("status")}
                                    >
                                        <option value={pd?.status}>{pd?.status}</option>
                                        <option value="approve">approve</option>
                                        <option value="done">Done</option>
                                    </select>

                                </form>
                                {/* <DropdownButton id="dropdown-basic-button" title="Status" onChange={handleStatus}

                                    defaultValue={pd.status}>
                                    <Dropdown.Item value="pending">pending</Dropdown.Item>
                                    <Dropdown.Item value="apporved">apporved</Dropdown.Item>

                                </DropdownButton> */}
                            </td>
                            <button className="btn bg-danger p-2" onClick={() => handleDelete(pd?._id)}>Delete</button>
                            {/* <button className="btn bg-success p-2">Update</button> */}
                            <button
                                onClick={() => handleUpdate(pd._id)}
                                className="btn bg-success p-2"
                            >
                                Update
                            </button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageOrder;
