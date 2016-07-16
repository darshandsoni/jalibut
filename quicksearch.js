var i;
var content = "";

obj = inputstream[0].boats;

for(i=0;i < obj.length; i++){
  content+= "<div class='searchable-item card'>" + "<h3>" + obj[i].name + "</h3>" + "<br>" + "<img src='" + obj[i].image + "'>" + "<br>" + obj[i].description + "</div>";
}

document.getElementById("content").innerHTML =  content

// quick search regex
var qsRegex;

// init Isotope
var grid = document.querySelector('.grid');
var iso = new Isotope( grid, {
  itemSelector: '.searchable-item',
  layoutMode: 'masonry'
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
