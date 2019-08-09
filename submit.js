
function getOrder() {
  div = document.getElementById('order');
  console.log(div);
  var queryString = document.location.toString();
  var qString = queryString.substring(queryString.indexOf('?') + 1);
  var queriesArray = qString.split('&');
  for (var i=0; i<queriesArray.length; i++) {
    var subQ = queriesArray[i].split('=');
    if (subQ[0] == 'ing'){
      var ing = subQ[1];
    } else if (subQ[0] == 'alc') {
      var alc = subQ[1];
    } else if (subQ[0] == 'b') {
      var b = subQ[1];
    }
  }
  

  b = ((b==0) ? '' : b);
  div.innerHTML += '<h3 style=\'margin-top: 20px; margin-bottom: 0px;\'>Base:</h3> ' + b + '<h3 style=\'margin-top: 20px; margin-bottom: 0px;\'>Ingredients: </h3>' + ing;
  if (alc != '') {
      div.innerHTML += '<br><br>Alcohol: ' + alc + '%';
  }
  if(b == '' || ing == '') {
    window.location.href = 'index.html?e';
  }
}

string_to_array = function (str) {
  console.log(str);
  return str.split(",");
};