
import "react-datepicker/dist/react-datepicker.css"
import './App.css'
import Header from './components/Header'
import SalesCard from './components/SalesCard'

function App() {


  return (
    <div className="App">
      <Header />

      <h1>Sale List</h1>

      <SalesCard />

    </div>
  )
}

export default App
