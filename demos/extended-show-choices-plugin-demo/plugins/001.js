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
 *  - Published Builds & Usage: https://agogpixel.itch.io/pgmmv-extended-show-choices-plugin
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@agogpixel/pgmmv-plugin-support/src/create-plugin.function.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-plugin-support/src/create-plugin.function.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createPlugin = void 0;
var plugin_info_category_1 = __webpack_require__(/*! @agogpixel/pgmmv-ts/api/agtk/plugin/plugin-info-category */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-info-category.js");
var localization_1 = __webpack_require__(/*! ./localization */ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/index.js");
////////////////////////////////////////////////////////////////////////////////
// Public Static Properties
////////////////////////////////////////////////////////////////////////////////
// None.
////////////////////////////////////////////////////////////////////////////////
// Private Static Properties
////////////////////////////////////////////////////////////////////////////////
// None.
////////////////////////////////////////////////////////////////////////////////
// Public Static Methods
////////////////////////////////////////////////////////////////////////////////
/**
 * Create an object instance that provides a base implementation for PGMMV
 * plugins.
 *
 * @typeParam I Plugin's internal data type (default: `JsonValue`).
 * @typeParam P Plugin's public API type (default: `AgtkPlugin`).
 * @param config Plugin configuration.
 * @param internal Provide an object to 'inherit' a reference to the plugin's
 * internal {@link PluginProtectedApi} implementation.
 * @returns An object instance that provides a base implementation for a PGMMV
 * plugin.
 * @public
 * @static
 */
function createPlugin(config, internal) {
    // Public API container.
    var self = {};
    // Protected API container.
    var internalApi = internal || {};
    //////////////////////////////////////////////////////////////////////////////
    // Private Properties
    //////////////////////////////////////////////////////////////////////////////
    /**
     * Plugin UI parameter configurations.
     *
     * @private
     */
    var parametersConfig = config.parameters || [];
    /**
     * Plugin action command configurations.
     *
     * @private
     */
    var actionCommandsConfig = config.actionCommands || [];
    /**
     * Plugin auto tiles configurations.
     *
     * @private
     */
    var autoTilesConfig = config.autoTiles || undefined;
    /**
     * Plugin link condition configurations.
     *
     * @private
     */
    var linkConditionsConfig = config.linkConditions || [];
    /**
     * Localized plugin UI parameters.
     *
     * @private
     */
    var localizedParameters;
    /**
     * Localized plugin actions commands.
     *
     * @private
     */
    var localizedActionCommands;
    /**
     * Localized plugin link conditions.
     *
     * @private
     */
    var localizedLinkConditions;
    //////////////////////////////////////////////////////////////////////////////
    // Private Methods
    //////////////////////////////////////////////////////////////////////////////
    // None.
    //////////////////////////////////////////////////////////////////////////////
    // Protected Properties
    //////////////////////////////////////////////////////////////////////////////
    internalApi.internalData = {};
    internalApi.localization = (0, localization_1.createPluginLocalizationManager)({ localizations: config.localizations });
    //////////////////////////////////////////////////////////////////////////////
    // Protected Methods
    //////////////////////////////////////////////////////////////////////////////
    internalApi.getInfoParameter = function () {
        if (!localizedParameters) {
            localizedParameters = internalApi.localization.processParameterLocale(parametersConfig);
        }
        return localizedParameters;
    };
    internalApi.getInfoInternal = function () {
        return JSON.parse(JSON.stringify(internalApi.internalData));
    };
    internalApi.getInfoActionCommand = function () {
        if (!localizedActionCommands) {
            localizedActionCommands = internalApi.localization.processActionCommandLocale(actionCommandsConfig);
        }
        return localizedActionCommands;
    };
    internalApi.getInfoLinkCondition = function () {
        if (!localizedLinkConditions) {
            localizedLinkConditions = internalApi.localization.processLinkConditionLocale(linkConditionsConfig);
        }
        return localizedLinkConditions;
    };
    internalApi.getInfoAutoTile = function () {
        return autoTilesConfig;
    };
    internalApi.inEditor = function () {
        return !Agtk || typeof Agtk.log !== 'function';
    };
    internalApi.inPlayer = function () {
        return !!Agtk && typeof Agtk.version === 'string' && /^player .+$/.test(Agtk.version);
    };
    internalApi.normalizeActionCommandParameters = function (actionCommandIndex, paramValue) {
        var vj = self.getInfo(plugin_info_category_1.AgtkPluginInfoCategory.ActionCommand)[actionCommandIndex];
        return normalizeParameters(paramValue, vj.parameter);
    };
    internalApi.normalizeLinkConditionParameters = function (linkConditionIndex, paramValue) {
        var vj = self.getInfo(plugin_info_category_1.AgtkPluginInfoCategory.LinkCondition)[linkConditionIndex];
        return normalizeParameters(paramValue, vj.parameter);
    };
    internalApi.normalizeUiParameters = function (paramValue) {
        return normalizeParameters(paramValue, self.getInfo(plugin_info_category_1.AgtkPluginInfoCategory.Parameter));
    };
    //////////////////////////////////////////////////////////////////////////////
    // Public Properties
    //////////////////////////////////////////////////////////////////////////////
    // None.
    //////////////////////////////////////////////////////////////////////////////
    // Public Methods
    //////////////////////////////////////////////////////////////////////////////
    self.setLocale = function (arg1) {
        internalApi.localization.setLocale(arg1);
    };
    self.getInfo = function (category) {
        var info;
        switch (category) {
            case plugin_info_category_1.AgtkPluginInfoCategory.Name:
                info = internalApi.localization.get(localization_1.PluginLocalizationRequiredKey.Name);
                break;
            case plugin_info_category_1.AgtkPluginInfoCategory.Description:
                info = internalApi.localization.get(localization_1.PluginLocalizationRequiredKey.Description);
                break;
            case plugin_info_category_1.AgtkPluginInfoCategory.Author:
                info = internalApi.localization.get(localization_1.PluginLocalizationRequiredKey.Author);
                break;
            case plugin_info_category_1.AgtkPluginInfoCategory.Help:
                info = internalApi.localization.get(localization_1.PluginLocalizationRequiredKey.Help);
                break;
            case plugin_info_category_1.AgtkPluginInfoCategory.Parameter:
                info = internalApi.getInfoParameter();
                break;
            case plugin_info_category_1.AgtkPluginInfoCategory.Internal:
                info = internalApi.getInfoInternal();
                break;
            case plugin_info_category_1.AgtkPluginInfoCategory.ActionCommand:
                info = internalApi.getInfoActionCommand();
                break;
            case plugin_info_category_1.AgtkPluginInfoCategory.LinkCondition:
                info = internalApi.getInfoLinkCondition();
                break;
            case plugin_info_category_1.AgtkPluginInfoCategory.AutoTile:
                info = internalApi.getInfoAutoTile();
                break;
        }
        return info;
    };
    self.initialize = function (data) {
        if (data) {
            self.setInternal(data);
        }
    };
    self.finalize = function () {
        return;
    };
    self.setParamValue = function () {
        return;
    };
    self.setInternal = function (data) {
        internalApi.internalData = JSON.parse(JSON.stringify(data)) || internalApi.internalData;
    };
    self.call = function call() {
        return;
    };
    // Plugin is ready!
    return self;
}
exports.createPlugin = createPlugin;
////////////////////////////////////////////////////////////////////////////////
// Private Static Methods
////////////////////////////////////////////////////////////////////////////////
/**
 * Normalize plugin UI paramters.
 *
 * @param paramValue Plugin UI parameter values.
 * @param defaults Default plugin UI parameters.
 * @returns Normalized plugin UI parameters.
 * @private
 * @static
 */
function normalizeParameters(paramValue, defaults) {
    var normalized = {};
    for (var i = 0; i < defaults.length; i++) {
        var p = defaults[i];
        normalized[p.id] = p.defaultValue;
    }
    for (var i = 0; i < paramValue.length; ++i) {
        var p = paramValue[i];
        normalized[p.id] = p.value;
    }
    return normalized;
}
//# sourceMappingURL=create-plugin.function.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/create-plugin-localization-manager.function.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/create-plugin-localization-manager.function.js ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createPluginLocalizationManager = void 0;
/**
 * Exports plugin localization manager factory.
 *
 * @module localization/create-plugin-localization-manager.function
 */
var plugin_ui_parameter_type_1 = __webpack_require__(/*! @agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-parameter-type */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-parameter-type.js");
////////////////////////////////////////////////////////////////////////////////
// Public Static Properties
////////////////////////////////////////////////////////////////////////////////
// None.
////////////////////////////////////////////////////////////////////////////////
// Private Static Properties
////////////////////////////////////////////////////////////////////////////////
// None.
////////////////////////////////////////////////////////////////////////////////
// Public Static Methods
////////////////////////////////////////////////////////////////////////////////
/**
 * Create an object instance that provides an implementation for a plugin
 * localization manager.
 *
 * @param config Plugin localization manager configuration.
 * @returns An object instance that provides an implementation for a plugin
 * localization manager.
 * @public
 * @static
 */
function createPluginLocalizationManager(config) {
    // Public API container.
    var self = {};
    //////////////////////////////////////////////////////////////////////////////
    // Private Properties
    //////////////////////////////////////////////////////////////////////////////
    /**
     * Localization configurations.
     *
     * @private
     */
    var localizations = config.localizations && config.localizations.length > 0
        ? config.localizations
        : [{ locale: 'en', data: {} }];
    /**
     * Localization fallback data.
     *
     * @private
     */
    var fallbackData = localizations[0].data;
    /**
     * Current locale.
     *
     * @private
     */
    var currentLocale = localizations[0].locale;
    /**
     * Maps locale prefix to localization data.
     *
     * @private
     */
    var localeMap = {};
    // Load locale map.
    for (var i = 0; i < localizations.length; ++i) {
        localeMap[localizations[i].locale] = localizations[i].data;
    }
    /**
     * Inline locale regex for text replacement.
     *
     * @private
     */
    var inlineRegex = /^loca\((.+)\)$/;
    //////////////////////////////////////////////////////////////////////////////
    // Private Methods
    //////////////////////////////////////////////////////////////////////////////
    // None.
    //////////////////////////////////////////////////////////////////////////////
    // Protected Properties
    //////////////////////////////////////////////////////////////////////////////
    // None.
    //////////////////////////////////////////////////////////////////////////////
    // Protected Methods
    //////////////////////////////////////////////////////////////////////////////
    // None.
    //////////////////////////////////////////////////////////////////////////////
    // Public Properties
    //////////////////////////////////////////////////////////////////////////////
    // None.
    //////////////////////////////////////////////////////////////////////////////
    // Public Methods
    //////////////////////////////////////////////////////////////////////////////
    self.get = function (key) {
        var loca = currentLocale.substring(0, 2);
        if (localeMap[loca] && typeof localeMap[loca][key] === 'string') {
            return localeMap[loca][key];
        }
        if (typeof fallbackData[key] === 'string') {
            return fallbackData[key];
        }
        return "LOCA MISSING: ".concat(key);
    };
    self.getLocale = function () {
        return currentLocale;
    };
    self.setLocale = function (locale) {
        if (!localeMap[locale.substring(0, 2)]) {
            return false;
        }
        currentLocale = locale;
        return true;
    };
    self.processParameterLocale = function (parameters) {
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
    self.processActionCommandLocale = function (actionCommands) {
        for (var i = 0; i < actionCommands.length; ++i) {
            var executeCommand = actionCommands[i];
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
        return actionCommands;
    };
    self.processLinkConditionLocale = function (linkConditions) {
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
////////////////////////////////////////////////////////////////////////////////
// Private Static Methods
////////////////////////////////////////////////////////////////////////////////
// None.
//# sourceMappingURL=create-plugin-localization-manager.function.js.map

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
/**
 * Exports PGMMV plugin support localization APIs and implementations.
 *
 * @module localization
 */
__exportStar(__webpack_require__(/*! ./create-plugin-localization-manager.function */ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/create-plugin-localization-manager.function.js"), exports);
__exportStar(__webpack_require__(/*! ./plugin-localization-data.type */ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/plugin-localization-data.type.js"), exports);
__exportStar(__webpack_require__(/*! ./plugin-localization-manager-config.interface */ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/plugin-localization-manager-config.interface.js"), exports);
__exportStar(__webpack_require__(/*! ./plugin-localization-manager.interface */ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/plugin-localization-manager.interface.js"), exports);
__exportStar(__webpack_require__(/*! ./plugin-localization-required-key.enum */ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/plugin-localization-required-key.enum.js"), exports);
__exportStar(__webpack_require__(/*! ./plugin-localization.interface */ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/plugin-localization.interface.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/plugin-localization-data.type.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/plugin-localization-data.type.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Exports plugin localization data type.
 *
 * @module localization/plugin-localization-data.type
 */
var plugin_localization_required_key_enum_1 = __webpack_require__(/*! ./plugin-localization-required-key.enum */ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/plugin-localization-required-key.enum.js");
//# sourceMappingURL=plugin-localization-data.type.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/plugin-localization-manager-config.interface.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/plugin-localization-manager-config.interface.js ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=plugin-localization-manager-config.interface.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/plugin-localization-manager.interface.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/plugin-localization-manager.interface.js ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=plugin-localization-manager.interface.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/plugin-localization-required-key.enum.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/plugin-localization-required-key.enum.js ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * Exports plugin localization required key enumeration.
 *
 * @module localization/plugin-localization-required-key.enum
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PluginLocalizationRequiredKey = void 0;
/**
 * Plugin localization required key enumerations.
 */
var PluginLocalizationRequiredKey;
(function (PluginLocalizationRequiredKey) {
    /**
     * Plugin name.
     */
    PluginLocalizationRequiredKey["Name"] = "PLUGIN_NAME";
    /**
     * Plugin description.
     */
    PluginLocalizationRequiredKey["Description"] = "PLUGIN_DESCRIPTION";
    /**
     * Plugin author.
     */
    PluginLocalizationRequiredKey["Author"] = "PLUGIN_AUTHOR";
    /**
     * Plugin help.
     */
    PluginLocalizationRequiredKey["Help"] = "PLUGIN_HELP";
})(PluginLocalizationRequiredKey = exports.PluginLocalizationRequiredKey || (exports.PluginLocalizationRequiredKey = {}));
//# sourceMappingURL=plugin-localization-required-key.enum.js.map

/***/ }),

/***/ "./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/plugin-localization.interface.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@agogpixel/pgmmv-plugin-support/src/localization/plugin-localization.interface.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=plugin-localization.interface.js.map

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

/***/ "./src/action-commands/action-command-id.enum.ts":
/*!*******************************************************!*\
  !*** ./src/action-commands/action-command-id.enum.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * Exports action command ID enumerations.
 *
 * @module action-commands/action-command-id.enum
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionCommandId = void 0;
/**
 * Action command ID enumeration.
 */
var ActionCommandId;
(function (ActionCommandId) {
    /**
     * 'Show Choices' action command ID.
     */
    ActionCommandId[ActionCommandId["ShowChoices"] = 1] = "ShowChoices";
})(ActionCommandId = exports.ActionCommandId || (exports.ActionCommandId = {}));


/***/ }),

/***/ "./src/action-commands/action-command-index-map.const.ts":
/*!***************************************************************!*\
  !*** ./src/action-commands/action-command-index-map.const.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.actionCommandIndexMap = void 0;
var action_commands_config_1 = __webpack_require__(/*! ./action-commands.config */ "./src/action-commands/action-commands.config.ts");
/**
 * Map an action command ID to its corresponding index within the
 * {@link AgtkPluginActionCommand} parameter data provided by this plugin.
 *
 * Populated at runtime.
 */
exports.actionCommandIndexMap = {};
for (var i = 0; i < action_commands_config_1.actionCommands.length; ++i) {
    exports.actionCommandIndexMap[action_commands_config_1.actionCommands[i].id] = i;
}


/***/ }),

/***/ "./src/action-commands/action-commands.config.ts":
/*!*******************************************************!*\
  !*** ./src/action-commands/action-commands.config.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.actionCommands = void 0;
var action_command_id_enum_1 = __webpack_require__(/*! ./action-command-id.enum */ "./src/action-commands/action-command-id.enum.ts");
var show_choices_1 = __webpack_require__(/*! ./show-choices */ "./src/action-commands/show-choices/index.ts");
/**
 * Action command configurations.
 */
exports.actionCommands = [
    {
        id: action_command_id_enum_1.ActionCommandId.ShowChoices,
        name: 'loca(ACTION_COMMAND_SHOW_CHOICES_NAME)',
        description: 'loca(ACTION_COMMAND_SHOW_CHOICES_DESCRIPTION)',
        parameter: (0, show_choices_1.createShowChoicesParametersConfig)(show_choices_1.maxChoices, show_choices_1.choiceIdBase, show_choices_1.embeddedChoiceIdBase)
    }
];


/***/ }),

/***/ "./src/action-commands/exec-action-command.function.ts":
/*!*************************************************************!*\
  !*** ./src/action-commands/exec-action-command.function.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.execActionCommand = void 0;
var action_command_id_enum_1 = __webpack_require__(/*! ./action-command-id.enum */ "./src/action-commands/action-command-id.enum.ts");
var action_command_index_map_const_1 = __webpack_require__(/*! ./action-command-index-map.const */ "./src/action-commands/action-command-index-map.const.ts");
var show_choices_1 = __webpack_require__(/*! ./show-choices */ "./src/action-commands/show-choices/index.ts");
/**
 * Executes action command.
 *
 * @param internalApi The plugin's internal API.
 * @param actionCommandIndex The index of a given action command.
 * @param parameter Action command data that is set in & provided by the PGMMV
 * editor or runtime & subsequently normalized.
 * @param objectId The object ID of the object instance through which the
 * action command is executing.
 * @param instanceId The instance ID of the object instance through which the
 * action command is executing.
 * @returns Action command behavior signal.
 */
function execActionCommand(internalApi, actionCommandIndex, parameter, objectId, instanceId) {
    switch (actionCommandIndex) {
        case action_command_index_map_const_1.actionCommandIndexMap[action_command_id_enum_1.ActionCommandId.ShowChoices]:
            return (0, show_choices_1.execShowChoicesActionCommand)(internalApi, parameter, objectId, instanceId);
        default:
            break;
    }
    return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
}
exports.execActionCommand = execActionCommand;


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
/**
 * Exports action command configurations & functions.
 *
 * @module action-commands
 */
__exportStar(__webpack_require__(/*! ./action-command-id.enum */ "./src/action-commands/action-command-id.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./action-command-index-map.const */ "./src/action-commands/action-command-index-map.const.ts"), exports);
__exportStar(__webpack_require__(/*! ./action-commands.config */ "./src/action-commands/action-commands.config.ts"), exports);
__exportStar(__webpack_require__(/*! ./exec-action-command.function */ "./src/action-commands/exec-action-command.function.ts"), exports);


/***/ }),

/***/ "./src/action-commands/show-choices/display/choices-layer/choices-layer-class.type.ts":
/*!********************************************************************************************!*\
  !*** ./src/action-commands/show-choices/display/choices-layer/choices-layer-class.type.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/action-commands/show-choices/display/choices-layer/choices-layer-mode.enum.ts":
/*!*******************************************************************************************!*\
  !*** ./src/action-commands/show-choices/display/choices-layer/choices-layer-mode.enum.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * Exports {@link ChoicesLayer} mode enumerations.
 *
 * @module action-commands/show-choices/display/choices-layer/choices-layer-mode.enum
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChoicesLayerMode = void 0;
/**
 * {@link ChoicesLayer} mode enumeration.
 */
var ChoicesLayerMode;
(function (ChoicesLayerMode) {
    /**
     * Choices layer is opening.
     */
    ChoicesLayerMode[ChoicesLayerMode["Opening"] = 0] = "Opening";
    /**
     * Choices layer is open & awaiting input.
     */
    ChoicesLayerMode[ChoicesLayerMode["WaitingForKey"] = 1] = "WaitingForKey";
    /**
     * Selection has been made, choices layer is closing.
     */
    ChoicesLayerMode[ChoicesLayerMode["Closing"] = 2] = "Closing";
    /**
     * Choices layer has completed closing or is otherwise not displaying.
     */
    ChoicesLayerMode[ChoicesLayerMode["End"] = 3] = "End";
})(ChoicesLayerMode = exports.ChoicesLayerMode || (exports.ChoicesLayerMode = {}));


/***/ }),

/***/ "./src/action-commands/show-choices/display/choices-layer/choices-layer.interface.ts":
/*!*******************************************************************************************!*\
  !*** ./src/action-commands/show-choices/display/choices-layer/choices-layer.interface.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/action-commands/show-choices/display/choices-layer/create-choices-layer-class.function.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/action-commands/show-choices/display/choices-layer/create-choices-layer-class.function.ts ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createChoicesLayerClass = void 0;
var show_choices_background_display_type_enum_1 = __webpack_require__(/*! ../../show-choices-background-display-type.enum */ "./src/action-commands/show-choices/show-choices-background-display-type.enum.ts");
var show_choices_horizontal_position_enum_1 = __webpack_require__(/*! ../../show-choices-horizontal-position.enum */ "./src/action-commands/show-choices/show-choices-horizontal-position.enum.ts");
var show_choices_vertical_position_enum_1 = __webpack_require__(/*! ../../show-choices-vertical-position.enum */ "./src/action-commands/show-choices/show-choices-vertical-position.enum.ts");
var choices_layer_mode_enum_1 = __webpack_require__(/*! ./choices-layer-mode.enum */ "./src/action-commands/show-choices/display/choices-layer/choices-layer-mode.enum.ts");
function createChoicesLayerClass() {
    return cc.Layer.extend({
        ctor: function (inputService, showChoicesService) {
            this._super();
            this.inputService = inputService;
            this.showChoicesService = showChoicesService;
            createLayers.call(this);
            this.choiceHeightList = [];
            var textDimensions = cc.size(0, 0);
            renderChoicesText.call(this, textDimensions);
            this.windowDimensions = cc.size(textDimensions.width + 16, textDimensions.height + 16);
            if (showChoicesService.getBackgroundDisplayType() !== show_choices_background_display_type_enum_1.ShowChoicesBackgroundDisplayType.None) {
                createWindow.call(this, 0, 0, this.windowDimensions.width, this.windowDimensions.height);
                setChildrenOpacity(this.layers.background, 0);
            }
            this.currentIndex = 0;
            this.mode = choices_layer_mode_enum_1.ChoicesLayerMode.Opening;
            this.modeCounter = 0;
            setPosition.call(this);
            return true;
        },
        update: function () {
            var inputService = this.inputService;
            var showChoicesService = this.showChoicesService;
            /*if (!this.service.isShowing()) {
              return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
            }*/
            if (this.mode === choices_layer_mode_enum_1.ChoicesLayerMode.Opening) {
                this.layers.background.removeAllChildren();
                var winHeight = (this.modeCounter + 1) * 16;
                if (winHeight >= this.windowDimensions.height) {
                    winHeight = this.windowDimensions.height;
                }
                var winY = (this.windowDimensions.height - winHeight) / 2;
                createWindow.call(this, 0, winY, this.windowDimensions.width, winHeight);
                if (winHeight >= this.windowDimensions.height) {
                    this.mode = choices_layer_mode_enum_1.ChoicesLayerMode.WaitingForKey;
                    this.modeCounter = 0;
                    this.layers.text.visible = true;
                    updateHighlightGraphics.call(this);
                }
                else {
                    this.modeCounter++;
                }
                return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorBlock;
            }
            if (this.mode === choices_layer_mode_enum_1.ChoicesLayerMode.WaitingForKey) {
                if (inputService.isKeyUpJustPressed()) {
                    if (this.currentIndex > 0) {
                        this.currentIndex--;
                        updateHighlightGraphics.call(this);
                    }
                }
                else if (inputService.isKeyDownJustPressed()) {
                    if (this.currentIndex < showChoicesService.getMaxChoices() - 1) {
                        this.currentIndex++;
                        updateHighlightGraphics.call(this);
                    }
                }
                else if (inputService.isKeyOkJustPressed()) {
                    this.mode = choices_layer_mode_enum_1.ChoicesLayerMode.Closing;
                    this.modeCounter = 0;
                    this.layers.text.visible = false;
                    this.layers.highlight.visible = false;
                }
                else if (inputService.isMouseLeftClickJustPressed()) {
                    var index = getClickedIndex.call(this);
                    if (index >= 0) {
                        if (index === this.currentIndex) {
                            this.mode = choices_layer_mode_enum_1.ChoicesLayerMode.Closing;
                            this.modeCounter = 0;
                            this.layers.text.visible = false;
                            this.layers.highlight.visible = false;
                        }
                        else {
                            this.currentIndex = index;
                            updateHighlightGraphics.call(this);
                        }
                    }
                }
                else if (inputService.isCancellable() &&
                    (inputService.isKeyCancelJustPressed() || inputService.isMouseRightClickJustPressed())) {
                    this.mode = choices_layer_mode_enum_1.ChoicesLayerMode.Closing;
                    this.modeCounter = 0;
                    this.currentIndex = showChoicesService.getCancelValue();
                    this.layers.text.visible = false;
                    this.layers.highlight.visible = false;
                }
            }
            if (this.mode === choices_layer_mode_enum_1.ChoicesLayerMode.Closing) {
                if (showChoicesService.getBackgroundDisplayType() === show_choices_background_display_type_enum_1.ShowChoicesBackgroundDisplayType.None) {
                    this.mode = choices_layer_mode_enum_1.ChoicesLayerMode.End;
                    this.modeCounter = 0;
                }
                else {
                    this.layers.background.removeAllChildren();
                    var winHeight = this.windowDimensions.height - (this.modeCounter + 1) * 16;
                    if (winHeight < 16) {
                        winHeight = 0;
                        this.mode = choices_layer_mode_enum_1.ChoicesLayerMode.End;
                        this.modeCounter = 0;
                    }
                    else {
                        var winY = (this.windowDimensions.height - winHeight) / 2;
                        createWindow.call(this, 0, winY, this.windowDimensions.width, winHeight);
                        this.modeCounter++;
                    }
                }
                if (this.mode != choices_layer_mode_enum_1.ChoicesLayerMode.End) {
                    return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorBlock;
                }
            }
            if (this.mode == choices_layer_mode_enum_1.ChoicesLayerMode.End) {
                showChoicesService.setChoice(this.currentIndex + 1);
                showChoicesService.destroyChoices(true);
                return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
            }
            return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorBlock;
        }
    });
}
exports.createChoicesLayerClass = createChoicesLayerClass;
////////////////////////////////////////////////////////////////////////////////
// Private Static Methods
////////////////////////////////////////////////////////////////////////////////
/**
 * Set the opacity of all children attached to specified Cocos node.
 *
 * @param node Cocos node with children we will iterate.
 * @param alpha Alpha value to apply to all children.
 * @private
 * @static
 */
function setChildrenOpacity(node, alpha) {
    var children = node.children;
    for (var i = 0; i < children.length; i++) {
        children[i].opacity = alpha;
    }
}
////////////////////////////////////////////////////////////////////////////////
// Private Methods
////////////////////////////////////////////////////////////////////////////////
/**
 * @private
 */
function createLayers() {
    var background = new cc.Layer();
    var highlight = new cc.Layer();
    highlight.x = 8;
    highlight.y = 8;
    var text = new cc.Layer();
    text.x = 8;
    text.y = 8;
    this.layers = {
        background: background,
        highlight: highlight,
        text: text
    };
    this.addChild(background);
    this.addChild(highlight);
    this.addChild(text);
}
/**
 * @param winX
 * @param winY
 * @param winWidth
 * @param winHeight
 * @private
 */
function createWindow(winX, winY, winWidth, winHeight) {
    var showChoicesService = this.showChoicesService;
    switch (showChoicesService.getBackgroundDisplayType()) {
        case show_choices_background_display_type_enum_1.ShowChoicesBackgroundDisplayType.Graphics:
            var bgGraphics = new cc.DrawNode();
            bgGraphics.drawRect(cc.p(winX, winY + winHeight - 8), cc.p(winX + winWidth - 8, winY), showChoicesService.getBackgroundColor() || null, 8, showChoicesService.getBackgroundBorderColor());
            this.layers.background.addChild(bgGraphics);
            break;
        case show_choices_background_display_type_enum_1.ShowChoicesBackgroundDisplayType.Image:
            // TODO: 9-slice support...
            var bgImage = new cc.Sprite(showChoicesService.getBackgroundImageTexture());
            bgImage.setAnchorPoint(0, 0);
            bgImage.x = winX;
            bgImage.y = winY + winHeight - 8;
            this.layers.background.addChild(bgImage);
            break;
        case show_choices_background_display_type_enum_1.ShowChoicesBackgroundDisplayType.None:
            break;
    }
}
/**
 * Resolves current mouse position to a choice index (0-based indexing) when
 * a click is detected.
 *
 * @returns Choice index clicked (0-based indexing) or -1 if no choice is
 * resolved.
 */
function getClickedIndex() {
    var screenSize = cc.director.getWinSize();
    var x = Agtk.variables.get(Agtk.variables.MouseXId).getValue();
    var y = screenSize.height - 1 - Agtk.variables.get(Agtk.variables.MouseYId).getValue();
    if (x < this.x + 4 || x >= this.x + this.windowDimensions.width - 4) {
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
}
/**
 * @param textDimensions
 * @private
 */
function renderChoicesText(textDimensions) {
    var showChoicesService = this.showChoicesService;
    var maxChoices = showChoicesService.getMaxChoices();
    for (var i = 0; i < maxChoices; ++i) {
        var choiceLines = showChoicesService.createTextSprites(i + 1);
        var choiceHeight = 0;
        for (var j = 0; j < choiceLines.length; ++j) {
            var letterLayer = new cc.Layer();
            letterLayer.setAnchorPoint(0, 0);
            this.layers.text.addChild(letterLayer, 1);
            var choiceLine = choiceLines[j];
            var choiceLineMaxHeight = 0;
            for (var k = 0; k < choiceLine.length; ++k) {
                var letterData = choiceLine[k];
                var endX = letterData.endX;
                var sprite = letterData.sprite;
                letterLayer.addChild(sprite);
                if (sprite.height > choiceLineMaxHeight) {
                    choiceLineMaxHeight = sprite.height;
                }
                if (endX > textDimensions.width) {
                    textDimensions.width = endX;
                }
            }
            letterLayer.x = 0;
            letterLayer.y = -textDimensions.height;
            textDimensions.height += choiceLineMaxHeight + 8;
            choiceHeight += choiceLineMaxHeight;
        }
        this.choiceHeightList.push(choiceHeight);
    }
    textDimensions.height -= 8;
    this.layers.text.x = 8;
    this.layers.text.y = textDimensions.height + 8;
    this.layers.text.visible = false;
}
/**
 * @private
 */
function setPosition() {
    var showChoicesService = this.showChoicesService;
    var screenSize = cc.director.getWinSize();
    switch (showChoicesService.getHorizontalPosition()) {
        case show_choices_horizontal_position_enum_1.ShowChoicesHorizontalPosition.Left:
            this.x = 0;
            break;
        case show_choices_horizontal_position_enum_1.ShowChoicesHorizontalPosition.Center:
            this.x = (screenSize.width - this.windowDimensions.width) / 2;
            break;
        case show_choices_horizontal_position_enum_1.ShowChoicesHorizontalPosition.Right:
            this.x = screenSize.width = this.windowDimensions.width;
            break;
        default:
            break;
    }
    switch (showChoicesService.getVerticalPosition()) {
        case show_choices_vertical_position_enum_1.ShowChoicesVerticalPosition.Top:
            this.y = screenSize.height;
            break;
        case show_choices_vertical_position_enum_1.ShowChoicesVerticalPosition.Center:
            this.y = (screenSize.height - this.windowDimensions.height) / 2;
            break;
        case show_choices_vertical_position_enum_1.ShowChoicesVerticalPosition.Bottom:
            this.y = this.windowDimensions.height;
            break;
        default:
            break;
    }
}
function updateHighlightGraphics() {
    if (this.highlightGraphics) {
        this.highlightGraphics.removeFromParent();
    }
    var y = 0;
    for (var i = this.choiceHeightList.length - 1; i > this.currentIndex; i--) {
        y += 8 + this.choiceHeightList[i];
    }
    this.highlightGraphics = new cc.DrawNode();
    this.highlightGraphics.drawRect(cc.p(-4, y - 4), cc.p(this.windowDimensions.width - 16 + 4, y + this.choiceHeightList[this.currentIndex] + 4), cc.color(0, 255, 255, 128), 0, cc.color(0, 0, 0, 0));
    this.layers.highlight.addChild(this.highlightGraphics);
    this.highlightGraphics.runAction(cc.sequence(cc.fadeIn(0.0), cc.repeat(cc.sequence(cc.fadeTo(0.5, 255), cc.fadeTo(0.5, 128)), Math.pow(2, 30))));
}


/***/ }),

/***/ "./src/action-commands/show-choices/display/choices-layer/index.ts":
/*!*************************************************************************!*\
  !*** ./src/action-commands/show-choices/display/choices-layer/index.ts ***!
  \*************************************************************************/
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
__exportStar(__webpack_require__(/*! ./choices-layer-class.type */ "./src/action-commands/show-choices/display/choices-layer/choices-layer-class.type.ts"), exports);
__exportStar(__webpack_require__(/*! ./choices-layer-mode.enum */ "./src/action-commands/show-choices/display/choices-layer/choices-layer-mode.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./choices-layer.interface */ "./src/action-commands/show-choices/display/choices-layer/choices-layer.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-choices-layer-class.function */ "./src/action-commands/show-choices/display/choices-layer/create-choices-layer-class.function.ts"), exports);


/***/ }),

/***/ "./src/action-commands/show-choices/display/index.ts":
/*!***********************************************************!*\
  !*** ./src/action-commands/show-choices/display/index.ts ***!
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
__exportStar(__webpack_require__(/*! ./choices-layer */ "./src/action-commands/show-choices/display/choices-layer/index.ts"), exports);


/***/ }),

