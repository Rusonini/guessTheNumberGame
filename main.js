alert ("xoy!")
//var, let, const - создание переменных
//if-else  управляющая конструкция fels?
//for - цикл
//function, ()=>{}- функции.
//prompt- вызывает диалоговое окно
//return- то что возвращает значение
//Math.random()-возвращает случайное число
//Math.round-округляет
//`` бектики это шаблоннная строка
//retern - вроде как выход


const MAX = 100
const MIN = 0
const ATTEMPT_NUMBER = 10

function getPlayerName() {
    const PlayerName = prompt('Как тебязовут?');
    return PlayerName
}

const playerName = getPlayerName()

const getRandomNumber = () => {
    const randomNumber = Math.round(Math.random() * 100);
    return randomNumber 
}

const number = getRandomNumber()

    console.log(playerName, number);

    const game =  (max, min, attNumber, randomNumber, playerName) => {
        alert(`Привет, ${playerName}! 
        я загадал число в интервале от ${min} до ${max}.
        У тебя 10 попыток чтобы отгадать его.`)
        for (let i = 0; i < attNumber; i++) {
            const payerAnswer = prompt('Какое число я загадал?', '');
            if(payerAnswer > randomNumber){
                alert('Нужно меньше')
            } else if (payerAnswer < randomNumber){
                alert('Нужно больше')
            } else {
                alert('Угадал!')
                return
            }
        }
        alert(`${playerName} неуспел за ${attNumber}, игры не твое!;)`)
    }

    game(MAX, MIN, ATTEMPT_NUMBER, number, playerName)