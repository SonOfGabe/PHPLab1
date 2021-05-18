document.addEventListener('DOMContentLoaded',function (){
    const addnewRowBut =document.querySelector('.AddNewRow');
    const form = document.querySelector('#createTable');
    const popup = document.getElementsByClassName('popup')[1];
    const inputelem = document.querySelector('.InputNameTable');
    const list = document.querySelector('.baseList__ul');
    const deletebut = document.querySelector('.deleterow');
    form.addEventListener('submit',formSend);
    deletebut.addEventListener('click', deleteelem);

    let count = 1;


    getList();
    async function getList(){
        let resp =  await fetch('baseList.php');
        if (resp.ok) {
            let res = await resp.json();

            list.innerHTML = res.message;
        }else{
            alert("Ошибка HTTP: " + resp.status);
        }

    }


    async function formSend(e){
        e.preventDefault();



        //console.log(count);
        let formData = new FormData(form);
        formData.append('count', count);
        let response = await fetch('createTable.php',{
            method: 'POST',
            body: formData
        });
        if(response.ok){
            let result = await response.json();
            alert(result.message);
            form.reset();
            //popup.classList.remove('nohide');
            getList();
            const temp = document.getElementsByClassName('rownewelem');
            while (count > 1) {
                temp[count - 1].remove();
                count--;
            }


        }else{
            alert("error");
        }

    }




    addnewRowBut.addEventListener('click',AddNewRowFunc);






    function AddNewRowFunc(e){
        e.preventDefault();
        count++;
        const table = document.querySelector('.table');
        const newElem = document.createElement('tr');
        newElem.innerHTML = `
                                    <td>
                                        <input type="text" name="inputelem`+count+`" class="InputNameElemTable__input">
                                    </td>
                                    <td>
                                        <select name="selecttypedata`+count+`" >
                                            <option value="INT">INT</option>
                                            <option value="VARCHAR">VARCHAR</option>
                                            <option value="TEXT">TEXT</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input type="text" name="inputlen`+count+`" class="InputNameElemTable__inputlen">
                                    </td>
                                    <td>
                                        <input type="text" name="inputNULL`+count+`" class="InputNameElemTable__inputNULL">
                                    </td>
                                `;




        newElem.classList.add('rownewelem');
        //addnewRowBut.before(newElem);
        table.append(newElem);
        return count;

    }


    function deleteelem(e){
        e.preventDefault();
        const temp = document.getElementsByClassName('rownewelem');
        if(count > 1){
            temp[count-1].remove();
            count--;


            //console.log(temp);
            //console.log(count);
        } else{
            alert("Добавьте хотябы 1 поле!");
        }

    }




});