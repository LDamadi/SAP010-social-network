import { cadastrarEmail } from "../../lib/firebase"; /*está importando a função cadastrarEmail do arquivo localizado em firebase.js*/
import logo_mundo_azul from "../Imagens/Mundo_azul_logo.png"
  
export function cadastro() {
  const containerCadastro = document.createElement("div");

  const templateCadastro = `   
    
    <header></header>

   <main>

     <div class = container-cadastro>
     <section class="logotipo_cad">

     <img src= ${logo_mundo_azul} alt="Logo da página"> 

     </section>

     <section class="campos_de_preenchimento">
     <h2 class="subtitulo">Cadastre-se aqui!</h2>
     <label for="name" >Nome completo</label>
     <input type = "name"  class="name" id = "name" name= "name" placeholder = "" requered>
     
     <label for="email" >E-mail</label>
     <input type = "email" class="email" id = "email" name="email" placeholder = "" requered>
     
     <label for="senha" >Senha</label>
     <input type = "password" class="senha" id = "senha" name="senha" placeholder = "" requered>
     
     <button type="submit" id="button">Cadastrar</button>
     </section>
     
     </div>

    </main>

   <footer>
    <p> Desenvolvido por Lilian Damadi</p>
   </footer>
`;
  containerCadastro.innerHTML = templateCadastro;

  const cadastroPage = document.createElement("link");
  cadastroPage.rel = "stylesheet";
  cadastroPage.href = "pages/Cadastro/Cadastro.css";
  document.head.appendChild(cadastroPage);

  function criarCadastro() {
    console.log("oi")
    const nome = containerCadastro.querySelector("#name");
    const email = containerCadastro.querySelector("#email");
    const senha = containerCadastro.querySelector("#senha");

    console.log("oba")
    nome.value
    console.log(nome.value)
    console.log(email.value)

    /*chamei a função cadastrarEmail aqui dentro da função e usar os parametros nome e email*/

    const emailCadastro = email.value;/*se chamar só email, vou chamar input e não quero isso, quero chamar o valor de email*/
    const senhaCadastro = senha.value;

    cadastrarEmail(emailCadastro, senhaCadastro) /*retorno da promessa*/
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(userCredential.user)
        console.log(window.location.hash)
        window.location.hash = "login" //executa a mudança para pagina login após clicar em cadastrat (estudar mais window.location.hash )
        //return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(error)
      });
  }
  const botaoCriarUsuario = containerCadastro.querySelector("#button");
  botaoCriarUsuario.addEventListener("click", criarCadastro);


  return containerCadastro;
}
