var inputBox = document.getElementById('inputBox');


function operator(input){
    inputBox.value+= input; 
}


function calculate(){
    inputBox.value = eval(inputBox.value);
}


function clearInput(){
    inputBox.value = "";
}