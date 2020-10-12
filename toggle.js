$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Healthcare')
      {
        $("#total_health_spending_div").fadeIn(1000);
      }
      else
      {
        $("#total_health_spending_div").hide();
      }
    });
});


$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Military')
      {
        $("#total_military_spending_div").fadeIn(1000);
      }
      else
      {
        $("#total_military_spending_div").hide();
      }
    });
});

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Education')
      {
        $("#total_education_spending_div").fadeIn(1000);
      }
      else
      {
        $("#total_education_spending_div").hide();
      }
    });
});

$(document).ready(function() {
    $("#total_health_spending_div").show();
    $("#total_military_spending_div").hide();
    $("#total_education_spending_div").hide();
});



// CHART 2

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Healthcare')
      {
        $("#gdp_health_spending_div").fadeIn(1000);
      }
      else
      {
        $("#gdp_health_spending_div").hide();
      }
    });
});


$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Military')
      {
        $("#gdp_military_spending_div").fadeIn(1000);
      }
      else
      {
        $("#gdp_military_spending_div").hide();
      }
    });
});

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Education')
      {
        $("#gdp_education_spending_div").fadeIn(1000);
      }
      else
      {
        $("#gdp_education_spending_div").hide();
      }
    });
});

$(document).ready(function() {
    $("#gdp_health_spending_div").show();
    $("#gdp_military_spending_div").hide();
    $("#gdp_education_spending_div").hide();
});


// CHART 3
$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Healthcare')
      {
        $("#percapita_health_spending_div").fadeIn(1000);
      }
      else
      {
        $("#percapita_health_spending_div").hide();
      }
    });
});


$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Military')
      {
        $("#percapita_military_spending_div").fadeIn(1000);
      }
      else
      {
        $("#percapita_military_spending_div").hide();
      }
    });
});

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Education')
      {
        $("#percapita_education_spending_div").fadeIn(1000);
      }
      else
      {
        $("#percapita_education_spending_div").hide();
      }
    });
});

$(document).ready(function() {
    $("#percapita_health_spending_div").show();
    $("#percapita_military_spending_div").hide();
    $("#percapita_education_spending_div").hide();
});

