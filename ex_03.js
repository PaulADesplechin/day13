document.addEventListener('DOMContentLoaded', async () => {
    const quoteElement = document.getElementById('quote');

    try {
        const response = await fetch('https://api.example.com/quote');
        const data = await response.json();
        quoteElement.textContent = data.quote;
    } catch (error) {
        console.error('Erreur lors de la récupération de la citation:', error);
        quoteElement.textContent = 'Impossible de récupérer une citation.';
    }
});
