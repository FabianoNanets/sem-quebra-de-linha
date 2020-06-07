function quebraLinha(){
  let textarea = document.getElementById("texto");
  let edit = document.getElementById("change");

  edit.addEventListener("click", () => {
    let texto = textarea.value;
    let resultado = "";

    for (i = 0; i < texto.length; i++) {
      texto.charCodeAt(i) == 10 ?
      resultado += " " :
      resultado += texto[i];
    }

    console.log(resultado)
    textarea.value = resultado;
  })  
}

function fazerCopia(){
  document.getElementById('copiar').addEventListener('click', () =>{
    document.getElementById('texto').select();
    document.execCommand('copy');
  });
}

function limparTela(){
  document.getElementById("texto").value='';
}

