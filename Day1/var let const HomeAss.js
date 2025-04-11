const browserVersion = "Edge";

function getBrowserVersion(params) {
    if (browserVersion==="Edge") {
        let browserVersion='2.0';
        console.log("The browserVersion inside IF block is: "+browserVersion);  
    }
    console.log("The browserVersion outside IF block is: "+browserVersion);
}
getBrowserVersion();
console.log("The browserVersion is: "+browserVersion);