function saludo() {
    const idioma = prompt("seleciona tu idioma principal (Español, Ingles, Frances, Aleman, Japones) :").toLowerCase();
    
    let saludo;

    switch (idioma) {
        case "español":
            console.log("Hola, bienvenido a nuestra web");
        break;
        case "ingles":
            console.log("Hello, welcome to our website")
        break
        case "Frances":
            console.log("Bonjour, bienvenue sur notre site web");
        break;
        case "aleman":
            console.log("Hallo, willkommen auf unserer Webseite");
        break;
        case "japones":
            console.log("こんにちは、私たちのウェブサイトへようこそ");
        break;
        default:
            console.log("Opcion ingresada no es valida");
            console.log("The entered option is not valid");
            console.log("L’option saisie n’est pas valide");
            console.log("Die eingegebene Option ist ungültig");
            console.log("入力されたオプションは無効です");
    }
}

saludo()