document.getElementById("formulario").addEventListener("submit", function(e)
{
    e.preventDefault();

    let nome =
        document.getElementById("nome").value.trim();
    let nota1 =
        document.getElementById("Nota").value;
    let nota2 =
        document.getElementById("Nota2").value;
    let nota3 =
        document.getElementById("Nota3").value;
    let nota =
        (Number(nota1) + Number(nota2) + Number(nota3)) / 3;

        if (nome === "" || nota1 === "" || nota2 === "" || nota3 === ""){
            document.getElementById("resultado").innerHTML = "Por favor, preencha todos os campos.";
            return;
        }

        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
            document.getElementById("resultado").innerHTML = "Dado inválido";
            return;
        }

        if (nota < 0 || nota > 10){
            document.getElementById("resultado").innerHTML = "Nota inválida. As notas devem estar entre 0 e 10.";
            return;
        }

        if (nota >= 7){
            document.getElementById("resultado").innerHTML = `Olá ${nome}. Parabéns! Você foi aprovado com uma média de ${nota.toFixed(1)} pontos.`;
        } else if (nota <= 6.9 && nota >= 5){
            document.getElementById("resultado").innerHTML = `Olá ${nome}. Infelizmente, você ficou de recuperação com uma média de ${nota.toFixed(1)} pontos.`;
        } else if (nota <= 4.9){
            document.getElementById("resultado").innerHTML = `Olá ${nome}. Infelizmente, você foi reprovado com uma média de ${nota.toFixed(1)} pontos.`;
            return;
        }


        nota = Number(nota);

})
 let a = document.getElementById("b1");
 a.addEventListener("click", butao);
 a.addEventListener("mouseenter", entrar);
 a.addEventListener("mouseleave", saiu);
function butao(){
    a.innerText = "Enviado!"
    return;
}

function entrar(){
    a.innerText = "Enviar"
    a.style.background = "lightgray";
    a.style.color = "black";
    return;    
}

function saiu(){
    a.innerText = "Enviar"
    a.style.background = "rgb(80, 124, 124)";
    a.style.color = "lightgray";
    return;
}

let b = document.getElementById("mudarmodo");
 b.addEventListener("click", butaob);
 b.addEventListener("mouseenter", entrarb);
 b.addEventListener("mouseleave", saiub);
function butaob(){
    b.innerText = "Trocado!"
    return;
}

function entrarb(){
    b.innerText = "Mudar Modo"
    b.style.background = "lightgray";
    b.style.color = "black";
    return;    
}

function saiub(){
    b.innerText = "Mudar Modo"
    b.style.background = "rgb(80, 124, 124)";
    b.style.color = "lightgray";
    return;
}


function MudarModo(){
    const modo = [
        document.getElementById('titulo'),// 0
        document.querySelector('body'),// 1
        document.getElementById('formulario'),// 2
        document.getElementById('nome'),// 3
        document.getElementById('Nota1'),// 4
        document.getElementById('Nota2'),// 5
        document.getElementById('Nota3'), // 6
        document.getElementById('B'),// 7
        document.getElementById('resultado'), // 8
        document.getElementById('mudarmodo')// 9
    ];

    if (modo[0].style.backgroundColor === 'white'){
        modo[0].style.backgroundColor = 'darkslategray';
        modo[0].style.color = 'black';
        modo[1].style.backgroundColor = 'darkslategray';
        modo[2].style.backgroundColor = 'darkslategray';
        modo[2].style.color = 'black';
        modo[3].style.backgroundColor = 'white';
        modo[4].style.backgroundColor = 'white';
        modo[4].style.color = 'black';
        modo[5].style.backgroundColor = 'white';
        modo[6].style.backgroundColor = 'dimgray';
        modo[6].style.color = 'white';
    }else{
        modo[0].style.backgroundColor = 'white';
        modo[0].style.color = 'darkslategray';
        modo[1].style.backgroundColor = 'white';
        modo[2].style.color = 'white';
        modo[2].style.backgroundColor = 'white';
        modo[3].style.backgroundColor = 'white';
        modo[4].style.color = 'white';
        modo[5].style.backgroundColor = 'white';
        modo[6].style.color = 'white';
        modo[7].style.backgroundColor = 'white';
        modo[8].style.color = 'white';
        modo[5].style.backgroundColor = 'white';
        modo[6].style.backgroundColor = 'white';
        modo[6].style.color = 'white';
    }
}