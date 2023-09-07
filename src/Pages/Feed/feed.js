import { salvarPost, buscarPostagens, excluirPost } from "../../lib/firebase";

export function feed() {
  const containerFeed = document.createElement("div");

  const feedPage = document.createElement("link"); //criado para estilizar no CSS
  feedPage.rel = "stylesheet";
  feedPage.href = "pages/Feed/feed.css";
  document.head.appendChild(feedPage);

  
  const header = document.createElement("header");
  header.innerHTML = `
    <p>"Há palavras que ferem como espada, mas a língua dos sábios traz a cura... Provérbios 12:18".</p>
  `;

  const main = document.createElement("main");
  const postContainer = document.createElement("div");
  postContainer.classList.add("container-feed");
  postContainer.id = "post-container";

  const textarea = document.createElement("textarea");
  textarea.classList.add("post");
  textarea.placeholder = "O que deseja compartilhar?";

  const mensagemElement = document.createElement("p");
  mensagemElement.classList.add("mensagem");

  const timestampElement = document.createElement("p");
  timestampElement.classList.add("timestamp");

  const btnPostar = document.createElement("button");
  btnPostar.id = "btnPostar";
  btnPostar.classList.add("btn-post");
  btnPostar.textContent = "Postar";

  const btnExcluir = document.createElement("button");
  btnExcluir.id = "excluir-post";
  btnExcluir.classList.add("excluir-post");
  btnExcluir.textContent = "Excluir";

  const footer = document.createElement("footer");
  footer.innerHTML = `<p class="desenvolvedora">Desenvolvido por Lilian Damadi</p>`;

  containerFeed.appendChild(header);
  containerFeed.appendChild(main);
  main.appendChild(postContainer);
  postContainer.appendChild(textarea);
  postContainer.appendChild(mensagemElement);
  postContainer.appendChild(timestampElement);
  postContainer.appendChild(btnPostar);
  postContainer.appendChild(btnExcluir);
  containerFeed.appendChild(footer);

  btnPostar.addEventListener("click", async () => {
    const textoPost = textarea.value;
    console.log("Texto do post:", textoPost);

    if (textoPost.trim() !== "") {
      // Verifica se o texto não está vazio ou só contém espaços
      await salvarPost(textoPost);
      const postagens = await buscarPostagens();
      postContainer.innerHTML = "";

      postagens.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("postagem");

        const mensagemElement = document.createElement("p");
        mensagemElement.textContent = post.mensagem;

        const timestampElement = document.createElement("p");
        timestampElement.textContent = post.data;

        const excluirButton = document.createElement("button");
        excluirButton.textContent = "Excluir";
        excluirButton.dataset.postId = post.id; // Adicione o ID da postagem como um atributo de dados

        excluirButton.addEventListener("click", async () => {
          const postId = excluirButton.dataset.postId;
          await excluirPost(postId);
          
          postContainer.removeChild(postElement); // Remova a postagem após a exclusão
        });

        postElement.appendChild(mensagemElement);
        postElement.appendChild(timestampElement);
        postElement.appendChild(excluirButton);
        postContainer.appendChild(postElement);
      });
    }
  });

  return containerFeed;
}