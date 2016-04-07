var Marionette = require("backbone.marionette");

var OOSRouter = Marionette.AppRouter.extend({
    appRoutes: {
    	"": "showHomePage",
    	"about": "showAboutPage"
    }
});

module.exports = OOSRouter;
