//tela
var tela  =1

//enemyvar
var conty = -1;

//varchar
let cx,cy
cx=200
cy=364

//x=largura e y=altura
var x     =200
var y     =40
var xMenu =100
var yMenu2=220
var yMenu3=270
var yMenu4=320

//colisao 1 e 2
var hit1=false
var hit2=false
var hit3=false
var hit4=false
var hit5=false
var hit6=false
var hit7=false
var hit8=false
var hit9=false

//fase3
var x0=0, x1=x0+1, x2=x1+1;
var bx = [];
var h = -50;
bx[0]=140;
bx[1]=200;
bx[2]=260;
var bol0=false
var bol1=false
var bol2=false


//setup
function setup() {
  createCanvas(400,400);
  sndbck.play();
}

//var-imagens
let img1, img2, img3, img4, imglose, lose2,lose3, win, teclas;

//var-sound
let sndbck, sndbutpress, sndscr, winsnd, losesnd;

//preload-imagens
function preload(){
  img1   = loadImage( "claq.png" );
  img2   = loadImage("idalme.png");
  img3   = loadImage("fundo.jpeg");
  img4   = loadImage("fundocred.jpeg");
  imglose= loadImage("opequeninos.gif");
  lose2  = loadImage("otaro.png");
  lose3  = loadImage("jarbas.png");
  win    = loadImage("clapin.gif");
  teclas = loadImage("teclas.png");
  soundFormats('mp3');
  sndbck    = loadSound("snes.mp3");
  sndbutpress= loadSound("maro-jump-sound-effect_1.mp3");
  sndscr     = loadSound("a-vineboom.mp3");
  winsnd     = loadSound("xqc-claps-fast.mp3");
  losesnd    = loadSound("spongebob-fail.mp3");
}

//funções
function menu(){
    background(95, 95, 95);
    image(img3, 0,0,400,400);
    fill(50);
    stroke(10)
    rect(80,95,250,80,20,20)
    textAlign(CENTER);
    textSize(50);
    noStroke();
    fill(255, 0, 0);
    text("R", 115, 150);
    fill(0, 255, 0);
    text("G", 155, 150);
    fill(0, 0, 255);
    text("B", 195, 150);
    fill(240);
    text("olas", 260, 150);
    textSize(26);
    
    //Jogar
    if(mouseX > xMenu && mouseX < xMenu+x && mouseY > yMenu2 && mouseY <   yMenu2 + y){
      stroke(10);
      fill(190,0,0);
      rect(xMenu, yMenu2, x, y, 15);
      if(mouseIsPressed){
        tela=2;
        sndbutpress.play();
        h= -50;
      }
    }
    fill(240);
    stroke(10);
    text("Jogar", 200, 250)
    
    //Informações
    if(mouseX > xMenu && mouseX < xMenu+x && mouseY > yMenu3 && mouseY < yMenu3 + y){
    stroke(10);
    fill(0,190,0);
    rect(xMenu, yMenu3, x, y, 15);
      if(mouseIsPressed){
        tela=4
        sndbutpress.play();
      }
    }
    fill(240);
    stroke(10);
    text("Tutorial", 200, 300);
    
    //Créditos
      if(mouseX > xMenu && mouseX < xMenu+x && mouseY > yMenu4 && mouseY < yMenu4+y){
    stroke(10);
    fill(0,0,190);
    rect(xMenu, yMenu4, x, y, 15);
      if(mouseIsPressed){
        tela=5
        sndbutpress.play();
      }
    }
    fill(240);
    stroke(10);
    text("Créditos", 200, 350)
}

