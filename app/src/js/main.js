(function(){

    function submitForm(){
        $('#location-field').keypress(function(e) {
            //13 maps to the enter key
            if ((e.keyCode == 13) && ($(this).val() !== null)){
                 $( "#search-form" ).submit();
            }
        });
    }

    function filterLocation(){
        var locations = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace(''),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            remote: {
                url: 'http://gd.geobytes.com/AutoCompleteCity?callback=?&filter=DE&q=%QUERY',
                wildcard: '%QUERY'
            }
        });
 
        $('#location-field').typeahead(null, {
            name: 'locations',
            display: '',
            source: locations
        });
    }

    function displayDropdown(){
        var $items = $('.categories-dropdown');
            $('.anchor').click(function () {
                $items.toggleClass('invisible');
            });

        $items.blur(function() {
            items.removeClass('invisible');
        });
    }

    return {
        filterLocation: filterLocation(),
        displayDropdown: displayDropdown(),
        submitForm: submitForm()
    };
 
})();
