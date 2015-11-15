var Backbone = require("backbone"),
    Marionette = require("backbone.marionette"),
    OOS = require("../outofsight.js"),
    // Collections

    // Views
    NavbarView = require("../views/navbar"),
    HomeView = require("../views/home");
    // Models

    // Utils
    

var OOSController = Marionette.Controller.extend({
    initialize: function() {
        //EmulateHTTP to ensure it's going to work with the API
    },

    start: function() {
        this.showNavbar();

        // Initialize current user
        // this.currentUser = new UserModel({"user": User.user});
        // this.currentUser.fetch({
        //     success: function(model) { // the fetched model!
        //         OOS.vent.trigger("user:Fetched", model);
        //     }
        // });
    },

    showNavbar: function() {
        OOS.navbarContainer.show(new NavbarView({

        }));
    },

    showHomePage: function() {
        // this.categories = new CategoriesCollection([], { "user": User.user });

        // POSMenu.vent.trigger("menu:FocusCategories", this.model);
        OOS.mainContainer.show(new HomeView({
            contentType: "home"
        }));

        // this.categories.fetch({
        //     success: function(collection) { // the fetched collection!
        //         if (collection.length == 4) {
        //             POSMenu.vent.trigger("category:MaxReached");
        //         }
        //     }
        // });
    },

    showAboutPage: function() {
        OOS.mainContainer.show(new HomeView({
            contentType: "about"
        }));
    }
});

module.exports = OOSController;
