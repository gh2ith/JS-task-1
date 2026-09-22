let name = prompt ("Enter Your Name");
let age = Number (prompt("Enter Your Age"));
let gender = prompt ("Enter Your Gender");
let menu = [];

menu[0] ={
    item:"Pizza",
    price:20,
    category:"food",
    available:"Available"
}
menu[1] ={
    item:"Burger",
    price:15,
    category:"food",
    available:"Unavailable"
}
menu[2] ={
    item:"Pasta",
    price:15,
    category:"food",
    available:"Unavailable"
}
menu[3] ={
    item:"Salad",
    price:10,
    category:"food",
    available:"Available"
}
menu[4] ={
    item:"Soda",
    price:5,
    category:"Drinks",
    available:"Available"
}
 

let found = false;
let selectedFood;

while (found == false) {

    order = prompt("What would you like to order? \n 1 for Pizza\n 2 for Burger\n 3 for Pasta\n 4 for Salad\n 5 for Soda");

    for (let i = 0; i < menu.length; i++) {

        if (menu[i].available == "Unavailable") {
            continue;
        }

        if (order == i+1) {
            selectedFood = menu[i];
            found = true;
            break;
        }
    }

    if (found == false) {
        alert("Sorry, that food is unavailable. Try again.");
    }
}

for (let property in selectedFood) {
    document.write(property + ": " + selectedFood[property] + "<br>");
}
console.log(name);
console.log(age);
console.log(gender);
console.log(order);


if (age>16){
    if (gender=="male"){
        document.write("<h1>Welcome Mr."+name+"</h1>");
}
    else if (gender=="female"){
        document.write("<h1>Welcome Ms."+name+"</h1>");
    }
        else {
        document.write("<h1>Welcome "+name+"</h1>");
    }
    if (order=="1" || order=="2" || order=="3" || order=="4" || order=="5"){
        if (order=="1"){
            order="Pizza";
        }
        else if (order=="2"){
            order="Burger";
        }
        else if (order=="3"){
            order="Pasta";
        }
        else if (order=="4"){
            order="Salad";
        }
        else if (order=="5"){
            order="Soda";
        }
        alert("Your order is: "+order+" CONFIRMED");
        document.write("<h3> Your order is: "+order+"<br> <br>preparing</h3>");
    }

    else {
        document.write("<h3> we don't have that item</h3>");
    }
}
else {

    document.write("<h1>Sorry "+name+" you are not allowed to enter</h1>");

}



document.write("<h2>Menu</h2>");
function showMenu(){
    for (let i=0; i<menu.length; i++){
        document.write("<h3>Item:</h3>" + menu[i].item+ "<br>");
        document.write("Item:" + menu[i].price+ "<br>");
        document.write("Item:" + menu[i].category+ "<br>");
        document.write("Item:" + menu[i].available+ "<br><br>");
    }
}
showMenu();

