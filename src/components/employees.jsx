import React, { useCallback, useEffect, useState } from "react";
export const Employees = () => {
    let [listOfEmployees, setListOfEmployees] = useState([]);

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
                console.log(listOfEmployees);
            })
        );
    }, []);

    return (
        <div>
            {listOfEmployees.map((employee, index) => (
                <li key={index}>
                    <span>{employee.name}</span>
                    <span>{employee.office}</span>
                </li>
            ))}
        </div>
    );
};
