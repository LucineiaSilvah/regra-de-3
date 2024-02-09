let A = document.getElementById("A");
let B = document.getElementById("B");
let C = document.getElementById("C");
let D = document.getElementById("D");

const botao = document.querySelector("button");
let resp = document.querySelector(".resp");

botao.addEventListener("click", () => {
  if (B.value == "X".toLocaleLowerCase()) {
    B = 1;
    let x = parseInt(C.value) * B;
    let resposta = (parseInt(A.value) * parseInt(D.value)) / x;
    resp.innerHTML = resposta;


  } else if (D.value == "X".toLocaleLowerCase()) {
    D = 1;
    let x = A.value * D;
    let resposta = (parseInt(C.value) * parseInt(B.value)) / x;
    resp.innerHTML = resposta;
  }else if (A.value == "X".toLocaleLowerCase()) {
    A = 1;
    let x = D.value * A;
    let resposta = (parseInt(C.value) * parseInt(B.value)) / x;
    resp.innerHTML = resposta;
  }
  else if (C.value == "X".toLocaleLowerCase()) {
    C = 1;
    let x = B.value * C;
    let resposta = (parseInt(A.value) * parseInt(D.value)) / x;
    resp.innerHTML = resposta;
  }
  
  else {
    resp.style.color = "red";
    resp.innerText =
      "Ocorreu um erro, por favor ,confira os dados e tente novamente!";
  }
});

/* se for inversamente proporcional,inerte o valor de uma das
grandezas e multiplica em x
 */
