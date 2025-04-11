function grade(mark) {
   if(mark<0 || mark>100){
    console.log("Invalid Score");
  
   }

    switch (Math.floor(mark/10)) {
        case 10:
            console.log(`The Grade is : A+ `);
            break;
            case 9:
                console.log(`The Grade is : A `);
                break;
            case 8:
                console.log(`The Grade is : B+ `);
                break;
            case 7:
                console.log(`The Grade is : B `);
                break;
            case 6:
                console.log(`The Grade is : C `);
                break;
        default:
            console.log(`Fail`);
            break;
    }
}
grade(101);