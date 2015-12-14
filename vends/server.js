var stdin = process.openStdin();
var validCoins=[5,10,25];
var deposit=0;
var display= "Insert Coins"
console.log(display);

stdin.addListener("data", function(input) {

    var x = parseInt(input.toString());
    if(validCoins.indexOf(x)>-1){
    	deposit=deposit+x;
    	console.log("Deposited "+deposit);
    }else{
    	console.log(" returned "+input.toString());
    	console.log("Deposited "+deposit);
    }
  });