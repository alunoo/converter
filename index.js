const prompt = require("prompt-sync")();

let reiniciar = true

while(reiniciar){   
    console.log("CONVERSOR DE TEMPERATURA ( ºC PARA ºF OU VICE VERSA )\n1 - ºC para ºF\n2 - ºF para ºC")
    let verifyConversion = parseFloat(prompt());


    if(verifyConversion === 1){
        console.clear(verifyConversion)
        console.log("CONVERSÃO ESCOLIDA - CELCIUS(ºC) PARA FAHRENHEIT(ºF) ")
        console.log("Digite a temperatura que deseja converter: ")
        let n1 = parseFloat(prompt())
        
        console.log("O valor de ",n1,"ºC convertido em Fahrenheit é aproximadamente: ", (n1*1.8+32).toFixed(0),"°F.\n" )
        reinicio()
        }


    if(verifyConversion === 2){
        console.clear(verifyConversion)
        console.log("CONVERSÃO ESCOLIDA - FAHRENHEIT(ºF) PARA CELCIUS(ºC)\n")
        console.log("Digite a temperatura que deseja converter: ")
        let n1 = parseFloat(prompt())
    
        console.log("O valor de ",n1,"ºF convertido em Celcius é aproximadamente: ", ((n1-32)/1.8).toFixed(0),"°C.\n" )       
        reinicio()
        }
}


function reinicio(){   
    console.log("Deseja efetuar outra operação? Digite 'y' para sim ou 'n' para finalizar.")
    
    let verifyReinicio = prompt();

    if(verifyReinicio === "y" ){
        reiniciar = true
    } else {
        reiniciar = false

    }
}