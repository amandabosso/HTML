// Importa a biblioteca prompt-sync
const prompt = require('prompt-sync')();
 
// Solicita ao usuário que insira um dado

 
// Exibe o dado inserido pelo usuário

 


let cachorro = true;
let gato = false


while (cachorro){
    const entradaUsuario = prompt('Cachorro ou gato? ')
    console.log('Você digitou:', entradaUsuario);
    if(entradaUsuario == "cachorro"){
console.log("você fez uma boa adoção!","\n","Cachorro é fofo")

break;

    } else if (entradaUsuario != " cachorro"){
     console.log( "adote um cachorro")
     console.log ('Vou perguntar dnv... ');
}


}



   
    


