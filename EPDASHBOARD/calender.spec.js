describe ( "calender.spec.js", function () {

it("step1:click on sap.m.Button", function () {
//*********************Block for sap.m.Button - Perform Click*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Button","mProperties":{"type":"Transparent","icon":"sap-icon://appointment-2"}},
							"parentProperties":{"metadata":"sap.m.Toolbar","mProperties":{}},
							"prevSiblingProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Landscape","type":"Transparent"}},
							"nextSiblingProperties":{"metadata":"sap.m.Switch","mProperties":{"type":"AcceptReject","customTextOn":"OFF","customTextOff":"ON"}},
							"childProperties":{"metadata":"sap.ui.core.Icon","mProperties":{"src":"sap-icon://appointment-2"}}
							};
element(by.ui5(ui5ControlProperties)).click();
//!!*******************************************************************************************************

});

it("step2:assertion on sap.m.Button", function () {
//*********************Block for sap.m.Button - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Button","mProperties":{"type":"Transparent","icon":"sap-icon://appointment-2"}},
							"parentProperties":{"metadata":"sap.m.Toolbar","mProperties":{}},
							"prevSiblingProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Landscape","type":"Transparent"}},
							"nextSiblingProperties":{"metadata":"sap.m.Switch","mProperties":{"type":"AcceptReject","customTextOn":"OFF","customTextOff":"ON"}},
							"childProperties":{"metadata":"sap.ui.core.Icon","mProperties":{"src":"sap-icon://appointment-2"}}
							};
var Index=0;
var attribute = "visible";                //eg: title, text, value etc.
var compareValue ="true";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

});