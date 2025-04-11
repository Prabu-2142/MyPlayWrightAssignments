function launchBrowser(browserName) {
    if (browserName===`Chrome`) {
        console.log(`The browser is: ${browserName}`);
        
    } 
    else{
console.log(`The browser version is not Chrome`);
    }
}

function runTest(testType) {
    switch (`${testType}`) {
        case 'sanity':
            console.log(`This is a ${testType} Test`);
            break;
                case 'Regression':
                    console.log(`This is a ${testType} Test`);
                    break;
        default:
            console.log(`This is a smoke Test`);
            break;
    }
    
}
launchBrowser("Chrome");
runTest("regression");
