/* Close the mobile navigation menu after a menu item is selected. */
$(document).ready(function () {
  $("#mobile-menu a").on("click", function () {
    $("#mobile-menu").collapse("hide");
  });
});
