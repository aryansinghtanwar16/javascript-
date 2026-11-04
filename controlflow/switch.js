// switch case 

/* 
switch(condition){
case val:
    case val:
    case val:
    case val:
    case val:
}
*/ 

// use switch case for working days 

let day=prompt("Enter day:");

switch(day){
    case "monday":
        console.log("working");
        break;
    case "tuesday":
        console.log("working");
        break;
    case "wednesday":
        console.log("working");
        break;
    case "thursday":
        console.log("working");
        break;
    case "friday":
        console.log("working");
        break;
     default:
        console.log("not working ");

}



//marks 
let marks=prompt("enter marks ");

switch(marks){
    case marks>=75:
        console.log("First division");

        case marks>=60:
            console.log("second division");

            case marks>=33:
                console.log("third division");
                case marks<33:
                    console.log("failed");

}