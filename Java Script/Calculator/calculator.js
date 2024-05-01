function clearScreen()
{
    document.getElementById("textbox").value="";
}
function result()
{
    var num=document.getElementById("textbox").value;
    var ans= eval(num);
    document.getElementById("textbox").value=ans;
}
function AddValue(input){
    document.getElementById("textbox").value +=input;
}


