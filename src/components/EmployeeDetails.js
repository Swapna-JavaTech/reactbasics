import '../css/ProductDetails.css';

export function EmployeeDetails(props){
    console.log(props.empData[0].empId)
    return(
        <div className='container'>
        <table className="table table-striped table-bordered">
            <thead>
                <tr id="tr1">
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Employee Salary</th>
                </tr>
            </thead>
            <tbody>
                <tr className="trstyle">
                    <td scope="row">{props.empData[0].empId}</td>
                    <td>{props.empData[0].empName}</td>
                    <td>{props.empData[0].empSal}</td>
                </tr>
                <tr className="trstyle">
                    <td scope="row">{props.empData[1].empId}</td>
                    <td>{props.empData[1].empName}</td>
                    <td>{props.empData[1].empSal}</td>
                </tr>
                <tr className="trstyle">
                    <td scope="row">{props.empData[2].empId}</td>
                    <td>{props.empData[2].empName}</td>
                    <td>{props.empData[2].empSal}</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}