/***/ "./src/action-commands/show-choices/exec-show-choices-action-command.function.ts":
/*!***************************************************************************************!*\
  !*** ./src/action-commands/show-choices/exec-show-choices-action-command.function.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.execShowChoicesActionCommand = void 0;
var parameter_id_enum_1 = __webpack_require__(/*! ../../parameters/parameter-id.enum */ "./src/parameters/parameter-id.enum.ts");
var create_input_service_function_1 = __webpack_require__(/*! ../../utils/input/create-input-service.function */ "./src/utils/input/create-input-service.function.ts");
var show_choices_background_display_type_parameter_id_enum_1 = __webpack_require__(/*! ./parameters/show-choices-background-display-type-parameter-id.enum */ "./src/action-commands/show-choices/parameters/show-choices-background-display-type-parameter-id.enum.ts");
var show_choices_cancel_parameter_id_enum_1 = __webpack_require__(/*! ./parameters/show-choices-cancel-parameter-id.enum */ "./src/action-commands/show-choices/parameters/show-choices-cancel-parameter-id.enum.ts");
var show_choices_horizontal_position_parameter_id_enum_1 = __webpack_require__(/*! ./parameters/show-choices-horizontal-position-parameter-id.enum */ "./src/action-commands/show-choices/parameters/show-choices-horizontal-position-parameter-id.enum.ts");
var show_choices_parameter_id_enum_1 = __webpack_require__(/*! ./parameters/show-choices-parameter-id.enum */ "./src/action-commands/show-choices/parameters/show-choices-parameter-id.enum.ts");
var show_choices_vertical_position_parameter_id_enum_1 = __webpack_require__(/*! ./parameters/show-choices-vertical-position-parameter-id.enum */ "./src/action-commands/show-choices/parameters/show-choices-vertical-position-parameter-id.enum.ts");
var create_show_choices_service_function_1 = __webpack_require__(/*! ./service/create-show-choices-service.function */ "./src/action-commands/show-choices/service/create-show-choices-service.function.ts");
var show_choices_const_1 = __webpack_require__(/*! ./show-choices.const */ "./src/action-commands/show-choices/show-choices.const.ts");
/**
 * Begin execution of the 'Show Choices' action command 'business' logic.
 *
 * @param internalApi The plugin's internal API.
 * @param parameter 'Show Choices' action command data that is set in &
 * provided by the PGMMV editor or runtime & subsequently normalized.
 * @param objectId The object ID of the object instance through which the
 * 'Show Choices' action command is executing.
 * @param instanceId The instance ID of the object instance through which the
 * 'Show Choices' action command is executing.
 * @returns Action command behavior signal. Usually, Block is returned when we
 * are waiting for a choice to be made (hence this method will be called again
 * on the next frame); Next is returned once a choice is made, or an error
 * occured.
 */
