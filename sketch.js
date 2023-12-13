//TEXTO
let fonte;
let texto;


//SOM

//IMAGENS
let entrada;

//BANHEIRO
let banheiro_fundo;
let imgbanheiro = [];

//ESCULTURA
let escultura_fundo;
let imgescultura = [];

//GRAVURA
let gravura_fundo;
let gravura_gravura;
let imggravura = [];

//PINTURA
let pintura_fundo;
let imgpintura = [];

//SOFA
let sofacel;
let sofaon;
let sofaoff;
let imgsofa = [];


//bool (VERDADEIRO/FALSO)
var dialogo = false;

var menu = true;
var escultura = false;
var banheiro = false; 
var gravura = false;
var pintura = false;
var sofa = false; 

//CONTADORES DE ENTRADAS 
var contador_banheiro = 0;
var contador_escultura = 0;
var contador_gravura = 0;
var contador_pintura = 0;
var contador_sofa = 0;

function setup() 
{ 
  //FRAMES
  frameRate(120);
  
  //TAMANHO DA TELA
  createCanvas(960,540);  

  //TEXTO
  fonte = loadFont("ROTORcapNeue-Regular.ttf");
  texto = loadStrings("dialogos.txt");
  
  //IMAGENS 
  
  //ENTRADA
  entrada = loadImage ("Entrada.gif");  
  
  //BANHEIRO
  banheiro_fundo = loadImage("banheiro_fundo.gif");
  
  for (var b = 1; b <= 5; b++)
  {
    imgbanheiro[b]= loadImage ("banheiro_"+b+".png");
  } 
  
  //ESCULTURA
  escultura_fundo = loadImage("escultura_fundo.gif");
    
  for (var e = 1; e <= 5; e++)
  {
    imgescultura[e]= loadImage ("escultura_"+e+".png");
  }

  //GRAVURA
  gravura_fundo = loadImage ("gravura_fundo.gif");
   
  for(var g = 1; g <= 5; g++)
  {
    imggravura[g] = loadImage ("gravura_"+g+".png");
  }
    
  //PINTURA
  pintura_fundo = loadImage ("pintura_fundo.gif");    
    
  for(var p = 1; p <= 5; p++)
  {
    imgpintura[p] = loadImage ("pintura_"+p+".png");
  }
    
  //SOFÁ
  sofacel = loadImage ("sofacel.gif");  
  sofaon = loadImage ("sofaon.gif");
  sofaoff = loadImage ("sofaoff.gif");
    
  for (var s = 1; s <= 10; s++)
  {
    imgsofa[s]= loadImage ("sofa_"+s+".png");
  } 
  
  //CONFUGURAÇÕES FONTE
  textFont(fonte);
  textSize(18);
  fill(255);
  
}


function draw() 
{
  if (menu)
  {
    drawmenu(); 
    mouse();
  }
  if (banheiro)
  {
    drawbanheiro();
    mouse();
  }
  if (escultura)
  {
    drawescultura();
    mouse();
  }
  if (gravura)
  {
    drawgravura();
    mouse();
  }
  if (pintura)
  {
    drawpintura();
    mouse();
  }
  if (sofa)
  {
    drawsofa();
    mouse();
  }
  
}

