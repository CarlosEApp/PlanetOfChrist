

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