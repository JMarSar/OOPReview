import { Mobile } from './RetosDeRepaso2';

let Nokia3210 = new Mobile("Nokia 3210", "3210", "Nokia", 5, "Blue", false, 1, 30)
let Iphone3G = new Mobile("Iphone 3G", "3G", "Apple", 60, "Grey", false, 1, 50)
let SamsunGalaxy10 = new Mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", 125, "Black", true, 2, 300)

let myMobiles = [Nokia3210, Iphone3G, SamsunGalaxy10]

for (let mobile of myMobiles){
        console.log(mobile.printAll())
}