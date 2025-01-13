const fs = require('fs');
const readline = require('readline');

function dynamicGroup() {
    const fileStream = fs.createReadStream('test-file.rpy', 'utf8');

    const rl = readline.createInterface({
        input: fileStream,
        output: process.stdout,
        terminal: false, 
    });

    let currentPrefix = null;
    let currentGroup = [];

    rl.on('line', (line) => {
        const prefix = getPrefix(line);
        
        console.log('line: ', line);

        if (prefix !== currentPrefix) {
            if (currentGroup.length > 0) {
                // processing the group
            }

            currentPrefix = prefix;
            currentGroup = [line];
        } else {
            currentGroup.push(line);
        };
    });

    console.log('The hashmap has:', currentGroup);
};

function getPrefix(line) {
    return line.slice(0,4);
};

dynamicGroup();