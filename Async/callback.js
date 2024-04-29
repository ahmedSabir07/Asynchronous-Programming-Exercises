

// Function to fetch data from the products endpoint and display it after a delay
function fetchDataAndDisplay(callback) {
    // Fetch data from the products endpoint
    fetch('https://dummyjson.com/products/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Response from API:', data); // Log the response to inspect its structure
            
            // Check if data is an object
            if (typeof data === 'object' && data !== null) {
                // Display the data after a delay
                setTimeout(() => {
                    callback(data);
                }, 5000); // 5000 milliseconds = 5 seconds
            } else {
                throw new Error('Data is not in the expected format');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Callback function to display fetched data
function displayData(data) {
    var resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Fetched data: ' + JSON.stringify(data);
}

// Event listener for the button click
document.getElementById('callbackBtn').addEventListener('click', function() {
    fetchDataAndDisplay(displayData);
});
