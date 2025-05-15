document.addEventListener("DOMContentLoaded", function () {
    const newsFeed = document.getElementById("news-feed");

    // News Data
    const newsData = [
        { 
            date: "2025.05.15", 
            text: "We're happy to unveil the Inazuma Eleven Victory Road Countdown.", 
            link: "https://inazuma-eleven.fr/countdown/"
        },
        { 
            date: "2025.05.12", 
            text: "We've fixed several issues with Inazuma Eleven team Builder. Bringing back new menu UI.", 
            link: "https://inazuma-eleven.fr/team-builder/"
        },
        { 
            date: "2025.04.26", 
            text: "The Inazuma X archive is live! A dream that never faded... Now archived forever.", 
            link: "https://inazuma-eleven.fr/archive/inazumax/"
        },
        { 
            date: "2025.03.13", 
            text: "The issue with the 4-3-3 (F Free March) formation has been fixed.", 
            link: "https://inazuma-eleven.fr/team-builder/"
        },
        { 
            date: "2025.03.12", 
            text: "We're excited to announce the Steam version of Inazuma Eleven team Builder!", 
            link: "https://store.steampowered.com/app/3582320/Inazuma_Eleven_Team_Builder/"
        },
        { 
            date: "2025.02.02", 
            text: "Inazuma Adventure is now LIVE for everyone! Enjoy our first mini-game collecting various players!", 
            link: "https://discord.gg/own-studio-694607968486031370"
        },
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
