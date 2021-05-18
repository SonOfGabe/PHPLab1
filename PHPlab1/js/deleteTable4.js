document.addEventListener('DOMContentLoaded',function () {
    const SelectTable = document.querySelector('.SelectTable__selecttoDelete');

    const form = document.getElementById('deleteTable');
    const SelectBD = document.querySelector('.SelectBD__selecttoDeleteTable');
    const buttStart = document.querySelector('.clicktostart');
    buttStart.addEventListener('click', ListTable);
    const deleteTable = document.querySelector('.clickToDeleteTable');
    SelectBD.addEventListener('change', getValue);
    deleteTable.addEventListener('click', clickToDelete);



    function ListTable(){
        getTableList();

    }
    function getValue(e){
        e.preventDefault();
        getTableList();
        console.log(form);
    }

    async function getTableList(){
        console.log(form);
        let formData = new FormData(form);
        let response = await fetch('SelectTable.php',{
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            let res = await response.json();
            //console.log(res.message);
            SelectTable.innerHTML = res.message;
            //console.log(SelectTable.value);
        }else{
            alert("Ошибка HTTP: " + response.status);
        }

    }


    function clickToDelete(e){
        e.preventDefault();
        DeleteTable();
    }
    async function DeleteTable(){
        let formData1 = new FormData(form);
        let response = await fetch('DeleteTable.php',{
            method: 'POST',
            body: formData1
        });
        if (response.ok) {
            let res = await response.json();
            getTableList();
            alert(res.message);
        }else{
            alert("Ошибка HTTP: " + response.status);
        }

    }
});