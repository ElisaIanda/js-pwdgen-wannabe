const firstName = prompt("Inserisci il nome");
const lastName = prompt("Inserisci il cognome");
const favoriteColor = prompt ("Inserisci il tuo colore preferito");
const password =  `${firstName}${lastName}${favoriteColor}${21}`;

document.getElementById("welcome-title").innerHTML = `Benvenuto ${firstName} ${lastName}!`
document.getElementById("name").innerHTML = firstName;
document.getElementById("lastname").innerHTML = lastName;
document.getElementById("color").innerHTML = favoriteColor;
document.getElementById("password").innerHTML = password;
