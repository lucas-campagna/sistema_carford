// For Development only

const lastNames = ['Almeida', 'Azevedo', 'Braga', 'Barros', 'Brasil', 'Bahiense', 'Campos', 'Cardoso', 'Correia', 'Castro', 'Costa', 'Fontes', 'Guimarães', 'Magalhães', 'Macedo', 'Matos', 'Pedreira', 'Queirós', 'Ribeiro', 'Rocha', 'Siqueira', 'Sequeira', 'Serra', 'Souza', 'Teixeira', 'Valle']
const names = ['Miguel', 'Arthur', 'Gael', 'Heitor', 'Theo', 'Davi', 'Gabriel', 'Bernardo', 'Samuel', 'João Miguel', 'Helena', 'Alice', 'Laura', 'Maria Alice', 'Valentina', 'Heloísa', 'Maria Clara', 'Maria Cecília', 'Maria Julia', 'Sophia']
const carColors = ['red','blue','gray']
const carModels = ['hatch','sedan','convertible']


export function generateRandomClient(){
    const randint = (size) => Math.floor(Math.random() * size);
    const nCars = randint(3);
    return {
        name: `${names[randint(names.length)]} ${lastNames[randint(lastNames.length)]}`,
        cars:Array(nCars).fill(0).map(()=>({
            color: carColors[randint(carColors.length)],
            model: carModels[randint(carModels.length)],
        }))
    }
}