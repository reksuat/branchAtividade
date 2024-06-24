console.log("Você toca algum instrumento? ");
process.stdin.once("data",function(data){
    let resposta=data.toString().trim();

    if (resposta=="sim" || resposta=="s") {
        console.log("Que legal, qual instrumento?");
        process.stdin.once("data",function(data){
            let opcao=data.toString().trim()

            if (opcao=="violão") {
                console.log("Violão parece ser legal, mas as cordas machucam os dedos :(")
            }else if (opcao=="guitarra") {
                console.log("Adoro o som da guitarra!")
            }else if (opcao=="bateria") {
                console.log("Tocar bateria era meu sonho de infância!")
            }
        })
    }else if (resposta=="não" || resposta=="n") {
        console.log("Que pena, tocar algum instrumento é muito legal!")
    }
})  