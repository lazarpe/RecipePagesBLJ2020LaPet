  $(function() {
    $('.serving').bind('keyup', function(event) {
        var previousValue = parseFloat($("#previousServing").val());
        var newValue = parseFloat($(event.target).val());
        if (previousValue && newValue) {
            $('.ingredient').each(function(index, elem) {
                var ingredientNow = $('.amount', elem);
                var oldIngredientAmount = ingredientNow.text();
                var newIngredientAmount = oldIngredientAmount * newValue / previousValue;
                ingredientNow.text(newIngredientAmount);
            });
            $('#previousServing').val(newValue);
        }
    });
});
  