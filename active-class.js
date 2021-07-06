let menuToggle = document.querySelector('.toggle');
let navogation = document.querySelector('.navigation')
menuToggle.onclick = function ()
{
    menuToggle.classList.toggle('active')
    navogation.classList.toggle('active');
}



// добавить активный класс в выбранный элемент списка
let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++)
{
    list[i].onclick = function()
    {
        let j = 0;
        while(j < list.length){
            list[j++].className = 'List';
    }
    list[i].className = 'List active';
    }
}