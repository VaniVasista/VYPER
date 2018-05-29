describe ( "notification icon.spec.js", function () {

it("step1:assertion on sap.m.Toolbar", function () {
//*********************Block for sap.m.Toolbar - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Toolbar","mProperties":{}},
							"parentProperties":{"metadata":"sap.m.Page","mProperties":{}},
							"prevSiblingProperties":{"metadata":"sap.m.Bar","mProperties":{}},
							"nextSiblingProperties":{"metadata":"sap.m.Panel","mProperties":{"backgroundDesign":"Solid"}},
							"childProperties":{"metadata":"sap.m.Label","mProperties":{"text":"Product Selection"}}
							};
var Index=0;
var attribute = "visible";                //eg: title, text, value etc.
var compareValue ="true";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step2:click on sap.m.Toolbar", function () {
//*********************Block for sap.m.Toolbar - Perform Click*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Toolbar","mProperties":{}},
							"parentProperties":{"metadata":"sap.m.Page","mProperties":{}},
							"prevSiblingProperties":{"metadata":"sap.m.Bar","mProperties":{}},
							"nextSiblingProperties":{"metadata":"sap.m.Panel","mProperties":{"backgroundDesign":"Solid"}},
							"childProperties":{"metadata":"sap.m.Label","mProperties":{"text":"Product Selection"}}
							};
element(by.ui5(ui5ControlProperties)).click();
//!!*******************************************************************************************************

});

});