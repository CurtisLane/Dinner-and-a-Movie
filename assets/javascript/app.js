$(document).ready(function() {

    // These will be set to equal whichever api url is chosen by the user in the first and second drop down menus
    let dropdownLeft;
    let dropdownRight;

    let q = 'minecraft' // This will be set to the search input value on click
    let limit;
    
    const yt_api_key = 'AIzaSyDYbQo18NZbT_zT_wAfv3BjU1o1ziUWMRs'; // Api key from youtube
    const redditPublicKey = 'NOoIuGKYf3u77g'
    const redditSecretKey = 'Gr-4X_j_oawud4UJL8lyHyA8mPc'
    

    // Search URL from YouTube API
    let yt_url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=' + q + '&key=' + yt_api_key;
    
    // Reddit URL
    let reddit_url = ''

    // Wikipedia URL
    let wiki_url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + q + '&format=json&origin=*'
    
    // Ajax function to test the query urls

    $.ajax({
        url: wiki_url, // Currently testing Wikipedia URL
        method: "GET"
    }).then(function (response) {

        console.log(response);
    }); // *Close ajax .then function

}); // *Close document ready function
