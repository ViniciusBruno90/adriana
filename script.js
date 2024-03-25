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
      price: "P - M - G",
    },
    {
      name: "Hobby Adrielly Red",
      description: "Hobby Adrielly",
      image: "./assets/Hobby Adrielly/Hobby Adrielly2.png",
      category: "hobby",
      price: "P - M - G",
    },
    {
      name: "Hobby Adrielly Blue",
      description: "Hobby Adrielly",
      image: "./assets/Hobby Adrielly/Hobby Adrielly3.png",
      category: "hobby",
      price: "P - M - G",
    },
    {
      name: "Hobby Adrielly Black",
      description: "Hobby Adrielly",
      image: "./assets/Hobby Adrielly/Hobby Adrielly4.png",
      category: "hobby",
      price: "P - M - G",
    },
    {
      name: "Hobby Adrielly Blue-baby",
      description: "Hobby Adrielly",
      image: "./assets/Hobby Adrielly/Hobby Adrielly5.png",
      category: "hobby",
      price: "P - M - G",
    },
    {
      name: "Hobby Adrielly Pink",
      description: "Hobby Adrielly",
      image: "./assets/Hobby Adrielly/Hobby Adrielly6.png",
      category: "hobby",
      price: "P - M - G",
    },
    {
      name: "Hobby Adrielly Blue Ocean",
      description: "Hobby Adrielly",
      image: "./assets/Hobby Adrielly/Hobby Adrielly7.png",
      category: "hobby",
      price: "P - M - G",
    },
    {
      name: "Hobby Adrielly Roxo",
      description: "Hobby Adrielly",
      image: "./assets/Hobby Adrielly/Hobby Adrielly8.png",
      category: "hobby",
      price: "P - M - G",
    },
    {
      name: "Hobby Adrielly Pink-Baby",
      description: "Hobby Adrielly",
      image: "./assets/Hobby Adrielly/Hobby Adrielly9.png",
      category: "hobby",
      price: "P - M - G",
    },
    {
      name: "Hobby Pink",
      description: "Hobby",
      image: "assets/Hobby/Hobby1.png",
      category: "hobby",
      price: "Tanho único",
    },
    {
      name: "Hobby Pink",
      description: "Hobby",
      image: "assets/Hobby/Hobby2.png",
      category: "hobby",
      price: "Tanho único",
    },
    {
      name: "Hobby Pink",
      description: "Hobby",
      image: "assets/Hobby/Hobby3.png",
      category: "hobby",
      price: "Tanho único",
    },
    {
      name: "Hobby Blue Ocean",
      description: "Hobby",
      image: "assets/Hobby/Hobby4.png",
      category: "hobby",
      price: "Tanho único",
    },
    {
      name: "Hobby Blue Ocean",
      description: "Hobby",
      image: "assets/Hobby/Hobby5.png",
      category: "hobby",
      price: "Tanho único",
    },
    {
      name: "Hobby Red",
      description: "Hobby",
      image: "assets/Hobby/Hobby6.png",
      category: "hobby",
      price: "Tanho único",
    },
    {
      name: "Hobby Red",
      description: "Hobby",
      image: "assets/Hobby/Hobby7.png",
      category: "hobby",
      price: "Tanho único",
    },
    {
      name: "Hobby Vinho",
      description: "Hobby",
      image: "assets/Hobby/Hobby8.png",
      category: "hobby",
      price: "Tanho único",
    },
    {
      name: "Hobby Vinho",
      description: "Hobby",
      image: "assets/Hobby/Hobby9.png",
      category: "hobby",
      price: "Tanho único",
    },
    {
      name: "Babydool Luxo Pink",
      description: "Babydool Luxo",
      image: "assets/Babydool Luxo ref 02/Babydool Luxo ref1.png",
      category: "babydool",
      price: "P - M - G - GG",
    },
    {
      name: "Babydool Luxo Black",
      description: "Babydool Luxo",
      image: "assets/Babydool Luxo ref 02/Babydool Luxo ref2.png",
      category: "babydool",
      price: "P - M - G - GG",
    },
    {
      name: "Babydool Luxo Vinho",
      description: "Babydool Luxo",
      image: "assets/Babydool Luxo ref 02/Babydool Luxo ref3.png",
      category: "babydool",
      price: "P - M - G - GG",
    },
    {
      name: "Babydool Luxo Red",
      description: "Babydool Luxo",
      image: "assets/Babydool Luxo ref 02/Babydool Luxo ref4.png",
      category: "babydool",
      price: "P - M - G - GG",
    },
    {
      name: "Babydool Luxo Pink Baby",
      description: "Babydool Luxo",
      image: "assets/Babydool Luxo ref 02/Babydool Luxo ref5.png",
      category: "babydool",
      price: "P - M - G - GG",
    },
    {
      name: "Babydool Luxo Black",
      description: "Babydool Luxo",
      image: "assets/Babydool Luxo ref 02/Babydool Luxo ref6.png",
      category: "babydool",
      price: "P - M - G - GG",
    },
    {
      name: "Babydool Luxo Lilás Claro",
      description: "Babydool Luxo",
      image: "assets/Babydool Luxo ref 02/Babydool Luxo ref7.png",
      category: "babydool",
      price: "P - M - G - GG",
    },
    {
      name: "Babydool Luxo Lilás Claro ",
      description: "Babydool Luxo",
      image: "assets/Babydool Luxo ref 02/Babydool Luxo ref8.png",
      category: "babydool",
      price: "P - M - G - GG",
    },
    {
      name: "Babydool Luxo Vinho",
      description: "Babydool Luxo",
      image: "assets/Babydool Luxo ref 02/Babydool Luxo ref9.png",
      category: "babydool",
      price: "P - M - G - GG",
    },
    {
      name: "Babydool Luxo Pink Baby",
      description: "Babydool Luxo",
      image: "assets/Babydool Luxo ref 02/Babydool Luxo ref10.png",
      category: "babydool",
      price: "P - M - G - GG",
    },
    {
      name: "Lingerie Luxo Pink",
      description: "Lingerie Luxo",
      image: "assets/Lingerie Luxo/Lingerie Luxo1.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Luxo Blue Baby",
      description: "Lingerie Luxo",
      image: "assets/Lingerie Luxo/Lingerie Luxo2.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Luxo Blue Baby",
      description: "Lingerie Luxo",
      image: "assets/Lingerie Luxo/Lingerie Luxo3.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Luxo Black",
      description: "Lingerie Luxo",
      image: "assets/Lingerie Luxo/Lingerie Luxo4.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Luxo Blue Ocean",
      description: "Lingerie Luxo",
      image: "assets/Lingerie Luxo/Lingerie Luxo5.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Luxo Vinho",
      description: "Lingerie Luxo",
      image: "assets/Lingerie Luxo/Lingerie Luxo6.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Luxo Pink",
      description: "Lingerie Luxo",
      image: "assets/Lingerie Luxo/Lingerie Luxo7.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Luxo Red-Black",
      description: "Lingerie Luxo",
      image: "assets/Lingerie Luxo/Lingerie Luxo8.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Luxo Gray",
      description: "Lingerie Luxo",
      image: "assets/Lingerie Luxo/Lingerie Luxo9.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Luxo Marron",
      description: "Lingerie Luxo",
      image: "assets/Lingerie Luxo/Lingerie Luxo10.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Camisola Luxo Red",
      description: "Camisola Luxo",
      image: "assets/Camisola Luxo ref 02/Camisola Luxo ref1.png",
      category: "camisola_luxo",
      price: "P - M - G - GG",
    },
    {
      name: "Camisola Luxo Red",
      description: "Camisola Luxo",
      image: "assets/Camisola Luxo ref 02/Camisola Luxo ref2.png",
      category: "camisola_luxo",
      price: "P - M - G - GG",
    },
    {
      name: "Camisola Luxo Black",
      description: "Camisola Luxo",
      image: "assets/Camisola Luxo ref 02/Camisola Luxo ref3.png",
      category: "camisola_luxo",
      price: "P - M - G - GG",
    },
    {
      name: "Camisola Luxo Black",
      description: "Camisola Luxo",
      image: "assets/Camisola Luxo ref 02/Camisola Luxo ref4.png",
      category: "camisola_luxo",
      price: "P - M - G - GG",
    },
    {
      name: "Camisola Luxo Lilás",
      description: "Camisola Luxo",
      image: "assets/Camisola Luxo ref 02/Camisola Luxo ref5.png",
      category: "camisola_luxo",
      price: "P - M - G - GG",
    },
    {
      name: "Camisola Luxo Lilás",
      description: "Camisola Luxo",
      image: "assets/Camisola Luxo ref 02/Camisola Luxo ref6.png",
      category: "camisola_luxo",
      price: "P - M - G - GG",
    },
    {
      name: "Camisola Luxo Blue Ocean",
      description: "Camisola Luxo",
      image: "assets/Camisola Luxo ref 02/Camisola Luxo ref7.png",
      category: "camisola_luxo",
      price: "P - M - G - GG",
    },
    {
      name: "Camisola Luxo Vinho",
      description: "Camisola Luxo",
      image: "assets/Camisola Luxo ref 02/Camisola Luxo ref8.png",
      category: "camisola_luxo",
      price: "P - M - G - GG",
    },
    {
      name: "Camisola Luxo Vinho",
      description: "Camisola Luxo",
      image: "assets/Camisola Luxo ref 02/Camisola Luxo ref9.png",
      category: "camisola_luxo",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Microfibra ",
      description: "Calcinha Fio Duplo Microfibra",
      image:
        "assets/Calcinha Fio Duplo Microfibra/Calcinha fio duplo microfibra1.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Microfibra ",
      description: "Calcinha Fio Duplo Microfibra",
      image:
        "assets/Calcinha Fio Duplo Microfibra/Calcinha fio duplo microfibra2.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Microfibra ",
      description: "Calcinha Fio Duplo Microfibra",
      image:
        "assets/Calcinha Fio Duplo Microfibra/Calcinha fio duplo microfibra3.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Microfibra ",
      description: "Calcinha Fio Duplo Microfibra",
      image:
        "assets/Calcinha Fio Duplo Microfibra/Calcinha fio duplo microfibra4.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Microfibra ",
      description: "Calcinha Fio Duplo Microfibra",
      image:
        "assets/Calcinha Fio Duplo Microfibra/Calcinha fio duplo microfibra5.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Microfibra ",
      description: "Calcinha Fio Duplo Microfibra",
      image:
        "assets/Calcinha Fio Duplo Microfibra/Calcinha fio duplo microfibra6.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Lívia ",
      description: "Calcinha Modelo Lívia",
      image: "assets/Calcinha Modelo Lívia/Calcinha modelo Livia.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Lívia ",
      description: "Calcinha Modelo Lívia",
      image: "assets/Calcinha Modelo Lívia/Calcinha modelo Livia2.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Sther ",
      description: "Calcinha Modelo Sther",
      image: "assets/Calcinha Modelo Sther/Calcinha Modelo Sther1.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Sther ",
      description: "Calcinha Modelo Sther",
      image: "assets/Calcinha Modelo Sther/Calcinha Modelo Sther2.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Sther ",
      description: "Calcinha Modelo Sther",
      image: "assets/Calcinha Modelo Sther/Calcinha Modelo Sther3.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Sther ",
      description: "Calcinha Modelo Sther",
      image: "assets/Calcinha Modelo Sther/Calcinha Modelo Sther4.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Conjunto Plus Size ",
      description: "Conjunto Plus Size",
      image: "assets/Conjunto Plus Size/Conjunto Plus Size1.png",
      category: "Conjunto Plus Size",
      price: "P - M - G - GG",
    },
    {
      name: "Conjunto Plus Size ",
      description: "Conjunto Plus Size",
      image: "assets/Conjunto Plus Size/Conjunto Plus Size3.png",
      category: "Conjunto Plus Size",
      price: "P - M - G - GG",
    },
    {
      name: "Conjunto Plus Size ",
      description: "Conjunto Plus Size",
      image: "assets/Conjunto Plus Size/Conjunto Plus Size4.png",
      category: "Conjunto Plus Size",
      price: "P - M - G - GG",
    },
    {
      name: "Conjunto Plus Size ",
      description: "Conjunto Plus Size",
      image: "assets/Conjunto Plus Size/Conjunto Plus Size5.png",
      category: "Conjunto Plus Size",
      price: "P - M - G - GG",
    },
    {
      name: "Conjunto Plus Size ",
      description: "Conjunto Plus Size",
      image: "assets/Conjunto Plus Size/Conjunto Plus Size6.png",
      category: "Conjunto Plus Size",
      price: "P - M - G - GG",
    },
    {
      name: "Conjunto Plus Size ",
      description: "Conjunto Plus Size",
      image: "assets/Conjunto Plus Size/Conjunto Plus Size7.png",
      category: "Conjunto Plus Size",
      price: "P - M - G - GG",
    },
    {
      name: "Conjunto Plus Size ",
      description: "Conjunto Plus Size",
      image: "assets/Conjunto Plus Size/Conjunto Plus Size8.png",
      category: "Conjunto Plus Size",
      price: "P - M - G - GG",
    },
    {
      name: "Conjunto Plus Size ",
      description: "Conjunto Plus Size",
      image: "assets/Conjunto Plus Size/Conjunto Plus Size9.png",
      category: "Conjunto Plus Size",
      price: "P - M - G - GG",
    },
    {
      name: "Conjunto Plus Size ",
      description: "Conjunto Plus Size",
      image: "assets/Conjunto Plus Size/Conjunto Plus Size2.png",
      category: "Conjunto Plus Size",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Fio Lara ",
      description: "Calcinha Modelo Fio Lara",
      image: "assets/Modelo Fio Lara/Modelo Fio Lara1.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Fio Lara ",
      description: "Calcinha Modelo Fio Lara",
      image: "assets/Modelo Fio Lara/Modelo Fio Lara2.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Fio Lara ",
      description: "Calcinha Modelo Fio Lara",
      image: "assets/Modelo Fio Lara/Modelo Fio Lara3.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Fio Lara ",
      description: "Calcinha Modelo Fio Lara",
      image: "assets/Modelo Fio Lara/Modelo Fio Lara4.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Fio Lara ",
      description: "Calcinha Modelo Fio Lara",
      image: "assets/Modelo Fio Lara/Modelo Fio Lara5.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Isis ",
      description: "Calcinha Modelo Isis (Normal)",
      image: "assets/Modelo Isis ( Normal )/Modelo Isis (normal).png",
      category: "calcinha",
      price: "Normal",
    },
    {
      name: "Calcinha Isis ",
      description: "Calcinha Modelo Isis (Normal)",
      image: "assets/Modelo Isis ( Normal )/Modelo Isis (normal)2.png",
      category: "calcinha",
      price: "Normal",
    },
    {
      name: "Calcinha Isis ",
      description: "Calcinha Modelo Isis (Normal)",
      image: "assets/Modelo Isis ( Normal )/Modelo Isis (normal)3.png",
      category: "calcinha",
      price: "Normal",
    },
    {
      name: "Calcinha Isis ",
      description: "Calcinha Modelo Isis (Normal)",
      image: "assets/Modelo Isis ( Normal )/Modelo Isis (normal)4.png",
      category: "calcinha",
      price: "Normal",
    },
    {
      name: "Lingerie Priscila",
      description: "Lingerie Modelo Priscila",
      image: "assets/Modelo Priscila/Modelo Priscila1.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Priscila",
      description: "Lingerie Modelo Priscila",
      image: "assets/Modelo Priscila/Modelo Priscila2.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Priscila",
      description: "Lingerie Modelo Priscila",
      image: "assets/Modelo Priscila/Modelo Priscila3.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Priscila",
      description: "Lingerie Modelo Priscila",
      image: "assets/Modelo Priscila/Modelo Priscila4.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Priscila",
      description: "Lingerie Modelo Priscila",
      image: "assets/Modelo Priscila/Modelo Priscila5.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Calcinha Sonza ",
      description: "Calcinha Modelo Sonza",
      image: "assets/Modelo Sonza/Modelo Sonza1.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Sonza ",
      description: "Calcinha Modelo Sonza",
      image: "assets/Modelo Sonza/Modelo Sonza2.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Sonza ",
      description: "Calcinha Modelo Sonza",
      image: "assets/Modelo Sonza/Modelo Sonza3.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Sonza ",
      description: "Calcinha Modelo Sonza",
      image: "assets/Modelo Sonza/Modelo Sonza4.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Sonza ",
      description: "Calcinha Modelo Sonza",
      image: "assets/Modelo Sonza/Modelo Sonza5.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Sonza ",
      description: "Calcinha Modelo Sonza",
      image: "assets/Modelo Sonza/Modelo Sonza6.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Conjunto Tifany ",
      description: "Conjunto Modelo Tifany",
      image: "assets/Modelo Tifany/Modelo Tifany1.png",
      category: "Conjunto Modelo Tifany",
      price: "P - M - G",
    },
    {
      name: "Conjunto Tifany ",
      description: "Conjunto Modelo Tifany",
      image: "assets/Modelo Tifany/Modelo Tifany2.png",
      category: "Conjunto Modelo Tifany",
      price: "P - M - G",
    },
    {
      name: "Conjunto Tifany ",
      description: "Conjunto Modelo Tifany",
      image: "assets/Modelo Tifany/Modelo Tifany3.png",
      category: "Conjunto Modelo Tifany",
      price: "P - M - G",
    },
    {
      name: "Conjunto Tifany ",
      description: "Conjunto Modelo Tifany",
      image: "assets/Modelo Tifany/Modelo Tifany4.png",
      category: "Conjunto Modelo Tifany",
      price: "P - M - G",
    },
    {
      name: "Conjunto Tifany ",
      description: "Conjunto Modelo Tifany",
      image: "assets/Modelo Tifany/Modelo Tifany5.png",
      category: "Conjunto Modelo Tifany",
      price: "P - M - G",
    },
    {
      name: "Conjunto Tifany ",
      description: "Conjunto Modelo Tifany",
      image: "assets/Modelo Tifany/Modelo Tifany6.png",
      category: "Conjunto Modelo Tifany",
      price: "P - M - G",
    },
    {
      name: "Conjunto Tifany ",
      description: "Conjunto Modelo Tifany",
      image: "assets/Modelo Tifany/Modelo Tifany7.png",
      category: "Conjunto Modelo Tifany",
      price: "P - M - G",
    },
    {
      name: "Conjunto Tifany ",
      description: "Conjunto Modelo Tifany",
      image: "assets/Modelo Tifany/Modelo Tifany8.png",
      category: "Conjunto Modelo Tifany",
      price: "P - M - G",
    },
    {
      name: "Conjunto Tifany ",
      description: "Conjunto Modelo Tifany",
      image: "assets/Modelo Tifany/Modelo Tifany9.png",
      category: "Conjunto Modelo Tifany",
      price: "P - M - G",
    },
    {
      name: "Conjunto Tifany ",
      description: "Conjunto Modelo Tifany",
      image: "assets/Modelo Tifany/Modelo Tifany10.png",
      category: "Conjunto Modelo Tifany",
      price: "P - M - G",
    },
    {
      name: "Short Segunda Pele ",
      description: "Short Segunda Pele",
      image: "assets/Short Segunda Pele/Short Segunda Pele1.png",
      category: "Short Segunda Pele",
      price: "P - M - G - GG",
    },
    {
      name: "Short Segunda Pele ",
      description: "Short Segunda Pele",
      image: "assets/Short Segunda Pele/Short Segunda Pele2.png",
      category: "Short Segunda Pele",
      price: "P - M - G - GG",
    },
    {
      name: "Short Segunda Pele ",
      description: "Short Segunda Pele",
      image: "assets/Short Segunda Pele/Short Segunda Pele3.png",
      category: "Short Segunda Pele",
      price: "P - M - G - GG",
    },
    {
      name: "Sutiâ Tomara que Caia ",
      description: "Sutiâ Tomara que Caia alça removível",
      image:
        "assets/Tomara que caia com alça removível/Tomara que caia geral.png",
      category: "Sutiâ",
      price: "M - G - GG",
    },
    {
      name: "Sutiâ Tomara que Caia ",
      description: "Sutiâ Tomara que Caia alça removível",
      image:
        "assets/Tomara que caia com alça removível/Tomara que caia geral2.png",
      category: "Sutiâ",
      price: "M - G - GG",
    },
    {
      name: "Sutiâ Tomara que Caia ",
      description: "Sutiâ Tomara que Caia alça removível",
      image:
        "assets/Tomara que caia com alça removível/Tomara que caia geral3.png",
      category: "Sutiâ",
      price: "M - G - GG",
    },
    {
      name: "Sutiâ Tomara que Caia ",
      description: "Sutiâ Tomara que Caia alça removível",
      image:
        "assets/Tomara que caia com alça removível/Tomara que caia geral4.png",
      category: "Sutiâ",
      price: "M - G - GG",
    },
    {
      name: "Sutiâ Tomara que Caia ",
      description: "Sutiâ Tomara que Caia alça removível",
      image:
        "assets/Tomara que caia com alça removível/Tomara que caia geral5.png",
      category: "Sutiâ",
      price: "M - G - GG",
    },
    {
      name: "Sutiâ Tomara que Caia ",
      description: "Sutiâ Tomara que Caia alça removível",
      image:
        "assets/Tomara que caia com alça removível/Tomara que caia geral6.png",
      category: "Sutiâ",
      price: "M - G - GG",
    },
    {
      name: "Calcinha Lateral Renda ",
      description: "Calcinha Lateral Renda",
      image:
        "assets/Calcinha fio duplo lateral renda/Calcinha fio duplo lateral renda1.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Lateral Renda ",
      description: "Calcinha Lateral Renda",
      image:
        "assets/Calcinha fio duplo lateral renda/Calcinha fio duplo lateral renda2.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Lateral Renda ",
      description: "Calcinha Lateral Renda",
      image:
        "assets/Calcinha fio duplo lateral renda/Calcinha fio duplo lateral renda3.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Lateral Renda ",
      description: "Calcinha Lateral Renda",
      image:
        "assets/Calcinha fio duplo lateral renda/Calcinha fio duplo lateral renda4.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Lateral Renda",
      description: "Calcinha Lateral Renda",
      image:
        "assets/Calcinha fio duplo lateral renda/Calcinha fio duplo lateral renda5.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Modelo Rosana",
      description: "Calcinha Modelo Rosana",
      image: "assets/Calcinha Modelo Rosana/Calcinha Modelo Rosana1.png",
      category: "calcinha",
      price: "Normal",
    },
    {
      name: "Calcinha Modelo Rosana",
      description: "Calcinha Modelo Rosana",
      image: "assets/Calcinha Modelo Rosana/Calcinha Modelo Rosana2.png",
      category: "calcinha",
      price: "Normal",
    },
    {
      name: "Calcinha Modelo Rosana",
      description: "Calcinha Modelo Rosana",
      image: "assets/Calcinha Modelo Rosana/Calcinha Modelo Rosana3.png",
      category: "calcinha",
      price: "Normal",
    },
    {
      name: "Calcinha Modelo Rosana",
      description: "Calcinha Modelo Rosana",
      image: "assets/Calcinha Modelo Rosana/Calcinha Modelo Rosana4.png",
      category: "calcinha",
      price: "Normal",
    },
    {
      name: "Calcinha Fio Dup.Pala",
      description: "Calcinha Fio Duplo Pala",
      image: "assets/Calcinha Fio Duplo Pala/Calcinha Fio duplo Pala1.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Fio Dup.Pala",
      description: "Calcinha Fio Duplo Pala",
      image: "assets/Calcinha Fio Duplo Pala/Calcinha Fio duplo Pala2.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Fio Dup.Pala",
      description: "Calcinha Fio Duplo Pala",
      image: "assets/Calcinha Fio Duplo Pala/Calcinha Fio duplo Pala3.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Sutiâ Reforçado Variados",
      description: "Sutiâ Reforçado Variados",
      image: "assets/Sutiâ Reforçado Variados/Sutiâ Reforçado Variados1.png",
      category: "Sutiâ",
      price: "M - G - GG",
    },
    {
      name: "Sutiâ Reforçado Variados",
      description: "Sutiâ Reforçado Variados",
      image: "assets/Sutiâ Reforçado Variados/Sutiâ Reforçado Variados2.png",
      category: "Sutiâ",
      price: "M - G - GG",
    },
    {
      name: "Sutiâ Reforçado Variados",
      description: "Sutiâ Reforçado Variados",
      image: "assets/Sutiâ Reforçado Variados/Sutiâ Reforçado Variados3.png",
      category: "Sutiâ",
      price: "M - G - GG",
    },
    {
      name: "Sutiâ Reforçado Variados",
      description: "Sutiâ Reforçado Variados",
      image: "assets/Sutiâ Reforçado Variados/Sutiâ Reforçado Variados4.png",
      category: "Sutiâ",
      price: "M - G - GG",
    },
    {
      name: "Calcinha Eva Espampada",
      description: "Calcinha Eva Espampada",
      image: "assets/Calcinha Eva Estampada/Calcinha Eva Estampada1.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Eva Espampada",
      description: "Calcinha Eva Espampada",
      image: "assets/Calcinha Eva Estampada/Calcinha Eva Estampada2.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Eva Espampada",
      description: "Calcinha Eva Espampada",
      image: "assets/Calcinha Eva Estampada/Calcinha Eva Estampada3.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Eva Espampada",
      description: "Calcinha Eva Espampada",
      image: "assets/Calcinha Eva Estampada/Calcinha Eva Estampada4.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Fio Eva",
      description: "Calcinha Fio Eva",
      image: "assets/Calcinha Fio Eva/Calcinha Fio Eva.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Fio Eva",
      description: "Calcinha Fio Eva",
      image: "assets/Calcinha Fio Eva/Calcinha Fio Eva2.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Fio Eva",
      description: "Calcinha Fio Eva",
      image: "assets/Calcinha Fio Eva/Calcinha Fio Eva3.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Fio Eva",
      description: "Calcinha Fio Eva",
      image: "assets/Calcinha Fio Eva/Calcinha Fio Eva4.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Atrevida",
      description: "Calcinha Modelo Atrevida",
      image: "assets/Calcinha Modelo Atrevida/Calcinha Modelo Atrevida1.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Atrevida",
      description: "Calcinha Modelo Atrevida",
      image: "assets/Calcinha Modelo Atrevida/Calcinha Modelo Atrevida2.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Atrevida",
      description: "Calcinha Modelo Atrevida",
      image: "assets/Calcinha Modelo Atrevida/Calcinha Modelo Atrevida3.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Atrevida",
      description: "Calcinha Modelo Atrevida",
      image: "assets/Calcinha Modelo Atrevida/Calcinha Modelo Atrevida4.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Atrevida",
      description: "Calcinha Modelo Atrevida",
      image: "assets/Calcinha Modelo Atrevida/Calcinha Modelo Atrevida5.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Babi",
      description: "Calcinha Modelo Babi",
      image: "assets/Calcinha Modelo Babi/Calcinha Modelo Babi1.png",
      category: "calcinha",
      price: "Fio Regulavél Tam.Único",
    },
    {
      name: "Calcinha Babi",
      description: "Calcinha Modelo Babi",
      image: "assets/Calcinha Modelo Babi/Calcinha Modelo Babi2.png",
      category: "calcinha",
      price: "Fio Regulavél Tam.Único",
    },
    {
      name: "Calcinha Babi",
      description: "Calcinha Modelo Babi",
      image: "assets/Calcinha Modelo Babi/Calcinha Modelo Babi3.png",
      category: "calcinha",
      price: "Fio Regulavél Tam.Único",
    },
    {
      name: "Calcinha Babi",
      description: "Calcinha Modelo Babi",
      image: "assets/Calcinha Modelo Babi/Calcinha Modelo Babi4.png",
      category: "calcinha",
      price: "Fio Regulavél Tam.Único",
    },
    {
      name: "Calcinha Babi",
      description: "Calcinha Modelo Babi",
      image: "assets/Calcinha Modelo Babi/Calcinha Modelo Babi5.png",
      category: "calcinha",
      price: "Fio Regulavél Tam.Único",
    },
    {
      name: "Calcinha Babi",
      description: "Calcinha Modelo Babi",
      image: "assets/Calcinha Modelo Babi/Calcinha Modelo Babi6.png",
      category: "calcinha",
      price: "Fio Regulavél Tam.Único",
    },
    {
      name: "Calcinha Babi",
      description: "Calcinha Modelo Babi",
      image: "assets/Calcinha Modelo Babi/Calcinha Modelo Babi6.png",
      category: "calcinha",
      price: "Fio Regulavél Tam.Único",
    },
    {
      name: "Calcinha Babi",
      description: "Calcinha Modelo Babi",
      image: "assets/Calcinha Modelo Babi/Calcinha Modelo Babi6.png",
      category: "calcinha",
      price: "Fio Regulavél Tam.Único",
    },
    {
      name: "Calcinha Isis",
      description: "Calcinha Modelo Isis",
      image: "assets/Calcinha Modelo Isis/Calcinha Modelo Isis.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Isis",
      description: "Calcinha Modelo Isis",
      image: "assets/Calcinha Modelo Isis/Calcinha Modelo Isis2.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Isis",
      description: "Calcinha Modelo Isis",
      image: "assets/Calcinha Modelo Isis/Calcinha Modelo Isis3.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Isis",
      description: "Calcinha Modelo Isis",
      image: "assets/Calcinha Modelo Isis/Calcinha Modelo Isis4.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Isis",
      description: "Calcinha Modelo Isis",
      image: "assets/Calcinha Modelo Isis/Calcinha Modelo Isis5.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Isis",
      description: "Calcinha Modelo Isis",
      image: "assets/Calcinha Modelo Isis/Calcinha Modelo Isis6.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Pala Alta",
      description: "Calcinha Pala Alta",
      image: "assets/Calcinha Pala Alta/Calcinha Pala Alta.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Pala Alta",
      description: "Calcinha Pala Alta",
      image: "assets/Calcinha Pala Alta/Calcinha Pala Alta2.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Pala Alta",
      description: "Calcinha Pala Alta",
      image: "assets/Calcinha Pala Alta/Calcinha Pala Alta3.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Pala Alta",
      description: "Calcinha Pala Alta",
      image: "assets/Calcinha Pala Alta/Calcinha Pala Alta4.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Pala Alta",
      description: "Calcinha Pala Alta",
      image: "assets/Calcinha Pala Alta/Calcinha Pala Alta5.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Pala Alta",
      description: "Calcinha Pala Alta",
      image: "assets/Calcinha Pala Alta/Calcinha Pala Alta6.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Sem Costura",
      description: "Calcinha Sem Costura",
      image: "assets/Calcinha Sem Costura/Calcinha Sem Costura1.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Sem Costura",
      description: "Calcinha Sem Costura",
      image: "assets/Calcinha Sem Costura/Calcinha Sem Costura2.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Sem Costura",
      description: "Calcinha Sem Costura",
      image: "assets/Calcinha Sem Costura/Calcinha Sem Costura3.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Sem Costura",
      description: "Calcinha Sem Costura",
      image: "assets/Calcinha Sem Costura/Calcinha Sem Costura4.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Sem Costura",
      description: "Calcinha Sem Costura",
      image: "assets/Calcinha Sem Costura/Calcinha Sem Costura5.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Sem Costura Fio",
      description: "Calcinha Sem Costura Fio",
      image: "assets/Calcinha sem costura fio/Calcinha sem costura fio1.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Sem Costura Fio",
      description: "Calcinha Sem Costura Fio",
      image: "assets/Calcinha sem costura fio/Calcinha sem costura fio2.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Sem Costura Fio",
      description: "Calcinha Sem Costura Fio",
      image: "assets/Calcinha sem costura fio/Calcinha sem costura fio3.png",
      category: "calcinha",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Callesom Carol",
      description: "Calcinha Callesom Carol",
      image: "assets/Calcinha Callesom Carol 1/Calcinha Callesom Carol.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Callesom Carol",
      description: "Calcinha Callesom Carol",
      image: "assets/Calcinha Callesom Carol 1/Calcinha Callesom Carol2.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Callesom Carol",
      description: "Calcinha Callesom Carol",
      image: "assets/Calcinha Callesom Carol 1/Calcinha Callesom Carol3.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Callesom Carol",
      description: "Calcinha Callesom Carol",
      image: "assets/Calcinha Callesom Carol 1/Calcinha Callesom Carol4.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Callesom Carol",
      description: "Calcinha Callesom Carol",
      image: "assets/Calcinha Callesom Carol 1/Calcinha Callesom Carol5.png",
      category: "calcinha",
      price: "P - M - G",
    },
    {
      name: "Calcinha Vivian",
      description: "Calcinha Modelo Vivian",
      image: "assets/Calcinha Modelo Vivian 2/Calcinha Modelo Vivian1.png",
      category: "calcinha",
      price: "Regulavel Tam.Único",
    },
    {
      name: "Calcinha Vivian",
      description: "Calcinha Modelo Vivian",
      image: "assets/Calcinha Modelo Vivian 2/Calcinha Modelo Vivian2.png",
      category: "calcinha",
      price: "Regulavel Tam.Único",
    },
    {
      name: "Lingerie Espera Marido",
      description: "Lingerie Modelo Espera Marido",
      image:
        "assets/Lingerie Modelo Espera Marido 3/Lingerie Espera Marido1.png",
      category: "lingerie",
      price: "P - M - G - GG",
    },
    {
      name: "Lingerie Espera Marido",
      description: "Lingerie Modelo Espera Marido",
      image:
        "assets/Lingerie Modelo Espera Marido 3/Lingerie Espera Marido2.png",
      category: "lingerie",
      price: "P - M - G - GG",
    },
    {
      name: "Lingerie Espera Marido",
      description: "Lingerie Modelo Espera Marido",
      image:
        "assets/Lingerie Modelo Espera Marido 3/Lingerie Espera Marido3.png",
      category: "lingerie",
      price: "P - M - G - GG",
    },
    {
      name: "Lingerie Espera Marido",
      description: "Lingerie Modelo Espera Marido",
      image:
        "assets/Lingerie Modelo Espera Marido 3/Lingerie Espera Marido4.png",
      category: "lingerie",
      price: "P - M - G - GG",
    },
    {
      name: "Lingerie Espera Marido",
      description: "Lingerie Modelo Espera Marido",
      image:
        "assets/Lingerie Modelo Espera Marido 3/Lingerie Espera Marido5.png",
      category: "lingerie",
      price: "P - M - G - GG",
    },
    {
      name: "Calcinha Cinta",
      description: "Calcinha Cinta",
      image: "assets/Calcinha Cinta 4/Calcinha Cinta1.png",
      category: "calcinha",
      price: "M - G - GG",
    },
    {
      name: "Calcinha Cinta",
      description: "Calcinha Cinta",
      image: "assets/Calcinha Cinta 4/Calcinha Cinta2.png",
      category: "calcinha",
      price: "M - G - GG",
    },
    {
      name: "Calcinha Cinta",
      description: "Calcinha Cinta",
      image: "assets/Calcinha Cinta 4/Calcinha Cinta3.png",
      category: "calcinha",
      price: "M - G - GG",
    },
    {
      name: "Calcinha Cinta",
      description: "Calcinha Cinta",
      image: "assets/Calcinha Cinta 4/Calcinha Cinta4.png",
      category: "calcinha",
      price: "M - G - GG",
    },
    {
      name: "Calcinha Cinta",
      description: "Calcinha Cinta",
      image: "assets/Calcinha Cinta 4/Calcinha Cinta5.png",
      category: "calcinha",
      price: "M - G - GG",
    },
    {
      name: "Sutiâ Refor. Sem Bojo ",
      description: "Sutiâ Reforçado sem Bojo",
      image: "assets/Sutiã Reforçado sem Bojo 5/Sutiâ Reforçado sem Bojo1.png",
      category: "Sutiâ",
      price: "M - G - GG",
    },
    {
      name: "Sutiâ Refor. Sem Bojo ",
      description: "Sutiâ Reforçado sem Bojo",
      image: "assets/Sutiã Reforçado sem Bojo 5/Sutiâ Reforçado sem Bojo2.png",
      category: "Sutiâ",
      price: "M - G - GG",
    },
    {
      name: "Lingerie Poliamida",
      description: "Lingerie Luxo Poliamida",
      image: "assets/Lingerie Luxo Poliamida 6/Lingerie Luxo Poliamida1.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Poliamida",
      description: "Lingerie Luxo Poliamida",
      image: "assets/Lingerie Luxo Poliamida 6/Lingerie Luxo Poliamida2.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Poliamida",
      description: "Lingerie Luxo Poliamida",
      image: "assets/Lingerie Luxo Poliamida 6/Lingerie Luxo Poliamida3.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Poliamida",
      description: "Lingerie Luxo Poliamida",
      image: "assets/Lingerie Luxo Poliamida 6/Lingerie Luxo Poliamida4.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Poliamida",
      description: "Lingerie Luxo Poliamida",
      image: "assets/Lingerie Luxo Poliamida 6/Lingerie Luxo Poliamida5.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Poliamida",
      description: "Lingerie Luxo Poliamida",
      image: "assets/Lingerie Luxo Poliamida 6/Lingerie Luxo Poliamida6.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Poliamida",
      description: "Lingerie Luxo Poliamida",
      image: "assets/Lingerie Luxo Poliamida 6/Lingerie Luxo Poliamida7.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Luiza",
      description: "Lingerie Modelo Luiza",
      image: "assets/Lingerie Modelo Luiza 7/Lingerie Luiza1.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Luiza",
      description: "Lingerie Modelo Luiza",
      image: "assets/Lingerie Modelo Luiza 7/Lingerie Luiza2.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Luiza",
      description: "Lingerie Modelo Luiza",
      image: "assets/Lingerie Modelo Luiza 7/Lingerie Luiza3.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Luiza",
      description: "Lingerie Modelo Luiza",
      image: "assets/Lingerie Modelo Luiza 7/Lingerie Luiza4.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Luiza",
      description: "Lingerie Modelo Luiza",
      image: "assets/Lingerie Modelo Luiza 7/Lingerie Luiza5.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Luiza",
      description: "Lingerie Modelo Luiza",
      image: "assets/Lingerie Modelo Luiza 7/Lingerie Luiza6.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Sutiâ Reforçado Rendado",
      description: "Sutiâ Reforçado Rendado",
      image: "assets/Sutiâ Reforçado Rendado 8/Sutiâ Renforçado Rendado1.png",
      category: "Sutiâ",
      price: "M - G - GG",
    },
    {
      name: "Sutiâ Reforçado Rendado",
      description: "Sutiâ Reforçado Rendado",
      image: "assets/Sutiâ Reforçado Rendado 8/Sutiâ Renforçado Rendado2.png",
      category: "Sutiâ",
      price: "M - G - GG",
    },
    {
      name: "Sutiâ Reforçado Rendado",
      description: "Sutiâ Reforçado Rendado",
      image: "assets/Sutiâ Reforçado Rendado 8/Sutiâ Renforçado Rendado3.png",
      category: "Sutiâ",
      price: "M - G - GG",
    },
    {
      name: "Sutiâ Reforçado Rendado",
      description: "Sutiâ Reforçado Rendado",
      image: "assets/Sutiâ Reforçado Rendado 8/Sutiâ Renforçado Rendado4.png",
      category: "Sutiâ",
      price: "M - G - GG",
    },
    {
      name: "Sutiâ Reforçado Rendado",
      description: "Sutiâ Reforçado Rendado",
      image: "assets/Sutiâ Reforçado Rendado 8/Sutiâ Renforçado Rendado5.png",
      category: "Sutiâ",
      price: "M - G - GG",
    },
    {
      name: "Babydool Disney",
      description: "Babydool Disney",
      image: "assets/Babydool Disney 9/Babydool Disney1.png",
      category: "babydool",
      price: "P - M - G",
    },
    {
      name: "Babydool Disney",
      description: "Babydool Disney",
      image: "assets/Babydool Disney 9/Babydool Disney2.png",
      category: "babydool",
      price: "P - M - G",
    },
    {
      name: "Babydool Disney",
      description: "Babydool Disney",
      image: "assets/Babydool Disney 9/Babydool Disney3.png",
      category: "babydool",
      price: "P - M - G",
    },
    {
      name: "Babydool Disney",
      description: "Babydool Disney",
      image: "assets/Babydool Disney 9/Babydool Disney4.png",
      category: "babydool",
      price: "P - M - G",
    },
    {
      name: "Babydool Disney",
      description: "Babydool Disney",
      image: "assets/Babydool Disney 9/Babydool Disney5.png",
      category: "babydool",
      price: "P - M - G",
    },
    {
      name: "Lingerie Ruth",
      description: "Lingerie Modelo Ruth",
      image: "assets/Lingerie Modelo Ruth 10/Lingerie Ruth1.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Ruth",
      description: "Lingerie Modelo Ruth",
      image: "assets/Lingerie Modelo Ruth 10/Lingerie Ruth2.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Ruth",
      description: "Lingerie Modelo Ruth",
      image: "assets/Lingerie Modelo Ruth 10/Lingerie Ruth3.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Ruth",
      description: "Lingerie Modelo Ruth",
      image: "assets/Lingerie Modelo Ruth 10/Lingerie Ruth4.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Ruth",
      description: "Lingerie Modelo Ruth",
      image: "assets/Lingerie Modelo Ruth 10/Lingerie Ruth5.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Lingerie Ruth",
      description: "Lingerie Modelo Ruth",
      image: "assets/Lingerie Modelo Ruth 10/Lingerie Ruth6.png",
      category: "lingerie",
      price: "P - M - G",
    },
    {
      name: "Fantasia",
      description: "Fantasia",
      image: "assets/Fantasia 11/Fantasia1.png",
      category: "fantasia",
      price: "Tamanho único",
    },
    {
      name: "Fantasia",
      description: "Fantasia",
      image: "assets/Fantasia 11/Fantasia2.png",
      category: "fantasia",
      price: "Tamanho único",
    },
    {
      name: "Fantasia",
      description: "Fantasia",
      image: "assets/Fantasia 11/Fantasia3.png",
      category: "fantasia",
      price: "Tamanho único",
    },
    {
      name: "Fantasia",
      description: "Fantasia",
      image: "assets/Fantasia 11/Fantasia4.png",
      category: "fantasia",
      price: "Tamanho único",
    },
    {
      name: "Fantasia",
      description: "Fantasia",
      image: "assets/Fantasia 11/Fantasia5.png",
      category: "fantasia",
      price: "Tamanho único",
    },
    {
      name: "Fantasia",
      description: "Fantasia",
      image: "assets/Fantasia 11/Fantasia6.png",
      category: "fantasia",
      price: "Tamanho único",
    },
    {
      name: "Pijama Americano",
      description: "Pijama Americano",
      image: "assets/Pijama Americano Calça 12/Pijama Americano Calça1.png",
      category: "pijama",
      price: "P - M - G - GG",
    },
    {
      name: "Pijama Americano",
      description: "Pijama Americano",
      image: "assets/Pijama Americano Calça 12/Pijama Americano Calça2.png",
      category: "pijama",
      price: "P - M - G - GG",
    },
    {
      name: "Pijama Americano",
      description: "Pijama Americano",
      image: "assets/Pijama Americano Calça 12/Pijama Americano Calça3.png",
      category: "pijama",
      price: "P - M - G - GG",
    },
    {
      name: "Pijama Americano",
      description: "Pijama Americano",
      image: "assets/Pijama Americano Calça 12/Pijama Americano Calça4.png",
      category: "pijama",
      price: "P - M - G - GG",
    },
    {
      name: "Pijama Americano",
      description: "Pijama Americano",
      image: "assets/Pijama Americano Calça 12/Pijama Americano Calça5.png",
      category: "pijama",
      price: "P - M - G - GG",
    },
    {
      name: "Pijama Americano",
      description: "Pijama Americano",
      image: "assets/Pijama Americano Calça 12/Pijama Americano Calça6.png",
      category: "pijama",
      price: "P - M - G - GG",
    },
    {
      name: "Pijama Americano",
      description: "Pijama Americano",
      image: "assets/Pijama Americano Calça 12/Pijama Americano Calça7.png",
      category: "pijama",
      price: "P - M - G - GG",
    },
    {
      name: "Bory Lorrany",
      description: "Bory Lorrany",
      image: "assets/Bory Lorrany 13/Bory Lorrany1.png",
      category: "bory",
      price: "M - G",
    },
    {
      name: "Bory Lorrany",
      description: "Bory Lorrany",
      image: "assets/Bory Lorrany 13/Bory Lorrany2.png",
      category: "bory",
      price: "M - G",
    },
    {
      name: "Bory Lorrany",
      description: "Bory Lorrany",
      image: "assets/Bory Lorrany 13/Bory Lorrany3.png",
      category: "bory",
      price: "M - G",
    },
    {
      name: "Bory Lorrany",
      description: "Bory Lorrany",
      image: "assets/Bory Lorrany 13/Bory Lorrany4.png",
      category: "bory",
      price: "M - G",
    },
  ]

  const produtoPorPagina = 15
  let paginaAtual = 1
  let categoriaAtual = "todos"

  const catalogElement = document.getElementById("catalogo")
  const modalElement = document.getElementById("modal")
  const modalImageElement = document.getElementById("imgModal")
  const closeModalElement = document.getElementById("closeModal")

  function exibirProdutos(filtro) {
    categoriaAtual = filtro

    const inicio = (paginaAtual - 1) * produtoPorPagina
    const fim = inicio + produtoPorPagina

    const produtosFiltrados =
      filtro === "todos"
        ? products
        : products.filter((product) => product.category === filtro)

    const produtosPaginados = produtosFiltrados.slice(inicio, fim)

    catalogElement.innerHTML = "" // Faz limpeza do conteúdo anterior, para adicionar os novos itens

    produtosPaginados.forEach((product) => {
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

    atualizarPaginacao(produtosFiltrados.length, paginaAtual)
  }

  function mudarPagina(incremento) {
    paginaAtual += incremento
    exibirProdutos(categoriaAtual)
  }

  function atualizarPaginacao(totalProdutos, pagina) {
    const numPagina = Math.ceil(totalProdutos / produtoPorPagina)
    document.getElementById(
      "infoPagina"
    ).textContent = `Página ${pagina} de ${numPagina}`

    document.getElementById("btnAnterior").disabled = pagina === 1
    document.getElementById("btnProximo").disabled = pagina === numPagina
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
    paginaAtual = 1

    exibirProdutos(category)
    atualizarFiltroAtivo(category)
  }

  window.mudarPagina = mudarPagina

  exibirProdutos("todos")
  atualizarFiltroAtivo("todos")
})
