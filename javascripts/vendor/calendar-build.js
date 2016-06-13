jQuery(document).ready(function() {
  var adx = "Events are temporarily unavailable. Please check back later.";
  jQuery.ajax({
    dataType: 'script',
    url: '<r:site:data name="calendar_feed" />'
  });
  setTimeout(function() {
    if (typeof response == 'undefined') {
      jQuery('#adx041233').html(adx);
    }
  }, 5000);
});
