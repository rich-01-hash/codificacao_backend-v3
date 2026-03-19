const Fruit = [
    {id:1 , nome: "açaí"},
    {id:2  , nome:"laranja"},
    {id:3 , nome: "caju"}
]

 class FruitService{
    getAll(){
        return Fruit;
    }
 }

 export const fruitService = new FruitService();