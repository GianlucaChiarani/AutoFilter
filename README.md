# AutoFilter
An easy-to-use jQuery plugin that allows to filter any HTML element by tags or input value.

## Installation
### CDN
```
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/GianlucaChiarani/AutoFilter@1.0/autofilter.js"></script>
```
## Get started
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
  <li data-filter="Cat">Cats</li>
  <li data-filter="Dog">Dogs</li>
  <li data-filter="Monkey">Monkeys</li>
</ul>
```
```
<div>
  <div data-tags="dog,cat"><img src="" /></div>
  <div data-tags="dog"><img src="" /></div>
  <div data-tags="cat"><img src="" /></div>
  <div data-tags="monkey"><img src="" /></div>
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
| showClass  | `String`  | `'show'` | |
| htmlAsTag  | `String`  | `false`  | |
| subString  | `String`  | `false`  |  |
| caseSensitive  | `Bool`  | `false`  |  |
| animation  | `Bool`  | `true`  | |
| duration  | `Integer`  | `0`  | |
