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
$('#upplageupphov').keyup(function () {
  $('#displayUpplageupphov').text($(this).val());
});
$('#medupphov1').keyup(function () {
  $('#displayMedupphov1').text($(this).val());
});
$('#roll1').keyup(function () {
  $('#displayRoll1').text($(this).val());
});
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});