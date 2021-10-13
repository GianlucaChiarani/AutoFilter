/**
 * AutoFilter (https://github.com/GianlucaChiarani/AutoFilter)
 * @version 0.3
 * @author Gianluca Chiarani
 * @license The MIT License (MIT)
 */

(function ($) {
    
    $.autofilter = function( options ) {

        var settings = $.extend({
            showClass: 'show',
            htmlAsFilter: false,
            subString: false,
            minChars: 3,
            caseSensitive: false,
            animation: true,
            duration: 0
        }, options );

        $('[data-filter]:not(input)').click(function() {
            if (settings.htmlAsFilter) {
                var filterValue = $(this).html().trim();
            } else {
                var filterValue = $(this).attr('data-filter').trim();
            }

            if (filterValue!='')
                af_filter(filterValue);
            else
                $('[data-tags],[data-to-filter]').fadeIn(settings.duration).addClass(settings.showClass);
        });

        $('input[data-filter]').keyup(function() {
            var value = $(this).val();
            settings.subString = true;

            if (value!='' && value.length>=settings.minChars) {
                af_filter(value);
            } else {
                $('[data-tags],[data-to-filter]').fadeIn(settings.duration).addClass(settings.showClass);
            }

        });

        function af_filter(filterValue) {
            $('[data-tags],[data-to-filter]').each(function() {
                var tags = $(this).attr('data-tags');
                var tofilter = Array();
                var valid = false;
                
                if (!settings.caseSensitive) 
                    filterValue = filterValue.toLowerCase();

                if (tags) {
                    tofilter = tags.split(',');
                } else {
                    tofilter.push($(this).html());
                }

                if (!settings.caseSensitive) 
                    tofilter = tofilter.map(v => v.toLowerCase());

                if (settings.subString) {
                    tofilter.forEach(function(toFilterOne) {
                        if (toFilterOne.replace(/(&lt;([^>]+)>)/gi, "").indexOf(filterValue) > -1) {
                            valid = true;
                        }
                    });
                } else {
                    valid = tofilter.includes(filterValue);
                }

                if (valid) {
                    if (settings.animation)
                        $(this).fadeIn(0);
                    
                    $(this).addClass(settings.showClass);
                } else {
                    if (settings.animation)
                        $(this).fadeOut(settings.duration);
                    
                    $(this).removeClass(settings.showClass);
                }

            });
        }
 
    };

}(jQuery));
