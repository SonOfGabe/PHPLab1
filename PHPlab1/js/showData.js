document.addEventListener('DOMContentLoaded',function () {
    /*********************************Блок для показа данных*************************/
    const SelectTable = document.querySelector('.SelectTable__select1');

    const form = document.getElementById('ShowData');
    const SelectBD = document.querySelector('.SelectBD__select2');
    const addDataToTable = document.querySelector('.deleteandshowData');//не используется
    const buttStart = document.querySelector('.clicktostart');
    SelectBD.addEventListener('change', getValue);
    SelectTable.addEventListener('change', getTable)
    addDataToTable.addEventListener('click', clickToAddData);//не используется
    buttStart.addEventListener('click', clickToAddData);
    let tableHeader = "";


    function clickToAddData(){
        getTableList();
    }
    function getValue(e){
        e.preventDefault();
        getTableList();
    }
    function getTable(e){
        e.preventDefault();
        getColumnList();
    }

    async function getTableList(){
        let formData = new FormData(form);
        let response = await fetch('SelectTable.php',{
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            let res = await response.json();
            SelectTable.innerHTML = res.message;
            //console.log(SelectTable.value);
            getColumnList();

        }else{
            alert("Ошибка HTTP: " + response.status);
        }

    }

    async function getColumnList(){
        let formData1 = new FormData(form);
        const table = document.querySelector('.inittable__table1');

        //formData1.append('SelectTable1', SelectTable.value);
        let response1 = await fetch('SelectColumnFromTable2.php',{
            method: 'POST',
            body: formData1
        });
        if (response1.ok) {
            let res1 = await response1.json();
            //console.log(res1);
            table.innerHTML = res1.message;
            tableHeader = res1.message;
            //addrow(table);
        }else{
            alert("Ошибка HTTP: " + response1.status);
        }

    }


    const buttShow = document.querySelector('.buttonShowData');
    buttShow.addEventListener('click', ShowDATA);
    function ShowDATA(e){
        e.preventDefault();
        addrow();
    }


    async function addrow() {

        const table = document.querySelector('.inittable__table1');

        const rowTable = document.querySelectorAll('.inittable__table1 tr td');
        //console.log(table);
        const tabledata = document.querySelectorAll('.tabledata2');
        let arrNameTable = [];
        for (let i = 0; i < tabledata.length; i++) {
            arrNameTable[i] = tabledata[i].innerText.split('(')[0];
        }
        console.log(arrNameTable);


        let formData2 = new FormData(form);
        formData2.append('count', arrNameTable.length)

        for (let i = 0; i < arrNameTable.length; i++) {
            formData2.append('nametable1' + i, arrNameTable[i]);
        }

        let response1 = await fetch('ShowData.php', {
            method: 'POST',
            body: formData2
        });
        if (response1.ok) {
            let res1 = await response1.json();
            //console.log(res1);
            if (res1.message != null) {
                table.innerHTML = tableHeader;
                table.innerHTML += res1.message;
            } else {
                alert("В данной таблице ещё не добавлены данные");
            }
            //addrow(table);
        } else {
            alert("Ошибка HTTP: " + response1.status);
        }
    }
/**********************************************Конец блока***************************************************/
/**********************************************Блок для удаление данных из таблицы*******************/
    const deleteData = document.querySelector('.buttonDeleteAllDataFromTable');
    const deleteDataId = document.querySelector('.buttonDeleteDataId');
    deleteData.addEventListener('click', deleteAllData);
    deleteDataId.addEventListener('click', deleteDataFromID);
    function deleteAllData(e){
        e.preventDefault();
        DelADataFromTable();
    }
    function deleteDataFromID(e){
        e.preventDefault();
        DelDataFromTable();
    }
    async function DelADataFromTable(){
        let formData1 = new FormData(form);
        let response1 = await fetch('deleteAllDataFromTable.php',{
            method: 'POST',
            body: formData1
        });
        if (response1.ok) {
            let res1 = await response1.json();
            alert(res1.message);
            getColumnList();
        }else{
            alert("Ошибка HTTP: " + response1.status);
        }

    }
    async function DelDataFromTable(){
        let formData1 = new FormData(form);
        let response1 = await fetch('deleteDataIdFromTable.php',{
            method: 'POST',
            body: formData1
        });
        if (response1.ok) {
            let res1 = await response1.json();
            alert(res1.message);
            addrow();
        }else{
            alert("Ошибка HTTP: " + response1.status);
        }

    }
    /*****************************Конец блока*****************************/
    /***********************************Блок для записи в файл********************/


    const buttonToWriteFile = document.querySelector('.buttonWriteToFile');

    buttonToWriteFile.addEventListener('click', writeToFile)
    function  writeToFile(e){
        e.preventDefault();
        addrow1();
    }



    async function addrow1() {


        const tabledata1 = document.querySelectorAll('.tabledata2');
        let arrNameTable = [];
        for (let i = 0; i < tabledata1.length; i++) {
            arrNameTable[i] = tabledata1[i].innerText.split('(')[0];
        }
        //console.log(arrNameTable);


        let formData2 = new FormData(form);
        formData2.append('count', arrNameTable.length)

        for (let i = 0; i < arrNameTable.length; i++) {
            formData2.append('nametable1' + i, arrNameTable[i]);
        }

        let response1 = await fetch('WriteToFile.php', {
            method: 'POST',
            body: formData2
        });
        if (response1.ok) {
            let res1 = await response1.json();
            //console.log(res1);
            if (res1.message != null) {
                alert('Данные успешно записаны');
            } else {
                alert("В данной таблице ещё не добавлены данные");

            }
            //addrow(table);
        } else {
            alert("Ошибка HTTP: " + response1.status);
        }
    }

    /*****************************Конец блока*****************************/
});