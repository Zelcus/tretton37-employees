import React, { useCallback, useEffect, useState } from "react";
import { Filter } from "./filter";

const emplyees = [[{}]];
export const Employees = () => {
    const [listOfEmployees, setListOfEmployees] = useState([{}]);

    const [sortData, setSortData] = useState(["office"]);
    useEffect(() => {
        fetch("https://api.1337co.de/v3/employees", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "api-key 14:2021-05-25:anna.vanduijvenbode@tretton37.com dc748c4c825a79236500ef21594212d0f93b12394f5a1ba01d64381e3ffdff4e",
            },
        }).then((response) =>
            response.json().then((data) => {
                setListOfEmployees(data);
            })
        );
        sortArray(sortData);
    }, [sortData]);

    const sortArray = (type) => {
        const types = {
            name: "name",
            office: "office",
        };
        const sortProp = types[type];
        const sorted = [...emplyees].sort((a, b) => b.office - a.office);

        setListOfEmployees(sorted);
        console.log(emplyees);
        console.log(listOfEmployees);
    };

    return (
        <div>
            <div className="filter-container"></div>
            <div className="sorting-container">
                <select onChange={(e) => setSortData(e.target.value)}>
                    <option value="name">Name</option>
                    <option value="office">Office</option>
                </select>
            </div>

            {listOfEmployees.map((employee, index) => (
                <li key={index}>
                    <span>{employee.name}</span>
                    <span>{employee.office}</span>
                </li>
            ))}
        </div>
    );
};