function ingame1(){
  sndbck.stop();
  background(75);
  fill(100,0,0)
  stroke(255)
  rect(280, 20, 95, 95,5);
  textSize(20);
  fill(255);
  stroke(255,0,0);
  text("Fase 1",325, 50);
  textSize(14);
  text("Dificuldade:", 325, 70);
  fill(0,255,0);
  textSize(20);
  stroke(0,255,0);
  text("Simples", 325, 100)
  let ix;
  ix=200;
  
  //line1
  stroke(100);
  line(ix,400,ix,0);
  //line2
  stroke(100);
  line(ix+60,400,ix+60,0);
  //line3
  stroke(100);
  line(ix-60,400,ix-60,0);
  
  //enemy
  stroke(100);
  fill(255,0,0)
  circle(140, conty, 30);
  fill(0,255,0)
  circle(200, conty, 30);
  fill(0,0,255)
  circle(260, conty, 30);
  if(conty>=-1 && conty<550){
    conty+=5;
  }else if(conty>=550){
    conty=(-50)
    tela = 3
  }
  
  //exitToMenu
  textAlign(CENTER);
  fill(100,0,0);
  rect(50, 379, 298, 15);
  fill(240);
  stroke(255,0,0);
  textSize(11);
  text("Pressione a tecla Esc para voltar ao menu", 200, 390);
    
  //voltar
  if(keyIsDown(27)){
    sndbutpress.play();
    tela = 1;
    cx = 200;
    conty = (-1);
    sndbck.play();
  }
  
  //char
  if(keyIsDown(LEFT_ARROW)){
    cx=140;
  }else if(keyIsDown(RIGHT_ARROW)){
    cx=260
  }else if(keyIsDown(UP_ARROW)){
    cx=200
  }
  
  hit  = collideCircleCircle(cx, cy, 20, 140, conty, 30);
  hit2 = collideCircleCircle(cx, cy, 20, 260, conty, 30);
  hit3 = collideCircleCircle(cx, cy, 20, 200, conty, 30);

  fill(255,0,0);
  stroke(100);
  circle(cx,cy,20);
  if(hit){
    sndscr.play();
    fill(240)
    stroke(100);
    circle(cx,cy,20);    
  }
  if(hit2){
    losesnd.play();
    tela=6
  }
  if(hit3){
    losesnd.play();
    tela=6
  }

}

function ingame2(){
  sndbck.stop();
  background(75);
  fill(100,0,0)
  stroke(255)
  rect(280, 20, 95, 95,5);
  textSize(20);
  fill(255);
  stroke(255,0,0);
  text("Fase 2",325, 50);
  textSize(14);
  text("Dificuldade:", 325, 70);
  fill(0,255,0);
  textSize(20);
  stroke(255,255,0);
  text("Mediana", 325, 100)
  let ix;
  ix=200;
  
  //line1
  stroke(100);
  line(ix,400,ix,0);
  //line2
  stroke(100);
  line(ix+60,400,ix+60,0);
  //line3
  stroke(100);
  line(ix-60,400,ix-60,0);
  
  //enemy
  stroke(100);
  fill(255,0,0)
  circle(140, conty, 30);
  fill(0,255,0)
  circle(200, conty, 30);
  fill(0,0,255)
  circle(260, conty, 30);
  fill(0,0,255)
  circle(140, conty-140, 30);
  fill(255,0,0)
  circle(200, conty-140, 30);
  fill(0,255,0)
  circle(260, conty-140, 30);
  fill(0,0,255)
  circle(140, conty-280, 30);
  fill(0,255,0)
  circle(200, conty-280, 30);
  fill(255,0,0)
  circle(260, conty-280, 30);
  if(conty>=(-100) && conty<950){
    conty+=5.5;
  }else if(conty>950){
    conty= (-100)
    tela=8;
    h = -50;
    
  }
  
  //exitToMenu
  textAlign(CENTER);
  fill(100,0,0);
  rect(50, 379, 298, 15);
  fill(240);
  stroke(255,0,0);
  textSize(11);
  text("Pressione a tecla Esc para voltar ao menu", 200, 390);
    
  //voltar
  if(keyIsDown(27)){
    tela = 1;
    cx = 200;
    conty = (-1);
    sndbck.play();
  }
  
  //char
  if(keyIsDown(LEFT_ARROW)){
    cx=140;
  }else if(keyIsDown(RIGHT_ARROW)){
    cx=260
  }else if(keyIsDown(UP_ARROW)){
    cx=200
  }
    hit  = collideCircleCircle(cx, cy, 20, 140, conty, 15);
    hit2 = collideCircleCircle(cx, cy, 20, 260, conty, 15);
    hit3 = collideCircleCircle(cx, cy, 20, 200, conty, 15);
    hit4 = collideCircleCircle(cx, cy, 20, 140, conty-140, 15);
    hit5 = collideCircleCircle(cx, cy, 20, 260, conty-140, 15);
    hit6 = collideCircleCircle(cx, cy, 20, 200, conty-140, 15);
    hit7 = collideCircleCircle(cx, cy, 20, 140, conty-280, 15);
    hit8 = collideCircleCircle(cx, cy, 20, 260, conty-280, 15);
    hit9 = collideCircleCircle(cx, cy, 20, 200, conty-280, 15);
    fill(0,255,0);
    stroke(100);
    circle(cx,cy,20);
    if(tela==3 && (hit3 || hit5 || hit9)){
      sndscr.play();
      fill(240);
      noStroke();
      circle(cx,cy,20);
    }else if(tela==3 && hit || hit2 || hit4 || hit6 || hit7 || hit8 ){
      losesnd.play();
      tela=6
    }
}

