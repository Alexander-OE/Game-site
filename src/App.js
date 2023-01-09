import { Route, Routes } from "react-router-dom";
import SharedLayout from "./Components/MainPage/SharedLayout";
import HomePage from "./Components/Pages/HomePage";
// import Navbar from "./Components/MainPage/Navbar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />} >
      
      <Route  index element={<HomePage />}/>
</Route>

    </Routes>
  );
}

export default App;
