describe ( "INFO.spec.js", function () {

it("step1:click on sap.m.Button", function () {
//*********************Block for sap.m.Button - Perform Click*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Button","mProperties":{"type":"Transparent","text":"Info","icon":"sap-icon://open-command-field"}},
							"parentProperties":{"metadata":"sap.m.Bar","mProperties":{}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{"metadata":"sap.m.Image","mProperties":{"src":"https://ldcipqt.wdf.sap.corp:44366/sap/bc/ui5_ui5/brlt/emy_patch/~FA163E30EBB41ED893D09E114B8566F1~/img/logo.png"}},
							"childProperties":{"metadata":"sap.ui.core.Icon","mProperties":{"src":"sap-icon://open-command-field"}}
							};
element(by.ui5(ui5ControlProperties)).click();
//!!*******************************************************************************************************

});

it("step2:assertion on sap.m.Button", function () {
//*********************Block for sap.m.Button - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Info","type":"Transparent","icon":"sap-icon://close-command-field"}},
							"parentProperties":{"metadata":"sap.m.Bar","mProperties":{"design":"Auto"}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{"metadata":"sap.m.Text","mProperties":{"text":"List of HotLiners"}},
							"childProperties":{"metadata":"sap.ui.core.Icon","mProperties":{"src":"sap-icon://close-command-field"}}
							};
var Index=0;
var attribute = "visible";                //eg: title, text, value etc.
var compareValue ="true";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step3:assertion on sap.m.Bar", function () {
//*********************Block for sap.m.Bar - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Bar","mProperties":{"design":"Auto"}},
							"parentProperties":{"metadata":"sap.ui.unified.SplitContainer","mProperties":{"secondaryContentSize":"610px"}},
							"prevSiblingProperties":{"metadata":"sap.m.Page","mProperties":{}},
							"nextSiblingProperties":{"metadata":"sap.m.Panel","mProperties":{"backgroundDesign":"Solid"}},
							"childProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Info","type":"Transparent","icon":"sap-icon://close-command-field"}}
							};
var Index=0;
var attribute = "visible";                //eg: title, text, value etc.
var compareValue ="true";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step4:assertion on sap.m.SegmentedButton", function () {
//*********************Block for sap.m.SegmentedButton - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.SegmentedButton","mProperties":{}},
							"parentProperties":{"metadata":"sap.m.Bar","mProperties":{"design":"Auto"}},
							"prevSiblingProperties":{"metadata":"sap.m.Text","mProperties":{"text":"List of HotLiners"}},
							"nextSiblingProperties":{},
							"childProperties":{"metadata":"sap.m.Button","mProperties":{"text":"S4H/IBP"}}
							};
var Index=0;
var attribute = "visible";                //eg: title, text, value etc.
var compareValue ="true";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step5:assertion on sap.m.SegmentedButton", function () {
//*********************Block for sap.m.SegmentedButton - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.SegmentedButton","mProperties":{}},
							"parentProperties":{"metadata":"sap.m.Bar","mProperties":{"design":"Auto"}},
							"prevSiblingProperties":{"metadata":"sap.m.Text","mProperties":{"text":"List of HotLiners"}},
							"nextSiblingProperties":{},
							"childProperties":{"metadata":"sap.m.Button","mProperties":{"text":"S4H/IBP"}}
							};
var Index=0;
var attribute = "visible";                //eg: title, text, value etc.
var compareValue ="true";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step6:assertion on sap.m.Image", function () {
//*********************Block for sap.m.Image - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Image","mProperties":{"src":"https://ldcipqt.wdf.sap.corp:44366/sap/bc/ui5_ui5/brlt/emy_patch/~FA163E30EBB41ED893D09CDE7BB2A6F1~/img/India.png"}},
							"parentProperties":{"metadata":"sap.m.Toolbar","mProperties":{}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{"metadata":"sap.m.Image","mProperties":{"src":"https://ldcipqt.wdf.sap.corp:44366/sap/bc/ui5_ui5/brlt/emy_patch/~FA163E30EBB41ED893D09C80445A86F1~/img/german.png"}},
							"childProperties":{}
							};
var Index=0;
var attribute = "src";                //eg: title, text, value etc.
var compareValue ="https://ldcipqt.wdf.sap.corp:44366/sap/bc/ui5_ui5/brlt/emy_patch/~FA163E30EBB41ED893D09CDE7BB2A6F1~/img/India.png";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step7:assertion on sap.m.Toolbar", function () {
//*********************Block for sap.m.Toolbar - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Toolbar","mProperties":{}},
							"parentProperties":{"metadata":"sap.m.Panel","mProperties":{"backgroundDesign":"Solid"}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{"metadata":"sap.ui.layout.HorizontalLayout","mProperties":{}},
							"childProperties":{"metadata":"sap.m.Image","mProperties":{"src":"https://ldcipqt.wdf.sap.corp:44366/sap/bc/ui5_ui5/brlt/emy_patch/~FA163E30EBB41ED893D09CDE7BB2A6F1~/img/India.png"}}
							};
var Index=0;
var attribute = "visible";                //eg: title, text, value etc.
var compareValue ="true";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step8:assertion on sap.m.Toolbar", function () {
//*********************Block for sap.m.Toolbar - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Toolbar","mProperties":{}},
							"parentProperties":{"metadata":"sap.m.Panel","mProperties":{"backgroundDesign":"Solid"}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{"metadata":"sap.ui.layout.HorizontalLayout","mProperties":{}},
							"childProperties":{"metadata":"sap.m.Image","mProperties":{"src":"https://ldcipqt.wdf.sap.corp:44366/sap/bc/ui5_ui5/brlt/emy_patch/~FA163E30EBB41ED893D09CDE7BB2A6F1~/img/India.png"}}
							};
