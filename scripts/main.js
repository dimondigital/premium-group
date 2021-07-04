/* preloader */
$(window).on('load', function () {
  this.setTimeout(function () {
    var $preloader = $('#page-preloader'),
      $spinner = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  }, 3000);
});


jQuery(document).ready(function ($) {

  // jQuery mask plugin
  $('#tel').mask("+38(000)000-00-00", {placeholder: "+38(___)___-__-__"});

  $('a .special-button').click(function () {
    console.log('click !');
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
  });

  /* Element In Viewport */
  function Utils() {

  }

  Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
      var pageTop = $(window).scrollTop();
      var pageBottom = pageTop + $(window).height();
      var elementTop = $(element).offset().top;
      var elementBottom = elementTop + $(element).height();

      if (fullyInView === true) {
        return ((pageTop < elementTop) && (pageBottom > elementBottom));
      } else {
        return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
      }
    }
  };

  var Utils = new Utils();

  // var isElementInView = Utils.isElementInView($('.main .container'), false);

  var animatedElements = [
    $('.main .container'),
    $('.request-form'),
    $('.where-it-use .container'),
    $('.offer-1 div'),
    $('.offer-2 div'),
    $('.offer-3 div'),
    $('.offer-4 div'),
    $('.faq .container'),
    $('.contacts-section .container'),
    $('.fooot')
  ];

  $(window).scroll(function (e) {
    e.preventDefault();
    $.each(animatedElements, function (index, value) {
      var $cur = animatedElements[index];
      if (Utils.isElementInView($cur, false)) {
        if (!$cur.hasClass('animated fadeIn')) {
          $cur.addClass('animated fadeIn');
        }
      } else {
        if ($cur.hasClass('animated fadeIn')) {
          $cur.removeClass('animated fadeIn');
        }
      }
    });
  });


  /* PARALLAX */
  $('.main').parallax({imageSrc: 'src/images/main-bg.jpg'});
  $('.request-form').parallax({imageSrc: 'src/images/form-bg.jpg'});
  $('.where-it-use').parallax({imageSrc: 'src/images/where-bg.jpg'});
  $('.faq').parallax({imageSrc: 'src/images/faq-bg.jpg'});
  $('.fooot').parallax({imageSrc: 'src/images/faq-bg.jpg'});


});
