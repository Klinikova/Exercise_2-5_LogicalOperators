var $ = function (id) {
	return document.getElementById(id);
}

var processInfo = function ()
{
    var firstName = $('firstname').value;
    var age = $('age').value;
    if(isNaN(age) || age == ''){
        $('message').innerHTML = "Please enter a number.";
    }
    else{
        age = parseInt(age);
    }
        
  if (age < 18)
      {
        $('message').innerHTML = firstName + ", you are still minor.";
      }
     
  if (age == 18)
    {
      $('message').innerHTML = firstName + ", you are now voting age!";
    }
    
		if (age > 18 && age <= 65)
    {
      $('message').innerHTML = firstName + ", you are in your prime working years.";
    }
  
  if (age >= 65)
    {
      $('message').innerHTML = firstName + ", it is time to retire.";
    }
   
  if (firstName == "Steve" || firstName == "Stephen")
    {
      $('message1').innerHTML = "You have the same name as the instrutor.";
    }

}

window.onload = function(){
  $("mybutton").onclick = processInfo;
}