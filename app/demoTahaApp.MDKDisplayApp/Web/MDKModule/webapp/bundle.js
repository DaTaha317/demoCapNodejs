(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/MDKDisplayApp/i18n/i18n.properties":
/*!**************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/i18n/i18n.properties ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "Draft_DraftAdministrativeData=Draft_DraftAdministrativeData\nDraft_DraftUUID=Draft_DraftUUID\nDraft_CreationDateTime=Draft_CreationDateTime\nDraft_CreatedByUser=Draft_CreatedByUser\nDraft_DraftIsCreatedByMe=Draft_DraftIsCreatedByMe\nDraft_LastChangeDateTime=Draft_LastChangeDateTime\nDraft_LastChangedByUser=Draft_LastChangedByUser\nDraft_InProcessByUser=Draft_InProcessByUser\nDraft_DraftIsProcessedByMe=Draft_DraftIsProcessedByMe\nEmployee=Employee\nEmployee_Detail=Employee Detail\nCreate_Employee_Detail=Create Employee Detail\nUpdate_Employee_Detail=Update Employee Detail"

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let mdkdisplayapp_actions_application_appupdate_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/Application/AppUpdate.action */ "./build.definitions/MDKDisplayApp/Actions/Application/AppUpdate.action")
let mdkdisplayapp_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/MDKDisplayApp/Actions/Application/AppUpdateFailureMessage.action")
let mdkdisplayapp_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/MDKDisplayApp/Actions/Application/AppUpdateProgressBanner.action")
let mdkdisplayapp_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/MDKDisplayApp/Actions/Application/AppUpdateSuccessMessage.action")
let mdkdisplayapp_actions_application_logout_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/Application/Logout.action */ "./build.definitions/MDKDisplayApp/Actions/Application/Logout.action")
let mdkdisplayapp_actions_application_navtoabout_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/Application/NavToAbout.action */ "./build.definitions/MDKDisplayApp/Actions/Application/NavToAbout.action")
let mdkdisplayapp_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/Application/NavToActivityLog.action */ "./build.definitions/MDKDisplayApp/Actions/Application/NavToActivityLog.action")
let mdkdisplayapp_actions_application_navtosupport_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/Application/NavToSupport.action */ "./build.definitions/MDKDisplayApp/Actions/Application/NavToSupport.action")
let mdkdisplayapp_actions_application_onwillupdate_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/Application/OnWillUpdate.action */ "./build.definitions/MDKDisplayApp/Actions/Application/OnWillUpdate.action")
let mdkdisplayapp_actions_application_reset_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/Application/Reset.action */ "./build.definitions/MDKDisplayApp/Actions/Application/Reset.action")
let mdkdisplayapp_actions_application_resetmessage_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/Application/ResetMessage.action */ "./build.definitions/MDKDisplayApp/Actions/Application/ResetMessage.action")
let mdkdisplayapp_actions_application_usermenupopover_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/Application/UserMenuPopover.action */ "./build.definitions/MDKDisplayApp/Actions/Application/UserMenuPopover.action")
let mdkdisplayapp_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/CloseModalPage_Cancel.action */ "./build.definitions/MDKDisplayApp/Actions/CloseModalPage_Cancel.action")
let mdkdisplayapp_actions_closemodalpage_complete_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/CloseModalPage_Complete.action */ "./build.definitions/MDKDisplayApp/Actions/CloseModalPage_Complete.action")
let mdkdisplayapp_actions_closepage_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/ClosePage.action */ "./build.definitions/MDKDisplayApp/Actions/ClosePage.action")
let mdkdisplayapp_actions_createentityfailuremessage_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/CreateEntityFailureMessage.action */ "./build.definitions/MDKDisplayApp/Actions/CreateEntityFailureMessage.action")
let mdkdisplayapp_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/MDKDisplayApp/Actions/CreateEntitySuccessMessage.action")
let mdkdisplayapp_actions_deleteconfirmation_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/DeleteConfirmation.action */ "./build.definitions/MDKDisplayApp/Actions/DeleteConfirmation.action")
let mdkdisplayapp_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/MDKDisplayApp/Actions/DeleteEntityFailureMessage.action")
let mdkdisplayapp_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/MDKDisplayApp/Actions/DeleteEntitySuccessMessage.action")
let mdkdisplayapp_actions_demotahaappservice_employee_employee_createentity_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/demoTahaAppService/Employee/Employee_CreateEntity.action */ "./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Employee/Employee_CreateEntity.action")
let mdkdisplayapp_actions_demotahaappservice_employee_employee_deleteentity_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/demoTahaAppService/Employee/Employee_DeleteEntity.action */ "./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Employee/Employee_DeleteEntity.action")
let mdkdisplayapp_actions_demotahaappservice_employee_employee_updateentity_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/demoTahaAppService/Employee/Employee_UpdateEntity.action */ "./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Employee/Employee_UpdateEntity.action")
let mdkdisplayapp_actions_demotahaappservice_employee_navtoemployee_create_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/demoTahaAppService/Employee/NavToEmployee_Create.action */ "./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Employee/NavToEmployee_Create.action")
let mdkdisplayapp_actions_demotahaappservice_employee_navtoemployee_detail_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/demoTahaAppService/Employee/NavToEmployee_Detail.action */ "./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Employee/NavToEmployee_Detail.action")
let mdkdisplayapp_actions_demotahaappservice_employee_navtoemployee_edit_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/demoTahaAppService/Employee/NavToEmployee_Edit.action */ "./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Employee/NavToEmployee_Edit.action")
let mdkdisplayapp_actions_demotahaappservice_employee_navtoemployee_list_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/demoTahaAppService/Employee/NavToEmployee_List.action */ "./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Employee/NavToEmployee_List.action")
let mdkdisplayapp_actions_demotahaappservice_service_initializeonline_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/demoTahaAppService/Service/InitializeOnline.action */ "./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Service/InitializeOnline.action")
let mdkdisplayapp_actions_demotahaappservice_service_initializeonlinefailuremessage_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/demoTahaAppService/Service/InitializeOnlineFailureMessage.action */ "./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Service/InitializeOnlineFailureMessage.action")
let mdkdisplayapp_actions_draftdiscardentity_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/DraftDiscardEntity.action */ "./build.definitions/MDKDisplayApp/Actions/DraftDiscardEntity.action")
let mdkdisplayapp_actions_drafteditentity_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/DraftEditEntity.action */ "./build.definitions/MDKDisplayApp/Actions/DraftEditEntity.action")
let mdkdisplayapp_actions_draftsaveentity_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/DraftSaveEntity.action */ "./build.definitions/MDKDisplayApp/Actions/DraftSaveEntity.action")
let mdkdisplayapp_actions_genericbannermessage_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/GenericBannerMessage.action */ "./build.definitions/MDKDisplayApp/Actions/GenericBannerMessage.action")
let mdkdisplayapp_actions_genericmessagebox_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/GenericMessageBox.action */ "./build.definitions/MDKDisplayApp/Actions/GenericMessageBox.action")
let mdkdisplayapp_actions_genericnavigation_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/GenericNavigation.action */ "./build.definitions/MDKDisplayApp/Actions/GenericNavigation.action")
let mdkdisplayapp_actions_generictoastmessage_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/GenericToastMessage.action */ "./build.definitions/MDKDisplayApp/Actions/GenericToastMessage.action")
let mdkdisplayapp_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/Logging/LogUploadFailure.action */ "./build.definitions/MDKDisplayApp/Actions/Logging/LogUploadFailure.action")
let mdkdisplayapp_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/MDKDisplayApp/Actions/Logging/LogUploadSuccessful.action")
let mdkdisplayapp_actions_logging_uploadlog_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/Logging/UploadLog.action */ "./build.definitions/MDKDisplayApp/Actions/Logging/UploadLog.action")
let mdkdisplayapp_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/Logging/UploadLogProgress.action */ "./build.definitions/MDKDisplayApp/Actions/Logging/UploadLogProgress.action")
let mdkdisplayapp_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/MDKDisplayApp/Actions/UpdateEntityFailureMessage.action")
let mdkdisplayapp_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./MDKDisplayApp/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/MDKDisplayApp/Actions/UpdateEntitySuccessMessage.action")
let mdkdisplayapp_globals_application_appdefinition_version_global = __webpack_require__(/*! ./MDKDisplayApp/Globals/Application/AppDefinition_Version.global */ "./build.definitions/MDKDisplayApp/Globals/Application/AppDefinition_Version.global")
let mdkdisplayapp_globals_application_applicationname_global = __webpack_require__(/*! ./MDKDisplayApp/Globals/Application/ApplicationName.global */ "./build.definitions/MDKDisplayApp/Globals/Application/ApplicationName.global")
let mdkdisplayapp_globals_application_supportemail_global = __webpack_require__(/*! ./MDKDisplayApp/Globals/Application/SupportEmail.global */ "./build.definitions/MDKDisplayApp/Globals/Application/SupportEmail.global")
let mdkdisplayapp_globals_application_supportphone_global = __webpack_require__(/*! ./MDKDisplayApp/Globals/Application/SupportPhone.global */ "./build.definitions/MDKDisplayApp/Globals/Application/SupportPhone.global")
let mdkdisplayapp_i18n_i18n_properties = __webpack_require__(/*! ./MDKDisplayApp/i18n/i18n.properties */ "./build.definitions/MDKDisplayApp/i18n/i18n.properties")
let mdkdisplayapp_jsconfig_json = __webpack_require__(/*! ./MDKDisplayApp/jsconfig.json */ "./build.definitions/MDKDisplayApp/jsconfig.json")
let mdkdisplayapp_pages_application_about_page = __webpack_require__(/*! ./MDKDisplayApp/Pages/Application/About.page */ "./build.definitions/MDKDisplayApp/Pages/Application/About.page")
let mdkdisplayapp_pages_application_support_page = __webpack_require__(/*! ./MDKDisplayApp/Pages/Application/Support.page */ "./build.definitions/MDKDisplayApp/Pages/Application/Support.page")
let mdkdisplayapp_pages_application_useractivitylog_page = __webpack_require__(/*! ./MDKDisplayApp/Pages/Application/UserActivityLog.page */ "./build.definitions/MDKDisplayApp/Pages/Application/UserActivityLog.page")
let mdkdisplayapp_pages_demotahaappservice_employee_employee_create_page = __webpack_require__(/*! ./MDKDisplayApp/Pages/demoTahaAppService_Employee/Employee_Create.page */ "./build.definitions/MDKDisplayApp/Pages/demoTahaAppService_Employee/Employee_Create.page")
let mdkdisplayapp_pages_demotahaappservice_employee_employee_detail_page = __webpack_require__(/*! ./MDKDisplayApp/Pages/demoTahaAppService_Employee/Employee_Detail.page */ "./build.definitions/MDKDisplayApp/Pages/demoTahaAppService_Employee/Employee_Detail.page")
let mdkdisplayapp_pages_demotahaappservice_employee_employee_edit_page = __webpack_require__(/*! ./MDKDisplayApp/Pages/demoTahaAppService_Employee/Employee_Edit.page */ "./build.definitions/MDKDisplayApp/Pages/demoTahaAppService_Employee/Employee_Edit.page")
let mdkdisplayapp_pages_demotahaappservice_employee_employee_list_page = __webpack_require__(/*! ./MDKDisplayApp/Pages/demoTahaAppService_Employee/Employee_List.page */ "./build.definitions/MDKDisplayApp/Pages/demoTahaAppService_Employee/Employee_List.page")
let mdkdisplayapp_rules_application_appupdatefailure_js = __webpack_require__(/*! ./MDKDisplayApp/Rules/Application/AppUpdateFailure.js */ "./build.definitions/MDKDisplayApp/Rules/Application/AppUpdateFailure.js")
let mdkdisplayapp_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./MDKDisplayApp/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/MDKDisplayApp/Rules/Application/AppUpdateSuccess.js")
let mdkdisplayapp_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./MDKDisplayApp/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/MDKDisplayApp/Rules/Application/ClientIsMultiUserMode.js")
let mdkdisplayapp_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./MDKDisplayApp/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/MDKDisplayApp/Rules/Application/GetClientSupportVersions.js")
let mdkdisplayapp_rules_application_getclientversion_js = __webpack_require__(/*! ./MDKDisplayApp/Rules/Application/GetClientVersion.js */ "./build.definitions/MDKDisplayApp/Rules/Application/GetClientVersion.js")
let mdkdisplayapp_rules_application_onwillupdate_js = __webpack_require__(/*! ./MDKDisplayApp/Rules/Application/OnWillUpdate.js */ "./build.definitions/MDKDisplayApp/Rules/Application/OnWillUpdate.js")
let mdkdisplayapp_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./MDKDisplayApp/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/MDKDisplayApp/Rules/Application/ResetAppSettingsAndLogout.js")
let mdkdisplayapp_rules_demotahaappservice_employee_employee_cancel_js = __webpack_require__(/*! ./MDKDisplayApp/Rules/demoTahaAppService/Employee/Employee_Cancel.js */ "./build.definitions/MDKDisplayApp/Rules/demoTahaAppService/Employee/Employee_Cancel.js")
let mdkdisplayapp_rules_demotahaappservice_employee_employee_createentity_js = __webpack_require__(/*! ./MDKDisplayApp/Rules/demoTahaAppService/Employee/Employee_CreateEntity.js */ "./build.definitions/MDKDisplayApp/Rules/demoTahaAppService/Employee/Employee_CreateEntity.js")
let mdkdisplayapp_rules_demotahaappservice_employee_employee_deleteconfirmation_js = __webpack_require__(/*! ./MDKDisplayApp/Rules/demoTahaAppService/Employee/Employee_DeleteConfirmation.js */ "./build.definitions/MDKDisplayApp/Rules/demoTahaAppService/Employee/Employee_DeleteConfirmation.js")
let mdkdisplayapp_rules_demotahaappservice_employee_employee_updateentity_js = __webpack_require__(/*! ./MDKDisplayApp/Rules/demoTahaAppService/Employee/Employee_UpdateEntity.js */ "./build.definitions/MDKDisplayApp/Rules/demoTahaAppService/Employee/Employee_UpdateEntity.js")
let mdkdisplayapp_rules_demotahaappservice_employee_navtoemployee_edit_js = __webpack_require__(/*! ./MDKDisplayApp/Rules/demoTahaAppService/Employee/NavToEmployee_Edit.js */ "./build.definitions/MDKDisplayApp/Rules/demoTahaAppService/Employee/NavToEmployee_Edit.js")
let mdkdisplayapp_rules_logging_loglevels_js = __webpack_require__(/*! ./MDKDisplayApp/Rules/Logging/LogLevels.js */ "./build.definitions/MDKDisplayApp/Rules/Logging/LogLevels.js")
let mdkdisplayapp_rules_logging_settracecategories_js = __webpack_require__(/*! ./MDKDisplayApp/Rules/Logging/SetTraceCategories.js */ "./build.definitions/MDKDisplayApp/Rules/Logging/SetTraceCategories.js")
let mdkdisplayapp_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./MDKDisplayApp/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/MDKDisplayApp/Rules/Logging/SetUserLogLevel.js")
let mdkdisplayapp_rules_logging_togglelogging_js = __webpack_require__(/*! ./MDKDisplayApp/Rules/Logging/ToggleLogging.js */ "./build.definitions/MDKDisplayApp/Rules/Logging/ToggleLogging.js")
let mdkdisplayapp_rules_logging_tracecategories_js = __webpack_require__(/*! ./MDKDisplayApp/Rules/Logging/TraceCategories.js */ "./build.definitions/MDKDisplayApp/Rules/Logging/TraceCategories.js")
let mdkdisplayapp_rules_logging_userlogsetting_js = __webpack_require__(/*! ./MDKDisplayApp/Rules/Logging/UserLogSetting.js */ "./build.definitions/MDKDisplayApp/Rules/Logging/UserLogSetting.js")
let mdkdisplayapp_rules_service_initialize_js = __webpack_require__(/*! ./MDKDisplayApp/Rules/Service/Initialize.js */ "./build.definitions/MDKDisplayApp/Rules/Service/Initialize.js")
let mdkdisplayapp_services_demotahaappservice_service = __webpack_require__(/*! ./MDKDisplayApp/Services/demoTahaAppService.service */ "./build.definitions/MDKDisplayApp/Services/demoTahaAppService.service")
let mdkdisplayapp_styles_styles_css = __webpack_require__(/*! ./MDKDisplayApp/Styles/Styles.css */ "./build.definitions/MDKDisplayApp/Styles/Styles.css")
let mdkdisplayapp_styles_styles_json = __webpack_require__(/*! ./MDKDisplayApp/Styles/Styles.json */ "./build.definitions/MDKDisplayApp/Styles/Styles.json")
let mdkdisplayapp_styles_styles_less = __webpack_require__(/*! ./MDKDisplayApp/Styles/Styles.less */ "./build.definitions/MDKDisplayApp/Styles/Styles.less")
let mdkdisplayapp_styles_styles_nss = __webpack_require__(/*! ./MDKDisplayApp/Styles/Styles.nss */ "./build.definitions/MDKDisplayApp/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	mdkdisplayapp_actions_application_appupdate_action : mdkdisplayapp_actions_application_appupdate_action,
	mdkdisplayapp_actions_application_appupdatefailuremessage_action : mdkdisplayapp_actions_application_appupdatefailuremessage_action,
	mdkdisplayapp_actions_application_appupdateprogressbanner_action : mdkdisplayapp_actions_application_appupdateprogressbanner_action,
	mdkdisplayapp_actions_application_appupdatesuccessmessage_action : mdkdisplayapp_actions_application_appupdatesuccessmessage_action,
	mdkdisplayapp_actions_application_logout_action : mdkdisplayapp_actions_application_logout_action,
	mdkdisplayapp_actions_application_navtoabout_action : mdkdisplayapp_actions_application_navtoabout_action,
	mdkdisplayapp_actions_application_navtoactivitylog_action : mdkdisplayapp_actions_application_navtoactivitylog_action,
	mdkdisplayapp_actions_application_navtosupport_action : mdkdisplayapp_actions_application_navtosupport_action,
	mdkdisplayapp_actions_application_onwillupdate_action : mdkdisplayapp_actions_application_onwillupdate_action,
	mdkdisplayapp_actions_application_reset_action : mdkdisplayapp_actions_application_reset_action,
	mdkdisplayapp_actions_application_resetmessage_action : mdkdisplayapp_actions_application_resetmessage_action,
	mdkdisplayapp_actions_application_usermenupopover_action : mdkdisplayapp_actions_application_usermenupopover_action,
	mdkdisplayapp_actions_closemodalpage_cancel_action : mdkdisplayapp_actions_closemodalpage_cancel_action,
	mdkdisplayapp_actions_closemodalpage_complete_action : mdkdisplayapp_actions_closemodalpage_complete_action,
	mdkdisplayapp_actions_closepage_action : mdkdisplayapp_actions_closepage_action,
	mdkdisplayapp_actions_createentityfailuremessage_action : mdkdisplayapp_actions_createentityfailuremessage_action,
	mdkdisplayapp_actions_createentitysuccessmessage_action : mdkdisplayapp_actions_createentitysuccessmessage_action,
	mdkdisplayapp_actions_deleteconfirmation_action : mdkdisplayapp_actions_deleteconfirmation_action,
	mdkdisplayapp_actions_deleteentityfailuremessage_action : mdkdisplayapp_actions_deleteentityfailuremessage_action,
	mdkdisplayapp_actions_deleteentitysuccessmessage_action : mdkdisplayapp_actions_deleteentitysuccessmessage_action,
	mdkdisplayapp_actions_demotahaappservice_employee_employee_createentity_action : mdkdisplayapp_actions_demotahaappservice_employee_employee_createentity_action,
	mdkdisplayapp_actions_demotahaappservice_employee_employee_deleteentity_action : mdkdisplayapp_actions_demotahaappservice_employee_employee_deleteentity_action,
	mdkdisplayapp_actions_demotahaappservice_employee_employee_updateentity_action : mdkdisplayapp_actions_demotahaappservice_employee_employee_updateentity_action,
	mdkdisplayapp_actions_demotahaappservice_employee_navtoemployee_create_action : mdkdisplayapp_actions_demotahaappservice_employee_navtoemployee_create_action,
	mdkdisplayapp_actions_demotahaappservice_employee_navtoemployee_detail_action : mdkdisplayapp_actions_demotahaappservice_employee_navtoemployee_detail_action,
	mdkdisplayapp_actions_demotahaappservice_employee_navtoemployee_edit_action : mdkdisplayapp_actions_demotahaappservice_employee_navtoemployee_edit_action,
	mdkdisplayapp_actions_demotahaappservice_employee_navtoemployee_list_action : mdkdisplayapp_actions_demotahaappservice_employee_navtoemployee_list_action,
	mdkdisplayapp_actions_demotahaappservice_service_initializeonline_action : mdkdisplayapp_actions_demotahaappservice_service_initializeonline_action,
	mdkdisplayapp_actions_demotahaappservice_service_initializeonlinefailuremessage_action : mdkdisplayapp_actions_demotahaappservice_service_initializeonlinefailuremessage_action,
	mdkdisplayapp_actions_draftdiscardentity_action : mdkdisplayapp_actions_draftdiscardentity_action,
	mdkdisplayapp_actions_drafteditentity_action : mdkdisplayapp_actions_drafteditentity_action,
	mdkdisplayapp_actions_draftsaveentity_action : mdkdisplayapp_actions_draftsaveentity_action,
	mdkdisplayapp_actions_genericbannermessage_action : mdkdisplayapp_actions_genericbannermessage_action,
	mdkdisplayapp_actions_genericmessagebox_action : mdkdisplayapp_actions_genericmessagebox_action,
	mdkdisplayapp_actions_genericnavigation_action : mdkdisplayapp_actions_genericnavigation_action,
	mdkdisplayapp_actions_generictoastmessage_action : mdkdisplayapp_actions_generictoastmessage_action,
	mdkdisplayapp_actions_logging_loguploadfailure_action : mdkdisplayapp_actions_logging_loguploadfailure_action,
	mdkdisplayapp_actions_logging_loguploadsuccessful_action : mdkdisplayapp_actions_logging_loguploadsuccessful_action,
	mdkdisplayapp_actions_logging_uploadlog_action : mdkdisplayapp_actions_logging_uploadlog_action,
	mdkdisplayapp_actions_logging_uploadlogprogress_action : mdkdisplayapp_actions_logging_uploadlogprogress_action,
	mdkdisplayapp_actions_updateentityfailuremessage_action : mdkdisplayapp_actions_updateentityfailuremessage_action,
	mdkdisplayapp_actions_updateentitysuccessmessage_action : mdkdisplayapp_actions_updateentitysuccessmessage_action,
	mdkdisplayapp_globals_application_appdefinition_version_global : mdkdisplayapp_globals_application_appdefinition_version_global,
	mdkdisplayapp_globals_application_applicationname_global : mdkdisplayapp_globals_application_applicationname_global,
	mdkdisplayapp_globals_application_supportemail_global : mdkdisplayapp_globals_application_supportemail_global,
	mdkdisplayapp_globals_application_supportphone_global : mdkdisplayapp_globals_application_supportphone_global,
	mdkdisplayapp_i18n_i18n_properties : mdkdisplayapp_i18n_i18n_properties,
	mdkdisplayapp_jsconfig_json : mdkdisplayapp_jsconfig_json,
	mdkdisplayapp_pages_application_about_page : mdkdisplayapp_pages_application_about_page,
	mdkdisplayapp_pages_application_support_page : mdkdisplayapp_pages_application_support_page,
	mdkdisplayapp_pages_application_useractivitylog_page : mdkdisplayapp_pages_application_useractivitylog_page,
	mdkdisplayapp_pages_demotahaappservice_employee_employee_create_page : mdkdisplayapp_pages_demotahaappservice_employee_employee_create_page,
	mdkdisplayapp_pages_demotahaappservice_employee_employee_detail_page : mdkdisplayapp_pages_demotahaappservice_employee_employee_detail_page,
	mdkdisplayapp_pages_demotahaappservice_employee_employee_edit_page : mdkdisplayapp_pages_demotahaappservice_employee_employee_edit_page,
	mdkdisplayapp_pages_demotahaappservice_employee_employee_list_page : mdkdisplayapp_pages_demotahaappservice_employee_employee_list_page,
	mdkdisplayapp_rules_application_appupdatefailure_js : mdkdisplayapp_rules_application_appupdatefailure_js,
	mdkdisplayapp_rules_application_appupdatesuccess_js : mdkdisplayapp_rules_application_appupdatesuccess_js,
	mdkdisplayapp_rules_application_clientismultiusermode_js : mdkdisplayapp_rules_application_clientismultiusermode_js,
	mdkdisplayapp_rules_application_getclientsupportversions_js : mdkdisplayapp_rules_application_getclientsupportversions_js,
	mdkdisplayapp_rules_application_getclientversion_js : mdkdisplayapp_rules_application_getclientversion_js,
	mdkdisplayapp_rules_application_onwillupdate_js : mdkdisplayapp_rules_application_onwillupdate_js,
	mdkdisplayapp_rules_application_resetappsettingsandlogout_js : mdkdisplayapp_rules_application_resetappsettingsandlogout_js,
	mdkdisplayapp_rules_demotahaappservice_employee_employee_cancel_js : mdkdisplayapp_rules_demotahaappservice_employee_employee_cancel_js,
	mdkdisplayapp_rules_demotahaappservice_employee_employee_createentity_js : mdkdisplayapp_rules_demotahaappservice_employee_employee_createentity_js,
	mdkdisplayapp_rules_demotahaappservice_employee_employee_deleteconfirmation_js : mdkdisplayapp_rules_demotahaappservice_employee_employee_deleteconfirmation_js,
	mdkdisplayapp_rules_demotahaappservice_employee_employee_updateentity_js : mdkdisplayapp_rules_demotahaappservice_employee_employee_updateentity_js,
	mdkdisplayapp_rules_demotahaappservice_employee_navtoemployee_edit_js : mdkdisplayapp_rules_demotahaappservice_employee_navtoemployee_edit_js,
	mdkdisplayapp_rules_logging_loglevels_js : mdkdisplayapp_rules_logging_loglevels_js,
	mdkdisplayapp_rules_logging_settracecategories_js : mdkdisplayapp_rules_logging_settracecategories_js,
	mdkdisplayapp_rules_logging_setuserloglevel_js : mdkdisplayapp_rules_logging_setuserloglevel_js,
	mdkdisplayapp_rules_logging_togglelogging_js : mdkdisplayapp_rules_logging_togglelogging_js,
	mdkdisplayapp_rules_logging_tracecategories_js : mdkdisplayapp_rules_logging_tracecategories_js,
	mdkdisplayapp_rules_logging_userlogsetting_js : mdkdisplayapp_rules_logging_userlogsetting_js,
	mdkdisplayapp_rules_service_initialize_js : mdkdisplayapp_rules_service_initialize_js,
	mdkdisplayapp_services_demotahaappservice_service : mdkdisplayapp_services_demotahaappservice_service,
	mdkdisplayapp_styles_styles_css : mdkdisplayapp_styles_styles_css,
	mdkdisplayapp_styles_styles_json : mdkdisplayapp_styles_styles_json,
	mdkdisplayapp_styles_styles_less : mdkdisplayapp_styles_styles_less,
	mdkdisplayapp_styles_styles_nss : mdkdisplayapp_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Rules/Application/AppUpdateFailure.js":
/*!*******************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Rules/Application/AppUpdateFailure.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
  let result = clientAPI.actionResults.AppUpdate.error.toString();
  var message;
  console.log(result);
  if (result.startsWith('Error: Uncaught app extraction failure:')) {
    result = 'Error: Uncaught app extraction failure:';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
    result = 'Application instance is not up or running';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
    result = 'Service instance not found.';
  }
  switch (result) {
    case 'Service instance not found.':
      message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
      message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
      message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
      break;
    case 'Error: Uncaught app extraction failure:':
      message = 'Error extracting metadata. Please redeploy and try again.';
      break;
    case 'Application instance is not up or running':
      message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
      break;
    default:
      message = result;
      break;
  }
  return clientAPI.getPageProxy().executeAction({
    "Name": "/MDKDisplayApp/Actions/Application/AppUpdateFailureMessage.action",
    "Properties": {
      "Duration": 0,
      "Message": message
    }
  });
}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Rules/Application/AppUpdateSuccess.js":
/*!*******************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Rules/Application/AppUpdateSuccess.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
function AppUpdateSuccess(clientAPI) {
  var message;
  // Force a small pause to let the progress banner show in case there is no new version available
  return sleep(500).then(function () {
    let result = clientAPI.actionResults.AppUpdate.data;
    console.log(result);
    let versionNum = result.split(': ')[1];
    if (result.startsWith('Current version is already up to date')) {
      return clientAPI.getPageProxy().executeAction({
        "Name": "/MDKDisplayApp/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Message": `You are already using the latest version: ${versionNum}`,
          "NumberOfLines": 2
        }
      });
    } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
      message = 'No Application metadata found. Please deploy your application and try again.';
      return clientAPI.getPageProxy().executeAction({
        "Name": "/MDKDisplayApp/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Duration": 5,
          "Message": message,
          "NumberOfLines": 2
        }
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Rules/Application/ClientIsMultiUserMode.js":
/*!************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Rules/Application/ClientIsMultiUserMode.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
  return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Rules/Application/GetClientSupportVersions.js":
/*!***************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Rules/Application/GetClientSupportVersions.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  let versionStr = '';
  Object.keys(versionInfo).forEach(function (key, index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object
    //console.log(`Key: ${key}   Index: ${index}`);
    if (key != 'Application Version') {
      versionStr += `${key}: ${versionInfo[key]}\n`;
    }
  });
  return versionStr;
}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Rules/Application/GetClientVersion.js":
/*!*******************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Rules/Application/GetClientVersion.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  if (versionInfo.hasOwnProperty('Application Version')) {
    return versionInfo['Application Version'];
  }
}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Rules/Application/OnWillUpdate.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Rules/Application/OnWillUpdate.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
  return clientAPI.executeAction('/MDKDisplayApp/Actions/Application/OnWillUpdate.action').then(result => {
    if (result.data) {
      return Promise.resolve();
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Rules/Application/ResetAppSettingsAndLogout.js":
/*!****************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
  let logger = clientAPI.getLogger();
  let platform = clientAPI.nativescript.platformModule;
  let appSettings = clientAPI.nativescript.appSettingsModule;
  var appId;
  if (platform && (platform.isIOS || platform.isAndroid)) {
    appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
  } else {
    appId = 'WindowsClient';
  }
  try {
    // Remove any other app specific settings
    appSettings.getAllKeys().forEach(key => {
      if (key.substring(0, appId.length) === appId) {
        appSettings.remove(key);
      }
    });
  } catch (err) {
    logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
  } finally {
    // Logout 
    return clientAPI.getPageProxy().executeAction('/MDKDisplayApp/Actions/Application/Reset.action');
  }
}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Rules/Logging/LogLevels.js":
/*!********************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Rules/Logging/LogLevels.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
  var levels = [];
  levels.push({
    'DisplayValue': 'Error',
    'ReturnValue': 'Error'
  });
  levels.push({
    'DisplayValue': 'Warning',
    'ReturnValue': 'Warn'
  });
  levels.push({
    'DisplayValue': 'Info',
    'ReturnValue': 'Info'
  });
  levels.push({
    'DisplayValue': 'Debug',
    'ReturnValue': 'Debug'
  });
  levels.push({
    'DisplayValue': 'Trace',
    'ReturnValue': 'Trace'
  });
  return levels;
}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Rules/Logging/SetTraceCategories.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Rules/Logging/SetTraceCategories.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
  var logger = clientAPI.getLogger();
  const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
  const fcsection = sectionedTable.getSection('FormCellSection0');
  const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
  const odataTrace = fcsection.getControl('odataTrace');
  try {
    if (traceCategory.getValue()) {
      var values = traceCategory.getValue();
      var categories = [];
      if (values && values.length) {
        categories = values.map(value => {
          return 'mdk.trace.' + value.ReturnValue;
        });
      }
      clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Rules/Logging/SetUserLogLevel.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Rules/Logging/SetUserLogLevel.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
  try {
    if (clientAPI.getValue() && clientAPI.getValue()[0]) {
      var logger = clientAPI.getLogger();
      var listPickerValue = clientAPI.getValue()[0].ReturnValue;
      if (listPickerValue) {
        switch (listPickerValue) {
          case 'Debug':
            logger.setLevel('Debug');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Error':
            logger.setLevel('Error');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Warn':
            logger.setLevel('Warn');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Info':
            logger.setLevel('Info');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Trace':
            logger.setLevel('Trace');
            ShowTraceOptions(clientAPI, true);
            break;
          default:
            // eslint-disable-next-line no-console
            console.log(`unrecognized key ${listPickerValue}`);
        }
        return listPickerValue;
      }
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}
function ShowTraceOptions(clientAPI, tracingEnabled) {
  let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
  let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');
  categories.setVisible(tracingEnabled);
  odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Rules/Logging/ToggleLogging.js":
/*!************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Rules/Logging/ToggleLogging.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    let switchValue = enableLogSwitch.getValue();
    if (switchValue) {
      logger.on();
      logLevelListPicker.setVisible(true);
      logLevelListPicker.setEditable(true);
      logLevelListPicker.redraw();
    } else {
      logger.off();
      logLevelListPicker.setEditable(false);
      logLevelListPicker.setVisible(false);
      logLevelListPicker.redraw();
    }
    return switchValue;
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Rules/Logging/TraceCategories.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Rules/Logging/TraceCategories.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
  var categories = ['action', 'api', 'app', 'binding', 'branding', 'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push', 'restservice', 'settings', 'targetpath', 'ui'];
  var values = [];
  categories.forEach(category => {
    values.push({
      'DisplayValue': category,
      'ReturnValue': category
    });
  });
  return values;
}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Rules/Logging/UserLogSetting.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Rules/Logging/UserLogSetting.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    //Persist the user logging preferences
    if (logger) {
      console.log("in logger state");
      if (logger.isTurnedOn()) {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(true);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(true);
        }
      } else {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(false);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(false);
        }
      }
      var logLevel = logger.getLevel();
      if (logLevel) {
        if (logLevelListPicker) {
          logLevelListPicker.setValue([logLevel]);
        }
      }
      if (logLevel === 'Trace') {
        traceCategory.setVisible(true);
        odataTrace.setVisible(true);
      }

      //Upon selecting a value in the List picker and clicking the back button 
      //will enable the onload page rule. This will set the selected value
      //in the control
      if (logLevelListPicker.getValue()[0]) {
        var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
        if (returnValue) {
          logLevelListPicker.setValue([returnValue]);
          logger.setLevel(returnValue);
        }
      }
    }
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(String(exception), 'Error User Logger could not be set');
  }
}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Rules/Service/Initialize.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Rules/Service/Initialize.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function Initialize(context) {
  // Perform pre data initialization task

  // Initialize all your Data sources
  let _demoTahaAppService = context.executeAction('/MDKDisplayApp/Actions/demoTahaAppService/Service/InitializeOnline.action');

  //You can add more service initialize actions here

  return Promise.all([_demoTahaAppService]).then(() => {
    // After Initializing the DB connections

    // Display successful initialization  message to the user
    return context.executeAction({
      "Name": "/MDKDisplayApp/Actions/GenericToastMessage.action",
      "Properties": {
        "Message": "Application Services Initialized",
        "Animated": true,
        "Duration": 1,
        "IsIconHidden": true,
        "NumberOfLines": 1
      }
    });
  }).catch(() => {
    return false;
  });
}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Rules/demoTahaAppService/Employee/Employee_Cancel.js":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Rules/demoTahaAppService/Employee/Employee_Cancel.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cancel)
/* harmony export */ });
function Cancel(clientAPI) {
  if (clientAPI.getODataProvider('/MDKDisplayApp/Services/demoTahaAppService.service').isDraftEnabled('Employee')) {
    return clientAPI.executeAction({
      'Name': '/MDKDisplayApp/Actions/DraftDiscardEntity.action',
      'Properties': {
        'Target': {
          'EntitySet': 'Employee'
        },
        'OnSuccess': '/MDKDisplayApp/Actions/CloseModalPage_Cancel.action'
      }
    });
  } else {
    return clientAPI.executeAction('/MDKDisplayApp/Actions/CloseModalPage_Cancel.action');
  }
}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Rules/demoTahaAppService/Employee/Employee_CreateEntity.js":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Rules/demoTahaAppService/Employee/Employee_CreateEntity.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateEntity)
/* harmony export */ });
function CreateEntity(clientAPI) {
  if (clientAPI.getODataProvider('/MDKDisplayApp/Services/demoTahaAppService.service').isDraftEnabled('Employee')) {
    return clientAPI.executeAction({
      'Name': '/MDKDisplayApp/Actions/demoTahaAppService/Employee/Employee_CreateEntity.action',
      'Properties': {
        'OnSuccess': ''
      }
    }).then(result => {
      let newEntity = JSON.parse(result.data);
      return clientAPI.executeAction({
        'Name': '/MDKDisplayApp/Actions/DraftSaveEntity.action',
        'Properties': {
          'Target': {
            'EntitySet': 'Employee',
            'ReadLink': newEntity['@odata.readLink']
          }
        }
      });
    });
  } else {
    return clientAPI.executeAction('/MDKDisplayApp/Actions/demoTahaAppService/Employee/Employee_CreateEntity.action');
  }
}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Rules/demoTahaAppService/Employee/Employee_DeleteConfirmation.js":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Rules/demoTahaAppService/Employee/Employee_DeleteConfirmation.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/MDKDisplayApp/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/MDKDisplayApp/Actions/demoTahaAppService/Employee/Employee_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Rules/demoTahaAppService/Employee/Employee_UpdateEntity.js":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Rules/demoTahaAppService/Employee/Employee_UpdateEntity.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateEntity)
/* harmony export */ });
function UpdateEntity(clientAPI) {
  if (clientAPI.getODataProvider('/MDKDisplayApp/Services/demoTahaAppService.service').isDraftEnabled('Employee')) {
    return clientAPI.executeAction({
      'Name': '/MDKDisplayApp/Actions/demoTahaAppService/Employee/Employee_UpdateEntity.action',
      'Properties': {
        'OnSuccess': ''
      }
    }).then(result => {
      return clientAPI.executeAction({
        'Name': '/MDKDisplayApp/Actions/DraftSaveEntity.action',
        'Properties': {
          'Target': {
            'EntitySet': 'Employee'
          }
        }
      });
    });
  } else {
    return clientAPI.executeAction('/MDKDisplayApp/Actions/demoTahaAppService/Employee/Employee_UpdateEntity.action');
  }
}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Rules/demoTahaAppService/Employee/NavToEmployee_Edit.js":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Rules/demoTahaAppService/Employee/NavToEmployee_Edit.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToEdit)
/* harmony export */ });
function NavToEdit(clientAPI) {
  if (clientAPI.getODataProvider('/MDKDisplayApp/Services/demoTahaAppService.service').isDraftEnabled('Employee')) {
    return clientAPI.executeAction({
      'Name': '/MDKDisplayApp/Actions/DraftEditEntity.action',
      'Properties': {
        'Target': {
          'EntitySet': 'Employee'
        },
        'OnSuccess': '/MDKDisplayApp/Actions/demoTahaAppService/Employee/NavToEmployee_Edit.action'
      }
    });
  } else {
    return clientAPI.executeAction('/MDKDisplayApp/Actions/demoTahaAppService/Employee/NavToEmployee_Edit.action');
  }
}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Styles/Styles.css":
/*!***********************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Styles/Styles.css ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
div.MDKPage

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
`, "",{"version":3,"sources":["webpack://./build.definitions/MDKDisplayApp/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Styles/Styles.less":
/*!************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Styles/Styles.less ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/`, "",{"version":3,"sources":["webpack://./build.definitions/MDKDisplayApp/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Styles/Styles.nss":
/*!***********************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Styles/Styles.nss ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/sourceMaps.js":
/*!*********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Pages/Application/About.page":
/*!**********************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Pages/Application/About.page ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/MDKDisplayApp/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/MDKDisplayApp/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/MDKDisplayApp/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)","_Type":"KeyValue.Type.Item"},{"Value":"/MDKDisplayApp/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/MDKDisplayApp/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"About","PrefersLargeCaption":true,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Pages/Application/Support.page":
/*!************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Pages/Application/Support.page ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/MDKDisplayApp/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/MDKDisplayApp/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/MDKDisplayApp/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/MDKDisplayApp/Actions/Application/NavToActivityLog.action","_Type":"SimplePropertyCollection.Type.Cell"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/MDKDisplayApp/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"Settings","PrefersLargeCaption":false,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Pages/Application/UserActivityLog.page":
/*!********************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Pages/Application/UserActivityLog.page ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/MDKDisplayApp/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/MDKDisplayApp/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/MDKDisplayApp/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/MDKDisplayApp/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/MDKDisplayApp/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/MDKDisplayApp/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/MDKDisplayApp/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","ActionBar":{"Caption":"Activity Log","PrefersLargeCaption":false,"_Type":"Control.Type.ActionBar"},"OnLoaded":"/MDKDisplayApp/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Pages/demoTahaAppService_Employee/Employee_Create.page":
/*!************************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Pages/demoTahaAppService_Employee/Employee_Create.page ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/MDKDisplayApp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/MDKDisplayApp/Rules/demoTahaAppService/Employee/Employee_CreateEntity.js","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_Employee_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Name","_Name":"Name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Age","KeyboardType":"Number","_Name":"Age","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Employee_Create"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Pages/demoTahaAppService_Employee/Employee_Detail.page":
/*!************************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Pages/demoTahaAppService_Employee/Employee_Detail.page ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/MDKDisplayApp/Services/demoTahaAppService.service","EntitySet":"Employee","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/MDKDisplayApp/Rules/demoTahaAppService/Employee/NavToEmployee_Edit.js","Position":"Right","SystemItem":"Edit","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/MDKDisplayApp/Rules/demoTahaAppService/Employee/Employee_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Employee_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{Name}","Subhead":"{Age}","BodyText":"","Footnote":"","Description":"","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Name","Value":"{Name}","_Type":"KeyValue.Type.Item"},{"KeyName":"Age","Value":"{Age}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Employee_Detail"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Pages/demoTahaAppService_Employee/Employee_Edit.page":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Pages/demoTahaAppService_Employee/Employee_Edit.page ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/MDKDisplayApp/Services/demoTahaAppService.service","EntitySet":"Employee","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","Caption":"Cancel","OnPress":"/MDKDisplayApp/Rules/demoTahaAppService/Employee/Employee_Cancel.js","_Type":"Control.Type.ActionBarItem"},{"Position":"Right","SystemItem":"Save","OnPress":"/MDKDisplayApp/Rules/demoTahaAppService/Employee/Employee_UpdateEntity.js","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Update_Employee_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Name","_Name":"Name","Value":"{Name}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Age","_Name":"Age","Value":"{Age}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Employee_Edit"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Pages/demoTahaAppService_Employee/Employee_List.page":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Pages/demoTahaAppService_Employee/Employee_List.page ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/MDKDisplayApp/Actions/demoTahaAppService/Employee/NavToEmployee_Create.action","Position":"Right","SystemItem":"Add","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Employee)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/MDKDisplayApp/Actions/demoTahaAppService/Employee/NavToEmployee_Detail.action","StatusImage":"","Title":"{Name}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{Age}","SubstatusText":"","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Employee","Service":"/MDKDisplayApp/Services/demoTahaAppService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","FioriToolbar":{"_Name":"FioriToolbar","_Type":"Control.Type.FioriToolbar","Items":[{"_Type":"FioriToolbarItem.Type.Button","_Name":"LogoutToolbarItem","Title":"Logout","OnPress":"/MDKDisplayApp/Actions/Application/Logout.action"}]},"_Name":"Employee_List"}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"MDKDisplayApp","Version":"/MDKDisplayApp/Globals/Application/AppDefinition_Version.global","MainPage":"/MDKDisplayApp/Pages/demoTahaAppService_Employee/Employee_List.page","OnLaunch":"/MDKDisplayApp/Rules/Service/Initialize.js","OnWillUpdate":"/MDKDisplayApp/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/MDKDisplayApp/Rules/Service/Initialize.js","Styles":"/MDKDisplayApp/Styles/Styles.less","Localization":"/MDKDisplayApp/i18n/i18n.properties","_SchemaVersion":"25.6","StyleSheets":{"Styles":{"css":"/MDKDisplayApp/Styles/Styles.css","ios":"/MDKDisplayApp/Styles/Styles.nss","android":"/MDKDisplayApp/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/Application/AppUpdate.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/Application/AppUpdate.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/MDKDisplayApp/Rules/Application/AppUpdateFailure.js","OnSuccess":"/MDKDisplayApp/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/Application/AppUpdateFailureMessage.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/Application/AppUpdateFailureMessage.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/Application/AppUpdateProgressBanner.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/Application/AppUpdateProgressBanner.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/MDKDisplayApp/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/Application/AppUpdateSuccessMessage.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/Application/AppUpdateSuccessMessage.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/Application/Logout.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/Application/Logout.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/Application/NavToAbout.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/Application/NavToAbout.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/MDKDisplayApp/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/Application/NavToActivityLog.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/Application/NavToActivityLog.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/MDKDisplayApp/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/Application/NavToSupport.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/Application/NavToSupport.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/MDKDisplayApp/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/Application/OnWillUpdate.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/Application/OnWillUpdate.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/Application/Reset.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/Application/Reset.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/Application/ResetMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/Application/ResetMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/MDKDisplayApp/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/Application/UserMenuPopover.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/Application/UserMenuPopover.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/MDKDisplayApp/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/MDKDisplayApp/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/MDKDisplayApp/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/MDKDisplayApp/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/MDKDisplayApp/Actions/Application/Logout.action","Title":"Logout","Visible":"/MDKDisplayApp/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/CloseModalPage_Cancel.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/CloseModalPage_Cancel.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/CloseModalPage_Complete.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/CloseModalPage_Complete.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/ClosePage.action":
/*!******************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/ClosePage.action ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/CreateEntityFailureMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/CreateEntityFailureMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Create entity failure - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/CreateEntitySuccessMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/CreateEntitySuccessMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/MDKDisplayApp/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/DeleteConfirmation.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/DeleteConfirmation.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"Delete current entity?","Title":"Confirmation","OKCaption":"OK","CancelCaption":"Cancel","ActionResult":{"_Name":"DeleteConfirmation"}}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/DeleteEntityFailureMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/DeleteEntityFailureMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Delete entity failure - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/DeleteEntitySuccessMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/DeleteEntitySuccessMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/MDKDisplayApp/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/DraftDiscardEntity.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/DraftDiscardEntity.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DraftEnabled.Discard","Target":{"Service":"/MDKDisplayApp/Services/demoTahaAppService.service","EntitySet":"Employee","ReadLink":"{@odata.readLink}"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"update"},"OnSuccess":{"Name":"/MDKDisplayApp/Actions/UpdateEntitySuccessMessage.action","Properties":{"Message":"Draft Discarded"}},"OnFailure":"/MDKDisplayApp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/DraftEditEntity.action":
/*!************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/DraftEditEntity.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DraftEnabled.Edit","Target":{"Service":"/MDKDisplayApp/Services/demoTahaAppService.service","EntitySet":"Employee","ReadLink":"{@odata.readLink}"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"update"},"OnSuccess":{"Name":"/MDKDisplayApp/Actions/UpdateEntitySuccessMessage.action","Properties":{"Message":"Draft Edit"}},"OnFailure":"/MDKDisplayApp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/DraftSaveEntity.action":
/*!************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/DraftSaveEntity.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DraftEnabled.Save","Target":{"Service":"/MDKDisplayApp/Services/demoTahaAppService.service","EntitySet":"Employee","ReadLink":"{@odata.readLink}"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"update"},"OnSuccess":{"Name":"/MDKDisplayApp/Actions/UpdateEntitySuccessMessage.action","Properties":{"Message":"Draft Saved"}},"OnFailure":"/MDKDisplayApp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/GenericBannerMessage.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/GenericBannerMessage.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/GenericMessageBox.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/GenericMessageBox.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/GenericNavigation.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/GenericNavigation.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/MDKDisplayApp/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/GenericToastMessage.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/GenericToastMessage.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/Logging/LogUploadFailure.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/Logging/LogUploadFailure.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/Logging/LogUploadSuccessful.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/Logging/LogUploadSuccessful.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/Logging/UploadLog.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/Logging/UploadLog.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/MDKDisplayApp/Actions/Logging/LogUploadFailure.action","OnSuccess":"/MDKDisplayApp/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/Logging/UploadLogProgress.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/Logging/UploadLogProgress.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/MDKDisplayApp/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/UpdateEntityFailureMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/UpdateEntityFailureMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Update entity failure - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/UpdateEntitySuccessMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/UpdateEntitySuccessMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/MDKDisplayApp/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Employee/Employee_CreateEntity.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Employee/Employee_CreateEntity.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/MDKDisplayApp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/MDKDisplayApp/Actions/CreateEntitySuccessMessage.action","Properties":{"Name":"#Page:Employee_Create/#Control:Name/#Value","Age":"#Page:Employee_Create/#Control:Age/#Value"},"Target":{"EntitySet":"Employee","Service":"/MDKDisplayApp/Services/demoTahaAppService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Employee/Employee_DeleteEntity.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Employee/Employee_DeleteEntity.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Employee","Service":"/MDKDisplayApp/Services/demoTahaAppService.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/MDKDisplayApp/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/MDKDisplayApp/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Employee/Employee_UpdateEntity.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Employee/Employee_UpdateEntity.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Employee","Service":"/MDKDisplayApp/Services/demoTahaAppService.service","ReadLink":"{@odata.readLink}"},"Properties":{"Name":"#Page:Employee_Edit/#Control:Name/#Value","Age":"#Page:Employee_Edit/#Control:Age/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/MDKDisplayApp/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/MDKDisplayApp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Employee/NavToEmployee_Create.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Employee/NavToEmployee_Create.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/MDKDisplayApp/Pages/demoTahaAppService_Employee/Employee_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Employee/NavToEmployee_Detail.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Employee/NavToEmployee_Detail.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/MDKDisplayApp/Pages/demoTahaAppService_Employee/Employee_Detail.page"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Employee/NavToEmployee_Edit.action":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Employee/NavToEmployee_Edit.action ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/MDKDisplayApp/Pages/demoTahaAppService_Employee/Employee_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Employee/NavToEmployee_List.action":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Employee/NavToEmployee_List.action ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/MDKDisplayApp/Pages/demoTahaAppService_Employee/Employee_List.page"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Service/InitializeOnline.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Service/InitializeOnline.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/MDKDisplayApp/Services/demoTahaAppService.service","_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"OnFailure":"/MDKDisplayApp/Actions/demoTahaAppService/Service/InitializeOnlineFailureMessage.action","ActionResult":{"_Name":"init"}}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Service/InitializeOnlineFailureMessage.action":
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Actions/demoTahaAppService/Service/InitializeOnlineFailureMessage.action ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Globals/Application/AppDefinition_Version.global":
/*!******************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Globals/Application/AppDefinition_Version.global ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Globals/Application/ApplicationName.global":
/*!************************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Globals/Application/ApplicationName.global ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Globals/Application/SupportEmail.global":
/*!*********************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Globals/Application/SupportEmail.global ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Globals/Application/SupportPhone.global":
/*!*********************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Globals/Application/SupportPhone.global ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Services/demoTahaAppService.service":
/*!*****************************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Services/demoTahaAppService.service ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"../service/demoTahaAppService/","OfflineEnabled":false,"LanguageURLParam":"","OnlineOptions":{},"OfflineOptions":{},"PathSuffix":"","SourceType":"Cloud","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/Styles/Styles.json":
/*!************************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/Styles/Styles.json ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/MDKDisplayApp/jsconfig.json":
/*!*******************************************************!*\
  !*** ./build.definitions/MDKDisplayApp/jsconfig.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map