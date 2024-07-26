let nomepersonagem = "danone";
let XP = 7000;

if (XP < 1000) {
    console.log("Seu herói", nomepersonagem , "foi classificado como ferro");
} else if (XP >= 1001 && XP <= 2000) {
    console.log("Seu herói", nomepersonagem , "foi classificado como bronze");
} else if (XP >= 2001 && XP <= 5000) {
    console.log("Seu herói", nomepersonagem , "foi classificado como prata");
} else if (XP >= 6001 && XP <= 7000) {
    console.log("Seu herói", nomepersonagem , "foi classificado como ouro");
} else if (XP >= 7001 && XP <= 8000) {
    console.log("Seu herói", nomepersonagem , "foi classificado como platina");
} else if (XP >= 8001 && XP <= 9000) {
    console.log("Seu herói", nomepersonagem , "foi classificado como ascendente");
} else if (XP >= 9001 && XP <= 10000) {
    console.log("Seu herói", nomepersonagem , "foi classificado como imortal");
} else if (XP >= 10001) {
    console.log("Seu herói", nomepersonagem , "foi classificado como radiante");
} else {
    console.log("Não tem essa opção de XP");
}
