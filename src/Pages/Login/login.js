import { fazerLogin } from "../../lib/firebase";
import logo_mundo_azul from "../Imagens/Mundo_azul_logo.png"
import icone_login from "../Imagens/icone_login.jpg";
import icone_senha from "../Imagens/icone_senha.jpg";

export function login () {
    const containerLogin = document.createElement("div"); 
    
    const templateLogin = `   
    
    <header></header>

   <main>

     <div class = container-login>
     <section class="logotipo">

     <img src= ${logo_mundo_azul} alt="Logo da página"> 

     <p class="resumo_1">
      O Mundo Azul, é uma rede social destinada a mães, pais e cuidadores 
      de pessoas com TEA (Transtorno do Espectro Autista). 
      </p>
      <p class="resumo_2">
      Aqui você encontrará  acolhimento, empatia e dicas importantes para 
      entender melhor sobre este mundo. 
     </p>
      </section>

     <section class="formulario">
     <h2 class="bem_vindos">Sejam bem vindes ao</h2>
     <h1>Mundo Azul</h1>
     <img src= ${icone_login} alt="Ìcone do login" class="icone_login">
     <label for="login" >Login</label>
     <input type = "text" class="login" id = "email-login" name="login" placeholder = "" required>

     <img src= ${icone_senha} alt="Ìcone da senha" class="icone_senha">
     <label for="senha" >Senha</label>
     <input type = "password"  class="login" id = "senha-login" name="senha" placeholder = "" required>
     
     <a href= "/#recuperar" id="recuperar-senha" class="recuperar-senha">Esqueci a senha</a>
          
     <button type="submit" id= "entrar">Entrar</button>

      <p class="cadastro">Não está cadastrado? <a href= "/#cadastro-clique-aqui" class="clique-aqui" id="clique-aqui">Clique aqui!</a></p>
     </section>
     </div>

   </main>

   <footer>
   <p class="desenvolvedoras"> Desenvolvido por Lilian Damadi</p>
   </footer>
`;
containerLogin.innerHTML= templateLogin;

const loginPage = document.createElement("link"); loginPage.rel = "stylesheet"; 
loginPage.href = "pages/login/login.css";
document.head.appendChild(loginPage);



function entrarLogin () {
  const loginEmail = containerLogin.querySelector("#email-login").value;
  const senhaEmail = containerLogin.querySelector("#senha-login").value;
  console.log (loginEmail, senhaEmail);

  fazerLogin (loginEmail, senhaEmail).then((userCredential) => {
  const user = userCredential.user;
  console.log("Usuário autenticado:", user);
  console.log(window.location.hash)
  window.location.hash = "feed" //executa a mudança para pagina feed (estudar mais window.location.hash )
  })

  .catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  return errorMessage + errorCode;      
  });
  
  }
 
  const botaoEntrar = containerLogin.querySelector("#entrar");
  botaoEntrar.addEventListener("click", entrarLogin); 

return containerLogin;
}