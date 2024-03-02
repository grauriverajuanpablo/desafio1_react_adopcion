import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./componentes/Header.jsx"
import Grillas from './componentes/Grillas.jsx'
import Footers from './componentes/Footers.jsx'

function App() {

  return (
    <>
      <Header titulo="Adopta un Perrito"/>
      <Grillas/>
      <Footers texto ="Comprometete y ayudanos adoptando, ellos necesitan una familia, haste parte de esta hermosa campaña y ayuda a que estos hermosos perritos puedan tener un nuevo hogar, llamanos a nuestro  numero especial: +555555555555 o escribenos al mail: rescatemascotass@eeemail.csc."/>

    </>


  )
}

export default App