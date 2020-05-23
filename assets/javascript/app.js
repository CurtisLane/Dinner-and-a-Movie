$(document).ready(function() {

    // Global variables for dom manipulation
    let leftCol = $('#leftCol')
    let rightCol = $('#rightCol')

    // Define dayOrWeek based on user choice from dropdown
    let dayOrWeek;
    $('.dropdown-item').on('click', function(){
        dayOrWeek = $(this).text()
    })

    // Input Validation
    $('#searchInput').on('change paste keyup', function(){
        if ($(this).val().length < 2){
            $('#validation').text('Search must be at least 2 characters')
            $( "#searchButton" ).prop( "disabled", true );
        } else {
            $('#validation').empty()
            $( "#searchButton" ).prop( "disabled", false );
        }
    })

    // Listen for click on search button
    $('#searchButton').on('click', function(){
        event.preventDefault()

        // Remove content from display divs on search
        leftCol.empty()
        rightCol.empty()

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
            
            // Log response, create variable for 'hits' array
            let results = response.hits

            // Loop over results array
            for (i=0; i<results.length; i++) {
                
                // Generate html elements
                let recipeDiv = $('<div>')
                let recipeLink = $('<a>')
                let recipeImg = $('<img>')
                let recipeP = $('<p>')
                
                // Add attributes to html elements
                recipeDiv.attr('data-aos', 'fade-right')
                recipeP.addClass('py-2 text-light')
                recipeP.text(results[i].recipe.label)
                recipeDiv.addClass('mt-4 px-3 pt-3 bg-dark rounded')
                recipeLink.attr('href', results[i].recipe.url) // Needs URL from api
                recipeLink.attr('target', '_blank')
                recipeImg.attr('src', results[i].recipe.image)
                recipeImg.addClass('img-fluid rounded recipe_img')
                
                // Add generated elements to the dom
                recipeLink.append(recipeImg, recipeP)
                recipeDiv.append(recipeLink)
                leftCol.append(recipeDiv)

            } // *Close for loop

        }) // *Close .then function for Edamam ajax

        // The Movie database (TMDB) API for movie lookup by collection
        const tmdb_api_key = 'b673088700e4fa8381c8b35441340dea'
        let tmdb_URL = 'https://api.themoviedb.org/3/trending/movie/' + dayOrWeek + '?api_key=' + tmdb_api_key
        let tmdb_img_base_URL = 'https://image.tmdb.org/t/p/w500'
        
        // ajax query for TMDB
        $.ajax({
            url: tmdb_URL,
            method: 'GET'
        }).then(function(response){

            // Log respons, make variable for results array
            let results = response.results

            // Loop over the results array
            for (i = 0; i<10; i++) {

                // Generate html elements
                let movieDiv = $('<div>')
                let movieLink = $('<a>')
                let movieImg = $('<img>')

                // Add attributes to html elements
                movieDiv.attr('data-aos', 'fade-left')
                movieDiv.addClass('bg-dark mt-4 rounded')
                movieLink.attr('href', 'http://www.google.com/search?q=' + results[i].title) // Needs url to google search movie title from api
                movieLink.attr('target', '_blank')
                movieImg.attr('src', tmdb_img_base_URL + results[i].poster_path)
                movieImg.addClass('img-fluid rounded py-3')

                // Add html elements to the dom
                movieLink.append(movieImg)
                movieDiv.append(movieLink)
                rightCol.append(movieDiv)

            } // *Close for loop

        }) // *Close .then function for TMDB ajax

    }) // *Close search button click listener

}); // *Close document ready function
