import { Mobile } from './RetosDeRepaso2';

let Nokia3210 = new Mobile("Nokia 3210", "3210", "Nokia", 5, "Blue", false, 1, 30)
let Iphone3G = new Mobile("Iphone 3G", "3G", "Apple", 60, "Grey", false, 1, 50)
let SamsunGalaxy10 = new Mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", 125, "Black", true, 2, 300)

console.log(Nokia3210)
console.log(Iphone3G)
console.log(SamsunGalaxy10)

Nokia3210.setIs5G(true)
Nokia3210.setCameraNumber(4)

console.log(Nokia3210)
console.log(Iphone3G)
console.log(SamsunGalaxy10)

Nokia3210.printAll()