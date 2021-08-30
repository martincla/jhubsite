function dogAgeCalc() {
    var y = document.getElementById("DogAge").value;
    var z = 7;
    var x = Number(y) * Number(z);
    var result = parseFloat(x);
    if(!isNaN(result))
{ document.getElementById("DogHuman").innerHTML="In human years your dog is "+result;
}
}