function winscreen(){
  sndbck.stop();
  background(240);
  noStroke();
  image(win, 0,100,400,250);
  textSize(40);
  textAlign(CENTER);
  fill(10);
  text("Parabéns!", 200, 50);
  textSize(16);
  text("Por hora é só isso, tenha um bom dia!", 200, 80);
  
  //exitToMenu
  textAlign(CENTER);
  fill(100,0,0);
  rect(50, 379, 298, 15);
  fill(240);
  stroke(255,0,0);
  textSize(11);
  text("Pressione a tecla Esc para voltar ao menu", 200, 390);
    
  //voltar
  if(keyIsDown(27)){
    winsnd.stop();
    sndbutpress.play();
    tela = 1;
    cx = 200;
    conty = (-1);
    sndbck.play();
  }
  
  
}

function lose(){
  sndbck.stop();
  image(imglose, 0,0,400,400);
  textSize(90);
  fill(255,0,0);
  stroke(255,0,0);
  text("PERDEU",200,160)
  textSize(16)
  text("otariooooo                       \njkdjadkksdadksddaksdj",240, 230)
  image(lose2, 50, 205, 100, 50)
  image(lose3, 50, 275, 300, 70)
  
  //exitToMenu
  textAlign(CENTER);
  fill(100,0,0);
  rect(50, 379, 298, 15);
  fill(240);
  stroke(255,0,0);
  textSize(11);
  text("Pressione a tecla Esc para voltar ao menu", 200, 390);
    
  //voltar
  if(keyIsDown(27)){
    sndbutpress.play();
    tela = 1;
    cx = 200;
    conty = (-1);
    sndbck.play();
  }
}

function tutorial(){
  background(20);
  fill(10);
  rect(15, 25, 370, 300,10);
  image(teclas, 50,220,300,100);
  noStroke();
  textSize(20);
  fill(255,0,0);
  text("R",43,50);
  fill(0,255,0);
  text("G",60,50);
  fill(0,0,255);
  text("B",77,50);
  fill(240);
  text("                                       olas, é um jogo simples que\n                          consiste em colidir as bolas em\n                                 suas respectivas cores e derivadas,\n                               aperte as teclas abaixo para mover\n                                     a bola menor e evitar as cores erradas.",101,50);
  textAlign(CENTER);
  textSize(40)
  text("Controles:",200,205);
  //exitToMenu
  textAlign(CENTER);
  stroke(255,0,0);
  fill(100,0,0);
  rect(50, 379, 298, 15);
  fill(240);
  textSize(11);
  text("Pressione a tecla Esc para voltar ao menu", 200, 390);
    
  //voltar
  if(keyIsDown(27)){
    sndbutpress.play();
    tela = 1;
    cx = 200;
    conty = (-1);
    sndbck.play();
  }
}

