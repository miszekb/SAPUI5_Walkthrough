sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
    "use strict"

    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        formatter,
        onInit: function() {
            let oViewModel = new JSONModel({
                currency: "EUR"
            });

            this.getView().setModel(oViewModel, "view");
        },
        onFilterInvoices: function(oEvent) {
            // build filter array
            let aFilter = [];
            let sQuery = oEvent.getParameter("query");
            if (sQuery) {
                aFilter.push(
                    new Filter(
                        "ProductName",
                        FilterOperator.Contains,
                        sQuery
                    ))
            }

            // filter binding
            let oList = this.byId("invoiceList");
            let oBinding = oList.getBinding("items")
            oBinding.filter(aFilter);
        }
    });
});