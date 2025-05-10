# AutoFilter

AutoFilter is a lightweight and easy-to-use jQuery plugin that lets you filter any HTML element by tags or input values. It is highly customizable and requires minimal setup.

[Demo: Filter by tag](https://codepen.io/GianlucaChiarani/pen/OJWYByX) | [Demo: Filter by input](https://codepen.io/GianlucaChiarani/pen/ExZzMYx)

---

## Features

- Filter elements by tags or input text
- Simple integration with data attributes
- Customizable options for case sensitivity, animation, and more
- Supports both tag-based and input-based filtering
- Lightweight and dependency-free (except for jQuery)

---

## Installation

### CDN

```html
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/gh/GianlucaChiarani/AutoFilter@0.5/autofilter.js"
></script>
```

---

## Basic Usage

Initialize the plugin after including jQuery and the script:

```js
$(function () {
  $.autofilter();
});
```

---

## Usage Modes

### 1. Tags Mode

Set the filter tag in the `data-filter` attribute:

```html
<ul>
  <li data-filter>All</li>
  <li data-filter="cat">Cats</li>
  <li data-filter="dog">Dogs</li>
  <li data-filter="monkey">Monkeys</li>
</ul>
```

Assign one or more tags (comma-separated) to the elements you want to filter using the `data-tags` attribute:

```html
<div>
  <div data-tags="dog,cat"></div>
  <div data-tags="dog"></div>
  <div data-tags="cat,monkey"></div>
  <div data-tags="monkey"></div>
</div>
```

### 2. Input Mode

Add the `data-filter` attribute to your input element:

```html
<input type="text" data-filter />
```

Add the `data-to-filter` attribute to the elements you want to filter by their content:

```html
<div>
  <div data-to-filter>dog,cat</div>
  <div data-to-filter>dog</div>
  <div data-to-filter>cat</div>
  <div data-to-filter>monkey</div>
</div>
```

---

## Options

You can pass options when initializing the plugin:

```js
$(function () {
  $.autofilter({
    caseSensitive: true,
  });
});
```

| Option         | Type    | Default  | Description                                                                |
| -------------- | ------- | -------- | -------------------------------------------------------------------------- |
| showClass      | String  | 'show'   | The class applied to the filtered elements.                                |
| activeClass    | String  | 'active' | The class applied to the active filter trigger element.                    |
| htmlAsFilter   | Boolean | false    | Use the text in the filter trigger element as the filter string.           |
| subString      | Boolean | false    | Search for the filter string as a substring (always `true` in input mode). |
| minChars       | Integer | 3        | Minimum characters to start filtering in input mode.                       |
| caseSensitive  | Boolean | false    | Enable case-sensitive filtering.                                           |
| default        | String  | ''       | Default filter on page load. Must match a `data-filter` attribute value.   |
| urlSearchParam | String  | ''       | Name of the query parameter used to filter.                                |
| animation      | Boolean | true     | Enable fade-in animation.                                                  |
| duration       | Integer | 0        | Duration of the fade animation (ms).                                       |

---

## License

MIT
