//index.html

var baseExist = false;
var ing = [0, 0, 0, 0];


function addImg(value, type, id) {
  var span = document.getElementsByTagName('span');
  var img = document.createElement("img");
  img.src = value;
  if(type == 0) {
    if (baseExist == false) {
      document.getElementById('b').appendChild(img);
      document.getElementsByName('b')[0].value = id;
    }
    baseExist = true;
  } else if (type == 1) {
    for(var i=0; i<ing.length; i++) {
      if(ing[i] == 0) {
        ing[i] = id;
        var src = document.getElementById('i'+(i+1));
        src.appendChild(img);

        var input = document.getElementsByName('i'+(i+1));
        input[0].value = id;
        console.log(id); 

        break;
      }
    }
  }
}


function alc() {
  var cbox = document.getElementById('alcohol');
  var inp = document.getElementById('alc-range');
  var btn = document.getElementsByClassName('btn');
  if (cbox.checked == true) {
    var r = confirm("Press OK if you are 18+");
    if(r == true) {
      inp.style.display = 'inline';
      btn[0].style.display = 'inline';
    } else {
      cbox.checked = false;
    }
  } else{
    inp.style.display = 'none';
    btn[0].style.display = 'none';
  }
}

function checkforerorrs(){
  var queryString = decodeURIComponent(window.location.search);
  queryString = queryString.substring(1);
  if(queryString == 'e') {
    document.getElementById('err').style.display = 'block';
  }
}