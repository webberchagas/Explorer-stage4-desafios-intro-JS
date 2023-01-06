let numberOne = Number(prompt(`Digite o primeiro número: `))
let numberTwo = Number(prompt(`Digite o segundo número: `))

/* aqui eu fiz primeiro do jeito mais engessado e depois automatizei

const sum = numberOne + numberTwo
const subtraction = numberOne - numberTwo
const division = numberOne / numberTwo
const multiplication = numberOne * numberTwo
const divisionRest = numberOne % numberTwo

alert(`A soma dos 2 números é: ${sum}`)	
*/

const signals = ["+","-","/","*","%"]

function calculator(signal){
	switch(signal){
		case "+":
			const sum = numberOne + numberTwo
			alert(`A soma dos dois números é: ${sum}`)
		break
		case "-":
			const subtraction = numberOne - numberTwo
			alert(`A subtração dos dois números é: ${subtraction}`)
		break	
		case "/":
			const division = numberOne / numberTwo
			alert(`A divisão dos dois números é: ${division.toFixed(1)}`)
		break		
		case "*":
			const multiplication = numberOne * numberTwo
			alert(`A multiplicação dos dois números é: ${multiplication}`)
		break
		case "%":
			const divisionRest = numberOne % numberTwo
			alert(`O resto da divisão dos dois números é: ${divisionRest}`)
		break
	}
}

for(let signal of signals){
	calculator(signal)	
}

let sumAfter = numberOne+numberTwo

if((sumAfter % 2) == 0){
	alert(`A soma dos dois numeros é par: ${sumAfter}`)
}else{
	alert(`A soma dos dois numeros é impar: ${sumAfter}`)
}

if(numberOne == numberTwo){
	alert(`Os números inseridos são iguais`)
}else{
	alert(`Os números inseridos são diferentes`)
}