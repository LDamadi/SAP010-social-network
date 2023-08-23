import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; /*acrescentei somente  signInWithEmailAndPassword para login*/
import { auth } from "./configurações_do_firebase/"; /*importei do configurações do firebase*/
import { db } from "./configurações_do_firebase/";

export function cadastrarEmail (email, password) {
console.log("antes da função")

return createUserWithEmailAndPassword(auth, email, password) /*função da promessa*/ 

  console.log("depois da função")
  
}

export function fazerLogin (email, password) {

return signInWithEmailAndPassword(auth, email, password) /*função da promessa*/ 

  
}

/*export function entrarFeed (coleção que é minha data base) {

  return signInWithEmailAndPassword(entrar) 
      
  }*/


import { getAuth, signOut } from "firebase/auth";

/*const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});      - para desconectar um usuário chame signOut*/