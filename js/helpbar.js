/**
 * Initialize
 */
(function($) {
  function slide($o, w) {
    if (w != 0) $o.show();
    $o.animate({
      '-webkit-flex-basis': w + 'px',
      'flex-basis': w + 'px' //, 'opacity': (w ? '1' : '0')
    }, 300, 'easeOutQuart', function() {
      if (w == 0) {
        $o.hide();
      }
    });
  }

  $(document).ready(function() {
    $('#helpbar-open').click(function(e){
      e.preventDefault();
      slide($('#helpbar'), $('#helpbar .header').width());
      $('#helpbar-open').hide();
    });
    $('#helpbar-close').click(function(e) {
      e.preventDefault();
      slide($('#helpbar'), 0);
      $('#helpbar-open').show();
    });
  });
})(jQuery);