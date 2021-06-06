//PROJEYI BURADAN BASLATMAK ICIN
//index.html'de
//System.import('src/app.js');


//javascript- tip guvenlikli bir dil degildir 

//degiskenler: var, let, const
//javascript dosya bazli bir programlama dili
//yukaridan asagiya okur

// var sayi1 = 10
// var sayi1 = "Engin Demiroğ"
// console.log(sayi1)
// //calisir

// let sayi2 = 20
// let sayi2 = "Engin Demiroğ"
// console.log(sayi2)
// //calismaz

let sayi3 = 30;
sayi3 = "Engin Demiroğ"
//{} icinde tanimlanan objedir
let student = {id:1, name:"Engin"}
console.log(student)


function save(ogrenci, puan=10) {
    console.log(ogrenci.name + ": " + puan)
}
save(student);
save(15);
save(student,50);
save(student,undefined)
//undefined: ben aslinda yogum

let students = ["Engin Demiroğ", "Halit Kalaycı", "Büşra Bulut"]
console.log(students)

let students2 = [student,  {id:2, name:"Halit"}, "Ankara", {city: "İstanbul"}]
console.log(students2)

//bir degiskene fonksiyon atanabilir
//REST: kalan parametrelerin array olarak tutulmasi
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)
    console.log(products[0])
}

console.log("Type of showProducts: " + typeof showProducts)
showProducts(10, "Elma", "Armut", "Karpuz")

//array icinde array gondermis oluruz
showProducts(10, ["Elma", "Armut", "Karpuz"])

console.log(Math.max(1,2,3,4,50,4,60,14))
//array gonderilirse NaN hatasi verir

//SPREAD
//... yazinca elemanlari tek tek ayirir
let points = [1,2,3,4,50,4,60,14]
console.log("Max without spread (...) " + Math.max(points))
console.log(...points)
console.log("Max with spread (...) " + Math.max(...points))

console.log(..."ABC","D",..."EFG","H")
//tek tek ayirir


//DESTRUCTURING: Array degerlerini, degiskenlere atama- parcalama
let populations = [10000, 20000, 30000, [40000, 50000], [60000, 70000]]
//array olarak gonderilen degeri bir degiskene atar
let [small, medium, high, veryHigh, [huge, maximum]] = populations
//populations arrayindeki degerleri sirasiyla small, medium, high degiskenlerine atadi
console.log(small) 
console.log(medium) 
console.log(high) 
console.log(veryHigh) 
console.log(huge)
console.log(maximum)

//parametre olarak array kullaniliyorsa destructuring olarak algilanir
function someFunction([small1], number) {
    console.log(small1)
    //ilk eleman destruct edilir
}
someFunction(populations)

let category = {id:1, name: "İçecek"}
console.log(category.id + " " + category["name"])

//OBJECT DESTRUCTURING
let {id, name} = category
console.log(id)
console.log(name)


//REDUX
