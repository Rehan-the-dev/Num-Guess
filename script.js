const random = parseInt(Math.random() * 100 + 1)
        // randomNum.innerHTML = random

        const number = document.querySelector("#number")
        const output = document.querySelector("#output")
        const butt = document.querySelector("#sub")
        const previous = document.querySelector("#previous")
        const chances = document.querySelector("#chances")

        let myArr = []
        let chanceRemain = 7;
        
        
        butt.addEventListener("click" , function(event){
            event.preventDefault()
            myArr.push(number.value)
            previous.innerHTML = myArr

            if(random > number.value){
                output.innerHTML = "Too Low🙁, Try Again🫡"
                number.value = ''
                chanceRemain--
            }
            else if (random == number.value) {
                output.innerHTML = "Congrats, You Won 😎🏆"
                number.value = ''
                chanceRemain--
            } 
            else if(random < number.value){
                output.innerHTML = "Too High🙁, Try Again🫡"
                number.value = ''
                chanceRemain--
            }

            chances.innerHTML = `chances remain : ${chanceRemain}`
            if(chanceRemain === 0){
                alert(`You Lost😞, Try Again, the Number was ${random}`)
                window.location.reload()
            }

            // chances.innerHTML = chance-- 
            // chances.innerHTML = "Chances Remaining: "
            // chance--
            // if(chance.value <= 0){
            //     alert("You Lost, Try Again")
            // }
        })