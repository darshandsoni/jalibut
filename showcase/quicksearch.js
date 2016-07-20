var i;
var content = "";

obj = inputstream[0].boats;

for (i=0;i < obj.length; i++) {
  name = obj[i].name;
  image = obj[i].image;
  description = obj[i].description;
  link = obj[i].link;

  content+= "<div class='searchable-item card'>" + "<h3>" + name + "</h3><br><a target='_blank' href='" + link + "'>" + "<img src='" + image + "'></a>" + "<br><br>" + description + "</div>";
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
