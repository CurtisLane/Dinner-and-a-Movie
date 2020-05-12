$(document).ready(function() {
    console.log('Ready!')

    // Edamam API for recipe lookup
    const app_id = 'bfdf4f3e'
    const app_key = 'd3d66f2575260072a0894f4e9797d55a'
    let q = 'chicken' // Will contain search input from idex.html
    
    let edamam_URL = 'https://api.edamam.com/search?q=' + q + '&app_id='+ app_id +'&app_key='+ app_key
    
    // ajax query for Edamam API
    $.ajax({
        url: edamam_URL,
        method: 'GET'
    }).then(function(response){
        console.log(response)
    })

}); // *Close document ready function
