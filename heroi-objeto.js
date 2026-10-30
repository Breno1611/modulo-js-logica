const heroi = {
    nome: "MAGNO",
    vida:10,
    veneno: 0,
    critico: 0.2,
    danoCritico: 2,
    inventario: [],
    
} 

const aranha = {
   nome: "aranha cara de cavalo", 
   vida: 10, 
   dano:3, 
   chanceVeneno: 0.8,
   veneno: 4, 

}


console.log(heroi.vida);
   heroi.vida = 15;
   heroi = 15; // erro de constante sendo mudada
console.log(heroi.vida);