const readline = require ("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
function mainMenu(){
console.log ("Factorial Application");

console.log("1. Say Hello");
console.log("2. Compute Factorial");
console.log("3. Exit");
rl.question("Enter your choice (1-3)", choice =>{

    if (choice==="1"){
        console.log("Hello There!");
        backToMenu();
    }else if (choice==="2"){
        computeFactorial();
    } else if (choice==="3"){
        console.log("Exiting Program...Goodbye!");
        rl.close();
    }else{
        console.log("Invalid choice. Please try again.");
        mainMenu();
    }    

})

}
function computeFactorial(){ 
    console.log("Factorial");

        rl.question("Enter a number for factorial: ", (numStr) =>{
            let num = parseInt(numStr);
            try{
                console.log('Factorial of ${num} = ${MathUtils.computeFactorial(n)}');
            }catch (err){
                console.log(err.message);
            }
            

        
            backToMenu();
        });
}
function backToMenu(){
    console.log("---------");
    console.log("1. Back to Main Menu");
    console.log("2. Exit");

    rl.question("What would you like to do next? (1-2) :", (backToMenuChoice) =>{
        if (backToMenuChoice === "1"){
            console.clear();
            mainMenu();
        }else if (backToMenuChoice === "2"){
            console.log("Exiting Program...Goodbye!");
            rl.close();
        }else{
            console.log("Invalid Choice. Please try again.");
            backToMenu();
        }
        
    })
}
    
mainMenu();