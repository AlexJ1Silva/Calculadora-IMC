//mudei aqui

function calcular() {

let nome = document.querySelector('#nome')
let peso = document.querySelector('#peso')
let altura = document.querySelector('#altura')
let img = document.querySelector('#imagem')
let imc = Number (peso.value) / Number (altura.value * altura.value)
let res = document.querySelector ('#resposta')
    



if (nome.value === ''){

    window.alert("[ERRO] Você não colocou o seu nome! ")
}
if (peso.value === ''){

    window.alert("[ERRO] Você não colocou o seu peso!")
}
if (altura.value === ''){

    window.alert("[ERRO] Você não colocou a sua altura!")
} else if (imc <16) {
    
    res.innerHTML = `${nome.value} Seu imc é ${imc.toFixed(2)} você está no grau magreza III.`
        img.src=('imagens/magreza3.png')
        document.body.style.backgroundColor='#E2FF1A'

        
}else if (imc >16.1 && imc <16.9) {
    res.innerHTML = `${nome.value} Seu imc é ${imc.toFixed(2)} você está no grau magreza II.`
        img.src=('imagens/magreza2.png')
        document.body.style.backgroundColor='#4FFF4F'
    
}else if (imc >17 && imc <18.4) {
    res.innerHTML = `${nome.value} Seu imc é ${imc.toFixed(2)} você está no grau magreza I.`
        img.src=('imagens/magreza1.png')
        document.body.style.backgroundColor='#26FF26'

}else if (imc >18,5 && imc <24.9) {
    res.innerHTML = `${nome.value} Seu imc é ${imc.toFixed(2)} você está com o peso normal.`
        img.src=('imagens/normal.png')
        document.body.style.backgroundColor='#00B700'

}else if (imc >25 && imc <29.9) {
    res.innerHTML = `${nome.value} Seu imc é ${imc.toFixed(2)} você está com sobrepeso.`
        img.src=('imagens/sobrepeso.png')
        document.body.style.backgroundColor='#FF6A6A'

}else if (imc >30 && imc <34.9) {
    res.innerHTML = `${nome.value} Seu imc é ${imc.toFixed(2)} você está no grau obesidade I.`
        img.src=('imagens/obesidade1.png')
        document.body.style.backgroundColor='#FF3333'

}else if (imc >35 && imc <39.9) {
    res.innerHTML = `${nome.value} Seu imc é ${imc.toFixed(2)} você está no grau obesidade II.`
        img.src=('imagens/obesidade2.png')
        document.body.style.backgroundColor='#FF0B0B'

}else if (imc >40) {
    res.innerHTML = `${nome.value} Seu IMC é ${imc.toFixed(2)} você está no grau obesidade III.`
        img.src=('imagens/obesidade3.png')
        document.body.style.backgroundColor='#B70000'
}



}
