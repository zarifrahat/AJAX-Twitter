const FollowToggle = require("./follow_toggle"); // took out our .js because its not needed

$(()=>{  // referred to as a document ready method that
   const $buttons =  $(".follow-toggle"); // outputs a JQuery object
   for (let index = 0; index < $buttons.length; index++) {
       const element = $buttons[index];  // outputs a specific element, are we ouputiing a Jquery object or JS object or HTML object
    //    debugger;
       const followButton = new FollowToggle(element);
    //    debugger;
   }
   
})

