import Customer from "./domain/entity/customer/customer";
import Order from "./domain/entity/order/order";
import OrderItem from "./domain/entity/order/order_items";
import Address from "./domain/entity/valueobjects/address";

let customer = new Customer("cust1","Vagner");
let address = new Address("Rua X", 555, "777777-888","São Paulo");
customer.address = address;
customer.activate();

/*
--Forma longa de declarar um array
const item1 = new OrderItem("It1","Item 01",1.01,"Prod1",1);
const item2 = new OrderItem("It2","Item 02",2.02,"Prod2",2);
const item3 = new OrderItem("It3","Item 03",3.03,"Prod2",3);
const item4 = new OrderItem("It4","Item 04",4.04,"Prod4",4);
const item5 = new OrderItem("It5","Item 05",5.05,"Prod5",5);
const item6 = new OrderItem("It6","Item 06",6.06,"Prod6",6);
const items = [item1,item2,item3,item4,item5,item6];
*/


const items = [new OrderItem("It1","Item 01","Prod1",1.01,1),
               new OrderItem("It2","Item 02","Prod2",2.02,2),
               new OrderItem("It3","Item 03","Prod2",3.03,3),
               new OrderItem("It4","Item 04","Prod4",4.04,4),
               new OrderItem("It5","Item 05","Prod5",5.05,5),
               new OrderItem("It6","Item 06","Prod6",6.06,6)];

let order = new Order("it1","cust1",items);

