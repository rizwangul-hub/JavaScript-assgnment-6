//Assignment : 6 JavaScript
//Submitted By : Rizwan Ullah

//Switch Statements (using prompt and alert)
//Step 1: Employee Role access system
let role = prompt("Enter your role (Admin, Manager, developer,intern):");
switch (role.toLowerCase()) {   
    case "admin":
        alert("You have full access"); // Full access for admin
        break; // Break statement to exit switch
    case "manager":
        alert("You have access to manage team and projects"); // Access for manager
        break;  
    case "developer":
        alert("You have access to write and manage code");  // Access for developer
        break;
    case "intern":
        alert("You have limited access"); // Limited access for intern
        break; 

}

//.------------------------------------------------------------------------------------------------------
//Step 2: Online Pyment Methods
let paymentMethod = prompt("Enter your payment method (Credit Card, Debit Card, cod, upi):");
switch (paymentMethod.toLowerCase()) {   
    case "credit card":
        alert("You selected Credit Card for payment."); // Credit Card payment  
        break; 
    case "debit card":
        alert("You selected Debit Card for payment."); // Debit Card payment    
        break;  
    case "cod":
        alert("You selected Cash on Delivery for payment.");  // Cash on Delivery payment 
        break;
    case "upi":
        alert("You selected UPI for payment."); // UPI payment
        break; 

}
//.------------------------------------------------------------------------------------------------------
//Step 3: order Status checker
let orderStatus = prompt("Enter your order status (Placed, Packed, Delivered, Cancelled):");
switch (orderStatus.toLowerCase()) {   
    case "placed":
        alert("Your order has been placed successfully.");
        break;
    case "packed":
        alert("Your order has been packed.");
        break;
    case "delivered":
        alert("Your order has been delivered.");
        break;
    case "cancelled":
        alert("Your order has been cancelled.");
        break;
  
}
//.------------------------------------------------------------------------------------------------------
//Step 4: Office work day checker
let day = prompt("Enter a day of the week (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday):");
switch (day.toLowerCase()) {
    case "monday", "tuesday", "wednesday", "thursday", "saturay":
        alert("It's a work day.");
        break;
        case "friday":
            alert ("It's a half day.");
        break;
    case "sunday":
        alert("It's a Holiday.");
        break;
}
//.------------------------------------------------------------------------------------------------------
//Step 5: Defult case 
let fruit = prompt("Enter your favorite game (Cricket, Football, Hockey, Volleyball):");
switch (fruit.toLowerCase()) {
    case "cricket":
        alert("You selected Cricket as your favorite game.");
        break;
    case "football":
        alert("You selected Football as your favorite game.");
        break;
    case "hockey":
        alert("You selected Hockey as your favorite game.");
        break;
    case "volleyball":
        alert("You selected Volleyball as your favorite game.");
        break;
    default:
        alert("Invalid game");
        break;
}
//.------------------------------------------------------------------------------------------------------
//End of Assignment 6 JavaScript