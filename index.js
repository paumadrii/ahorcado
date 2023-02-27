
window.onload = function(){
    console.log('star!');
    reset()
    prove()
    loser()
    winner()

}
let words=['jazmin','cabeza','crezco','abrazo','ceniza','pureza','zapato','jueves','jirafa','brasil','flores'];
//creo una funcion que me escoja una palabra de mi array, aleatoriamente//
function random(array){
   let rand = Math.floor(Math.random()*array.length);
   let result = array[rand];
   return result;
}
const game = {
    word: random(words),
    invalidAttemtps: 0,
    validLetters: [],
    checkLetter: function(letter){
        console.log(this.word)
        if(this.word.includes(letter)){

            if(! this.validLetters.includes(letter)){
                this.validLetters.push(letter)
            }

            let resultWord = ""
            for (let i = 0; i < this.word.length; i++) {
                const letter = this.word[i]
                console.log(this.word[i])
                if(this.validLetters.includes(letter)){
                    resultWord = resultWord + letter + " "
                }else{
                    resultWord = resultWord + "_ "
                }
                
            }
            console.log(resultWord)
            
            let stripes = document.getElementById('stripe')
            console.log(stripes)
            stripes.innerHTML=resultWord
            if(this.validLetters[5]){
                document.querySelector('.winner').style.display ='flex'
               winner()
            }


        }else{
            this.invalidAttemtps +=1
            changeManVisibility(this.invalidAttemtps)
            if(this.invalidAttemtps===6){
                document.querySelector('.loser').style.display = 'flex'
                loser()
            }
        }
    }
    

}




function handleChangeInput(value){
    if(value===''){
     
        return 
    } 
        game.checkLetter(value)
    
   
}
function prove(){
    const proveButton = document.querySelector('.prove')
    proveButton.addEventListener('click', function(){
        let value = document.querySelector('#oninput').value
        handleChangeInput(value)
    })

}
function reset(){
    const resetButton = document.querySelector('.reset')
    resetButton.addEventListener('click', function(){
        window.location.reload()
    })
}

function changeManVisibility(invalidAttemtps){
    const man = document.getElementById("man")
    console.log(invalidAttemtps)

    if(invalidAttemtps >= 1){
        man.querySelector(".soga").style.visibility = "visible"
        man.querySelector(".cabeza").style.visibility = "visible"
    }

    if(invalidAttemtps >= 2){
        man.querySelector(".panza").style.visibility = "visible"
    }

    if(invalidAttemtps >= 3){
        man.querySelector(".bizq").style.visibility = "visible"
    }
    if(invalidAttemtps >= 4){
        man.querySelector(".bder").style.visibility = "visible"
    }
    if(invalidAttemtps >= 5){
        man.querySelector(".pizq").style.visibility = "visible"
    }
    if(invalidAttemtps >= 6){
        man.querySelector(".pder").style.visibility = "visible"
    }
}
function loser(){
    const button = document.createElement('button')
                button.innerText = 'Intentar de nuevo'
                button.classList.add('reload')
    const buttonsContainer = document.querySelector('.loser')
    buttonsContainer.appendChild(button)
    button.addEventListener('click', function(){
        window.location.reload()
    })
}
function winner(){
    const button = document.createElement('button')
                button.innerText = 'Intentar de nuevo'
                button.classList.add('reload')
    const buttonsContainer = document.querySelector('.winner')
    buttonsContainer.appendChild(button)
    button.addEventListener('click', function(){
        window.location.reload()
    })

}
