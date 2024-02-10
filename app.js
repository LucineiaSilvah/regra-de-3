let A = document.getElementById("A");
let B = document.getElementById("B");
let C = document.getElementById("C");
let D = document.getElementById("D");

const botao = document.querySelector("button");
let resp = document.querySelector(".resp");

botao.addEventListener("click", () => {
  if (B.value == "X") {
    B = 1;
    let x = parseInt(C.value) * B;
    let resposta = (parseInt(A.value) * parseInt(D.value)) / x;
    resp.innerHTML ='X = ' + resposta;


  } else if (D.value == "X") {
    D = 1;
    let x = A.value * D;
    let resposta = (parseInt(C.value) * parseInt(B.value)) / x;
    resp.innerHTML ='X = ' + resposta;
  }else if (A.value == "X") {
    A = 1;
    let x = D.value * A;
    let resposta = (parseInt(C.value) * parseInt(B.value)) / x;
    resp.innerHTML ='X = ' + resposta;
  }
  else if (C.value == "X") {
    C = 1;
    let x = B.value * C;
    let resposta = (parseInt(A.value) * parseInt(D.value)) / x;
    resp.innerHTML ='X = ' + resposta;
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
