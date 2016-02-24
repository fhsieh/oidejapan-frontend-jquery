/**
 * Initialize
 */
(function($) {

  function show($o) {
    $('#sidebar .section > a.active').not($o).each(function() {
      hide($(this));
    });

    $o.focus().addClass('active').siblings('.content').slideDown(300, 'easeOutQuart');
  }

  function hide($o) {
    $o.removeClass('active').siblings('.content').slideUp(300, 'easeOutQuart');
  }

  $(document).ready(function() {
    $('#sidebar .content').hide();
    $('#sidebar .current > a')
      .addClass('active')
      .siblings('.content').show();

    $('#sidebar .section > a').click(function(e) {
      if ($(this).siblings('.content').length == 0) {
        return true;
      }

      e.preventDefault();

      if (!$(this).hasClass('active')) {
        show($(this));
      } else {
        hide($(this));
      }

      if (!$('#sidebar').hasClass('toggled') && !$('#sidebar .current').children('a').hasClass('active')) {
        var restoreSidebar;
        $('#sidebar')
          .addClass('toggled')
          .on('mouseleave', function() {
            restoreSidebar = window.setTimeout(function () {
              show($('#sidebar .current').children('a'));
              $('#sidebar').removeClass('toggled');
              $('#sidebar').off('mouseleave mouseenter');
            }, 300);
          })
          .on('mouseenter', function() {
            window.clearTimeout(restoreSidebar);
          });
      } else if ($('#sidebar .current').children('a').hasClass('active')) {
        $('#sidebar').removeClass('toggled');
        $('#sidebar').off('mouseleave mouseenter');
        window.clearTimeout(restoreSidebar);
      }
    })
  });
})(jQuery);