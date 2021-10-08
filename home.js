

    
    var userRoll = localStorage.getItem('rollNuevo');
    //window.alert(userRoll);
    
    if ( userRoll == "Admin"){
        document.getElementById("entrada").innerHTML = "admin";
        document.getElementById("AdmProducts").style.display = "block";
        document.getElementById("StadeProducts").style.display = "block";
        document.getElementById("AdmSales").style.display = "block";
        document.getElementById("StadeSales").style.display = "block";
        document.getElementById("AdmUsers").style.display = "block";
    }
    else if ( userRoll == "Vendedor"){        
        document.getElementById("entrada").innerHTML = "seller";
        document.getElementById("AdmProducts").style.display = "none";
        document.getElementById("StadeProducts").style.display = "block";
        document.getElementById("AdmSales").style.display = "block";
        document.getElementById("StadeSales").style.display = "block";
        document.getElementById("AdmUsers").style.display = "none";
    } 
    else if ( userRoll == "Usuario"){
        document.getElementById("entrada").innerHTML = "Usuario";
        document.getElementById("AdmProducts").style.display = "none";
        document.getElementById("StadeProducts").style.display = "none";
        document.getElementById("AdmSales").style.display = "none";
        document.getElementById("StadeSales").style.display = "block";
        document.getElementById("AdmUsers").style.display = "none";
        document.getElementById("AreaProducts").style.display = "none";
        document.getElementById("AreaSales").style.display = "none";
    }         
    else {        
        document.getElementById("entrada").innerHTML = "guest";
        document.getElementById("AdmProducts").style.display = "none";
        document.getElementById("StadeProducts").style.display = "none";
        document.getElementById("AdmSales").style.display = "none";
        document.getElementById("StadeSales").style.display = "none";
        document.getElementById("AdmUsers").style.display = "none";
        document.getElementById("AreaProducts").style.display = "none";
        document.getElementById("AreaSales").style.display = "none";
    }



 
   
    
