import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import { addEmp, addSalary, subSalary } from "../features/employees";

export default function EmployeeListRedux() {
  const dispatch = useDispatch();
  const emp = useSelector((state) => state.employees.value);
  const [display, setDisplay] = useState(false);
  const [values, setValues] = useState({
    empId: Math.round(Math.random() * 10),
    name: "",
    salary: 0,
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const payload = {
      empId: values.empId,
      name: values.name,
      salary: values.salary,
    };
    dispatch(addEmp(payload));
    setDisplay(false);
  };

  return (
    <div>
      <h2>List Employee (Redux)</h2>
      <button onClick={() => setDisplay(!display)}>{display ? "Employee List" : "Add Employee"}</button>
      {display ? (
        <Form
          onSubmitForm={onSubmit}
          handleOnChange={handleChange}
          setDisplay={setDisplay}
        />
      ) : (
        <>
          <table>
            <th>Employee ID</th>
            <th>Full Name</th>
            <th>Salary</th>
            <th>Action</th>
            <tbody>
              {(emp || []).map((emp) => {
                return (
                  <tr key={emp.empId}>
                    <td>{emp.empId}</td>
                    <td>{emp.name}</td>
                    <td>{emp.salary}</td>
                    <td>
                      <button
                        onClick={() => {
                          dispatch(addSalary({ id: emp.empId }));
                        }}
                      >
                        +
                      </button>
                      <button
                        onClick={() => {
                          dispatch(subSalary({ id: emp.empId }));
                        }}
                      >-</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
      <h3>Total Salary : {emp.reduce((sum, el) => sum + el.salary, 0)}</h3>
    </div>
  );
}
