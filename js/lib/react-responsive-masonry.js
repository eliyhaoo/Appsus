/*!
 * react-responsive-masonry v2.2.0 - https://github.com/cedricdelpoux/react-responsive-masonry#readme
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("prop-types"), require("react"));
    else if (typeof define === 'function' && define.amd)
        define(["prop-types", "react"], factory);
    else if (typeof exports === 'object')
        exports["ReactResponsiveMasonry"] = factory(require("prop-types"), require("react"));
    else
        root["ReactResponsiveMasonry"] = factory(root["PropTypes"], root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__) {
    return /******/ (function(modules) { // webpackBootstrap
            /******/ // The module cache
            /******/
            var installedModules = {};
            /******/
            /******/ // The require function
            /******/
            function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/
                if (installedModules[moduleId]) {
                    /******/
                    return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/
                var module = installedModules[moduleId] = {
                    /******/
                    i: moduleId,
                    /******/
                    l: false,
                    /******/
                    exports: {}
                    /******/
                };
                /******/
                /******/ // Execute the module function
                /******/
                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/
                module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/
                return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/
            __webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/
            __webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/
            __webpack_require__.d = function(exports, name, getter) {
                /******/
                if (!__webpack_require__.o(exports, name)) {
                    /******/
                    Object.defineProperty(exports, name, { enumerable: true, get: getter });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // define __esModule on exports
            /******/
            __webpack_require__.r = function(exports) {
                /******/
                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    /******/
                    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                    /******/
                }
                /******/
                Object.defineProperty(exports, '__esModule', { value: true });
                /******/
            };
            /******/
            /******/ // create a fake namespace object
            /******/ // mode & 1: value is a module id, require it
            /******/ // mode & 2: merge all properties of value into the ns
            /******/ // mode & 4: return value when already ns object
            /******/ // mode & 8|1: behave like require
            /******/
            __webpack_require__.t = function(value, mode) {
                /******/
                if (mode & 1) value = __webpack_require__(value);
                /******/
                if (mode & 8) return value;
                /******/
                if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
                /******/
                var ns = Object.create(null);
                /******/
                __webpack_require__.r(ns);
                /******/
                Object.defineProperty(ns, 'default', { enumerable: true, value: value });
                /******/
                if (mode & 2 && typeof value != 'string')
                    for (var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
                /******/
                return ns;
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/
            __webpack_require__.n = function(module) {
                /******/
                var getter = module && module.__esModule ?
                    /******/
                    function getDefault() { return module['default']; } :
                    /******/
                    function getModuleExports() { return module; };
                /******/
                __webpack_require__.d(getter, 'a', getter);
                /******/
                return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/
            __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
            /******/
            /******/ // __webpack_public_path__
            /******/
            __webpack_require__.p = "";
            /******/
            /******/
            /******/ // Load entry module and return exports
            /******/
            return __webpack_require__(__webpack_require__.s = 2);
            /******/
        })
        /************************************************************************/
        /******/
        ([
            /* 0 */
            /***/
            (function(module, exports) {

                module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

                /***/
            }),
            /* 1 */
            /***/
            (function(module, exports) {

                module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

                /***/
            }),
            /* 2 */
            /***/
            (function(module, exports, __webpack_require__) {

                module.exports = __webpack_require__(3);


                /***/
            }),
            /* 3 */
            /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                // ESM COMPAT FLAG
                __webpack_require__.r(__webpack_exports__);

                // EXPORTS
                __webpack_require__.d(__webpack_exports__, "ResponsiveMasonry", function() { return /* reexport */ ResponsiveMasonry; });

                // EXTERNAL MODULE: external {"root":"PropTypes","commonjs2":"prop-types","commonjs":"prop-types","amd":"prop-types"}
                var external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_ = __webpack_require__(0);
                var external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default = /*#__PURE__*/ __webpack_require__.n(external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_);

                // EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
                var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(1);
                var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/ __webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

                // CONCATENATED MODULE: ./src/Masonry/index.js
                function _extends() { _extends = Object.assign || function(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

                function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype);
                    subClass.prototype.constructor = subClass;
                    _setPrototypeOf(subClass, superClass); }

                function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




                var Masonry_Masonry = /*#__PURE__*/ function(_React$Component) {
                    _inheritsLoose(Masonry, _React$Component);

                    function Masonry() {
                        return _React$Component.apply(this, arguments) || this;
                    }

                    var _proto = Masonry.prototype;

                    _proto.getColumns = function getColumns() {
                        var _this$props = this.props,
                            children = _this$props.children,
                            columnsCount = _this$props.columnsCount;
                        var columns = Array.from({
                            length: columnsCount
                        }, function() {
                            return [];
                        });
                        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children.forEach(children, function(child, index) {
                            if (child && external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(child)) {
                                columns[index % columnsCount].push(child);
                            }
                        });
                        return columns;
                    };

                    _proto.renderColumns = function renderColumns() {
                        var gutter = this.props.gutter;
                        return this.getColumns().map(function(column, i) {
                            return /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
                                key: i,
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    alignContent: "stretch",
                                    flex: 1,
                                    width: 0,
                                    gap: gutter
                                }
                            }, column.map(function(item) {
                                return item;
                            }));
                        });
                    };

                    _proto.render = function render() {
                        var _this$props2 = this.props,
                            gutter = _this$props2.gutter,
                            className = _this$props2.className,
                            style = _this$props2.style;
                        return /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
                            style: _extends({
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignContent: "stretch",
                                boxSizing: "border-box",
                                width: "100%",
                                gap: gutter
                            }, style),
                            className: className
                        }, this.renderColumns());
                    };

                    return Masonry;
                }(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

                Masonry_Masonry.propTypes = {
                    children: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.oneOfType([external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.arrayOf(external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.node), external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.node]).isRequired,
                    columnsCount: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number,
                    gutter: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.string,
                    className: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.string,
                    style: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.object
                };
                Masonry_Masonry.defaultProps = {
                    columnsCount: 3,
                    gutter: "0",
                    className: null,
                    style: {}
                };
                /* harmony default export */
                var src_Masonry = (Masonry_Masonry);
                // CONCATENATED MODULE: ./src/ResponsiveMasonry/index.js


                var DEFAULT_COLUMNS_COUNT = 1;

                var ResponsiveMasonry_useHasMounted = function useHasMounted() {
                    var _useState = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false),
                        hasMounted = _useState[0],
                        setHasMounted = _useState[1];

                    Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function() {
                        setHasMounted(true);
                    }, []);
                    return hasMounted;
                };

                var ResponsiveMasonry_useWindowWidth = function useWindowWidth() {
                    var hasMounted = ResponsiveMasonry_useHasMounted();

                    var _useState2 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(0),
                        width = _useState2[0],
                        setWidth = _useState2[1];

                    var handleResize = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(function() {
                        if (!hasMounted) return;
                        setWidth(window.innerWidth);
                    }, [hasMounted]);
                    Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function() {
                        if (hasMounted) {
                            window.addEventListener("resize", handleResize);
                            handleResize();
                            return function() {
                                return window.removeEventListener("resize", handleResize);
                            };
                        }
                    }, [hasMounted, handleResize]);
                    return width;
                };

                var ResponsiveMasonry_MasonryResponsive = function MasonryResponsive(_ref) {
                    var columnsCountBreakPoints = _ref.columnsCountBreakPoints,
                        children = _ref.children,
                        className = _ref.className,
                        style = _ref.style;
                    var windowWidth = ResponsiveMasonry_useWindowWidth();
                    var columnsCount = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useMemo"])(function() {
                        var breakPoints = Object.keys(columnsCountBreakPoints).sort(function(a, b) {
                            return a - b;
                        });
                        var count = breakPoints.length > 0 ? columnsCountBreakPoints[breakPoints[0]] : DEFAULT_COLUMNS_COUNT;
                        breakPoints.forEach(function(breakPoint) {
                            if (breakPoint < windowWidth) {
                                count = columnsCountBreakPoints[breakPoint];
                            }
                        });
                        return count;
                    }, [windowWidth, columnsCountBreakPoints]);
                    return /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
                        className: className,
                        style: style
                    }, external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children.map(children, function(child, index) {
                        return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.cloneElement(child, {
                            key: index,
                            columnsCount: columnsCount
                        });
                    }));
                };

                ResponsiveMasonry_MasonryResponsive.propTypes = {
                    children: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.oneOfType([external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.arrayOf(external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.node), external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.node]).isRequired,
                    columnsCountBreakPoints: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.object,
                    className: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.string,
                    style: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.object
                };
                ResponsiveMasonry_MasonryResponsive.defaultProps = {
                    columnsCountBreakPoints: {
                        350: 1,
                        750: 2,
                        900: 3
                    },
                    className: null,
                    style: null
                };
                /* harmony default export */
                var ResponsiveMasonry = (ResponsiveMasonry_MasonryResponsive);
                // CONCATENATED MODULE: ./src/index.js


                /* harmony default export */
                var src = __webpack_exports__["default"] = (src_Masonry);


                /***/
            })
            /******/
        ])["default"];
});