$('#manifestation').keyup(function () {
  $('#displayManifestation').text($(this).val());
});
$('#manifestation').keyup(function () {
  $('#displayManifestation2').text($(this).val());
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
$('#serieuppgift').keyup(function () {
  $('#displaySerieuppgift').text($(this).val());
});
$('#seriemanifestation').keyup(function () {
  $('#displaySeriemanifestation').text($(this).val());
});
$('#seriemanifestation').keyup(function () {
  $('#displaySeriemanifestation2').text($(this).val());
});
$('#verkmanifestation').keyup(function () {
  $('#displayVerkmanifestation').text($(this).val());
});
$('#verkmanifestation').keyup(function () {
  $('#displayVerkmanifestation2').text($(this).val());
});
$('#relhuvudtitel1').keyup(function () {
  $('#displayRelhuvudtitel1').text($(this).val());
});
$('#relhuvudtitel2').keyup(function () {
  $('#displayRelhuvudtitel2').text($(this).val());
});
$('#person1').keyup(function () {
  $('#displayPerson1').text($(this).val());
});
$('#fornamn1').keyup(function () {
  $('#displayFornamn1').text($(this).val());
});
$('#levnad1').keyup(function () {
  $('#displayLevnad1').text($(this).val());
});
$('#viaf1').keyup(function () {
  $('#displayViaf1').text($(this).val());
});
$('#person2').keyup(function () {
  $('#displayPerson2').text($(this).val());
});
$('#fornamn2').keyup(function () {
  $('#displayFornamn2').text($(this).val());
});
$('#levnad2').keyup(function () {
  $('#displayLevnad2').text($(this).val());
});
$('#viaf2').keyup(function () {
  $('#displayViaf2').text($(this).val());
});
$('#person3').keyup(function () {
  $('#displayPerson3').text($(this).val());
});
$('#fornamn3').keyup(function () {
  $('#displayFornamn3').text($(this).val());
});
$('#levnad3').keyup(function () {
  $('#displayLevnad3').text($(this).val());
});
$('#viaf3').keyup(function () {
  $('#displayViaf3').text($(this).val());
});
$('#huvudupphov').keyup(function () {
  $('#displayHuvudupphov').text($(this).val());
});
$('#medupphov1').keyup(function () {
  $('#displayMedupphov1').text($(this).val());
});
$('#medupphov2').keyup(function () {
  $('#displayMedupphov2').text($(this).val());
});
$('#roll1').keyup(function () {
  $('#displayRoll1').text($(this).val());
});
$('#roll2').keyup(function () {
  $('#displayRoll2').text($(this).val());
});
$('#roll3').keyup(function () {
  $('#displayRoll3').text($(this).val());
});
$("#btnShow").click(function(){
    $("#tut").toggle();
});
$("#btnAttribut").click(function(){
    $("#attribut").toggle();
});
$( function() {
    $( document ).tooltip();
  });
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});