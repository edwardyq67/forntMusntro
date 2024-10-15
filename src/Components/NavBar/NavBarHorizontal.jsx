import { useState } from "react";
import Accordion from "../Effectos/Accordion";
import { BsDoorClosedFill } from "react-icons/bs";
import axios from "axios";
import getConfig from "../../utils/getConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../../store/slices/isLoading.slice";
function NavBarHorizontal() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const pathname = window.location.hash.replace("#/", "");
    const [isOpen, setIsOpen] = useState(false);

    const handleImageClick = () => {
        setIsOpen(!isOpen);
    };
    const cerrarSecion=async()=>{
        dispatch(setIsLoading(true));
        try {
           await axios.post("http://localhost:3000/api/users/logout",getConfig()) 
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        } finally{
            localStorage.removeItem("token");
         navigate("/")
         window.location.reload(); 
        }
    }
  return (
    <div className="w-full flex flex-row items-center justify-between border border-gray-900 rounded-lg py-2 px-4 uppercase font-bold text-lg">
        {pathname}

        <div>
            <Accordion title={
                <img
                    onClick={handleImageClick}
                    className="w-10 h-10 rounded-full cursor-pointer"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="Profile"
                />
            } isOpen={isOpen} onToggle={handleImageClick}>
          <ul className="flex flex-col">
            <li onClick={()=>cerrarSecion()} className="cursor-pointer text-nowrap text-base font-normal gap-2 flex justify-center items-center">Cerrar sesión  <BsDoorClosedFill /></li>
          </ul>
            </Accordion>
        </div>
       
    </div>
  )
}

export default NavBarHorizontal