function execShowChoicesActionCommand(internalApi, parameter, objectId, instanceId) {
    if (internalApi.showing) {
        if (internalApi.showChoicesContext.objectId !== objectId ||
            internalApi.showChoicesContext.instanceId !== instanceId) {
            // Show Choices is requested by another instance.
            // Cancel the current choices.
            var result = internalApi.showChoicesContext.display.inputService.isCancellable()
                ? internalApi.showChoicesContext.display.showChoicesService.getCancelValue()
                : internalApi.showChoicesContext.display.currentIndex;
            internalApi.setSelectedInfo(internalApi.showChoicesContext.objectId, internalApi.showChoicesContext.instanceId, result, internalApi.showChoicesContext.variableId);
            internalApi.destroyChoices(true);
        }
    }
    if (internalApi.showing) {
        return internalApi.showChoicesContext.display.update();
    }
    return createChoices(internalApi, parameter, objectId, instanceId);
}
exports.execShowChoicesActionCommand = execShowChoicesActionCommand;
/**
 * Helper method for creating & showing choices for a given 'Show Choices'
 * action command.
 *
 * @param internalApi The plugin's internal API.
 * @param valueJson 'Show Choices' action command data that is set in &
 * provided by the PGMMV editor or runtime & subsequently normalized.
 * @param objectId The object ID of the object instance through which the
 * 'Show Choices' action command is executing.
 * @param instanceId The instance ID of the object instance through which the
 * 'Show Choices' action command is executing.
 * @returns Action command behavior signal. Normally, this will be a Block
 * signal but Next can be returned if there are errors encountered.
 * @private
 */
function createChoices(internalApi, valueJson, objectId, instanceId) {
    // We will show the choices on our implicit menu/ui/hud layer provided by PGMMV runtime.
    var agtkLayer = Agtk.sceneInstances.getCurrent().getMenuLayerById(Agtk.constants.systemLayers.HudLayerId);
    if (!agtkLayer) {
        // Bail out on creating & displaying the choices.
        // Continue action command processing on the object instance.
        return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
    }
    // Create & display the choices.
    var services = createServices(internalApi, valueJson);
    internalApi.showChoicesContext = {
        display: new internalApi.ChoicesLayer(services[0], services[1]),
        instanceId: instanceId,
        objectId: objectId,
        variableId: valueJson[show_choices_parameter_id_enum_1.ShowChoicesParameterId.Variable]
    };
    agtkLayer.addChild(internalApi.showChoicesContext.display, 0, internalApi.layerTag);
    // Update plugin state.
    internalApi.showing = true;
    internalApi.setSelectedInfo(internalApi.showChoicesContext.objectId, internalApi.showChoicesContext.instanceId, internalApi.showChoicesContext.display.showChoicesService.getNoChoiceMadeValue(), internalApi.showChoicesContext.variableId);
    // Block further action command processing on the object instance until
    // a choice is made.
    return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorBlock;
}
function createServices(internalApi, valueJson) {
    var inputService = (0, create_input_service_function_1.createInputService)({
        isCancellable: parseCancelParameterValue(internalApi, valueJson)
    });
    var showChoicesService = (0, create_show_choices_service_function_1.createShowChoicesService)({
        backgroundBorderColor: parseBackgroundBorderColorParameterValue(internalApi, valueJson),
        backgroundColor: parseBackgroundColorParameterValue(internalApi, valueJson),
        backgroundDisplayType: parseBackgroundDisplayTypeParameterValue(internalApi, valueJson),
        backgroundImageId: parseBackgroundImageParameterValue(internalApi, valueJson),
        defaultChoice: 1,
        fontId: parseFontParameterValue(internalApi, valueJson),
        highlightColor: parseHighlightColorParameterValue(internalApi, valueJson),
        horizontalPosition: parseHorizontalPositionParameterValue(internalApi, valueJson),
        locale: internalApi.localization.getLocale(),
        maxChoices: show_choices_const_1.maxChoices,
        textIds: parseChoiceParameterValues(internalApi, valueJson),
        verticalPosition: parseVerticalPositionParameterValue(internalApi, valueJson)
    });
    showChoicesService.destroyChoices = function (removeFromParent) {
        internalApi.destroyChoices(removeFromParent);
    };
    showChoicesService.setChoice = function (choiceIndex) {
        internalApi.setSelectedInfo(internalApi.showChoicesContext.objectId, internalApi.showChoicesContext.instanceId, choiceIndex, internalApi.showChoicesContext.variableId);
    };
    return [inputService, showChoicesService];
}
function normalizeColorString(rawValue) {
    return rawValue
        .split(',')
        .map(function (c) {
        var n = parseInt(c.trim(), 10);
        return isNaN(n) ? undefined : cc.clampf(n, 0, 255);
    })
        .filter(function (c) { return c !== undefined; });
}
function parseBackgroundBorderColorParameterValue(internalApi, valueJson) {
    var rawValue = (valueJson[show_choices_parameter_id_enum_1.ShowChoicesParameterId.BackgroundBorderColor] || '').trim();
    var value = normalizeColorString(rawValue);
    if (value.length < 3 || value.length > 4) {
        rawValue = (internalApi.paramValue[parameter_id_enum_1.ParameterId.BackgroundBorderColor] || '').trim();
        value = normalizeColorString(rawValue);
    }
    if (value.length < 3 || value.length > 4) {
        return;
    }
    if (value.length === 3) {
        value.push(255);
    }
    return value;
}
function parseBackgroundColorParameterValue(internalApi, valueJson) {
    var rawValue = (valueJson[show_choices_parameter_id_enum_1.ShowChoicesParameterId.BackgroundColor] || '').trim();
    var value = normalizeColorString(rawValue);
    if (value.length < 3 || value.length > 4) {
        rawValue = (internalApi.paramValue[parameter_id_enum_1.ParameterId.BackgroundColor] || '').trim();
        value = normalizeColorString(rawValue);
    }
    if (value.length < 3 || value.length > 4) {
        return;
    }
    if (value.length === 3) {
        value.push(128);
    }
    return value;
}
function parseBackgroundDisplayTypeParameterValue(internalApi, valueJson) {
    var value = valueJson[show_choices_parameter_id_enum_1.ShowChoicesParameterId.BackgroundDisplayType];
    if (value === show_choices_background_display_type_parameter_id_enum_1.ShowChoicesBackgroundDisplayTypeParameterId.Default) {
        value = internalApi.paramValue[parameter_id_enum_1.ParameterId.BackgroundDisplayType];
    }
    return value;
}
function parseBackgroundImageParameterValue(internalApi, valueJson) {
    var value = valueJson[show_choices_parameter_id_enum_1.ShowChoicesParameterId.BackgroundImage];
    if (value < 0) {
        value = internalApi.paramValue[parameter_id_enum_1.ParameterId.BackgroundImage];
    }
    return value < 0 ? undefined : value;
}
function parseCancelParameterValue(internalApi, valueJson) {
    var value = valueJson[show_choices_parameter_id_enum_1.ShowChoicesParameterId.Cancel];
    if (value === show_choices_cancel_parameter_id_enum_1.ShowChoicesCancelParameterId.Default) {
        value = internalApi.paramValue[parameter_id_enum_1.ParameterId.Cancel];
    }
    return value === show_choices_cancel_parameter_id_enum_1.ShowChoicesCancelParameterId.Enabled;
}
function parseChoiceParameterValues(internalApi, valueJson) {
    var values = [];
    for (var i = 0; i < show_choices_const_1.maxChoices; i += 2) {
        values.push(valueJson[show_choices_const_1.choiceIdBase + i + 1]);
    }
    return values;
}
function parseFontParameterValue(internalApi, valueJson) {
    var value = valueJson[show_choices_parameter_id_enum_1.ShowChoicesParameterId.Font];
    if (value < 0) {
        value = internalApi.paramValue[parameter_id_enum_1.ParameterId.Font];
    }
    return value;
}
function parseHighlightColorParameterValue(internalApi, valueJson) {
    var rawValue = (valueJson[show_choices_parameter_id_enum_1.ShowChoicesParameterId.HighlightColor] || '').trim();
    var value = normalizeColorString(rawValue);
    if (value.length < 3 || value.length > 4) {
        rawValue = (internalApi.paramValue[parameter_id_enum_1.ParameterId.HighlightColor] || '').trim();
        value = normalizeColorString(rawValue);
    }
    if (value.length < 3 || value.length > 4) {
        return;
    }
    if (value.length === 3) {
        value.push(128);
    }
    return value;
}
function parseHorizontalPositionParameterValue(internalApi, valueJson) {
    var value = valueJson[show_choices_parameter_id_enum_1.ShowChoicesParameterId.HorizontalPosition];
    if (value === show_choices_horizontal_position_parameter_id_enum_1.ShowChoicesHorizontalPositionParameterId.Default) {
        value = internalApi.paramValue[parameter_id_enum_1.ParameterId.HorizontalPosition];
    }
    return value;
}
function parseVerticalPositionParameterValue(internalApi, valueJson) {
    var value = valueJson[show_choices_parameter_id_enum_1.ShowChoicesParameterId.VerticalPosition];
    if (value === show_choices_vertical_position_parameter_id_enum_1.ShowChoicesVerticalPositionParameterId.Default) {
        value = internalApi.paramValue[parameter_id_enum_1.ParameterId.VerticalPosition];
    }
    return value;
}


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
exports.createChoicesLayerClass = void 0;
/**
 * Exports 'Show Choices' action command configurations & functions.
 *
 * @module action-commands/show-choices
 */
