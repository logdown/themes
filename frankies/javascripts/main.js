var initSiteSearch = function() {
  var $siteNavbar = $('.site-navbar'),
      $siteNavLinks = $('.site-nav-links'),
      $siteSearchForm = $('.site-search');

      $siteNavbar.on('click', '.search-toggle', function(event) {
        $siteNavbar.addClass('in-search');
        event.preventDefault();
      });
      $siteNavbar.on('click', '.btn-cancel', function(event) {
        $siteNavbar.removeClass('in-search');
      })
};

$(function() {
  initSiteSearch();
});