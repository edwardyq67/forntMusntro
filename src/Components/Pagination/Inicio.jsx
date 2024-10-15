import { useSelector } from "react-redux";

function Inicio() {
  const User = useSelector((state) => state.User); // Accede al estado del usuario
  console.log(User.user.firstName); // Muestra la información del usuario en la consola

  return (
    <div className="py-4 px-2">
      <h1 className="text-xl md:text-2xl font-bold font-serif">Bienvenido, {User.user.firstName} {User.user.lastName}</h1> {/* Muestra un mensaje de bienvenida si hay un usuario */}
    </div>
  );
}

export default Inicio;