function cred(){
  background(20);
  image(img3,0,0,400,400);
  fill(60);
  stroke(0);
  rect(6, 78, 386, 240, 30, 30);
  fill(230);
  textSize(15);
  noStroke();
  fill(240);
  text("   Educadora:     \n   Departamento:", 156, 110);
  text("   Discente:         \n   Departamento:", 156, 220);
  textSize(12);
  text("                Francisco Clarkson de Oliveira Júnior", 250, 220);
  text("     ECT-UFRN            ", 256, 239);
  text("             Idalmis Milian Sardina Martins", 250, 110);
  text("     ECT-UFRN            ", 256, 129);     
  textSize(40);
  fill(240);
  stroke(10);
  text("Créditos", 200, 50);
  image(img2,17,95,90,90);
  image(img1, 17, 200, 90,90);
    
  //exitToMenu
  textAlign(CENTER);
  stroke(0);
  fill(60);
  rect(50, 379, 298, 15);
  fill(240);
  textSize(11);
  text("Pressione a tecla Esc para voltar ao menu", 200, 390);
  
  //voltar
  if(keyIsDown(27)){
    sndbutpress.play();
    tela = 1;
    cx = 200;
    conty = (-1);
    sndbck.play();
  }
}

function ingame3(){
  sndbck.stop();
  let xis = 0
  background(75);
  fill(100,0,0)
  stroke(255)
  rect(280, 20, 95, 95,5);
  textSize(20);
  fill(255);
  stroke(255,0,0);
  text("Fase 3",325, 50);
  textSize(14);
  text("Dificuldade:", 325, 70);
  fill(255,0,0);
  textSize(14);
  stroke(255,0,0);
  text("Difícil (se pa)", 325, 100)
  let ix;
  ix=200;
  
  //line1
  stroke(100);
  line(ix,400,ix,0);
  //line2
  stroke(100);
  line(ix+60,400,ix+60,0);
  //line3
  stroke(100);
  line(ix-60,400,ix-60,0);
  
  //enemy
  if(h>=(-100) && h<450){
    h+=4.5;
    if(h>=80 && h<160){
      x0=1
      x1=2
      x2=0
    }else if(h>=160 && h<240){
      x0=2
      x1=0
      x2=1
    }else if(h>=240 && h<320){
      x0=0
      x1=1
      x2=2
    }else if(h>=320 && h<400){
      x0=1
      x1=2
      x2=0
    }
  }else if(h>400){
    tela=7;
    winsnd.play();
  }
  stroke(100);
  fill(255,0,0);
  circle(bx[x0], h, 30);
  fill(0,255,0);
  circle(bx[x1], h, 30);
  fill(0, 0, 255);
  circle(bx[x2], h, 30);

  
  //exitToMenu
  textAlign(CENTER);
  fill(100,0,0);
  rect(50, 379, 298, 15);
  fill(240);
  stroke(255,0,0);
  textSize(11);
  text("Pressione a tecla Esc para voltar ao menu", 200, 390);
    
  //voltar
  if(keyIsDown(27)){
    tela = 1;
    cx = 200;
    conty = (-1);
    sndbck.play();
  }
  
  //char
  if(keyIsDown(LEFT_ARROW)){
    cx=140;
  }else if(keyIsDown(RIGHT_ARROW)){
    cx=260
  }else if(keyIsDown(UP_ARROW)){
    cx=200
  }
  fill(0,0,255)
  stroke(100)
  circle(cx,cy,20)
  bol0 = collideCircleCircle(cx, cy, 20, bx[x0], h, 30);
  bol1 = collideCircleCircle(cx, cy, 20, bx[x1], h, 30);
  bol2 = collideCircleCircle(cx, cy, 20, bx[x2], h, 30);
  if(bol2){
    sndscr.play();
    fill(240)
    stroke(100);
    circle(cx,cy,20);   
  }else if(bol0 || bol1){
    losesnd.play();
    tela = 6;
  }

}

//draw-geral
function draw(){
  textStyle(NORMAL);
  if(tela == 1){
    menu()
  }else if(tela == 2){
    ingame1()
  }else if(tela == 3){
    ingame2()
  }else if(tela == 4){
    tutorial()
  }else if(tela == 5){
    cred()
  }else if(tela == 6){
    lose()
  }else if(tela == 7){
    winscreen()
  }else if(tela == 8){
    ingame3()
  }
}