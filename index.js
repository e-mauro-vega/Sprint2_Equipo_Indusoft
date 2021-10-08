

function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if ( username == "Juan" && password == "1234"){    
        localStorage.setItem('rollNuevo', "Admin");
        window.location = "home.html";       
    }
   
    var nameStorage = ""; 
    var passStorage = "";
    var rollStorage = ""; 
    var localStorageKeyName = 'Nuevo1';

    var users = [];
    var dataInLocalStorage = localStorage.getItem(localStorageKeyName);
    if (dataInLocalStorage !== null) {
        users = JSON.parse(dataInLocalStorage);
    } 
    
    users.forEach(function (x) {  
        nameStorage = x["email"]; 
        passStorage = x["pass"];
        rollStorage = x["roll"];
        if ( username == nameStorage && password == passStorage){ 
            localStorage.setItem('rollNuevo', rollStorage);
            //var k = localStorage.getItem('rollNuevo');
            //window.alert(k);
            window.location = "home.html"; // Redirecting to other page.            
        } 
       
    });
}