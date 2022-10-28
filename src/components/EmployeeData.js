import { EmployeeDetails } from "./EmployeeDetails";
import { EmpTable } from "./EmpTable";

export function EmployeeData(){
    const empData = [{
        "empId" : 23123,
        "empName" : "Rama",
        "empSal" : 34500
    },{
        "empId" : 23124,
        "empName" : "Ramya",
        "empSal" : 35500
    },{
        "empId" : 23125,
        "empName" : "Raja",
        "empSal" : 35500
    }];
    return(
/*         <EmployeeDetails empData = {empData}/> */
        <EmpTable  empData = {empData}/>
    )
}