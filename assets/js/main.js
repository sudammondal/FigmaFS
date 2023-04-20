$(document).ready(function() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("FixedScrol").style.top = "0";
        } else {
            document.getElementById("FixedScrol").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }
    
});
 // slider js// 
 $('.sliderall').slick({
  autoplay: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  dots: true,
  speed: 1500,
  responsive: [{
          breakpoint: 1024,
          settings: {
              slidesToShow: 1,
              dots: false,
          }
      },
      {
          breakpoint: 767,
          settings: {
              slidesToShow: 1,
              dots: false,
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              dots: false,
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              dots: false,
          }
      }
  ]
});
                      
// Get filter buttons and isotope items
const filterBtns = document.querySelectorAll('.filter-btn');
const isotopeItems = document.querySelectorAll('.isotope-item');

// Add click event listeners to filter buttons
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove 'active' class from all filter buttons
    filterBtns.forEach(btn => btn.classList.remove('active'));
    // Add 'active' class to the clicked filter button
    btn.classList.add('active');

    // Get the filter value from data attribute
    const filter = btn.getAttribute('data-filter');

    // Show/hide isotope items based on the filter value
    isotopeItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
