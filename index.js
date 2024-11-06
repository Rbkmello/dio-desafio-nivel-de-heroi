// Definindo as variáveis nome do herói e experiência(XP)
let nome = "Super-Dev";  // Substitua pelo nome desejado
let xp = 0;  // Substitua pelo valor de XP desejado

// Variável para armazenar o nível do herói
let nivel;

// Estrutura de decisão usando para determinar o nível
switch (true) {
    case (xp < 1000):
        nivel = "Ferro";
        break;
    case (xp >= 1001 && xp <= 2000):
        nivel = "Bronze";
        break;
    case (xp >= 2001 && xp <= 5000):
        nivel = "Prata";
        break;
    case (xp >= 5001 && xp <= 7000):
        nivel = "Ouro";
        break;
    case (xp >= 7001 && xp <= 8000):
        nivel = "Platina";
        break;
    case (xp >= 8001 && xp <= 9000):
        nivel = "Ascendente";
        break;
    case (xp >= 9001 && xp <= 10000):
        nivel = "Imortal";
        break;
    default:
        nivel = "Radiante";
}

// Exibindo a mensagem final
console.log(`O Herói de nome ${nome} está no nível ${nivel}`);
