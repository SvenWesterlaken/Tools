$(function(){
replaceWith();
clipBoard();
});

function replaceWith(){
 $(".btn > span").html(function(i, oldHTML) {
   return oldHTML.replace(/_/g, ' ');
 });
 $(".btn > span").html(function(i, oldHTML) {
   return oldHTML.replace(/=/g, '.');
 });
}

function clipBoard(){
 var clipboard = new Clipboard('.copyclip');

 clipboard.on('success', function(e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
  e.clearSelection();
 });
 clipboard.on('error', function(e) {
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
 });
}
