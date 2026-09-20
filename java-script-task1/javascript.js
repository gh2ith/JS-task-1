let name = prompt ("Enter Your Name");
let age = Number (prompt("Enter Your Age"));
let gender = prompt ("Enter Your Gender");
let order = prompt ("What would you like to order?\n1. Pizza\n2. Burger\n3. Pasta\n4. Salad\n5. Soda");

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
    document.write("<h3> Your name is: "+name+"</h3>");
    document.write("<h3> Your age is: "+age+"</h3>");
    document.write("<h3> Your gender is: "+gender+"</h3>");
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