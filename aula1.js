/* Aula 1
Faça um programa para colocar o valor de uma viagem
    Vc terá 3 variáveis
        1 - Preço do combustível (precoCombustivel)
        2 - Gasto médio do combustível gasto do carro por KM (distanciaEmKm)
        3 - Distância em KM da viagem (distanciaEmKm)

Imprima no console o valor gasto de combustível para realizar esta viagem */


// As três variáveis
const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

// Calculado a resolução do desafio
const valorGasto = (precoCombustivel / kmPorLitros) * distanciaEmKm;
