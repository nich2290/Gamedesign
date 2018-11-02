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
    document.querySelector("#play").addEventListener("click", hideStart);
}




function hideStart() {
    console.log("hideStart");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#title_ui").classList.add("hide");
    startGame();
}

function startGame() {
    console.log("startgame");
    document.querySelector("#game_elements").classList.add("show");
    document.querySelector("#vindue1").classList.add("fade_in");
    document.querySelector("#vindue2").classList.add("fade_in");
    document.querySelector("#vindue3").classList.add("fade_in");
    document.querySelector("#vindue4").classList.add("fade_in");
    document.querySelector("#vindue5").classList.add("fade_in");
    document.querySelector("#vindue6").classList.add("fade_in");
    document.querySelector("#vindue7").classList.add("fade_in");
    document.querySelector("#vindue8").classList.add("fade_in");
    document.querySelector("#vindue9").classList.add("fade_in");
    document.querySelector("#vindue10").classList.add("fade_in");
    document.querySelector("#gameui").classList.add("show");
    document.querySelector("#gris1").addEventListener("click", clickGris);
    document.querySelector("#gris2").addEventListener("click", clickGris);
    document.querySelector("#gris3").addEventListener("click", clickGris);
    document.querySelector("#gris4").addEventListener("click", clickGris);
    document.querySelector("#gris5").addEventListener("click", clickGris);
    document.querySelector("#gris6").addEventListener("click", clickOnd);
    document.querySelector("#gris7").addEventListener("click", clickOnd);
    document.querySelector("#gris8").addEventListener("click", clickOnd);
    document.querySelector("#gris9").addEventListener("click", clickOnd);
    document.querySelector("#gris10").addEventListener("click", clickOnd);



}
let point = 5;

function clickGris() {
    console.log("click gris");

    // TODO: giv point!


    console.log(point);
    console.log("select points " + point + "show");

    let heart = "#point" + point;

    console.log(heart);
    document.querySelector(heart).classList.remove("hide");
    point--
    // også TODO: Få det til at virke så mønten starter forfra - det må vente

}

/*pointer-events: none; */
let energy = 2;

function clickOnd() {
    console.log("click ondgris");

    // TODO: mist et liv


    console.log(energy);
    console.log("select energy " + energy + "hide");

    let liv = "#liv" + energy;
    console.log(liv);
    document.querySelector(liv).classList.add("hide")
    energy--

    // også TODO: Få eksplosionen til at virke igen - det må også vente
}
