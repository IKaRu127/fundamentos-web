let mensagem: string = "Hello World";
console.log(`Mensagem: ${mensagem}`);

// (valor: recebe um tipo): number -> indica que a função retorna um número
function multiplicar(valor: number): number {
    return valor * 5;
}

console.log(`Resultado: ${multiplicar(5)}`);