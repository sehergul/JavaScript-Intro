//saf javascript'te class yok
//aslinda her sey fonksiyon
//fonksiyona prototip olusturuluyor

//disaradan erisim icin export (public)
export class Customer {
  constructor(id, customerNumber) {
    //prototyping
    this.id = id;
    this.customerNumber = customerNumber;
  }
}

let customer = new Customer(1, "12345");
//parametre gecilmeyince undefined olur
console.log(customer.id);
//boyle yazinca id'ye ulasamayiz- undefined
//ulasabilmek icin constructor'a this eklemeliyiz

//instance prototyping
customer.name = "Murat Kurtboğan";
console.log(customer.name);

//class prototyping
Customer.field = 10;
console.log(Customer.field);

class IndividualCustomer extends Customer {
  constructor(firstName, id, customerNumber) {
    super(id, customerNumber);
    this.firstName = firstName;
  }
}

class CorporateCustomer extends Customer {
  constructor(companyName, id, customerNumber) {
    super(id, customerNumber);
    this.companyName = companyName;
  }
}

//filter referansi degistirdigi icin kullanilir
//reduce: accumulator

let products = [
  { id: 1, name: "Acer Laptop", unitPrice: 15000 },
  { id: 2, name: "Asus Laptop", unitPrice: 16000 },
  { id: 3, name: "Hp Laptop", unitPrice: 13000 },
  { id: 4, name: "Dell Laptop", unitPrice: 12000 },
  { id: 5, name: "Casper Laptop", unitPrice: 17000 },
];

products.map((product) => console.log("${product.name}"));

products.map((product) => {
  console.log(product);
  console.log(`${product.name}`);
});

let filteredProducts = products.filter((product) => product.unitPrice > 12000);
console.log(filteredProducts);

let cartTotal = products.reduce((acc, product) => acc + product.unitPrice, 0);
console.log(cartTotal);

let cartTotal2 = products
  .filter((p) => p.unitPrice > 13000)
  .map((p) => {
    p.unitPrice = p.unitPrice * 1.18;
    return p;
  })
  .reduce((acc, p) => acc + p.unitPrice, 0);
console.log(cartTotal2);
