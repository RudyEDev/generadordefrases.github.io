const frasesIngenieros = [
  "La ingeniería es la búsqueda de soluciones para problemas del mundo real.",
  "El ingeniero crea lo que nunca ha sido.",
  "La ingeniería es el arte de organizar y dirigir recursos naturales y humanos en beneficio de la humanidad.",
  "El ingeniero tiene la capacidad de transformar ideas en realidad.",
  "Ingeniería: donde las matemáticas se encuentran con la realidad.",
  "El ingeniero no solo resuelve problemas, crea soluciones innovadoras.",
  "Cada diseño es un sueño hecho realidad para un ingeniero.",
  "La programación no se trata solo de código, sino de resolver problemas.",
  "En el mundo del software, la paciencia es la clave del éxito.",
  "Escribir software es un arte, crear buen software es una ciencia.",
  "La calidad del código es más importante que la cantidad de código.",
  "Un buen software comienza con una buena arquitectura.",
  "La creatividad es la chispa que enciende el código innovador.",
  "Cada error en el código es una oportunidad para aprender y mejorar.",
  "La simplicidad es la mejor amiga del programador.",
  "Un software bien diseñado es como una obra maestra invisible.",
  "En el desarrollo de software, la flexibilidad es la clave para la evolución.",
  "La curiosidad es el motor de la innovación en el mundo del software.",
  "La perseverancia es esencial cuando se enfrentan desafíos de codificación.",
  "El código limpio es un regalo para el programador que viene después de ti.",
  "La documentación clara es tan importante como el propio código.",
  "En el desarrollo de software, el trabajo en equipo es fundamental.",
  "Un buen ingeniero de software encuentra soluciones, no solo problemas.",
  "La automatización libera a los desarrolladores para centrarse en lo creativo.",
  "La adaptabilidad es la clave en un entorno de desarrollo en constante cambio.",
  "Nunca dejes de aprender; el mundo del software evoluciona constantemente.",
];

function cargarNuevaFrase() {
  const frase = getRandomElement(frasesIngenieros);
  document.getElementById("frase-placeholder").innerText = frase;
}

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Cargar una frase al iniciar la página
window.onload = cargarNuevaFrase;
