$(document).ready(function() {
    console.log('Ready!')

    let leftCol = $('#leftCol')
    let rightCol = $('#rightCol')

    // Define dayOrWeek based on user choice from dropdown
    let dayOrWeek;
    $('.dropdown-item').on('click', function(){
        dayOrWeek = $(this).text()
    })

    // Listen for click on search button
    $('#searchButton').on('click', function(event){
        event.preventDefault()

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
            console.log(response)

            let results = response.hits
            for (i=0; i<results.length; i++) {
                let recipeDiv = $('<div>')
                let recipeLink = $('<a>')
                let recipeImg = $('<img>')
                let recipeP = $('<p>')
                recipeP.addClass('pt-2 text-light')
                recipeP.text(results[i].recipe.label)
                recipeDiv.addClass('mt-4 px-3 pt-3 bg-dark rounded')
                recipeLink.attr('href', results[i].recipe.url) // Needs URL from api
                recipeLink.attr('target', '_blank')
                recipeImg.attr('src', results[i].recipe.image)
                recipeImg.addClass('img-fluid rounded recipe_img')
                recipeLink.append(recipeImg, recipeP)
                recipeDiv.append(recipeLink)
                leftCol.append(recipeDiv)

            }
        })

        // The Movie DB(database) API for movie lookup by collection
        const tmdb_api_key = 'b673088700e4fa8381c8b35441340dea'
        let tmdb_URL = 'https://api.themoviedb.org/3/trending/movie/' + dayOrWeek + '?api_key=' + tmdb_api_key
        let tmdb_img_base_URL = 'https://image.tmdb.org/t/p/w500'
        // ajax query for TmDB
        $.ajax({
            url: tmdb_URL,
            method: 'GET'
        }).then(function(response){
            console.log(response)

            let results = response.results
            for (i = 0; i<10; i++) {
                let movieDiv = $('<div>')
                let movieLink = $('<a>')
                let movieImg = $('<img>')
                movieDiv.addClass('bg-dark mt-4 rounded')
                movieLink.attr('href', 'http://www.google.com/search?q=' + results[i].title) // Needs url to google search movie title from api
                movieLink.attr('target', '_blank')
                movieImg.attr('src', tmdb_img_base_URL + results[i].poster_path)
                movieImg.addClass('img-fluid rounded py-3')
                movieLink.append(movieImg)
                movieDiv.append(movieLink)
                rightCol.append(movieDiv)
            }
        })

    }) // *Close search button click listener

}); // *Close document ready function
