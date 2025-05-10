/**
 * AutoFilter (https://github.com/GianlucaChiarani/AutoFilter)
 * @version 0.5
 * @author Gianluca Chiarani
 * @license The MIT License (MIT)
 */

(function ($) {
  $.autofilter = function (options) {
    const settings = $.extend(
      {
        showClass: "show",
        activeClass: "active",
        htmlAsFilter: false,
        subString: false,
        minChars: 3,
        caseSensitive: false,
        default: false,
        urlSearchParam: false,
        animation: true,
        duration: 0,
      },
      options
    );

    $(function () {
      let showAll = true;

      if (settings.default !== false) {
        $('[data-filter="' + settings.default + '"]').click();
        showAll = false;
      }

      if (settings.urlSearchParam) {
        const searchParams = new URLSearchParams(window.location.search);
        if (searchParams.has(settings.urlSearchParam)) {
          $(
            '[data-filter="' + searchParams.get(settings.urlSearchParam) + '"]'
          ).click();
          showAll = false;
        }
      }

      if (showAll)
        $("[data-tags],[data-to-filter]").each(function () {
          $(this).addClass(settings.showClass);
        });
    });

    $("[data-filter]:not(input)").click(function () {
      let filterValue = "";
      if (settings.htmlAsFilter) {
        filterValue = $(this).html().trim();
      } else {
        filterValue = $(this).attr("data-filter").trim();
      }

      if (filterValue != "") {
        applyFilter(filterValue);
      } else {
        $("[data-tags],[data-to-filter]").addClass(settings.showClass);

        if (settings.animation)
          $("[data-tags],[data-to-filter]").fadeIn(settings.duration);
      }

      $("[data-filter]:not(input)").removeClass(settings.activeClass);
      $(this).addClass(settings.activeClass);
    });

    $("input[data-filter]").keyup(function () {
      const value = $(this).val();
      settings.subString = true;

      if (value != "" && value.length >= settings.minChars) {
        applyFilter(value);
      } else {
        $("[data-tags],[data-to-filter]").addClass(settings.showClass);

        if (settings.animation)
          $("[data-tags],[data-to-filter]").fadeIn(settings.duration);
      }
    });

    function applyFilter(filterValue) {
      $("[data-tags],[data-to-filter]").each(function () {
        const tags = $(this).attr("data-tags");
        let tofilter = [];
        let valid = false;

        if (!settings.caseSensitive) filterValue = filterValue.toLowerCase();

        if (tags) {
          tofilter = tags.split(",");
        } else {
          tofilter.push($(this).html());
        }

        if (!settings.caseSensitive)
          tofilter = tofilter.map((v) => v.toLowerCase());

        if (settings.subString) {
          tofilter.forEach(function (toFilterOne) {
            if (
              toFilterOne.replace(/(&lt;([^>]+)>)/gi, "").indexOf(filterValue) >
              -1
            ) {
              valid = true;
            }
          });
        } else {
          valid = tofilter.includes(filterValue);
        }

        if (valid) {
          if (settings.animation) $(this).fadeIn(0);

          $(this).addClass(settings.showClass);
        } else {
          if (settings.animation) $(this).fadeOut(settings.duration);

          $(this).removeClass(settings.showClass);
        }
      });
    }
  };
})(jQuery);
