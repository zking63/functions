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