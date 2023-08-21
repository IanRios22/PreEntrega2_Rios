import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"


const App = () => {
  return(
    <div className="bg-green-400 h-screen ">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route exact path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route exact path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
