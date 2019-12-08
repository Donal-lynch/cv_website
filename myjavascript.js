
/*Code copped from https://www.w3schools.com/howto/howto_js_topnav_responsive.asp*/
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav-list") {
    x.className += " responsive";
  } else {
    x.className = "nav-list";
  }
}



/*Executes when checkbox is clicked
Adds email input to contact page*/
function email_checker(inputText)
{
    document.getElementById("email_input").innerHTML="<input id='email_input' type='email' placeholder='enter email'>";
}
