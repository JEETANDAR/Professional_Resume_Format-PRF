// Required Components
import Loader from "./Components/Loader/Loader";
// import SideBar from "./Components/SideBar/SideBar";
// import MainContent from "./Components/MainContent/MainContent";

// importing a loader
import { Suspense, lazy } from "react";

// lazy loading the components
const SideBar2 = lazy(() => import("./Components/SideBar/SideBar"));
const MainContent2 = lazy(() => import("./Components/MainContent/MainContent"));

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
