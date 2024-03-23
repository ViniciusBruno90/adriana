function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("lighty")

  // pegar a tag img
  const image = document.querySelector("#profile img")

  // substituir a imagem

  if (html.classList.contains("lighty")) {
    // se estiver no ligthy mode, adicionar  a imagem light
    image.setAttribute("src", "./assets/avatar-light.png")
    image.setAttribute(
      "alt",
      "Foto da bandeira da policia militar do estado do ceará"
    )
  } else {
    // se estiver sem ligthy mode, mander a imagem normal
    image.setAttribute("src", "./assets/avatar.png")
    image.setAttribute(
      "alt",
      "Foto de Vinicius no TAF guarda na faculdade ESTACIO"
    )
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
      name: "Hobby Adrielly Blue-Roxo",
      description: "Hobby Adrielly",
      image: "./assets/Hobby Adrielly/Hobby Adrielly1.png",
      category: "hobby",
      price: "R$ 22,50",
    },
    {
      name: "Hobby Adrielly Red",
      description: "Hobby Adrielly",
      image: "./assets/Hobby Adrielly/Hobby Adrielly2.png",
      category: "hobby",
      price: 22.0,
    },
    {
      name: "Hobby Adrielly Blue",
      description: "Hobby Adrielly",
      image: "./assets/Hobby Adrielly/Hobby Adrielly3.png",
      category: "hobby",
    },
    {
      name: "Hobby Adrielly Black",
      description: "Hobby Adrielly",
      image: "./assets/Hobby Adrielly/Hobby Adrielly4.png",
      category: "hobby",
    },
    {
      name: "Hobby Adrielly Blue-baby",
      description: "Hobby Adrielly",
      image: "./assets/Hobby Adrielly/Hobby Adrielly5.png",
      category: "hobby",
    },
    {
      name: "Hobby Adrielly Pink",
      description: "Hobby Adrielly",
      image: "./assets/Hobby Adrielly/Hobby Adrielly6.png",
      category: "hobby",
    },
    {
      name: "Hobby Adrielly Blue Ocean",
      description: "Hobby Adrielly",
      image: "./assets/Hobby Adrielly/Hobby Adrielly7.png",
      category: "hobby",
    },
    {
      name: "Hobby Adrielly Roxo",
      description: "Hobby Adrielly",
      image: "./assets/Hobby Adrielly/Hobby Adrielly8.png",
      category: "hobby",
    },
    {
      name: "Hobby Adrielly Pink-Baby",
      description: "Hobby Adrielly",
      image: "./assets/Hobby Adrielly/Hobby Adrielly9.png",
      category: "hobby",
    },
    {
      name: "Hobby Pink",
      description: "Hobby",
      image: "assets/Hobby/Hobby1.png",
      category: "hobby",
    },
    {
      name: "Hobby Pink",
      description: "Hobby",
      image: "assets/Hobby/Hobby2.png",
      category: "hobby",
    },
    {
      name: "Hobby Pink",
      description: "Hobby",
      image: "assets/Hobby/Hobby3.png",
      category: "hobby",
    },
    {
      name: "Hobby Blue Ocean",
      description: "Hobby",
      image: "assets/Hobby/Hobby4.png",
      category: "hobby",
    },
    {
      name: "Hobby Blue Ocean",
      description: "Hobby",
      image: "assets/Hobby/Hobby5.png",
      category: "hobby",
    },
    {
      name: "Hobby Red",
      description: "Hobby",
      image: "assets/Hobby/Hobby6.png",
      category: "hobby",
    },
    {
      name: "Hobby Red",
      description: "Hobby",
      image: "assets/Hobby/Hobby7.png",
      category: "hobby",
    },
    {
      name: "Hobby Vinho",
      description: "Hobby",
      image: "assets/Hobby/Hobby8.png",
      category: "hobby",
    },
    {
      name: "Hobby Vinho",
      description: "Hobby",
      image: "assets/Hobby/Hobby9.png",
      category: "hobby",
    },
    {
      name: "Babydool Luxo Pink",
      description: "Babydool Luxo",
      image: "assets/Babydool Luxo ref 02/Babydool Luxo ref1.png",
      category: "babydool",
    },
    {
      name: "Babydool Luxo Black",
      description: "Babydool Luxo",
      image: "assets/Babydool Luxo ref 02/Babydool Luxo ref2.png",
      category: "babydool",
    },
    {
      name: "Babydool Luxo Vinho",
      description: "Babydool Luxo",
      image: "assets/Babydool Luxo ref 02/Babydool Luxo ref3.png",
      category: "babydool",
    },
    {
      name: "Babydool Luxo Red",
      description: "Babydool Luxo",
      image: "assets/Babydool Luxo ref 02/Babydool Luxo ref4.png",
      category: "babydool",
    },
    {
      name: "Babydool Luxo Pink Baby",
      description: "Babydool Luxo",
      image: "assets/Babydool Luxo ref 02/Babydool Luxo ref5.png",
      category: "babydool",
    },
    {
      name: "Babydool Luxo Black",
      description: "Babydool Luxo",
      image: "assets/Babydool Luxo ref 02/Babydool Luxo ref6.png",
      category: "babydool",
    },
    {
      name: "Babydool Luxo Lilás Claro",
      description: "Babydool Luxo",
      image: "assets/Babydool Luxo ref 02/Babydool Luxo ref7.png",
      category: "babydool",
    },
    {
      name: "Babydool Luxo Lilás Claro ",
      description: "Babydool Luxo",
      image: "assets/Babydool Luxo ref 02/Babydool Luxo ref8.png",
      category: "babydool",
    },
    {
      name: "Babydool Luxo Vinho",
      description: "Babydool Luxo",
      image: "assets/Babydool Luxo ref 02/Babydool Luxo ref9.png",
      category: "babydool",
    },
    {
      name: "Babydool Luxo Pink Baby",
      description: "Babydool Luxo",
      image: "assets/Babydool Luxo ref 02/Babydool Luxo ref10.png",
      category: "babydool",
    },
    {
      name: "Lingerie Luxo Pink",
      description: "Lingerie Luxo",
      image: "assets/Lingerie Luxo/Lingerie Luxo1.png",
      category: "lingerie_luxo",
    },
    {
      name: "Lingerie Luxo Blue Baby",
      description: "Lingerie Luxo",
      image: "assets/Lingerie Luxo/Lingerie Luxo2.png",
      category: "lingerie_luxo",
    },
    {
      name: "Lingerie Luxo Blue Baby",
      description: "Lingerie Luxo",
      image: "assets/Lingerie Luxo/Lingerie Luxo3.png",
      category: "lingerie_luxo",
    },
    {
      name: "Lingerie Luxo Black",
      description: "Lingerie Luxo",
      image: "assets/Lingerie Luxo/Lingerie Luxo4.png",
      category: "lingerie_luxo",
    },
    {
      name: "Lingerie Luxo Blue Ocean",
      description: "Lingerie Luxo",
      image: "assets/Lingerie Luxo/Lingerie Luxo5.png",
      category: "lingerie_luxo",
    },
    {
      name: "Lingerie Luxo Vinho",
      description: "Lingerie Luxo",
      image: "assets/Lingerie Luxo/Lingerie Luxo6.png",
      category: "lingerie_luxo",
    },
    {
      name: "Lingerie Luxo Pink",
      description: "Lingerie Luxo",
      image: "assets/Lingerie Luxo/Lingerie Luxo7.png",
      category: "lingerie_luxo",
    },
    {
      name: "Lingerie Luxo Red-Black",
      description: "Lingerie Luxo",
      image: "assets/Lingerie Luxo/Lingerie Luxo8.png",
      category: "lingerie_luxo",
    },
    {
      name: "Lingerie Luxo Gray",
      description: "Lingerie Luxo",
      image: "assets/Lingerie Luxo/Lingerie Luxo9.png",
      category: "lingerie_luxo",
    },
    {
      name: "Lingerie Luxo Marron",
      description: "Lingerie Luxo",
      image: "assets/Lingerie Luxo/Lingerie Luxo10.png",
      category: "lingerie_luxo",
    },
    {
      name: "Camisola Luxo Red",
      description: "Camisola Luxo",
      image: "assets/Camisola Luxo ref 02/Camisola Luxo ref1.png",
      category: "camisola_luxo",
    },
    {
      name: "Camisola Luxo Red",
      description: "Camisola Luxo",
      image: "assets/Camisola Luxo ref 02/Camisola Luxo ref2.png",
      category: "camisola_luxo",
    },
    {
      name: "Camisola Luxo Black",
      description: "Camisola Luxo",
      image: "assets/Camisola Luxo ref 02/Camisola Luxo ref3.png",
      category: "camisola_luxo",
    },
    {
      name: "Camisola Luxo Black",
      description: "Camisola Luxo",
      image: "assets/Camisola Luxo ref 02/Camisola Luxo ref4.png",
      category: "camisola_luxo",
    },
    {
      name: "Camisola Luxo Lilás",
      description: "Camisola Luxo",
      image: "assets/Camisola Luxo ref 02/Camisola Luxo ref5.png",
      category: "camisola_luxo",
    },
    {
      name: "Camisola Luxo Lilás",
      description: "Camisola Luxo",
      image: "assets/Camisola Luxo ref 02/Camisola Luxo ref6.png",
      category: "camisola_luxo",
    },
    {
      name: "Camisola Luxo Blue Ocean",
      description: "Camisola Luxo",
      image: "assets/Camisola Luxo ref 02/Camisola Luxo ref7.png",
      category: "camisola_luxo",
    },
    {
      name: "Camisola Luxo Vinho",
      description: "Camisola Luxo",
      image: "assets/Camisola Luxo ref 02/Camisola Luxo ref8.png",
      category: "camisola_luxo",
    },
    {
      name: "Camisola Luxo Vinho",
      description: "Camisola Luxo",
      image: "assets/Camisola Luxo ref 02/Camisola Luxo ref9.png",
      category: "camisola_luxo",
    },
    {
      name: "Calcinha Microfibra ",
      description: "Calcinha Fio Duplo Microfibra",
      image:
        "assets/Calcinha Fio Duplo Microfibra/Calcinha fio duplo microfibra1.png",
      category: "calcinha_fio_duplo_microfibra",
    },
    {
      name: "Calcinha Microfibra ",
      description: "Calcinha Fio Duplo Microfibra",
      image:
        "assets/Calcinha Fio Duplo Microfibra/Calcinha fio duplo microfibra2.png",
      category: "calcinha_fio_duplo_microfibra",
    },
    {
      name: "Calcinha Microfibra ",
      description: "Calcinha Fio Duplo Microfibra",
      image:
        "assets/Calcinha Fio Duplo Microfibra/Calcinha fio duplo microfibra3.png",
      category: "calcinha_fio_duplo_microfibra",
    },
    {
      name: "Calcinha Microfibra ",
      description: "Calcinha Fio Duplo Microfibra",
      image:
        "assets/Calcinha Fio Duplo Microfibra/Calcinha fio duplo microfibra4.png",
      category: "calcinha_fio_duplo_microfibra",
    },
    {
      name: "Calcinha Microfibra ",
      description: "Calcinha Fio Duplo Microfibra",
      image:
        "assets/Calcinha Fio Duplo Microfibra/Calcinha fio duplo microfibra5.png",
      category: "calcinha_fio_duplo_microfibra",
    },
    {
      name: "Calcinha Microfibra ",
      description: "Calcinha Fio Duplo Microfibra",
      image:
        "assets/Calcinha Fio Duplo Microfibra/Calcinha fio duplo microfibra6.png",
      category: "calcinha_fio_duplo_microfibra",
    },
    {
      name: "Calcinha Lívia ",
      description: "Calcinha Modelo Lívia",
      image: "assets/Calcinha Modelo Lívia/Calcinha modelo Livia.png",
      category: "calcinha_modelo_livia",
    },
    {
      name: "Calcinha Lívia ",
      description: "Calcinha Modelo Lívia",
      image: "assets/Calcinha Modelo Lívia/Calcinha modelo Livia2.png",
      category: "calcinha_modelo_livia",
    },
    {
      name: "Calcinha Sther ",
      description: "Calcinha Modelo Sther",
      image: "assets/Calcinha Modelo Sther/Calcinha Modelo Sther1.png",
      category: "Calcinha Modelo Sther",
    },
    {
      name: "Calcinha Sther ",
      description: "Calcinha Modelo Sther",
      image: "assets/Calcinha Modelo Sther/Calcinha Modelo Sther2.png",
      category: "Calcinha Modelo Sther",
    },
    {
      name: "Calcinha Sther ",
      description: "Calcinha Modelo Sther",
      image: "assets/Calcinha Modelo Sther/Calcinha Modelo Sther3.png",
      category: "Calcinha Modelo Sther",
    },
    {
      name: "Calcinha Sther ",
      description: "Calcinha Modelo Sther",
      image: "assets/Calcinha Modelo Sther/Calcinha Modelo Sther4.png",
      category: "Calcinha Modelo Sther",
    },
    {
      name: "Conjunto Plus Size ",
      description: "Conjunto Plus Size",
      image: "assets/Conjunto Plus Size/Conjunto Plus Size1.png",
      category: "Conjunto Plus Size",
    },
    {
      name: "Conjunto Plus Size ",
      description: "Conjunto Plus Size",
      image: "assets/Conjunto Plus Size/Conjunto Plus Size3.png",
      category: "Conjunto Plus Size",
    },
    {
      name: "Conjunto Plus Size ",
      description: "Conjunto Plus Size",
      image: "assets/Conjunto Plus Size/Conjunto Plus Size4.png",
      category: "Conjunto Plus Size",
    },
    {
      name: "Conjunto Plus Size ",
      description: "Conjunto Plus Size",
      image: "assets/Conjunto Plus Size/Conjunto Plus Size5.png",
      category: "Conjunto Plus Size",
    },
    {
      name: "Conjunto Plus Size ",
      description: "Conjunto Plus Size",
      image: "assets/Conjunto Plus Size/Conjunto Plus Size6.png",
      category: "Conjunto Plus Size",
    },
    {
      name: "Conjunto Plus Size ",
      description: "Conjunto Plus Size",
      image: "assets/Conjunto Plus Size/Conjunto Plus Size7.png",
      category: "Conjunto Plus Size",
    },
    {
      name: "Conjunto Plus Size ",
      description: "Conjunto Plus Size",
      image: "assets/Conjunto Plus Size/Conjunto Plus Size8.png",
      category: "Conjunto Plus Size",
    },
    {
      name: "Conjunto Plus Size ",
      description: "Conjunto Plus Size",
      image: "assets/Conjunto Plus Size/Conjunto Plus Size9.png",
      category: "Conjunto Plus Size",
    },
    {
      name: "Conjunto Plus Size ",
      description: "Conjunto Plus Size",
      image: "assets/Conjunto Plus Size/Conjunto Plus Size2.png",
      category: "Conjunto Plus Size",
    },
    {
      name: "Calcinha Fio Lara ",
      description: "Calcinha Modelo Fio Lara",
      image: "assets/Modelo Fio Lara/Modelo Fio Lara1.png",
      category: "Calcinha Modelo Fio Lara",
    },
    {
      name: "Calcinha Fio Lara ",
      description: "Calcinha Modelo Fio Lara",
      image: "assets/Modelo Fio Lara/Modelo Fio Lara2.png",
      category: "Calcinha Modelo Fio Lara",
    },
    {
      name: "Calcinha Fio Lara ",
      description: "Calcinha Modelo Fio Lara",
      image: "assets/Modelo Fio Lara/Modelo Fio Lara3.png",
      category: "Calcinha Modelo Fio Lara",
    },
    {
      name: "Calcinha Fio Lara ",
      description: "Calcinha Modelo Fio Lara",
      image: "assets/Modelo Fio Lara/Modelo Fio Lara4.png",
      category: "Calcinha Modelo Fio Lara",
    },
    {
      name: "Calcinha Fio Lara ",
      description: "Calcinha Modelo Fio Lara",
      image: "assets/Modelo Fio Lara/Modelo Fio Lara5.png",
      category: "Calcinha Modelo Fio Lara",
    },
    {
      name: "Calcinha Isis ",
      description: "Calcinha Modelo Isis (Normal)",
      image: "assets/Modelo Isis ( Normal )/Modelo Isis (normal).png",
      category: "Calcinha Modelo Isis (Normal)",
    },
    {
      name: "Calcinha Isis ",
      description: "Calcinha Modelo Isis (Normal)",
      image: "assets/Modelo Isis ( Normal )/Modelo Isis (normal)2.png",
      category: "Calcinha Modelo Isis (Normal)",
    },
    {
      name: "Calcinha Isis ",
      description: "Calcinha Modelo Isis (Normal)",
      image: "assets/Modelo Isis ( Normal )/Modelo Isis (normal)3.png",
      category: "Calcinha Modelo Isis (Normal)",
    },
    {
      name: "Calcinha Isis ",
      description: "Calcinha Modelo Isis (Normal)",
      image: "assets/Modelo Isis ( Normal )/Modelo Isis (normal)4.png",
      category: "Calcinha Modelo Isis (Normal)",
    },
    {
      name: "Lingerie Priscila",
      description: "Lingerie Modelo Priscila",
      image: "assets/Modelo Priscila/Modelo Priscila1.png",
      category: "Lingerie Modelo Priscila",
    },
    {
      name: "Lingerie Priscila",
      description: "Lingerie Modelo Priscila",
      image: "assets/Modelo Priscila/Modelo Priscila2.png",
      category: "Lingerie Modelo Priscila",
    },
    {
      name: "Lingerie Priscila",
      description: "Lingerie Modelo Priscila",
      image: "assets/Modelo Priscila/Modelo Priscila3.png",
      category: "Lingerie Modelo Priscila",
    },
    {
      name: "Lingerie Priscila",
      description: "Lingerie Modelo Priscila",
      image: "assets/Modelo Priscila/Modelo Priscila4.png",
      category: "Lingerie Modelo Priscila",
    },
    {
      name: "Lingerie Priscila",
      description: "Lingerie Modelo Priscila",
      image: "assets/Modelo Priscila/Modelo Priscila5.png",
      category: "Lingerie Modelo Priscila",
    },
    {
      name: "Calcinha Sonza ",
      description: "Calcinha Modelo Sonza",
      image: "assets/Modelo Sonza/Modelo Sonza1.png",
      category: "Calcinha Modelo Sonza",
    },
    {
      name: "Calcinha Sonza ",
      description: "Calcinha Modelo Sonza",
      image: "assets/Modelo Sonza/Modelo Sonza2.png",
      category: "Calcinha Modelo Sonza",
    },
    {
      name: "Calcinha Sonza ",
      description: "Calcinha Modelo Sonza",
      image: "assets/Modelo Sonza/Modelo Sonza3.png",
      category: "Calcinha Modelo Sonza",
    },
    {
      name: "Calcinha Sonza ",
      description: "Calcinha Modelo Sonza",
      image: "assets/Modelo Sonza/Modelo Sonza4.png",
      category: "Calcinha Modelo Sonza",
    },
    {
      name: "Calcinha Sonza ",
      description: "Calcinha Modelo Sonza",
      image: "assets/Modelo Sonza/Modelo Sonza5.png",
      category: "Calcinha Modelo Sonza",
    },
    {
      name: "Calcinha Sonza ",
      description: "Calcinha Modelo Sonza",
      image: "assets/Modelo Sonza/Modelo Sonza6.png",
      category: "Calcinha Modelo Sonza",
    },
    {
      name: "Conjunto Tifany ",
      description: "Conjunto Modelo Tifany",
      image: "assets/Modelo Tifany/Modelo Tifany1.png",
      category: "Conjunto Modelo Tifany",
    },
    {
      name: "Conjunto Tifany ",
      description: "Conjunto Modelo Tifany",
      image: "assets/Modelo Tifany/Modelo Tifany2.png",
      category: "Conjunto Modelo Tifany",
    },
    {
      name: "Conjunto Tifany ",
      description: "Conjunto Modelo Tifany",
      image: "assets/Modelo Tifany/Modelo Tifany3.png",
      category: "Conjunto Modelo Tifany",
    },
    {
      name: "Conjunto Tifany ",
      description: "Conjunto Modelo Tifany",
      image: "assets/Modelo Tifany/Modelo Tifany4.png",
      category: "Conjunto Modelo Tifany",
    },
    {
      name: "Conjunto Tifany ",
      description: "Conjunto Modelo Tifany",
      image: "assets/Modelo Tifany/Modelo Tifany5.png",
      category: "Conjunto Modelo Tifany",
    },
    {
      name: "Conjunto Tifany ",
      description: "Conjunto Modelo Tifany",
      image: "assets/Modelo Tifany/Modelo Tifany6.png",
      category: "Conjunto Modelo Tifany",
    },
    {
      name: "Conjunto Tifany ",
      description: "Conjunto Modelo Tifany",
      image: "assets/Modelo Tifany/Modelo Tifany7.png",
      category: "Conjunto Modelo Tifany",
    },
    {
      name: "Conjunto Tifany ",
      description: "Conjunto Modelo Tifany",
      image: "assets/Modelo Tifany/Modelo Tifany8.png",
      category: "Conjunto Modelo Tifany",
    },
    {
      name: "Conjunto Tifany ",
      description: "Conjunto Modelo Tifany",
      image: "assets/Modelo Tifany/Modelo Tifany9.png",
      category: "Conjunto Modelo Tifany",
    },
    {
      name: "Conjunto Tifany ",
      description: "Conjunto Modelo Tifany",
      image: "assets/Modelo Tifany/Modelo Tifany10.png",
      category: "Conjunto Modelo Tifany",
    },
    {
      name: "Short Segunda Pele ",
      description: "Short Segunda Pele",
      image: "assets/Short Segunda Pele/Short Segunda Pele1.png",
      category: "Short Segunda Pele",
    },
    {
      name: "Short Segunda Pele ",
      description: "Short Segunda Pele",
      image: "assets/Short Segunda Pele/Short Segunda Pele2.png",
      category: "Short Segunda Pele",
    },
    {
      name: "Short Segunda Pele ",
      description: "Short Segunda Pele",
      image: "assets/Short Segunda Pele/Short Segunda Pele3.png",
      category: "Short Segunda Pele",
    },
    {
      name: "Sutiâ Tomara que Caia ",
      description: "Sutiâ Tomara que Caia alça removível",
      image:
        "assets/Tomara que caia com alça removível/Tomara que caia geral.png",
      category: "Sutiâ Tomara que Caia alça removível",
    },
    {
      name: "Sutiâ Tomara que Caia ",
      description: "Sutiâ Tomara que Caia alça removível",
      image:
        "assets/Tomara que caia com alça removível/Tomara que caia geral2.png",
      category: "Sutiâ Tomara que Caia alça removível",
    },
    {
      name: "Sutiâ Tomara que Caia ",
      description: "Sutiâ Tomara que Caia alça removível",
      image:
        "assets/Tomara que caia com alça removível/Tomara que caia geral3.png",
      category: "Sutiâ Tomara que Caia alça removível",
    },
    {
      name: "Sutiâ Tomara que Caia ",
      description: "Sutiâ Tomara que Caia alça removível",
      image:
        "assets/Tomara que caia com alça removível/Tomara que caia geral4.png",
      category: "Sutiâ Tomara que Caia alça removível",
    },
    {
      name: "Sutiâ Tomara que Caia ",
      description: "Sutiâ Tomara que Caia alça removível",
      image:
        "assets/Tomara que caia com alça removível/Tomara que caia geral5.png",
      category: "Sutiâ Tomara que Caia alça removível",
    },
    {
      name: "Sutiâ Tomara que Caia ",
      description: "Sutiâ Tomara que Caia alça removível",
      image:
        "assets/Tomara que caia com alça removível/Tomara que caia geral6.png",
      category: "Sutiâ Tomara que Caia alça removível",
    },
  ]

  const catalogElement = document.getElementById("catalogo")
  const modalElement = document.getElementById("modal")
  const modalImageElement = document.getElementById("imgModal")
  const closeModalElement = document.getElementById("closeModal")

  function exibirProdutos(filtro) {
    catalogElement.innerHTML = ""

    const produtosFiltrados =
      filtro === "todos"
        ? products
        : products.filter((product) => product.category === filtro)

    produtosFiltrados.forEach((product) => {
      const productElement = document.createElement("div")
      productElement.className = "produto"

      const imageElement = document.createElement("img")
      imageElement.src = product.image
      imageElement.className = "image"
      imageElement.alt = product.name

      imageElement.addEventListener("click", function () {
        modalElement.style.display = "block"
        modalImageElement.src = product.image
      })

      const titleElement = document.createElement("h3")
      titleElement.innerText = product.name

      const descriptionElement = document.createElement("p")
      descriptionElement.innerText = product.description

      const priceElement = document.createElement("h4")
      priceElement.innerText = product.price

      productElement.appendChild(imageElement)
      productElement.appendChild(titleElement)
      productElement.appendChild(descriptionElement)
      productElement.appendChild(priceElement)

      catalogElement.appendChild(productElement)
    })
  }

  function atualizarFiltroAtivo(novaCategoria) {
    document.querySelectorAll(".filtro").forEach((button) => {
      button.classList.remove("filtro-ativo")
    })

    document
      .querySelector('.filtro[data-categoria="' + novaCategoria + '"]')
      .classList.add("filtro-ativo")
  }

  closeModalElement.addEventListener("click", function () {
    modalElement.style.display = "none"
  })

  window.filtrarCategoria = function (category) {
    exibirProdutos(category)
    atualizarFiltroAtivo(category)
  }

  exibirProdutos("todos")
  atualizarFiltroAtivo("todos")
})