var display_1 = __webpack_require__(/*! ./display */ "./src/action-commands/show-choices/display/index.ts");
Object.defineProperty(exports, "createChoicesLayerClass", ({ enumerable: true, get: function () { return display_1.createChoicesLayerClass; } }));
__exportStar(__webpack_require__(/*! ./exec-show-choices-action-command.function */ "./src/action-commands/show-choices/exec-show-choices-action-command.function.ts"), exports);
__exportStar(__webpack_require__(/*! ./parameters */ "./src/action-commands/show-choices/parameters/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./show-choices-context.interface */ "./src/action-commands/show-choices/show-choices-context.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./show-choices.const */ "./src/action-commands/show-choices/show-choices.const.ts"), exports);


/***/ }),

/***/ "./src/action-commands/show-choices/parameters/create-show-choices-parameters-config.function.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/action-commands/show-choices/parameters/create-show-choices-parameters-config.function.ts ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createShowChoicesParametersConfig = void 0;
/**
 * Exports 'Show Choices' plugin UI parameter configurations.
 *
 * @module action-commands/show-choices/parameters/create-show-choices-parameters-config.function
 */
var plugin_ui_parameter_type_1 = __webpack_require__(/*! @agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-parameter-type */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-parameter-type.js");
var show_choices_background_display_type_parameter_id_enum_1 = __webpack_require__(/*! ./show-choices-background-display-type-parameter-id.enum */ "./src/action-commands/show-choices/parameters/show-choices-background-display-type-parameter-id.enum.ts");
var show_choices_cancel_parameter_id_enum_1 = __webpack_require__(/*! ./show-choices-cancel-parameter-id.enum */ "./src/action-commands/show-choices/parameters/show-choices-cancel-parameter-id.enum.ts");
var show_choices_horizontal_position_parameter_id_enum_1 = __webpack_require__(/*! ./show-choices-horizontal-position-parameter-id.enum */ "./src/action-commands/show-choices/parameters/show-choices-horizontal-position-parameter-id.enum.ts");
var show_choices_parameter_id_enum_1 = __webpack_require__(/*! ./show-choices-parameter-id.enum */ "./src/action-commands/show-choices/parameters/show-choices-parameter-id.enum.ts");
var show_choices_vertical_position_parameter_id_enum_1 = __webpack_require__(/*! ./show-choices-vertical-position-parameter-id.enum */ "./src/action-commands/show-choices/parameters/show-choices-vertical-position-parameter-id.enum.ts");
function createShowChoicesParametersConfig(maxChoices, choiceIdBase, embeddedChoiceIdBase) {
    if (choiceIdBase === void 0) { choiceIdBase = 100; }
    if (embeddedChoiceIdBase === void 0) { embeddedChoiceIdBase = 1000; }
    var config = [
        {
            id: show_choices_parameter_id_enum_1.ShowChoicesParameterId.BackgroundDisplayType,
            name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_BACKGROUND_DISPLAY_TYPE_NAME)',
            type: plugin_ui_parameter_type_1.AgtkPluginUiParameterType.CustomId,
            defaultValue: show_choices_background_display_type_parameter_id_enum_1.ShowChoicesBackgroundDisplayTypeParameterId.Default,
            customParam: [
                {
                    id: show_choices_background_display_type_parameter_id_enum_1.ShowChoicesBackgroundDisplayTypeParameterId.Graphics,
                    name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_BACKGROUND_DISPLAY_TYPE_CUSTOM_PARAM_GRAPHICS_NAME)'
                },
                {
                    id: show_choices_background_display_type_parameter_id_enum_1.ShowChoicesBackgroundDisplayTypeParameterId.Image,
                    name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_BACKGROUND_DISPLAY_TYPE_CUSTOM_PARAM_IMAGE_NAME)'
                },
                {
                    id: show_choices_background_display_type_parameter_id_enum_1.ShowChoicesBackgroundDisplayTypeParameterId.None,
                    name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_BACKGROUND_DISPLAY_TYPE_CUSTOM_PARAM_NONE_NAME)'
                },
                {
                    id: show_choices_background_display_type_parameter_id_enum_1.ShowChoicesBackgroundDisplayTypeParameterId.Default,
                    name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_BACKGROUND_DISPLAY_TYPE_CUSTOM_PARAM_DEFAULT_NAME)'
                }
            ]
        },
        {
            id: show_choices_parameter_id_enum_1.ShowChoicesParameterId.BackgroundImage,
            name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_BACKGROUND_IMAGE_NAME)',
            type: plugin_ui_parameter_type_1.AgtkPluginUiParameterType.ImageId,
            defaultValue: -1
        },
        {
            id: show_choices_parameter_id_enum_1.ShowChoicesParameterId.BackgroundColor,
            name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_BACKGROUND_COLOR_NAME)',
            type: plugin_ui_parameter_type_1.AgtkPluginUiParameterType.String,
            defaultValue: ''
        },
        {
            id: show_choices_parameter_id_enum_1.ShowChoicesParameterId.BackgroundBorderColor,
            name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_BACKGROUND_BORDER_COLOR_NAME)',
            type: plugin_ui_parameter_type_1.AgtkPluginUiParameterType.String,
            defaultValue: ''
        },
        {
            id: show_choices_parameter_id_enum_1.ShowChoicesParameterId.HighlightColor,
            name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_HIGHLIGHT_COLOR_NAME)',
            type: plugin_ui_parameter_type_1.AgtkPluginUiParameterType.String,
            defaultValue: ''
        },
        {
            id: show_choices_parameter_id_enum_1.ShowChoicesParameterId.Font,
            name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_FONT_NAME)',
            type: plugin_ui_parameter_type_1.AgtkPluginUiParameterType.FontId,
            defaultValue: -1
        },
        {
            id: show_choices_parameter_id_enum_1.ShowChoicesParameterId.HorizontalPosition,
            name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_HORIZONTAL_POSITION_NAME)',
            type: plugin_ui_parameter_type_1.AgtkPluginUiParameterType.CustomId,
            defaultValue: show_choices_horizontal_position_parameter_id_enum_1.ShowChoicesHorizontalPositionParameterId.Default,
            customParam: [
                {
                    id: show_choices_horizontal_position_parameter_id_enum_1.ShowChoicesHorizontalPositionParameterId.Left,
                    name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_HORIZONTAL_POSITION_CUSTOM_PARAM_LEFT_NAME)'
                },
                {
                    id: show_choices_horizontal_position_parameter_id_enum_1.ShowChoicesHorizontalPositionParameterId.Center,
                    name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_HORIZONTAL_POSITION_CUSTOM_PARAM_CENTER_NAME)'
                },
                {
                    id: show_choices_horizontal_position_parameter_id_enum_1.ShowChoicesHorizontalPositionParameterId.Right,
                    name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_HORIZONTAL_POSITION_CUSTOM_PARAM_RIGHT_NAME)'
                },
                {
                    id: show_choices_horizontal_position_parameter_id_enum_1.ShowChoicesHorizontalPositionParameterId.Default,
                    name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_HORIZONTAL_POSITION_CUSTOM_PARAM_DEFAULT_NAME)'
                }
            ]
        },
        {
            id: show_choices_parameter_id_enum_1.ShowChoicesParameterId.VerticalPosition,
            name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_VERTICAL_POSITION_NAME)',
            type: plugin_ui_parameter_type_1.AgtkPluginUiParameterType.CustomId,
            defaultValue: show_choices_vertical_position_parameter_id_enum_1.ShowChoicesVerticalPositionParameterId.Default,
            customParam: [
                {
                    id: show_choices_vertical_position_parameter_id_enum_1.ShowChoicesVerticalPositionParameterId.Top,
                    name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_VERTICAL_POSITION_CUSTOM_PARAM_TOP_NAME)'
                },
                {
                    id: show_choices_vertical_position_parameter_id_enum_1.ShowChoicesVerticalPositionParameterId.Center,
                    name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_VERTICAL_POSITION_CUSTOM_PARAM_CENTER_NAME)'
                },
                {
                    id: show_choices_vertical_position_parameter_id_enum_1.ShowChoicesVerticalPositionParameterId.Bottom,
                    name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_VERTICAL_POSITION_CUSTOM_PARAM_BOTTOM_NAME)'
                },
                {
                    id: show_choices_vertical_position_parameter_id_enum_1.ShowChoicesVerticalPositionParameterId.Default,
                    name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_VERTICAL_POSITION_CUSTOM_PARAM_DEFAULT_NAME)'
                }
            ]
        },
        {
            id: show_choices_parameter_id_enum_1.ShowChoicesParameterId.Cancel,
            name: 'loca(PARAMETER_CANCEL_NAME)',
            type: plugin_ui_parameter_type_1.AgtkPluginUiParameterType.CustomId,
            defaultValue: show_choices_cancel_parameter_id_enum_1.ShowChoicesCancelParameterId.Default,
            customParam: [
                {
                    id: show_choices_cancel_parameter_id_enum_1.ShowChoicesCancelParameterId.Enabled,
                    name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_CANCEL_CUSTOM_PARAM_ENABLED_NAME)'
                },
                {
                    id: show_choices_cancel_parameter_id_enum_1.ShowChoicesCancelParameterId.Disabled,
                    name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_CANCEL_CUSTOM_PARAM_DISABLED_NAME)'
                },
                {
                    id: show_choices_cancel_parameter_id_enum_1.ShowChoicesCancelParameterId.Default,
                    name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_CANCEL_CUSTOM_PARAM_DEFAULT_NAME)'
                }
            ]
        },
        {
            id: show_choices_parameter_id_enum_1.ShowChoicesParameterId.Variable,
            name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_VARIABLE_NAME)',
            type: plugin_ui_parameter_type_1.AgtkPluginUiParameterType.VariableId,
            defaultValue: -1
        }
    ];
    for (var i = 1; i <= maxChoices; ++i) {
        var choiceId = choiceIdBase + i;
        var embeddedChoiceId = embeddedChoiceIdBase + i;
        config.push({
            id: choiceId,
            name: 'loca(ACTION_COMMAND_SHOW_CHOICES_PARAMETER_CHOICE_NAME)',
            type: plugin_ui_parameter_type_1.AgtkPluginUiParameterType.TextId,
            defaultValue: -1,
            withNewButton: true
        }, {
            id: embeddedChoiceId,
            name: '',
            type: plugin_ui_parameter_type_1.AgtkPluginUiParameterType.EmbeddedEditable,
            sourceId: choiceId,
            reference: 'text',
            width: 256,
            height: 48
        });
    }
    return config;
}
exports.createShowChoicesParametersConfig = createShowChoicesParametersConfig;


/***/ }),

/***/ "./src/action-commands/show-choices/parameters/index.ts":
/*!**************************************************************!*\
  !*** ./src/action-commands/show-choices/parameters/index.ts ***!
  \**************************************************************/
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
/**
 * Exports 'Show Choices' action command configurations.
 *
 * @module action-commands/show-choices/parameters
 */
__exportStar(__webpack_require__(/*! ./create-show-choices-parameters-config.function */ "./src/action-commands/show-choices/parameters/create-show-choices-parameters-config.function.ts"), exports);
__exportStar(__webpack_require__(/*! ./show-choices-background-display-type-parameter-id.enum */ "./src/action-commands/show-choices/parameters/show-choices-background-display-type-parameter-id.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./show-choices-cancel-parameter-id.enum */ "./src/action-commands/show-choices/parameters/show-choices-cancel-parameter-id.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./show-choices-horizontal-position-parameter-id.enum */ "./src/action-commands/show-choices/parameters/show-choices-horizontal-position-parameter-id.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./show-choices-parameter-id.enum */ "./src/action-commands/show-choices/parameters/show-choices-parameter-id.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./show-choices-vertical-position-parameter-id.enum */ "./src/action-commands/show-choices/parameters/show-choices-vertical-position-parameter-id.enum.ts"), exports);


/***/ }),

/***/ "./src/action-commands/show-choices/parameters/show-choices-background-display-type-parameter-id.enum.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/action-commands/show-choices/parameters/show-choices-background-display-type-parameter-id.enum.ts ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * Exports 'Show Choices' action command background display type parameter ID
 * enumeration.
 *
 * @module action-commands/show-choices/parameters/show-choices-background-display-type-paramerter-id.enum
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShowChoicesBackgroundDisplayTypeParameterId = void 0;
/**
 * 'Show Choices' action command background display type parameter ID
 * enumeration.
 */
var ShowChoicesBackgroundDisplayTypeParameterId;
(function (ShowChoicesBackgroundDisplayTypeParameterId) {
    /**
     * Display using ccDrawLayer.
     */
    ShowChoicesBackgroundDisplayTypeParameterId[ShowChoicesBackgroundDisplayTypeParameterId["Graphics"] = 1] = "Graphics";
    /**
     * Display using image.
     */
    ShowChoicesBackgroundDisplayTypeParameterId[ShowChoicesBackgroundDisplayTypeParameterId["Image"] = 2] = "Image";
    /**
     * No background.
     */
    ShowChoicesBackgroundDisplayTypeParameterId[ShowChoicesBackgroundDisplayTypeParameterId["None"] = 3] = "None";
    /**
     * Fallback to plugin default.
     */
    ShowChoicesBackgroundDisplayTypeParameterId[ShowChoicesBackgroundDisplayTypeParameterId["Default"] = 4] = "Default";
})(ShowChoicesBackgroundDisplayTypeParameterId = exports.ShowChoicesBackgroundDisplayTypeParameterId || (exports.ShowChoicesBackgroundDisplayTypeParameterId = {}));


/***/ }),

/***/ "./src/action-commands/show-choices/parameters/show-choices-cancel-parameter-id.enum.ts":
/*!**********************************************************************************************!*\
  !*** ./src/action-commands/show-choices/parameters/show-choices-cancel-parameter-id.enum.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * Exports 'Show Choices' action command cancel parameter ID enumerations.
 *
 * @module action-commands/show-choices/parameters/show-choices-cancel-parameter-id.enum
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShowChoicesCancelParameterId = void 0;
/**
 * 'Show Choices' action command cancel parameter ID enumeration.
 */
var ShowChoicesCancelParameterId;
(function (ShowChoicesCancelParameterId) {
    /**
     * Cancel handling enabled.
     */
    ShowChoicesCancelParameterId[ShowChoicesCancelParameterId["Enabled"] = 1] = "Enabled";
    /**
     * User can't cancel the choices menu.
     */
    ShowChoicesCancelParameterId[ShowChoicesCancelParameterId["Disabled"] = 2] = "Disabled";
    /**
     * Fallback to plugin default.
     */
    ShowChoicesCancelParameterId[ShowChoicesCancelParameterId["Default"] = 3] = "Default";
})(ShowChoicesCancelParameterId = exports.ShowChoicesCancelParameterId || (exports.ShowChoicesCancelParameterId = {}));


