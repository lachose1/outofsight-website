var _ = require("underscore"),
    Marionette = require("backbone.marionette"),
    OOS = require("../outofsight"),
    OOSUrl = require("../config/oosUrl"),
    ConfirmModalView = require("./confirmModal"),
    template = require("../../dist/templates").navbar;

var NavbarView = Marionette.LayoutView.extend({
    template: template,

    regions: {
        //"clockContainer": "#clock-container"
        // "importCSV": "#btn-menu-importcsv"
    },

    events: {        
        // "click #btn-menu-products": "handleProductsMenuClick",
        // "click #btn-menu-importcsv": "handleImportCSVClick",
        // "click #vendor-name": "handleVendorNameClick"
    },

    initialize: function(options) {
        this.vendorName = "";
    },

    onRender: function() {
        //this.clockContainer.show(new ClockView());
    }
});

module.exports = NavbarView;
