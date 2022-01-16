window.addEventListener('DOMContentLoaded', function() {                //Назначаем обработчик событий на всю страницу. 

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),              // Обьявляем переменные и  добираемся до интересующих нас элементов из HTML структуры, 
        info = document.querySelector('.info-header'),                    // это сами Табы (info-header-tab), родительский блок для Табов (info-header) 
        tabContent = document.querySelectorAll('.info-tabcontent');        // и содержание Табов (info-tabcontent)

    function hideTabContent(a) {                                          // Прописываем функцию, которая будет скрывать все элементы tabContent
        for (let i = a; i < tabContent.length; i++) {                     // (show и hide это классы, которые прописаны в CSS, мы можем увидеть их в style.css)
            tabContent[i].classList.remove('show');                        // сначала удалям класс show   
            tabContent[i].classList.add('hide');                        // затем добавляем класс hide
        }
    }

    hideTabContent(1);                                             // Запускаем функцию, скрываются все Табы, кроме первого.

    function showTabContent(b) {                                   // Эта функция показывает наш  tabContent 
        if (tabContent[b].classList.contains('hide')) {             // запускаем цикл, который проверяет скрыт ли  tabContent
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {                    // назначаем обработчик событий на родителя tabContent 
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {       //проверяем действительно ли мы нажали на tabContent, а не на его родителя info
            for(let i = 0; i < tab.length; i++) {                           // и запускаем цикл, который будет сравнивать  target и номер tabContent                                                 if (target == tab[i]) {
                    hideTabContent(0);                                    //скрываем все Табы
                    showTabContent(i);                                   //показывает необходимый нам Таб           
                    break;
                }
            }
        }

    });
});
