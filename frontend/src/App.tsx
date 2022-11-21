
import "react-datepicker/dist/react-datepicker.css"
import './App.css'
import Header from './components/Header'
import SalesCard from './components/SalesCard'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div className="App">
      <ToastContainer />
      <Header />

      <h1>Sale List</h1>

      <SalesCard />

    </div>
  )
}

export default App
