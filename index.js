async function iterateWithAsyncAwait(values) {
    for (let value of values) {
        console.log(`Logging value: $`{value});
    }
}

iterateWithAsyncAwait([10, 20, 30, 40, 50]);

async function awaitCall() {
    console.log("Waiting for the API response...");

    
    let response = await new Promise((resolve) => {
        setTimeout(() => resolve({ data: "Data fetched from the API" }), 2000); 
    });

    console.log("API Response: ", response.data);
}

awaitCall();

async function awaitCallWithErrorHandling() {
    try {
        console.log("Waiting for the API response...");

        let response = await new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error("API request failed")), 2000); 
        });

        console.log("API Response: ", response.data);
    } catch (error) {
        console.error("Error occurred: ", error.message); 
    }
}

awaitCallWithErrorHandling();

async function concurrentRequests() {
    try {
        console.log("Making concurrent API requests...");

       
        const [response1, response2] = await Promise.all([
            new Promise(resolve => setTimeout(() => resolve("Response from API 1"), 1000)),
            new Promise(resolve => setTimeout(() => resolve("Response from API 2"), 1500)),
        ]);

        console.log("API 1 Response: ", response1);
        console.log("API 2 Response: ", response2);
    } catch (error) {
        console.error("Error during concurrent requests: ", error.message);
    }
}
concurrentRequests();

async function parallelCalls(urls) {
    try {
        console.log("Fetching data from multiple URLs...");

        const responses = await Promise.all(urls.map(url =>
            new Promise(resolve => setTimeout(() => resolve( `Data from $`{url}), 1000))
        ));

        console.log("Responses: ", responses);
    } catch (error) {
        console.error("Error during parallel calls: ", error.message);
    }
}


parallelCalls([
    'https://api.example1.com',
    'https://api.example2.com',
    'https://api.example3.com'
]);