import React, {createElement} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function DisplayEmployeeInfo(employee) {
    return <div>
        <p>
            <label> Employee ID :  <b>{employee.Id}</b></label>
        </p>
        <p>
            <label> Employee Name :  <b>{employee.Name}</b></label>
        </p>
        <p>
            <label> Employee Location :  <b>{employee.Location}</b></label>
        </p>
        <p>
            <label> Employee Salary :  <b>{employee.Salary}</b></label>
        </p>
    </div>
}
const element= <DisplayEmployeeInfo Id="101" Name="Aswini" Location="Nugegoda" Salary="100000"></DisplayEmployeeInfo>
ReactDOM.render(element, document.getElementById("root"));