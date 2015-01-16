
sap.ui.controller("po.view.Master", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Master
*/
	onInit: function() {
		var oModel = new sap.ui.model.json.JSONModel("model/test.json");
		//oModel.loadData("model/test.json");
		sap.ui.getCore().setModel(oModel);		

	},
	
	handleSelectCustomer: function (){
		
		if (! this._oDialog) {
		      this._oDialog = sap.ui.xmlfragment("po.view.Dialog", this);
		      this.getView().addDependent(this._oDialog);
		    }		
		  
		    this._oDialog.bindElement("/Plants");
		    
		    // toggle compact style
		    jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this._oDialog);
		    this._oDialog.open();		
		
	},
	
	  //OK dialog box
	  onOkDialog: function (evt) {	
		  //var context = this.getView().byId("plant_list").getSelectedItem().getBindingContext();
		 // this.byId("list").setBindingContext(context);
		    this._oDialog.close();
		  },
	  
	  //close dialog box
	  onCloseDialog: function (oEvent) {
		    this._oDialog.close();
		  },
	
	/*handlePress : function(evt) {
		var oModel = new sap.ui.model.json.JSONModel("model/test.json");
		var context = evt.getParameters().selectedItem.getBindingContext();
		this.getView().setBindingContext(context);
		
	},*/
		

	
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Master
*/
	onBeforeRendering: function() {
		this.handleSelectCustomer();
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Master
*/
	onAfterRendering: function() {
		

	},
	
/*
	// Next button
	
	onPress: function() {
		var oTab = this.getView().byId("idIconTabBar");
	      if (oTab.getSelectedKey() == "positive")
	    	  oTab.setSelectedKey("Heavy");
	      else if(oTab.getSelectedKey() == "Heavy")
	    	  oTab.setSelectedKey("Overweight");
	    	 // oTab.setSelectedKey("hello1");
	      else if (oTab.getSelectedKey() == "Overweight")
	    	  oTab.setSelectedKey("review");
	    },*/

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Master
*/
//	onExit: function() {
//
//	}

});