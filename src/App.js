import { Route, Routes } from "react-router-dom";
import SharedLayout from "./Components/MainPage/SharedLayout";
import LoadingSpinner from "./Components/Loader/LoadingSpinner";
import About from "./Components/MainPage/About";
// import HomePage from "./Components/Pages/HomePage";

import React, { Suspense } from "react";

const LazyHome = React.lazy(() => import("./Components/Pages/HomePage"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<LazyHome />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
