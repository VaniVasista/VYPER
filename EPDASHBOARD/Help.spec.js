describe ( "Help.spec.js", function () {

it("step1:assertion on sap.m.Button", function () {
//*********************Block for sap.m.Button - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Button","mProperties":{"icon":"sap-icon://sys-help"}},
							"parentProperties":{"metadata":"sap.m.Bar","mProperties":{}},
							"prevSiblingProperties":{"metadata":"sap.m.Text","mProperties":{"text":"Welcome SUSHMA"}},
							"nextSiblingProperties":{"metadata":"sap.ui.core.mvc.XMLView","mProperties":{}},
							"childProperties":{"metadata":"sap.ui.core.Icon","mProperties":{"src":"sap-icon://sys-help"}}
							};
var Index=0;
var attribute = "icon";                //eg: title, text, value etc.
var compareValue ="sap-icon://sys-help";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step2:click on sap.m.Button", function () {
//*********************Block for sap.m.Button - Perform Click*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Button","mProperties":{"icon":"sap-icon://sys-help"}},
							"parentProperties":{"metadata":"sap.m.Bar","mProperties":{}},
							"prevSiblingProperties":{"metadata":"sap.m.Text","mProperties":{"text":"Welcome SUSHMA"}},
							"nextSiblingProperties":{"metadata":"sap.ui.core.mvc.XMLView","mProperties":{}},
							"childProperties":{"metadata":"sap.ui.core.Icon","mProperties":{"src":"sap-icon://sys-help"}}
							};
element(by.ui5(ui5ControlProperties)).click();
//!!*******************************************************************************************************

});

it("step3:click on sap.ui.layout.ResponsiveFlowLayout", function () {
//*********************Block for sap.ui.layout.ResponsiveFlowLayout - Perform Click*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.ui.layout.ResponsiveFlowLayout","mProperties":{}},
							"parentProperties":{"metadata":"sap.ui.layout.ResponsiveFlowLayout","mProperties":{}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{},
							"childProperties":{"metadata":"sap.m.Label","mProperties":{"text":"Tool/Tip Videos"}}
							};
element(by.ui5(ui5ControlProperties)).click();
//!!*******************************************************************************************************

});

it("step4:assertion on sap.ui.layout.ResponsiveFlowLayout", function () {
//*********************Block for sap.ui.layout.ResponsiveFlowLayout - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.ui.layout.ResponsiveFlowLayout","mProperties":{}},
							"parentProperties":{"metadata":"sap.ui.layout.ResponsiveFlowLayout","mProperties":{}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{},
							"childProperties":{"metadata":"sap.m.Label","mProperties":{"text":"Tool/Tip Videos"}}
							};
var Index=0;
var attribute = "visible";                //eg: title, text, value etc.
var compareValue ="true";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step5:assertion on sap.m.Popover", function () {
//*********************Block for sap.m.Popover - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Popover","mProperties":{"contentWidth":"300px","placement":"Bottom"}},
							"parentProperties":{},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{},
							"childProperties":{}
							};
var Index=0;
var attribute = "visible";                //eg: title, text, value etc.
var compareValue ="true";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step6:assertion on sap.m.Popover", function () {
//*********************Block for sap.m.Popover - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Popover","mProperties":{"contentWidth":"300px","placement":"Bottom"}},
							"parentProperties":{},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{},
							"childProperties":{}
							};
var Index=0;
var attribute = "visible";                //eg: title, text, value etc.
var compareValue ="true";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step7:assertion on sap.m.Popover", function () {
//*********************Block for sap.m.Popover - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Popover","mProperties":{"contentWidth":"300px","placement":"Bottom"}},
							"parentProperties":{},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{},
							"childProperties":{}
							};
var Index=0;
var attribute = "visible";                //eg: title, text, value etc.
var compareValue ="true";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

});