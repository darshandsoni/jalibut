# Jalibut

Jalibut is an open-source "search ahead" based directory that can be used to showcase any collection of entities. Try out the demo [here](https://darshandsoni.com/jalibut/).

## Why?

Jalibut stems from the need to live search collections of entities. It could be anything: repositories, projects, cars, specimens... the list is endless. Jalibut provides a simple platform to elegantly showcase collections and live search them with nothing more than clean CSS, a JSON directory and some JavaScript to search it.

## Usage

Jalibut is just a framework to help you quickly get started with showcasing a collection. Use it as is or build on it to make your content more accessible.

## Data

All searchable data is stored as a JSON array in the file `objects.js`. Three example attributes (`name`, `image`, and `description`) are provided to make it easy to get started:

```JSON
"name": "Dhow",
"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Dhow_znz.jpg/300px-Dhow_znz.jpg",
"description": "A heavy ship, the traditional deep-sea dhow."
```

You can add your own data by simply replacing the values for `name`, `image`, and `description` with your own. If you want to add more kinds of data, that's easy too: just add the new data pairs to `objects.js` and adjust the following html template in `quicksearch.js` to your liking:

```javascript
content+= "<div class='searchable-item card'>" + "<h3>" + name + "</h3>" + "<br>" + "<img src='" + image + "'>" + "<br>" + description + "</div>";
```

## Credits

* [Isotope](http://isotope.metafizzy.co/) for their highly configurable layouts.

## Licence

MIT.
