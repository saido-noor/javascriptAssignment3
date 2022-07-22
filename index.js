// Create a class Mkulima that will keep a list of farms, grocery vendors 
// and products. A single farm record should contain id, farm name,
//  farmer, phone number and address. A single grocery vendor record 
// should contain id, store name and phone number. A product should have id, 
// name and price fields. 

class Mkulima{
    constructor(){
     this.farms = [];
     this.products=[];
     this.orders = [];
     this.addFarm =(farmId,name,farmer,phone,address)=>{
        this.farms.push({farmId,name,farmer,phone,address})
     }
     this.removeFarm= (farmId1)=>{
        let deleteFarm = this.farms.find(item => item.farmId === farmId1)
        let farmIndex = this.farms.indexOf(deleteFarm)
        this.farms.splice(farmIndex,1)

     }
     this.updateFarm =(farmId1,farmId2,farmName1,farmer2,phoneNumber,address2)=>{

      let updateFrm = this.farms.find(item=>item.farmId===farmId1)
      updateFrm.farmId = farmId2;
      updateFrm.name = farmName1;
      updateFrm.farmer = farmer2;
      updateFrm.phone = phoneNumber;
      updateFrm.address = address2;

     }

     this.getFarm=(getId)=>{
      console.log(this.farms.find(object=>object.farmId===getId));
      
     }
     this.addProduct = (productId,productName,price)=>{
      this.products.push({productId,productName,price})
     }

     this.removeProduct = (productId1) =>{
      let productRemove = this.products.find(item => item.productId === productId1 );
      let indexOfProduct = this.products.indexOf(productRemove);
      this.products.splice(indexOfProduct,1);
     }

     this.updateProduct = (productid,productId2,productName2,price2) =>{
      let updateproducts = this.products.find(item=>item.productId===productid)
      updateproducts.productId=productId2;
      updateproducts.productName=productName2;
      updateproducts.price=price2;
     
     }

     this.getPro=(getId)=>{
      console.log(this.farms.find(object=>object.farmId===getId));
      
     }


    }
}

let mkulima = new Mkulima()
mkulima.addFarm("23445","Larsen's Fruit Farm","Sudi","0723816223", "Karen616")
mkulima.addFarm("38494","Country Lane Farm ","Shanaya","0723816223", "Karen616")

console.log(mkulima.farms);


mkulima.removeFarm("23445")
console.log(mkulima.farms);


mkulima.updateFarm("38494","2039","CoffeFarm","Sharmake","07829374","Kibera00100")
console.log(mkulima.farms)

mkulima.addProduct("10","Maize",50);
mkulima.addProduct("30","Bananas",80);
mkulima.addProduct("130","Mangoes",200);

console.log(mkulima.products);

mkulima.removeProduct("30");
console.log(mkulima.products);


mkulima.updateProduct("10","45","Apples",300)
console.log(mkulima.products)