async function shortenUrl() {
  const longUrl = document.getElementById('longUrl').value.trim();
  const resultDiv = document.getElementById('result');
  const shortUrlAnchor = document.getElementById('shortUrl');

  if (longUrl === '') {
    alert('Please enter a valid URL.');
    return;
  }

  try {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`);
    const data = await response.json();

    if (data.ok) {
      const shortUrl = data.result.full_short_link;
      shortUrlAnchor.href = shortUrl;
      shortUrlAnchor.textContent = shortUrl;
      resultDiv.classList.remove('hidden');
    } else {
      alert('Error: Could not shorten URL.');
    }
  } catch (error) {
    alert('Failed to fetch short URL. Please try again later.');
    console.error(error);
  }
}