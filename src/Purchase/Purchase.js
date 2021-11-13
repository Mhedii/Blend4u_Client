import React, { useEffect, useState } from "react";
import "./Booking";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";


const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});


    const email = sessionStorage.getItem("displayName");
    useEffect(() => {
        fetch(`http://localhost:5000/singleOrder/${serviceId}`)
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);

    console.log(service);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.email = email;

        data.status = "pending";

        fetch("http://localhost:5000/confirmBooking", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    };

    return (
        <div>
            <h1 className="text-danger">purchasing From</h1>

            <div className="booking-container">
                <div className="row container">
                    <div className="col-md-6">
                        <div className="details-img">
                            <img className="w-75" src={service?.image} alt="" />
                        </div>
                        <h2>{service?.name}</h2>
                        <p className="fs-5">{service?.description}</p>
                        <h1> price: {service?.price} $</h1>
                        <h1 className="text-danger"> price: {service?.model}</h1>
                    </div>
                    <div className="col-md-6">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("brand")}
                                placeholder="Bran"
                                defaultValue={service?.brand}
                                className="p-2 m-2 w-100"
                            />
                            <input
                                {...register("model")}
                                placeholder="Model"
                                defaultValue={service?.model}
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("date")}

                                type="date"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("comments")}
                                placeholder="comments"
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("price", { required: true })}
                                defaultValue={service?.price}
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("image", { required: true })}
                                defaultValue={service?.image}
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />


                            {errors.exampleRequired && <span>This field is required</span>}

                            <input
                                type="submit"
                                value="Buy Now"
                                className="btn btn-info w-50"
                            // onClick={}
                            //     `{
                            // user.displayName?
                            // <Link to={"/ myBooking"}>:

                            // <Link to={"/ login"}>

                            // </Link>
                            //         }`}
                            />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
