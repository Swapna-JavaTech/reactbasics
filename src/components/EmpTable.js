export function EmpTable(props){
    return(
        <table className="table table-bordered">
           {/*  {props.empData.map((emp =>
                <tr><td key={emp.empId}>{emp.empName}</td></tr>))} */}
              <thead>
            <tr>
                <th>Emp Id</th>
                <th>Emp Name</th>
                <th>Emp Salary</th>
            </tr>
            </thead>
            <tbody>
            {
                props.empData.map(emp =>(
                    <tr>
                        <td>{emp.empId}</td>
                        <td>{emp.empName}</td>
                        <td>{emp.empSal}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}