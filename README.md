# AutoFilter
An easy-to-use jQuery plugin that allows to filter any HTML element by tags or input value.

DEMO1: Filter by tag
DEMO2: Filter by input

## Installation
### CDN
```
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/GianlucaChiarani/AutoFilter@1.0/autofilter.js"></script>
```
## Basic usage
Initialize the plugin.
```
$(function($) {
    $.autofilter();
});
```
### Tags mode
```
<ul>
  <li data-filter="all">All</li>
  <li data-filter="cat">Cats</li>
  <li data-filter="dog">Dogs</li>
  <li data-filter="monkey">Monkeys</li>
</ul>
```
```
<div>
  <div data-tags="dog,cat"></div>
  <div data-tags="dog"></div>
  <div data-tags="cat,monkey"></div>
  <div data-tags="monkey"></div>
</div>
```
### Input mode
```
<input type="text" data-filter />
```
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
| htmlAsFilter  | `String`  | `false`  | Use the HTML in the filter trigger element as filter string. |
| subString  | `String`  | `false`  | Enable filtering of filter string as a substring. Default mode with the attribute `data-to-filter` |
| caseSensitive  | `Bool`  | `false`  | Enable the case sensitive mode. |
| animation  | `Bool`  | `true`  | Enable the fade animation. |
| duration  | `Integer`  | `0`  | Duration of the fade animation. |
