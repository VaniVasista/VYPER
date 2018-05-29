describe ( "username.spec.js", function () {

it("step1:assertion on sap.m.Bar", function () {
//*********************Block for sap.m.Bar - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Bar","mProperties":{}},
							"parentProperties":{"metadata":"sap.m.Page","mProperties":{}},
							"prevSiblingProperties":{"metadata":"sap.m.Bar","mProperties":{}},
							"nextSiblingProperties":{"metadata":"sap.m.Toolbar","mProperties":{}},
							"childProperties":{"metadata":"sap.m.Button","mProperties":{"type":"Transparent","text":"Info","icon":"sap-icon://open-command-field"}}
							};
var Index=0;
var attribute = "visible";                //eg: title, text, value etc.
var compareValue ="true";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step2:assertion on sap.m.Bar", function () {
//*********************Block for sap.m.Bar - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Bar","mProperties":{}},
							"parentProperties":{"metadata":"sap.m.Page","mProperties":{}},
							"prevSiblingProperties":{"metadata":"sap.m.Bar","mProperties":{}},
							"nextSiblingProperties":{"metadata":"sap.m.Toolbar","mProperties":{}},
							"childProperties":{"metadata":"sap.m.Button","mProperties":{"type":"Transparent","text":"Info","icon":"sap-icon://open-command-field"}}
							};
var Index=0;
var attribute = "visible";                //eg: title, text, value etc.
var compareValue ="true";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step3:assertion on sap.ui.core.Icon", function () {
//*********************Block for sap.ui.core.Icon - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.ui.core.Icon","mProperties":{"src":"sap-icon://sys-help"}},
							"parentProperties":{"metadata":"sap.m.Button","mProperties":{"icon":"sap-icon://sys-help"}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{},
							"childProperties":{}
							};
var Index=0;
var attribute = "src";                //eg: title, text, value etc.
var compareValue ="sap-icon://sys-help";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

});