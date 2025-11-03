const accountId = 14453;
let accountEmail = "abhishek@facebok.com";
var accountPassword = "12345"  // we don't use var bcz of scope issue

accountCity = "jaipur" // it will work but do not use this type

let accountState;  // it will show undefined in output bcz we haven't assign any value to variable

//accountId = 22342  we can not reassign the value bcz it's constant above

accountEmail = "abhi@yazoo.com"
accountPassword = "57577575"
accountCity = "Delhi"

console.table([accountEmail, accountPassword, accountCity, accountState])