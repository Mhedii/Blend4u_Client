import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SeeReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/seeReview")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <div>
            <h1 className="text-primary m-5">Reviews</h1>
            <div className="services">
                <div className="row container">
                    {reviews?.map((pd, index) => (
                        <div className="col-md-6 col-lg-4">
                            <div className="service p-3 border border m-2">

                                <h5>{pd.email}</h5>
                                <p>{pd.comments}</p>
                                <p>Rating: {pd.rating}</p>



                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SeeReview;
