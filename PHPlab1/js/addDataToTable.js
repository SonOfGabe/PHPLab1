document.addEventListener('DOMContentLoaded',function () {
    const SelectTable = document.querySelector('.SelectTable__select');

    const form = document.getElementById('addDataToTable');
    let valBD = 0;
    const SelectBD = document.querySelector('.SelectBD__select1');
    const addDataToTable = document.querySelector('.addData');//not used
    const buttStart = document.querySelector('.clicktostart');
    SelectBD.addEventListener('change', getValue);
    addDataToTable.addEventListener('click', clickToAddData);//not used
    buttStart.addEventListener('click', clickToAddData);
    SelectTable.addEventListener('change', getValueColumn);



    function clickToAddData(){
        valBD = SelectBD.value;
        getTableList();
    }
    function getValue(e){
        e.preventDefault();
        valBD = SelectBD.value;
        getTableList();
    }
    function getValueColumn(e){
        e.preventDefault();
        //console.log(SelectTable.value);
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
        const table = document.querySelector('.inittable__table');

        //formData1.append('SelectTable1', SelectTable.value);
        let response1 = await fetch('SelectColumnFromTable.php',{
            method: 'POST',
            body: formData1
        });
        if (response1.ok) {
            let res1 = await response1.json();
            //console.log(res1);
            table.innerHTML = res1.message;
           addrow(table);
        }else{
            alert("Ошибка HTTP: " + response1.status);
        }

    }
    function addrow(table){
        const rowTable = document.querySelectorAll('.inittable__table tr td');
        //console.log(table);
        let str ="<tr>";
        for (let i=0; i<rowTable.length; i++){
            str += "<td><input class='insertdatacl' name='insertdata"+i+"' type='text'></td>";
        }
        str +="</tr>";
        table.innerHTML +=str;
    }


    const buttonAddToTable = document.querySelector('.buttonaddtotable');
    buttonAddToTable.addEventListener('click', pushtotable);
    function pushtotable(e) {
        e.preventDefault();
        const inprow = document.querySelectorAll('.insertdatacl');

        const tabledata = document.querySelectorAll('.tabledata');
        let arrNameTable = [];
        let arrTypeOfData = [];
        let nullornot = [];
        for (let i = 0; i < tabledata.length; i++) {
            arrNameTable[i] = tabledata[i].innerText.split('(')[0];
            nullornot[i] = tabledata[i].innerText.split('(')[2].split(')')[1].split(' ')[2];
                arrTypeOfData[i] = tabledata[i].innerText.split('(')[1];
        }
        let str = "";
        let val = "";
        let err = 0;
        let sep = ["'",",","," ];
        for (let i = 0; i < inprow.length; i++) {
            if (inprow[i].value == "") {
                if (nullornot[i] == "NO") {
                    inprow[i].classList.add('err');
                    err++;
                } else {
                    inprow[i].classList.remove('err');
                    if (arrTypeOfData[i] != 'int') {
                        inprow[i].value = "'null'";
                    } else {
                        inprow[i].value = "null";
                    }
                }
            } else {
                if (arrTypeOfData[i] == 'int') {
                    if (isNaN(inprow[i].value) == true) {
                        err++;
                        inprow[i].classList.add('err');
                    } else {
                        inprow[i].classList.remove('err');
                    }
                } else {
                    val = inprow[i].value;
                    str = "'" + inprow[i].value.replace(/[\s.,']/g, '') + "'";
                    //console.log(inprow[i].value.split(sep));
                    console.log(inprow[i].value.replace(/[\s.,']/g, ''));
                    inprow[i].value = str;
                }
            }
            /*if(inprow[i].value == "" && nullornot[i] == "NO"){
                inprow[i].classList.add('err');
                err++;
            } else{
                err--;
                inprow[i].classList.remove('err');
                if(arrTypeOfData[i]!='int'){
                    inprow[i].value = "'null'";
                }
                else{
                    inprow[i].value = "null";
                }
            }*/
            console.log(isNaN(inprow[i].value));


            /******TODO
             * Валидация данных
             * здесь
             * использовать isNaN
             * true если сторока иначе false
             */
            /*
            for( let i=0; i<inprow.length; i++){
                        if(inprow[i].value == ""){
                            if(arrTypeOfData[i]!='int'){
                                inprow[i].value = "'null'";
                            }
                            else{
                                inprow[i].value = "null";
                            }
                        }
                        else{
                            if(arrTypeOfData[i]!='int'){
                                str = "'"+inprow[i].value+"'";
                                inprow[i].value = str;
                            }

                        }
                    }
             */
        }
        //console.log(inprow);
        if (err == 0) {
            Push(arrNameTable);
        } else {
            for (let i = 0; i < inprow.length; i++) {
                if (inprow[i].value == "null" || inprow[i].value == "'null'") {
                    inprow[i].value = "";
                }
                else {
                    inprow[i].value = inprow[i].value.replace(/[\s.,']/g, '');
                }
            }
        }
    }
    async function Push(arrNameTable){
        const inprow = document.querySelectorAll('.insertdatacl');

        let formData2 = new FormData(form);
        formData2.append('count', inprow.length )
        for (let i=0; i<arrNameTable.length; i++){
            formData2.append('nametable'+i,arrNameTable[i]);
        }
        let response = await fetch('InsertData.php',{
            method: 'POST',
            body: formData2
        });
        if (response.ok) {
            let res = await response.json();
            alert(res.message);
        }else{
            alert("Ошибка HTTP: " + response.status);
        }
    }
});