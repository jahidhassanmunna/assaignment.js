function woodCalculator(chair,table,bed){
var chairCount=chair*1;
var tablecount=table*2;
var bedcount=bed*3
var totalWood= chairCount+tablecount+bedcount;
return totalWood;
}
var total=woodCalculator(12,2,4)
console.log(total)