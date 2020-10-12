

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == '2013-2014')
      {
        $("#changes2013_2014_div").fadeIn(1000);
      }
      else
      {
        $("#changes2013_2014_div").hide();
      }
    });
});


$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == '2014-2015')
      {
        $("#changes2014_2015_div").fadeIn(1000);
      }
      else
      {
        $("#changes2014_2015_div").hide();
      }
    });
});


$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == '2015-2016')
      {
        $("#changes2015_2016_div").fadeIn(1000);
      }
      else
      {
        $("#changes2015_2016_div").hide();
      }
    });
});

$(document).ready(function(){
  $('#Dropdown').on('change', function() {
    if ( this.value == '2016-2017')
    {
      $("#changes2016_2017_div").fadeIn(1000);
    }
    else
    {
      $("#changes2016_2017_div").hide();
    }
  });
});


$(document).ready(function(){
  $('#Dropdown').on('change', function() {
    if ( this.value == '2017-2018')
    {
      $("#changes2017_2018_div").fadeIn(1000);
    }
    else
    {
      $("#changes2017_2018_div").hide();
    }
  });
});

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == '2013-2018')
      {
        $("#changes2013_2018_div").fadeIn(1000);
      }
      else
      {
        $("#changes2013_2018_div").hide();
      }
    });
});

$(document).ready(function() {
    $("#changes2013_2014_div").show();
    $("#changes2014_2015_div").hide();
    $("#changes2015_2016_div").hide();
    $("#changes2016_2017_div").hide();
    $("#changes2017_2018_div").hide();
    $("#changes2013_2018_div").hide();
});

