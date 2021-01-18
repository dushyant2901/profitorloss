var readlineSync=require("readline-sync")


//console.log(23/21*100+"%")
var stockPrice=readlineSync.question("stock price")
var stockQuantity=readlineSync.question("how much")
console.log(stockPrice*stockQuantity)
var newStockPrice=readlineSync.question("New stock price")

if(stockPrice>newStockPrice){
  var resultAbsolute=(stockPrice-newStockPrice)*stockQuantity
  var resultPercentage=(1-newStockPrice/stockPrice)*100
  console.log(`Loss:${resultAbsolute}`,`loss:-${resultPercentage}%`)
}else{
  var resultAbsolute=(newStockPrice-stockPrice)*stockQuantity
  var resultPercentage=(newStockPrice/stockPrice-1)*100
  console.log(`Gain:${resultAbsolute}`,`Gain%:${resultPercentage}%`)
}
