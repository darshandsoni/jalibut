var i;
var content = "";

obj = JSON.parse(inputstream);

for(i=0;i < obj.boats.length; i++){
  content+= "<div class='searchable-item card'>" + "<h3>" + obj.boats[i].name + "</h3>" + "<br>" + "<h4>" + obj.boats[i].something + "</h4>" + "<br>" + obj.boats[i].somethingelse + "<br>" + obj.boats[i].alsosomething + "<br>" + obj.boats[i].description + "</div>";
}

document.getElementById("content").innerHTML =  content

// quick search regex
var qsRegex;

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.searchable-item',
  layoutMode: 'masonry',
  filter: function() {
    return qsRegex ? $(this).text().match( qsRegex ) : true;
  }
});

// use value of search field to filter
var $quicksearch = $('.quicksearch').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  $grid.isotope();
}, 200 ) );

// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  return function debounced() {
    if ( timeout ) {
      clearTimeout( timeout );
    }
    function delayed() {
      fn();
      timeout = null;
    }
    timeout = setTimeout( delayed, threshold || 100 );
  }
}
