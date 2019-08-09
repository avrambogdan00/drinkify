//index.html

window.addEventListener('load', function(event) {
  carousel = (function(){
    var box = document.querySelector('.car');
    var next = box.querySelector('.next');
    var prev = box.querySelector('.prev');
    var items = box.querySelectorAll('.content li');
    var counter = 0;
    var amount = items.length;
    var current = items[0];
    box.classList.add('active');
    function navigate(direction) {
      current.classList.remove('current');
      counter = counter + direction;
      if (direction === -1 && counter < 0) {
        counter = amount - 1;
      }
      if (direction === 1 && !items[counter]) {
        counter = 0;
      }
      current = items[counter];
      current.classList.add('current');
      console.log(counter);
    }
    next.addEventListener('click', function(ev) {
      navigate(1);
    });
    prev.addEventListener('click', function(ev) {
      navigate(-1);
    });
    navigate(0);
  })();


  checkforerorrs();
});



function alc() {
  if (document.cookie == '') {
    d = new Date();
    document.cookie = 'over18=;expires=' + d.getTime() + 2592000000;
  }
  var cbox = document.getElementById('alcohol');
  var inp = document.getElementById('alc-range');
  var btn = document.getElementsByClassName('btn');
  var v = document.getElementById('slider-value');
  //console.log(cbox + '  ' + inp + '  ' + btn + '  ' + v);
  if (cbox.checked == true) {
    console.log('checked');
    if(document.cookie == 'over18=' || document.cookie == 'over18=false') {
      var r = confirm("Press OK if you are 18+");
      if(r == true) {
        inp.style.display = 'inline';
        btn[0].style.display = 'inline';
        v.style.display = 'inline';
        document.cookie = 'over18=true';
      } else {
        cbox.checked = false;
      }
    } else if (document.cookie == 'over18=true') {
      inp.style.display = 'inline';
      btn[0].style.display = 'inline';
      v.style.display = 'inline';
    }
  } else{
    inp.style.display = 'none';
    btn[0].style.display = 'none';
    v.style.display = 'none';
  }
}

function checkforerorrs(){
  var queryString = decodeURIComponent(window.location.search);
  queryString = queryString.substring(1);
  if(queryString == 'e') {
    document.getElementById('err').style.display = 'block';
  }
}

var posIndex = [];
function updateHI() {
  var car = document.querySelector(".car");
  if(posIndex.length == 0) {
    car.style.top = "24.9%";
    posIndex.push(1);
  } else if(posIndex.length == 1) {
    car.style.top = "40.9%";
    posIndex.push(1);
  } else if(posIndex.length == 2) {
    car.style.top = "56.7%";
    posIndex.push(1);
  }
  var current = document.querySelector("li.current");
  var img = current.innerHTML;
  var hi = document.querySelector('input[name=ing]');
  img = img.split("/").pop();
  img = img.substring(0, img.indexOf('.'));
  hi.value = hi.value + img + "-";
  console.log(img + " : " + hi.value);
}

function delIngLastChar() {
  var ing = document.querySelector('input[name=ing]');
  ing.value = ing.value.slice(0, -1);
}

