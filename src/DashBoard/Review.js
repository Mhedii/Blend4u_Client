import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../hooks/useFirebase";

const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const { user } = useFirebase();
    const onSubmit = (data) => {
        fetch("http://localhost:5000/addSReview", {
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
            <h1>Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field"
                    name="email"
                    value={user?.email}
                    type="email"
                    {...register("email", { required: true })}
                />
                <br />
                <input
                    className="input-field"
                    name="comments"
                    placeholder="Comments"
                    {...register("comments", { required: true })}
                />
                <br />
                <input
                    className="input-field"
                    name="rating"
                    placeholder="Rate 0-5"
                    {...register("rating", { required: true })}
                />
                <br />

                <input
                    className="submit-btn btn btn-danger mt-3"
                    type="submit"
                    value="Post"
                />
            </form>
        </div>
    );
};

export default Review;
