let palavra;
let som;
let imagem;

function setup() {
  createCanvas(600, 600);
  palavra = fabin();
  som.loop();
}
function preload(){
  imagem = loadImage("imagem.png");
  som = loadSound("som.mp3");
}

function draw() {
  
  batata();
  fabin();
  let maximo = width;
  let minimo = 0;
  let aparecer = map(mouseX,0,width,1,palavra.length);
  let inicio = palavra.substring(0,aparecer);
  text(inicio,300,300);
}

function batata(){
 background("blue");
  image(imagem,0,0,600,600)
  fill("black");
  textSize(60);
  textAlign(CENTER,CENTER); 
}

function fabin(){
  let palavras = ["fabin infiel", "cachorro", "nadador", "booyah", "corno"];
  return random(palavras);
}