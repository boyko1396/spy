$(document).ready(function() {
  tabsInit();

  // tabs auth form
  function tabsInit() {
    $('.js-tabs-link').click(function() {
      if($(this).hasClass('is-active')) {
        event.preventDefault();
      }
      else {
        $('.js-tabs-link').removeClass('is-active');
        $(this).addClass('is-active');
        $('.js-tabs-content > div').removeClass('is-show');
        var activeTab = $(this).attr('href');
        $(activeTab).addClass('is-show');
        event.preventDefault();
      }
    });
  }
});