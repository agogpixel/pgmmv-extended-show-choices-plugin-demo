/**
 * Extended version of the Show Choices plugin for Pixel Game Maker MV.
 * Derived from original work by Keiji Agusa.
 *
 * Port to TypeScript, updates, & extensions by Tristan Bonsor <kidthales@agogpixel.com>.
 * Copyright 2022 Tristan Bonsor - All Rights Reserved.
 * 
 * This file, and its originating project files, are released under the MIT license: https://github.com/agogpixel/pgmmv-extended-show-choices-plugin/blob/main/LICENSE
 * 
 * For more information, please see:
 *  - Github Repository: https://github.com/agogpixel/pgmmv-extended-show-choices-plugin
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@agogpixel/pgmmv-plugin-support/src/config.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-plugin-support/src/config.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-plugin-support/src/create-plugin.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-plugin-support/src/create-plugin.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createPlugin = void 0;
var plugin_1 = __webpack_require__(/*! @agogpixel/pgmmv-ts/api/agtk/plugin */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/index.js");
var localization_1 = __webpack_require__(/*! ./localization */ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/index.js");
/**
 *
 * @param config
 * @param internal
 * @returns
 */
function createPlugin(config, internal) {
    /**
     *
     */
    var self = {};
    /**
     *
     */
    var internalApi = internal || {};
    /**
     *
     */
    var parametersConfig = config.parameters || [];
    /**
     *
     */
    var actionCommandsConfig = config.actionCommands || [];
    /**
     *
     */
    var autoTilesConfig = config.autoTiles || undefined;
    /**
     *
     */
    var linkConditionsConfig = config.linkConditions || [];
    /**
     *
     */
    var localizedParameters;
    /**
     *
     */
    var localizedActionCommands;
    /**
     *
     */
    var localizedLinkConditions;
    /**
     *
     */
    internalApi.internalData = {};
    /**
     *
     */
    internalApi.localization = (0, localization_1.createPluginLocalizationManager)({ localizations: config.localizations });
    /**
     *
     * @returns
     */
    internalApi.getInfoParameter = function getInfoParameter() {
        if (!localizedParameters) {
            localizedParameters = internalApi.localization.processParameterLocale(parametersConfig);
        }
        return localizedParameters;
    };
    /**
     *
     * @returns
     */
    internalApi.getInfoInternal = function getInfoInternal() {
        return JSON.parse(JSON.stringify(internalApi.internalData));
    };
    /**
     *
     * @returns
     */
    internalApi.getInfoActionCommand = function getInfoActionCommand() {
        if (!localizedActionCommands) {
            localizedActionCommands = internalApi.localization.processExecuteCommandLocale(actionCommandsConfig);
        }
        return localizedActionCommands;
    };
    /**
     *
     * @returns
     */
    internalApi.getInfoLinkCondition = function getInfoLinkCondition() {
        if (!localizedLinkConditions) {
            localizedLinkConditions = internalApi.localization.processLinkConditionLocale(linkConditionsConfig);
        }
        return localizedLinkConditions;
    };
    /**
     *
     * @returns
     */
    internalApi.getInfoAutoTile = function getInfoAutoTile() {
        return autoTilesConfig;
    };
    /**
     *
     * @returns
     */
    internalApi.inEditor = function inEditor() {
        return !Agtk || typeof Agtk.log !== 'function';
    };
    /**
     *
     * @returns
     */
    internalApi.inPlayer = function inPlayer() {
        return !!Agtk && typeof Agtk.version === 'string' && /^player .+$/.test(Agtk.version);
    };
    /**
     *
     * @param arg1
     */
    self.setLocale = function setLocale(arg1) {
        internalApi.localization.setLocale(arg1);
    };
    /**
     *
     * @param category
     * @returns
     */
    self.getInfo = function getInfo(category) {
        var info;
        switch (category) {
            case plugin_1.AgtkPluginInfoCategory.Name:
                info = internalApi.localization.get(localization_1.PluginLocalizationRequiredKey.Name);
                break;
            case plugin_1.AgtkPluginInfoCategory.Description:
                info = internalApi.localization.get(localization_1.PluginLocalizationRequiredKey.Description);
                break;
            case plugin_1.AgtkPluginInfoCategory.Author:
                info = internalApi.localization.get(localization_1.PluginLocalizationRequiredKey.Author);
                break;
            case plugin_1.AgtkPluginInfoCategory.Help:
                info = internalApi.localization.get(localization_1.PluginLocalizationRequiredKey.Help);
                break;
            case plugin_1.AgtkPluginInfoCategory.Parameter:
                info = internalApi.getInfoParameter();
                break;
            case plugin_1.AgtkPluginInfoCategory.Internal:
                info = internalApi.getInfoInternal();
                break;
            case plugin_1.AgtkPluginInfoCategory.ActionCommand:
                info = internalApi.getInfoActionCommand();
                break;
            case plugin_1.AgtkPluginInfoCategory.LinkCondition:
                info = internalApi.getInfoLinkCondition();
                break;
            case plugin_1.AgtkPluginInfoCategory.AutoTile:
                info = internalApi.getInfoAutoTile();
                break;
        }
        return info;
    };
    /**
     *
     * @param data
     */
    self.initialize = function initialize(data) {
        if (data) {
            self.setInternal(data);
        }
    };
    /**
     *
     * @returns
     */
    self.finalize = function finalize() {
        return;
    };
    /**
     *
     * @returns
     */
    self.setParamValue = function setParamValue() {
        return;
    };
    /**
     *
     * @param data
     */
    self.setInternal = function setInternal(data) {
        internalApi.internalData = JSON.parse(JSON.stringify(data)) || internalApi.internalData;
    };
    /**
     *
     * @returns
     */
    self.call = function call() {
        return;
    };
    return self;
}
exports.createPlugin = createPlugin;
//# sourceMappingURL=create-plugin.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-plugin-support/src/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-plugin-support/src/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./config */ "./node_modules/@agogpixel/pgmmv-plugin-support/src/config.js"), exports);
__exportStar(__webpack_require__(/*! ./create-plugin */ "./node_modules/@agogpixel/pgmmv-plugin-support/src/create-plugin.js"), exports);
__exportStar(__webpack_require__(/*! ./protected-api */ "./node_modules/@agogpixel/pgmmv-plugin-support/src/protected-api.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/create-manager.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/create-manager.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createPluginLocalizationManager = void 0;
var plugin_ui_parameter_type_1 = __webpack_require__(/*! @agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-parameter-type */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-parameter-type.js");
/**
 *
 * @param config
 * @returns
 */
function createPluginLocalizationManager(config) {
    /**
     *
     */
    var self = {};
    // Resolve configuration.
    var localizations = config.localizations && config.localizations.length > 0
        ? config.localizations
        : [{ locale: 'en', data: {} }];
    /**
     *
     */
    var fallbackData = localizations[0].data;
    /**
     *
     */
    var currentLocale = localizations[0].locale;
    /**
     *
     */
    var localeMap = {};
    // Load locale map.
    for (var i = 0; i < localizations.length; ++i) {
        localeMap[localizations[i].locale] = localizations[i].data;
    }
    /**
     *
     */
    var inlineRegex = /^loca\((.+)\)$/;
    /**
     *
     * @param key
     * @returns
     */
    self.get = function get(key) {
        if (localeMap[currentLocale] && typeof localeMap[currentLocale][key] === 'string') {
            return localeMap[currentLocale][key];
        }
        if (typeof fallbackData[key] === 'string') {
            return fallbackData[key];
        }
        return "LOCA MISSING: ".concat(key);
    };
    /**
     *
     * @returns
     */
    self.getLocale = function getLocale() {
        return currentLocale;
    };
    /**
     *
     * @param locale
     * @returns
     */
    self.setLocale = function setLocale(locale) {
        var loca = locale.substring(0, 2);
        if (!localeMap[loca]) {
            return false;
        }
        currentLocale = loca;
        return true;
    };
    /**
     *
     * @param parameters
     * @returns
     */
    self.processParameterLocale = function processParameterLocale(parameters) {
        for (var i = 0; i < parameters.length; ++i) {
            var parameter = parameters[i];
            var matches = parameter.name.match(inlineRegex);
            if (matches && matches.length > 1) {
                parameter.name = self.get(matches[1]);
            }
            switch (parameter.type) {
                case plugin_ui_parameter_type_1.AgtkPluginUiParameterType.String:
                case plugin_ui_parameter_type_1.AgtkPluginUiParameterType.MultiLineString:
                    matches = parameter.defaultValue.match(inlineRegex);
                    if (matches && matches.length > 1) {
                        parameter.defaultValue = self.get(matches[1]);
                    }
                    break;
                case plugin_ui_parameter_type_1.AgtkPluginUiParameterType.CustomId:
                    for (var j = 0; j < parameter.customParam.length; ++j) {
                        var param = parameter.customParam[j];
                        matches = param.name.match(inlineRegex);
                        if (matches && matches.length > 1) {
                            param.name = self.get(matches[1]);
                        }
                    }
                    break;
                default:
                    break;
            }
        }
        return parameters;
    };
    /**
     *
     * @param executeCommands
     * @returns
     */
    self.processExecuteCommandLocale = function processExecuteCommandLocale(executeCommands) {
        for (var i = 0; i < executeCommands.length; ++i) {
            var executeCommand = executeCommands[i];
            var matches = executeCommand.name.match(inlineRegex);
            if (matches && matches.length > 1) {
                executeCommand.name = self.get(matches[1]);
            }
            matches = executeCommand.description.match(inlineRegex);
            if (matches && matches.length > 1) {
                executeCommand.description = self.get(matches[1]);
            }
            self.processParameterLocale(executeCommand.parameter);
        }
        return executeCommands;
    };
    /**
     *
     * @param linkConditions
     * @returns
     */
    self.processLinkConditionLocale = function processLinkConditionLocale(linkConditions) {
        for (var i = 0; i < linkConditions.length; ++i) {
            var linkCondition = linkConditions[i];
            var matches = linkCondition.name.match(inlineRegex);
            if (matches && matches.length > 1) {
                linkCondition.name = self.get(matches[1]);
            }
            matches = linkCondition.description.match(inlineRegex);
            if (matches && matches.length > 1) {
                linkCondition.description = self.get(matches[1]);
            }
            self.processParameterLocale(linkCondition.parameter);
        }
        return linkConditions;
    };
    return self;
}
exports.createPluginLocalizationManager = createPluginLocalizationManager;
//# sourceMappingURL=create-manager.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/data.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/data.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var required_key_1 = __webpack_require__(/*! ./required-key */ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/required-key.js");
//# sourceMappingURL=data.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/index.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-manager */ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/create-manager.js"), exports);
__exportStar(__webpack_require__(/*! ./localization */ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/localization.js"), exports);
__exportStar(__webpack_require__(/*! ./data */ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/data.js"), exports);
__exportStar(__webpack_require__(/*! ./manager */ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/manager.js"), exports);
__exportStar(__webpack_require__(/*! ./manager-config */ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/manager-config.js"), exports);
__exportStar(__webpack_require__(/*! ./required-key */ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/required-key.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/localization.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/localization.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=localization.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/manager-config.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/manager-config.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=manager-config.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/manager.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/manager.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=manager.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/required-key.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/required-key.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PluginLocalizationRequiredKey = void 0;
/**
 *
 */
var PluginLocalizationRequiredKey;
(function (PluginLocalizationRequiredKey) {
    /**
     *
     */
    PluginLocalizationRequiredKey["Name"] = "PLUGIN_NAME";
    /**
     *
     */
    PluginLocalizationRequiredKey["Description"] = "PLUGIN_DESCRIPTION";
    /**
     *
     */
    PluginLocalizationRequiredKey["Author"] = "PLUGIN_AUTHOR";
    /**
     *
     */
    PluginLocalizationRequiredKey["Help"] = "PLUGIN_HELP";
})(PluginLocalizationRequiredKey = exports.PluginLocalizationRequiredKey || (exports.PluginLocalizationRequiredKey = {}));
//# sourceMappingURL=required-key.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-plugin-support/src/protected-api.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-plugin-support/src/protected-api.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=protected-api.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/action-commands.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/action-commands.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=action-commands.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/agtk.js":
/*!***********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/agtk.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=agtk.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/animation.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/animation.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=animation.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./animation */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/animation.js"), exports);
__exportStar(__webpack_require__(/*! ./motion */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motion/index.js"), exports);
__exportStar(__webpack_require__(/*! ./motions */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motions.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motion/direction/direction.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motion/direction/direction.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=direction.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motion/direction/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motion/direction/index.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./direction */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motion/direction/direction.js"), exports);
__exportStar(__webpack_require__(/*! ./track */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motion/direction/track.js"), exports);
__exportStar(__webpack_require__(/*! ./tracks */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motion/direction/tracks.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motion/direction/track.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motion/direction/track.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=track.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motion/direction/tracks.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motion/direction/tracks.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=tracks.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motion/directions.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motion/directions.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=directions.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motion/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motion/index.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./direction */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motion/direction/index.js"), exports);
__exportStar(__webpack_require__(/*! ./directions */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motion/directions.js"), exports);
__exportStar(__webpack_require__(/*! ./motion */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motion/motion.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motion/motion.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motion/motion.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=motion.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motions.js":
/*!************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/motions.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=motions.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/animations.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/animations.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/bgm.js":
/*!**********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/bgm.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=bgm.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/bgms.js":
/*!***********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/bgms.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=bgms.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/constants.js":
/*!****************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/constants.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/controllers.js":
/*!******************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/controllers.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=controllers.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/database.js":
/*!***************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/database.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=database.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/databases.js":
/*!****************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/databases.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=databases.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/font.js":
/*!***********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/font.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=font.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/fonts.js":
/*!************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/fonts.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=fonts.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/image.js":
/*!************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/image.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=image.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/images.js":
/*!*************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/images.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=images.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./action-commands */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/action-commands.js"), exports);
__exportStar(__webpack_require__(/*! ./agtk */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/agtk.js"), exports);
__exportStar(__webpack_require__(/*! ./animation */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/animation/index.js"), exports);
__exportStar(__webpack_require__(/*! ./animations */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/animations.js"), exports);
__exportStar(__webpack_require__(/*! ./bgm */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/bgm.js"), exports);
__exportStar(__webpack_require__(/*! ./bgms */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/bgms.js"), exports);
__exportStar(__webpack_require__(/*! ./constants */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/constants.js"), exports);
__exportStar(__webpack_require__(/*! ./controllers */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/controllers.js"), exports);
__exportStar(__webpack_require__(/*! ./database */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/database.js"), exports);
__exportStar(__webpack_require__(/*! ./databases */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/databases.js"), exports);
__exportStar(__webpack_require__(/*! ./font */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/font.js"), exports);
__exportStar(__webpack_require__(/*! ./fonts */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/fonts.js"), exports);
__exportStar(__webpack_require__(/*! ./image */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/image.js"), exports);
__exportStar(__webpack_require__(/*! ./images */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/images.js"), exports);
__exportStar(__webpack_require__(/*! ./layer */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/layer.js"), exports);
__exportStar(__webpack_require__(/*! ./layers */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/layers.js"), exports);
__exportStar(__webpack_require__(/*! ./movie */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/movie.js"), exports);
__exportStar(__webpack_require__(/*! ./movies */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/movies.js"), exports);
__exportStar(__webpack_require__(/*! ./object */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/index.js"), exports);
__exportStar(__webpack_require__(/*! ./object-instance */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/index.js"), exports);
__exportStar(__webpack_require__(/*! ./object-instances */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instances.js"), exports);
__exportStar(__webpack_require__(/*! ./objects */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/objects.js"), exports);
__exportStar(__webpack_require__(/*! ./player-character */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/player-character.js"), exports);
__exportStar(__webpack_require__(/*! ./player-characters */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/player-characters.js"), exports);
__exportStar(__webpack_require__(/*! ./plugin */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/index.js"), exports);
__exportStar(__webpack_require__(/*! ./plugins */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugins.js"), exports);
__exportStar(__webpack_require__(/*! ./portal */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/portal/index.js"), exports);
__exportStar(__webpack_require__(/*! ./portals */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/portals.js"), exports);
__exportStar(__webpack_require__(/*! ./scene */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/scene.js"), exports);
__exportStar(__webpack_require__(/*! ./scene-instance */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/scene-instance.js"), exports);
__exportStar(__webpack_require__(/*! ./scene-instances */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/scene-instances.js"), exports);
__exportStar(__webpack_require__(/*! ./scenes */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/scenes.js"), exports);
__exportStar(__webpack_require__(/*! ./se */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/se.js"), exports);
__exportStar(__webpack_require__(/*! ./ses */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/ses.js"), exports);
__exportStar(__webpack_require__(/*! ./settings */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/settings.js"), exports);
__exportStar(__webpack_require__(/*! ./slope */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/slope.js"), exports);
__exportStar(__webpack_require__(/*! ./switch */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/switch.js"), exports);
__exportStar(__webpack_require__(/*! ./switches */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/switches.js"), exports);
__exportStar(__webpack_require__(/*! ./text */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/text.js"), exports);
__exportStar(__webpack_require__(/*! ./texts */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/texts.js"), exports);
__exportStar(__webpack_require__(/*! ./tileset */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/tileset.js"), exports);
__exportStar(__webpack_require__(/*! ./tilesets */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/tilesets.js"), exports);
__exportStar(__webpack_require__(/*! ./ui */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/ui.js"), exports);
__exportStar(__webpack_require__(/*! ./variable */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/variable.js"), exports);
__exportStar(__webpack_require__(/*! ./variables */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/variables.js"), exports);
__exportStar(__webpack_require__(/*! ./voice */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/voice.js"), exports);
__exportStar(__webpack_require__(/*! ./voices */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/voices.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/layer.js":
/*!************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/layer.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=layer.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/layers.js":
/*!*************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/layers.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=layers.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/movie.js":
/*!************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/movie.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=movie.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/movies.js":
/*!*************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/movies.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=movies.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/action-exec.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/action-exec.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=action-exec.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/attack-setting.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/attack-setting.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=attack-setting.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/bullet-fire.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/bullet-fire.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=bullet-fire.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/camera-area-change.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/camera-area-change.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=camera-area-change.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/database-reflect.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/database-reflect.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=database-reflect.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/direction-move.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/direction-move.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=direction-move.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/disable-object-enable.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/disable-object-enable.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=disable-object-enable.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/disappear-object-recover.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/disappear-object-recover.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=disappear-object-recover.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/display-direction-move.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/display-direction-move.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=display-direction-move.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/effect-remove.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/effect-remove.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=effect-remove.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/effect-show.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/effect-show.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=effect-show.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/file-load.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/file-load.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=file-load.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/forth-back-move-turn.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/forth-back-move-turn.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=forth-back-move-turn.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/game-speed-change.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/game-speed-change.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=game-speed-change.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/image-show.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/image-show.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=image-show.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/index.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./action-exec */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/action-exec.js"), exports);
__exportStar(__webpack_require__(/*! ./attack-setting */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/attack-setting.js"), exports);
__exportStar(__webpack_require__(/*! ./bullet-fire */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/bullet-fire.js"), exports);
__exportStar(__webpack_require__(/*! ./camera-area-change */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/camera-area-change.js"), exports);
__exportStar(__webpack_require__(/*! ./database-reflect */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/database-reflect.js"), exports);
__exportStar(__webpack_require__(/*! ./direction-move */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/direction-move.js"), exports);
__exportStar(__webpack_require__(/*! ./disable-object-enable */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/disable-object-enable.js"), exports);
__exportStar(__webpack_require__(/*! ./disappear-object-recover */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/disappear-object-recover.js"), exports);
__exportStar(__webpack_require__(/*! ./display-direction-move */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/display-direction-move.js"), exports);
__exportStar(__webpack_require__(/*! ./effect-remove */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/effect-remove.js"), exports);
__exportStar(__webpack_require__(/*! ./effect-show */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/effect-show.js"), exports);
__exportStar(__webpack_require__(/*! ./file-load */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/file-load.js"), exports);
__exportStar(__webpack_require__(/*! ./forth-back-move-turn */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/forth-back-move-turn.js"), exports);
__exportStar(__webpack_require__(/*! ./game-speed-change */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/game-speed-change.js"), exports);
__exportStar(__webpack_require__(/*! ./image-show */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/image-show.js"), exports);
__exportStar(__webpack_require__(/*! ./layer-disable */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/layer-disable.js"), exports);
__exportStar(__webpack_require__(/*! ./layer-enable */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/layer-enable.js"), exports);
__exportStar(__webpack_require__(/*! ./layer-hide */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/layer-hide.js"), exports);
__exportStar(__webpack_require__(/*! ./layer-move */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/layer-move.js"), exports);
__exportStar(__webpack_require__(/*! ./layer-show */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/layer-show.js"), exports);
__exportStar(__webpack_require__(/*! ./message-show */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/message-show.js"), exports);
__exportStar(__webpack_require__(/*! ./movie-show */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/movie-show.js"), exports);
__exportStar(__webpack_require__(/*! ./object-change */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-change.js"), exports);
__exportStar(__webpack_require__(/*! ./object-create */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-create.js"), exports);
__exportStar(__webpack_require__(/*! ./object-filter-effect */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-filter-effect.js"), exports);
__exportStar(__webpack_require__(/*! ./object-filter-effect-remove */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-filter-effect-remove.js"), exports);
__exportStar(__webpack_require__(/*! ./object-lock */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-lock.js"), exports);
__exportStar(__webpack_require__(/*! ./object-move */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-move.js"), exports);
__exportStar(__webpack_require__(/*! ./object-push-pull */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-push-pull.js"), exports);
__exportStar(__webpack_require__(/*! ./object-unlock */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-unlock.js"), exports);
__exportStar(__webpack_require__(/*! ./menu-hide */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/menu-hide.js"), exports);
__exportStar(__webpack_require__(/*! ./menu-show */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/menu-show.js"), exports);
__exportStar(__webpack_require__(/*! ./particle-remove */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/particle-remove.js"), exports);
__exportStar(__webpack_require__(/*! ./particle-show */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/particle-show.js"), exports);
__exportStar(__webpack_require__(/*! ./resource-set-change */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/resource-set-change.js"), exports);
__exportStar(__webpack_require__(/*! ./scene-effect */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/scene-effect.js"), exports);
__exportStar(__webpack_require__(/*! ./scene-effect-remove */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/scene-effect-remove.js"), exports);
__exportStar(__webpack_require__(/*! ./scene-gravity-change */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/scene-gravity-change.js"), exports);
__exportStar(__webpack_require__(/*! ./scene-rotate-flip */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/scene-rotate-flip.js"), exports);
__exportStar(__webpack_require__(/*! ./scene-shake */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/scene-shake.js"), exports);
__exportStar(__webpack_require__(/*! ./scroll-message-show */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/scroll-message-show.js"), exports);
__exportStar(__webpack_require__(/*! ./sound-play */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/sound-play.js"), exports);
__exportStar(__webpack_require__(/*! ./sound-position-remember */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/sound-position-remember.js"), exports);
__exportStar(__webpack_require__(/*! ./switch-variable-change */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/switch-variable-change.js"), exports);
__exportStar(__webpack_require__(/*! ./switch-variable-reset */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/switch-variable-reset.js"), exports);
__exportStar(__webpack_require__(/*! ./template-move */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/template-move.js"), exports);
__exportStar(__webpack_require__(/*! ./timer */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/timer.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/layer-disable.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/layer-disable.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=layer-disable.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/layer-enable.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/layer-enable.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=layer-enable.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/layer-hide.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/layer-hide.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=layer-hide.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/layer-move.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/layer-move.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=layer-move.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/layer-show.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/layer-show.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=layer-show.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/menu-hide.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/menu-hide.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=menu-hide.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/menu-show.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/menu-show.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=menu-show.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/message-show.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/message-show.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=message-show.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/movie-show.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/movie-show.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=movie-show.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-change.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-change.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=object-change.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-create.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-create.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=object-create.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-filter-effect-remove.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-filter-effect-remove.js ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=object-filter-effect-remove.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-filter-effect.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-filter-effect.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=object-filter-effect.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-lock.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-lock.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=object-lock.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-move.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-move.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=object-move.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-push-pull.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-push-pull.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=object-push-pull.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-unlock.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/object-unlock.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=object-unlock.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/particle-remove.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/particle-remove.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=particle-remove.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/particle-show.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/particle-show.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=particle-show.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/resource-set-change.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/resource-set-change.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=resource-set-change.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/scene-effect-remove.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/scene-effect-remove.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=scene-effect-remove.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/scene-effect.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/scene-effect.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=scene-effect.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/scene-gravity-change.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/scene-gravity-change.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=scene-gravity-change.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/scene-rotate-flip.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/scene-rotate-flip.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=scene-rotate-flip.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/scene-shake.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/scene-shake.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=scene-shake.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/scroll-message-show.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/scroll-message-show.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=scroll-message-show.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/sound-play.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/sound-play.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=sound-play.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/sound-position-remember.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/sound-position-remember.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=sound-position-remember.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/switch-variable-change.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/switch-variable-change.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=switch-variable-change.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/switch-variable-reset.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/switch-variable-reset.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=switch-variable-reset.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/template-move.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/template-move.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=template-move.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/timer.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/timer.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/index.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./command-configs */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/command-configs/index.js"), exports);
__exportStar(__webpack_require__(/*! ./object-instance */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance.js"), exports);
__exportStar(__webpack_require__(/*! ./switch */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/switch.js"), exports);
__exportStar(__webpack_require__(/*! ./switches */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/switches.js"), exports);
__exportStar(__webpack_require__(/*! ./variable */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/variable.js"), exports);
__exportStar(__webpack_require__(/*! ./variables */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/variables.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=object-instance.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/switch.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/switch.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=switch.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/switches.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/switches.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=switches.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/variable.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/variable.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=variable.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/variables.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instance/variables.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=variables.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instances.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object-instances.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=object-instances.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/action.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/action.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=action.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/actions.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/actions.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/bullet.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/bullet.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=bullet.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/bullets.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/bullets.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=bullets.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./action */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/action.js"), exports);
__exportStar(__webpack_require__(/*! ./actions */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/actions.js"), exports);
__exportStar(__webpack_require__(/*! ./bullet */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/bullet.js"), exports);
__exportStar(__webpack_require__(/*! ./bullets */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/bullets.js"), exports);
__exportStar(__webpack_require__(/*! ./object */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/object.js"), exports);
__exportStar(__webpack_require__(/*! ./switch */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/switch.js"), exports);
__exportStar(__webpack_require__(/*! ./switches */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/switches.js"), exports);
__exportStar(__webpack_require__(/*! ./variable */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/variable.js"), exports);
__exportStar(__webpack_require__(/*! ./variables */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/variables.js"), exports);
__exportStar(__webpack_require__(/*! ./viewport */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/viewport.js"), exports);
__exportStar(__webpack_require__(/*! ./viewports */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/viewports.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/object.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/object.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=object.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/switch.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/switch.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=switch.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/switches.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/switches.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=switches.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/variable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/variable.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=variable.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/variables.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/variables.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=variables.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/viewport.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/viewport.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=viewport.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/viewports.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/object/viewports.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=viewports.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/objects.js":
/*!**************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/objects.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=objects.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/player-character.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/player-character.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=player-character.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/player-characters.js":
/*!************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/player-characters.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=player-characters.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/action-command-plugin.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/action-command-plugin.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=action-command-plugin.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/auto-tile-plugin.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/auto-tile-plugin.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=auto-tile-plugin.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./action-command-plugin */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/action-command-plugin.js"), exports);
__exportStar(__webpack_require__(/*! ./auto-tile-plugin */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/auto-tile-plugin.js"), exports);
__exportStar(__webpack_require__(/*! ./link-condition-plugin */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/link-condition-plugin.js"), exports);
__exportStar(__webpack_require__(/*! ./plugin */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin.js"), exports);
__exportStar(__webpack_require__(/*! ./plugin-action-command */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-action-command.js"), exports);
__exportStar(__webpack_require__(/*! ./plugin-auto-tile-parameters */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-auto-tile-parameters.js"), exports);
__exportStar(__webpack_require__(/*! ./plugin-info */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-info.js"), exports);
__exportStar(__webpack_require__(/*! ./plugin-info-category */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-info-category.js"), exports);
__exportStar(__webpack_require__(/*! ./plugin-link-condition */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-link-condition.js"), exports);
__exportStar(__webpack_require__(/*! ./plugin-ui-custom-id-parameter */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-custom-id-parameter.js"), exports);
__exportStar(__webpack_require__(/*! ./plugin-ui-custom-id-parameter-param */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-custom-id-parameter-param.js"), exports);
__exportStar(__webpack_require__(/*! ./plugin-ui-embedded-parameter */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-embedded-parameter.js"), exports);
__exportStar(__webpack_require__(/*! ./plugin-ui-id-parameter */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-id-parameter.js"), exports);
__exportStar(__webpack_require__(/*! ./plugin-ui-json-parameter */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-json-parameter.js"), exports);
__exportStar(__webpack_require__(/*! ./plugin-ui-number-parameter */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-number-parameter.js"), exports);
__exportStar(__webpack_require__(/*! ./plugin-ui-parameter */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-parameter.js"), exports);
__exportStar(__webpack_require__(/*! ./plugin-ui-parameter-type */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-parameter-type.js"), exports);
__exportStar(__webpack_require__(/*! ./plugin-ui-string-parameter */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-string-parameter.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/link-condition-plugin.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/link-condition-plugin.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=link-condition-plugin.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-action-command.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-action-command.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=plugin-action-command.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-auto-tile-parameters.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-auto-tile-parameters.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=plugin-auto-tile-parameters.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-info-category.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-info-category.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AgtkPluginInfoCategory = void 0;
var AgtkPluginInfoCategory;
(function (AgtkPluginInfoCategory) {
    AgtkPluginInfoCategory["Name"] = "name";
    AgtkPluginInfoCategory["Description"] = "description";
    AgtkPluginInfoCategory["Author"] = "author";
    AgtkPluginInfoCategory["Help"] = "help";
    AgtkPluginInfoCategory["Parameter"] = "parameter";
    AgtkPluginInfoCategory["Internal"] = "internal";
    AgtkPluginInfoCategory["ActionCommand"] = "actionCommand";
    AgtkPluginInfoCategory["LinkCondition"] = "linkCondition";
    AgtkPluginInfoCategory["AutoTile"] = "autoTile";
})(AgtkPluginInfoCategory = exports.AgtkPluginInfoCategory || (exports.AgtkPluginInfoCategory = {}));
//# sourceMappingURL=plugin-info-category.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-info.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-info.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=plugin-info.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-link-condition.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-link-condition.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=plugin-link-condition.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-custom-id-parameter-param.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-custom-id-parameter-param.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=plugin-ui-custom-id-parameter-param.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-custom-id-parameter.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-custom-id-parameter.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=plugin-ui-custom-id-parameter.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-embedded-parameter.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-embedded-parameter.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=plugin-ui-embedded-parameter.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-id-parameter.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-id-parameter.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=plugin-ui-id-parameter.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-json-parameter.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-json-parameter.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=plugin-ui-json-parameter.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-number-parameter.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-number-parameter.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=plugin-ui-number-parameter.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-parameter-type.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-parameter-type.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AgtkPluginUiParameterType = void 0;
var AgtkPluginUiParameterType;
(function (AgtkPluginUiParameterType) {
    AgtkPluginUiParameterType["String"] = "String";
    AgtkPluginUiParameterType["MultiLineString"] = "MultiLineString";
    AgtkPluginUiParameterType["Number"] = "Number";
    AgtkPluginUiParameterType["Json"] = "Json";
    AgtkPluginUiParameterType["ImageId"] = "ImageId";
    AgtkPluginUiParameterType["TextId"] = "TextId";
    AgtkPluginUiParameterType["SceneId"] = "SceneId";
    AgtkPluginUiParameterType["TilesetId"] = "TilesetId";
    AgtkPluginUiParameterType["AnimationId"] = "AnimationId";
    AgtkPluginUiParameterType["ObjectId"] = "ObjectId";
    AgtkPluginUiParameterType["FontId"] = "FontId";
    AgtkPluginUiParameterType["MovieId"] = "MovieId";
    AgtkPluginUiParameterType["BgmId"] = "BgmId";
    AgtkPluginUiParameterType["SeId"] = "SeId";
    AgtkPluginUiParameterType["VoiceId"] = "VoiceId";
    AgtkPluginUiParameterType["VariableId"] = "VariableId";
    AgtkPluginUiParameterType["SwitchId"] = "SwitchId";
    AgtkPluginUiParameterType["AnimOnlyId"] = "AnimOnlyId";
    AgtkPluginUiParameterType["PortalId"] = "PortalId";
    AgtkPluginUiParameterType["CustomId"] = "CustomId";
    AgtkPluginUiParameterType["Embedded"] = "Embedded";
    AgtkPluginUiParameterType["EmbeddedEditable"] = "EmbeddedEditable";
    AgtkPluginUiParameterType["SwitchVariableObjectId"] = "SwitchVariableObjectId";
    AgtkPluginUiParameterType["DatabaseId"] = "DatabaseId";
})(AgtkPluginUiParameterType = exports.AgtkPluginUiParameterType || (exports.AgtkPluginUiParameterType = {}));
//# sourceMappingURL=plugin-ui-parameter-type.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-parameter.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-parameter.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=plugin-ui-parameter.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-string-parameter.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-string-parameter.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=plugin-ui-string-parameter.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=plugin.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugins.js":
/*!**************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugins.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=plugins.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/portal/ab.js":
/*!****************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/portal/ab.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ab.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/portal/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/portal/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./ab */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/portal/ab.js"), exports);
__exportStar(__webpack_require__(/*! ./portal */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/portal/portal.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/portal/portal.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/portal/portal.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=portal.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/portals.js":
/*!**************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/portals.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=portals.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/scene-instance.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/scene-instance.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=scene-instance.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/scene-instances.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/scene-instances.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=scene-instances.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/scene.js":
/*!************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/scene.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=scene.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/scenes.js":
/*!*************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/scenes.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=scenes.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/se.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/se.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=se.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/ses.js":
/*!**********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/ses.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ses.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/settings.js":
/*!***************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/settings.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/slope.js":
/*!************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/slope.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=slope.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/switch.js":
/*!*************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/switch.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=switch.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/switches.js":
/*!***************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/switches.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=switches.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/text.js":
/*!***********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/text.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=text.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/texts.js":
/*!************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/texts.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=texts.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/tileset.js":
/*!**************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/tileset.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=tileset.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/tilesets.js":
/*!***************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/tilesets.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=tilesets.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/ui.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/ui.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ui.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/variable.js":
/*!***************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/variable.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=variable.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/variables.js":
/*!****************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/variables.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=variables.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/voice.js":
/*!************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/voice.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=voice.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/voices.js":
/*!*************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/agtk/voices.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=voices.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/action-interval.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/action-interval.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=action-interval.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/action-manager.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/action-manager.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=action-manager.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/action.js":
/*!***********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/action.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=action.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/affine-transform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/affine-transform.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=affine-transform.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/async-pool.js":
/*!***************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/async-pool.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=async-pool.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/async.js":
/*!**********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/async.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=async.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/blend-func.js":
/*!***************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/blend-func.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=blend-func.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/cc.js":
/*!*******************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/cc.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=cc.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/class.js":
/*!**********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/class.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=class.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/color.js":
/*!**********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/color.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=color.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/component.js":
/*!**************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/component.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/director.js":
/*!*************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/director.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=director.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/draw-node.js":
/*!**************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/draw-node.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=draw-node.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/event-listener.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/event-listener.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=event-listener.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/event-manager.js":
/*!******************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/event-manager.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=event-manager.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/event.js":
/*!**********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/event.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=event.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/fade-in.js":
/*!************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/fade-in.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=fade-in.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/fade-out.js":
/*!*************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/fade-out.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=fade-out.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/fade-to.js":
/*!************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/fade-to.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=fade-to.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/finite-time-action.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/finite-time-action.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=finite-time-action.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/font-definition.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/font-definition.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=font-definition.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/game.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/game.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=game.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/gl-program.js":
/*!***************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/gl-program.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=gl-program.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/grid-base.js":
/*!**************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/grid-base.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=grid-base.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./action */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/action.js"), exports);
__exportStar(__webpack_require__(/*! ./action-interval */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/action-interval.js"), exports);
__exportStar(__webpack_require__(/*! ./action-manager */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/action-manager.js"), exports);
__exportStar(__webpack_require__(/*! ./affine-transform */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/affine-transform.js"), exports);
__exportStar(__webpack_require__(/*! ./async */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/async.js"), exports);
__exportStar(__webpack_require__(/*! ./async-pool */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/async-pool.js"), exports);
__exportStar(__webpack_require__(/*! ./blend-func */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/blend-func.js"), exports);
__exportStar(__webpack_require__(/*! ./cc */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/cc.js"), exports);
__exportStar(__webpack_require__(/*! ./class */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/class.js"), exports);
__exportStar(__webpack_require__(/*! ./color */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/color.js"), exports);
__exportStar(__webpack_require__(/*! ./component */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/component.js"), exports);
__exportStar(__webpack_require__(/*! ./director */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/director.js"), exports);
__exportStar(__webpack_require__(/*! ./draw-node */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/draw-node.js"), exports);
__exportStar(__webpack_require__(/*! ./event */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/event.js"), exports);
__exportStar(__webpack_require__(/*! ./event-listener */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/event-listener.js"), exports);
__exportStar(__webpack_require__(/*! ./event-manager */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/event-manager.js"), exports);
__exportStar(__webpack_require__(/*! ./fade-in */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/fade-in.js"), exports);
__exportStar(__webpack_require__(/*! ./fade-out */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/fade-out.js"), exports);
__exportStar(__webpack_require__(/*! ./fade-to */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/fade-to.js"), exports);
__exportStar(__webpack_require__(/*! ./finite-time-action */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/finite-time-action.js"), exports);
__exportStar(__webpack_require__(/*! ./font-definition */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/font-definition.js"), exports);
__exportStar(__webpack_require__(/*! ./game */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/game.js"), exports);
__exportStar(__webpack_require__(/*! ./gl-program */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/gl-program.js"), exports);
__exportStar(__webpack_require__(/*! ./grid-base */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/grid-base.js"), exports);
__exportStar(__webpack_require__(/*! ./label-ttf */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/label-ttf.js"), exports);
__exportStar(__webpack_require__(/*! ./layer */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/layer.js"), exports);
__exportStar(__webpack_require__(/*! ./loader */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/loader.js"), exports);
__exportStar(__webpack_require__(/*! ./math */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/math.js"), exports);
__exportStar(__webpack_require__(/*! ./node */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/node.js"), exports);
__exportStar(__webpack_require__(/*! ./path */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/path.js"), exports);
__exportStar(__webpack_require__(/*! ./point */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/point.js"), exports);
__exportStar(__webpack_require__(/*! ./rect */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/rect.js"), exports);
__exportStar(__webpack_require__(/*! ./repeat */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/repeat.js"), exports);
__exportStar(__webpack_require__(/*! ./scheduler */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/scheduler.js"), exports);
__exportStar(__webpack_require__(/*! ./sequence */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/sequence.js"), exports);
__exportStar(__webpack_require__(/*! ./size */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/size.js"), exports);
__exportStar(__webpack_require__(/*! ./sprite */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/sprite.js"), exports);
__exportStar(__webpack_require__(/*! ./sprite-batch-node */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/sprite-batch-node.js"), exports);
__exportStar(__webpack_require__(/*! ./sprite-frame */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/sprite-frame.js"), exports);
__exportStar(__webpack_require__(/*! ./sys */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/sys.js"), exports);
__exportStar(__webpack_require__(/*! ./tex-2f */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/tex-2f.js"), exports);
__exportStar(__webpack_require__(/*! ./texture-2d */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/texture-2d.js"), exports);
__exportStar(__webpack_require__(/*! ./texture-atlas */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/texture-atlas.js"), exports);
__exportStar(__webpack_require__(/*! ./texture-cache */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/texture-cache.js"), exports);
__exportStar(__webpack_require__(/*! ./touch */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/touch.js"), exports);
__exportStar(__webpack_require__(/*! ./v3f-c4b-t2f */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/v3f-c4b-t2f.js"), exports);
__exportStar(__webpack_require__(/*! ./v3f-c4b-t2f-quad */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/v3f-c4b-t2f-quad.js"), exports);
__exportStar(__webpack_require__(/*! ./vertex-3f */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/vertex-3f.js"), exports);
__exportStar(__webpack_require__(/*! ./view */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/view.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/label-ttf.js":
/*!**************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/label-ttf.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=label-ttf.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/layer.js":
/*!**********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/layer.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=layer.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/loader.js":
/*!***********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/loader.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=loader.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/math.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/math.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=math.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/node.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/node.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=node.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/path.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/path.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=path.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/point.js":
/*!**********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/point.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=point.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/rect.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/rect.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=rect.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/repeat.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=repeat.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/scheduler.js":
/*!**************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/scheduler.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=scheduler.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/sequence.js":
/*!*************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/sequence.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=sequence.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/size.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/size.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=size.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/sprite-batch-node.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/sprite-batch-node.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=sprite-batch-node.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/sprite-frame.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/sprite-frame.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=sprite-frame.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/sprite.js":
/*!***********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/sprite.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=sprite.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/sys.js":
/*!********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/sys.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=sys.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/tex-2f.js":
/*!***********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/tex-2f.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=tex-2f.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/texture-2d.js":
/*!***************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/texture-2d.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=texture-2d.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/texture-atlas.js":
/*!******************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/texture-atlas.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=texture-atlas.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/texture-cache.js":
/*!******************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/texture-cache.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=texture-cache.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/touch.js":
/*!**********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/touch.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=touch.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/v3f-c4b-t2f-quad.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/v3f-c4b-t2f-quad.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=v3f-c4b-t2f-quad.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/v3f-c4b-t2f.js":
/*!****************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/v3f-c4b-t2f.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=v3f-c4b-t2f.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/vertex-3f.js":
/*!**************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/vertex-3f.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=vertex-3f.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/cc/view.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/cc/view.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=view.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./agtk */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/index.js"), exports);
__exportStar(__webpack_require__(/*! ./cc */ "./node_modules/@agogpixel/pgmmv-ts/api/cc/index.js"), exports);
__exportStar(__webpack_require__(/*! ./jsb */ "./node_modules/@agogpixel/pgmmv-ts/api/jsb/index.js"), exports);
__exportStar(__webpack_require__(/*! ./types */ "./node_modules/@agogpixel/pgmmv-ts/api/types/index.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/jsb/file-utils.js":
/*!****************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/jsb/file-utils.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=file-utils.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/jsb/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/jsb/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./file-utils */ "./node_modules/@agogpixel/pgmmv-ts/api/jsb/file-utils.js"), exports);
__exportStar(__webpack_require__(/*! ./jsb */ "./node_modules/@agogpixel/pgmmv-ts/api/jsb/jsb.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/jsb/jsb.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/jsb/jsb.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=jsb.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/types/dom.js":
/*!***********************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/types/dom.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {


/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-interface */
/******************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/types/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/types/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./dom */ "./node_modules/@agogpixel/pgmmv-ts/api/types/dom.js"), exports);
__exportStar(__webpack_require__(/*! ./json */ "./node_modules/@agogpixel/pgmmv-ts/api/types/json.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-ts/api/types/json.js":
/*!************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-ts/api/types/json.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=json.js.map

/***/ }),

/***/ "./src/action-commands/action-command-id.enum.ts":
/*!*******************************************************!*\
  !*** ./src/action-commands/action-command-id.enum.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionCommandId = void 0;
var ActionCommandId;
(function (ActionCommandId) {
    ActionCommandId[ActionCommandId["ShowChoices"] = 1] = "ShowChoices";
})(ActionCommandId = exports.ActionCommandId || (exports.ActionCommandId = {}));


/***/ }),

/***/ "./src/action-commands/action-commands.config.ts":
/*!*******************************************************!*\
  !*** ./src/action-commands/action-commands.config.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.actionCommands = void 0;
var api_1 = __webpack_require__(/*! @agogpixel/pgmmv-ts/api */ "./node_modules/@agogpixel/pgmmv-ts/api/index.js");
var action_command_id_enum_1 = __webpack_require__(/*! ./action-command-id.enum */ "./src/action-commands/action-command-id.enum.ts");
var show_choices_1 = __webpack_require__(/*! ./show-choices */ "./src/action-commands/show-choices/index.ts");
var showChoicesDefaults = {
    idParameter: -1,
    embeddedName: '',
    embeddedReference: 'text',
    embeddedWidth: 256,
    embeddedHeight: 48
};
exports.actionCommands = [
    {
        // Show Choices.
        id: action_command_id_enum_1.ActionCommandId.ShowChoices,
        name: 'loca(ACTION_COMMAND_0_NAME)',
        description: 'loca(ACTION_COMMAND_0_DESCRIPTION)',
        parameter: [
            // Configurable choice 'slots'.
            {
                id: show_choices_1.ShowChoicesParameterId.Choice1,
                name: 'loca(ACTION_COMMAND_0_PARAMETER_0_NAME)',
                type: api_1.AgtkPluginUiParameterType.TextId,
                defaultValue: showChoicesDefaults.idParameter,
                withNewButton: true
            },
            {
                id: show_choices_1.ShowChoicesParameterId.Choice1Embedded,
                name: showChoicesDefaults.embeddedName,
                type: api_1.AgtkPluginUiParameterType.EmbeddedEditable,
                sourceId: show_choices_1.ShowChoicesParameterId.Choice1,
                reference: showChoicesDefaults.embeddedReference,
                width: showChoicesDefaults.embeddedWidth,
                height: showChoicesDefaults.embeddedHeight
            },
            {
                id: show_choices_1.ShowChoicesParameterId.Choice2,
                name: 'loca(ACTION_COMMAND_0_PARAMETER_1_NAME)',
                type: api_1.AgtkPluginUiParameterType.TextId,
                defaultValue: showChoicesDefaults.idParameter,
                withNewButton: true
            },
            {
                id: show_choices_1.ShowChoicesParameterId.Choice2Embedded,
                name: showChoicesDefaults.embeddedName,
                type: api_1.AgtkPluginUiParameterType.EmbeddedEditable,
                sourceId: show_choices_1.ShowChoicesParameterId.Choice2,
                reference: showChoicesDefaults.embeddedReference,
                width: showChoicesDefaults.embeddedWidth,
                height: showChoicesDefaults.embeddedHeight
            },
            {
                id: show_choices_1.ShowChoicesParameterId.Choice3,
                name: 'loca(ACTION_COMMAND_0_PARAMETER_2_NAME)',
                type: api_1.AgtkPluginUiParameterType.TextId,
                defaultValue: showChoicesDefaults.idParameter,
                withNewButton: true
            },
            {
                id: show_choices_1.ShowChoicesParameterId.Choice3Embedded,
                name: showChoicesDefaults.embeddedName,
                type: api_1.AgtkPluginUiParameterType.EmbeddedEditable,
                sourceId: show_choices_1.ShowChoicesParameterId.Choice3,
                reference: showChoicesDefaults.embeddedReference,
                width: showChoicesDefaults.embeddedWidth,
                height: showChoicesDefaults.embeddedHeight
            },
            {
                id: show_choices_1.ShowChoicesParameterId.Choice4,
                name: 'loca(ACTION_COMMAND_0_PARAMETER_3_NAME)',
                type: api_1.AgtkPluginUiParameterType.TextId,
                defaultValue: showChoicesDefaults.idParameter,
                withNewButton: true
            },
            {
                id: show_choices_1.ShowChoicesParameterId.Choice4Embedded,
                name: showChoicesDefaults.embeddedName,
                type: api_1.AgtkPluginUiParameterType.EmbeddedEditable,
                sourceId: show_choices_1.ShowChoicesParameterId.Choice4,
                reference: showChoicesDefaults.embeddedReference,
                width: showChoicesDefaults.embeddedWidth,
                height: showChoicesDefaults.embeddedHeight
            },
            {
                id: show_choices_1.ShowChoicesParameterId.Choice5,
                name: 'loca(ACTION_COMMAND_0_PARAMETER_4_NAME)',
                type: api_1.AgtkPluginUiParameterType.TextId,
                defaultValue: showChoicesDefaults.idParameter,
                withNewButton: true
            },
            {
                id: show_choices_1.ShowChoicesParameterId.Choice5Embedded,
                name: showChoicesDefaults.embeddedName,
                type: api_1.AgtkPluginUiParameterType.EmbeddedEditable,
                sourceId: show_choices_1.ShowChoicesParameterId.Choice5,
                reference: showChoicesDefaults.embeddedReference,
                width: showChoicesDefaults.embeddedWidth,
                height: showChoicesDefaults.embeddedHeight
            },
            {
                id: show_choices_1.ShowChoicesParameterId.Choice6,
                name: 'loca(ACTION_COMMAND_0_PARAMETER_5_NAME)',
                type: api_1.AgtkPluginUiParameterType.TextId,
                defaultValue: showChoicesDefaults.idParameter,
                withNewButton: true
            },
            {
                id: show_choices_1.ShowChoicesParameterId.Choice6Embedded,
                name: showChoicesDefaults.embeddedName,
                type: api_1.AgtkPluginUiParameterType.EmbeddedEditable,
                sourceId: show_choices_1.ShowChoicesParameterId.Choice6,
                reference: showChoicesDefaults.embeddedReference,
                width: showChoicesDefaults.embeddedWidth,
                height: showChoicesDefaults.embeddedHeight
            },
            // Display Options.
            {
                id: show_choices_1.ShowChoicesParameterId.Font,
                name: 'loca(ACTION_COMMAND_0_PARAMETER_6_NAME)',
                type: api_1.AgtkPluginUiParameterType.FontId,
                defaultValue: showChoicesDefaults.idParameter
            },
            {
                id: show_choices_1.ShowChoicesParameterId.Background,
                name: 'loca(ACTION_COMMAND_0_PARAMETER_7_NAME)',
                type: api_1.AgtkPluginUiParameterType.CustomId,
                customParam: [
                    { id: show_choices_1.ShowChoicesBackgroundParameterId.WhiteFrame, name: 'loca(ACTION_COMMAND_0_PARAMETER_7_PARAM_0_NAME)' },
                    { id: show_choices_1.ShowChoicesBackgroundParameterId.Black, name: 'loca(ACTION_COMMAND_0_PARAMETER_7_PARAM_1_NAME)' },
                    { id: show_choices_1.ShowChoicesBackgroundParameterId.None, name: 'loca(ACTION_COMMAND_0_PARAMETER_7_PARAM_2_NAME)' }
                ],
                defaultValue: show_choices_1.ShowChoicesBackgroundParameterId.WhiteFrame
            },
            {
                id: show_choices_1.ShowChoicesParameterId.Position,
                name: 'loca(ACTION_COMMAND_0_PARAMETER_8_NAME)',
                type: api_1.AgtkPluginUiParameterType.CustomId,
                customParam: [
                    { id: show_choices_1.ShowChoicesPositionParameterId.Left, name: 'loca(ACTION_COMMAND_0_PARAMETER_8_PARAM_0_NAME)' },
                    { id: show_choices_1.ShowChoicesPositionParameterId.Center, name: 'loca(ACTION_COMMAND_0_PARAMETER_8_PARAM_1_NAME)' },
                    { id: show_choices_1.ShowChoicesPositionParameterId.Right, name: 'loca(ACTION_COMMAND_0_PARAMETER_8_PARAM_2_NAME)' }
                ],
                defaultValue: show_choices_1.ShowChoicesPositionParameterId.Center
            },
            // Behavior Options.
            {
                id: show_choices_1.ShowChoicesParameterId.Variable,
                name: 'loca(ACTION_COMMAND_0_PARAMETER_9_NAME)',
                type: api_1.AgtkPluginUiParameterType.VariableId,
                defaultValue: showChoicesDefaults.idParameter,
                withNewButton: true
            },
            {
                id: show_choices_1.ShowChoicesParameterId.Cancel,
                name: 'loca(ACTION_COMMAND_0_PARAMETER_10_NAME)',
                type: api_1.AgtkPluginUiParameterType.CustomId,
                customParam: [
                    { id: show_choices_1.ShowChoicesCancelParameterId.Enabled, name: 'loca(ACTION_COMMAND_0_PARAMETER_10_PARAM_0_NAME)' },
                    { id: show_choices_1.ShowChoicesCancelParameterId.Disabled, name: 'loca(ACTION_COMMAND_0_PARAMETER_10_PARAM_1_NAME)' }
                ],
                defaultValue: show_choices_1.ShowChoicesCancelParameterId.Disabled
            }
        ]
    }
];


/***/ }),

/***/ "./src/action-commands/index.ts":
/*!**************************************!*\
  !*** ./src/action-commands/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./action-command-id.enum */ "./src/action-commands/action-command-id.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./action-commands.config */ "./src/action-commands/action-commands.config.ts"), exports);
__exportStar(__webpack_require__(/*! ./show-choices */ "./src/action-commands/show-choices/index.ts"), exports);


/***/ }),

/***/ "./src/action-commands/show-choices/index.ts":
/*!***************************************************!*\
  !*** ./src/action-commands/show-choices/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./show-choices-background-parameter-id.enum */ "./src/action-commands/show-choices/show-choices-background-parameter-id.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./show-choices-cancel-parameter-id.enum */ "./src/action-commands/show-choices/show-choices-cancel-parameter-id.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./show-choices-parameter-id.enum */ "./src/action-commands/show-choices/show-choices-parameter-id.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./show-choices-position-parameter-id.enum */ "./src/action-commands/show-choices/show-choices-position-parameter-id.enum.ts"), exports);


/***/ }),

/***/ "./src/action-commands/show-choices/show-choices-background-parameter-id.enum.ts":
/*!***************************************************************************************!*\
  !*** ./src/action-commands/show-choices/show-choices-background-parameter-id.enum.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShowChoicesBackgroundParameterId = void 0;
var ShowChoicesBackgroundParameterId;
(function (ShowChoicesBackgroundParameterId) {
    ShowChoicesBackgroundParameterId[ShowChoicesBackgroundParameterId["WhiteFrame"] = 1] = "WhiteFrame";
    ShowChoicesBackgroundParameterId[ShowChoicesBackgroundParameterId["Black"] = 2] = "Black";
    ShowChoicesBackgroundParameterId[ShowChoicesBackgroundParameterId["None"] = 3] = "None";
})(ShowChoicesBackgroundParameterId = exports.ShowChoicesBackgroundParameterId || (exports.ShowChoicesBackgroundParameterId = {}));


/***/ }),

/***/ "./src/action-commands/show-choices/show-choices-cancel-parameter-id.enum.ts":
/*!***********************************************************************************!*\
  !*** ./src/action-commands/show-choices/show-choices-cancel-parameter-id.enum.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShowChoicesCancelParameterId = void 0;
var ShowChoicesCancelParameterId;
(function (ShowChoicesCancelParameterId) {
    ShowChoicesCancelParameterId[ShowChoicesCancelParameterId["Enabled"] = 1] = "Enabled";
    ShowChoicesCancelParameterId[ShowChoicesCancelParameterId["Disabled"] = 2] = "Disabled";
})(ShowChoicesCancelParameterId = exports.ShowChoicesCancelParameterId || (exports.ShowChoicesCancelParameterId = {}));


/***/ }),

/***/ "./src/action-commands/show-choices/show-choices-parameter-id.enum.ts":
/*!****************************************************************************!*\
  !*** ./src/action-commands/show-choices/show-choices-parameter-id.enum.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShowChoicesParameterId = void 0;
var ShowChoicesParameterId;
(function (ShowChoicesParameterId) {
    ShowChoicesParameterId[ShowChoicesParameterId["Choice1"] = 1] = "Choice1";
    ShowChoicesParameterId[ShowChoicesParameterId["Choice1Embedded"] = 101] = "Choice1Embedded";
    ShowChoicesParameterId[ShowChoicesParameterId["Choice2"] = 2] = "Choice2";
    ShowChoicesParameterId[ShowChoicesParameterId["Choice2Embedded"] = 102] = "Choice2Embedded";
    ShowChoicesParameterId[ShowChoicesParameterId["Choice3"] = 3] = "Choice3";
    ShowChoicesParameterId[ShowChoicesParameterId["Choice3Embedded"] = 103] = "Choice3Embedded";
    ShowChoicesParameterId[ShowChoicesParameterId["Choice4"] = 4] = "Choice4";
    ShowChoicesParameterId[ShowChoicesParameterId["Choice4Embedded"] = 104] = "Choice4Embedded";
    ShowChoicesParameterId[ShowChoicesParameterId["Choice5"] = 5] = "Choice5";
    ShowChoicesParameterId[ShowChoicesParameterId["Choice5Embedded"] = 105] = "Choice5Embedded";
    ShowChoicesParameterId[ShowChoicesParameterId["Choice6"] = 6] = "Choice6";
    ShowChoicesParameterId[ShowChoicesParameterId["Choice6Embedded"] = 106] = "Choice6Embedded";
    ShowChoicesParameterId[ShowChoicesParameterId["Font"] = 7] = "Font";
    ShowChoicesParameterId[ShowChoicesParameterId["Background"] = 8] = "Background";
    ShowChoicesParameterId[ShowChoicesParameterId["Position"] = 9] = "Position";
    ShowChoicesParameterId[ShowChoicesParameterId["Variable"] = 10] = "Variable";
    ShowChoicesParameterId[ShowChoicesParameterId["Cancel"] = 11] = "Cancel";
})(ShowChoicesParameterId = exports.ShowChoicesParameterId || (exports.ShowChoicesParameterId = {}));


/***/ }),

/***/ "./src/action-commands/show-choices/show-choices-position-parameter-id.enum.ts":
/*!*************************************************************************************!*\
  !*** ./src/action-commands/show-choices/show-choices-position-parameter-id.enum.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShowChoicesPositionParameterId = void 0;
var ShowChoicesPositionParameterId;
(function (ShowChoicesPositionParameterId) {
    ShowChoicesPositionParameterId[ShowChoicesPositionParameterId["Left"] = 1] = "Left";
    ShowChoicesPositionParameterId[ShowChoicesPositionParameterId["Center"] = 2] = "Center";
    ShowChoicesPositionParameterId[ShowChoicesPositionParameterId["Right"] = 3] = "Right";
})(ShowChoicesPositionParameterId = exports.ShowChoicesPositionParameterId || (exports.ShowChoicesPositionParameterId = {}));


/***/ }),

/***/ "./src/choices-layer/choices-layer-background.enum.ts":
/*!************************************************************!*\
  !*** ./src/choices-layer/choices-layer-background.enum.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChoicesLayerBackground = void 0;
var ChoicesLayerBackground;
(function (ChoicesLayerBackground) {
    ChoicesLayerBackground[ChoicesLayerBackground["WhiteFrame"] = 1] = "WhiteFrame";
    ChoicesLayerBackground[ChoicesLayerBackground["Black"] = 2] = "Black";
    ChoicesLayerBackground[ChoicesLayerBackground["None"] = 3] = "None";
})(ChoicesLayerBackground = exports.ChoicesLayerBackground || (exports.ChoicesLayerBackground = {}));


/***/ }),

/***/ "./src/choices-layer/choices-layer-data-service.interface.ts":
/*!*******************************************************************!*\
  !*** ./src/choices-layer/choices-layer-data-service.interface.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/choices-layer/choices-layer-mode.enum.ts":
/*!******************************************************!*\
  !*** ./src/choices-layer/choices-layer-mode.enum.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChoicesLayerMode = void 0;
var ChoicesLayerMode;
(function (ChoicesLayerMode) {
    ChoicesLayerMode[ChoicesLayerMode["Opening"] = 0] = "Opening";
    ChoicesLayerMode[ChoicesLayerMode["WaitingForKey"] = 1] = "WaitingForKey";
    ChoicesLayerMode[ChoicesLayerMode["Closing"] = 2] = "Closing";
    ChoicesLayerMode[ChoicesLayerMode["End"] = 3] = "End";
})(ChoicesLayerMode = exports.ChoicesLayerMode || (exports.ChoicesLayerMode = {}));


/***/ }),

/***/ "./src/choices-layer/choices-layer-position.enum.ts":
/*!**********************************************************!*\
  !*** ./src/choices-layer/choices-layer-position.enum.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChoicesLayerPosition = void 0;
var ChoicesLayerPosition;
(function (ChoicesLayerPosition) {
    ChoicesLayerPosition[ChoicesLayerPosition["Left"] = 1] = "Left";
    ChoicesLayerPosition[ChoicesLayerPosition["Center"] = 2] = "Center";
    ChoicesLayerPosition[ChoicesLayerPosition["Right"] = 3] = "Right";
})(ChoicesLayerPosition = exports.ChoicesLayerPosition || (exports.ChoicesLayerPosition = {}));


/***/ }),

/***/ "./src/choices-layer/choices-layer.interface.ts":
/*!******************************************************!*\
  !*** ./src/choices-layer/choices-layer.interface.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/choices-layer/create-choices-layer-class.function.ts":
/*!******************************************************************!*\
  !*** ./src/choices-layer/create-choices-layer-class.function.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createChoicesLayerClass = void 0;
var action_commands_1 = __webpack_require__(/*! ../action-commands */ "./src/action-commands/index.ts");
var choices_layer_background_enum_1 = __webpack_require__(/*! ./choices-layer-background.enum */ "./src/choices-layer/choices-layer-background.enum.ts");
var choices_layer_mode_enum_1 = __webpack_require__(/*! ./choices-layer-mode.enum */ "./src/choices-layer/choices-layer-mode.enum.ts");
var choices_layer_position_enum_1 = __webpack_require__(/*! ./choices-layer-position.enum */ "./src/choices-layer/choices-layer-position.enum.ts");
var font_draw_1 = __webpack_require__(/*! ./font-draw */ "./src/choices-layer/font-draw/index.ts");
function createChoicesLayerClass() {
    return cc.Layer.extend({
        ctor: function (service, objectId, instanceId) {
            this._super();
            this.service = service;
            this.objectId = objectId;
            this.instanceId = instanceId;
            //this.bgType = obj.getValue(valueJson, 8);
            this.currentIndex = 0;
            this.pressedKey = ~0;
            this.mousePressedKey = ~0;
            //this.cancellable = obj.getValue(valueJson, 11) === 1;
            //this.variableId = obj.getValue(valueJson, 10);
            this.mode = choices_layer_mode_enum_1.ChoicesLayerMode.End;
            var bgImageId = service.getBgImageId();
            if (bgImageId === null) {
                return false;
            }
            var bgImageData = Agtk.images.get(bgImageId);
            if (bgImageData == null) {
                return false;
            }
            //this.bgImageTex = cc.TextureCache.getInstance().addImage(bgImageData.filename);
            this.bgImageTex = cc.textureCache.addImage(bgImageData.filename);
            this.bgImageTex.setAliasTexParameters();
            var fontId = service.getFontId();
            if (fontId === null) {
                return false;
            }
            var fontData = Agtk.fonts.get(fontId);
            this.frameLayer = new cc.Layer();
            this.addChild(this.frameLayer);
            this.highlightLayer = new cc.Layer();
            this.highlightLayer.x = 8;
            this.highlightLayer.y = 8;
            this.addChild(this.highlightLayer);
            this.textLayer = new cc.Layer();
            this.textLayer.x = 8;
            this.textLayer.y = 8;
            this.addChild(this.textLayer);
            this.choiceCount = 0;
            this.choiceHeightList = [];
            var textWidth = 0;
            var textHeight = 0;
            // Render choices.
            for (var i = 0; i < action_commands_1.ShowChoicesParameterId.Choice6; i++) {
                var textId = service.getTextId(1 + i);
                var textData = Agtk.texts.get(textId);
                if (textData == null) {
                    break;
                }
                var fdata = fontData;
                if (fdata === null) {
                    if (textData.fontId >= 0) {
                        fdata = Agtk.fonts.get(textData.fontId);
                    }
                }
                if (fdata === null) {
                    break;
                }
                var text = textData.getText(service.getLocale());
                if (text == null || text.length == 0) {
                    break;
                }
                var fontDraw = (0, font_draw_1.createFontDraw)(this.textLayer, 1, fdata, textData.letterSpacing);
                if (!fontDraw) {
                    break;
                }
                var result = fontDraw.drawLetters(text, textWidth, textHeight);
                textWidth = result[0];
                textHeight = result[1];
                this.choiceCount++;
                this.choiceHeightList.push(fontDraw.getCurrentLineMaxHeight());
            }
            if (this.choiceCount == 0) {
                return false;
            }
            textHeight -= 8;
            this.textLayer.x = 8;
            this.textLayer.y = textHeight + 8;
            this.textLayer.visible = false;
            this.winWidth = textWidth + 16;
            this.winHeight = textHeight + 16;
            if (this.service.getBgType() === choices_layer_background_enum_1.ChoicesLayerBackground.Black) {
                this.createWindow(0, 0, this.winWidth, this.winHeight);
                this.setChildrenOpacity(this.frameLayer, 0);
            }
            this.mode = choices_layer_mode_enum_1.ChoicesLayerMode.Opening;
            this.modeCounter = 0;
            this.highlight = null;
            //this.updateHighlight();
            var position = service.getPosition();
            var screenWidth = service.getScreenWidth();
            var screenHeight = service.getScreenHeight();
            if (position == choices_layer_position_enum_1.ChoicesLayerPosition.Left) {
                this.x = 0;
            }
            else if (position == choices_layer_position_enum_1.ChoicesLayerPosition.Center) {
                this.x = (screenWidth - this.winWidth) / 2;
            }
            else if (position == choices_layer_position_enum_1.ChoicesLayerPosition.Right) {
                this.x = screenWidth - this.winWidth;
            }
            this.y = (screenHeight - this.winHeight) / 2;
            return true;
        },
        update: function () {
            if (!this.service.isShowing()) {
                return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
            }
            var bgType = this.service.getBgType();
            if (this.mode == choices_layer_mode_enum_1.ChoicesLayerMode.Opening) {
                if (bgType === choices_layer_background_enum_1.ChoicesLayerBackground.Black) {
                    var alpha = (this.modeCounter * 255) / 30;
                    if (alpha >= 255) {
                        alpha = 255;
                        this.mode = choices_layer_mode_enum_1.ChoicesLayerMode.WaitingForKey;
                        this.modeCounter = 0;
                        this.textLayer.visible = true;
                        this.updateHighlight();
                    }
                    else {
                        this.modeCounter++;
                    }
                    this.setChildrenOpacity(this.frameLayer, alpha);
                }
                else {
                    this.frameLayer.removeAllChildren();
                    var winHeight = (this.modeCounter + 1) * 16;
                    if (winHeight >= this.winHeight) {
                        winHeight = this.winHeight;
                    }
                    var winY = (this.winHeight - winHeight) / 2;
                    this.createWindow(0, winY, this.winWidth, winHeight, this.windowFilename);
                    if (winHeight >= this.winHeight) {
                        this.mode = choices_layer_mode_enum_1.ChoicesLayerMode.WaitingForKey;
                        this.modeCounter = 0;
                        this.textLayer.visible = true;
                        this.updateHighlight();
                    }
                    else {
                        this.modeCounter++;
                    }
                }
                return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorBlock;
            }
            if (this.mode === choices_layer_mode_enum_1.ChoicesLayerMode.WaitingForKey) {
                if (this.isKeyUpJustPressed()) {
                    if (this.currentIndex > 0) {
                        this.currentIndex--;
                        this.updateHighlight();
                    }
                }
                else if (this.isKeyDownJustPressed()) {
                    if (this.currentIndex < this.choiceCount - 1) {
                        this.currentIndex++;
                        this.updateHighlight();
                    }
                }
                else if (this.isKeyOkJustPressed()) {
                    this.mode = choices_layer_mode_enum_1.ChoicesLayerMode.Closing;
                    this.modeCounter = 0;
                    this.textLayer.visible = false;
                    this.highlightLayer.visible = false;
                }
                else if (this.isMouseLeftClickJustPressed()) {
                    var index = this.getClickedIndex();
                    if (index >= 0) {
                        if (index === this.currentIndex) {
                            this.mode = choices_layer_mode_enum_1.ChoicesLayerMode.Closing;
                            this.modeCounter = 0;
                            this.textLayer.visible = false;
                            this.highlightLayer.visible = false;
                        }
                        else {
                            this.currentIndex = index;
                            this.updateHighlight();
                        }
                    }
                }
                else if (this.service.isCancellable() &&
                    (this.isKeyCancelJustPressed() || this.isMouseRightClickJustPressed())) {
                    this.mode = choices_layer_mode_enum_1.ChoicesLayerMode.Closing;
                    this.modeCounter = 0;
                    this.currentIndex = -1;
                    this.textLayer.visible = false;
                    this.highlightLayer.visible = false;
                }
            }
            if (this.mode === choices_layer_mode_enum_1.ChoicesLayerMode.Closing) {
                if (bgType === choices_layer_background_enum_1.ChoicesLayerBackground.None) {
                    this.mode = choices_layer_mode_enum_1.ChoicesLayerMode.End;
                    this.modeCounter = 0;
                }
                else if (bgType === choices_layer_background_enum_1.ChoicesLayerBackground.Black) {
                    var alpha = 255 - (this.modeCounter * 255) / 30;
                    if (alpha <= 0) {
                        alpha = 0;
                        this.mode = choices_layer_mode_enum_1.ChoicesLayerMode.End;
                        this.modeCounter = 0;
                    }
                    else {
                        this.modeCounter++;
                    }
                    this.setChildrenOpacity(this.frameLayer, alpha);
                }
                else {
                    this.frameLayer.removeAllChildren();
                    var winHeight = this.winHeight - (this.modeCounter + 1) * 16;
                    if (winHeight < 16) {
                        winHeight = 0;
                        this.mode = choices_layer_mode_enum_1.ChoicesLayerMode.End;
                        this.modeCounter = 0;
                    }
                    else {
                        var winY = (this.winHeight - winHeight) / 2;
                        this.createWindow(0, winY, this.winWidth, winHeight, this.windowFilename);
                        this.modeCounter++;
                    }
                }
                if (this.mode != choices_layer_mode_enum_1.ChoicesLayerMode.End) {
                    return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorBlock;
                }
            }
            if (this.mode == choices_layer_mode_enum_1.ChoicesLayerMode.End) {
                this.service.setSelectedInfo(this.objectId, this.instanceId, this.currentIndex, this.service.getVariableId());
                this.service.destroyChoices(true);
                return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
            }
            return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorBlock;
        },
        getClickedIndex: function () {
            var x = Agtk.variables.get(Agtk.variables.MouseXId).getValue();
            var y = this.service.getScreenHeight() - 1 - Agtk.variables.get(Agtk.variables.MouseYId).getValue();
            if (x < this.x + 4 || x >= this.x + this.winWidth - 4) {
                return -1;
            }
            var iy = this.y + 8;
            for (var i = this.choiceHeightList.length - 1; i >= 0; i--) {
                if (y >= iy - 4 && y < iy + this.choiceHeightList[i] + 4) {
                    return i;
                }
                iy += 8 + this.choiceHeightList[i];
            }
            return -1;
        },
        onExit: function () {
            this._super();
            this.service.destroyChoices(false);
        },
        createWindow: function (winX, winY, winWidth, winHeight) {
            var bgType = this.service.getBgType();
            var oy = 0;
            if (bgType == choices_layer_background_enum_1.ChoicesLayerBackground.WhiteFrame) {
                oy = 0;
            }
            else if (bgType == choices_layer_background_enum_1.ChoicesLayerBackground.Black) {
                oy = 24;
            }
            else if (bgType == choices_layer_background_enum_1.ChoicesLayerBackground.None) {
                return;
            }
            var sprite = new cc.Sprite(this.bgImageTex, cc.rect(0, oy, 8, 8));
            sprite.setAnchorPoint(0, 0);
            sprite.x = winX;
            sprite.y = winY + winHeight - 8;
            this.frameLayer.addChild(sprite);
            sprite = new cc.Sprite(this.bgImageTex, cc.rect(8, oy, 8, 8));
            sprite.setAnchorPoint(0, 0);
            sprite.x = winX + 8;
            sprite.y = winY + winHeight - 8;
            sprite.width = winWidth - 16;
            this.frameLayer.addChild(sprite);
            sprite = new cc.Sprite(this.bgImageTex, cc.rect(16, oy, 8, 8));
            sprite.setAnchorPoint(0, 0);
            sprite.x = winX + winWidth - 8;
            sprite.y = winY + winHeight - 8;
            this.frameLayer.addChild(sprite);
            sprite = new cc.Sprite(this.bgImageTex, cc.rect(0, oy + 8, 8, 8));
            sprite.setAnchorPoint(0, 0);
            sprite.x = winX;
            sprite.y = winY + 8;
            sprite.height = winHeight - 16;
            this.frameLayer.addChild(sprite);
            sprite = new cc.Sprite(this.bgImageTex, cc.rect(8, oy + 8, 8, 8));
            sprite.setAnchorPoint(0, 0);
            sprite.x = winX + 8;
            sprite.y = winY + 8;
            sprite.width = winWidth - 16;
            sprite.height = winHeight - 16;
            this.frameLayer.addChild(sprite);
            sprite = new cc.Sprite(this.bgImageTex, cc.rect(16, oy + 8, 8, 8));
            sprite.setAnchorPoint(0, 0);
            sprite.x = winX + winWidth - 8;
            sprite.y = winY + 8;
            sprite.height = winHeight - 16;
            this.frameLayer.addChild(sprite);
            sprite = new cc.Sprite(this.bgImageTex, cc.rect(0, oy + 16, 8, 8));
            sprite.setAnchorPoint(0, 0);
            sprite.x = winX;
            sprite.y = winY;
            this.frameLayer.addChild(sprite);
            sprite = new cc.Sprite(this.bgImageTex, cc.rect(8, oy + 16, 8, 8));
            sprite.setAnchorPoint(0, 0);
            sprite.x = winX + 8;
            sprite.y = winY;
            sprite.width = winWidth - 16;
            this.frameLayer.addChild(sprite);
            sprite = new cc.Sprite(this.bgImageTex, cc.rect(16, oy + 16, 8, 8));
            sprite.setAnchorPoint(0, 0);
            sprite.x = winX + winWidth - 8;
            sprite.y = winY;
            this.frameLayer.addChild(sprite);
        },
        updateHighlight: function () {
            if (this.highlight !== null) {
                this.highlight.removeFromParent();
            }
            var y = 0;
            for (var i = this.choiceHeightList.length - 1; i > this.currentIndex; i--) {
                y += 8 + this.choiceHeightList[i];
            }
            this.highlight = cc.DrawNode.create();
            this.highlight.drawRect(cc.p(-4, y - 4), cc.p(this.winWidth - 16 + 4, y + this.choiceHeightList[this.currentIndex] + 4), cc.color(0, 255, 255, 128), 0, cc.color(0, 0, 0, 0));
            this.highlightLayer.addChild(this.highlight);
            this.highlight.runAction(cc.sequence(cc.fadeIn(0.0), cc.repeat(cc.sequence(cc.fadeTo(0.5, 255), cc.fadeTo(0.5, 128)), Math.pow(2, 30))));
        },
        isKeyOkJustPressed: function () {
            return this.isKeyJustPressed(Agtk.constants.controllers.OperationKeyOk);
        },
        isKeyCancelJustPressed: function () {
            return this.isKeyJustPressed(Agtk.constants.controllers.OperationKeyCancel);
        },
        isKeyUpJustPressed: function () {
            return this.isKeyJustPressed(Agtk.constants.controllers.OperationKeyUp);
        },
        isKeyDownJustPressed: function () {
            return this.isKeyJustPressed(Agtk.constants.controllers.OperationKeyDown);
        },
        isMouseLeftClickJustPressed: function () {
            return this.isMouseJustPressed(Agtk.constants.controllers.ReservedKeyCodePc_LeftClick);
        },
        isMouseRightClickJustPressed: function () {
            return this.isMouseJustPressed(Agtk.constants.controllers.ReservedKeyCodePc_RightClick);
        },
        isKeyPressed: function (keyId) {
            for (var i = 0; i <= Agtk.controllers.MaxControllerId; i++) {
                if (Agtk.controllers.getOperationKeyPressed(i, keyId)) {
                    return true;
                }
            }
            return false;
        },
        isKeyJustPressed: function (keyId) {
            var pressed = this.isKeyPressed(keyId);
            if (!(this.pressedKey & (1 << keyId)) && pressed) {
                this.pressedKey = (this.pressedKey & ~(1 << keyId)) | (pressed ? 1 << keyId : 0);
                return true;
            }
            this.pressedKey = (this.pressedKey & ~(1 << keyId)) | (pressed ? 1 << keyId : 0);
            return false;
        },
        isMousePressed: function (keyCode) {
            if (Agtk.controllers.getKeyValue(0, keyCode) != 0) {
                return true;
            }
            return false;
        },
        isMouseJustPressed: function (keyCode) {
            var pressed = this.isMousePressed(keyCode);
            if (!(this.mousePressedKey & (1 << keyCode)) && pressed) {
                this.mousePressedKey = (this.mousePressedKey & ~(1 << keyCode)) | (pressed ? 1 << keyCode : 0);
                return true;
            }
            this.mousePressedKey = (this.mousePressedKey & ~(1 << keyCode)) | (pressed ? 1 << keyCode : 0);
            return false;
        },
        setChildrenOpacity: function (node, alpha) {
            var children = node.children;
            for (var i = 0; i < children.length; i++) {
                children[i].opacity = alpha;
            }
        }
    });
}
exports.createChoicesLayerClass = createChoicesLayerClass;


/***/ }),

/***/ "./src/choices-layer/font-draw/create-font-draw.function.ts":
/*!******************************************************************!*\
  !*** ./src/choices-layer/font-draw/create-font-draw.function.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createFontDraw = void 0;
var tag_name_enum_1 = __webpack_require__(/*! ./tag-name.enum */ "./src/choices-layer/font-draw/tag-name.enum.ts");
function createFontDraw(layer, zIndex, fontData, letterSpacing) {
    var letterLayer = new cc.Layer();
    letterLayer.setAnchorPoint(0, 0);
    layer.addChild(letterLayer, zIndex);
    var letterY = 0;
    var currentColor = [255, 255, 255];
    var currentLineMaxHeight = -1;
    var letterX = 0;
    var aliasThreshold;
    var fixedWidth;
    var fontImageTex;
    var fontSize;
    var hankakuWidth;
    var layoutLineList;
    var letterWidth;
    var letterHeight;
    var ttfFilename;
    var zenkakuWidth;
    var imageFontFlag = fontData.imageFontFlag;
    if (imageFontFlag) {
        var fontImageData = Agtk.images.get(fontData.imageId);
        if (fontImageData === null) {
            return;
        }
        fontImageTex = cc.textureCache.addImage(fontImageData.filename);
        if (fontImageTex === null) {
            return;
        }
        fontImageTex.setAliasTexParameters();
        fixedWidth = fontData.fixedWidth;
        hankakuWidth = fontData.hankakuWidth;
        zenkakuWidth = fontData.zenkakuWidth;
        layoutLineList = fontData.letterLayout.split('\n');
        var layoutLines = layoutLineList.length;
        var maxLetters = 0;
        for (var i = 0; i < layoutLines; i++) {
            maxLetters = Math.max(maxLetters, layoutLineList[i].length);
        }
        letterWidth = Math.floor(fontImageTex.width / maxLetters);
        letterHeight = Math.floor(fontImageTex.height / layoutLines);
    }
    else {
        fontSize = fontData.fontSize;
        letterHeight = fontSize;
        ttfFilename = "fonts/".concat(fontData.fontName, ".ttf");
        aliasThreshold = fontData.antialiasDisabled ? fontData.aliasThreshold : -1;
    }
    var winHeight = letterHeight;
    var currentSize = letterHeight;
    function applyTagData(data) {
        switch (data.tagName) {
            case tag_name_enum_1.TagName.Size:
                currentSize = data.param;
                break;
            case tag_name_enum_1.TagName.Color:
                currentColor = data.param;
                break;
            default:
                break;
        }
        return data.head;
    }
    function getInt(numStr, defValue) {
        var n = parseInt(numStr, 10);
        return isNaN(n) ? defValue : n;
    }
    function parseTag(message, head, size) {
        //ret: {head: <next head position>, tagName: <'S', 'C', or null>, param: <if 'S' then <size: int>. if 'C' then [<R: int>, <G: int>, <B: int>]. > }
        var tag = message.substr(head, 3);
        if (tag == '\\S[') {
            var index = message.indexOf(']', head + 3);
            if (index >= 0) {
                var word = message.substr(head + 3, index - (head + 3));
                if (word.length == 0) {
                    size = letterHeight;
                }
                else if (word[0] == '+') {
                    size = Math.max(0, size + getInt(word.substr(1), 0));
                }
                else if (word[0] == '-') {
                    size = Math.max(0, size - getInt(word.substr(1), 0));
                }
                else {
                    size = Math.max(0, getInt(word, letterHeight));
                }
                head = index + 1;
                return { head: head, tagName: tag_name_enum_1.TagName.Size, param: size };
            }
        }
        else if (tag == '\\C[') {
            var index = message.indexOf(']', head + 3);
            if (index >= 0) {
                var word = message.substr(head + 3, index - (head + 3));
                var rgb = void 0;
                if (word.length == 0) {
                    rgb = [255, 255, 255];
                }
                else if (word[0] == '#') {
                    if (word.length == 3 + 1) {
                        var v = parseInt(word.substr(1), 16);
                        rgb = [((v >> 8) & 0x0f) * 0x11, ((v >> 4) & 0x0f) * 0x11, ((v >> 0) & 0x0f) * 0x11];
                    }
                    else if (word.length == 6 + 1) {
                        var v = parseInt(word.substr(1), 16);
                        rgb = [(v >> 16) & 0xff, (v >> 8) & 0xff, (v >> 0) & 0xff];
                    }
                    else {
                        rgb = [255, 255, 255];
                    }
                }
                else {
                    var list = word.split(',');
                    if (list.length < 3) {
                        rgb = [255, 255, 255];
                    }
                    else {
                        rgb = [
                            Math.max(0, Math.min(255, getInt(list[0], 255))),
                            Math.max(0, Math.min(255, getInt(list[1], 255))),
                            Math.max(0, Math.min(255, getInt(list[2], 255)))
                        ];
                    }
                }
                head = index + 1;
                return { head: head, tagName: tag_name_enum_1.TagName.Color, param: rgb };
            }
        }
        return { head: head };
    }
    function putLetter(letter) {
        if (imageFontFlag) {
            var isHankaku = !letter.match(/[^\x01-\x7E]/) || !letter.match(/[^\uFF65-\uFF9F]/);
            var cx = -1;
            var cy = -1;
            for (var i = 0; i < layoutLineList.length; i++) {
                var index = layoutLineList[i].indexOf(letter);
                if (index >= 0) {
                    cx = index;
                    cy = i;
                    break;
                }
            }
            if (cx >= 0 && cy >= 0) {
                var sprite = cc.Sprite.create(fontImageTex, cc.rect(cx * letterWidth, cy * letterHeight, letterWidth, letterHeight));
                sprite.setAnchorPoint(0, 0);
                sprite.x = letterX;
                sprite.y = winHeight - letterHeight * 2 - (currentSize - letterHeight) - letterY;
                sprite.width = (letterWidth * currentSize) / letterHeight;
                sprite.height = (letterHeight * currentSize) / letterHeight;
                sprite.color = cc.color(currentColor[0], currentColor[1], currentColor[2]);
                letterLayer.addChild(sprite);
                letterX +=
                    ((fixedWidth ? letterWidth : isHankaku ? hankakuWidth : zenkakuWidth) * currentSize) / letterHeight +
                        letterSpacing;
            }
        }
        else {
            var label = new cc.LabelTTF(letter, ttfFilename, (fontSize * currentSize) / letterHeight, undefined, undefined, undefined, aliasThreshold);
            label.color = cc.color(currentColor[0], currentColor[1], currentColor[2]);
            label.setAnchorPoint(0, 0);
            label.x = letterX;
            //label.y = this.winHeight - this.fontSize * 2 - this.letterY;
            label.y = winHeight - letterHeight * 2 - (currentSize - letterHeight) - letterY - currentSize / 8;
            letterLayer.addChild(label);
            letterX += label.width + letterSpacing;
        }
        if (currentSize > currentLineMaxHeight) {
            currentLineMaxHeight = currentSize;
        }
    }
    var self = {};
    self.clearLetters = function () {
        letterLayer.removeAllChildren();
    };
    self.drawLetters = function (text, textWidth, textHeight) {
        for (var j = 0; j < text.length; j++) {
            if (text[j] == '\n') {
                break;
            }
            if (text.substr(j, 2) == '\\\\') {
                j += 2 - 1;
                putLetter('\\');
                continue;
            }
            var data = parseTag(text, j, currentSize);
            if (data.tagName != null) {
                j = applyTagData(data) - 1;
                continue;
            }
            putLetter(text[j]);
        }
        if (currentLineMaxHeight < 0) {
            currentLineMaxHeight = currentSize;
        }
        letterLayer.x = 0;
        letterLayer.y = -textHeight;
        if (letterX > textWidth) {
            textWidth = letterX;
        }
        textHeight += currentLineMaxHeight + 8;
        return [textWidth, textHeight];
    };
    self.getCurrentLineMaxHeight = function () {
        return currentLineMaxHeight;
    };
    return self;
}
exports.createFontDraw = createFontDraw;


/***/ }),

/***/ "./src/choices-layer/font-draw/index.ts":
/*!**********************************************!*\
  !*** ./src/choices-layer/font-draw/index.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-font-draw.function */ "./src/choices-layer/font-draw/create-font-draw.function.ts"), exports);


/***/ }),

/***/ "./src/choices-layer/font-draw/tag-name.enum.ts":
/*!******************************************************!*\
  !*** ./src/choices-layer/font-draw/tag-name.enum.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TagName = void 0;
var TagName;
(function (TagName) {
    TagName["Color"] = "C";
    TagName["Size"] = "S";
})(TagName = exports.TagName || (exports.TagName = {}));


/***/ }),

/***/ "./src/choices-layer/index.ts":
/*!************************************!*\
  !*** ./src/choices-layer/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./choices-layer.interface */ "./src/choices-layer/choices-layer.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./choices-layer-background.enum */ "./src/choices-layer/choices-layer-background.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./choices-layer-data-service.interface */ "./src/choices-layer/choices-layer-data-service.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./choices-layer-position.enum */ "./src/choices-layer/choices-layer-position.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-choices-layer-class.function */ "./src/choices-layer/create-choices-layer-class.function.ts"), exports);


/***/ }),

/***/ "./src/create-plugin.ts":
/*!******************************!*\
  !*** ./src/create-plugin.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createPlugin = void 0;
var pgmmv_plugin_support_1 = __webpack_require__(/*! @agogpixel/pgmmv-plugin-support */ "./node_modules/@agogpixel/pgmmv-plugin-support/src/index.js");
var api_1 = __webpack_require__(/*! @agogpixel/pgmmv-ts/api */ "./node_modules/@agogpixel/pgmmv-ts/api/index.js");
var action_commands_1 = __webpack_require__(/*! ./action-commands */ "./src/action-commands/index.ts");
var choices_layer_1 = __webpack_require__(/*! ./choices-layer */ "./src/choices-layer/index.ts");
var link_conditions_1 = __webpack_require__(/*! ./link-conditions */ "./src/link-conditions/index.ts");
var locale_1 = __importDefault(__webpack_require__(/*! ./locale */ "./src/locale/index.ts"));
var parameters_1 = __webpack_require__(/*! ./parameters */ "./src/parameters/index.ts");
////////////////////////////////////////////////////////////////////////////////
// Private Static Properties
////////////////////////////////////////////////////////////////////////////////
var actionCommandIndexMap = (_a = {},
    _a[action_commands_1.ActionCommandId.ShowChoices] = 0,
    _a);
var linkConditionIndexMap = (_b = {},
    _b[link_conditions_1.LinkConditionId.ChoiceSelected] = 0,
    _b);
var ChoicesLayer;
/**
 *
 * @returns
 */
function createPlugin() {
    //////////////////////////////////////////////////////////////////////////////
    // Private Properties
    //////////////////////////////////////////////////////////////////////////////
    var choicesLayer;
    var layerTag;
    var paramValue = [];
    var selectedInfo = {};
    var showing = false;
    //////////////////////////////////////////////////////////////////////////////
    // Private Methods
    //////////////////////////////////////////////////////////////////////////////
    function completeValueJson(actionCommandIndex, valueJson) {
        var vj = self.getInfo(api_1.AgtkPluginInfoCategory.ActionCommand)[actionCommandIndex];
        var parameter = vj.parameter;
        if (!!parameter) {
            for (var i = 0; i < parameter.length; i++) {
                var id = parameter[i].id;
                var found = false;
                for (var j = 0; j < valueJson.length; j++) {
                    if (valueJson[j].id == id) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    valueJson.push({ id: id, value: parameter[i].defaultValue });
                }
            }
        }
        return valueJson;
    }
    function createChoices(valueJson, objectId, instanceId) {
        var agtkLayer = Agtk.sceneInstances.getCurrent().getMenuLayerById(Agtk.constants.systemLayers.HudLayerId);
        if (!agtkLayer) {
            // Bail out on creating & displaying the choices.
            // Continue action command processing on the object instance.
            return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
        }
        // Create & display the choices.
        var service = createChoicesLayerDataService(valueJson);
        choicesLayer = new ChoicesLayer(service, objectId, instanceId);
        agtkLayer.addChild(choicesLayer, 0, layerTag);
        // Update plugin state.
        showing = true;
        setSelectedInfo(choicesLayer.objectId, choicesLayer.instanceId, -2, choicesLayer.service.getVariableId());
        // Block further action command processing on the object instance until
        // a choice is made.
        return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorBlock;
    }
    function createChoicesLayerDataService(valueJson) {
        var winSize = cc.director.getWinSize();
        return {
            destroyChoices: destroyChoices,
            getBgImageId: function () {
                return getValue(paramValue, parameters_1.ParameterId.Image);
            },
            getBgType: function () {
                return getValue(valueJson, action_commands_1.ShowChoicesParameterId.Background);
            },
            getFontId: function () {
                return getValue(valueJson, action_commands_1.ShowChoicesParameterId.Font);
            },
            getLocale: function () {
                return internalApi.localization.getLocale();
            },
            getNumChoices: function () {
                return action_commands_1.ShowChoicesParameterId.Choice6;
            },
            getPosition: function () {
                return getValue(valueJson, action_commands_1.ShowChoicesParameterId.Position);
            },
            getScreenHeight: function () {
                return winSize.height;
            },
            getScreenWidth: function () {
                return winSize.width;
            },
            getTextId: function (choiceIndex) {
                return getValue(valueJson, choiceIndex);
            },
            getVariableId: function () {
                return getValue(valueJson, action_commands_1.ShowChoicesParameterId.Variable);
            },
            isCancellable: function () {
                return getValue(valueJson, action_commands_1.ShowChoicesParameterId.Cancel) === action_commands_1.ShowChoicesCancelParameterId.Enabled;
            },
            isShowing: function () {
                return showing;
            },
            setSelectedInfo: setSelectedInfo
        };
    }
    function destroyChoices(removeFromParent) {
        if (removeFromParent === void 0) { removeFromParent = true; }
        if (choicesLayer) {
            if (removeFromParent) {
                choicesLayer.removeFromParent();
            }
            choicesLayer = undefined;
        }
        showing = false;
    }
    function execShowChoices(actionCommandIndex, parameter, objectId, instanceId) {
        if (showing) {
            if (choicesLayer.objectId !== objectId || choicesLayer.instanceId !== instanceId) {
                // Show Choices is requested by another instance.
                // Cancel the current choices.
                var result = choicesLayer.service.isCancellable() ? -1 : choicesLayer.currentIndex;
                setSelectedInfo(choicesLayer.objectId, choicesLayer.instanceId, result, choicesLayer.service.getVariableId());
                destroyChoices(true);
            }
        }
        if (showing) {
            return choicesLayer.update();
        }
        var valueJson = completeValueJson(actionCommandIndex, parameter);
        return createChoices(valueJson, objectId, instanceId);
    }
    function getValue(valueJson, id) {
        for (var i = 0; i < valueJson.length; i++) {
            if (valueJson[i].id === id) {
                return valueJson[i].value;
            }
        }
        return null;
    }
    function setSelectedInfo(objectId, instanceId, index, variableId) {
        selectedInfo["".concat(objectId, "-").concat(instanceId)] = index;
        if (variableId >= 0) {
            var instance = Agtk.objectInstances.get(instanceId);
            if (instance !== null) {
                var variable = instance.variables.get(variableId);
                if (variable !== null) {
                    // Store selected choice with 1-based indexing.
                    variable.setValue(index + 1);
                }
            }
        }
    }
    //////////////////////////////////////////////////////////////////////////////
    // Protected API
    //////////////////////////////////////////////////////////////////////////////
    /**
     * Contains methods and properties from the base plugin that are meant for
     * internal use in our plugin.
     *
     * @protected
     */
    var internalApi = {};
    //////////////////////////////////////////////////////////////////////////////
    // Public API
    //////////////////////////////////////////////////////////////////////////////
    /**
     * Create our plugin instance - we provide our plugin localizations,
     * UI parameters, action commands, link conditions, and our internal
     * API object.
     */
    var self = (0, pgmmv_plugin_support_1.createPlugin)({ localizations: locale_1.default, parameters: parameters_1.parameters, actionCommands: action_commands_1.actionCommands, linkConditions: link_conditions_1.linkConditions }, internalApi);
    var _initialize = self.initialize;
    self.initialize = function (data) {
        _initialize(data);
        if (internalApi.inEditor()) {
            return;
        }
        layerTag = self.id << 16;
        ChoicesLayer = (0, choices_layer_1.createChoicesLayerClass)();
    };
    self.setParamValue = function (param) {
        paramValue = param;
    };
    self.execActionCommand = function (actionCommandIndex, parameter, objectId, instanceId) {
        switch (actionCommandIndex) {
            case actionCommandIndexMap[action_commands_1.ActionCommandId.ShowChoices]:
                return execShowChoices(actionCommandIndex, parameter, objectId, instanceId);
            default:
                break;
        }
    };
    self.execLinkCondition = function (linkConditionIndex, parameter, objectId, instanceId) {
        var info = -2;
        var key = "".concat(objectId, "-").concat(instanceId);
        if (key in selectedInfo) {
            info = selectedInfo[key];
        }
        var vj = self.getInfo(api_1.AgtkPluginInfoCategory.LinkCondition)[linkConditionIndex];
        var target = vj.parameter[0].defaultValue;
        if (parameter.length > 0) {
            target = parameter[linkConditionIndexMap[link_conditions_1.LinkConditionId.ChoiceSelected]].value;
        }
        if (target >= link_conditions_1.ChoiceSelectedConditionParameterId.Choice1 && target <= link_conditions_1.ChoiceSelectedConditionParameterId.Choice6) {
            // info is 0-based indexing, target is 1-based indexing.
            if (info === target - 1) {
                return true;
            }
            return false;
        }
        else if (target === link_conditions_1.ChoiceSelectedConditionParameterId.Cancel) {
            if (info === -1) {
                return true;
            }
            return false;
        }
        return false;
    };
    return self;
}
exports.createPlugin = createPlugin;


/***/ }),

/***/ "./src/link-conditions/choice-selected/choice-selected-condition-parameter-id.enum.ts":
/*!********************************************************************************************!*\
  !*** ./src/link-conditions/choice-selected/choice-selected-condition-parameter-id.enum.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChoiceSelectedConditionParameterId = void 0;
var ChoiceSelectedConditionParameterId;
(function (ChoiceSelectedConditionParameterId) {
    ChoiceSelectedConditionParameterId[ChoiceSelectedConditionParameterId["Choice1"] = 1] = "Choice1";
    ChoiceSelectedConditionParameterId[ChoiceSelectedConditionParameterId["Choice2"] = 2] = "Choice2";
    ChoiceSelectedConditionParameterId[ChoiceSelectedConditionParameterId["Choice3"] = 3] = "Choice3";
    ChoiceSelectedConditionParameterId[ChoiceSelectedConditionParameterId["Choice4"] = 4] = "Choice4";
    ChoiceSelectedConditionParameterId[ChoiceSelectedConditionParameterId["Choice5"] = 5] = "Choice5";
    ChoiceSelectedConditionParameterId[ChoiceSelectedConditionParameterId["Choice6"] = 6] = "Choice6";
    ChoiceSelectedConditionParameterId[ChoiceSelectedConditionParameterId["Cancel"] = 7] = "Cancel";
})(ChoiceSelectedConditionParameterId = exports.ChoiceSelectedConditionParameterId || (exports.ChoiceSelectedConditionParameterId = {}));


/***/ }),

/***/ "./src/link-conditions/choice-selected/choice-selected-parameter-id.enum.ts":
/*!**********************************************************************************!*\
  !*** ./src/link-conditions/choice-selected/choice-selected-parameter-id.enum.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChoiceSelectedParamaterId = void 0;
var ChoiceSelectedParamaterId;
(function (ChoiceSelectedParamaterId) {
    ChoiceSelectedParamaterId[ChoiceSelectedParamaterId["Condition"] = 1] = "Condition";
})(ChoiceSelectedParamaterId = exports.ChoiceSelectedParamaterId || (exports.ChoiceSelectedParamaterId = {}));


/***/ }),

/***/ "./src/link-conditions/choice-selected/index.ts":
/*!******************************************************!*\
  !*** ./src/link-conditions/choice-selected/index.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./choice-selected-condition-parameter-id.enum */ "./src/link-conditions/choice-selected/choice-selected-condition-parameter-id.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./choice-selected-parameter-id.enum */ "./src/link-conditions/choice-selected/choice-selected-parameter-id.enum.ts"), exports);


/***/ }),

/***/ "./src/link-conditions/index.ts":
/*!**************************************!*\
  !*** ./src/link-conditions/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./choice-selected */ "./src/link-conditions/choice-selected/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./link-condition-id.enum */ "./src/link-conditions/link-condition-id.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./link-conditions.config */ "./src/link-conditions/link-conditions.config.ts"), exports);


/***/ }),

/***/ "./src/link-conditions/link-condition-id.enum.ts":
/*!*******************************************************!*\
  !*** ./src/link-conditions/link-condition-id.enum.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinkConditionId = void 0;
var LinkConditionId;
(function (LinkConditionId) {
    LinkConditionId[LinkConditionId["ChoiceSelected"] = 1] = "ChoiceSelected";
})(LinkConditionId = exports.LinkConditionId || (exports.LinkConditionId = {}));


/***/ }),

/***/ "./src/link-conditions/link-conditions.config.ts":
/*!*******************************************************!*\
  !*** ./src/link-conditions/link-conditions.config.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.linkConditions = void 0;
var api_1 = __webpack_require__(/*! @agogpixel/pgmmv-ts/api */ "./node_modules/@agogpixel/pgmmv-ts/api/index.js");
var choice_selected_1 = __webpack_require__(/*! ./choice-selected */ "./src/link-conditions/choice-selected/index.ts");
var link_condition_id_enum_1 = __webpack_require__(/*! ./link-condition-id.enum */ "./src/link-conditions/link-condition-id.enum.ts");
exports.linkConditions = [
    {
        id: link_condition_id_enum_1.LinkConditionId.ChoiceSelected,
        name: 'loca(LINK_CONDITION_0_NAME)',
        description: 'loca(LINK_CONDITION_0_DESCRIPTION)',
        parameter: [
            {
                id: choice_selected_1.ChoiceSelectedParamaterId.Condition,
                name: 'loca(LINK_CONDITION_0_PARAMETER_0_NAME)',
                type: api_1.AgtkPluginUiParameterType.CustomId,
                customParam: [
                    { id: choice_selected_1.ChoiceSelectedConditionParameterId.Choice1, name: 'loca(LINK_CONDITION_0_PARAMETER_0_PARAM_0_NAME)' },
                    { id: choice_selected_1.ChoiceSelectedConditionParameterId.Choice2, name: 'loca(LINK_CONDITION_0_PARAMETER_0_PARAM_1_NAME)' },
                    { id: choice_selected_1.ChoiceSelectedConditionParameterId.Choice3, name: 'loca(LINK_CONDITION_0_PARAMETER_0_PARAM_2_NAME)' },
                    { id: choice_selected_1.ChoiceSelectedConditionParameterId.Choice4, name: 'loca(LINK_CONDITION_0_PARAMETER_0_PARAM_3_NAME)' },
                    { id: choice_selected_1.ChoiceSelectedConditionParameterId.Choice5, name: 'loca(LINK_CONDITION_0_PARAMETER_0_PARAM_4_NAME)' },
                    { id: choice_selected_1.ChoiceSelectedConditionParameterId.Choice6, name: 'loca(LINK_CONDITION_0_PARAMETER_0_PARAM_5_NAME)' },
                    { id: choice_selected_1.ChoiceSelectedConditionParameterId.Cancel, name: 'loca(LINK_CONDITION_0_PARAMETER_0_PARAM_6_NAME)' }
                ],
                defaultValue: choice_selected_1.ChoiceSelectedConditionParameterId.Choice1
            }
        ]
    }
];


/***/ }),

/***/ "./src/locale/en/index.ts":
/*!********************************!*\
  !*** ./src/locale/en/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var data_json_1 = __importDefault(__webpack_require__(/*! ./data.json */ "./src/locale/en/data.json"));
data_json_1.default.PLUGIN_HELP = __webpack_require__(/*! ./help.md */ "./src/locale/en/help.md");
exports["default"] = {
    locale: 'en',
    data: data_json_1.default
};


/***/ }),

/***/ "./src/locale/index.ts":
/*!*****************************!*\
  !*** ./src/locale/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var en_1 = __importDefault(__webpack_require__(/*! ./en */ "./src/locale/en/index.ts"));
var ja_1 = __importDefault(__webpack_require__(/*! ./ja */ "./src/locale/ja/index.ts"));
exports["default"] = [en_1.default, ja_1.default];


/***/ }),

/***/ "./src/locale/ja/index.ts":
/*!********************************!*\
  !*** ./src/locale/ja/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var data_json_1 = __importDefault(__webpack_require__(/*! ./data.json */ "./src/locale/ja/data.json"));
data_json_1.default.PLUGIN_HELP = __webpack_require__(/*! ./help.md */ "./src/locale/ja/help.md");
exports["default"] = {
    locale: 'ja',
    data: data_json_1.default
};


/***/ }),

/***/ "./src/parameters/index.ts":
/*!*********************************!*\
  !*** ./src/parameters/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./parameter-id.enum */ "./src/parameters/parameter-id.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./parameters.config */ "./src/parameters/parameters.config.ts"), exports);


/***/ }),

/***/ "./src/parameters/parameter-id.enum.ts":
/*!*********************************************!*\
  !*** ./src/parameters/parameter-id.enum.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParameterId = void 0;
var ParameterId;
(function (ParameterId) {
    ParameterId[ParameterId["Image"] = 1] = "Image";
})(ParameterId = exports.ParameterId || (exports.ParameterId = {}));


/***/ }),

/***/ "./src/parameters/parameters.config.ts":
/*!*********************************************!*\
  !*** ./src/parameters/parameters.config.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parameters = void 0;
var api_1 = __webpack_require__(/*! @agogpixel/pgmmv-ts/api */ "./node_modules/@agogpixel/pgmmv-ts/api/index.js");
var parameter_id_enum_1 = __webpack_require__(/*! ./parameter-id.enum */ "./src/parameters/parameter-id.enum.ts");
exports.parameters = [
    { id: parameter_id_enum_1.ParameterId.Image, name: 'loca(PARAMETER_0_NAME)', type: api_1.AgtkPluginUiParameterType.ImageId, defaultValue: -1 }
];


/***/ }),

/***/ "./src/locale/en/help.md":
/*!*******************************!*\
  !*** ./src/locale/en/help.md ***!
  \*******************************/
/***/ (function(module) {

module.exports = "# Show Choices\n\nThis plugin shows choies on the screen.\n";

/***/ }),

/***/ "./src/locale/ja/help.md":
/*!*******************************!*\
  !*** ./src/locale/ja/help.md ***!
  \*******************************/
/***/ (function(module) {

module.exports = "# 選択肢の表示\n\n簡易的な選択肢の表示を行います。\n";

/***/ }),

/***/ "./src/locale/en/data.json":
/*!*********************************!*\
  !*** ./src/locale/en/data.json ***!
  \*********************************/
/***/ (function(module) {

module.exports = JSON.parse('{"PLUGIN_NAME":"Show Choices","PLUGIN_DESCRIPTION":"Show choices on the screen","PLUGIN_AUTHOR":"Keiji Agusa; extended by kidthales <kidthales@agogpixel.com>","PLUGIN_HELP":"This plugin shows choies on the screen.","PARAMETER_0_NAME":"Image","ACTION_COMMAND_0_NAME":"Show Choices","ACTION_COMMAND_0_DESCRIPTION":"Show choices on the screen.","ACTION_COMMAND_0_PARAMETER_0_NAME":"Choice1:","ACTION_COMMAND_0_PARAMETER_1_NAME":"Choice2:","ACTION_COMMAND_0_PARAMETER_2_NAME":"Choice3:","ACTION_COMMAND_0_PARAMETER_3_NAME":"Choice4:","ACTION_COMMAND_0_PARAMETER_4_NAME":"Choice5:","ACTION_COMMAND_0_PARAMETER_5_NAME":"Choice6:","ACTION_COMMAND_0_PARAMETER_6_NAME":"Font:","ACTION_COMMAND_0_PARAMETER_7_NAME":"Background:","ACTION_COMMAND_0_PARAMETER_7_PARAM_0_NAME":"White Frame","ACTION_COMMAND_0_PARAMETER_7_PARAM_1_NAME":"Black","ACTION_COMMAND_0_PARAMETER_7_PARAM_2_NAME":"None","ACTION_COMMAND_0_PARAMETER_8_NAME":"Position:","ACTION_COMMAND_0_PARAMETER_8_PARAM_0_NAME":"Left","ACTION_COMMAND_0_PARAMETER_8_PARAM_1_NAME":"Center","ACTION_COMMAND_0_PARAMETER_8_PARAM_2_NAME":"Right","ACTION_COMMAND_0_PARAMETER_9_NAME":"Variable:","ACTION_COMMAND_0_PARAMETER_10_NAME":"Cancel:","ACTION_COMMAND_0_PARAMETER_10_PARAM_0_NAME":"Enabled","ACTION_COMMAND_0_PARAMETER_10_PARAM_1_NAME":"Disabled","LINK_CONDITION_0_NAME":"Choice Selected","LINK_CONDITION_0_DESCRIPTION":"You can judge the choice you chose in the last action.\\nYou can also judge when the choice is canceled.","LINK_CONDITION_0_PARAMETER_0_NAME":"Condition:","LINK_CONDITION_0_PARAMETER_0_PARAM_0_NAME":"Choice1","LINK_CONDITION_0_PARAMETER_0_PARAM_1_NAME":"Choice2","LINK_CONDITION_0_PARAMETER_0_PARAM_2_NAME":"Choice3","LINK_CONDITION_0_PARAMETER_0_PARAM_3_NAME":"Choice4","LINK_CONDITION_0_PARAMETER_0_PARAM_4_NAME":"Choice5","LINK_CONDITION_0_PARAMETER_0_PARAM_5_NAME":"Choice6","LINK_CONDITION_0_PARAMETER_0_PARAM_6_NAME":"Cancel"}');

/***/ }),

/***/ "./src/locale/ja/data.json":
/*!*********************************!*\
  !*** ./src/locale/ja/data.json ***!
  \*********************************/
/***/ (function(module) {

module.exports = JSON.parse('{"PLUGIN_NAME":"選択肢の表示","PLUGIN_DESCRIPTION":"画面に選択肢を表示します。","PLUGIN_AUTHOR":"Keiji Agusa; extended by kidthales <kidthales@agogpixel.com>","PLUGIN_HELP":"簡易的な選択肢の表示を行います。","PARAMETER_0_NAME":"画像素材","ACTION_COMMAND_0_NAME":"選択肢の表示","ACTION_COMMAND_0_DESCRIPTION":"選択肢をを表示します。","ACTION_COMMAND_0_PARAMETER_0_NAME":"選択肢1:","ACTION_COMMAND_0_PARAMETER_1_NAME":"選択肢2:","ACTION_COMMAND_0_PARAMETER_2_NAME":"選択肢3:","ACTION_COMMAND_0_PARAMETER_3_NAME":"選択肢4:","ACTION_COMMAND_0_PARAMETER_4_NAME":"選択肢5:","ACTION_COMMAND_0_PARAMETER_5_NAME":"選択肢6:","ACTION_COMMAND_0_PARAMETER_6_NAME":"フォント:","ACTION_COMMAND_0_PARAMETER_7_NAME":"背景:","ACTION_COMMAND_0_PARAMETER_7_PARAM_0_NAME":"白枠","ACTION_COMMAND_0_PARAMETER_7_PARAM_1_NAME":"黒","ACTION_COMMAND_0_PARAMETER_7_PARAM_2_NAME":"無し","ACTION_COMMAND_0_PARAMETER_8_NAME":"表示位置:","ACTION_COMMAND_0_PARAMETER_8_PARAM_0_NAME":"左側","ACTION_COMMAND_0_PARAMETER_8_PARAM_1_NAME":"真ん中","ACTION_COMMAND_0_PARAMETER_8_PARAM_2_NAME":"右側","ACTION_COMMAND_0_PARAMETER_9_NAME":"選択結果を代入する変数:","ACTION_COMMAND_0_PARAMETER_10_NAME":"キャンセル:","ACTION_COMMAND_0_PARAMETER_10_PARAM_0_NAME":"許可","ACTION_COMMAND_0_PARAMETER_10_PARAM_1_NAME":"不可","LINK_CONDITION_0_NAME":"選択肢で判定","LINK_CONDITION_0_DESCRIPTION":"直前のアクションで選ばれた選択肢を判定できます。\\n選択肢がキャンセルされた場合も判定できます。","LINK_CONDITION_0_PARAMETER_0_NAME":"判定条件:","LINK_CONDITION_0_PARAMETER_0_PARAM_0_NAME":"選択肢1","LINK_CONDITION_0_PARAMETER_0_PARAM_1_NAME":"選択肢2","LINK_CONDITION_0_PARAMETER_0_PARAM_2_NAME":"選択肢3","LINK_CONDITION_0_PARAMETER_0_PARAM_3_NAME":"選択肢4","LINK_CONDITION_0_PARAMETER_0_PARAM_4_NAME":"選択肢5","LINK_CONDITION_0_PARAMETER_0_PARAM_5_NAME":"選択肢6","LINK_CONDITION_0_PARAMETER_0_PARAM_6_NAME":"選択肢をキャンセル"}');

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
/* IIFEReturnPlugin */ return function() {
var exports = __webpack_exports__;
/*!****************************!*\
  !*** ./src/pgmmv-entry.ts ***!
  \****************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var create_plugin_1 = __webpack_require__(/*! ./create-plugin */ "./src/create-plugin.ts");
var plugin = (0, create_plugin_1.createPlugin)();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
return plugin;

}();
/******/ })()
;