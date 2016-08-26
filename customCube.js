// if user clicks within viewport 
 $(document).ready(function() {
    $(".container").mousedown(function(){
// remove class spinning 
        $('.cube').removeClass('spinning');
    }); 
   
     
    
  


/*var callback = function() {
    $('.cube').removeClass('spinning');
};

$(document).keypress(function() {
    if (event.which == 37) {
        callback();
    }
    else if (event.which == 38) {
        callback();
    }
    else if (event.which == 39) {
        callback();
    }
    else if (event.which == 40) {
        callback();
    }
    else if (event.which == 27) {
        callback();
    }
});

$('".container"').click(callback);

// run cube.js 

// if user lifts mouse or key press add class of spinning
*/
}); 