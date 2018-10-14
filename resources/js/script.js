    /*for sticky section*/
    $(document).ready(function () {
        $('.js--section-features').waypoint(function (direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        }, {
            offset: '60px;'
        });

        /*Scroll to Button*/
        $('.js--scroll-to-skills').click(function () {
            $('html,body').animate({
                scrollTop: $('.js--section-skills').offset().top
            }, 1000);
        });

        $('.js--scroll-to-start').click(function () {
            $('html,body').animate({
                scrollTop: $('.js--section-features').offset().top
            }, 1000);
        });
        /*Navgation Scrolling*/
        $(function () {
            $('a[href*=#]:not([href=#])').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });
        
        /*Animation for scrolling*/
        $('.js--wp-1').waypoint(function (direction) {
            $('.js--wp-1').addClass('animated fadeIn');
        }, {
            offset: '50%;'
        });
        
        $('.js--wp-2').waypoint(function (direction) {
            $('.js--wp-2').addClass('animated shake');
        }, {
            offset: '50%;'
        });

        $('.js--wp-3').waypoint(function (direction) {
            $('.js--wp-3').addClass('animated jackInTheBox');
        }, {
            offset: '50%;'
        });

        $('.js--wp-4').waypoint(function (direction) {
            $('.js--wp-4').addClass('animated pulse');
        }, {
            offset: '50%;'
        });

        /*MOBILE-NAV*/
        $('.js--nav-icon').click(function () {
            var nav = $('.js--main-nav');
            var icon = $('.js--nav-icon i');

            nav.slideToggle(200);

            if (icon.hasClass('ion-navicon-round')) {
                icon.addClass('ion-close-round');
                icon.removeClass('ion-navicon-round');
            } else {
                icon.addClass('ion-navicon-round');
                icon.removeClass('ion-close-round');
            }
        });

    });

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    //Create Tabs
    function openPage(pageName, elmnt, color) {
        // Hide all elements with class="tabcontent" by default */
        var i, tabcontent, tablinks

        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Remove the background color of all tablinks/buttons
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.backgroundColor = "";
        }

        // Show the specific tab content
        document.getElementById(pageName).style.display = "block";

        // Add the specific color to the button used to open the tab content
        elmnt.style.backgroundColor = color;
    }

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").onmouseover();

    /*
    //Open Image
    function openImg(imgs) {
      // Get the expanded image
      var expandImg = document.getElementById("expandedImg");
      // Get the image text
      var imgText = document.getElementById("imgtext");
      // Use the same src in the expanded image as the image being clicked on from the grid
      expandImg.src = imgs.src;
      // Use the value of the alt attribute of the clickable image as text inside the expanded image
      imgText.innerHTML = imgs.alt;
      // Show the container element (hidden with CSS)
      expandImg.parentElement.style.display = "block";
    }
    */

    //popup
    function myFunction() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }