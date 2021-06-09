import React, { useEffect, useState } from "react";

export const Employees = () => {
    const [listOfEmployees, setListOfEmployees] = useState([]);

    useEffect(() => {
        fetch("https://api.1337co.de/v3/employees", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "api-key 14:2021-06-08:anna.vanduijvenbode@tretton37.com 1ea707ddede26395b754bd85289dc42172ad753ad99dcd543e5a8588df72dce5",
            },
        }).then((response) =>
            response.json().then((data) => {
                setListOfEmployees(data);
            })
        );
    }, []);

    const sortArray = (type) => {
        const types = {
            office: "office",
            name: "name",
        };
        const sortProperty = types[type];
        //Since there was a person without office I had to check for null ref and remove it from the list
        const tempEmployeeList = listOfEmployees.filter(
            (item) => item[sortProperty] != null
        );

        setListOfEmployees(
            tempEmployeeList.sort((a, b) =>
                a[sortProperty].localeCompare(b[sortProperty])
            )
        );
    };

    return (
        <>
            <div className="filter-container container">
                <button
                    className="select-btn btn"
                    value="office"
                    onClick={(e) => sortArray(e.target.value)}
                >
                    Order by office
                </button>
                <button
                    className="select-btn btn"
                    value="name"
                    onClick={(e) => sortArray(e.target.value)}
                >
                    Order by name
                </button>
            </div>
            <div className="employee-container container">
                {listOfEmployees.map((employee, index) => (
                    <li className="employee-card" key={index}>
                        <div className="employee-content">
                            <div className="employee-left-content">
                                <span className="employee-name">
                                    {employee.name}
                                </span>
                                <span className="employee-office">
                                    Office: {employee.office}
                                </span>
                                <div className="employee-so-me"></div>
                            </div>
                            <div className="employee-image-container">
                                <img
                                    className="employee-image"
                                    src={employee.imagePortraitUrl}
                                    alt={"picture of " + employee.name}
                                ></img>
                            </div>
                        </div>
                    </li>
                ))}
            </div>
        </>
    );
};
