//import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import { EmployeeData } from './components/EmployeeData';
import { EmpTable } from './components/EmpTable';
import { ProductDetails } from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <header>
{/*          <ProductDetails /> */}
         <EmployeeData />
         <Product />
      </header>
    </div>
  );
}

export default App;
