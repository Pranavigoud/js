// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = 2
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break; //if break is not present here, then everything will execute after key matches except default
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;

    default:
        console.log("not matched");
        break;
}