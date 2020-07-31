//business logic//
function pizza(first, second, third){
    this.firstSize = first;
    this.secondCrust = second;
    this.thirdTopping = third;
}

//user logic//
$(document).ready(function(){
    $("form#new-pizza").submit(function(event){
        event.preventDefault();

        var inputtedSize = $("input#new-first-size").val();
        var inputtedCrust = $("input#new-second-crust").val();
        var inputtedTopping = $("input#new-third-topping").val();

        var newPizza = new pizza(inputtedSize, inputtedCrust, inputtedTopping);

        $("input#new-first-size").val("");
        $("input#new-second-crust").val("");
        $("input#new-third-topping").val("");
    });
});