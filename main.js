var pageCounter = 1;
var moduleContainer = document.getElementById('module-info');
var btn = document.getElementById("btn");
var butn = document.getElementById("butn");

btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://raw.githubusercontent.com/as2295/CW2cis2169/master/module-'+ pageCounter +'.json');
  ourRequest.onload = function(){
    //console.log(ourRequest.responseText);
    var ourData = JSON.parse(ourRequest.responseText);
    //console.log(ourData[0]);
    renderHTML(ourData);
  };
  ourRequest.send();
pageCounter++;
if (pageCounter > 3){
//btn.classList.add("hide-me");
  btn.disabled = true;
}
});

function renderHTML(data){
  var htmlString = "";

  for(i = 0; i < data.length; i++){
    htmlString += "<p>" + data[i].Name + " is  " + data[i].Course + " it has assements "; //".</p>";
    for(ii = 0; ii < data[i].Module.Assignment.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Assignment[ii];
      } else {
        htmlString += " and " + data[i].Module.Assignment[ii];
      }
    }
    htmlString += ' , Learning Outcome ';
    for(ii = 0; ii < data[i].Module.Learning_outcomes.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Learning_outcomes[ii];
      } else {
        htmlString += " and " + data[i].Module.Learning_outcomes[ii];
      }
    }

    htmlString += ' , Volume ';
    for(ii = 0; ii < data[i].Module.Volume.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Volume[ii];
      } else {
        htmlString += " - " + data[i].Module.Volume[ii];
      }
    }

    htmlString += ' , weights ';
    for(ii = 0; ii < data[i].Module.weights.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.weights[ii];
      } else {
        htmlString += " - " + data[i].Module.weights[ii];
      }
    }
    htmlString += ' , Credits ';
    for(ii = 0; ii < data[i].Module.Credits.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Credits[ii];
      } else {
        htmlString += " and " + data[i].Module.Credits[ii];
      }
    }
    htmlString += ' , Hours ';
    for(ii = 0; ii < data[i].Module.Hours.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Hours[ii];
      } else {
        htmlString += " and " + data[i].Module.Hours[ii];
      }
    }
    htmlString += ' and modules ';
    for(ii = 0; ii < data[i].Module.modules.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.modules[ii];
      } else {
        htmlString += " and " + data[i].Module.modules[ii];
      }
    }
    
    htmlString += '.</p>';
  }
  moduleContainer.insertAdjacentHTML('beforeend', htmlString);

}


document.getElementById("butn").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("butn").innerHTML = "1098, Javascript, 3 hours, pass-good-verygood,40.", "1098, Javascript, 3 hours, pass-good-verygood,40."
  ;
}