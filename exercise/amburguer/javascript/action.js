const $select = document.getElementById("select-buttom");
const $menu = document.getElementById("panel-exit")
const $link = document.getElementsByClassName("url");
function menu(){
    $select.classList.toggle("is-active");
}

function salidaMenu(){
    $menu.classList.toggle("is-active");
}

$select.addEventListener("click", () => {
    menu();
    salidaMenu();
});

document.addEventListener("click", (e) => {
    if(e.target.matches(".url")){
        menu();
        salidaMenu();
    }
})