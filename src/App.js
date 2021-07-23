import './styles/index.css';
import poster from './images/bf_logo.jpg';
import { useState } from 'react';
let USR=[];
let PRD=[];

export default function App(props) {
  const [user, setUser]=useState('');
  const [email, setEmail]=useState('');
  const [address, setAddress]=useState('');
  const [ID, setID]=useState('');
  const [pass, setPass]=useState('');

  const [product, setProduct]=useState('');
  const [type, setType]=useState('');
  const [description, setDescription]=useState('');
  const [price, setPrice]=useState('');
  const [pictureUrl, setPictureUrl]=useState('');

  let usr = {user, email, address, ID, pass};
  let prd = {product,type,description,price,pictureUrl}

  
  function handleSubmitUser(e) {
    e.preventDefault();
    USR.push(usr);
    let convertDataUser = JSON.stringify(USR);
    localStorage.setItem('users', convertDataUser);
    console.log({USR});
  }
  function handleSubmitProduct(e) {
    e.preventDefault();
    PRD.push(prd);
    let convertDataProduct = JSON.stringify(PRD);
    localStorage.setItem('products', convertDataProduct);
    console.log({PRD});
  }

  return (
    <div>
      <header id="logo" className="header">
        <img src={poster} alt="Logo empresa" />
      </header>

      <section id="forms-container" className="formsContainer">

        <section id="user-form-container">
          <form id="user-form" className="formStyle" onSubmit={handleSubmitUser}>
            <h1>Cadastrar novo usuário</h1>
            <div>
              <label htmlFor="nome">Nome: </label>
              <input id="nome" name="nome" type="text" placeholder="Nome Completo" autoComplete="username" value={user} onChange={e => setUser(e.target.value)}></input>
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input id="email" name="email" type="email" inputMode="email" placeholder="username@email.com" autoComplete="username" value={email} onChange={e => setEmail(e.target.value)}></input>
            </div>
            <div>
              <label htmlFor="address">Endereço: </label>
              <input id="address" name="address" type="text" placeholder="Endereço Completo" autoComplete="address" value={address} onChange={e => setAddress(e.target.value)}></input>
            </div>
            <div>
              <label htmlFor="ID">ID: </label>
              <input id="ID" name="ID" type="text" placeholder="ID do Usuario" value={ID} onChange={e => setID(e.target.value)}></input>
            </div>
            <div>
              <label htmlFor="Password">Senha: </label>
              <input id="Password" name="ID" type="text" placeholder="Senha Inicial" value={pass} onChange={e => setPass(e.target.value)}></input>
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        </section>

        <section id="product-form-container">
          <form id="product-form" className="formStyle" onSubmit={handleSubmitProduct}>
            <h1>Cadastrar novo produto</h1>
            <div>
              <label htmlFor="product">Nome: </label>
              <input id="product" name="product" type="text" placeholder="Nome do Produto" value={product} onChange={e => setProduct(e.target.value)}></input>
            </div>
            <div>
              <label htmlFor="type">Categoria: </label>
              <input id="type" name="type" type="text" placeholder="Categoria do produto" value={type} onChange={e => setType(e.target.value)}></input>
            </div>
            <div>
              <label htmlFor="description">Descrição: </label>
              <input id="description" name="description" type="text" placeholder="Breve descrição do produto" value={description} onChange={e => setDescription(e.target.value)}></input>
            </div>
            <div>
              <label htmlFor="price">Preço: </label>
              <input id="price" name="price" type="text" placeholder="Preço do produto" value={price} onChange={e => setPrice(e.target.value)}></input>
            </div>
            <div>
              <label htmlFor="pictureUrl">Imagem: </label>
              <input id="pictureUrl" name="pictureUrl" type="text" placeholder="URL da Imagem" value={pictureUrl} onChange={e => setPictureUrl(e.target.value)}></input>
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        </section>

      </section>

    </div>
  );
}