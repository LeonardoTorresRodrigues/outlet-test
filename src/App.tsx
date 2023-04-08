import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import PageA from './components/PageA';
import PageB from "./components/PageB";

// Renderizando rotas na forma antiga do react-router-dom

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//         path='/a'
//         element={
//           <Layout>
//             <PageA />
//           </Layout>
//         }
//         />
//         <Route
//         path='/b'
//         element={
//           <Layout>
//             <PageB />
//           </Layout>
//         }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }


// Usando o Outlet para renderizar elementos das rotas aninhadas

export default  function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/* Quando for feito o match nessa rota, o Outlet renderizara os elementos da rota filho */}
        <Route path='/' element={<Layout />}> 
          <Route path='a' element={<PageA />}/>
          <Route path='b' element={<PageB />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
