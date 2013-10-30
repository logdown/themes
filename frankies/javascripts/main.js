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

var paintSiteNavShadow = function() {
  var $siteNavLinks = $('.site-nav-links'),
      $siteNavShadow = $('.site-nav-shadow');

  if ($siteNavShadow.length < 1) return false;

  var navLinkWidth = $siteNavLinks.width(),
      navLinkScrollWidth = $siteNavLinks[0].scrollWidth,
      navLinkScrollLeft = $siteNavLinks[0].scrollLeft,
      navLinkWidthDiff = navLinkScrollWidth - navLinkWidth;

  // Reset state
  $siteNavShadow.removeClass('left-shadow right-shadow');

  if (navLinkScrollWidth > navLinkWidth) { //Need scrolling
    if (navLinkScrollLeft < navLinkWidthDiff) { // Have things in right
      $siteNavShadow.addClass('right-shadow');
    }

    if (navLinkScrollLeft > 0) { // Have things in left
      $siteNavShadow.addClass('left-shadow');
    }
  }
};

$(function() {
  initSiteSearch();
  paintSiteNavShadow();

  $('.site-nav-links').on('scroll', paintSiteNavShadow);
  $(window).on('resize', paintSiteNavShadow);
});