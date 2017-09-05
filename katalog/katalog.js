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
$('#upplageupphov').keyup(function () {
  $('#displayUpplageupphov').text($(this).val());
});
$('#utgivningsort').keyup(function () {
  $('#displayUtgivningsort').text($(this).val());
});
$('#utgivningsnamn').keyup(function () {
  $('#displayUtgivningsnamn').text($(this).val());
});
$('#utgivningstid').keyup(function () {
  $('#displayUtgivningstid').text($(this).val());
});
$('#medietyp').keyup(function () {
  $('#displayMedietyp').text($(this).val());
});
$('#barartyp').keyup(function () {
  $('#displayBarartyp').text($(this).val());
});
$('#bararomfang').keyup(function () {
  $('#displayBararomfang').text($(this).val());
});
$('#huvudtitelserie').keyup(function () {
  $('#displayHuvudtitelserie').text($(this).val());
});
$('#medupphov1').keyup(function () {
  $('#displayMedupphov1').text($(this).val());
});
$('#roll1').keyup(function () {
  $('#displayRoll1').text($(this).val());
});
$( function() {
    $( document ).tooltip();
  });
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});