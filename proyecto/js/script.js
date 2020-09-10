let counter = 0;
const textos = ['El engreído de casa', 'El compañero fiel', 'Adopta una mascota'];
const subtextos = ['El perro necesita un cuidado especial', 'El perro es la mascota más fiel', 'Adoptar una mascota evita que sean sacrificados'];
const url = ["https://www.facebook.com", "https://www.twitter.com", "https://www.instagram.com", "https://www.google.com"];

carrousel();

function carrousel() {
  console.log(counter);
  let img = document.getElementById("carrousel");
  let texto = document.getElementById("texto");
  let subtexto = document.getElementById("subtexto");

  setInterval(function () {
    img.src = `img/banner${counter + 1}.jpg`;
    texto.innerText = textos[counter];
    subtexto.innerText = subtextos[counter];

    counter === 2 ? counter = 0 : counter++;
  }, 2000);

}

function enlaces(num) {
  const footer = document.getElementsByTagName("footer")[0];
  let a = footer.getElementsByTagName("a");
  a[num].href = url[num];
}

$(".imgblog").mouseover(function () {
  $(this).children("img").css("height", "250px");
  $(this).children("img").css("width", "300px");
  $(this).children("img").css("transition", "all 0.5s");
}).mouseout(function () {
  $(this).children("img").css("height", "200px");
  $(this).children("img").css("width", "250px");
  $(this).children("img").css("transition", "all 0.5s");
});

$(".info-pet").mouseover(function () {
  $(this).css("transform", "scale(1.5)");
  $(this).css("transition", "all 0.5s");
}).mouseout(function () {
  $(this).css("transform", "scale(1)");
  $(this).css("transition", "all 0.5s");
});
