import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [
  {
    empId: 1,
    name: "Hafiedz",
    salary: 5000
  },
  {
    empId: 2,
    name: "Mada",
    salary: 6000
  },
  {
    empId: 3,
    name: "Matsushita",
    salary: 7000
  },
]

export const employeesSlice = createSlice({
  name: "employees",
  initialState: {value: initialStateValue},
  reducers: {
    addEmp: (state, action) => {
      state.value.push(action.payload)
    },
    addSalary: (state, action) => {
      state.value = state.value.map(emp => {
        if(emp.empId === action.payload.id) {
          emp.salary = Number(emp.salary) + 500;
          return emp;
        }
        return emp;
      })
    },
    subSalary: (state, action) => {
      state.value = state.value.map(emp => {
        if(emp.empId === action.payload.id) {
          emp.salary = Number(emp.salary) - 500;
          return emp;
        }
        return emp;
      })

    },
  }
})

export const { getEmp, addEmp, addSalary, subSalary } = employeesSlice.actions;
export default employeesSlice.reducer;