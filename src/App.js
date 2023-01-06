import { Route, Routes } from "react-router-dom";
import SharedLayout from "./Components/MainPage/SharedLayout";
import HomePage from "./Components/Pages/HomePage";
// import Navbar from "./Components/MainPage/Navbar";
// import Cover from "./Components/MainPage/Cover";
// import cover from "./Components/images/main.png"
function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />} >
      
      <Route  index element={<HomePage />}/>
</Route>

    </Routes>
    // <div className="App">
    // <img src={cover} alt="dasF" />
    //  <Cover />
    // </div>
  );
}

export default App;
