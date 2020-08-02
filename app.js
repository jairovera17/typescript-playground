//Tuple (fixed 2 items array)
var role;
role = [2, "Developer"];
//Enum 
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
function sum(input1, input2, conversion) {
    var result = input1 + input2;
    return result;
}
var s = "400";
console.log(+s + 100);
