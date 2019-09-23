var i;
var content = "";

obj = inputstream;

for(i=0;i < obj.length; i++){
  name = obj[i].name;
  image = obj[i].image;
  description = obj[i].description;

  content+= "<div class='searchable-item card'>" + "<h3>" + name + "</h3>" + "<br>" + "<img src='" + image + "'>" + "<br>" + description + "</div>";
}

document.getElementById("content").innerHTML =  content

// quick search regex
var qsRegex;

// init Isotope
var grid = document.querySelector('.grid');
var iso;

imagesLoaded( grid, function() {
  // init Isotope after all images have loaded
  iso = new Isotope( grid, {
    itemSelector: '.searchable-item',
    percentPosition: true,
    layoutMode: 'masonry'
  });
});

// use value of search field to filter
var quicksearch = document.getElementsByClassName("quicksearch")[0];
quicksearch.onkeyup = function() {
  qsRegex = new RegExp( quicksearch.value, 'gi' );
  filterValue = function( itemElem ) {
    var name = itemElem.textContent;
    return name.match(qsRegex);
  }
  iso.arrange({ filter: filterValue });
}
