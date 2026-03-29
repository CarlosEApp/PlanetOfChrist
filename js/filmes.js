

//Iniciando o Firebase
var firebaseConfigure = {
 apiKey: "AIzaSyD9fBnrtxMnCOB13_Q0eS8b5M6MpGnGLYU",
  authDomain: "planet-of-christ.firebaseapp.com",
  databaseURL: "https://planet-of-christ-default-rtdb.firebaseio.com",
  projectId: "planet-of-christ",
  storageBucket: "planet-of-christ.firebasestorage.app",
  messagingSenderId: "713115175508",
  appId: "1:713115175508:web:f02956625a2d7c6e6f3bc1",
  measurementId: "G-PML0R4VJD1"
};
firebase.initializeApp(firebaseConfigure);
//////////////////////////////////////////////////////////

//Lista Devocional
function filmesSites(){
var listTab = document.getElementById('listFilmes');
listTab.innerHTML = '';
var db = firebase.firestore();
var produtosRef = db.collection(`Filmes`);

produtosRef.get().then((querySnapshot) => {
  querySnapshot.forEach(docSnap => {
    var doc = docSnap.data();

    // Criar elementos
    var flexgrup = document.createElement('div');
    var div1= document.createElement('div');
    var div2= document.createElement('div');
    var div3= document.createElement('div');
    var img = document.createElement('img');
    var titulo = document.createElement('h5');
    var subtitulo = document.createElement('p');
     var label = document.createElement('label');
   // var botaoEditar = document.createElement('button');
   // var botaoExcluir = document.createElement('button');
   // var botaoVer = document.createElement('button');
    flexgrup.id='divL'
    div1.id='div'
    div2.id='div2'
    div3.id='div3'
    titulo.id='titulo'
    subtitulo.id='subtitulo'
    label.id='label'
    img.id='img'
        
    //botaoEditar.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
   // botaoExcluir.innerHTML = '<i class="fa-solid fa-trash"></i>';
   // botaoVer.innerHTML = '<i class="fa-solid fa-eye"></i>';
    img.src=doc.Imagem
    titulo.textContent=`${doc.Titulo}`
    subtitulo.textContent=`${doc.OBS}`
    label.textContent=`${doc.Texto}`

    // Montagem
    div1.appendChild(img)
    div2.appendChild(titulo);
    div2.appendChild(subtitulo);
    div2.appendChild(label)
    //div3.appendChild(botaoEditar);
    //div3.appendChild(botaoExcluir);
   // div3.appendChild(botaoVer);
    flexgrup.appendChild(div1);
    flexgrup.appendChild(div2);
    flexgrup.appendChild(div3);
    listTab.appendChild(flexgrup);
    flexgrup.addEventListener('click', function(){
  var urlDev=doc.Links;
  var result= urlDev.trim();
      window.open(`${result}`,'_blank')
    })
  });
});

}
filmesSites()


//Pesquisa
function pesquisarProduto() {
   document.getElementById('respPesquisasadiv').style.display='none'
  var list = document.getElementById('listpesqRes');
  list.innerHTML = ''
  var termo = document.getElementById("pesquise").value.toLowerCase();
  if(termo){
  setTimeout(function(){
 Swal.fire({ 
title: ``,
text: ``, 
html:`
<div>
<b id="bbdesc"> Não encontramos nada relacionado as informações digitadas</b><br> digite as primeiras letras  do que deseja encontrar e procure em uma lista a opção desejada<b id="b"></b> .
      </div> 
`,
imageUrl: ``,
background: '#000303',
color: '#a7a7a7', // cor do texto });
showCloseButton: true,   // habilita o "X"
allowOutsideClick: false,
showConfirmButton: false,
customClass: {
popup: 'my-admin' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';   
}
})
 setTimeout(function(){
Swal.close()
    },25000)
 },1000)
 
  var db= firebase.firestore()
  db.collection("Lista Geral").get().then(snapshot => {
 
    snapshot.forEach(docSnap => {
      var data = docSnap.data();
      if (data.Titulo && data.Titulo.toLowerCase().includes(termo) || data.SubTitulo && data.SubTitulo.toLowerCase().includes(termo)  ||data.OBS && data.OBS.toLowerCase().includes(termo) )  {
        var titulo = data.Titulo ? data.Titulo.toLowerCase() : ""; var sub = data.SubTitulo ? data.SubTitulo.toLowerCase() : ""; var obs = data.OBS ? data.OBS.toLowerCase() : "";
          
          if (titulo.includes(termo) || termo.includes(titulo)||obs.includes(termo) || termo.includes(obs)||sub.includes(termo) || termo.includes(sub)) {
        
       //alert(data.Titulo)
  
        var divbase=document.createElement('div');
        var div=document.createElement('div');
        var div2=document.createElement('div');
        var imagem=document.createElement('img');
        var label=document.createElement('label');
        var label2=document.createElement('label');
        var label3=document.createElement('label');
        
        divbase.id='divbase';
        div.id='divum';
        div2.id='divdois';
        imagem.id='imagemps';
        label.id='lbl1';
        label2.id='lbl2';
        label3.id='lbl3';

         imagem.src=data.Imagem;
         label.textContent= data.Titulo;
         label2.textContent= data.SubTitulo

         div.appendChild(imagem);
         div2.appendChild(label);
         div2.appendChild(label2);
         divbase.appendChild(div);
         divbase.appendChild(div2);
         list.appendChild(divbase)
          document.getElementById('respPesquisasadiv').style.display='block'
         setTimeout(function(){
         Swal.close()
        },1200)
           
        divbase.addEventListener('click',function(){
          //alert(data.Titulo)
          if(data.Origem==='site'){
          window.open(`${data.Links}`,'_blank')
          } else if(data.Origem==='YouTube'){
             window.open(`../html/resutP.html`,'_blank')
          }else{
           
          }
        });
       }
      
      } else{
      }
    });
  });
}else{
  Swal.fire('','Preencha o campo de pesquisa!','')
}
}
document.getElementById('lblfchardivPesq').addEventListener('click',function(){
fech()
})
function fech(){
   document.getElementById('respPesquisasadiv').style.display='none'
}