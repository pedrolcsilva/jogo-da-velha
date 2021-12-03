let vet = [[],[],[]]
let cont = 0

function endGame(){
    document.getElementById('left1').removeEventListener('click', topLeft)
    document.getElementById('middle1').removeEventListener('click', topMiddle)
    document.getElementById('right1').removeEventListener('click', topRight)
    document.getElementById('left2').removeEventListener('click', midLeft)
    document.getElementById('middle2').removeEventListener('click', midMiddle)
    document.getElementById('right2').removeEventListener('click', midRight)
    document.getElementById('left3').removeEventListener('click', botLeft)
    document.getElementById('middle3').removeEventListener('click', botMiddle)
    document.getElementById('right3').removeEventListener('click', botRight)
}

function winner(){
    let x = winnerLine()
    if(x == 1){
        return
    }else{
        draw()
    }
    x = winnerColumn()
    if(x == 1){
        return
    }else{
        draw()
    }
    x = winnerDiag()
    if(x == 1){
        return
    }else{
        draw()
    }
    x = winnerDiag2()
    if(x == 1){
        return
    }else{
        draw()
    }
}

function winnerDiag(){
    let x = 0
    let o = 0
    for(let l = 0; l < 3; l++){
        for(let c = 0; c < 3; c++){
            if(l == c){
                if(vet[l][c] == 'X'){
                    x++
                }
                else if(vet[l][c] == 'O'){
                    o++
                }
            }
        }
    }
    if(x == 3){
        document.getElementById('jog').innerHTML = 'Jogador X Venceu!!!'
        endGame()
        return 1
    }
    if(o == 3){
        document.getElementById('jog').innerHTML = 'Jogador O Venceu!!!'
        endGame()
        return 1
    }
}

function winnerDiag2(){
    let x = 0
    let o = 0
    for(let l = 0; l < 3; l++){
        for(let c = 0; c < 3; c++){
            if(2 - l == c){
                if(vet[l][c] == 'X'){
                    x++
                }
                else if(vet[l][c] == 'O'){
                    o++
                }
            }
        }
    }
    if(x == 3){
        document.getElementById('jog').innerHTML = 'Jogador X Venceu!!!'
        endGame()
    }
    if(o == 3){
        document.getElementById('jog').innerHTML = 'Jogador O Venceu!!!'
        endGame()
    }
}

function winnerLine(){
    let x = 0
    let o = 0
    for(let l = 0; l < 3; l++){
        x=0
        o=0
        for(let c = 0; c < 3; c++){
            if(vet[l][c] == 'X'){
                x++
            }
            else if(vet[l][c] == 'O'){
                o++
            }
        }
        if(x == 3){
            document.getElementById('jog').innerHTML = 'Jogador X Venceu!!!'
            endGame()
            return 1;
        }
        if(o == 3){
            document.getElementById('jog').innerHTML = 'Jogador O Venceu!!!'
            endGame()
            return 1;
        }
    }
}

function winnerColumn(){
    let x = 0
    let o = 0
    for(let l = 0; l < 3; l++){
        x=0
        o=0
        for(let c = 0; c < 3; c++){
            if(vet[c][l] == 'X'){
                x++
            }
            else if(vet[c][l] == 'O'){
                o++
            }
        }
        if(x == 3){
            document.getElementById('jog').innerHTML = 'Jogador X Venceu!!!'
            endGame()
            return 1
        }
        if(o == 3){
            document.getElementById('jog').innerHTML = 'Jogador O Venceu!!!'
            endGame()
            return 1
        }
    }
}

function draw(){
    let x = 0
    let o = 0
    for(let l = 0; l < 3; l++){
        for(let c = 0; c < 3; c++){
            if(vet[l][c] == 'X'){
                x++
            }
            else if(vet[l][c] == 'O'){
                o++
            }
        }
    }
    if(x == 4 && o == 5){
        document.getElementById('jog').innerHTML = 'Velha!!!'
    }
}

function playerTurn(){
    cont = 0
    for(let l = 0; l < 3; l++){
        for(let c = 0; c < 3; c++){
            if(vet[l][c] == 'X' || vet[l][c] == 'O'){
                cont++
            }
        }
    }
    if(cont % 2 == 0){
        document.getElementById('jog').innerHTML = 'Vez do Jogador X'
        return 'O'
    }
    else {
        document.getElementById('jog').innerHTML = 'Vez do Jogador O'
        return 'X'
    }
}

function topLeft(){
    if(document.getElementById('left1').innerHTML == ''){
        document.getElementById('left1').innerHTML = playerTurn()
        vet[0][0] = playerTurn()
    }
    winner()
}

function topMiddle(){
    if(document.getElementById('middle1').innerHTML == ''){
        document.getElementById('middle1').innerHTML = playerTurn()
        vet[0][1] = playerTurn()
    }
    winner()
}

function topRight(){
    if(document.getElementById('right1').innerHTML == ''){
        document.getElementById('right1').innerHTML = playerTurn()
        vet[0][2] = playerTurn()
    }
    winner()
}

function midLeft(){
    if(document.getElementById('left2').innerHTML == ''){
        document.getElementById('left2').innerHTML = playerTurn()
        vet[1][0] = playerTurn()
    }
    winner()
}

function midMiddle(){
    if(document.getElementById('middle2').innerHTML == ''){
        document.getElementById('middle2').innerHTML = playerTurn()
        vet[1][1] = playerTurn()
    }
    winner()
}

function midRight(){
    if(document.getElementById('right2').innerHTML == ''){
        document.getElementById('right2').innerHTML = playerTurn()
        vet[1][2] = playerTurn()
    }
    winner()
}

function botLeft(){
    if(document.getElementById('left3').innerHTML == ''){
        document.getElementById('left3').innerHTML = playerTurn()
        vet[2][0] = playerTurn()
    }
    winner()
}

function botMiddle(){
    if(document.getElementById('middle3').innerHTML == ''){
        document.getElementById('middle3').innerHTML = playerTurn()
        vet[2][1] = playerTurn()
    }
    winner()
}

function botRight(){
    if(document.getElementById('right3').innerHTML == ''){
        document.getElementById('right3').innerHTML = playerTurn()
        vet[2][2] = playerTurn()
    }
    winner()
}

function vGame(){
    document.getElementById('left1').addEventListener('click', topLeft)
    document.getElementById('middle1').addEventListener('click', topMiddle)
    document.getElementById('right1').addEventListener('click', topRight)
    document.getElementById('left2').addEventListener('click', midLeft)
    document.getElementById('middle2').addEventListener('click', midMiddle)
    document.getElementById('right2').addEventListener('click', midRight)
    document.getElementById('left3').addEventListener('click', botLeft)
    document.getElementById('middle3').addEventListener('click', botMiddle)
    document.getElementById('right3').addEventListener('click', botRight)


    document.getElementById('left1').innerHTML = ''
    document.getElementById('middle1').innerHTML = ''
    document.getElementById('right1').innerHTML = ''
    document.getElementById('left2').innerHTML = ''
    document.getElementById('middle2').innerHTML = ''
    document.getElementById('right2').innerHTML = ''
    document.getElementById('left3').innerHTML = ''
    document.getElementById('middle3').innerHTML = ''
    document.getElementById('right3').innerHTML = ''
    
    for(let l = 0; l < 3; l++){
        for(let c = 0; c < 3; c++){
            vet[l][c] = ''
        }
    }

    document.getElementById('jog').innerHTML = 'Vez do Jogador O'
    
}


document.getElementById('start').addEventListener('click', function(){
    vGame()
})

