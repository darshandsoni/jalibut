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