/***/ }),

/***/ "./src/action-commands/show-choices/parameters/show-choices-horizontal-position-parameter-id.enum.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/action-commands/show-choices/parameters/show-choices-horizontal-position-parameter-id.enum.ts ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * Exports 'Show Choices' action command horizontal position parameter ID
 * enumeration.
 *
 * @module action-commands/show-choices/parameters/show-choices-horizontal-position-parameter-id.enum
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShowChoicesHorizontalPositionParameterId = void 0;
/**
 * 'Show Choices' action command horizontal position parameter ID enumeration.
 */
var ShowChoicesHorizontalPositionParameterId;
(function (ShowChoicesHorizontalPositionParameterId) {
    /**
     * Position on left side of screen.
     */
    ShowChoicesHorizontalPositionParameterId[ShowChoicesHorizontalPositionParameterId["Left"] = 1] = "Left";
    /**
     * Position in center of screen.
     */
    ShowChoicesHorizontalPositionParameterId[ShowChoicesHorizontalPositionParameterId["Center"] = 2] = "Center";
    /**
     * Position on right side of screen.
     */
    ShowChoicesHorizontalPositionParameterId[ShowChoicesHorizontalPositionParameterId["Right"] = 3] = "Right";
    /**
     * Fallback to plugin default.
     */
    ShowChoicesHorizontalPositionParameterId[ShowChoicesHorizontalPositionParameterId["Default"] = 4] = "Default";
})(ShowChoicesHorizontalPositionParameterId = exports.ShowChoicesHorizontalPositionParameterId || (exports.ShowChoicesHorizontalPositionParameterId = {}));


/***/ }),

/***/ "./src/action-commands/show-choices/parameters/show-choices-parameter-id.enum.ts":
/*!***************************************************************************************!*\
  !*** ./src/action-commands/show-choices/parameters/show-choices-parameter-id.enum.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * Exports 'Show Choices' action command parameter ID enumerations.
 *
 * @module action-commands/show-choices/parameters/show-choices-parameter-id.enum
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShowChoicesParameterId = void 0;
/**
 * 'Show Choices' action command parameter ID enumeration.
 */
var ShowChoicesParameterId;
(function (ShowChoicesParameterId) {
    /**
     * Background display type.
     */
    ShowChoicesParameterId[ShowChoicesParameterId["BackgroundDisplayType"] = 1] = "BackgroundDisplayType";
    /**
     * Background image.
     */
    ShowChoicesParameterId[ShowChoicesParameterId["BackgroundImage"] = 2] = "BackgroundImage";
    /**
     * Background color.
     */
    ShowChoicesParameterId[ShowChoicesParameterId["BackgroundColor"] = 3] = "BackgroundColor";
    /**
     * Background border color.
     */
    ShowChoicesParameterId[ShowChoicesParameterId["BackgroundBorderColor"] = 4] = "BackgroundBorderColor";
    /**
     * Highlight color.
     */
    ShowChoicesParameterId[ShowChoicesParameterId["HighlightColor"] = 5] = "HighlightColor";
    /**
     * Font.
     */
    ShowChoicesParameterId[ShowChoicesParameterId["Font"] = 6] = "Font";
    /**
     * Horizontal position.
     */
    ShowChoicesParameterId[ShowChoicesParameterId["HorizontalPosition"] = 7] = "HorizontalPosition";
    /**
     * Vertical position.
     */
    ShowChoicesParameterId[ShowChoicesParameterId["VerticalPosition"] = 8] = "VerticalPosition";
    /**
     * Cancel setting.
     */
    ShowChoicesParameterId[ShowChoicesParameterId["Cancel"] = 9] = "Cancel";
    /**
     * Variable parameter ID.
     */
    ShowChoicesParameterId[ShowChoicesParameterId["Variable"] = 10] = "Variable";
})(ShowChoicesParameterId = exports.ShowChoicesParameterId || (exports.ShowChoicesParameterId = {}));


/***/ }),

/***/ "./src/action-commands/show-choices/parameters/show-choices-vertical-position-parameter-id.enum.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/action-commands/show-choices/parameters/show-choices-vertical-position-parameter-id.enum.ts ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * Exports 'Show Choices' action command vertical position parameter ID
 * enumeration.
 *
 * @module action-commands/show-choices/parameters/show-choices-vertical-position-parameter-id.enum
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShowChoicesVerticalPositionParameterId = void 0;
/**
 * 'Show Choices' action command vertical position parameter ID enumeration.
 */
var ShowChoicesVerticalPositionParameterId;
(function (ShowChoicesVerticalPositionParameterId) {
    /**
     * Position at top of screen.
     */
    ShowChoicesVerticalPositionParameterId[ShowChoicesVerticalPositionParameterId["Top"] = 1] = "Top";
    /**
     * Position in center of screen.
     */
    ShowChoicesVerticalPositionParameterId[ShowChoicesVerticalPositionParameterId["Center"] = 2] = "Center";
    /**
     * Position at bottom of screen.
     */
    ShowChoicesVerticalPositionParameterId[ShowChoicesVerticalPositionParameterId["Bottom"] = 3] = "Bottom";
    /**
     * Fallback to plugin default.
     */
    ShowChoicesVerticalPositionParameterId[ShowChoicesVerticalPositionParameterId["Default"] = 4] = "Default";
})(ShowChoicesVerticalPositionParameterId = exports.ShowChoicesVerticalPositionParameterId || (exports.ShowChoicesVerticalPositionParameterId = {}));


/***/ }),

/***/ "./src/action-commands/show-choices/service/create-show-choices-service.function.ts":
/*!******************************************************************************************!*\
  !*** ./src/action-commands/show-choices/service/create-show-choices-service.function.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createShowChoicesService = void 0;
var create_choices_service_function_1 = __webpack_require__(/*! ../../../utils/choices/create-choices-service.function */ "./src/utils/choices/create-choices-service.function.ts");
var parse_text_tag_function_1 = __webpack_require__(/*! ../../../utils/text-tag/parse-text-tag.function */ "./src/utils/text-tag/parse-text-tag.function.ts");
var text_tag_name_enum_1 = __webpack_require__(/*! ../../../utils/text-tag/text-tag-name.enum */ "./src/utils/text-tag/text-tag-name.enum.ts");
var show_choices_background_display_type_enum_1 = __webpack_require__(/*! ../show-choices-background-display-type.enum */ "./src/action-commands/show-choices/show-choices-background-display-type.enum.ts");
function createShowChoicesService(config, internal) {
    var internalApi = internal || {};
    var self = (0, create_choices_service_function_1.createChoicesService)(config, internalApi);
    internalApi.background = createBackgroundData({
        borderColor: config.backgroundBorderColor,
        color: config.backgroundColor,
        imageId: config.backgroundImageId,
        type: config.backgroundDisplayType
    });
    internalApi.font = createFontData(config.fontId);
    internalApi.highlightColor = createHighlightColor();
    internalApi.position = {
        horizontal: config.horizontalPosition,
        vertical: config.verticalPosition
    };
    internalApi.text = createTextData(config.textIds, config.locale);
    internalApi.maxChoices = internalApi.text.length;
    self.createTextSprites = function (choiceIndex) {
        var _a;
        var letterData = [];
        var index = choiceIndex - 1;
        if (index < 0 || index >= internalApi.text.length) {
            return letterData;
        }
        var textData = internalApi.text[index];
        var fontData = textData.font || internalApi.font;
        var letterHeight = (_a = fontData[fontData.type]) === null || _a === void 0 ? void 0 : _a.letterHeight;
        var currentColor = [255, 255, 255];
        var currentSize = letterHeight;
        var letterX = 0;
        function createSprite(letter) {
            switch (fontData.type) {
                case 'bitmap':
                    var bitmapData = fontData[fontData.type];
                    var layoutLineList = bitmapData.layoutLineList;
                    var isHankaku = !letter.match(/[^\x01-\x7E]/) || !letter.match(/[^\uFF65-\uFF9F]/);
                    var cx = -1;
                    var cy = -1;
                    for (var i = 0; i < layoutLineList.length; i++) {
                        var index_1 = layoutLineList[i].indexOf(letter);
                        if (index_1 >= 0) {
                            cx = index_1;
                            cy = i;
                            break;
                        }
                    }
                    if (cx >= 0 && cy >= 0) {
                        var sprite = new cc.Sprite(bitmapData.texture, cc.rect(cx * bitmapData.letterWidth, cy * letterHeight, bitmapData.letterWidth, letterHeight));
                        sprite.setAnchorPoint(0, 0);
                        sprite.x = letterX;
                        sprite.y = letterHeight - (currentSize - letterHeight);
                        sprite.width = (bitmapData.letterWidth * currentSize) / letterHeight;
                        sprite.height = currentSize;
                        sprite.color = cc.color(currentColor[0], currentColor[1], currentColor[2]);
                        letterX +=
                            ((bitmapData.fixedWidth
                                ? bitmapData.letterWidth
                                : isHankaku
                                    ? bitmapData.hankakuWidth
                                    : bitmapData.zenkakuWidth) *
                                currentSize) /
                                letterHeight +
                                textData.letterSpacing;
                        return { endX: letterX, sprite: sprite };
                    }
                    break;
                case 'ttf':
                    var ttfData = fontData[fontData.type];
                    var label = new cc.LabelTTF(letter, ttfData.filename, (ttfData.size * currentSize) / letterHeight, undefined, undefined, undefined, ttfData.aliasThreshold);
                    label.color = cc.color(currentColor[0], currentColor[1], currentColor[2]);
                    label.setAnchorPoint(0, 0);
                    label.x = letterX;
                    label.y = letterHeight - (currentSize - letterHeight) - currentSize / 8;
                    letterX += label.width + textData.letterSpacing;
                    return { endX: letterX, sprite: label };
                default:
                    break;
            }
            return { endX: -1, sprite: new cc.Sprite() };
        }
        var lines = textData.message.split('\n');
        for (var i = 0; i < lines.length; ++i) {
            var text = lines[i];
            letterData.push([]);
            for (var j = 0; j < text.length; ++j) {
                if (text.substring(j, j + 2) == '\\\\') {
                    j += 2 - 1;
                    letterData[i].push(createSprite('\\'));
                    continue;
                }
                var data = (0, parse_text_tag_function_1.parseTextTag)(text, j, {
                    currentSize: currentSize,
                    defaultColor: [255, 255, 255],
                    defaultSize: letterHeight
                });
                if (data) {
                    switch (data.tagName) {
                        case text_tag_name_enum_1.TextTagName.Size:
                            currentSize = data.param;
                            break;
                        case text_tag_name_enum_1.TextTagName.Color:
                            currentColor = data.param;
                            break;
                        default:
                            break;
                    }
                    continue;
                }
                letterData[i].push(createSprite(text[j]));
            }
        }
        return letterData;
    };
    self.getBackgroundBorderColor = function () {
        return internalApi.background.borderColor;
    };
    self.getBackgroundColor = function () {
        return internalApi.background.color;
    };
    self.getBackgroundDisplayType = function () {
        return internalApi.background.type;
    };
    self.getBackgroundImageTexture = function () {
        return internalApi.background.texture;
    };
    self.getHighlightColor = function () {
        return internalApi.highlightColor;
    };
    self.getHorizontalPosition = function () {
        return internalApi.position.horizontal;
    };
    self.getVerticalPosition = function () {
        return internalApi.position.vertical;
    };
    return self;
}
exports.createShowChoicesService = createShowChoicesService;
function createBackgroundData(config) {
    var _a, _b;
    var backgroundData = {};
    switch (config.type) {
        case show_choices_background_display_type_enum_1.ShowChoicesBackgroundDisplayType.Graphics:
            var borderColor = config.borderColor || [255, 255, 255, 255];
            var color = config.color || [0, 0, 0, 128];
            backgroundData.type = show_choices_background_display_type_enum_1.ShowChoicesBackgroundDisplayType.Graphics;
            backgroundData.borderColor = new ((_a = cc.Color).bind.apply(_a, __spreadArray([void 0], borderColor, false)))();
            backgroundData.color = new ((_b = cc.Color).bind.apply(_b, __spreadArray([void 0], color, false)))();
            break;
        case show_choices_background_display_type_enum_1.ShowChoicesBackgroundDisplayType.Image:
            if (!config.imageId) {
                // TODO: error handling...
            }
            var agtkImage = Agtk.images.get(config.imageId);
            if (!agtkImage) {
                // TODO: error handling...
            }
            var texture = cc.textureCache.addImage(agtkImage.filename);
            texture.setAliasTexParameters();
            backgroundData.type = show_choices_background_display_type_enum_1.ShowChoicesBackgroundDisplayType.Image;
            backgroundData.texture = texture;
            break;
        case show_choices_background_display_type_enum_1.ShowChoicesBackgroundDisplayType.None:
        default:
            backgroundData.type = show_choices_background_display_type_enum_1.ShowChoicesBackgroundDisplayType.None;
            break;
    }
    return backgroundData;
}
function createFontData(fontId) {
    var agtkFont = Agtk.fonts.get(fontId);
    var fontData = {};
    if (!agtkFont) {
        // TODO: error handling...
    }
    if (agtkFont.imageFontFlag) {
        var agtkImage = Agtk.images.get(agtkFont.imageId);
        if (!agtkImage) {
            // TODO: error handling...
        }
        var texture = cc.textureCache.addImage(agtkImage.filename);
        if (!texture) {
            // TODO: error handling...
        }
        texture.setAliasTexParameters();
        var layoutLineList = agtkFont.letterLayout.split('\n');
        var bitmapData = {
            fixedWidth: agtkFont.fixedWidth,
            hankakuWidth: agtkFont.hankakuWidth,
            layoutLineList: layoutLineList,
            texture: texture,
            zenkakuWidth: agtkFont.zenkakuWidth
        };
        var layoutLines = layoutLineList.length;
        var maxLetters = 0;
        for (var i = 0; i < layoutLines; i++) {
            maxLetters = Math.max(maxLetters, layoutLineList[i].length);
        }
        bitmapData.letterWidth = Math.floor(texture.width / maxLetters);
        bitmapData.letterHeight = Math.floor(texture.height / layoutLines);
        fontData.type = 'bitmap';
        fontData.bitmap = bitmapData;
    }
    else {
        fontData.type = 'ttf';
        fontData.ttf = {
            aliasThreshold: agtkFont.antialiasDisabled ? agtkFont.aliasThreshold : -1,
            filename: "fonts/".concat(agtkFont.fontName, ".ttf"),
            letterHeight: agtkFont.fontSize,
            size: agtkFont.fontSize
        };
    }
    return fontData;
}
function createHighlightColor(color) {
    var _a;
    return new ((_a = cc.Color).bind.apply(_a, __spreadArray([void 0], (color || [0, 255, 255, 128]), false)))();
}
function createTextData(textIds, locale) {
    var textData = [];
    for (var i = 0; i < textIds.length; i++) {
        var textId = textIds[i];
        var agtkText = Agtk.texts.get(textId);
        if (!agtkText) {
            continue;
        }
        var message = agtkText.getText(locale);
        if (!message) {
            continue;
        }
        var font = undefined;
        if (agtkText.fontId >= 0) {
            font = createFontData(agtkText.fontId);
        }
        textData.push({ message: message, font: font, letterSpacing: agtkText.letterSpacing });
    }
    return textData;
}


