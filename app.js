const piedra = document.getElementById("r");
const papel = document.getElementById("p");
const tijeras = document.getElementById("s");
const usuarioPuntos = document.getElementById("usuario-puntos");
const PcPuntos = document.getElementById("pc-puntos");
const resultado = document.querySelector(".resultado-p");
let usuarioPunto = 0;
let PcPunto = 0;

const comp = () => {
    let Pc = ["r", "p", "s"];
    let random = Math.floor(Math.random() * 3);
    return Pc[random];
};
const convertirLetra = (letra) => {
    if (letra === "r") return "Piedra";
    if (letra === "p") return "Papel";
    return "Tijeras";
};
const letraChicaUsuario = "Usuario".fontsize(3).sub();
const letraChicaPc = "Maquina".fontsize(3).sub();
const ganar = (user, pc) => {
    usuarioPunto++;
    usuarioPuntos.innerText = usuarioPunto;
    PcPuntos.innerText = PcPunto;
    resultado.innerHTML =
        convertirLetra(user) +
        letraChicaUsuario +
        " vs " +
        convertirLetra(pc) +
        letraChicaPc +
        ".<br>" +
        " Tu Ganas!";
};
const perdiste = (user, pc) => {
    PcPunto++;
    usuarioPuntos.innerText = usuarioPunto;
    PcPuntos.innerText = PcPunto;
    resultado.innerHTML =
        convertirLetra(user) +
        letraChicaUsuario +
        " vs " +
        convertirLetra(pc) +
        letraChicaPc +
        ".<br>" +
        " Tu Pierdes!";
};
const empate = (user, pc) => {
    usuarioPuntos.innerText = usuarioPunto;
    PcPuntos.innerText = PcPunto;
    resultado.innerHTML =
        convertirLetra(user) +
        letraChicaUsuario +
        " vs " +
        convertirLetra(pc) +
        letraChicaPc +
        ".<br>" +
        " Empate!";
};
const game = (user) => {
    const pc = comp();
    switch (user + pc) {
        case "sp":
        case "pr":
        case "rs":
            ganar(user, pc);
            break;
        case "rp":
        case "ps":
        case "sr":
            perdiste(user, pc);
            break;
        case "rr":
        case "pp":
        case "ss":
            empate(user, pc);
            break;
    }
};

piedra.addEventListener("click", () => {
    game("r");
});
papel.addEventListener("click", () => {
    game("p");
});
tijeras.addEventListener("click", () => {
    game("s");
});
