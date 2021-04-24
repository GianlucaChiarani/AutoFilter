# AutoFilter
An easy-to-use jQuery plugin that allow you to filter any HTML element by tags or input value.

## Installation
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/GianlucaChiarani/AutoFilter@1.0/autofilter.js"></script>
```
## Get started
### Tags mode
```
<ul>
  <li data-filter="">All</li>
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
