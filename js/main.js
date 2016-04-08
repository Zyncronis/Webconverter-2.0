function tim(){
  var dateandtime = Date();
  alert(dateandtime);


}
function handleFileSelect(evt) {
  var files = evt.target.files;
  var output = [];
  for (var i = 0, f; f = files[i]; i++) {
    output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                f.size, ' bytes, last modified: ',
                f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                '</li>');
  }
  document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);
$(".popup").click(function(e){
  $("#overlay").fadeIn(300);
  $(".previews").delay(200).fadeIn(300);
  e.preventDefault();
  return false;
});
$("#overlay").click(function(){
  $(".previews").fadeOut(300);
  $(this).delay(200).fadeOut(300);
});