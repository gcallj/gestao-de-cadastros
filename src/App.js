import './styles/index.css';
import poster from './images/bf_logo.jpg';

export default function App() {
  function handleSubmitUser(e){
    e.preventDefault();
    console.log("Botão do usuário pressionado");
  }
  function handleSubmitProduct(e){
    e.preventDefault();
    console.log("Botão do produto pressionado");
  }
  
  return (
    <div>
      <header id="logo" className="header">
        <img src={poster} alt="Logo empresa"/>
      </header>

      <section id="forms-container"className="formsContainer">

        <section id="user-form-container">
          <form id="user-form" className="formStyle" onSubmit={handleSubmitUser}>
            <h1>Cadastrar novo usuário</h1>
            <div>
              <label htmlFor="nome">Nome: </label>
              <input id="nome" name="nome" type="text" placeholder="Nome Completo" autoComplete="username"></input>
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input id="email" name="email" type="email" inputMode="email" placeholder="username@email.com" autoComplete="username"></input>
            </div>
            <div>
              <label htmlFor="address">Endereço: </label>
              <input id="address" name="address" type="text" placeholder="Endereço Completo" autoComplete="address"></input>
            </div>
            <div>
              <label htmlFor="ID">ID: </label>
              <input id="ID" name="ID" type="text" placeholder="ID do Usuario"></input>
            </div>
            <div>
              <label htmlFor="Password">Senha: </label>
              <input id="Password" name="ID" type="text" placeholder="Senha Inicial"></input>
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        </section>

        <section id="product-form-container">
          <form id="product-form" className="formStyle" onSubmit={handleSubmitProduct}>
          <h1>Cadastrar novo produto</h1>
            <div>
              <label htmlFor="product">Nome: </label>
              <input id="product" name="product" type="text" placeholder="Nome do Produto"></input>
            </div>
            <div>
              <label htmlFor="type">Categoria: </label>
              <input id="type" name="type" type="text" placeholder="Categoria do produto"></input>
            </div>
            <div>
              <label htmlFor="description">Descrição: </label>
              <input id="description" name="description" type="text" placeholder="Breve descrição do produto"></input>
            </div>
            <div>
              <label htmlFor="price">Preço: </label>
              <input id="price" name="price" type="text" placeholder="Preço do produto"></input>
            </div>
            <div>
              <label htmlFor="pictureUrl">Imagem: </label>
              <input id="pictureUrl" name="pictureUrl" type="text" placeholder="URL da Imagem"></input>
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        </section>

      </section>

    </div>
  );
}