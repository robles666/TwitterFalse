let tweets = [];

function postTweet() {
    const tweetInput = document.getElementById('tweetInput');
    const tweetText = tweetInput.value.trim();

    if (tweetText !== '') {
        const tweet = {
            text: tweetText,
            timestamp: new Date()
        };

        tweets.unshift(tweet);
        tweetInput.value = '';
        displayTweets();
    }
}

function displayTweets() {
    const tweetFeed = document.getElementById('tweetFeed');
    tweetFeed.innerHTML = '';

    tweets.forEach(tweet => {
        const tweetDiv = document.createElement('div');
        tweetDiv.classList.add('tweet-item');
        tweetDiv.innerHTML = `
            <p>${tweet.text}</p>
            <small>${formatDate(tweet.timestamp)}</small>
        `;
        tweetFeed.appendChild(tweetDiv);
    });
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}
