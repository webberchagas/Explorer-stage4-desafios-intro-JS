let students = [
	{
	 name: "Diego",
	 note1: 10,
	 note2: 8
	},
	{
		name: "Mayk",
		note1: 8,
		note2: 7
	},
	{
		name: "Jaque",
	  note1: 9,
	  note2: 8
	},
	{
		name: "Marcia",
	  note1: 4,
	  note2: 3
	},
	{
		name: "Paulo",
	  note1: 2,
	  note2: 3
	}
]

function averageStudent (note1, note2){
	let calcAverage = (note1 + note2) /2
	return calcAverage
}

function messageResult(name, average){
	let resultMessage
	let approved = average > 7
	
	if(approved){
		resultMessage = `Parabéns, ${name}! voce foi aprovado(a) no concurso!`
	}else {
		resultMessage = `Não foi dessa vez ${name}, Tente novamente!`
	}
	
	return resultMessage
}

function printMessage(student){
	const { note1, note2, name } = student
	let resultAverage = averageStudent(note1, note2)
	let resultMessage = messageResult(name, resultAverage)
	
	return `A media do(a) aluno(a) é: ${resultAverage}
					${resultMessage}
				 `
}

for(let student of students){
	let messageStundet = printMessage(student)
	alert(messageStundet)
}