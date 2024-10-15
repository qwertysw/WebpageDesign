document.addEventListener('DOMContentLoaded', () => {
    const backgroundWords = ['Trade', 'Play', 'Collect', 'Cards', 'Rare', 'Vintage', 'TCG', 'Figurines', 'Comics'];
    const floatingBackground = document.getElementById('floatingBackground');
    const featuredItems = document.getElementById('featuredItems');
    const estYear = document.getElementById('estYear');

    // Create floating background
    for (let i = 0; i < 50; i++) {
        const word = document.createElement('div');
        word.className = 'floating-text';
        word.textContent = backgroundWords[i % backgroundWords.length];
        word.style.top = `${Math.random() * 100}%`;
        word.style.left = `${Math.random() * 100}%`;
        word.style.opacity = 0.05 + Math.random() * 0.1;
        word.style.animation = `float ${10 + Math.random() * 20}s ease-in-out infinite, rotate ${20 + Math.random() * 40}s linear infinite`;
        word.style.animationDelay = `${Math.random() * -20}s`;
        floatingBackground.appendChild(word);
    }

    // Create featured items
    const items = ['Rare Pokemon Card', 'Vintage Comic Book', 'Limited Edition Figurine'];
    items.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'featured-item';
        itemElement.innerHTML = `
            <h4>${item}</h4>
            <p class="text-sm text-gray-400 mb-4 font-light tracking-wider">Collector's item</p>
            <div class="item-image" data-letter="${item[0]}">
                <span class="item-number">${index + 1}</span>
            </div>
            <p class="text-xs font-light tracking-wide leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        `;
        featuredItems.appendChild(itemElement);
    });

    // Smooth scroll when Explore button is clicked
    const exploreBtn = document.querySelector('.explore-btn');
    exploreBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor link behavior
        featuredItems.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the Featured Items section
    });
});
