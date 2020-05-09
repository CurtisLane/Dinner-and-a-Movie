<<<<<<< Updated upstream
=======
$( document ).ready(function() {
    console.log( "ready!" );

    // These will be set to equal whichever api url is chosen by the user in the first and second drop down menus
    let firstDropdownUrl;
    let secondDropdownUrl;

    let q = 'minecraft' // This will be set to the search input value on click

    const yt_api_key = AIzaSyDYbQo18NZbT_zT_wAfv3BjU1o1ziUWMRs;

    let yt_url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=' + q + '&key=' + yt_api_key

    // Ajax function to test the query urls


    $.ajax({
        url: yt_url,
        method: "GET"
    }).then(function (response) {

        console.log(response);
    })

});
>>>>>>> Stashed changes
