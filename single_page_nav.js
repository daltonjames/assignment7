/* 
 *  Dalton James
 *  Dalton_James@student.uml.edu
 *  
 *  File: single_page_nav.js
 *  
 *  Will create the dynamic content for the html page
 *  using partial html files
 */

$(document).ready(function () {

    // Updates dynamic content based on the fragment identifier.
    function navigate() {

        // Isolate the fragment identifier using substr.
        // This gets rid of the "#" character.
        var fragmentId = location.hash.substr(1);

        //loads partial html fragment and inserts into the DOM,
        //jQuery.load also does its own caching
        $("#content").empty().load(fragmentId + ".html");

    }

    // If no fragment identifier is provided,
    if (!location.hash) {

        // default to #home.
        location.hash = "#home";
    }

    // Navigate once to the initial fragment identifier.
    navigate();

    // Navigate whenever the fragment identifier value changes.
    $(window).bind('hashchange', navigate);

}); //end of $(document).ready
