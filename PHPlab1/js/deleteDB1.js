document.addEventListener('DOMContentLoaded',function () {
    const form = document.getElementById('deleteDB1');
    const deleteDB = document.querySelector('.clickToDeleteDB');
    const list = document.querySelector('.baseList__ul');

    deleteDB.addEventListener('click', clickToDelete);


    function clickToDelete(e){
        e.preventDefault();
        DeleteDB();
    }
    async function DeleteDB(){
        console.log(form);
        let formData1 = new FormData(form);
        let response = await fetch('DeleteDB.php',{
            method: 'POST',
            body: formData1
        });
        if (response.ok) {
            let res = await response.json();
            getBDList();
            getList();
            alert(res.message);
        }else{
            alert("Ошибка HTTP: " + response.status);
        }
    }

    const Select = document.querySelector('.SelectBD__selecttoDeleteDB');
    async function getBDList(){
        let resp =  await fetch('SelectBDList.php');
        if (resp.ok) {
            let res = await resp.json();
            Select.innerHTML = res.message;
        }else{
            alert("Ошибка HTTP: " + resp.status);
        }

    }
    async function getList(){
        let resp =  await fetch('baseList.php');
        if (resp.ok) {
            let res = await resp.json();

            list.innerHTML = res.message;
        }else{
            alert("Ошибка HTTP: " + resp.status);
        }

    }


});