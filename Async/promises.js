// Task 2//

//Script//

document.getElementById('fetchDataBtn').addEventListener('click', fetchData);

function fetchData() {
    // Display "Loading..." while fetching data
    document.getElementById('result').textContent = 'Loading...';

    // Create a promise to fetch data from the JSONPlaceholder API
    const fetchDataPromise = new Promise((resolve, reject) => {
        // Set a timeout for the promise
        const timeout = setTimeout(() => {
            reject(new Error('Operation timed out'));
        }, 5000); // Timeout after 5 seconds

        // Fetch data from the API
        fetch('https://dummyjson.com/posts')
            .then(response => {
                // Check if the response is successful
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                // Parse the JSON response
                return response.json();
            })
            .then(data => {
                // Clear the timeout if the promise is resolved before timeout
                clearTimeout(timeout);
                // Resolve the promise with the fetched data
                resolve(data);
            })
            .catch(error => {
                // Reject the promise with the error message
                reject(error);
            });
    });

    // Handle promise resolution
    fetchDataPromise
        .then(data => {
            // Update the result div with the fetched data
            document.getElementById('result').textContent = JSON.stringify(data);
        })
        .catch(error => {
            // Display the error message if the promise is rejected
            document.getElementById('result').textContent = error.message;
        });
}
