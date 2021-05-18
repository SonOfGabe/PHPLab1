
document.addEventListener('DOMContentLoaded',function (){
    const form = document.getElementById('createDataBase');
    const popup = document.getElementsByClassName('popup')[0];
    form.addEventListener('submit',formSend);

    const list = document.querySelector('.baseList__ul');
    const Select = document.getElementsByClassName('SelectBD__select');
    const ButStart = document.querySelector('.clicktostart');
    ButStart.addEventListener('click', clickfunc);
    getList();
    getBDList();
    function clickfunc(){
        getBDList();
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
    async function getBDList(){
        let resp =  await fetch('SelectBDList.php');
        if (resp.ok) {
            let res = await resp.json();
            for(let i=0; i<Select.length; i++){
                Select[i].innerHTML = res.message;
            }
        }else{
            alert("Ошибка HTTP: " + resp.status);
        }

    }



    async function formSend(e){
        e.preventDefault();




        let formData = new FormData(form);
        let response = await fetch('createdb.php',{
            method: 'POST',
            body: formData
        });
        if(response.ok){
            let result = await response.json();
            alert(result.message);
            form.reset();
            popup.classList.remove('nohide');
            getList();
            getBDList();


        }else{
            alert("error");
        }

    }
});