/***/ }),

/***/ "./src/action-commands/show-choices/show-choices-background-display-type.enum.ts":
/*!***************************************************************************************!*\
  !*** ./src/action-commands/show-choices/show-choices-background-display-type.enum.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * Exports 'Show Choices' action command background display type enumeration.
 *
 * @module action-commands/show-choices/show-choices-background-display-type.enum
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShowChoicesBackgroundDisplayType = void 0;
/**
 * 'Show Choices' action command background display type enumeration.
 */
var ShowChoicesBackgroundDisplayType;
(function (ShowChoicesBackgroundDisplayType) {
    /**
     * Display using ccDrawLayer.
     */
    ShowChoicesBackgroundDisplayType[ShowChoicesBackgroundDisplayType["Graphics"] = 1] = "Graphics";
    /**
     * Display using image.
     */
    ShowChoicesBackgroundDisplayType[ShowChoicesBackgroundDisplayType["Image"] = 2] = "Image";
    /**
     * No background.
     */
    ShowChoicesBackgroundDisplayType[ShowChoicesBackgroundDisplayType["None"] = 3] = "None";
})(ShowChoicesBackgroundDisplayType = exports.ShowChoicesBackgroundDisplayType || (exports.ShowChoicesBackgroundDisplayType = {}));


/***/ }),

/***/ "./src/action-commands/show-choices/show-choices-context.interface.ts":
/*!****************************************************************************!*\
  !*** ./src/action-commands/show-choices/show-choices-context.interface.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/action-commands/show-choices/show-choices-horizontal-position.enum.ts":
/*!***********************************************************************************!*\
  !*** ./src/action-commands/show-choices/show-choices-horizontal-position.enum.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * Exports 'Show Choices' action command horizontal position enumeration.
 *
 * @module action-commands/show-choices/show-choices-horizontal-position.enum
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShowChoicesHorizontalPosition = void 0;
/**
 * 'Show Choices' action command horizontal position enumeration.
 */
var ShowChoicesHorizontalPosition;
(function (ShowChoicesHorizontalPosition) {
    /**
     * Position on left side of screen.
     */
    ShowChoicesHorizontalPosition[ShowChoicesHorizontalPosition["Left"] = 1] = "Left";
    /**
     * Position in center of screen.
     */
    ShowChoicesHorizontalPosition[ShowChoicesHorizontalPosition["Center"] = 2] = "Center";
    /**
     * Position on right side of screen.
     */
    ShowChoicesHorizontalPosition[ShowChoicesHorizontalPosition["Right"] = 3] = "Right";
})(ShowChoicesHorizontalPosition = exports.ShowChoicesHorizontalPosition || (exports.ShowChoicesHorizontalPosition = {}));


/***/ }),

/***/ "./src/action-commands/show-choices/show-choices-vertical-position.enum.ts":
/*!*********************************************************************************!*\
  !*** ./src/action-commands/show-choices/show-choices-vertical-position.enum.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * Exports 'Show Choices' action command vertical position enumeration.
 *
 * @module action-commands/show-choices/show-choices-vertical-position.enum
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShowChoicesVerticalPosition = void 0;
/**
 * 'Show Choices' action command vertical position enumeration.
 */
var ShowChoicesVerticalPosition;
(function (ShowChoicesVerticalPosition) {
    /**
     * Position at top of screen.
     */
    ShowChoicesVerticalPosition[ShowChoicesVerticalPosition["Top"] = 1] = "Top";
    /**
     * Position in center of screen.
     */
    ShowChoicesVerticalPosition[ShowChoicesVerticalPosition["Center"] = 2] = "Center";
    /**
     * Position at bottom of screen.
     */
    ShowChoicesVerticalPosition[ShowChoicesVerticalPosition["Bottom"] = 3] = "Bottom";
})(ShowChoicesVerticalPosition = exports.ShowChoicesVerticalPosition || (exports.ShowChoicesVerticalPosition = {}));


/***/ }),

/***/ "./src/action-commands/show-choices/show-choices.const.ts":
/*!****************************************************************!*\
  !*** ./src/action-commands/show-choices/show-choices.const.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.embeddedChoiceIdBase = exports.choiceIdBase = exports.maxChoices = void 0;
exports.maxChoices = 6;
exports.choiceIdBase = 100;
exports.embeddedChoiceIdBase = 1000;


/***/ }),

/***/ "./src/create-plugin.function.ts":
/*!***************************************!*\
  !*** ./src/create-plugin.function.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createPlugin = void 0;
/**
 * Exports a plugin instance factory.
 *
 * @module
 */
var create_plugin_function_1 = __webpack_require__(/*! @agogpixel/pgmmv-plugin-support/src/create-plugin.function */ "./node_modules/@agogpixel/pgmmv-plugin-support/src/create-plugin.function.js");
var action_commands_1 = __webpack_require__(/*! ./action-commands */ "./src/action-commands/index.ts");
var show_choices_1 = __webpack_require__(/*! ./action-commands/show-choices */ "./src/action-commands/show-choices/index.ts");
var link_conditions_1 = __webpack_require__(/*! ./link-conditions */ "./src/link-conditions/index.ts");
var locale_1 = __importDefault(__webpack_require__(/*! ./locale */ "./src/locale/index.ts"));
var parameters_1 = __webpack_require__(/*! ./parameters */ "./src/parameters/index.ts");
/**
 * Creates a plugin instance.
 *
 * @returns Extended Show Choices plugin instance.
 */
function createPlugin() {
    /**
     * Contains methods and properties from the base plugin that are meant for
     * internal use in our plugin.
     */
    var internalApi = {};
    /**
     * Create our plugin instance - we provide our plugin localizations,
     * UI parameters, action commands, link conditions, and our internal
     * API object.
     */
    var self = (0, create_plugin_function_1.createPlugin)({ localizations: locale_1.default, parameters: parameters_1.parameters, actionCommands: action_commands_1.actionCommands, linkConditions: link_conditions_1.linkConditions }, internalApi);
    //////////////////////////////////////////////////////////////////////////////
    // Internal API
    //////////////////////////////////////////////////////////////////////////////
    internalApi.paramValue = [];
    internalApi.selectedInfo = {};
    internalApi.showing = false;
    internalApi.destroyChoices = function (removeFromParent) {
        if (removeFromParent === void 0) { removeFromParent = true; }
        if (internalApi.showChoicesContext) {
            var showChoicesContext = internalApi.showChoicesContext;
            var display = showChoicesContext.display;
            if (display && removeFromParent) {
                display.removeFromParent();
            }
            delete showChoicesContext.display;
            delete showChoicesContext.instanceId;
            delete showChoicesContext.objectId;
            delete showChoicesContext.variableId;
        }
        internalApi.showing = false;
    };
    internalApi.setSelectedInfo = function (objectId, instanceId, index, variableId) {
        internalApi.selectedInfo["".concat(objectId, "-").concat(instanceId)] = index;
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
    };
    //////////////////////////////////////////////////////////////////////////////
    // Public API
    //////////////////////////////////////////////////////////////////////////////
    // Reference the 'parent' initialize implementation.
    var _initialize = self.initialize;
    /**
     * Initializes plugin. Called from PGMMV editor & runtime.
     *
     * @param data Internal data that is saved/retrieved for this plugin.
     * @public
     */
    self.initialize = function (data) {
        // Invoke our 'parent' plugin method (sets or initializes internal data,
        // etc.).
        _initialize(data);
        if (internalApi.inEditor()) {
            // Global APIs such as `Agtk` or `cc` or whatever are not really available
            // when the plugin is initializing within the PGMMV editor environment.
            // Bail out here.
            return;
        }
        // Initialize any runtime dependencies.
        // For Cocos scene graph stuffs.
        internalApi.layerTag = self.id << 16;
        // Treat this class constructor as a singleton within the scope of this
        // plugin.
        internalApi.ChoicesLayer = (0, show_choices_1.createChoicesLayerClass)();
    };
    /**
     * Sets data configured in plugin parameters. Called from PGMMV editor & runtime.
     *
     * User defined default values will be set & stored here.
     *
     * @param param Plugin UI parameters.
     * @public
     */
    self.setParamValue = function (param) {
        internalApi.paramValue = internalApi.normalizeUiParameters(param);
    };
    /**
     * Executes action command.
     *
     * @param actionCommandIndex The index of a given action command.
     * @param parameter Action command data that is set in & provided by the PGMMV
     * editor or runtime.
     * @param objectId The object ID of the object instance through which the
     * action command is executing.
     * @param instanceId The instance ID of the object instance through which the
     * action command is executing.
     * @returns Action command behavior signal.
     * @public
     */
    self.execActionCommand = function (actionCommandIndex, parameter, objectId, instanceId) {
        return (0, action_commands_1.execActionCommand)(internalApi, actionCommandIndex, internalApi.normalizeActionCommandParameters(actionCommandIndex, parameter), objectId, instanceId);
    };
    /**
     * Evaluates link condition.
     *
     * @param linkConditionIndex The index of a given link condition.
     * @param parameter Link condition data that is set in & provided by the PGMMV
     * editor or runtime.
     * @param objectId The object ID of the object instance through which the
     * link condition is evaluating.
     * @param instanceId The instance ID of the object instance through which the
     * link condition is evaluating.
     * @returns True if link condition is satisfied, false otherwise.
     * @public
     */
    self.execLinkCondition = function (linkConditionIndex, parameter, objectId, instanceId) {
        return (0, link_conditions_1.execLinkCondition)(internalApi, linkConditionIndex, internalApi.normalizeLinkConditionParameters(linkConditionIndex, parameter), objectId, instanceId);
    };
    //////////////////////////////////////////////////////////////////////////////
    // Plugin Ready!
    //////////////////////////////////////////////////////////////////////////////
    return self;
}
exports.createPlugin = createPlugin;


/***/ }),

/***/ "./src/link-conditions/choice-selected/exec-choice-selected-link-condition.function.ts":
/*!*********************************************************************************************!*\
  !*** ./src/link-conditions/choice-selected/exec-choice-selected-link-condition.function.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.execChoiceSelectedLinkCondition = void 0;
var utils_1 = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
var parameters_1 = __webpack_require__(/*! ./parameters */ "./src/link-conditions/choice-selected/parameters/index.ts");
/**
 * Begin evaluation of the 'Choice Selected' link condition 'business' logic.
 *
 * @param internalApi The plugin's internal API.
 * @param parameter Link condition data that is set in & provided by the PGMMV
 * editor or runtime & subsequently normalized.
 * @param objectId The object ID of the object instance through which the
 * link condition is evaluating.
 * @param instanceId The instance ID of the object instance through which the
 * link condition is evaluating.
 * @returns True if link condition is satisfied, false otherwise.
 */
function execChoiceSelectedLinkCondition(internalApi, parameter, objectId, instanceId) {
    var info = utils_1.noChoiceMade;
    var key = "".concat(objectId, "-").concat(instanceId);
    if (key in internalApi.selectedInfo) {
        info = internalApi.selectedInfo[key];
    }
    var target = parameter[parameters_1.ChoiceSelectedParamaterId.Choice];
    // info is 0-based indexing, target is 1-based indexing.
    return info === target - 1;
}
exports.execChoiceSelectedLinkCondition = execChoiceSelectedLinkCondition;


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
/**
 * Exports 'Choice Selected' link condition configurations & functions.
 *
 * @module link-conditions/choice-selected
 */
__exportStar(__webpack_require__(/*! ./parameters */ "./src/link-conditions/choice-selected/parameters/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./exec-choice-selected-link-condition.function */ "./src/link-conditions/choice-selected/exec-choice-selected-link-condition.function.ts"), exports);


/***/ }),

/***/ "./src/link-conditions/choice-selected/parameters/choice-selected-parameter-id.enum.ts":
/*!*********************************************************************************************!*\
  !*** ./src/link-conditions/choice-selected/parameters/choice-selected-parameter-id.enum.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * Exports 'Choice Selected' link condition parameter ID enumerations.
 *
 * @module link-conditions/choice-selected/choice-selected-parameter-id.enum
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChoiceSelectedParamaterId = void 0;
/**
 * 'Choice Selected' link condition parameter ID enumeration.
 */
var ChoiceSelectedParamaterId;
(function (ChoiceSelectedParamaterId) {
    /**
     * Choice parameter ID.
     */
    ChoiceSelectedParamaterId[ChoiceSelectedParamaterId["Choice"] = 1] = "Choice";
})(ChoiceSelectedParamaterId = exports.ChoiceSelectedParamaterId || (exports.ChoiceSelectedParamaterId = {}));


/***/ }),

/***/ "./src/link-conditions/choice-selected/parameters/choice-selected-parameters.config.ts":
/*!*********************************************************************************************!*\
  !*** ./src/link-conditions/choice-selected/parameters/choice-selected-parameters.config.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.choiceSelectedParameters = void 0;
var plugin_ui_parameter_type_1 = __webpack_require__(/*! @agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-parameter-type */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-parameter-type.js");
var choice_selected_parameter_id_enum_1 = __webpack_require__(/*! ./choice-selected-parameter-id.enum */ "./src/link-conditions/choice-selected/parameters/choice-selected-parameter-id.enum.ts");
exports.choiceSelectedParameters = [
    {
        id: choice_selected_parameter_id_enum_1.ChoiceSelectedParamaterId.Choice,
        name: 'loca(LINK_CONDITION_CHOICE_SELECTED_PARAMETER_CHOICE_NAME)',
        type: plugin_ui_parameter_type_1.AgtkPluginUiParameterType.Number,
        defaultValue: -1
    }
];


/***/ }),

/***/ "./src/link-conditions/choice-selected/parameters/index.ts":
/*!*****************************************************************!*\
  !*** ./src/link-conditions/choice-selected/parameters/index.ts ***!
  \*****************************************************************/
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
__exportStar(__webpack_require__(/*! ./choice-selected-parameter-id.enum */ "./src/link-conditions/choice-selected/parameters/choice-selected-parameter-id.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./choice-selected-parameters.config */ "./src/link-conditions/choice-selected/parameters/choice-selected-parameters.config.ts"), exports);


/***/ }),

/***/ "./src/link-conditions/exec-link-condition.function.ts":
/*!*************************************************************!*\
  !*** ./src/link-conditions/exec-link-condition.function.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.execLinkCondition = void 0;
var link_condition_id_enum_1 = __webpack_require__(/*! ./link-condition-id.enum */ "./src/link-conditions/link-condition-id.enum.ts");
var link_condition_index_map_const_1 = __webpack_require__(/*! ./link-condition-index-map.const */ "./src/link-conditions/link-condition-index-map.const.ts");
var choice_selected_1 = __webpack_require__(/*! ./choice-selected */ "./src/link-conditions/choice-selected/index.ts");
/**
 * Evaluates link condition.
 *
 * @param internalApi The plugin's internal API.
 * @param linkConditionIndex The index of a given link condition.
 * @param parameter Link condition data that is set in & provided by the PGMMV
 * editor or runtime & subsequently normalized.
 * @param objectId The object ID of the object instance through which the
 * link condition is evaluating.
 * @param instanceId The instance ID of the object instance through which the
 * link condition is evaluating.
 * @returns True if link condition is satisfied, false otherwise.
 */
