// JavaScript Document
function validateForm() {
    //collect form data in JavaScript variables
    var pw1 = document.getElementById("password").value;
    var pw2 = document.getElementById("re_pwd").value;
    var name1 = document.getElementById("firstName").value;
	var name2 = document.getElementById("e-mail").value;
		
        
//	
    //check empty first name field
    if(name1 == "") {
      document.getElementById("error-message").innerHTML = "**vui lòng nhập username";
      return false;
    }
    
    //character data validation
    if(!isNaN(name1)){
      document.getElementById("error-message").innerHTML = "**Only characters are allowed";
      return false;
    }

   //character data validation
//    if(!isNaN(name2)){
//      document.getElementById("error-message").innerHTML = "**Only characters are allowed";
//      return false;
//    } 
	var atposition = name2.indexOf("@");
    var dotposition = name2.lastIndexOf(".");
        if (atposition < 1 || dotposition < (atposition + 2)|| (dotposition + 2) >= name2.length) {
           document.getElementById("error-message").innerHTML = "**Nhập đúng định dạng email";
            return false;
        }
  
    //check empty password field
    if(pw1 == "") {
      document.getElementById("error-message").innerHTML = "**vui lòng nhập password";
      return false;
    }
	 if(pw1.length < 6) {
      document.getElementById("error-message").innerHTML = "**Password có ít nhất 6 kí tự";
      return false;
    }
  
    //check empty confirm password field
    if(pw2 == "") {
      document.getElementById("error-message").innerHTML = "**vui lòng nhập lại password";
      return false;
    } 
   
    //minimum password length validation
if(pw2.length < 6) {
      document.getElementById("error-message").innerHTML = "**Password có ít nhất 6 kí tự";
      return false;
    }

  
    if(pw1 != pw2) {
      document.getElementById("error-message").innerHTML = "**Passwords không trùng ";
      return false;
    } else {
      alert ("chúc mừng "+name1+" đã đăng ký thành công");
      document.write('<h1> Hello '+ name1+ '</h1>');
    }
 }

    