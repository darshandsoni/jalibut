# Jalibut

Jalibut is an open-source "search ahead" based directory that can be used to showcase any collection of entities. Try out the demo [here](https://darshandsoni.com/jalibut/).

![](https://cloud.githubusercontent.com/assets/9295750/16912407/b9c3fa60-4c98-11e6-81bb-215f6ae056e0.gif)

## Why?

Jalibut stems from the need to live search collections of entities. It could be anything: repositories, projects, cars, specimens... the list is endless. Jalibut provides a simple platform to elegantly showcase collections and live search them with nothing more than clean CSS, a JSON directory and some JavaScript to search it.

## Usage

Jalibut is just a framework to help you quickly get started with showcasing a collection. Use it as is, or build on it to make your content more accessible.

You can see a gallery of projects that have used Jalibut on the [showcase](https://darshandsoni.com/jalibut/showcase/) page. If you would like to add your project to the list, just submit a PR with the relevant info.

### Regex

Jalibut supports regex right out of the box. Simply use regex in the search bar and it will filter. Note that because of live search, you may get nonsensical (or even no results) as you're typing but the correct result should render once you have finished the expression. 
A basic example? Try typing in "pattamar|deep" and see what happens. 

If you're not sure what regex is, it's worth having a read about it [here](https://en.wikipedia.org/wiki/Regular_expression). You can also test and learn about using regex on [Portable Regex](http://dohliam.github.io/regex/).

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
### Importing

You can import your data into Jalibut using the online [Jalibut Data Format Conversion Tool](https://darshandsoni.com/jalibut/converter/), which converts data in a variety of formats into Jalibut JSON objects. Just paste your data (separated by tabs, commas, or other separators) into the textbox and click on the _Format for Jalibut_ button. There is an option to pre-fill the data entry box with sample data to see how the converter works.

The converter can auto-detect header rows in your data. Just select the _Header row_ radio button above the textbox. By default auto-detection is off, in which case rows are numerically labelled as a sequence of fields.

For example, given the following tab-separated data:

    name	image	description
    Name	image.jpg	Description

With the _Header row_ option, the converter will produce the following result:

```json
var inputstream = [{
    "name": "Name",
    "image": "image.jpg",
    "description": "Description"
}];
```

The same data (without the header row):

    Name	image.jpg	Description

With the _Header row_ option turned off, this will give the following result:

```json
var inputstream = [{
    "field1": "Name",
    "field2": "image.jpg",
    "field3": "Description"
}];
```

This JSON can be pasted directly into `objects.js` in your Jalibut folder. Note: If search is not working after replacing `objects.js`, make sure that you have updated the variable names in `quicksearch.js` to match the header names in your data (by default these are set to **name**, **image**, and **description**.)

## Browser Support
> Note: The list below is not exhaustive and serves only as a guideline. Please submit a pull request to update the list.

 | Browser | Support
---|---|---
![](https://github.com/icefox/arora/blob/master/src/data/32x32/arora.png) | Arora (v0.11.0) | ![](https://img.shields.io/badge/-Compatible-green.svg)
![](https://github.com/alrra/browser-logos/blob/master/chromium/chromium_24x24.png) | Chromium (v50.0) | ![](https://img.shields.io/badge/-Compatible-green.svg)
![](https://github.com/alrra/browser-logos/blob/master/firefox/firefox_24x24.png) | Firefox (v46.0.1) | ![](https://img.shields.io/badge/-Compatible-green.svg)
![](https://github.com/alrra/browser-logos/blob/master/chrome/chrome_24x24.png) | Google Chrome (v49.0) | ![](https://img.shields.io/badge/-Compatible-green.svg)
![](https://github.com/alrra/browser-logos/blob/master/konqueror/konqueror_24x24.png) | Konqueror (v4.14.16+) | ![](https://img.shields.io/badge/-Compatible-green.svg)
![](https://github.com/alrra/browser-logos/blob/master/midori/midori_24x24.png) | Midori (v0.4.3) | ![](https://img.shields.io/badge/-Compatible-green.svg)
![](https://github.com/alrra/browser-logos/blob/master/qupzilla/qupzilla_24x24.png) | QupZilla (v1.6.0) | ![](https://img.shields.io/badge/-Compatible-green.svg)
![](https://github.com/alrra/browser-logos/blob/master/rekonq/rekonq_24x24.png) | rekonq (v2.4.2) | ![](https://img.shields.io/badge/-Compatible-green.svg)
![](https://github.com/alrra/browser-logos/blob/master/android/android_24x24.png) | Stock Android (v4.3.1) | ![](https://img.shields.io/badge/-Compatible-green.svg)
![](https://github.com/alrra/browser-logos/blob/master/opera/opera_24x24.png) | Opera (v30.0) | ![](https://img.shields.io/badge/-Not%20Compatible-red.svg)
![](https://github.com/alrra/browser-logos/blob/master/dillo/dillo_24x24.png) | Dillo (v3.0.3) | ![](https://img.shields.io/badge/-Not%20Compatible-red.svg)
![](https://github.com/alrra/browser-logos/blob/master/edge/edge_24x24.png) | Edge | ![](https://img.shields.io/badge/-Not%20Yet%20Tested-lightgrey.svg)
![](https://github.com/alrra/browser-logos/blob/master/safari/safari_24x24.png) | Safari (MacOS and iOS) | ![](https://img.shields.io/badge/-Compatible-green.svg)



## Credits

* [Alrra](https://github.com/alrra/browser-logos) for providing browser logos.
* [Isotope](http://isotope.metafizzy.co/) for their highly configurable layouts.

## Licence

MIT. See [Licence file](https://github.com/darshandsoni/jalibut/blob/gh-pages/LICENSE) for details.
