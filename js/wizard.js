/**
 * Initialize
 */
(function($) {

  function swap($f, $t) {
    $f.removeClass('active').children('.body').slideUp(300, 'easeOutQuart');
    $t.addClass('active').children('.body').slideDown(300, 'easeOutQuart');
  }

  $(document).ready(function() {
    $('.wizard').each(function() {

      $(this).find('.step').each(function() {
        $(this).children('.body').hide();

        if ($(this).find('.actions').length == 0) {
          $(this).children('.body').append($('<div class="actions"></div>'));
        }

        if (!$(this).is(':first-child')) {
          $(this).find('.actions').prepend(
            $('<a>戻る</a>')
              .attr({ 'href': '#' })
              .addClass('btn muted')
              .click(function(e) {
                e.preventDefault();
                swap($(this).closest('.step'), $(this).closest('.step').prev());
              })
          );
        }

        if (!$(this).is(':last-child')) {
          $(this).find('.actions').append(
            $('<a>次へ</a>')
              .attr({ 'href': '#' })
              .addClass('btn primary')
              .click(function(e) {
                e.preventDefault();
                swap($(this).closest('.step'), $(this).closest('.step').next());

                if ($(this).closest('.step').children('.header').find('i.fa.fa-check').length == 0) {
                  $(this).closest('.step').children('.header')
                    .append($('<div class="addon"><i class="fa fa-check"></i></div>'));
                }
              })
          );
        }
      });

      $(this).find('.step').first().children('.body').show();
    });
  });
})(jQuery);