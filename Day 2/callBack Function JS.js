function getUserData(name, data){
    setTimeout(() => {
        console.log(`The Name is: ${name}`);
        data();
    }, 3000);
}

function data() {
    console.log("The age is 30");
}

getUserData("Prabu", data);