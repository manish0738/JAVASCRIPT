const accountId = 197
let accountEmail = "manish@gmail.com"
var accountPassword = "1234"
accountCity = "chalisgaon"

// accountId = 2

accountEmail = "krushna@gmail.com"
accountPassword = "0987"
accountCity = "jalgaon"

// PREFER NOT TO USE VAR 
// BECAUSE OF ISSUE IN BLOCK SCOPE AND FUNCTIONAL SCOPE 

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])
