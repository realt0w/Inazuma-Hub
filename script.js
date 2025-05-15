document.addEventListener("DOMContentLoaded", function () {
    const newsFeed = document.getElementById("news-feed");

    // News Data
    const newsData = [
        { 
            date: "2024.01.30", 
            text: "We're thrilled to unveil the first version of Inazuma Eleven Randomizer.", 
            link: "https://inazuma-eleven.fr/randomizer/"
        },
        { 
            date: "2023.08.04", 
            text: "We have launched early access to Inazuma TV + discover season 1 (French) while testing our new platform. <b>Thank you to everyone who will test Inazuma TV + to help us improve it before the international launch.</b>", 
            link: "https://inazuma-eleven.fr/tv/"
        },
    ];

    // Populate News Feed
    newsData.forEach(news => {
        let newsItem = document.createElement("div");
        newsItem.classList.add("news-item");
        newsItem.innerHTML = `
            <div class="date">${news.date}</div>
            <p>${news.text} <a href="${news.link}" class="see-more">See more</a></p>
        `;
        newsFeed.appendChild(newsItem);
    });
});
