describe ( "product selected.spec.js", function () {

it("step1:assertion on sap.m.MessageStrip", function () {
//*********************Block for sap.m.MessageStrip - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.MessageStrip","mProperties":{"text":" Product Selected :  IBP CLOUD,S4HANA CLOUD,BW4HANA CLOUD,ABAP IN SAP CP,SAPLEAPPLICATIONPLATFORM,SAPA1S"}},
							"parentProperties":{"metadata":"sap.m.Toolbar","mProperties":{}},
							"prevSiblingProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Product List","type":"Transparent","icon":"sap-icon://arrow-down"}},
							"nextSiblingProperties":{"metadata":"sap.m.ToolbarSpacer","mProperties":{}},
							"childProperties":{"metadata":"sap.m.Text","mProperties":{"text":" Product Selected :  IBP CLOUD,S4HANA CLOUD,BW4HANA CLOUD,ABAP IN SAP CP,SAPLEAPPLICATIONPLATFORM,SAPA1S"}}
							};
var Index=0;
var attribute = "visible";                //eg: title, text, value etc.
var compareValue ="true";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

});