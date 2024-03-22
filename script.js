function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("lighty");

  // pegar a tag img
  const image = document.querySelector("#profile img");

  // substituir a imagem

  if (html.classList.contains("lighty")) {
    // se estiver no ligthy mode, adicionar  a imagem light
    image.setAttribute("src", "./assets/avatar-light.png");
    image.setAttribute(
      "alt",
      "Foto da bandeira da policia militar do estado do ceará"
    );
  } else {
    // se estiver sem ligthy mode, mander a imagem normal
    image.setAttribute("src", "./assets/avatar.png");
    image.setAttribute(
      "alt",
      "Foto de Vinicius no TAF guarda na faculdade ESTACIO"
    );
  }

  //da para trocar todo esse codigo por isso tudo
  // if (html.classList.contains("lighty")) {
  //   html.classList.remove("lighty")
  // } else {
  //   html.classList.add("lighty")
  // }
  // por //html.classList.toggle("lighty")
}

document.addEventListener("DOMContentLoaded", function () {
  const products = [
    {
      name: "Hobby Adrielly 1",
      description: "Hobby Adrielly",
      image: "./assets/Hobby Adrielly/Hobby Adrielly1.png",
      category: "hobby",
    },
    {
      name: "Hobby Adrielly 2",
      description: "Hobby Adrielly",
      image: "./assets/Hobby Adrielly/Hobby Adrielly2.png",
      category: "hobby",
    },
    {
      name: "Babydool Luxo 1",
      description: "Babydool Luxo ref 02",
      image: "assets/Babydool Luxo ref 02/Babydool Luxo ref1.png",
      category: "babydool",
    },
  ];

  const catalogElement = document.getElementById("catalogo");
  const modalElement = document.getElementById("modal");
  const modalImageElement = document.getElementById("imgModal");
  const closeModalElement = document.getElementById("closeModal");

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "produto";

    const imageElement = document.createElement("img");
    imageElement.src = product.image;
    imageElement.className = "image";
    imageElement.alt = product.name;

    imageElement.addEventListener("click", function () {
      modalElement.style.display = "block";
      modalImageElement.src = product.image;
    });

    const titleElement = document.createElement("h3");
    titleElement.innerText = product.name;

    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = product.description;

    productElement.appendChild(imageElement);
    productElement.appendChild(titleElement);
    productElement.appendChild(descriptionElement);

    catalogElement.appendChild(productElement);
  });

  closeModalElement.addEventListener("click", function () {
    modalElement.style.display = "none";
  });
});