function execLinkCondition(internalApi, linkConditionIndex, parameter, objectId, instanceId) {
    switch (linkConditionIndex) {
        case link_condition_index_map_const_1.linkConditionIndexMap[link_condition_id_enum_1.LinkConditionId.ChoiceSelected]:
            return (0, choice_selected_1.execChoiceSelectedLinkCondition)(internalApi, parameter, objectId, instanceId);
        default:
            break;
    }
    return false;
}
exports.execLinkCondition = execLinkCondition;


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
/**
 * Exports link condition configurations & functions.
 *
 * @module link-conditions
 */
__exportStar(__webpack_require__(/*! ./exec-link-condition.function */ "./src/link-conditions/exec-link-condition.function.ts"), exports);
__exportStar(__webpack_require__(/*! ./link-condition-id.enum */ "./src/link-conditions/link-condition-id.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./link-condition-index-map.const */ "./src/link-conditions/link-condition-index-map.const.ts"), exports);
__exportStar(__webpack_require__(/*! ./link-conditions.config */ "./src/link-conditions/link-conditions.config.ts"), exports);


/***/ }),

/***/ "./src/link-conditions/link-condition-id.enum.ts":
/*!*******************************************************!*\
  !*** ./src/link-conditions/link-condition-id.enum.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * Exports link condition ID enumerations.
 *
 * @module link-conditions/link-condition-id.enum
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinkConditionId = void 0;
/**
 * Link condition ID enumeration.
 */
var LinkConditionId;
(function (LinkConditionId) {
    /**
     * 'Choice Selected' link condition ID.
     */
    LinkConditionId[LinkConditionId["ChoiceSelected"] = 1] = "ChoiceSelected";
})(LinkConditionId = exports.LinkConditionId || (exports.LinkConditionId = {}));


/***/ }),

/***/ "./src/link-conditions/link-condition-index-map.const.ts":
/*!***************************************************************!*\
  !*** ./src/link-conditions/link-condition-index-map.const.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.linkConditionIndexMap = void 0;
var link_conditions_config_1 = __webpack_require__(/*! ./link-conditions.config */ "./src/link-conditions/link-conditions.config.ts");
/**
 * Map a link condition ID to its corresponding index within the
 * {@link AgtkPluginLinkCondition} parameter data provided by this plugin.
 *
 * Populated at runtime.
 */
exports.linkConditionIndexMap = {};
for (var i = 0; i < link_conditions_config_1.linkConditions.length; ++i) {
    exports.linkConditionIndexMap[link_conditions_config_1.linkConditions[i].id] = i;
}


/***/ }),

/***/ "./src/link-conditions/link-conditions.config.ts":
/*!*******************************************************!*\
  !*** ./src/link-conditions/link-conditions.config.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.linkConditions = void 0;
var choice_selected_1 = __webpack_require__(/*! ./choice-selected */ "./src/link-conditions/choice-selected/index.ts");
var link_condition_id_enum_1 = __webpack_require__(/*! ./link-condition-id.enum */ "./src/link-conditions/link-condition-id.enum.ts");
/**
 * Link condition configurations.
 */
exports.linkConditions = [
    {
        id: link_condition_id_enum_1.LinkConditionId.ChoiceSelected,
        name: 'loca(LINK_CONDITION_CHOICE_SELECTED_NAME)',
        description: 'loca(LINK_CONDITION_CHOICE_SELECTED_DESCRIPTION)',
        parameter: choice_selected_1.choiceSelectedParameters
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
/**
 * Exports plugin UI parameter configurations.
 *
 * @module parameters
 */
__exportStar(__webpack_require__(/*! ./parameter-id.enum */ "./src/parameters/parameter-id.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./parameters.config */ "./src/parameters/parameters.config.ts"), exports);


/***/ }),

/***/ "./src/parameters/parameter-id.enum.ts":
/*!*********************************************!*\
  !*** ./src/parameters/parameter-id.enum.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * Exports plugin UI parameter ID enumerations.
 *
 * @module parameters/parameter-id.enum
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParameterId = void 0;
/**
 * Plugin UI parameter ID enumeration.
 */
var ParameterId;
(function (ParameterId) {
    /**
     * Background display type.
     */
    ParameterId[ParameterId["BackgroundDisplayType"] = 1] = "BackgroundDisplayType";
    /**
     * Background image.
     */
    ParameterId[ParameterId["BackgroundImage"] = 2] = "BackgroundImage";
    /**
     * Background color.
     */
    ParameterId[ParameterId["BackgroundColor"] = 3] = "BackgroundColor";
    /**
     * Background border color.
     */
    ParameterId[ParameterId["BackgroundBorderColor"] = 4] = "BackgroundBorderColor";
    /**
     * Highlight color.
     */
    ParameterId[ParameterId["HighlightColor"] = 5] = "HighlightColor";
    /**
     * Font.
     */
    ParameterId[ParameterId["Font"] = 6] = "Font";
    /**
     * Horizontal position.
     */
    ParameterId[ParameterId["HorizontalPosition"] = 7] = "HorizontalPosition";
    /**
     * Vertical position.
     */
    ParameterId[ParameterId["VerticalPosition"] = 8] = "VerticalPosition";
    /**
     * Cancel setting.
     */
    ParameterId[ParameterId["Cancel"] = 9] = "Cancel";
})(ParameterId = exports.ParameterId || (exports.ParameterId = {}));


/***/ }),

/***/ "./src/parameters/parameters.config.ts":
/*!*********************************************!*\
  !*** ./src/parameters/parameters.config.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parameters = void 0;
/**
 * Exports plugin UI parameter configurations.
 *
 * @module parameters/parameters.config
 */
var plugin_ui_parameter_type_1 = __webpack_require__(/*! @agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-parameter-type */ "./node_modules/@agogpixel/pgmmv-ts/api/agtk/plugin/plugin-ui-parameter-type.js");
var show_choices_1 = __webpack_require__(/*! ../action-commands/show-choices */ "./src/action-commands/show-choices/index.ts");
var parameter_id_enum_1 = __webpack_require__(/*! ./parameter-id.enum */ "./src/parameters/parameter-id.enum.ts");
/**
 * Plugin UI parameter configurations.
 */
exports.parameters = [
    {
        id: parameter_id_enum_1.ParameterId.BackgroundDisplayType,
        name: 'loca(PARAMETER_BACKGROUND_DISPLAY_TYPE_NAME)',
        type: plugin_ui_parameter_type_1.AgtkPluginUiParameterType.CustomId,
        defaultValue: show_choices_1.ShowChoicesBackgroundDisplayTypeParameterId.None,
        customParam: [
            {
                id: show_choices_1.ShowChoicesBackgroundDisplayTypeParameterId.Graphics,
                name: 'loca(PARAMETER_BACKGROUND_DISPLAY_TYPE_CUSTOM_PARAM_GRAPHICS_NAME)'
            },
            {
                id: show_choices_1.ShowChoicesBackgroundDisplayTypeParameterId.Image,
                name: 'loca(PARAMETER_BACKGROUND_DISPLAY_TYPE_CUSTOM_PARAM_IMAGE_NAME)'
            },
            {
                id: show_choices_1.ShowChoicesBackgroundDisplayTypeParameterId.None,
                name: 'loca(PARAMETER_BACKGROUND_DISPLAY_TYPE_CUSTOM_PARAM_NONE_NAME)'
            }
        ]
    },
    {
        id: parameter_id_enum_1.ParameterId.BackgroundImage,
        name: 'loca(PARAMETER_BACKGROUND_IMAGE_NAME)',
        type: plugin_ui_parameter_type_1.AgtkPluginUiParameterType.ImageId,
        defaultValue: -1
    },
    {
        id: parameter_id_enum_1.ParameterId.BackgroundColor,
        name: 'loca(PARAMETER_BACKGROUND_COLOR_NAME)',
        type: plugin_ui_parameter_type_1.AgtkPluginUiParameterType.String,
        defaultValue: '0,0,0,255'
    },
    {
        id: parameter_id_enum_1.ParameterId.BackgroundBorderColor,
        name: 'loca(PARAMETER_BACKGROUND_BORDER_COLOR_NAME)',
        type: plugin_ui_parameter_type_1.AgtkPluginUiParameterType.String,
        defaultValue: '255,255,255,255'
    },
    {
        id: parameter_id_enum_1.ParameterId.HighlightColor,
        name: 'loca(PARAMETER_HIGHLIGHT_COLOR_NAME)',
        type: plugin_ui_parameter_type_1.AgtkPluginUiParameterType.String,
        defaultValue: '0,255,255,128'
    },
    {
        id: parameter_id_enum_1.ParameterId.Font,
        name: 'loca(PARAMETER_FONT_NAME)',
        type: plugin_ui_parameter_type_1.AgtkPluginUiParameterType.FontId,
        defaultValue: -1
    },
    {
        id: parameter_id_enum_1.ParameterId.HorizontalPosition,
        name: 'loca(PARAMETER_HORIZONTAL_POSITION_NAME)',
        type: plugin_ui_parameter_type_1.AgtkPluginUiParameterType.CustomId,
        defaultValue: show_choices_1.ShowChoicesHorizontalPositionParameterId.Center,
        customParam: [
            {
                id: show_choices_1.ShowChoicesHorizontalPositionParameterId.Left,
                name: 'loca(PARAMETER_HORIZONTAL_POSITION_CUSTOM_PARAM_LEFT_NAME)'
            },
            {
                id: show_choices_1.ShowChoicesHorizontalPositionParameterId.Center,
                name: 'loca(PARAMETER_HORIZONTAL_POSITION_CUSTOM_PARAM_CENTER_NAME)'
            },
            {
                id: show_choices_1.ShowChoicesHorizontalPositionParameterId.Right,
                name: 'loca(PARAMETER_HORIZONTAL_POSITION_CUSTOM_PARAM_RIGHT_NAME)'
            }
        ]
    },
    {
        id: parameter_id_enum_1.ParameterId.VerticalPosition,
        name: 'loca(PARAMETER_VERTICAL_POSITION_NAME)',
        type: plugin_ui_parameter_type_1.AgtkPluginUiParameterType.CustomId,
        defaultValue: show_choices_1.ShowChoicesVerticalPositionParameterId.Center,
        customParam: [
            {
                id: show_choices_1.ShowChoicesVerticalPositionParameterId.Top,
                name: 'loca(PARAMETER_VERTICAL_POSITION_CUSTOM_PARAM_TOP_NAME)'
            },
            {
                id: show_choices_1.ShowChoicesVerticalPositionParameterId.Center,
                name: 'loca(PARAMETER_VERTICAL_POSITION_CUSTOM_PARAM_CENTER_NAME)'
            },
            {
                id: show_choices_1.ShowChoicesVerticalPositionParameterId.Bottom,
                name: 'loca(PARAMETER_VERTICAL_POSITION_CUSTOM_PARAM_BOTTOM_NAME)'
            }
        ]
    },
    {
        id: parameter_id_enum_1.ParameterId.Cancel,
        name: 'loca(PARAMETER_CANCEL_NAME)',
        type: plugin_ui_parameter_type_1.AgtkPluginUiParameterType.CustomId,
        defaultValue: show_choices_1.ShowChoicesCancelParameterId.Disabled,
        customParam: [
            { id: show_choices_1.ShowChoicesCancelParameterId.Enabled, name: 'loca(PARAMETER_CANCEL_CUSTOM_PARAM_ENABLED_NAME)' },
            { id: show_choices_1.ShowChoicesCancelParameterId.Disabled, name: 'loca(PARAMETER_CANCEL_CUSTOM_PARAM_DISABLED_NAME)' }
        ]
    }
];


/***/ }),

/***/ "./src/utils/choices/choices-service-config.interface.ts":
/*!***************************************************************!*\
  !*** ./src/utils/choices/choices-service-config.interface.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/utils/choices/choices-service-protected-api.interface.ts":
/*!**********************************************************************!*\
  !*** ./src/utils/choices/choices-service-protected-api.interface.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/utils/choices/choices-service.interface.ts":
/*!********************************************************!*\
  !*** ./src/utils/choices/choices-service.interface.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * Exports choices service interface.
 *
 * @module choices/choices-service.interface
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/utils/choices/choices.const.ts":
/*!********************************************!*\
  !*** ./src/utils/choices/choices.const.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * Exports choice constant values.
 *
 * @module choices/choices.const
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.noChoiceMade = exports.cancelChoiceMade = void 0;
/**
 * Cancel choices value.
 */
exports.cancelChoiceMade = -1;
/**
 * No choice value.
 */
exports.noChoiceMade = -2;


/***/ }),

/***/ "./src/utils/choices/create-choices-service.function.ts":
/*!**************************************************************!*\
  !*** ./src/utils/choices/create-choices-service.function.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createChoicesService = void 0;
var choices_const_1 = __webpack_require__(/*! ./choices.const */ "./src/utils/choices/choices.const.ts");
function createChoicesService(config, internal) {
    var self = {};
    var internalApi = internal || {};
    internalApi.cancelValue = config.cancelValue === undefined ? choices_const_1.cancelChoiceMade : config.cancelValue;
    internalApi.defaultChoice = config.defaultChoice;
    internalApi.maxChoices = config.maxChoices;
    internalApi.noChoiceMadeValue = config.noChoiceMadeValue === undefined ? choices_const_1.noChoiceMade : config.noChoiceMadeValue;
    self.getCancelValue = function () {
        return internalApi.cancelValue;
    };
    self.getDefaultChoice = function () {
        return internalApi.defaultChoice;
    };
    self.getMaxChoices = function () {
        return internalApi.maxChoices;
    };
    self.getNoChoiceMadeValue = function () {
        return internalApi.noChoiceMadeValue;
    };
    return self;
}
exports.createChoicesService = createChoicesService;


/***/ }),

/***/ "./src/utils/choices/index.ts":
/*!************************************!*\
  !*** ./src/utils/choices/index.ts ***!
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
/**
 * Choices module.
 *
 * @module choices
 */
__exportStar(__webpack_require__(/*! ./choices-service-config.interface */ "./src/utils/choices/choices-service-config.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./choices-service-protected-api.interface */ "./src/utils/choices/choices-service-protected-api.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./choices-service.interface */ "./src/utils/choices/choices-service.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./choices.const */ "./src/utils/choices/choices.const.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-choices-service.function */ "./src/utils/choices/create-choices-service.function.ts"), exports);


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
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
__exportStar(__webpack_require__(/*! ./choices */ "./src/utils/choices/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./input */ "./src/utils/input/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./text-tag */ "./src/utils/text-tag/index.ts"), exports);


/***/ }),

/***/ "./src/utils/input/create-input-service.function.ts":
/*!**********************************************************!*\
  !*** ./src/utils/input/create-input-service.function.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createInputService = void 0;
////////////////////////////////////////////////////////////////////////////////
// Private Static Methods
////////////////////////////////////////////////////////////////////////////////
/**
 * Is specified operation key pressed?
 *
 * @param keyId Operation key ID.
 * @returns True if operation key is pressed, false otherwise.
 * @private
 * @static
 */
function isKeyPressed(keyId) {
    for (var i = 0; i <= Agtk.controllers.MaxControllerId; i++) {
        if (Agtk.controllers.getOperationKeyPressed(i, keyId)) {
            return true;
        }
    }
    return false;
}
/**
 * Is specified mouse button pressed?
 *
 * @param keyCode Mouse key code.
 * @returns True if mouse button is pressed, false otherwise.
 * @private
 * @static
 */
