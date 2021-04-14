/* JQuery  */
$(document).ready(function () {
  /* pocetak */
  /* promjeni boju proba*/
  /*$('h1').click(function () {
    $(this).css('background-color', '#ff0000');
  }) */

  /* promjena nav bara*/
  $('.js--section-features').waypoint(
    function (direction) {
      if (direction == 'down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    },
    {
      offset: '60px;',
    }
  );

  /* scroll for buttons*/
  $('.js--scroll-to-plans').click(function () {
    $('html, body').animate(
      { scrollTop: $('.js--section-plans').offset().top },
      1000
    );
  });

  $('.js--scroll-to-start').click(function () {
    $('html, body').animate(
      { scrollTop: $('.js--section-features').offset().top },
      1000
    );
  });

  /* scroll on buttons*/
  $(function () {
    // Select all links with hashes
    $('a[href*="#"]:not[href="#"]').click(function () {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
          return false;
        }
      }
    });
  });

  /* animations*/
  $('.js--wp-1').waypoint(
    function (direction) {
      $('.js--wp-1').addClass('animated fadeIn');
    },
    { offset: '50%' }
  );

  $('.js--wp-2').waypoint(
    function (direction) {
      $('.js--wp-2').addClass('animated fadeInUP');
    },
    { offset: '50%' }
  );

  $('.js--wp-3').waypoint(
    function (direction) {
      $('.js--wp-3').addClass('animated wobble');
    },
    { offset: '50%' }
  );

  $('.js--wp-4').waypoint(
    function (direction) {
      $('.js--wp-4').addClass('animated pulse');
    },
    { offset: '50%' }
  );

  /* mobile navigation */

  $('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    nav.slideToggle(200);
    if (icon.hasClass('icon ion-md-menu')) {
      icon.addClass('icon ion-md-close');
      icon.removeClass('icon ion-md-menu');
    } else {
      icon.addClass('icon ion-md-menu');
      icon.removeClass('icon ion-md-close');
    }
  });
}); /* kraj */
