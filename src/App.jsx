// Required Components
import Loader from "./Components/Loader/Loader";

// importing a loader
import { Suspense, lazy } from "react";

// function to introduce delay in lazy loading
const lazyWithDelay = (importFunc, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(importFunc());
    }, delay);
  });
};

// lazy loading the components with a delay
const SideBar2 = lazy(() => lazyWithDelay(() => import("./Components/SideBar/SideBar"), 3500)); // 3500ms delay
const MainContent2 = lazy(() => lazyWithDelay(() => import("./Components/MainContent/MainContent"), 3500)); // 3500ms delay

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <main>
          <SideBar2 />
          <MainContent2 />
        </main>
      </Suspense>
    </>
  );
}

export default App;
