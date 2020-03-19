$(function () {

    "use strict";

   
    /*===============================================
      Navbar Menu
    ===============================================*/
    var nav = $(".nav");
    var navToggle = $(".nav-toggle-btn");

    //
    // Show Nav menu on Toggle //
    //
    navToggle.on("click", function (e) {
        var d = $(".nav-dropdown");
        var s = $(".sub-dropdown");
        var dMenu = $(".dropdown-menu");
        var sMenu = $(".sub-dropdown-menu");

        if (nav.hasClass("nav-show")) {
            nav.removeClass("nav-show");
            if (dMenu.hasClass("dropdown-menu-show")) {
                dMenu.removeClass("dropdown-menu-show");
                d.removeClass("dropdown-minus");
            }
            if (sMenu.hasClass("sub-dropdown-menu-show")) {
                sMenu.removeClass("sub-dropdown-menu-show");
                s.removeClass("sub-dropdown-minus");
            }
        }
        else {
            nav.addClass("nav-show");
        }
        e.stopPropagation();
    });

    //
    // Transform Navicon into X //
    //
    navToggle.on("click", function () {
        if (navToggle.hasClass("nav-toggle-close")) {
            navToggle.removeClass("nav-toggle-close");
        }
        else {
            navToggle.addClass("nav-toggle-close");
        }
    });

    //
    // Navbar Dropdown //
    //
    var dropdownBtn = $(".nav-dropdown .nav-link");
    var subDropdownBtn = $(".sub-dropdown a");

    dropdownBtn.on("click", function () {
        var d = $(this).parent(".nav-dropdown").children(".dropdown-menu");
        if (d.hasClass("dropdown-menu-show")) {
            d.removeClass("dropdown-menu-show");
        }
        else {
            d.addClass("dropdown-menu-show");
        }
    });

    subDropdownBtn.on("click", function (e) {
        var s = $(this).parent(".sub-dropdown").children(".sub-dropdown-menu");

        if (s.hasClass("sub-dropdown-menu-show")) {
            s.removeClass("sub-dropdown-menu-show");
        }
        else {
            s.addClass("sub-dropdown-menu-show");
        }
        e.stopPropagation();
    });

    //
    // Transform Plus into Minus //
    //
    dropdownBtn.on("click", function () {
        var m = $(this).parent(".nav-dropdown").children(".dropdown-menu");
        var d = $(this).parent(".nav-dropdown");

        if (m.hasClass("dropdown-menu-show")) {
            d.addClass("dropdown-minus");
        }
        else {
            d.removeClass("dropdown-minus");
        }
    });

    subDropdownBtn.on("click", function () {
        var m = $(this).parent(".sub-dropdown").children(".sub-dropdown-menu");
        var s = $(this).parent(".sub-dropdown");

        if (m.hasClass("sub-dropdown-menu-show")) {
            s.addClass("sub-dropdown-minus");
        }
        else {
            s.removeClass("sub-dropdown-minus");
        }
    });

    //
    // Close Nav Menu //
    //
    $(document).on("click", function (e) {
        if ($(e.target).closest(".nav").length === 0) {
            if (nav.hasClass("nav-show")) {
                var d = $(".dropdown-menu");
                var s = $(".sub-dropdown-menu");

                nav.removeClass("nav-show");
                if (d.hasClass("dropdown-menu-show")) {
                    d.removeClass("dropdown-menu-show");
                    $(".nav-dropdown").removeClass("dropdown-minus");
                }
                if (s.hasClass("sub-dropdown-menu-show")) {
                    s.removeClass("sub-dropdown-menu-show");
                    $(".sub-dropdown").removeClass("sub-dropdown-minus");
                }
            }
            if (navToggle.hasClass("nav-toggle-close")) {
                navToggle.removeClass("nav-toggle-close");
            }
        }
    });

    //
    // Prevent content jumping to top on click(href='#') //
    //
    $(".navbar a[href='#']").on("click", function (e) {
        e.preventDefault();
    });

    //
    // Position Toggle Button to the left if Nav is aligned left //
    //
    if (nav.hasClass("mr-auto")) {
        navToggle.addClass("left");
    }

    //
    // Sticky Navbar //
    //
    if ($(".navbar-sticky").length) {
        var navbarSticky = $(".navbar-sticky");
        var navbarOffset = navbarSticky.offset().top;

        $(window).on("scroll", function () {
            var navbarPlaceholder = $(".navbar-placeholder");

            if ($(window).scrollTop() >= navbarOffset) {
                navbarSticky.addClass("navbar-sticky-apply");
                navbarPlaceholder.addClass("navbar-placeholder-padding");
            }
            else {
                navbarSticky.removeClass("navbar-sticky-apply");
                navbarPlaceholder.removeClass("navbar-placeholder-padding");
            }

            if ($(window).scrollTop() >= navbarOffset + 20) {
                navbarSticky.addClass("navbar-shrink");
            }
            else {
                navbarSticky.removeClass("navbar-shrink");
            }
        });
        // Navbar Sticky Placeholder
        $("<div class='navbar-placeholder'></div>").insertAfter(".navbar-sticky");
    }


    /*===============================================
      Fullscreen Toggle Menu
    ===============================================*/
    var toggleMenu = $(".fullscreen-menu");
    var toggleBtn = $(".fullscreen-toggle-btn");

    //
    // Show Menu on Toggle //
    //
    toggleBtn.on("click", function (e) {
        if (toggleMenu.hasClass("fullscreen-menu-show")) {
            toggleMenu.removeClass("fullscreen-menu-show");
        }
        else {
            toggleMenu.addClass("fullscreen-menu-show");
        }
        e.stopPropagation();
    });

    //
    // Hide Toggle button //
    //
    toggleBtn.on("click", function () {
        if (toggleBtn.hasClass("fullscreen-toggle-hide")) {
            toggleBtn.removeClass("fullscreen-toggle-hide");
        }
        else {
            toggleBtn.addClass("fullscreen-toggle-hide");
        }
    });

    //
    // Close Toggle menu //
    //
    $(document).on("click", function () {
        if (toggleMenu.hasClass("fullscreen-menu-show")) {
            toggleMenu.removeClass("fullscreen-menu-show");
            toggleBtn.removeClass("fullscreen-toggle-hide");
        }
    });


    /*===============================================
      Mega Menu
    ===============================================*/
    var megaMenuToggle = $(".nav-megadropdown");

    megaMenuToggle.on("click", function () {
        var m = $(this).children(".mega-menu");
        var l = $(this).children(".nav-link");
        if (m.hasClass("mega-menu-show")) {
            m.removeClass("mega-menu-show");
            l.removeClass("nav-link-minus");
        }
        else {
            m.addClass("mega-menu-show");
            l.addClass("nav-link-minus");
        }
    });

    //
    // Close Mega Menu //
    //
    var megaMenu = $(".mega-menu");

    navToggle.on("click", function () {
        if (megaMenu.hasClass("mega-menu-show")) {
            megaMenu.removeClass("mega-menu-show");
            $(".nav-link").removeClass("nav-link-minus");
        }
    });

    $(document).on("click", function (e) {
        if ($(e.target).closest(".nav").length === 0) {
            if (megaMenu.hasClass("mega-menu-show")) {
                megaMenu.removeClass("mega-menu-show");
                $(".nav-link").removeClass("nav-link-minus");
            }
        }
    });


    /*===============================================
      Sidebar Menu
    ===============================================*/
    var sidebarDropdownLink = $(".sidebar-dropdown-link");

    sidebarDropdownLink.on("click", function () {
        var sidebarDropdownMenu = $(this).parent().children(".sidebar-dropdown");
        var $this = $(this);

        if (sidebarDropdownMenu.hasClass("sidebar-dropdown-show")) {
            sidebarDropdownMenu.removeClass("sidebar-dropdown-show");
            $this.removeClass("minus");
        }
        else {
            sidebarDropdownMenu.addClass("sidebar-dropdown-show");
            $this.addClass("minus");
        }
    });

    var sidebarToggle = $(".sidebar-nav-toggle");
    var sidebarNavContent = $(".sidebar-nav-content");

    sidebarToggle.on("click", function () {
        if (sidebarToggle.hasClass("sidebar-nav-toggle-close")) {
            sidebarToggle.removeClass("sidebar-nav-toggle-close");
            sidebarNavContent.removeClass("sidebar-nav-show");
        }
        else {
            sidebarToggle.addClass("sidebar-nav-toggle-close");
            sidebarNavContent.addClass("sidebar-nav-show");
        }
    });

    //
    // Prevent content jumping to top on click(href='#') //
    //
    $(".sidebar-menu a[href='#']").on("click", function (e) {
        e.preventDefault();
    });




    /*===============================================
      Shrink Navbar when starts scrolling
    ===============================================*/
    var navbarFixed = $(".navbar-fixed");

    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 10) {
            navbarFixed.addClass("navbar-shrink");
        } else {
            navbarFixed.removeClass("navbar-shrink");
        }
    });


    /*===============================================
      Smooth Scrollin on links
    ===============================================*/
    var htmlBody = $("html,body");
    var ssBtn = $(".scrolldown-btn, .scrolldown, .navbar a");

    ssBtn.on("click", function (e) {
        htmlBody.animate({ scrollTop: $(this.hash).offset().top }, 700, "easeInOutQuart");
        e.preventDefault();
    });


    /*===============================================
      Scroll to top button
    ===============================================*/
    var scrollTopBtn = $(".scrolltotop");
    //
    // Show/Hide button //
    //
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 700) { // 700px from top
            scrollTopBtn.addClass("scrolltotop-show");
        }
        else {
            scrollTopBtn.removeClass("scrolltotop-show");
        }
    });

    //
    // Animate button //
    //
    scrollTopBtn.on("click", function () {
        htmlBody.animate({ scrollTop: 0 }, 600, "easeInOutQuart");
        return false;
    });




    /*===============================================
      Accordion
    ===============================================*/
    $(".accordion-title").each(function () {

        var $this = $(this);

        $this.on("click", function () {
            var accordionList = $this.parent("li");
            var accordionContent = this.nextElementSibling;

            if (accordionList.hasClass("active")) {
                accordionList.removeClass("active");
                accordionContent.style.maxHeight = null;
            }
            else {
                accordionList.addClass("active");
                if ($this.closest(".accordion").hasClass("single-open")) {
                    $this.closest(".accordion").children("li").removeClass("active");
                    accordionList.addClass("active");
                    $this.parents(".single-open").find(".accordion-content").css("max-height", "0");
                }
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            }
        });

        //
        // Give max-height to Accordion's active content //
        //
        if ($this.parents(".accordion").find("li").hasClass("active")) {
            var accordionActiveContent = $this.parents(".accordion").find("li.active").children(".accordion-content");
            var accordionHeight = accordionActiveContent.prop("scrollHeight");

            accordionActiveContent.css({ 'max-height': accordionHeight + "px" });
        }

    });


   

    /*===============================================
      Popover
    ===============================================*/
    $('[data-toggle="popover"]').popover();


    /*===============================================
      Tooltip
    ===============================================*/
    $('[data-toggle="tooltip"]').tooltip();


   

});