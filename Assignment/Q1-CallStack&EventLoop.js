
        //  Q1: Call Stack & Event Loop
        
        // A web page has a button that logs "Start", then uses setTimeout to log "Async Task", and finally logs "End".
        // Explain the execution order using Call Stack, Callback Queue, and Event Loop. 

        function Q1(){
        
            console.log("start");
            setTimeout(() => {
                console.log("This is Aysnc Task");
            }, 2000);
            console.log("end");
        
        }