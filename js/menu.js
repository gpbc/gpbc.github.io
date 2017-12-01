var nav = responsiveNav(".nav-collapse", { // Selector
    animate: true, // Boolean: Use CSS3 transitions, true or false
    transition: 350, // Integer: Speed of the transition, in milliseconds
    label: "Menu", // String: Label for the navigation toggle
    insert: "before", // String: Insert the toggle before or after the navigation
    customToggle: "custom-toggle", // Selector: Specify the ID of a custom toggle
    closeOnNavClick: false, // Boolean: Close the navigation when one of the links are clicked
    openPos: "static", // String: Position of the opened nav, relative or static
    navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
    navActiveClass: "js-nav-active", // String: Class that is added to  element when nav is active
    jsClass: "js", // String: 'JS enabled' class which is added to  element
    init: function(){}, // Function: Init callback
    open: function(){
      //$('menu .logo').toggle();
    }, // Function: Open callback
    close: function(){
      //$('menu .logo)').toggle();
    } // Function: Close callback
});
