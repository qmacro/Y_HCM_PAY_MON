jQuery.sap.declare("hcm.mypaystubs.Y_HCM_PAY_MON.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "hcm.mypaystubs",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/HCM_PAY_MON"
		// we use a URL relative to our own component
		// extension application is deployed with customer namespace
});

this.hcm.mypaystubs.Component.extend("hcm.mypaystubs.Y_HCM_PAY_MON.Component", {
	metadata: {
		version: "1.0",
		config: {},

		customizing: {}
	}
});