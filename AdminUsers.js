

 window.onload = function () {
    var localStorageKeyName = 'Nuevo1';
    var IndexFrom = -1;

    loadFromLocalStorage();

    document.querySelector("#btn-add").addEventListener('click', function () {
        loadFromLocalStorage();

        var email = document.getElementById("email"),
            pass = document.getElementById("pass"),
            roll = document.getElementById("roll");


            email.style

        // Validate
        if (email.value.length === 0 || pass.value.length === 0 || roll.value.length === 0) return;

        var user = {
            email: email.value,
            pass: pass.value,
            roll: roll.value
        };

        // Clean data
        email.value = '';
        pass.value = '';
        roll.value = '';

        // Append to my localStorage
        appendObjectToLocalStorage(user);
    })

    document.querySelector("#btn-update").addEventListener('click', function () {
        loadFromLocalStorage();
        editFromLocalStorage(IndexFrom);
    })

    function appendObjectToLocalStorage(obj) {
        var users = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName);

        if (dataInLocalStorage !== null) {
            users = JSON.parse(dataInLocalStorage);
        }

        users.push(obj);

        localStorage.setItem(localStorageKeyName, JSON.stringify(users));

        loadFromLocalStorage();
    }


    function Listedit(data){   
        document.getElementById("email").value = data.email;
        document.getElementById("pass").value = data.pass;
        document.getElementById("roll").value = data.roll;
    }


    function loadFromLocalStorage() {
        var users = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName),
            gridBody = document.querySelector("#grid tbody");

        if (dataInLocalStorage !== null) {
            users = JSON.parse(dataInLocalStorage);
        }

        // Draw TR from TBODY
        gridBody.innerHTML = '';

        users.forEach(function (x, i) {
            var tr = document.createElement("tr"),
                tdemail = document.createElement("td"),
                tdpass = document.createElement("td"),
                tdroll = document.createElement("td"),
                tdRemove = document.createElement("td"),
                btnRemove = document.createElement("button"),
                tdedit = document.createElement("td"),
                btnedit = document.createElement("button");

            tdemail.innerHTML = x.email;
            tdpass.innerHTML = x.pass;
            tdroll.innerHTML = x.roll;

            btnRemove.textContent = 'eliminar';
            btnRemove.className = 'btn btn-xs btn-danger';
            btnRemove.addEventListener('click', function(){             

                removeFromLocalStorage(i);
            });

            btnedit.textContent = 'editar';
            btnedit.className = 'btn btn-xs btn-primary';
            btnedit.addEventListener('click', function(){  
                tdemail.style.color = "orange";
                tdpass.style.color = "orange";
                tdroll.style.color = "orange";
                IndexFrom = i;
                Listedit(x);              
            });

            tdRemove.appendChild(btnRemove);
            tdedit.appendChild(btnedit);

            tr.appendChild(tdemail);
            tr.appendChild(tdpass);
            tr.appendChild(tdroll);
            tr.appendChild(tdRemove);
            tr.appendChild(tdedit);

            gridBody.appendChild(tr);
        });
    }

    function removeFromLocalStorage(index){
        var users = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName);

        users = JSON.parse(dataInLocalStorage);

        users.splice(index, 1);

        localStorage.setItem(localStorageKeyName, JSON.stringify(users));

        loadFromLocalStorage();
    }
    function editFromLocalStorage(index){  
        
        
        var email = document.getElementById("email"),
            pass = document.getElementById("pass"),
            roll = document.getElementById("roll");

        // Validate
        if (email.value.length === 0 || pass.value.length === 0 || roll.value.length === 0) return;

        var user = {
            email: email.value,
            pass: pass.value,
            roll: roll.value
        };

        // Clean data
        email.value = '';
        pass.value = '';
        roll.value = '';
        
        var users = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName);

        users = JSON.parse(dataInLocalStorage);

        users.splice(index, 1, user); // (posicion, numero de elementos a eliminar, lista de donde voy a eliminar )

        localStorage.setItem(localStorageKeyName, JSON.stringify(users));

        loadFromLocalStorage();
    }
    
    
    
    
}