function mouseClicked() //MOVIMENTAÇÃO  POR CLICK 
{  
  //MENU
  if (menu)
  {
    menu = false;
    sofa = true;
    contador_sofa ++;
    dialogo = true;
  }
  
  //DIALOGO
  if ((dialogo) && (mouseX > 7*width/8) && (mouseX < 10*width/11) && (mouseY > 7*height/8) && (mouseY < 10*height/11))
  {
    dialogo = false;
    draw();
  }
  
  //ATIVAR QUANDO O DIALOGO TERMINAR
  if(!dialogo)
  {
    //CLICK BANHEIRO
  if (banheiro) 
  {
    //BANHEIRO > SOFÁ
    if((mouseX > 2*width/3) && (mouseX < 3*width/4) && (mouseY > 3*height/4))
    {
      banheiro = false;
      sofa = true;
      contador_sofa ++;
      dialogo = true;
      draw();
    }
  }
  
  //CLICK ESCULTURA
  if (escultura)
  {
    //ESCULTURA > SOFÁ
    if((mouseX < width/4) && (mouseY > 3*height/4))
    {
      escultura = false;
      sofa = true;
      contador_sofa ++;
      dialogo = true;
      draw();
    }
  }
  
  //CLICK GRAVURA
  if(gravura)
  {
    //GRAVURA > SOFÁ
    if ((mouseY > 480) && (mouseX < 600) && (mouseX>400))
    {
      gravura = false;
      sofa = true;
      contador_sofa ++;
      dialogo = true;
      draw();
    }
  }
  
  //CLICK PINTURA
  if (pintura)
  {
    // PINTURA > SOFÁ
    if ((mouseY > 480) && (mouseX < 600) && (mouseX>400))
    {
      pintura = false;
      sofa = true;
      contador_sofa++;
      dialogo = true;
      draw();
    }
  }
  
  //CLICK SOFA
  if (sofa)
  {
    //SOFÁ > BANHEIRO
    if((contador_sofa < 22) && (mouseX < width/6) && (mouseY < height / 4))
    {
      sofa = false;
      banheiro = true;
      contador_banheiro++;
      dialogo = true;
      draw();
    }
    //SOFÁ > ESCULTURA
    if ((contador_sofa < 22) && (mouseX > 3*width/4) && (mouseY > height/2) && (mouseY < 7*height/8))
    {
      sofa = false;
      escultura = true;
      contador_escultura++;
      dialogo = true;
      draw();
    }
    
    //SOFÁ > GRAVURA
    if ((contador_sofa < 22) && (mouseX > width/4) && (mouseX < width/3) && (mouseY > height/4) && (mouseY < 3*height/4))
    {
      sofa = false;
      gravura = true;
      contador_gravura++;
      dialogo = true;
      draw();
    }
    // SOFÁ > PINTURA
    if ((contador_sofa < 22) && (mouseX > width/2) && (mouseY < width/8))
    {
      sofa = false;
      pintura = true;
      contador_pintura++;
      dialogo = true;
      draw();
    }
    // LINK  > voce viu?
    if ((contador_sofa >= 22) && (mouseX < 2*width/3) && (mouseX> width/3) && (mouseY > height/3) && (mouseY < 2*height/3))
    {
      window.open("https://www.instagram.com/cadeosofa/?hl=pt-br");
    }
  } 
}

}

//DESENHAR MENU
function drawmenu ()
{
  entrada.resize(width, height);
  background (entrada);
}

//DESENHAR BANHEIRO
function drawbanheiro()
{ 
 
 //fundo gif
 background(banheiro_fundo);
 
 //camadas
 for (var i = 1; i <= 5; i++)
 {
  if ( i <=6 - contador_banheiro)
  {
    image(imgbanheiro[i],0,0);
  }
 }
  
 //dialogo
 if ((dialogo) && (contador_banheiro==2))
 {
   caixatexto();
   text(texto[contador_banheiro - 1], width/15, height - 120 ,9*width/11,height/5 );
 }
  
 if(contador_banheiro != 2)
 {
   dialogo = false;
 }
    
}

//DESENHAR ESCULTURA
function drawescultura()
{
  //fundo gif
  background(escultura_fundo);
  
  //camadas
  for (var i = 1; i <= 5; i++)
  {
    if ( i <=6 - contador_escultura)
    {
      image(imgescultura[i],0,0);
    } 
  }
  
  //dialogo
  if (contador_escultura > 5)
  {
    dialogo = false;
  }
  
  if(dialogo)
  {
    caixatexto();
    text(texto[contador_escultura + 2], width/15, height - 120 ,9*width/11,height/5 );
  }
}

//DESENHAR GRAVURA
function drawgravura()
{
 //fundo gif
  background(gravura_fundo);

  //camadas
  for (var i = 1; i <= 5; i++)
  { 
    if (i <= 6 - contador_gravura)
    {
      image(imggravura[i],0,0);
    }
  }
  
  //dialogo
  if (contador_gravura > 5)
  {
    dialogo = false;
  }
  
  if (dialogo)
  {
    caixatexto();
    text(texto[contador_gravura + 10], width/15, height - 120 ,9*width/11,height/5 );
  }
}

//DESENHAR PINTURA
function drawpintura ()
{
  //fundo gif
  background(pintura_fundo);
  
  //camadas
  for (var i = 1; i <= 5; i++)
  {  
    if (i <= 6 - contador_pintura)
    {
      image(imgpintura[i],0,0);
    }    
  }
  
  //dialogo
  if (contador_pintura > 5)
  {
    dialogo = false;
  }
  
  if (dialogo)
  {
    caixatexto();
    text(texto[contador_pintura+16], width/15, height - 120 ,9*width/11,height/5 );
  }
  
}


