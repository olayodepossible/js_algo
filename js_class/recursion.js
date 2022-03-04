let n = 7;

function recur(n){
    if( n == 0)
        return;
    
    recur(--n);
    for(let i = 0; i < n; i++){
        console.log("#");
    }
   
    console.log("");
}

recur(n);


// Finabocci
function fibonacci(n){

    return n < 2 ? 1 : fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(n));