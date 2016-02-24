/**
 * Global variables
 */
var marginTop  = 15,
    marginSide = 10;



/**
 * Align menu to menu button
 */
function alignMenu(o) {
  var vW = $(window).width(),
      eL = o.offset().left,
      eW = o.outerWidth(),
      mE = o.siblings('.menu'),
      mW = mE.width(),
      mL = 0,
      aE = mE.children('.arrow'),
      aW = parseInt(aE.css('border-bottom-width'), 10),
      aL = 0,
      mS = marginSide;

  if (eL+mW+mS <= vW) {
    var o = (mS-eL > 0 ? mS-eL : 0)
    mL = o;
    aL = eW/2-aW-o;
  } else if (eL+(eW+mW)/2+mS <= vW) {
    mL = (eW-mW)/2;
    aL = mW/2-aW;
  } else {
    var o = (mS-(vW-eL-eW) > 0 ? mS-(vW-eL-eW) : 0)
    mL = eW-mW-o;
    aL = mW-(eW/2)-aW+o;
  }
  mE.css({ 'margin-left': mL + 'px' });
  aE.css({ 'left': aL + 'px' });

  return false;
}



/**
 * Bind menu open/close to menu button events
 */
function bindMenu($o) {

  function open(o) {
    $('#header > ul > li > a.active').not(o).each(function() { close(this); });
    $(o)
      .addClass('active')
      .siblings('.menu')
        .show()
        .animate({ 'margin-top': marginTop + 'px', 'opacity': '1' }, 300, 'easeOutQuart');
  }

  function close(o) {
    $('html').off('click');
    $(o)
      .removeClass('active')
      .siblings('.menu')
        .animate({ 'margin-top': '0px', 'opacity': '0' }, 300, 'easeOutQuart', function() { $(this).hide(); });
  }

  $o.siblings('.menu')
    .hide()
    .css({ 'margin-top': '0px', 'opacity': '0' });

  $o.click(function(e) {
    e.preventDefault();
    if (!$o.hasClass('active')) {
      open($o);

      e.stopPropagation();

      $('html').on('click', function(e) {
        if ($(e.target).closest('.menu').length) {
          return;
        }

        close($o);
      });
    }
  });
}



/**
 * Add/update unread badge counter on menu button
 */
function updateBadge(o, n, c) {
  if (n) {
    if (!o.children('span.badge').length) {
      o.append($('<span></span>').addClass('badge ' + c));
    }
    o.children('span.badge').text(n);
  } else {
    o.children('span.badge').remove();
  }
}



/**
 * Initialize
 */
(function($) {
  $(document).ready(function() {
    /**
     * Data stand-in
     */
    var notifications = [ { date: '2015/05/01', url: '#', icon: 'fa-language',    class: 'success', status: 'new',  title: '翻訳完成',      message: '翻訳が完成しました。クリックして表示する。' },
                          { date: '2015/05/01', url: '#', icon: 'fa-home',        class: 'warning', status: '',     title: '新しい問い合せ', message: '問い合せを受付しました。' },
                          { date: '2015/05/01', url: '#', icon: 'fa-certificate', class: 'primary', status: '',     title: '広告請求',      message: '広告を購入しました。' } ],
        messages =      [ { date: '2015/05/01', url: '#', icon: 'fa-envelope',    class: 'primary', status: 'new',  title: 'Oide Japan',   message: 'Message preview goes here' },
                          { date: '2015/04/29', url: '#', icon: 'fa-envelope',    class: 'primary', status: 'new',  title: 'Customer',     message: 'Message preview goes here' },
                          { date: '2015/04/20', url: '#', icon: 'fa-envelope',    class: 'primary', status: '',     title: 'Oide Japan',   message: 'Message preview goes here' } ],
        profile =       { user: { id: '12345', name: '鈴木優奈', image: '' },
                          company: { id: '6940', name: 'My 会社名', tag: '株式会社' },
                          balance: { points: '7849' } };



    /**
     * Populate user information
     */
    $('#header #user .name, #header #user + .menu #profile .name').text(profile.user.name);
    $('#header #user .image').append($('<i></i>').addClass('fa fa-user'));
    $('#header #user + .menu #company .name').text(profile.company.name);
    $('#sidebar #company .tag').text(profile.company.tag);
    $('#sidebar #company .name').text(profile.company.name);
    alignMenu($('#header #user'));
    bindMenu($('#header #user'));



    /**
     * Create menu buttons and dropdown menus
     */
    var menus = [ { name: 'notifications', data: notifications, class: 'warning' }, { name: 'messages', data: messages, class: 'primary' } ];

    $.map(menus, function(menu) {
      var $m = $('#header #' + menu.name);
      var count = 0;

      $.map(menu.data, function(d) {

        // update new count
        if (d.status == 'new') { count += 1; }

        // add item to dropdown menu
        $m.siblings('.menu').find('li:last-child').before(
          $('<li></li>')
            .addClass('item ' + d.status)
            .append(
              $('<a></a>')
                .attr({ 'href': d.url })
                .append('<div class="gutter ' + d.class + '"><i class="fa ' + [d.icon, d.class].join(' ') + '"></i></div>')
                .append('<span>' + d.title + '<small>' + d.message + '</small></span>')
          )
        );
      });

      alignMenu($m);

      bindMenu($m);

      updateBadge($m, count, menu.class);
    });

  });
})(jQuery);