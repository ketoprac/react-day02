import {
  GET_EMPS,
  ADD_EMP,
  ADD_SALARY,
  SUB_SALARY,
} from "../constant/employeeConstant";

const initialStateValue = [
  { empId: 1, name: "Hafiedz", salary: 4000 },
  { empId: 2, name: "Mada", salary: 5000 },
  { empId: 3, name: "Matsushita", salary: 6000 },
];

const INIT_STATE = {
  employees: [...initialStateValue],
};

const employeeReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_EMPS:
      return { ...state };
    case ADD_EMP:
      return addEmployee(state, action);
    case ADD_SALARY:
      return addSalary(state, action);
    case SUB_SALARY:
      return subSalary(state, action);
    default:
      return state;
  }
};

const addEmployee = (state, action) => {
  state.employees = [...state.employees, action.payload];
  return { ...state };
};

const addSalary = (state, action) => {
  state.employees = state.employees.map((emp) => {
    if(emp.empId === action.payload.id) {
        emp.salary = Number(emp.salary) + 500;
        return emp;
      }
      return emp;
  });
  return { ...state };
};

const subSalary = (state, action) => {
    state.employees = state.employees.map((emp) => {
        if(emp.empId === action.payload.id) {
            emp.salary = Number(emp.salary) - 500;
            return emp;
          }
          return emp;
      });
      return { ...state };
};

export default employeeReducer;
