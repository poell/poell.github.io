$('#manifestation').keyup(function () {
  $('#displayManifestation').text($(this).val());
});
$('#isbn').keyup(function () {
  $('#displayIsbn').text($(this).val());
});
$('#issn').keyup(function () {
  $('#displayIssn').text($(this).val());
});
$('#titel').keyup(function () {
  $('#displayTitel').text($(this).val());
});
$('#undertitel').keyup(function () {
  $('#displayUndertitel').text($(this).val());
});

$('#upphov').keyup(function () {
  $('#displayUpphov').text($(this).val());
});
$('#upplaga').keyup(function () {
  $('#displayUpplaga').text($(this).val());
});

$(document).ready(function(){
    $("div").click(function(){
        $(this).hide();
    });
    });
