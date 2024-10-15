import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import ProtectedRoutes from "./Components/Login/ProtectedRoutes";
import Inicio from "./Components/Pagination/Inicio";
import Registro from "./Components/Login/Registro";
import NavBarVertical from "./Components/NavBar/NavBarVertical";
import NavBarHorizontal from "./Components/NavBar/NavBarHorizontal";
import { useSelector } from "react-redux";
import Loading from "./Components/Loaders/Loading";
import Productos from "./Components/Pagination/Productos";
import Carrito from "./Components/Pagination/Carrito";
import Prueba1 from "./Components/Pagination/Servicios/Prueba1";
import Prueba2 from "./Components/Pagination/Servicios/Prueba2";

function App() {
  const loading = useSelector((state) => state.isLoading);

  const pathname = window.location.hash.replace("#", ""); // Extrae el pathname de la URL

  const showNavbar = pathname !== '/' && pathname !== '/registro';

  return (
    <div id="app" className={`flex flex-row gap-2 w-full  h-screen ${(pathname!==""&&showNavbar)?"text-white bg-zinc-950 p-4":"bg-white"}`}>
      <HashRouter>
      {loading && <Loading />}
        <div className={`${(pathname!=""&&showNavbar)?"[grid-area:NavVertical]":"hidden"}`}>
        {(pathname !== "" && showNavbar) && <NavBarVertical />}
        </div>
      
        <main className={`  ${(pathname !== "" && showNavbar)? "[grid-area:main]" : "w-[100vw] h-[100vh]"}`}>
      {(pathname !== "" && showNavbar)&& <NavBarHorizontal />} 
         <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          
          <Route element={<ProtectedRoutes />}>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/prueba1" element={<Prueba1 />} />
            <Route path="/prueba2" element={<Prueba2 />} />
          </Route>
        </Routes>
      </main>
       
      </HashRouter>
    </div>
  );
}

export default App;
