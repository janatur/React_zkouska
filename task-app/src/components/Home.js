import React from "react";
import { employees } from "../employeesData";
import {
  Button,
  Buttons,
  EmployeesForm,
  EmployeesItem,
  EmployeesList,
  Input,
  PageContainer,
  TabButtons,
  TaskForm,
  TaskButton,
  TaskInput,
} from "./Home_style";
import { useState } from "react";

export default function Home() {
  const [listOfEmployees, setListOfEmployees] = useState(employees);
  const [newEmployee, setNewEmployee] = useState({
    id:
      listOfEmployees.length > 0
        ? Math.max(...listOfEmployees.map((employee) => employee.id)) + 1
        : 1,
    name: "",
    surname: "",
    gender: "",
  });

  const handleChange = (e) => {
    const updatedEmployee = { ...newEmployee, [e.target.name]: e.target.value };
    setNewEmployee(updatedEmployee);
    validateData(updatedEmployee);
  };

  const [valid, setValid] = useState(false);

  const validateData = (employee) => {
    if (employee.name.trim().length === 0) {
      return setValid(false);
    } else if (employee.surname.trim().length === 0) {
      return setValid(false);
    }
    setValid(true);
  };

  const handleAdd = () => {
    setListOfEmployees((listOfEmployees) => {
      return [...listOfEmployees, newEmployee];
    });
    const newEmployeeId = newEmployee.id + 1;
    const updatedEmployee = {
      id: newEmployeeId,
      name: "",
      surname: "",
      gender: "",
    };
    setNewEmployee(updatedEmployee);
    setValid(false);
  };

  const handleDelete = (idToDel) => {
    setListOfEmployees(
      listOfEmployees.filter((employee) => employee.id !== idToDel)
    );
  };

  const [activeTab, setActiveTab] = useState("list-of-employees");

  const men = [
    ...listOfEmployees.filter((employee) => employee.gender === "male"),
  ];
  const countMen = men.length;

  const women = [
    ...listOfEmployees.filter((employee) => employee.gender === "female"),
  ];
  const countWomen = women.length;

  const conditions = {
    manHourWork: 1,
    womanHourWork: 0.5,
  };

  const [validator, setValidator] = useState(false);

  const [tempTask, setTempTask] = useState({
    metres: "",
    hours: "",
  });

  const handleTask = (e) => {
    const updateTask = { ...tempTask, [e.target.name]: e.target.value };
    setTempTask(updateTask);

    const totalRequirements = {
      menWork: conditions.manHourWork * countMen,
      womenWork: conditions.womanHourWork * countWomen,
    };
    const amountOfWorkPerHour = tempTask.metres / tempTask.hours;
    if (
      amountOfWorkPerHour <=
      totalRequirements.menWork + totalRequirements.womenWork
    ) {
      setValidator(true);
    }
  };
  const taskButton = () => {
    setTempTask({ metres: "", hours: "" });
    setValidator(false);
  };

  return (
    <PageContainer>
      <Buttons>
        <TabButtons
          name="list-of-employees"
          data-active={activeTab}
          onClick={() => {
            setActiveTab("list-of-employees");
          }}
        >
          List of Employees
        </TabButtons>
        <TabButtons
          name="task"
          data-active={activeTab}
          onClick={() => {
            setActiveTab("task");
          }}
        >
          Task
        </TabButtons>
      </Buttons>
      {activeTab === "list-of-employees" && (
        <>
          <EmployeesList name="employeesList">
            {listOfEmployees.map((employee) => {
              return (
                <EmployeesItem key={employee.id}>
                  {employee.name} {employee.surname} - {employee.gender}
                  <button
                    style={{
                      backgroundColor: "transparent",
                      color: "#ff0000",
                      fontWeight: "bolder",
                      border: "none",
                      height: 25 + "px",
                      width: 25 + "px",
                    }}
                    onClick={() => {
                      handleDelete(employee.id);
                    }}
                  >
                    X
                  </button>
                </EmployeesItem>
              );
            })}
          </EmployeesList>
          <EmployeesForm>
            <Input
              type="text"
              placeholder="Jméno"
              name="name"
              value={newEmployee.name}
              onChange={handleChange}
            />
            <Input
              type="text"
              placeholder="Příjmení"
              name="surname"
              value={newEmployee.surname}
              onChange={handleChange}
            />
            <Input
              type="radio"
              name="gender"
              value="male"
              onClick={handleChange}
            />{" "}
            male
            <Input
              type="radio"
              name="gender"
              value="female"
              onClick={handleChange}
            />
            female
            <Button disabled={!valid} onClick={handleAdd}>
              Add Employee
            </Button>
          </EmployeesForm>
        </>
      )}
      {activeTab === "task" && (
        <>
          <h3
            style={{
              paddingTop: 20 + "px",
              paddingBottom: 40 + "px",
              color: "#4b0082",
              fontWeight: "bolder",
            }}
          >
            PLANNING EXCAVATION WORKS
          </h3>
          <p
            style={{
              paddingTop: 10 + "px",
              paddingBottom: 10 + "px",
              color: "#4b0082",
              fontWeight: "bolder",
            }}
          >
            Men: {countMen}
          </p>
          <p
            style={{
              paddingTop: 10 + "px",
              paddingBottom: 10 + "px",
              color: "#4b0082",
              fontWeight: "bolder",
            }}
          >
            Women: {countWomen}
          </p>
          <TaskForm>
            <TaskInput
              type="number"
              min="0"
              placeholder="Enter metres..."
              name="metres"
              value={tempTask.metres}
              onChange={handleTask}
            />
            <TaskInput
              type="number"
              min="0"
              placeholder="Enter hours..."
              name="hours"
              value={tempTask.hours}
              onChange={handleTask}
            />
            <TaskButton
              disabled={!validator}
              onClick={taskButton}
              style={{ backgroundColor: validator ? "green" : "red" }}
            >
              Work planning
            </TaskButton>
          </TaskForm>
        </>
      )}
    </PageContainer>
  );
}
