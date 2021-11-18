  $(document).ready(function () {
    console.log('begin ready');
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
        // alert ("코드가 맞습니다. 다음단계로 넘어갑니다. ");
      }
      else {
        swal.fire({
          heightAuto: false,
          text: "코드가 틀립니다. 다시 시도해주세요. "
        });
      }
    });
  });
