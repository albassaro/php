window.onload = function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('dateBirthOutput').innerText = initPerson.dateBirth;


};

document.querySelector('#initPersonData').addEventListener('click', function () {
    return window.onload();
})

document.querySelector('#deletePersonData').addEventListener('click', function () {
    document.getElementById('firstNameOutput').innerText = "";
    document.getElementById('surnameOutput').innerText = "";
    document.getElementById('middleNameOutput').innerText = "";
    document.getElementById('genderOutput').innerText = "";
    document.getElementById('professionOutput').innerText = "";
    document.getElementById('dateBirthOutput').innerText = "";
})