import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://blend4u.herokuapp.com/Services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    console.log(services);
    return (
        <div>
            <h1>Services</h1>
            <div className="services">
                <div className="row container">
                    {services?.map((pd, index) => (
                        <div className="col-md-6 col-lg-4">
                            <div className="service p-3 border border m-2">
                                <div className="service-img">
                                    <img className="w-50" src={pd?.image} alt="" />
                                </div>
                                <h1>{pd.brand}</h1>
                                <p>{pd.model}</p>
                                <p>{pd.description}</p>
                                <p className="text-danger">{pd.price}</p>
                                <Link to={`/purchasing/${pd._id}`}>
                                    {" "}
                                    <button className="btn btn-success">Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
