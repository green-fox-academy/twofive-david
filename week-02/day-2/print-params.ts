export{};

'use strict'

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(...others){
    
    for( let i = 0; i < others.length; i++) {
        console.log(others[i]);
    }
}

printParams(1, 2, 3, 4, "hello");