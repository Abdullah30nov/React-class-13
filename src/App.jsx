import { Route, Routes } from "react-router-dom"
import GetData from "./Component/GetData/GetData"
import SingleProduct from "./Component/SingleProduct/SingleProduct"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<GetData />}/>
      <Route path="/product/:id" element={<SingleProduct />}/>
    </Routes>
    </>
  )
}

export default App
