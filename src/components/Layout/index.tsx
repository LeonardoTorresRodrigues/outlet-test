import { Outlet } from "react-router-dom";

// Usando children para renderizar elementos na rota

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <div>
//       {children}

//       <p>Seja bem vindo!</p>
//       <p>Você está logado como administrador.</p>

//       <footer>Desenvolvido por @vaci_leo</footer>
//     </div>
//   )
// }


// Usando Outlet para renderizar elementos na rota

export default function Layout() {
  return (
    <div>
      <p>Você está logado como administrador.</p>

      <Outlet />

      <footer>Desenvolvido por @vaci_leo</footer>
    </div>
  )
}