function isMousePressed(keyCode) {
    if (Agtk.controllers.getKeyValue(0, keyCode) !== 0) {
        return true;
    }
    return false;
}
function createInputService(config, internal) {
    var self = {};
    var internalApi = internal || {};
    //////////////////////////////////////////////////////////////////////////////
    // Protected API
    //////////////////////////////////////////////////////////////////////////////
    internalApi.isCancellable = !!config.isCancellable;
    internalApi.pressedMouseKey = ~0;
    internalApi.pressedOperationKey = ~0;
    internalApi.isOperationKeyJustPressed = function (keyId) {
        var pressed = isKeyPressed(keyId);
        if (!(internalApi.pressedOperationKey & (1 << keyId)) && pressed) {
            internalApi.pressedOperationKey = (internalApi.pressedOperationKey & ~(1 << keyId)) | (pressed ? 1 << keyId : 0);
            return true;
        }
        internalApi.pressedOperationKey = (internalApi.pressedOperationKey & ~(1 << keyId)) | (pressed ? 1 << keyId : 0);
        return false;
    };
    internalApi.isMouseKeyJustPressed = function (keyCode) {
        var pressed = isMousePressed(keyCode);
        if (!(internalApi.pressedMouseKey & (1 << keyCode)) && pressed) {
            internalApi.pressedMouseKey = (internalApi.pressedMouseKey & ~(1 << keyCode)) | (pressed ? 1 << keyCode : 0);
            return true;
        }
        internalApi.pressedMouseKey = (internalApi.pressedMouseKey & ~(1 << keyCode)) | (pressed ? 1 << keyCode : 0);
        return false;
    };
    //////////////////////////////////////////////////////////////////////////////
    // Public API
    //////////////////////////////////////////////////////////////////////////////
    self.isCancellable = function () {
        return internalApi.isCancellable;
    };
    self.isKeyOkJustPressed = function () {
        return internalApi.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyOk);
    };
    self.isKeyCancelJustPressed = function () {
        return internalApi.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyCancel);
    };
    self.isKeyUpJustPressed = function () {
        return internalApi.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyUp);
    };
    self.isKeyDownJustPressed = function () {
        return internalApi.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyDown);
    };
    self.isMouseLeftClickJustPressed = function () {
        return internalApi.isMouseKeyJustPressed(Agtk.constants.controllers.ReservedKeyCodePc_LeftClick);
    };
    self.isMouseRightClickJustPressed = function () {
        return internalApi.isMouseKeyJustPressed(Agtk.constants.controllers.ReservedKeyCodePc_RightClick);
    };
    return self;
}
exports.createInputService = createInputService;


/***/ }),

/***/ "./src/utils/input/index.ts":
/*!**********************************!*\
  !*** ./src/utils/input/index.ts ***!
  \**********************************/
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
/**
 * Input module.
 *
 * @module input
 */
__exportStar(__webpack_require__(/*! ./create-input-service.function */ "./src/utils/input/create-input-service.function.ts"), exports);
__exportStar(__webpack_require__(/*! ./input-service-config.interface */ "./src/utils/input/input-service-config.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./input-service-protected-api.interface */ "./src/utils/input/input-service-protected-api.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./input-service.interface */ "./src/utils/input/input-service.interface.ts"), exports);


/***/ }),

/***/ "./src/utils/input/input-service-config.interface.ts":
/*!***********************************************************!*\
  !*** ./src/utils/input/input-service-config.interface.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * Exports input service configuration interface.
 *
 * @module input/input-service-config.interface
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/utils/input/input-service-protected-api.interface.ts":
/*!******************************************************************!*\
  !*** ./src/utils/input/input-service-protected-api.interface.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * Exports input service protected API.
 *
 * @module input/input-service-protected-api.interface
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/utils/input/input-service.interface.ts":
/*!****************************************************!*\
  !*** ./src/utils/input/input-service.interface.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * Exports input service interface.
 *
 * @module input/input-service.interface
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/utils/text-tag/index.ts":
/*!*************************************!*\
  !*** ./src/utils/text-tag/index.ts ***!
  \*************************************/
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
__exportStar(__webpack_require__(/*! ./parse-text-tag.function */ "./src/utils/text-tag/parse-text-tag.function.ts"), exports);
__exportStar(__webpack_require__(/*! ./parsed-text-tag.type */ "./src/utils/text-tag/parsed-text-tag.type.ts"), exports);
__exportStar(__webpack_require__(/*! ./text-tag-name.enum */ "./src/utils/text-tag/text-tag-name.enum.ts"), exports);


/***/ }),

/***/ "./src/utils/text-tag/parse-text-tag.function.ts":
/*!*******************************************************!*\
  !*** ./src/utils/text-tag/parse-text-tag.function.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseTextTag = void 0;
var text_tag_name_enum_1 = __webpack_require__(/*! ./text-tag-name.enum */ "./src/utils/text-tag/text-tag-name.enum.ts");
function parseTextTag(text, startIndex, context) {
    var candidateStartText = text.substring(startIndex, startIndex + 3);
    var index;
    var parsedTextTag;
    switch (candidateStartText) {
        case "\\".concat(text_tag_name_enum_1.TextTagName.Color, "["):
            index = text.indexOf(']', startIndex + 3);
            if (index >= 0) {
                var word = text.substring(startIndex + 3, index);
                var rgb = void 0;
                if (word.length == 0) {
                    rgb = context.defaultColor;
                }
                else if (word[0] == '#') {
                    if (word.length == 3 + 1) {
                        var v = parseInt(word.substring(1), 16);
                        rgb = [((v >> 8) & 0x0f) * 0x11, ((v >> 4) & 0x0f) * 0x11, ((v >> 0) & 0x0f) * 0x11];
                    }
                    else if (word.length == 6 + 1) {
                        var v = parseInt(word.substring(1), 16);
                        rgb = [(v >> 16) & 0xff, (v >> 8) & 0xff, (v >> 0) & 0xff];
                    }
                    else {
                        rgb = context.defaultColor;
                    }
                }
                else {
                    var list = word.split(',');
                    if (list.length < 3) {
                        rgb = context.defaultColor;
                    }
                    else {
                        rgb = [
                            Math.max(0, Math.min(255, getInt(list[0], 255))),
                            Math.max(0, Math.min(255, getInt(list[1], 255))),
                            Math.max(0, Math.min(255, getInt(list[2], 255)))
                        ];
                    }
                }
                parsedTextTag = { head: index + 1, tagName: text_tag_name_enum_1.TextTagName.Color, param: rgb };
            }
            break;
        case "\\".concat(text_tag_name_enum_1.TextTagName.Size, "["):
            index = text.indexOf(']', startIndex + 3);
            if (index >= 0) {
                var word = text.substring(startIndex + 3, index);
                var size = void 0;
                if (word.length == 0) {
                    size = context.defaultSize;
                }
                else if (word[0] == '+') {
                    size = Math.max(0, context.currentSize + getInt(word.substring(1), 0));
                }
                else if (word[0] == '-') {
                    size = Math.max(0, context.currentSize - getInt(word.substring(1), 0));
                }
                else {
                    size = Math.max(0, getInt(word, context.defaultSize));
                }
                parsedTextTag = { head: index + 1, tagName: text_tag_name_enum_1.TextTagName.Size, param: size };
            }
            break;
        default:
            break;
    }
    return parsedTextTag;
}
exports.parseTextTag = parseTextTag;
/**
 * Helper function for resolving an integer string to a number type.
 *
 * @param numStr The string to parse
 * @param defValue Fallback value to return if parse fails.
 * @returns The parsed number. If parsing fails, then the default value is
 * returned.
 */
function getInt(numStr, defValue) {
    var n = parseInt(numStr, 10);
    return isNaN(n) ? defValue : n;
}


/***/ }),

/***/ "./src/utils/text-tag/parsed-text-tag.type.ts":
/*!****************************************************!*\
  !*** ./src/utils/text-tag/parsed-text-tag.type.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/utils/text-tag/text-tag-name.enum.ts":
/*!**************************************************!*\
  !*** ./src/utils/text-tag/text-tag-name.enum.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * Exports text tag name enumerations.
 *
 * @module text-tag/text-tag-name.enum
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextTagName = void 0;
/**
 * Text tag name string enumeration.
 */
var TextTagName;
(function (TextTagName) {
    /**
     * Represents a 'color' text tag function.
     */
    TextTagName["Color"] = "C";
    /**
     * Represents a 'size' text tag function.
     */
    TextTagName["Size"] = "S";
})(TextTagName = exports.TextTagName || (exports.TextTagName = {}));


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

module.exports = JSON.parse('{"PLUGIN_NAME":"Show Choices","PLUGIN_DESCRIPTION":"Show choices on the screen","PLUGIN_AUTHOR":"Keiji Agusa; extended by kidthales <kidthales@agogpixel.com>","PLUGIN_HELP":"This plugin shows choies on the screen.","PARAMETER_BACKGROUND_DISPLAY_TYPE_NAME":"Background Display Type:","PARAMETER_BACKGROUND_DISPLAY_TYPE_CUSTOM_PARAM_GRAPHICS_NAME":"Graphics","PARAMETER_BACKGROUND_DISPLAY_TYPE_CUSTOM_PARAM_IMAGE_NAME":"Image","PARAMETER_BACKGROUND_DISPLAY_TYPE_CUSTOM_PARAM_NONE_NAME":"None","PARAMETER_BACKGROUND_IMAGE_NAME":"Background Image:","PARAMETER_BACKGROUND_COLOR_NAME":"Background Color:","PARAMETER_BACKGROUND_BORDER_COLOR_NAME":"Background Border Color:","PARAMETER_HIGHLIGHT_COLOR_NAME":"Highlight Color:","PARAMETER_FONT_NAME":"Font:","PARAMETER_HORIZONTAL_POSITION_NAME":"Horizontal Position:","PARAMETER_HORIZONTAL_POSITION_CUSTOM_PARAM_LEFT_NAME":"Left","PARAMETER_HORIZONTAL_POSITION_CUSTOM_PARAM_CENTER_NAME":"Center","PARAMETER_HORIZONTAL_POSITION_CUSTOM_PARAM_RIGHT_NAME":"Right","PARAMETER_VERTICAL_POSITION_NAME":"Vertical Position:","PARAMETER_VERTICAL_POSITION_CUSTOM_PARAM_TOP_NAME":"Top","PARAMETER_VERTICAL_POSITION_CUSTOM_PARAM_CENTER_NAME":"Center","PARAMETER_VERTICAL_POSITION_CUSTOM_PARAM_BOTTOM_NAME":"Bottom","PARAMETER_CANCEL_NAME":"Cancel:","PARAMETER_CANCEL_CUSTOM_PARAM_ENABLED_NAME":"Enabled","PARAMETER_CANCEL_CUSTOM_PARAM_DISABLED_NAME":"Disabled","ACTION_COMMAND_SHOW_CHOICES_NAME":"Show Choices","ACTION_COMMAND_SHOW_CHOICES_DESCRIPTION":"Show choices on the screen.","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_BACKGROUND_DISPLAY_TYPE_NAME":"Background Display Type:","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_BACKGROUND_DISPLAY_TYPE_CUSTOM_PARAM_GRAPHICS_NAME":"Graphics","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_BACKGROUND_DISPLAY_TYPE_CUSTOM_PARAM_IMAGE_NAME":"Image","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_BACKGROUND_DISPLAY_TYPE_CUSTOM_PARAM_NONE_NAME":"None","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_BACKGROUND_DISPLAY_TYPE_CUSTOM_PARAM_DEFAULT_NAME":"Default","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_BACKGROUND_IMAGE_NAME":"Background Image:","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_BACKGROUND_COLOR_NAME":"Background Color:","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_BACKGROUND_BORDER_COLOR_NAME":"Background Border Color:","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_HIGHLIGHT_COLOR_NAME":"Highlight Color:","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_FONT_NAME":"Font:","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_HORIZONTAL_POSITION_NAME":"Horizontal Position:","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_HORIZONTAL_POSITION_CUSTOM_PARAM_LEFT_NAME":"Left","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_HORIZONTAL_POSITION_CUSTOM_PARAM_CENTER_NAME":"Center","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_HORIZONTAL_POSITION_CUSTOM_PARAM_RIGHT_NAME":"Right","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_HORIZONTAL_POSITION_CUSTOM_PARAM_DEFAULT_NAME":"Default","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_VERTICAL_POSITION_NAME":"Vertical Position:","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_VERTICAL_POSITION_CUSTOM_PARAM_TOP_NAME":"Top","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_VERTICAL_POSITION_CUSTOM_PARAM_CENTER_NAME":"Center","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_VERTICAL_POSITION_CUSTOM_PARAM_BOTTOM_NAME":"Bottom","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_VERTICAL_POSITION_CUSTOM_PARAM_DEFAULT_NAME":"Default","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_CANCEL_NAME":"Cancel:","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_CANCEL_CUSTOM_PARAM_ENABLED_NAME":"Enabled","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_CANCEL_CUSTOM_PARAM_DISABLED_NAME":"Disabled","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_CANCEL_CUSTOM_PARAM_DEFAULT_NAME":"Default","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_VARIABLE_NAME":"Variable:","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_CHOICE_NAME":"Choice:","LINK_CONDITION_CHOICE_SELECTED_NAME":"Choice Selected","LINK_CONDITION_CHOICE_SELECTED_DESCRIPTION":"You can judge the choice you chose in the last action.\\nYou can also judge when the choice is canceled.","LINK_CONDITION_CHOICE_SELECTED_PARAMETER_CHOICE_NAME":"Choice:"}');

/***/ }),

/***/ "./src/locale/ja/data.json":
/*!*********************************!*\
  !*** ./src/locale/ja/data.json ***!
  \*********************************/
/***/ (function(module) {

module.exports = JSON.parse('{"PLUGIN_NAME":"選択肢の表示","PLUGIN_DESCRIPTION":"画面に選択肢を表示します。","PLUGIN_AUTHOR":"Keiji Agusa; extended by kidthales <kidthales@agogpixel.com>","PLUGIN_HELP":"簡易的な選択肢の表示を行います。","PARAMETER_BACKGROUND_DISPLAY_TYPE_NAME":"画像素材","ACTION_COMMAND_SHOW_CHOICES_NAME":"選択肢の表示","ACTION_COMMAND_SHOW_CHOICES_DESCRIPTION":"選択肢をを表示します。","ACTION_COMMAND_SHOW_CHOICES_PARAMETER_CHOICE_NAME":"選択肢:","LINK_CONDITION_CHOICE_SELECTED_NAME":"選択肢で判定","LINK_CONDITION_CHOICE_SELECTED_DESCRIPTION":"直前のアクションで選ばれた選択肢を判定できます。\\n選択肢がキャンセルされた場合も判定できます。","LINK_CONDITION_CHOICE_SELECTED_PARAMETER_CHOICE_NAME":"選択肢:"}');

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
/**
 * Special entry point for webpack that ensures IIFE compatability is maintained
 * when importing the built plugin into PGMMV.
 *
 * @module
 */
var create_plugin_function_1 = __webpack_require__(/*! ./create-plugin.function */ "./src/create-plugin.function.ts");
var plugin = (0, create_plugin_function_1.createPlugin)();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
return plugin;

}();
/******/ })()
;