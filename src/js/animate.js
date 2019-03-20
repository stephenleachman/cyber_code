
/*
Home Pages Animations
=======================================================================================================================================================================
*/

// What We Build Section | Top Content
const waypoint = new Waypoint({
  element: document.getElementById('what_we_build_h1'),

  handler: function() {
    const what_we_build_h1 = document.getElementById('what_we_build_h1');
    const what_we_build_p = document.getElementById('what_we_build_p');

    what_we_build_h1.classList.remove('opacity');
    what_we_build_h1.classList.add('animated', 'fadeInDown');

    what_we_build_p.classList.remove('opacity');
    what_we_build_p.classList.add('animated', 'fadeInUp');

  },
  offset: "70%" 
});

// What We Build Section | Custum Website Sub-Section
const waypoint1 = new Waypoint({
  element: document.getElementById('img_custom_website'),

  handler: function() {
    const content_custom_website = document.getElementById('content_custom_website');
    const img_custom_website = document.getElementById('img_custom_website');

    content_custom_website.classList.remove('opacity');
    content_custom_website.classList.add('animated', 'fadeInRight');

    img_custom_website.classList.remove('opacity');
    img_custom_website.classList.add('animated', 'fadeInLeft');

  },
  offset: "50%" 
});

// What We Build Section | Blog Site Sub-Section
const waypoint2 = new Waypoint({
  element: document.getElementById('img_blog_site'),

  handler: function() {
    const content_blog_site = document.getElementById('content_blog_site');
    const img_blog_site = document.getElementById('img_blog_site');

    content_blog_site.classList.remove('opacity');
    content_blog_site.classList.add('animated', 'fadeInLeft');

    img_blog_site.classList.remove('opacity');
    img_blog_site.classList.add('animated', 'fadeInRight');

  },
  offset: "50%" 
});

// What We Build Section | E-commerce Sites Sub-Section
const waypoint3 = new Waypoint({
  element: document.getElementById('img_commerce_site'),

  handler: function() {
    const content_commerce_site = document.getElementById('content_commerce_site');
    const img_commerce_site = document.getElementById('img_commerce_site');

    content_commerce_site.classList.remove('opacity');
    content_commerce_site.classList.add('animated', 'fadeInRight');

    img_commerce_site.classList.remove('opacity');
    img_commerce_site.classList.add('animated', 'fadeInLeft');

  },
  offset: "50%" 
});

// What We Build Section | Web Apps Sub-Section
const waypoint4 = new Waypoint({
  element: document.getElementById('img_web_app'),

  handler: function() {
    const content_web_app = document.getElementById('content_web_app');
    const img_web_app = document.getElementById('img_web_app');

    content_web_app.classList.remove('opacity');
    content_web_app.classList.add('animated', 'fadeInLeft');

    img_web_app.classList.remove('opacity');
    img_web_app.classList.add('animated', 'fadeInRight');

  },
  offset: "50%" 
});

// The Prosses | Top Content
const waypoint5 = new Waypoint({
  element: document.getElementById('the_prosses_content'),

  handler: function() {
    const the_prosses_h1 = document.getElementById('the_prosses_h1');
    const the_prosses_p = document.getElementById('the_prosses_p');

    the_prosses_h1.classList.remove('opacity');
    the_prosses_h1.classList.add('animated', 'fadeInDown');

    the_prosses_p.classList.remove('opacity');
    the_prosses_p.classList.add('animated', 'fadeInUp');

  },
  offset: "50%" 
});

// The Prosses | Icons
const waypoint6 = new Waypoint({
  element: document.getElementById('the_prosses_row'),

  handler: function() {
    const ux_ui_design = document.getElementById('ux_ui_design');
    const development = document.getElementById('development');
    const deployment = document.getElementById('deployment');
    const maintenance = document.getElementById('maintenance');

    ux_ui_design.classList.remove('opacity');
    ux_ui_design.classList.add('animated', 'fadeIn');

    development.classList.remove('opacity');
    development.classList.add('animated', 'fadeIn', 'delay-1s');

    deployment.classList.remove('opacity');
    deployment.classList.add('animated', 'fadeIn', 'delay-2s');

    maintenance.classList.remove('opacity');
    maintenance.classList.add('animated', 'fadeIn', 'delay-3s');

  },
  offset: "50%" 
});

// Our Technologies | Top Content
const waypoint8 = new Waypoint({
  element: document.getElementById('our_technologies_content'),

  handler: function() {
    const our_technologies_h1 = document.getElementById('our_technologies_h1');
    const our_technologies_p = document.getElementById('our_technologies_p');

    our_technologies_h1.classList.remove('opacity');
    our_technologies_h1.classList.add('animated', 'fadeInDown');

    our_technologies_p.classList.remove('opacity');
    our_technologies_p.classList.add('animated', 'fadeInUp');

  },
  offset: "50%" 
});

// The Prosses | Icons
const waypoint9 = new Waypoint({
  element: document.getElementById('our_technologies_row'),

  handler: function() {
    const front_end = document.getElementById('front_end');
    const back_end = document.getElementById('back_end');
    const cms = document.getElementById('cms');
    const servers_hosting = document.getElementById('servers_hosting');

    front_end.classList.remove('opacity');
    front_end.classList.add('animated', 'fadeIn');

    back_end.classList.remove('opacity');
    back_end.classList.add('animated', 'fadeIn', 'delay-1s');

    cms.classList.remove('opacity');
    cms.classList.add('animated', 'fadeIn', 'delay-2s');

    servers_hosting.classList.remove('opacity');
    servers_hosting.classList.add('animated', 'fadeIn', 'delay-3s');

  },
  offset: "50%" 
});


