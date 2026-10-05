import { useState } from "react";
import Login from "../pages/Login.tsx";
import Home from "../pages/Home.tsx";
import Produtos from "../pages/Produtos.tsx";

function App() {
  const [usuario, setUsuario] = useState<any>(null);
  const [pagina, setPagina] = useState("home");

  function fazerLogout() {
    setUsuario(null);
    setPagina("home");
  }

  if (!usuario) {
    return <Login onLogin={setUsuario} />;
  }

  if (pagina === "produtos") {
    return (
      <div>
        <header className="header">
          <div>
            <h1>Controle de Estoque</h1>
            <p>Produtos</p>
          </div>

          <div className="header-buttons">
            <button
              className="home-button"
              onClick={() => setPagina("home")}
            >
              Início
            </button>

            <button
              className="logout-button"
              onClick={fazerLogout}
            >
              Sair
            </button>
          </div>
        </header>

        <Produtos />
      </div>
    );
  }

  return (
    <Home
      usuario={usuario}
      onLogout={fazerLogout}
      onProdutos={() => setPagina("produtos")}
    />
  );
}

export default App;