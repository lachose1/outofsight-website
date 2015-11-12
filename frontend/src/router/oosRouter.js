var Marionette = require("backbone.marionette");

var OOSRouter = Marionette.AppRouter.extend({
    appRoutes: {
    	"": "showHomePage",
    	"categories": "showHomePage",
    	"products/:category": "showProductsPage"
    }
});

module.exports = OOSRouter;
