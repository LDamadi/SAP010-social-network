  import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; /*acrescentei somente  signInWithEmailAndPassword para login*/
  import { auth } from "./configurações_do_firebase/"; /*importei do configurações do firebase*/
  import { db } from "./configurações_do_firebase/";
  import { addDoc, collection, getDocs, deleteDoc, doc } from "firebase/firestore";
  


  export function cadastrarEmail (email, password) {
  console.log("antes da função")

  return createUserWithEmailAndPassword(auth, email, password) /*função da promessa*/ 

    console.log("depois da função")
    
  }

  export function fazerLogin (email, password) {

  return signInWithEmailAndPassword(auth, email, password) /*função da promessa*/ 

    
  }
  
  
  export const salvarPost =  async (mensagem) => {
    const docRef = await addDoc(collection(db, "postagens"), { // AddDoc adiciona um novo documento a  coleção "Postagens"
    mensagem: mensagem,                                             //db é um objeto com dados, tem dois campos "mensagem" e "data"
    //data: new Date().toISOString() 
    //await para aguardar a conclusão da operação de adição do documento
    });
    console.log("Postagem salva com ID: ", docRef.id);  //docRef.id tem o ID do documento recém-adicionado  e imprime no console.

  
  //   const postContainer = document.getElementById("post-container");
  //     const newPostButton = document.createElement("button");
  //     newPostButton.innerText = "Novo Post"; // Defina o texto do botão como desejado
  //     newPostButton.addEventListener("click", () => {
  //         // Lógica a ser executada quando o botão for clicado
  //         alert("Botão de novo post clicado!");
  //     });
      //
   // postContainer.appendChild(newPostButton);
    console.log("Document written with ID: ", docRef.id);
   }

  export const buscarPostagens = async () => {
    const mensagensRef = collection(db, "postagens");
    const querySnapshot = await getDocs(mensagensRef);

    const postagens = [];
    querySnapshot.forEach((doc) => {
    const post = doc.data();
    postagens.push(post);
    });
    return postagens;
};

export const excluirPost = async (postId) => {
  try {
  const docId = doc(db, "postagens", postId);
    await deleteDoc(docId); // Exclui o documento com o ID especificado
    console.log("Postagem excluída com sucesso!");
  } catch (error) {
    console.error("Erro ao excluir postagem:", error);
  }
};




//import { getAuth, signOut } from "firebase/auth";

/*const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});      - para desconectar um usuário chame signOut*/