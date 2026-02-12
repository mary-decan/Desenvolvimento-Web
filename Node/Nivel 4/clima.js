const celsius = Number(process.argv[2]);


if (isNaN(celsius)) {
    console.log("-----------------------------------------");
    console.log("Erro: Por favor, informe uma temperatura em Celsius.");
    console.log("Exemplo: node clima.js 25");
    console.log("-----------------------------------------");
} else {
   
    const fahrenheit = (celsius * 1.8) + 32;
    const kelvin = celsius + 273.15;

    console.log("-----------------------------------------");
    console.log(`Temperatura Original: ${celsius}°C`);
    console.log(`Em Fahrenheit: ${fahrenheit.toFixed(1)}°F`);
    console.log(`Em Kelvin: ${kelvin.toFixed(2)}K`);
    console.log("-----------------------------------------");
}