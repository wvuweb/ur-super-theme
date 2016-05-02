jQuery(document).ready(function() {
  var adx = "Events are temporarily unavailable. Please check back later.";
  jQuery.ajax({
    dataType: 'script',
    url: 'https://cal.wvu.edu/EventListSyndicator.aspx?type=N&number=5&category=44-0&expire=Y&ics=Y&adpid=21&nem=No+events+are+available+that+match+your+request&sortorder=ASC&browser=new&ver=2.0&target=adx041233'
  });
  setTimeout(function() {
    if (typeof response == 'undefined') {
      jQuery('#adx041233').html(adx);
    }
  }, 5000);
});
