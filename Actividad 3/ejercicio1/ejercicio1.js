let frasesFrikis = [
    "A veces me siento como un bug en el código de la vida: ¡siempre apareciendo en el momento menos esperado!",

    "Soy como una conexión Wi-Fi: cuando más me necesitas, ¡es cuando más débil estoy!",

    "Mis emociones son como mi antivirus: siempre desactualizado y un poco desconfiado.",

    "Si el café es un commit, entonces yo soy un push a la realidad.",

    "La vida es un juego de Minecraft: si no estás minando, ¡te estás ahogando en lava!",

    "Ciberseguridad es como tener un paraguas en una tormenta: todos creen que están a salvo hasta que se moja el teclado.",

    "La procrastinación y yo somos como Ctrl+Z: siempre deshaciendo lo que no debería haber sido hecho.",

    "Soy más lento que una página de carga en Internet Explorer.",

    "Cuando la vida te da errores 404, ¡simplemente busca la solución en Google!",

    "Soy como un código abierto: ¡tengo muchas ideas, pero nadie entiende mis locuras!"
];

function fraseAleatoria(){
    let indice = Math.floor(Math.random() * frasesFrikis.length);
    return frasesFrikis[indice];
}