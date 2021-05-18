const createBD = document.getElementsByClassName('createDB')[0];
const createTable = document.getElementsByClassName('createTable')[0];
const closePOPUP = document.getElementsByClassName('popup__close');
const closePOPUPAREA = document.getElementsByClassName('popup__area');
const addDataToTable = document.querySelector('.addData');
const showData = document.querySelector('.deleteandshowData');
const clicktostart = document.querySelector('.clicktostart');
const selectToStart = document.querySelector('.SelectToStart');
document.addEventListener('DOMContentLoaded',function (){
    const popup = document.getElementsByClassName('popup');
    createBD.addEventListener('click',clickToCreateBD);
    createTable.addEventListener('click',clickToCreateTable);
    addDataToTable.addEventListener('click', clickToAddData);
    showData.addEventListener('click', clickToShowData);
    clicktostart.addEventListener('click', SelectAct);
    function SelectAct(){
        //console.log(selectToStart.value);
        switch (selectToStart.value){
            case "Создать базу данных":
                clickToCreateBD();
                break;
            case "Создать таблицу для БД":
                clickToCreateTable();
                break;
            case "Добавить данные в таблицу":
                clickToAddData();
                break;
            case "Посмотреть данные из таблицы":
                clickToShowData();
                break;
            case "Удалить данные из таблицы":
                clickToShowData();
                break;
            case "Записать данные из таблицы в файл":
                clickToShowData();
                break;
            case "Удалить таблицу":
                deleteTable();
                break;
            case "Удалить БД":
                deleteDB();
                break;
        }
    }
    function clickToCreateBD(){
        popup[0].classList.add('nohide');
    }
    function clickToCreateTable(){
        popup[1].classList.add('nohide')
    }
    function clickToAddData(){
        popup[2].classList.add('nohide')
    }
    function clickToShowData(){
        popup[3].classList.add('nohide');
    }
    function deleteTable(){
        popup[4].classList.add('nohide');
    }
    function deleteDB(){
        popup[5].classList.add('nohide');
    }

    for (let i=0; i<closePOPUP.length; i++){
        closePOPUP[i].onclick = function () {
            popup[i].classList.remove('nohide');
        }
    }

    for (let i=0; i<closePOPUPAREA.length; i++){
        closePOPUPAREA[i].onclick = function () {
            popup[i].classList.remove('nohide');
        }
    }
});



