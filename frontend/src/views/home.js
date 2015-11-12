var _ = require("underscore"),
    Marionette = require("backbone.marionette"),
    OOS = require("../outofsight"),
    template = require("../../dist/templates").home;

var HomeView = Marionette.LayoutView.extend({
    template: template,

    regions: {
        sidebar: "#left-sidebar",
        famocoPreview: "#famoco-preview"
    },

    ui: {
        //btnCategory: ".btn-category"
    },

    events: {
        //"click @ui.btnCategory": "handleCategoryClick"
    },

    initialize: function(options) {
        this.pageType = options.pageType;

        if(options.pageType == "categories") {
            this.mainView = new CategoriesView({
                collection: this.collection
            });
        }
        if(options.pageType == "products") {
            this.mainView = new ProductsView({
                collection: this.collection,
                categories: options.categories,
                category: options.category
            });
        }
    },

    onRender: function() {
        // this.sidebar.show(this.mainView);
        // this.famocoPreview.show(new FamocoPreviewView({collection: this.collection, pageType: this.pageType}));
    },
});

module.exports = HomeView;
