//Exercise 1
var exercise1List = document.getElementById("exercise1List");

var students1 = {
  'firstName' : "Mario",
  'lastName' : "Rossi",
  'age' : 20
}



for (var key in students1){
  exercise1List.innerHTML += "<li>" + students1[key] + "</li>";
}


//Exercise 2
var exercise2List = document.getElementById("exercise2List");

var students2 = [
{
  'firstName' : "Mario",
  'lastName' : "Rossi",
  'age' : 20
},
{
  'firstName' : "Mattia",
  'lastName' : "Verdi",
  'age' : 25
},
{
  'firstName' : "Matteo",
  'lastName' : "Bianchi",
  'age' : 10
}]

for (var i = 0; i< students2.length; i++) {
  exercise2List.innerHTML += "<li>Nome: " + students2[i].firstName + " <br>Cognome: " + students2[i].lastName + "<br>Età: " + students2[i].age + "</li>";
}

//Exercise 3
var exercise3List = document.getElementById("exercise3List");

var students3 = {
  'firstName' : undefined,
  'lastName' : undefined,
  'age' : undefined
}

students3.firstName = prompt("Inserisci nome studente");
students3.lastName = prompt("Inserisci cognome studente");
students3.age = prompt("Inserisci età studente");

for (var key in students1){
  exercise3List.innerHTML += "<li>" + students3[key] + "</li>";
}
