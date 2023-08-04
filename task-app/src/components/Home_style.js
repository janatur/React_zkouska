import styled from "styled-components";

export const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  background-color: #fff0f5;
`;
export const EmployeesList = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  background: transparent;
`;

export const EmployeesItem = styled.div`
  display: flex;
  height: 45px;
  padding: 0 15px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #4b0082;
  color: #db7093;
  border: 1px solid black;
  &:nth-child(even) {
    background-color: #db7093;
    color: #4b0082;
  }
`;
export const EmployeesForm = styled(EmployeesList)`
  //přestylovávám doglist
  flex-direction: row;
  margin: 50px 0;
  padding-top: 0;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  width: 100px;
  height: 35px;
  padding-left: 10px;
  background-color: #db7093;
  font-weight: bolder;
  margin: 5px;
`;

export const Button = styled.button`
  width: 550px;
  height: 35px;
  background-color: #4b0082;
  color: #fff0f5;
  padding: 5px;
  font-weight: bolder;
  margin: 5px;
  border: 2px solid black;
`;

export const Buttons = styled(EmployeesForm)`
  margin: 30px 0;
  height: 40px;
`;

export const TabButtons = styled.button`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 48%;
  border: 2px solid black;
  font-size: 20px;
  cursor: pointer;
  background-color: #4b0082;
  color: #fff0f5;
  ${(props) => {
    if (props.name === props["data-active"]) {
      return `
      background-color: #db7093;
    color: #4b0082;
    `;
    }
  }}
`;

export const TaskForm = styled(EmployeesForm)`
  flex-direction: column;
`;

export const TaskButton = styled(Button)`
  width: 150px;
  height: 35px;
  background-color: green;
  color: #fff0f5;
  padding: 5px;
  font-weight: bolder;
  margin: 5px;
`;
export const TaskInput = styled(Input)`
  width: 150px;
  height: 35px;
  padding-left: 10px;
  background-color: #db7093;
  font-weight: bolder;
  margin: 5px;
`;
