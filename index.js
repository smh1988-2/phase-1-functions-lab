// Code your solution in this file!
function distanceFromHqInBlocks(customerLocation) {
    if (customerLocation > 42) {
        return customerLocation - 42
    } else {
        return 42 - customerLocation
    }
}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(customerLocation) {
    return distanceFromHqInBlocks(customerLocation) * 264
}

distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet (startBlock, endBlock) {
    if (startBlock > endBlock) {
        return (startBlock - endBlock) * 264
    } else {
        return (endBlock - startBlock) * 264
    }
};

distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);


function calculatesFarePrice(startBlock, endBlock) {
    if (distanceTravelledInFeet(startBlock,endBlock) < 400) {
        return 0
    } 
    
    else if (distanceTravelledInFeet(startBlock,endBlock) > 400 && distanceTravelledInFeet(startBlock,endBlock) < 1999) {
        return (distanceTravelledInFeet(startBlock,endBlock) - 400) * .02
    } 
    
    else if (distanceTravelledInFeet(startBlock,endBlock) > 2000 && distanceTravelledInFeet(startBlock,endBlock) < 2500) {
        return 25
    } 
    
    else if (distanceTravelledInFeet(startBlock,endBlock) > 2500) {
        return "cannot travel that far"
    }
}

calculatesFarePrice(43, 48);
calculatesFarePrice(50, 60);
calculatesFarePrice(34, 28);