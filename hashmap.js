let testArray = ['1001', '100103', '10010505', '1002', '1003', '100505'];
let testInsert = '100305';

testArray.push(testInsert);
testArray.sort();
console.log('testArray:', testArray);

let currentPrefix = null;
let currentGroup = [];
let finalArray = [];

for (let i = 0; i < testArray.length; i++) {
    
    var prefix = testArray[i].slice(0,4);
    if (prefix !== currentPrefix) {

        if (currentGroup.length > 0) {
            console.log(currentGroup);
        };

        currentPrefix = prefix;
        currentGroup = [testArray[i]];
    
        //console.log(currentGroup);
        //console.log(currentPrefix);
    } else {
        currentGroup.push(testArray[i]);
    };  
};

if (currentGroup.length > 0) {
    finalArray.push(...currentGroup);
}

console.log('final array:', finalArray);
