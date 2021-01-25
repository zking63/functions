//Get 1 to 255
function GetOneTwo() {
    var newArr = [];
    for(var j = 0; j < 256; j++) {
        newArr.push(j);
    }
    return newArr;
}
var result1 = GetOneTwo();
console.log(result1);

//Get even 1000
function evens() {
    var sum = 0;
    for(var j = 0; j <= 1000; j++){
        if (j % 2 == 0)
        {
            var sum = sum + j;
        }
    }
    return sum;
}
var result2 = evens();
console.log(result2);

//Sum odd 5000
function getsumodd() {
    var sum = 0;
    for(var j = 0; j <= 5000; j++){
        if (j % 2 != 0)
        {
            var sum = sum + j;
        }
    }
    return sum;
}
var result2 = getsumodd();
console.log(result2);

//Iterate an array
function iterate(ArrI){
    sum = 0;
    for (var i = 0; i < ArrI.length; i++){
        sum = sum + ArrI[i];
    }
    return sum;
}
console.log(iterate([1,2,4]))

//Find max
function findmax(ArrM){
    var max = ArrM[0];
    for (var i = 0; i < ArrM.length; i++){
        if (ArrM[i] > max)
        {
            max = ArrM[i]
        }
    }
    return max;
}
console.log(findmax([1,2,4,-9]))

//Find average
function getaverage(ArrA){
    var sum = 0;
    var average = 0;
    for (var i = 0; i < ArrA.length; i++){
        var sum = ArrA[i] + sum;
    }
    var average = sum/ArrA.length;
    return average;
}
console.log(getaverage([1,2,4,-9]))

//Array odd
function getodds(){
    var ArrO = []
    for (var i = 0; i <= 50; i++){
        if (i % 2 != 0) {
            ArrO.push(i);
        }
    }
    return ArrO;
}
console.log(getodds());

//Greater than Y
function moreY(ArrY){
    var NewArrY = [];
    for (var i = 0; i < ArrY.length; i++){
        y = 1;
        if (ArrY[i] > y) {
            NewArrY.push(ArrY[i]);
        }
    }
    return NewArrY;
}
console.log(moreY([1,2,3,4]));

//Squares
function squared(ArrS){
    var NewArrS = [];
    for (var i = 0; i < ArrS.length; i++){
        NewArrS.push(ArrS[i] * ArrS[i]);
    }
    return NewArrS;
}
console.log(squared([1,2,3,4]));

//Negatives
function negatives(ArrN){
    var NewArrN = [];
    for (var i = 0; i < ArrN.length; i++){
        if (ArrN[i] < 0) {
            NewArrN.push(0);
        }
        else if (ArrN[i] >= 0) {
            NewArrN.push(ArrN[i]);
        }
    }
    return NewArrN;
}
console.log(negatives([1,2,3,-4]));

//Max/Min/Avg
function maxminav(ArrMMA){
    var max = ArrMMA[0];
    var min = ArrMMA[0];
    var sum = 0;
    var average = 0;
    var newArrMMA = [];
    for (var i = 0; i < ArrMMA.length; i++){
        if (ArrMMA[i] > max)
        {
            max = ArrMMA[i];
        }
        if (ArrMMA[i] < min)
        {
            min = ArrMMA[i];
        }
        sum = ArrMMA[i] + sum;
        average = sum/ArrMMA.length;
    }
    newArrMMA.push(max);
    newArrMMA.push(min);
    newArrMMA.push(average);
    return newArrMMA;
}
console.log(maxminav([1,2,3]));

//Swap Values
function swap(ArrW){
    var newArrW = [];
    var last = 0;
    for (var i = 0; i < ArrW.length; i++){
        if (i == ArrW.length - 1)
        {
            last = ArrW[i];
            newArrW.push(last);
        }
    }
    for (var i = 0; i < ArrW.length; i++){
        if (i != 0 && i != ArrW.length - 1)
            {
                newArrW.push(ArrW[i]);
            }
        }
    newArrW.push(ArrW[0]);
    return newArrW;
}
console.log(swap([1,2,3,4]));

//number to string
function negatives2(ArrN){
    var NewArrN = [];
    for (var i = 0; i < ArrN.length; i++){
        if (ArrN[i] < 0) {
            NewArrN.push("Dojo");
        }
        else if (ArrN[i] >= 0) {
            NewArrN.push(ArrN[i]);
        }
    }
    return NewArrN;
}
console.log(negatives2([1,2,3,-4]));