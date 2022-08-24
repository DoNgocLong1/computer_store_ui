
import './App.css';
import Footer from './components/Footer/Footer';
/* import GraphicsCard from './components/GraphicsCard/GraphicsCard'; */
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {Routes, Route} from 'react-router-dom'
import './grid.css'
import Product from './components/Products/Products';
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='https://dongoclong1.github.io/computer_store_ui/' element = {<Home/>}/>
        <Route path='https://dongoclong1.github.io/computer_store_ui/Products' element = {<Product/>}/>
        {/* <Route path='/Contact' element = {<Contact/>}/> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
