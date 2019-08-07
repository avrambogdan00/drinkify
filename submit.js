var possibleIng = ['ice', 'lemon', 'coconut', 'banana'];

function getOrder(){
  var ingredients = '';
  div = document.getElementsByClassName('order');
  var queryString = decodeURIComponent(window.location.search);
  queryString = queryString.substring(1);
  var queries = queryString.split("");

  var i1 = queries[0].split('='); ingredients = ((i1[1]=='') ? ingredients : ingredients + possibleIng[i1[1]] + '<br>');
  var i2 = queries[1].split('='); ingredients = ((i2[1]=='') ? ingredients : ingredients + possibleIng[i2[1]] + '<br>');
  var i3 = queries[2].split('='); ingredients = ((i3[1]=='') ? ingredients : ingredients + possibleIng[i3[1]] + '<br>');
  var i4 = queries[3].split('='); ingredients = ((i4[1]=='') ? ingredients : ingredients + possibleIng[i4[1]] + '<br>');
  var b = queries[4].split('='); b = b[1]; b = ((b==0) ? '' : b);
  var alc = queries[5].split('='); alc = alc[1];
  if (alc != '') {
    div[0].innerHTML = 'Alcohol: ' + alc + '%';
  }

  b = ((b==0) ? '' : b);
  div[0].innerHTML += '<h3 style=\'margin-top: 20px; margin-bottom: 0px;\'>Base:</h3> ' + b + '<h3 style=\'margin-top: 20px; margin-bottom: 0px;\'>Ingredients: </h3>' + ingredients;

  if(b == '' || i1[1] == '') {
    window.location.href = 'index.html?e';
  }
}
