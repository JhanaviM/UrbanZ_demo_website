document.getElementById('tryOnForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const personImage = document.getElementById('personImage').files[0];
    const clothImage = document.getElementById('clothImage').files[0];

    if (!personImage || !clothImage) {
        alert('Please select both images.');
        return;
    }

    const url = 'https://virtual-try-on2.p.rapidapi.com/clothes-virtual-tryon';
    const data = new FormData();
    data.append('personImage', personImage);
    data.append('clothImage', clothImage);

    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '7627bdaf38msh0be2184f475adf6p196f8ajsnc5a6e0aff16e',  // Replace with your RapidAPI key
            'x-rapidapi-host': 'virtual-try-on2.p.rapidapi.com'
        },
        body: data
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log('API Response:', result); // Debugging step to confirm the response structure

        if (result.success && result.response && result.response.ouput_path_img) {
            const imageUrl = result.response.ouput_path_img;
            console.log(imageUrl);
            displayImage(imageUrl);
        } else {
            
            alert(result.message || 'An error occurred. Please try again.');
        }
    } catch (error) {
        console.error('Fetch Error:', error);
        alert('An error occurred. Please try again.');
    }
});

function displayImage(imageUrl) {
    const resultImage = document.getElementById('resultImage');
    resultImage.src = imageUrl;
    resultImage.style.display = 'block';
}







