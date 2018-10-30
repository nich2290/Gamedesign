console.log("hej med dig");
window.addEventListener("load", sidenVises)
function sidenVises() {
    console.log("sidenVises");
    showStart();

}

function showStart() {
    console.log("showStart");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#start").classList.add("show");
    document.querySelector("#play").classList.add("pulse");

}
document.querySelector("#play").addEventListener("click", hideStart);


function hideStart() {
    console.log("hideStart");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#title_ui").classList.add("hide");
    startGame();
}

function startGame() {
    console.log("startgame");
    document.querySelector("#game_elements").classList.add("show");
    document.querySelector(".vindue").classList.add("vinduer");
}





