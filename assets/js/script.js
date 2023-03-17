/*
--- Brainstorming ---

Task:

1. Chiedi all’utente il suo nome;

2. Chiedi il suo cognome;

3. Chiedi il suo colore preferito;

4. Scrivi sulla pagina nomecognomecolorepreferito23.

Steps da fare:

1. Salvare il nome inserito dall'utente  in una variabile;

2. Salvare il cognome inserito dall'utente in una variabile;

3. Salvare il colore preferito inserito dall'utente in una variabile;

4. Sommare le tre variabili tra loro;

5. Stampare a schermo il risultato.

*/

const name = prompt("Inserisci il tuo nome:");

const surname = prompt("Inserisci il tuo cognome:");

const age = prompt("Inserisci la tua età:");

const color = prompt("Inserisci il tuo colore preferito:");

const nameNoSpaces = name.replaceAll(/\s/g,'');

const surnameNoSpaces = surname.replaceAll(/\s/g,'');

const colorNoSpaces = color.replaceAll(/\s/g,'');

