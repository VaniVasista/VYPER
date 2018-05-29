describe ( "EPname.spec.js", function () {

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

});