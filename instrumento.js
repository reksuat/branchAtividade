console.log("Você toca algum instrumento? ");
process.stdin.once("data",function(data){
    let resposta=data.toString().trim();

    if (resposta=="sim" || resposta=="s") {
        console.log("Que legal!!")
    }else if (resposta=="não" || resposta=="n") {
        console.log("Que pena, tocar algum instrumento é muito legal!")
    }
}) 