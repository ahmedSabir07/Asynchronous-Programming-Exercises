//---------------------------Task 3------------>

// Function to fetch data from the JSONPlaceholder API using async/await
async function fetchData() {
    const url = 'https://dummyjson.com/products/category/smartphones';
    try {
        // Display "Loading..." while data is being fetched
        document.getElementById('result').textContent = 'Loading...';

        // Fetch data from the API
        const response = await fetch(url);

        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON response
        const data = await response.json();

        // Update the text in the div element with the fetched data
        document.getElementById('result').textContent = JSON.stringify(data);
    } catch (error) {
        // Handle errors gracefully and display error messages
        console.error('Error fetching data:', error);
        document.getElementById('result').textContent = 'Error fetching data. Please try again later.';
    }
}

// Event listener for the button click
document.getElementById('fetchDataBtn').addEventListener('click', fetchData);
