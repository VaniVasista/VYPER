describe ( "product list.spec.js", function () {

it("step1:assertion on sap.m.Label", function () {
//*********************Block for sap.m.Label - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Label","mProperties":{"text":"Product Selection"}},
							"parentProperties":{"metadata":"sap.m.Toolbar","mProperties":{}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Product List","type":"Transparent","icon":"sap-icon://arrow-down"}},
							"childProperties":{}
							};
var Index=0;
var attribute = "text";                //eg: title, text, value etc.
var compareValue ="Product Selection";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step2:click on sap.m.Button", function () {
//*********************Block for sap.m.Button - Perform Click*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Product List","type":"Transparent","icon":"sap-icon://arrow-down"}},
							"parentProperties":{"metadata":"sap.m.Toolbar","mProperties":{}},
							"prevSiblingProperties":{"metadata":"sap.m.Label","mProperties":{"text":"Product Selection"}},
							"nextSiblingProperties":{"metadata":"sap.m.MessageStrip","mProperties":{"text":" Product Selected :  IBP CLOUD,S4HANA CLOUD,BW4HANA CLOUD,ABAP IN SAP CP,SAPLEAPPLICATIONPLATFORM,SAPA1S"}},
							"childProperties":{"metadata":"sap.ui.core.Icon","mProperties":{"src":"sap-icon://arrow-down"}}
							};
element(by.ui5(ui5ControlProperties)).click();
//!!*******************************************************************************************************

});

it("step3:assertion on sap.m.ColumnListItem", function () {
//*********************Block for sap.m.ColumnListItem - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.ColumnListItem","mProperties":{"type":"Active"}},
							"parentProperties":{"metadata":"sap.m.Table","mProperties":{"mode":"MultiSelect"}},
							"prevSiblingProperties":{"metadata":"sap.m.ColumnListItem","mProperties":{"type":"Active"}},
							"nextSiblingProperties":{"metadata":"sap.m.ColumnListItem","mProperties":{"type":"Active"}},
							"childProperties":{"metadata":"sap.m.CheckBox","mProperties":{}}
							};
var Index=0;
var attribute = "visible";                //eg: title, text, value etc.
var compareValue ="true";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step4:assertion on sap.m.Text", function () {
//*********************Block for sap.m.Text - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Text","mProperties":{"text":"S4HANA CLOUD"}},
							"parentProperties":{"metadata":"sap.m.ObjectIdentifier","mProperties":{"title":"S4HANA CLOUD"}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{"metadata":"sap.ui.core.InvisibleText","mProperties":{"text":"Object Identifier"}},
							"childProperties":{}
							};
var Index=0;
var attribute = "text";                //eg: title, text, value etc.
var compareValue ="S4HANA CLOUD";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step5:assertion on sap.m.Text", function () {
//*********************Block for sap.m.Text - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Text","mProperties":{"text":"SAPA1S"}},
							"parentProperties":{"metadata":"sap.m.ObjectIdentifier","mProperties":{"title":"SAPA1S"}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{"metadata":"sap.ui.core.InvisibleText","mProperties":{"text":"Object Identifier"}},
							"childProperties":{}
							};
var Index=0;
var attribute = "text";                //eg: title, text, value etc.
var compareValue ="SAPA1S";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step6:assertion on sap.m.Text", function () {
//*********************Block for sap.m.Text - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Text","mProperties":{"text":"SAPLEAPPLICATIONPLATFORM"}},
							"parentProperties":{"metadata":"sap.m.ObjectIdentifier","mProperties":{"title":"SAPLEAPPLICATIONPLATFORM"}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{"metadata":"sap.ui.core.InvisibleText","mProperties":{"text":"Object Identifier"}},
							"childProperties":{}
							};
var Index=0;
var attribute = "text";                //eg: title, text, value etc.
var compareValue ="SAPLEAPPLICATIONPLATFORM";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

});