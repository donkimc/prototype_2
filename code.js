  $(document).ready(function () {
    // local storage
    if (typeof(Storage) !== "undefined") {
      if (!localStorage.id) {
        localStorage.id = 1;
      }
    }
    else {
      console.log("your browser does not support web storage.")
    }
    // when code is entered
    $('#code-form').submit(function(e){
      e.preventDefault();
      console.log('ready');
      var code = $('#code').val();

      if (code == '181818') {
        console.log('correct');
        swal.fire({
          heightAuto: false,
          text: "코드가 맞습니다. 다음단계로 넘어갑니다. "
        });
        $('#section-2').load( 'https://insightdon.github.io/prototype_2/page2_1.html' );
      }
      else {
        swal.fire({
          heightAuto: false,
          text: "코드가 틀립니다. 다시 시도해주세요. "
        });
      }
    });

    // page 2
    $('#page2-1-next').click(function(e) {
      $('#section-2').load( 'https://insightdon.github.io/prototype_2/page2_2.html' );
    });
  });
