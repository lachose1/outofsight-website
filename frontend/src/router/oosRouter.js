var Marionette = require("backbone.marionette");

var OOSRouter = Marionette.AppRouter.extend({
    appRoutes: {
    	"": "showHomePage"
    }
});

module.exports = OOSRouter;
