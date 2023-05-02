# AutoFilter
An easy-to-use jQuery plugin that allows you to filter any HTML element by tags or an input value.

EXAMPLE 1: [Filter by tag](https://codepen.io/GianlucaChiarani/pen/OJWYByX) - EXAMPLE 2: [Filter by input](https://codepen.io/GianlucaChiarani/pen/ExZzMYx)

## Installation
### CDN
```
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/GianlucaChiarani/AutoFilter@0.4.1/autofilter.js"></script>
```
## Basic usage
Initialize the plugin.
```
$(function($) {
    $.autofilter();
});
```
### Tags mode
Set the filter tag in the `data-filter` attribute.
```
<ul>
  <li data-filter>All</li>
  <li data-filter="cat">Cats</li>
  <li data-filter="dog">Dogs</li>
  <li data-filter="monkey">Monkeys</li>
</ul>
```
Set one or more tags separated by comma in the `data-tags` attribute.
```
<div>
  <div data-tags="dog,cat"></div>
  <div data-tags="dog"></div>
  <div data-tags="cat,monkey"></div>
  <div data-tags="monkey"></div>
</div>
```
### Input mode
Add the `data-filter` attribute on the filter input.
```
<input type="text" data-filter />
```
Add the `data-to-filter` attribute on the elements to filter by theirs content.
```
<div>
    <div data-to-filter>dog,cat</div>
    <div data-to-filter>dog</div>
    <div data-to-filter>cat</div>
    <div data-to-filter>monkey</div>
</div>
```
## Options
```
$(function($) {
    $.autofilter({
      caseSensitive: true
    });
});
```
| Name  | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| showClass  | `String`  | `'show'` | The class applied to the filtered elements. |
| htmlAsFilter  | `Bool`  | `false`  | Sets the text in the filter trigger element as filter string. |
| subString  | `Bool`  | `false`  | Searches for the string to filter as a substring. Always `true` in input mode. |
| minChars  | `Integer`  | `3`  | Minimum characters to start filter in input mode. |
| caseSensitive  | `Bool` | `false`  | Enables the case sensitive mode. |
| default  | `String`  | `''` | Default filter on page load. This value must match the `data-filter` attribute value of a filter trigger element. |
| urlSearchParam  | `String`  | `''` | Name of the query parameter used to filter. |
| animation  | `Bool`  | `true`  | Enables the fade-in animation. |
| duration  | `Integer`  | `0`  | Duration of the fade animation. |
