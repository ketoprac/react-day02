import * as actionType from "../constant/employeeConstant";

export const getEmps = (payload) => ({
  type: actionType.GET_EMPS,
  payload,
});

export const addEmp = (payload) => ({
  type: actionType.ADD_EMP,
  payload,
});

export const addSalary = (payload) => ({
  type: actionType.ADD_SALARY,
  payload,
});

export const subSalary = (payload) => ({
  type: actionType.SUB_SALARY,
  payload,
});
