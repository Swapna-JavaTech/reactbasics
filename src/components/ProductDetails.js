import '../css/ProductDetails.css';
import  JDK from '../images/JDK.png';
export function ProductDetails(){
    return (
<div className="container">
    <h1>Product Data</h1>
<table className="table table-striped table-bordered">
    <thead className="thead-inverse">
        <tr id="tr1">
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Product Price</th>
        </tr>
        </thead>
        <tbody>
            <tr className="trstyle">
                <td scope="row">23123</td>
                <td>Pen</td>
                <td>45</td>
            </tr>
            <tr className="trstyle">
                <td scope="row">52211</td>
                <td>Pencil</td>
                <td>25</td>
            </tr>
            <tr className="trstyle">
                <td scope="row">52213</td>
                <td>Scale</td>
                <td>25</td>
            </tr>
            <tr className="trstyle">
                <td scope="row">52251</td>
                <td>NoteBook</td>
                <td>125</td>
            </tr>
        </tbody>
</table>
<img src={JDK} className="img-fluid" alt="Java JVM"></img>
</div>
)}