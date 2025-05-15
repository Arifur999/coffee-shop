import { Outlet } from 'react-router'
import './App.css'
import Header from './componenets/Header'
import Footer from './componenets/Footer'

function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      
      
      
    </>
  )
}

export default App
