$(document).ready(function () {

  // page 2
  $('#page2-1-next').click(function() {
    console.log('second-page')
    $('#section-2').load( 'https://insightdon.github.io/prototype_2/page2_2.html' );
  });

});
