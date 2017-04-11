function ShowErrorMessage(div, errMsg) {
    div.className = 'error-input';
    var span = document.createElement('span');
    span.className = 'valid_msg';
    span.innerHTML = errMsg;
    div.appendChild(span);
}

function resetError(div) {
    div.className = '';
    if (div.lastChild.className === 'valid_msg') {
        div.removeChild(div.lastChild);
    }
}

function Validate(form) {
    var elems = form.elements;
    var validationMark = true;
    resetError(elems.Name.parentNode);
    if (!elems.Name.value) {
        ShowErrorMessage(elems.Name.parentNode, 'Field name cannot be blank.');
        validationMark = false;
    }
    resetError(elems.Surname.parentNode);
    if (!elems.Surname.value) {
        ShowErrorMessage(elems.Surname.parentNode, 'Field surname cannot be blank.');
        validationMark = false;
    }
    resetError(elems.Age.parentNode);
    if (elems.Age.value <= 0 || elems.Age.value > 100) {
        ShowErrorMessage(elems.Age.parentNode, 'Age must be between 1 and 100.');
        validationMark = false;
    }
    return validationMark;
}

var listPersons = [];

document.getElementById("btnJs").onclick = function () {
    if (Validate(document.getElementById("personRegistration"))) {
        var name = document.getElementById("Name").value;
        document.getElementById("Name").value = "";
        var surname = document.getElementById("Surname").value;
        document.getElementById("Surname").value = "";
        var age = document.getElementById("Age").value;
        document.getElementById("Age").value = "";
        var profession = document.getElementById("Profession").value;
        document.getElementById("Profession").value = "";
        var person = new Object();
        person.Name = name;
        person.Surname = surname;
        person.Age = age;
        person.Profession = profession;
        listPersons[listPersons.length] = person;
        var tr = document.createElement("tr");
        //create dynamically <tr> for table
        for (var i = (listPersons.length - 1) ; i < listPersons.length; i++) {
            var tdName = document.createElement("td");
            tr.appendChild(tdName);
            tdName.innerHTML = listPersons[i].Name;
            var tdSurname = document.createElement("td");
            tr.appendChild(tdSurname);
            tdSurname.innerHTML = listPersons[i].Surname;
            var tdAge = document.createElement("td");
            tr.appendChild(tdAge);
            tdAge.innerHTML = listPersons[i].Age;
            var tdProfession = document.createElement("td");
            tr.appendChild(tdProfession);
            tdProfession.innerHTML = listPersons[i].Profession;
        }
    }
    document.getElementById("body_table_js").appendChild(tr);
};
document.getElementById("btn_show_js").onclick = function () {
    var area_text = document.getElementById("area_text").value;
    document.getElementById("show_js").innerHTML = area_text;
};
