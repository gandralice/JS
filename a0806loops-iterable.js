// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const body = document.querySelector("body");
for (let i = 0; i < 4; i++) {
  const newLi = document.createElement("li");
  body.appendChild(newLi);
}

const allLi = document.querySelectorAll("li");
for (const li of allLi) {
  li.classList.add("newClass");
}
console.log(allLi);

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for (const key in window) {
  console.log(`${key}: ${window[key]}`);
}
