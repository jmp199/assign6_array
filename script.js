var word = prompt ("favorite random word");



var myArray = ["sanic", "enchiladas", "fisheroos", "dataman", word];

for(var i=0; i<myArray.length; i++){
  document.write(myArray[i]+" " )
  
}

document.write("<br><br>");

var myArray = [word, "dataman", "fisheroos", "enchiladas", "sanic"];

for(var i=0; i<myArray.length; i++){
  document.write(myArray[i]+" " )
  
}

document.write("<br><br>");

var myArray = ["sanic", "enchiladas", "fisheroos", "dataman", word];

for(var i=1; i<myArray.length; i+=2){
  document.write(myArray[i]+" " )
  
}

document.write("<br><br>");

var myArray = ["enchiladas", "fisheroos"];

for(var i=0; i<myArray.length; i++){
  document.write(myArray[i]+" " )
  
}

document.write("<br><br>");

var myArray = ["dataman", "enchiladas", "fisheroos", "sanic"];

for(var i=0; i<myArray.length; i++){
  document.write(myArray[i]+" " )
  
}