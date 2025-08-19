function saludo() {
    const idioma = prompt("seleciona tu idioma principal (Español, Ingles, Frances, Aleman, Japones) :").toLowerCase();
    const tipo = prompt("Quieres una bienvenida o despedida? (bienvenida/despedida)").toLowerCase();
    
    let saludo;

    switch (idioma) {
        case "español":
            saludo = tipo === "bienvenida" ? "Hola, bienvenido a nuestra web" : "Adiós, gracias por visitarnos";
        break;
        case "ingles":
            saludo = tipo === "bienvenida" ? "Hello, welcome to our website" : "Goodbye, thank you for visiting";
        break
        case "frances":
            saludo = tipo === "bienvenida" ? "Bonjour, bienvenue sur notre site web" : "Au revoir, merci de votre visite";
        break;
        case "aleman":
            saludo = tipo === "bienvenida" ? "Hallo, willkommen auf unserer Webseite" : "Auf Wiedersehen, danke für Ihren Besuch";
        break;
        case "japones":
            saludo = tipo === "bienvenida" ? "こんにちは、私たちのウェブサイトへようこそ" : "さようなら、訪問してくれてありがとう";
        break;
        default:
            saludo = "Idioma no reconocido o tipo de saludo no válido";
            console.error("Error: Idioma no reconocido o tipo de saludo no válido");
    }
    console.log(saludo);
}

saludo()