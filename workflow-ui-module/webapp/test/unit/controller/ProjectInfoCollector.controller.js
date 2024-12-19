/*global QUnit*/

sap.ui.define([
	"projectInfoColl/workflow-ui-module/controller/ProjectInfoCollector.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ProjectInfoCollector Controller");

	QUnit.test("I should test the ProjectInfoCollector controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
