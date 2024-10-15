import { useNavigate } from "react-router-dom";
import { AccordionAreglo } from "../Effectos/AccordionAreglo";

function NavBarVertical() {
  const navigate=useNavigate()
  const NavBarMenu = [
    {
      id: 1,
      titulo: "Inicio",
      Link: "/inicio"
    },
    // {
    //   id: 2,
    //   titulo: "Servicios",
    //   submenu: [
    //     { titulo: "PRUEBA 1", Link: "/prueba1" },
    //     { titulo: "PRUEBA 2", Link: "/prueba2" },
    //   ]
    // },
    {
      id: 3,
      titulo: "Productos",
      Link: "/productos"
    },
    {
      id: 4,
      titulo: "Carrito",
      Link: "/carrito"
    }
  ];

  return (
    <div className="py-4 px-2">
      {
        NavBarMenu.map((item, index) => (
          
          <div key={index} className="">
            <AccordionAreglo title={item.titulo} link={item.Link}>
              {item.submenu && (
                <ul>
                  {item.submenu.map((submenuItem, subIndex) => (
                    <li onClick={()=>navigate(submenuItem.Link)} key={subIndex} className="">
                      <a href={submenuItem.Link}>{submenuItem.titulo}</a>
                    </li>
                  ))}
                </ul>
              ) }
            </AccordionAreglo>
          </div>
        ))
      }
    </div>
  );
}

export default NavBarVertical;
