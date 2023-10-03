//Exemplos

//Exemplo 1: Verificando se há algum numero par em um array 

const numbers = [1, 3, 5, 6, 7, 9];

const hasEvenNumber = numbers.some(function (element) {
  return element % 2 === 0; // Verifica se o número é par
});

console.log(hasEvenNumber); // true


/*-----------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------------")


//Exemplo 2: Verificando se há uma string vazia em um array de strings

const strings = ['hello', 'world', '', 'example'];

const hasEmptyString = strings.some(function (element) {
  return element === ''; // Verifica se a string é vazia
});

console.log(hasEmptyString); // true


/*-----------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------------")

//Exemplo 3: Verificando se há pelo menos um item disponível em um inventário 

const inventory = [
    { name: 'item1', quantity: 0 },
    { name: 'item2', quantity: 5 },
    { name: 'item3', quantity: 10 }
  ];
  
  const hasAvailableItems = inventory.some(function (item) {
    return item.quantity > 0; // Verifica se há pelo menos um item disponível
  });
  
  console.log(hasAvailableItems); // true
  

  
/*-----------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------------")


//Exemplo 4: Verificar se pelo menos uma das propriedades do objeto é um número.

const personNumberPositive = {
    name: 'John',
    age: 30,
    salary: 50000,
  };
  
  const hasAtLeastOneNumber = Object.values(personNumberPositive).some(function (value) {
    return typeof value === 'number';
  });
  
  console.log(hasAtLeastOneNumber); // true, pois age e salary são numeros.
  
  





