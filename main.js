var pageCounter = 1;
var moduleContainer = document.getElementById('module-info');
var btn = document.getElementById("btn"); //declares btn as variable
var butn = document.getElementById("butn"); //declares butn as variable

btn.addEventListener("click", function(){ //buttons function
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://raw.githubusercontent.com/as2295/CW2cis2169/master/module-'+ pageCounter +'.json');
  ourRequest.onload = function(){
    //console.log(ourRequest.responseText);
    var ourData = JSON.parse(ourRequest.responseText); //retriving date from the json file
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
//how the data from the json is added
  for(i = 0; i < data.length; i++){
    htmlString += "<p>" + data[i].Name + " is  " + data[i].Course + " it has Assessments "; //".</p>";
    for(ii = 0; ii < data[i].Module.Assessment.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Assessment[ii];
      } else {
        htmlString += " and " + data[i].Module.Assessment[ii];
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

    htmlString += ' , ID ';
    for(ii = 0; ii < data[i].Module.ID.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.ID[ii];
      } else {
        htmlString += " - " + data[i].Module.ID[ii];
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
    htmlString += ' and Academic leader ';
    for(ii = 0; ii < data[i].Module.Academic.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Academic[ii];
      } else {
        htmlString += " and " + data[i].Module.Academic[ii];
      }
    }
    
    htmlString += '.</p>';
  }
  moduleContainer.insertAdjacentHTML('beforeend', htmlString);

}
   
    
//allows the degrees to be shown or hidden
function toggleText(){
  var x = document.getElementById("Myid");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//allows user to input and add information to the html page
function display(){


	var post = document.getElementById("userInput").value;

document.getElementById("printhere").innerHTML = post;

}
function show(){


	var post = document.getElementById("userImput").value;

document.getElementById("printthere").innerHTML = post;

}
function see(){


	var post = document.getElementById("userput").value;

document.getElementById("printere").innerHTML = post;

}
function appear(){


	var post = document.getElementById("userut").value;

document.getElementById("printit").innerHTML = post;

}