var Index=0;
var attribute = "visible";                //eg: title, text, value etc.
var compareValue ="true";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step9:assertion on sap.m.Bar", function () {
//*********************Block for sap.m.Bar - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Bar","mProperties":{"design":"Auto"}},
							"parentProperties":{"metadata":"sap.ui.unified.SplitContainer","mProperties":{"secondaryContentSize":"610px"}},
							"prevSiblingProperties":{"metadata":"sap.m.Panel","mProperties":{"backgroundDesign":"Solid"}},
							"nextSiblingProperties":{"metadata":"sap.m.Bar","mProperties":{"design":"Auto"}},
							"childProperties":{"metadata":"sap.m.Link","mProperties":{"text":"Assign Hotliners","href":"https://pqpmain.wdf.sap.corp:44376/sap/bc/ui5_ui5/brlt/hotline_d/index.html","target":"_blank"}}
							};
var Index=0;
var attribute = "visible";                //eg: title, text, value etc.
var compareValue ="true";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step10:assertion on sap.m.Text", function () {
//*********************Block for sap.m.Text - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Text","mProperties":{"text":"Quick Links"}},
							"parentProperties":{"metadata":"sap.m.Bar","mProperties":{"design":"Auto"}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{},
							"childProperties":{}
							};
var Index=0;
var attribute = "text";                //eg: title, text, value etc.
var compareValue ="Quick Links";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step11:assertion on sap.tnt.NavigationListItem", function () {
//*********************Block for sap.tnt.NavigationListItem - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.tnt.NavigationListItem","mProperties":{"icon":"sap-icon://email","text":"dfdsfsdsf"}},
							"parentProperties":{"metadata":"sap.tnt.NavigationList","mProperties":{}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{"metadata":"sap.tnt.NavigationListItem","mProperties":{"icon":"sap-icon://email","text":"jfslkjfd"}},
							"childProperties":{}
							};
var Index=0;
var attribute = "visible";                //eg: title, text, value etc.
var compareValue ="true";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step12:assertion on sap.tnt.NavigationListItem", function () {
//*********************Block for sap.tnt.NavigationListItem - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.tnt.NavigationListItem","mProperties":{"icon":"sap-icon://chain-link","text":"test1"}},
							"parentProperties":{"metadata":"sap.tnt.NavigationList","mProperties":{}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{"metadata":"sap.tnt.NavigationListItem","mProperties":{"icon":"sap-icon://chain-link","text":"test2"}},
							"childProperties":{}
							};
var Index=0;
var attribute = "visible";                //eg: title, text, value etc.
var compareValue ="true";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step13:assertion on sap.tnt.NavigationListItem", function () {
//*********************Block for sap.tnt.NavigationListItem - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.tnt.NavigationListItem","mProperties":{"icon":"sap-icon://email","text":"jfslkjfd"}},
							"parentProperties":{"metadata":"sap.tnt.NavigationList","mProperties":{}},
							"prevSiblingProperties":{"metadata":"sap.tnt.NavigationListItem","mProperties":{"icon":"sap-icon://email","text":"dfdsfsdsf"}},
							"nextSiblingProperties":{},
							"childProperties":{}
							};
var Index=0;
var attribute = "visible";                //eg: title, text, value etc.
var compareValue ="true";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step14:assertion on sap.tnt.NavigationListItem", function () {
//*********************Block for sap.tnt.NavigationListItem - Perform Assert*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.tnt.NavigationListItem","mProperties":{"icon":"sap-icon://chain-link","text":"test2"}},
							"parentProperties":{"metadata":"sap.tnt.NavigationList","mProperties":{}},
							"prevSiblingProperties":{"metadata":"sap.tnt.NavigationListItem","mProperties":{"icon":"sap-icon://chain-link","text":"test1"}},
							"nextSiblingProperties":{},
							"childProperties":{}
							};
var Index=0;
var attribute = "visible";                //eg: title, text, value etc.
var compareValue ="true";             //expected value
expect(element(by.ui5(ui5ControlProperties)).getUI5Attribute(attribute)).toBe(compareValue);
//!!*******************************************************************************************************

});

it("step15:click on sap.m.Button", function () {
//*********************Block for sap.m.Button - Perform Click*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Info","type":"Transparent","icon":"sap-icon://close-command-field"}},
							"parentProperties":{"metadata":"sap.m.Bar","mProperties":{"design":"Auto"}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{"metadata":"sap.m.Text","mProperties":{"text":"List of HotLiners"}},
							"childProperties":{"metadata":"sap.ui.core.Icon","mProperties":{"src":"sap-icon://close-command-field"}}
							};
element(by.ui5(ui5ControlProperties)).click();
//!!*******************************************************************************************************

});

it("step16:click on sap.ui.core.Icon", function () {
//*********************Block for sap.ui.core.Icon - Perform Click*****************************************************************
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.ui.core.Icon","mProperties":{"src":"sap-icon://close-command-field"}},
							"parentProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Info","type":"Transparent","icon":"sap-icon://close-command-field"}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{},
							"childProperties":{}
							};
element(by.ui5(ui5ControlProperties)).click();
//!!*******************************************************************************************************

});

});