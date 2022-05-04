let animeFrases = document.querySelector(".frase");
let boton = document.querySelector(".btn");

let array = [
  "Eres un ser increíble, diste lo mejor de ti y por eso te admiro. Pasaste por varias transformaciones, fuiste tan poderoso que todos nosotros te odiamos. - Son Goku",
  "No vivas con falsedades ni miedos, porque terminarás odiándote a ti mismo. - Uzumaki Naruto",
  "A mí me da igual que los dioses existan o no, yo soy el amo de mi vida; paso de los temas religiosos, pero jamás menospreciaré a alguien que crea en ellos. - Roronoa Zoro",
  "Si la felicidad tuviera una forma, tendría forma de cristal, porque puede estar a tu alrededor sin que la notes. Pero si cambias de perspectiva, puede reflejar una luz capaz de iluminarlo todo. - Lelouch",
  "La estupidez es mucho más fascinante que la inteligencia. La inteligencia tiene límites, la estupidez no. - Killua Zoldyck",
  "¿No es asombroso el cielo? No importa cuantas veces lo mires, nunca es el mismo dos veces. Este cielo de ahora solo existe en este instante. - Hitsugaya Toushiro",
  "Levántate y camina hacia adelante, tienes las piernas para hacerlo. - Edward Elric",
  "No importa cuán capacitado que estés, tú solo no puedes cambiar el mundo. Pero eso es lo maravilloso del mundo. - L.",
  "Había una mujer, fue la primera vez que encontré a alguien que estuviera verdaderamente vivo. Al menos, eso fue lo que pensé. Ella era... la parte de mí que perdí en algún lugar del camino, la parte que faltaba, la que deseaba. - Spike",
  "La gente tiene diferentes formas de pensar, incluso cuando se comete un error... Si la persona se da cuenta de su error es posible que lo enmiende, si mantienes tu visión clara verás el futuro, es de lo que se trata esta vida… - Vash Estampida",
  "Nadie puede entender perfectamente a otra persona, ya es bastante difícil entenderse a uno mismo, tal vez por eso la vida es tan interesante. - Ryoji Kaji",
  "Si no tienes recuerdos felices, nunca es tarde para comenzar a construirlos. - Dr. Tenma",
  "La gente necesita el miedo para poder sobrevivir. Lo experimentamos, y así podemos hacernos más fuertes. - Maka",
  "El dolor desaparece con el tiempo. Pero no deseo ser curado por el tiempo, porque cuando huyes del dolor, con el anhelo de olvidar, lo único que logras es quedarte atascado. Te vuelves incapaz de seguir adelante. - Ciel Phantomhive",
  " Dicen que la gente puede cambiar, pero... ¿Eso será cierto? Si deciden que quieren volar, ¿les salen alas? No lo creo. No tienes que cambiar tú, sino como haces las cosas. Tienes que crear una manera de volar mientras sigues siendo igual. - Sora",
];

function getRandomQuote() {
  return Math.floor(Math.random() * array.length);
}

boton.addEventListener("click", () => {
  animeFrases.textContent = array[getRandomQuote()];
});
