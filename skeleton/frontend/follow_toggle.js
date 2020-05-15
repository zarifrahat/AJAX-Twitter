// const ApiUtil = require("./api_util"); // took out our .js because its not needed


class FollowToggle { // data is a Jquery method. meaning only be called on jQuery objects
    constructor(element){
        this.$el = $(element); // the solution to the comment below;
        this.userId = this.$el.data("userId"); // flagged an error message because we were not invoking the Jquery method #data on a Jquery object. Just a HTML element!
        this.followState = this.$el.data("followState"); 
        this.render(); 
        this.handleClick();
    }

    render() {
        if (this.followState === false) {
            this.$el.text("Follow!")
        } else {
            this.$el.text("Unfollow!");
        }
    }

    handleClick(){
        // Make sure to remember that we open curly braces within our args.
        this.$el.on("click", this.$el, event => { // event refers to what happens to activate this method
            event.preventDefault();
            // ajaxUtil (id)
            // ApiUtil.followUser(this.$el)
            if (this.followState) {
                $.ajax({
                    method: "DELETE",
                    url: `/users/${this.userId}/follow`,
                    datatype: "json", // Do we want to use this datatype because using HTML forces a refresh
                    data: { this: this.followState }, // what exactly is data
                    success(){ this.followState = false} ,
                    error(){this.followState = true} 
                })
                debugger
            } else {
                     $.ajax({
                    method: "POST",
                    url: `/users/${this.userId}/follow`,
                    datatype: "json", // Do we want to use this datatype because using HTML forces a refresh
                    data: {this: this.followState}, // what exactly is data
                    success(){this.followState = false} ,
                    error(){this.followState = true} 
                })
            }

        });
    }
    
} // how are we using/calling the follow toggle class

module.exports = FollowToggle;