

function Prevent (){
    let enviar = document.getElementById('enviar');
    let Nome = document.getElementById('nomex').value;
    if (Nome.length > 4) {
        alert(`Bem vindo, senhor ${Nome}`);
        return true;
       
    } else {
        alert(`Informe um nome com mais de 3 caracteres. ${Nome} não é válido`);
       return false;
    
    }

}
enviar.addEventListener ('click', function(event){
    event.preventDefault();
    Prevent();
});