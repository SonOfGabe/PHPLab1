<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
</head>
<body>
    <div class="wrapper">
        <?php
        include "header.html";
        include "BaseAndTableList.html";
        ?>
        <div class="mains">
            <div class="mains__content">
                <select class="SelectToStart">
                    <option value="Создать базу данных">Создать базу данных</option>
                    <option value="Создать таблицу для БД">Создать таблицу для БД</option>
                    <option value="Добавить данные в таблицу">Добавить данные в таблицу</option>
                    <option value="Посмотреть данные из таблицы">Посмотреть данные из таблицы</option>
                    <option value="Удалить данные из таблицы">Удалить данные из таблицы</option>
                    <option value="Записать данные из таблицы в файл">Записать данные из таблицы в файл</option>
                    <option value="Удалить таблицу">Удалить таблицу</option>
                    <option value="Удалить БД">Удалить БД</option>
                </select>
                <button class="clicktostart">Выбрать</button>

                <div class="justhide">
                    <button class="createDB">Создать базу данных</button>
                    <button class="createTable">Создать таблицу для БД</button>
                    <button class="addData">Добавить данные в таблицу</button>
                    <button class="deleteandshowData">Посмотреть данные из таблицы и удалить</button>
                </div>
            </div>


        </div>
        <div class="popup" id="popup">
            <a class="popup__area"></a>
            <div class="popup__body">
                <div  class="popup__content">
                    <form action="#" id="createDataBase">
                        <div class="popup__title">Введите назавание БД</div>
                        <input name="namedb" type="text" class="nameDB">
                        <button type="submit" class="created" >Отправить</button>
                    </form>
                    <a  class="popup__close">X</a>
                </div>
            </div>
        </div>
        <div class="popup" id="popup">
            <a class="popup__area"></a>
            <div class="popup__body">
                <div  class="popup__content">
                    <form action="#" id="createTable">
                        <div class="popup__title">Добавитье таблицу в БД</div>
                        <div class="SelectBD">
                            <label >Выберите БД куда хотите добавить элемент:
                                <select class="SelectBD__select" name="SelectBD">

                                </select></label>

                        </div>
                        <div class="InputNameTable">
                            <label>Введите название таблицы
                                <input type="text" class="InputNameTable__input" name="nameTable">
                            </label>
                        </div>
                        <div class="InputNameElemTable">
                            <table class="table">
                                <tr>
                                    <td>
                                        <label>Введите поле таблицы(<span class="red">Поле id создаётся автоматичски!!!!!</span>)
                                        </label>
                                    </td>
                                    <td>
                                        <label>Выберите тип данных

                                        </label>
                                    </td>
                                    <td>
                                        <label>Введите длинну поля
                                        </label>
                                    </td>
                                    <td>
                                        <label>NULL or NOTNULL
                                        </label>
                                    </td>
                                </tr>
                                <tr class="rownewelem">
                                    <td>
                                        <input type="text" name="inputelem1" class="InputNameElemTable__input">
                                    </td>
                                    <td>
                                        <select name="selecttypedata1" >
                                            <option value="INT">INT</option>
                                            <option value="VARCHAR">VARCHAR</option>
                                            <option value="TEXT">TEXT</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input type="text" name="inputlen1" class="InputNameElemTable__inputlen">
                                    </td>
                                    <td>
                                        <input type="text" name="inputNULL1" class="InputNameElemTable__inputNULL">
                                    </td>
                                </tr>
                            </table>







                        </div>
                        <button class="AddNewRow">Добавить ещё поле</button>
                        <button type="submit" class="createTablebut" >Отправить</button>
                        <button class="deleterow">Удалить один элемент</button>
                    </form>
                    <a  class="popup__close">X</a>
                </div>
            </div>
        </div>
        <div class="popup" id="popup">
            <a class="popup__area"></a>
            <div class="popup__body">
                <div  class="popup__content">
                    <form action="#" id="addDataToTable">
                        <div class="popup__title">Добавитье таблицу в БД</div>
                        <div class="SelectBD">
                            <label >Выберите БД куда хотите добавить элемент:
                                <select class="SelectBD__select SelectBD__select1" name="SelectBD">

                                </select></label>
                        </div>
                        <div class="SelectTable">
                            <label >Выберите таблицу куда хотите добавить элемент:
                                <select class="SelectTable__select" name="SelectTable">

                                </select></label>

                        </div>
                        <div class="inittable">
                            <table>
                                <tbody  class="inittable__table">

                                </tbody>
                            </table>
                        </div>
                        <button type="submit" class="buttonaddtotable" >Добавить в таблицу</button>
                    </form>
                    <a  class="popup__close">X</a>
                </div>
            </div>
        </div>
        <div class="popup" id="popup">
            <a class="popup__area"></a>
            <div class="popup__body">
                <div  class="popup__content">
                    <form action="#" id="ShowData">
                        <div class="popup__title">Показать и удалить данные из таблицы</div>
                        <div class="SelectBD">
                            <label >Выберите БД:
                                <select class="SelectBD__select SelectBD__select2" name="SelectBD">

                                </select></label>
                        </div>
                        <div class="SelectTable">
                            <label >Выберите таблицу:
                                <select class="SelectTable__select1" name="SelectTable">

                                </select></label>

                        </div>
                        <div class="inittable">
                            <table>
                                <tbody  class="inittable__table1">

                                </tbody>
                            </table>
                        </div>
                        <button type="submit" class="buttonShowData" >Показать данные</button>
                        <div>
                            <button type="submit" class="buttonWriteToFile" >Записать данные в файл</button>

                        </div>
                        <div>
                            <label >Введите id элемента который хотите удалить
                                <input type="text" name="idToDeleteData">
                                </label>
                            <button type="submit" class="buttonDeleteDataId" >Удалить</button>
                            </button>
                        </div>
                        <button type="submit" class="buttonDeleteAllDataFromTable" >Удалить все данные</button>

                    </form>
                    <a  class="popup__close">X</a>
                </div>
            </div>
        </div>
        <div class="popup" id="popup">
            <a class="popup__area"></a>
            <div class="popup__body">
                <div  class="popup__content">
                    <form action="#" id="deleteTable">
                        <div class="popup__title">Удалить таблицу</div>
                        <div class="SelectBD">
                            <label >Выберите БД:
                                <select class="SelectBD__select SelectBD__selecttoDeleteTable" name="SelectBD">

                                </select></label>
                        </div>
                        <div class="SelectTable">
                            <label >Выберите таблицу:
                                <select class="SelectTable__selecttoDelete" name="SelectTable">

                                </select></label>

                        </div>
                        <div>
                            <button type="submit" class="clickToDeleteTable">Удалить таблицу</button>
                        </div>
                    </form>
                    <a  class="popup__close">X</a>
                </div>
            </div>
        </div>
        <div class="popup" id="popup">
            <a class="popup__area"></a>
            <div class="popup__body">
                <div  class="popup__content">
                    <form action="#" id="deleteDB1">
                        <div class="popup__title">Удалить БД</div>
                        <div class="SelectBD">
                            <label >Выберите БД:
                                <select class="SelectBD__select SelectBD__selecttoDeleteDB" name="SelectBD">

                                </select></label>
                        </div>

                        <div>
                            <button type="submit" class="clickToDeleteDB">Удалить БД</button>
                        </div>
                    </form>
                        <a  class="popup__close">X</a>
                </div>
            </div>
        </div>

        <script src="js/popup.js"></script>
        <script src="js/main.js"></script>
        <script src="js/createTable.js"></script>
        <script src="js/addDataToTable.js"></script>
        <script src="js/showData.js"></script>
        <script src="js/deleteTable4.js"></script>
        <script src="js/deleteDB1.js"></script>
    </div>
</body>
</html>
