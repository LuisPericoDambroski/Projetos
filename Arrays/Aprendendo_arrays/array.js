// nessa aula foi o primeiro contato da turma com arrays

var linguagens= ["java","python","C#"]
linguagens.push("html")
document.write(`${linguagens}<br>`)
linguagens.splice(1,1,"portugol","PHP","C++")
document.write(`${linguagens}<br>`)
document.write(`${linguagens.length}<br>`)
linguagens.splice(2,1,"SQL","Swift","Go")
document.write(`${linguagens}<br>`)
linguagens.splice(2,1,"python")
document.write(linguagens.indexOf("Swift"))