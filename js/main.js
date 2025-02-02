document.addEventListener("DOMContentLoaded", function () {
  // When a user scrolls through the projects,
  // the corresponding navigation link will be
  // visually highlighted, providing a clear indicator of
  // the current section to the user.
  function linkHighlighting(targetId, linkSelector) {
    const targetElement = document.getElementById(targetId);
    const navLink = document.querySelector(linkSelector);

    if (targetElement && navLink) {
      // The IntersectionObserver is efficient because
      // it doesn't fire events on every pixel of scroll
      // but only when elements cross over
      // specific thresholds you set.
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              navLink.classList.add("highlight");
            } else {
              navLink.classList.remove("highlight");
            }
          });
        },
        {
          root: null, // viewport

          // You can adjust the threshold in the
          // observer options to change when the
          // highlighting occurs
          // e.g., when 10% or 75% of the element is visible
          threshold: 0.5, // trigger when 50% of the target is visible
        }
      );

      observer.observe(targetElement);
    }
  }

  // Highlighting for projects
  // When a new project is added, this needs to be updated.
  linkHighlighting(
    "service-task-calc-nav-highlight",
    'a[href="#service-task-calculator"]'
  );
  linkHighlighting(
    "document-generator-nav-highlight",
    'a[href="#document-generator"]'
  );
  linkHighlighting("bid-generator-nav-highlight", 'a[href="#bid-generator"]');
  linkHighlighting(
    "risk-category-matrix-nav-highlight",
    '[href="#risk-category-matrix"]'
  );
});