//DESENHAR SOFÁ
function drawsofa()
{
  
  //fundo gif
  if (contador_sofa == 1)
  {
    background(sofaon);
  }
  if ((contador_sofa > 1) && (contador_sofa < 22 ))
  {
    background(sofaoff);
  }
  if (contador_sofa >= 22)
  {
    background(sofacel);
    dialogo = false;    
  }
    
  //camdas
  for (var i = 1; i <= 10; i++)
  {
    if ( i - 1 <= 12 - contador_sofa)
    {
      image(imgsofa[i],0,0);
    }
  }
  
  //dialogo
  if(dialogo)
  {
    caixatexto();
    text(texto[contador_sofa+22], width/15, height - 120 ,9*width/11,height/5 );
  }
   
}

//desenhar caixa de texto
function caixatexto ()
{
  colorMode(RGB, 255, 255, 255, 1);
  fill(0, 0, 0, 0.5);
  stroke(255);
  rect(width/30,3*height/4,10*width/11,height/5);
  fill(255);
  triangle(7*width/8, 7*height/8, 7*width/8 , (7*height/8) +20  , (7*width/8) + 30,(7*height/8) +10);
}

//
function mouse ()
{
  //MENU
  if (menu)
  {
    cursor(HAND);
  }

  if (dialogo)
  {
  if ((mouseX > 7*width/8) && (mouseX < 10*width/11) && (mouseY > 7*height/8) && (mouseY < 10*height/11))
  {
    cursor(HAND);
  }
  else
  {
    cursor(ARROW);
  }
  }
  
  
  if(!dialogo)
  {
    //CLICK BANHEIRO
  if (banheiro) 
  {
    //BANHEIRO > SOFÁ
    if((mouseX > 2*width/3) && (mouseX < 3*width/4) && (mouseY > 3*height/4))
    {
      cursor(HAND);
      fill(255);
      stroke(0);
      triangle(700,500,690,510,710,520);
    }
    else
  {
    cursor(ARROW);
  }
  }
  
  //CLICK ESCULTURA
  if (escultura)
  {
    //ESCULTURA > SOFÁ
    if((mouseX < width/4) && (mouseY > 3*height/4))
    {
      cursor(HAND);
      fill(255);
      stroke(0);
      triangle(50,490,65,510,40,520);
      
    }
    else
  {
    cursor(ARROW);
  }
  }
  
  //CLICK GRAVURA
  if(gravura)
  {
    //GRAVURA > SOFÁ
    if ((mouseY > 480) && (mouseX < 600) && (mouseX>400))
    {
      cursor(HAND);
      fill(255);
      stroke(0);
      triangle(500,500,540,500,520,515);
    }
    else
    {
      cursor(ARROW);
    }
  }
  
  //CLICK PINTURA
  if (pintura)
  {
    // PINTURA > SOFÁ
    if ((mouseY > 480) && (mouseX < 600) && (mouseX>400))
    {
      cursor(HAND);
      fill(255);
      stroke(0);
       triangle(500,500,540,500,520,515);
    }
    else
  {
    cursor(ARROW);
  }
  }
  
  //CLICK SOFA
  if (sofa)
  {
    //SOFÁ > BANHEIRO
    if((contador_sofa < 22) && (mouseX < width/6) && (mouseY < height / 4))
    {
      cursor(HAND);
      fill(255);
      stroke(0);
      triangle(45,45,60,70,70,55);
    }
    //SOFÁ > ESCULTURA
    else if ((contador_sofa < 22) && (mouseX > 3*width/4) && (mouseY > height/2) && (mouseY < 7*height/8))
    {
      cursor(HAND);
      fill(255);
      stroke(0);
      triangle(870,350,870,380,900,365);
    }
    
    //SOFÁ > GRAVURA
    else if ((contador_sofa < 22) && (mouseX > width/4) && (mouseX < width/3) && (mouseY > height/4) && (mouseY < 3*height/4))
    {
      cursor(HAND);
      fill(255);
      triangle(250,170,230,150,270,150);
    }
    // SOFÁ > PINTURA
    else if ((contador_sofa < 22) && (mouseX > width/2) && (mouseY < width/8))
    {
      cursor(HAND);
      fill(255);
      stroke(0);
      triangle(600,50,570,65,585,80);
    }
    else if ((contador_sofa >= 22) && (mouseX < 2*width/3) && (mouseX> width/3) && (mouseY > height/3) && (mouseY < 2*height/3))
    {
      cursor (HAND);
    }
    else
  {
    cursor(ARROW);
  }
  }
  
  }
}