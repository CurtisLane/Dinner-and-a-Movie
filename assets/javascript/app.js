$(document).ready(function() {
    console.log('Ready!')

    // Define dayOrWeek based on user choice from dropdown
    let dayOrWeek;
    $('.dropdown-item').on('click', function(){
        dayOrWeek = $(this).text()
    })

    // Listen for click on search button
    $('#searchButton').on('click', function(){

        // Edamam API for recipe lookup
        const app_id = 'bfdf4f3e'
        const app_key = 'd3d66f2575260072a0894f4e9797d55a'
        let q = $('#searchInput').val().trim() // Will contain search input from idex.html
        let edamam_URL = 'https://api.edamam.com/search?q=' + q + '&app_id='+ app_id +'&app_key='+ app_key
        
        // ajax query for Edamam API
        $.ajax({
            url: edamam_URL,
            method: 'GET'
        }).then(function(response){
            console.log(response)
        })

        // The Movie DB(database) API for movie lookup by collection
        const tmdb_api_key = 'b673088700e4fa8381c8b35441340dea'
        let tmdb_URL = 'https://api.themoviedb.org/3/trending/movie/' + dayOrWeek + '?api_key=' + tmdb_api_key

        // ajax query for TmDB
        $.ajax({
            url: tmdb_URL,
            method: 'GET'
        }).then(function(response){
            console.log(response)
        })

    }) // *Close search button click listener

}); // *Close document ready function
