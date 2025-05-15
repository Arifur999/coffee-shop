import { Outlet } from 'react-router'
import './App.css'
import Header from './componenets/Header'
import Footer from './componenets/Footer'

function App() {

  return (
    <>
    <div className="font-rancho">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      
      </div>
      
    </>
  )
}

export default App
