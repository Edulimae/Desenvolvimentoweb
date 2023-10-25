let valorPacote = 0;
let valorAdicionais = 0;




function calcularTotalViagem(){
    calcularPacote();
    calcularAdicionais(); 
    textofinal();
    }

function calcularAdicionais(){
    valorAdicionais = 0
    let adicionais = document.querySelectorAll("input[type='checkbox']:checked");
    for (var i=0; i < adicionais.length; i++) 
    {
        valorAdicionais += parseInt(adicionais[i].value)
    }
    alert(`Adicionais: ${valorAdicionais}`)
    console.log(valorAdicionais)
}

function calcularPacote()
{
    let qtdPacotes= document.querySelectorAll("input[name='pacotes']").length;
    console.log(qtdPacotes);
    let pacotes=document.querySelectorAll("input[name='pacotes']");
    console.log(pacotes);
    //let valor = document.querySelector(input)
//             i < pacotes.length
    for (var i=0; i < qtdPacotes; i++)
    {
        if( pacotes[i].checked == true )
        {
            console.log(pacotes[i].value);
            valorPacote = pacotes[i].value;
            break;
        }
    }
}

function textofinal()  {
    let nome = document.getElementById('nome').value;
    let final = document.getElementById('Texto');
    final.innerHTML = (`Sr. ${nome}`);

}  
