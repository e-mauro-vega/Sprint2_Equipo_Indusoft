var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["id_venta"] = document.getElementById("id_venta").value;
    formData["fecha"] = document.getElementById("fecha").value;
    formData["vendedor"] = document.getElementById("vendedor").value;
    formData["cliente"] = document.getElementById("cliente").value;
    formData["id_cliente"] = document.getElementById("id_cliente").value;
    formData["producto"] = document.getElementById("producto").value;
    formData["cantidad"] = document.getElementById("cantidad").value;
    formData["valor_unitario"] = document.getElementById("valor_unitario").value;
    formData["valor_total"] = document.getElementById("valor_total").value;

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("ventaslist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id_venta;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fecha;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.vendedor;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.cliente;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.id_cliente;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.producto;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.cantidad;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.valor_unitario;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.valor_total;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Borrar</a>`;
}

function resetForm() {
    document.getElementById("id_venta").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("vendedor").value = "";
    document.getElementById("cliente").value = "";
    document.getElementById("id_cliente").value ="";
    document.getElementById("producto").value ="";
    document.getElementById("cantidad").value ="";
    document.getElementById("valor_unitario").value ="";
    document.getElementById("valor_total").value ="";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id_venta").value = selectedRow.cells[0].innerHTML;
    document.getElementById("fecha").value = selectedRow.cells[1].innerHTML;
    document.getElementById("vendedor").value = selectedRow.cells[2].innerHTML;
    document.getElementById("cliente").value = selectedRow.cells[3].innerHTML;
    document.getElementById("id_cliente").value = selectedRow.cells[4].innerHTML;
    document.getElementById("producto").value = selectedRow.cells[5].innerHTML;
    document.getElementById("cantidad").value = selectedRow.cells[6].innerHTML;
    document.getElementById("valor_unitario").value = selectedRow.cells[7].innerHTML;
    document.getElementById("valor_total").value = selectedRow.cells[8].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.id_venta;
    selectedRow.cells[1].innerHTML = formData.fecha;
    selectedRow.cells[2].innerHTML = formData.vendedor;
    selectedRow.cells[3].innerHTML = formData.cliente;
    selectedRow.cells[4].innerHTML = formData.id_cliente;
    selectedRow.cells[5].innerHTML = formData.producto;
    selectedRow.cells[6].innerHTML = formData.cantidad;
    selectedRow.cells[7].innerHTML = formData.valor_unitario;
    selectedRow.cells[8].innerHTML = formData.valor_total;
}

function onDelete(td) {
    if (confirm('Estas seguro de borrar este registro ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("ventaslist").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("id_venta").value == "") {
        isValid = false;
        document.getElementById("id_ventaValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("id_ventaValidationError").classList.contains("hide"))
            document.getElementById("id_ventaValidationError").classList.add("hide");
    }
    return isValid;
}