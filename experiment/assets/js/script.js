const name = document.getElementById('name').value;

const surname = document.getElementById('surname').value;

const age = document.getElementById('age').value;

const color = document.getElementById('color').value;

const username = document.getElementById('username').value;

const email = document.getElementById('email').value;

const nameNoSpaces = name.replaceAll(/\s/g,'');

const surnameNoSpaces = surname.replaceAll(/\s/g,'');

const colorNoSpaces = color.replaceAll(/\s/g,'');

const output = document.getElementById("output");

output.innerHTML = `
  <h1>Ciao ${name} ${surname}, hai ${age} anni ed il tuo colore preferito è il ${color}.</h1>

  <h2 class="py-3">La tua password generata è: ${nameNoSpaces}${surnameNoSpaces}${colorNoSpaces}${age}</h2>

  <h3 class="py-3">Inoltre hai inserito come username "${username}" ed abbiamo generato la seguente email: ${email}@boolean.it</h3>
`