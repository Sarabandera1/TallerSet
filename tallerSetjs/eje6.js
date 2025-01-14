let numero1 = [1, 2, 3];
let numero2 = [3, 2, 1];
let numero3 = [4, 5, 6];

const sonIguales = (array1, array2) => {
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    const set = Set1.difference(set2);
    return (set.size == 0);
}
console.log(sonIguanles(numero1,numero2));
console.log(sonIguales(numero1,numero3));
