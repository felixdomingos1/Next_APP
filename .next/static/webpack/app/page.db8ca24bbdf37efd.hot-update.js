"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/form.tsx":
/*!*****************************!*\
  !*** ./components/form.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RegisterForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Grid,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Grid,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Grid,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Grid,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Grid,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _form_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.css */ \"(app-pages-browser)/./components/form.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction RegisterForm() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\",\n        confirmPassword: \"\"\n    });\n    const [errors, setErrs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\",\n        confirmPassword: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setData({\n            ...data,\n            [name]: value\n        });\n    };\n    const validateForm = ()=>{\n        let isValid = true;\n        const updatedErrors = {\n            ...errors\n        };\n        // Email validation using a simple Regex\n        const emailvalidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;\n        if (!emailvalidation.test(data.email)) {\n            updatedErrors.email = \"Please enter a valid email address\";\n            isValid = false;\n        } else {\n            updatedErrors.email = \"\";\n        }\n        // validation the password length\n        if (data.password.length < 8) {\n            updatedErrors.password = \"Password must be at least 8 characters\";\n            isValid = false;\n        } else {\n            updatedErrors.password = \"\";\n        }\n        // Password and Confirm Password match validation\n        if (data.password !== data.confirmPassword) {\n            updatedErrors.confirmPassword = \"Passwords do not match\";\n            isValid = false;\n        } else {\n            updatedErrors.confirmPassword = \"\";\n        }\n        setErrs(updatedErrors);\n        return isValid;\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (validateForm()) {\n            const apiUrl = \"http://localhost:5000/api/register\";\n            axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(apiUrl, data).then((response)=>{\n                alert(\"User created\");\n                setData({\n                    email: \"\",\n                    password: \"\",\n                    confirmPassword: \"\"\n                });\n            }).catch((error)=>{\n                alert(\"Error sending data: \" + error.response.data.errors[0].error);\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    variant: \"h4\",\n                    children: \"Registration Form\"\n                }, void 0, false, {\n                    fileName: \"/home/fe/Downloads/OnlyCoders-Tasks/Task2/components/form.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/home/fe/Downloads/OnlyCoders-Tasks/Task2/components/form.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        spacing: 1,\n                        container: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                item: true,\n                                xs: 12,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    type: \"email\",\n                                    id: \"email\",\n                                    name: \"email\",\n                                    label: \"Email\",\n                                    value: data.email,\n                                    onChange: handleChange,\n                                    error: Boolean(errors.email),\n                                    helperText: errors.email,\n                                    variant: \"outlined\",\n                                    fullWidth: true,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/home/fe/Downloads/OnlyCoders-Tasks/Task2/components/form.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/fe/Downloads/OnlyCoders-Tasks/Task2/components/form.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                item: true,\n                                xs: 8,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    type: \"password\",\n                                    id: \"password\",\n                                    name: \"password\",\n                                    label: \"Password\",\n                                    variant: \" \",\n                                    value: data.password,\n                                    onChange: handleChange,\n                                    required: true,\n                                    fullWidth: true,\n                                    error: Boolean(errors.password),\n                                    helperText: errors.password\n                                }, void 0, false, {\n                                    fileName: \"/home/fe/Downloads/OnlyCoders-Tasks/Task2/components/form.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/fe/Downloads/OnlyCoders-Tasks/Task2/components/form.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                item: true,\n                                xs: 5,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    type: \"password\",\n                                    id: \"confirmPassword\",\n                                    name: \"confirmPassword\",\n                                    label: \"Confirm Password\",\n                                    fullWidth: true,\n                                    variant: \"outlined\",\n                                    value: data.confirmPassword,\n                                    onChange: handleChange,\n                                    required: true,\n                                    error: Boolean(errors.confirmPassword),\n                                    helperText: errors.confirmPassword\n                                }, void 0, false, {\n                                    fileName: \"/home/fe/Downloads/OnlyCoders-Tasks/Task2/components/form.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/fe/Downloads/OnlyCoders-Tasks/Task2/components/form.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                item: true,\n                                xs: 12,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    type: \"submit\",\n                                    variant: \"contained\",\n                                    color: \"secondary\",\n                                    children: \"Create\"\n                                }, void 0, false, {\n                                    fileName: \"/home/fe/Downloads/OnlyCoders-Tasks/Task2/components/form.tsx\",\n                                    lineNumber: 136,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/fe/Downloads/OnlyCoders-Tasks/Task2/components/form.tsx\",\n                                lineNumber: 135,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/fe/Downloads/OnlyCoders-Tasks/Task2/components/form.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/fe/Downloads/OnlyCoders-Tasks/Task2/components/form.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/fe/Downloads/OnlyCoders-Tasks/Task2/components/form.tsx\",\n            lineNumber: 82,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/fe/Downloads/OnlyCoders-Tasks/Task2/components/form.tsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n_s(RegisterForm, \"4IABCi7BMEMZnTB1wubB4aFU1us=\");\n_c = RegisterForm;\nvar _c;\n$RefreshReg$(_c, \"RegisterForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVpQztBQUNQO0FBQ3VEO0FBRTlEO0FBRUosU0FBU087O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQztRQUMvQlUsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGlCQUFpQjtJQUNuQjtJQUVBLE1BQU0sQ0FBQ0MsUUFBUUMsUUFBUSxHQUFHZCwrQ0FBUUEsQ0FBQztRQUNqQ1UsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGlCQUFpQjtJQUNuQjtJQUVBLE1BQU1HLGVBQWUsQ0FBQ0M7UUFDcEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ2hDVixRQUFRO1lBQ04sR0FBR0QsSUFBSTtZQUNQLENBQUNTLEtBQUssRUFBRUM7UUFDVjtJQUNGO0lBQ0EsTUFBTUUsZUFBZTtRQUNuQixJQUFJQyxVQUFVO1FBQ2QsTUFBTUMsZ0JBQWdCO1lBQUUsR0FBR1QsTUFBTTtRQUFDO1FBQ2xDLHdDQUF3QztRQUN4QyxNQUFNVSxrQkFBa0I7UUFDeEIsSUFBSSxDQUFDQSxnQkFBZ0JDLElBQUksQ0FBQ2hCLEtBQUtFLEtBQUssR0FBRztZQUNyQ1ksY0FBY1osS0FBSyxHQUFHO1lBQ3RCVyxVQUFVO1FBQ1osT0FBTztZQUNMQyxjQUFjWixLQUFLLEdBQUc7UUFDeEI7UUFFQSxpQ0FBaUM7UUFDakMsSUFBSUYsS0FBS0csUUFBUSxDQUFDYyxNQUFNLEdBQUcsR0FBRztZQUM1QkgsY0FBY1gsUUFBUSxHQUFHO1lBQ3pCVSxVQUFVO1FBQ1osT0FBTztZQUNMQyxjQUFjWCxRQUFRLEdBQUc7UUFDM0I7UUFFQSxpREFBaUQ7UUFDakQsSUFBSUgsS0FBS0csUUFBUSxLQUFLSCxLQUFLSSxlQUFlLEVBQUU7WUFDMUNVLGNBQWNWLGVBQWUsR0FBRztZQUNoQ1MsVUFBVTtRQUNaLE9BQU87WUFDTEMsY0FBY1YsZUFBZSxHQUFHO1FBQ2xDO1FBRUFFLFFBQVFRO1FBQ1IsT0FBT0Q7SUFDVDtJQUVBLE1BQU1LLGVBQWUsQ0FBQ1Y7UUFDcEJBLEVBQUVXLGNBQWM7UUFDaEIsSUFBSVAsZ0JBQWdCO1lBQ2xCLE1BQU1RLFNBQVM7WUFFZjNCLDZDQUFLQSxDQUFDNEIsSUFBSSxDQUFDRCxRQUFRcEIsTUFDaEJzQixJQUFJLENBQUMsQ0FBQ0M7Z0JBQ0xDLE1BQU07Z0JBQ052QixRQUFRO29CQUNOQyxPQUFPO29CQUNQQyxVQUFVO29CQUNWQyxpQkFBaUI7Z0JBQ25CO1lBQ0YsR0FDQ3FCLEtBQUssQ0FBQyxDQUFDQztnQkFDTkYsTUFBTSx5QkFBd0JFLE1BQU1ILFFBQVEsQ0FBQ3ZCLElBQUksQ0FBQ0ssTUFBTSxDQUFDLEVBQUUsQ0FBQ3FCLEtBQUs7WUFDbkU7UUFDSjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2YsNEVBQUM5QixzSEFBU0E7OzhCQUNSLDhEQUFDRixzSEFBVUE7b0JBQUNpQyxTQUFROzhCQUFLOzs7Ozs7OEJBQ3pCLDhEQUFDQzs7Ozs7OEJBQ0QsOERBQUNDO29CQUFLQyxVQUFVZDs4QkFDZCw0RUFBQ3hCLHNIQUFJQTt3QkFBRXVDLFNBQVM7d0JBQUdDLFNBQVM7OzBDQUMxQiw4REFBQ3hDLHNIQUFJQTtnQ0FBQ3lDLElBQUk7Z0NBQUNDLElBQUk7MENBQ2IsNEVBQUN2QyxzSEFBU0E7b0NBQ1J3QyxNQUFLO29DQUNMQyxJQUFHO29DQUNIN0IsTUFBSztvQ0FDTDhCLE9BQU07b0NBQ043QixPQUFPVixLQUFLRSxLQUFLO29DQUNqQnNDLFVBQVVqQztvQ0FDVm1CLE9BQU9lLFFBQVFwQyxPQUFPSCxLQUFLO29DQUMzQndDLFlBQVlyQyxPQUFPSCxLQUFLO29DQUN4QjJCLFNBQVE7b0NBQ1JjLFNBQVM7b0NBQ1RDLFFBQVE7Ozs7Ozs7Ozs7OzBDQUlaLDhEQUFDbEQsc0hBQUlBO2dDQUFDeUMsSUFBSTtnQ0FBQ0MsSUFBSTswQ0FDYiw0RUFBQ3ZDLHNIQUFTQTtvQ0FDUndDLE1BQUs7b0NBQ0xDLElBQUc7b0NBQ0g3QixNQUFLO29DQUNMOEIsT0FBTTtvQ0FDTlYsU0FBUTtvQ0FDUm5CLE9BQU9WLEtBQUtHLFFBQVE7b0NBQ3BCcUMsVUFBVWpDO29DQUNWcUMsUUFBUTtvQ0FDUkQsU0FBUztvQ0FDVGpCLE9BQU9lLFFBQVFwQyxPQUFPRixRQUFRO29DQUM5QnVDLFlBQVlyQyxPQUFPRixRQUFROzs7Ozs7Ozs7OzswQ0FJL0IsOERBQUNULHNIQUFJQTtnQ0FBQ3lDLElBQUk7Z0NBQUVDLElBQUk7MENBQ2QsNEVBQUN2QyxzSEFBU0E7b0NBQ1J3QyxNQUFLO29DQUNMQyxJQUFHO29DQUNIN0IsTUFBSztvQ0FDTDhCLE9BQU07b0NBQ05JLFNBQVM7b0NBQ1RkLFNBQVE7b0NBQ1JuQixPQUFPVixLQUFLSSxlQUFlO29DQUMzQm9DLFVBQVVqQztvQ0FDVnFDLFFBQVE7b0NBQ1JsQixPQUFPZSxRQUFRcEMsT0FBT0QsZUFBZTtvQ0FDckNzQyxZQUFZckMsT0FBT0QsZUFBZTs7Ozs7Ozs7Ozs7MENBSXRDLDhEQUFDVixzSEFBSUE7Z0NBQUN5QyxJQUFJO2dDQUFDQyxJQUFJOzBDQUNiLDRFQUFDekMsc0hBQU1BO29DQUFDMEMsTUFBSztvQ0FBU1IsU0FBUTtvQ0FBWWdCLE9BQU07OENBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVN4RTtHQXhJd0I5QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Zvcm0udHN4PzhlZDIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEdyaWQgLCBCdXR0b24sIFR5cG9ncmFwaHksIFRleHRGaWVsZCwgIENvbnRhaW5lciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuXG5pbXBvcnQgJy4vZm9ybS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyRm9ybSgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgY29uZmlybVBhc3N3b3JkOiAnJyxcbiAgfSk7XG5cbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyc10gPSB1c2VTdGF0ZSh7XG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgICBjb25maXJtUGFzc3dvcmQ6ICcnLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIHNldERhdGEoe1xuICAgICAgLi4uZGF0YSxcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IHZhbGlkYXRlRm9ybSA9ICgpID0+IHtcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XG4gICAgY29uc3QgdXBkYXRlZEVycm9ycyA9IHsgLi4uZXJyb3JzIH07XG4gICAgLy8gRW1haWwgdmFsaWRhdGlvbiB1c2luZyBhIHNpbXBsZSBSZWdleFxuICAgIGNvbnN0IGVtYWlsdmFsaWRhdGlvbiA9IC9eW2EtekEtWjAtOS5fLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Miw0fSQvO1xuICAgIGlmICghZW1haWx2YWxpZGF0aW9uLnRlc3QoZGF0YS5lbWFpbCkpIHtcbiAgICAgIHVwZGF0ZWRFcnJvcnMuZW1haWwgPSAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcyc7XG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZWRFcnJvcnMuZW1haWwgPSAnJztcbiAgICB9XG5cbiAgICAvLyB2YWxpZGF0aW9uIHRoZSBwYXNzd29yZCBsZW5ndGhcbiAgICBpZiAoZGF0YS5wYXNzd29yZC5sZW5ndGggPCA4KSB7XG4gICAgICB1cGRhdGVkRXJyb3JzLnBhc3N3b3JkID0gJ1Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzJztcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlZEVycm9ycy5wYXNzd29yZCA9ICcnO1xuICAgIH1cblxuICAgIC8vIFBhc3N3b3JkIGFuZCBDb25maXJtIFBhc3N3b3JkIG1hdGNoIHZhbGlkYXRpb25cbiAgICBpZiAoZGF0YS5wYXNzd29yZCAhPT0gZGF0YS5jb25maXJtUGFzc3dvcmQpIHtcbiAgICAgIHVwZGF0ZWRFcnJvcnMuY29uZmlybVBhc3N3b3JkID0gJ1Bhc3N3b3JkcyBkbyBub3QgbWF0Y2gnO1xuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVkRXJyb3JzLmNvbmZpcm1QYXNzd29yZCA9ICcnO1xuICAgIH1cblxuICAgIHNldEVycnModXBkYXRlZEVycm9ycyk7XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHZhbGlkYXRlRm9ybSgpKSB7XG4gICAgICBjb25zdCBhcGlVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9yZWdpc3Rlcic7XG5cbiAgICAgIGF4aW9zLnBvc3QoYXBpVXJsLCBkYXRhKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBhbGVydChcIlVzZXIgY3JlYXRlZFwiKTtcbiAgICAgICAgICBzZXREYXRhKHtcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogJycsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBhbGVydCgnRXJyb3Igc2VuZGluZyBkYXRhOiAnKyBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yc1swXS5lcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICA8Q29udGFpbmVyID5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlJlZ2lzdHJhdGlvbiBGb3JtPC9UeXBvZ3JhcGh5PlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPEdyaWQgIHNwYWNpbmc9ezF9IGNvbnRhaW5lcj5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCIgXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIiBcbiAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGVycm9yPXtCb29sZWFuKGVycm9ycy5lbWFpbCl9XG4gICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycy5lbWFpbH1cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezh9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCIgXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2RhdGEucGFzc3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBlcnJvcj17Qm9vbGVhbihlcnJvcnMucGFzc3dvcmQpfVxuICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnMucGFzc3dvcmR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgIDxHcmlkIGl0ZW0gIHhzPXs1fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgaWQ9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJDb25maXJtIFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmNvbmZpcm1QYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgZXJyb3I9e0Jvb2xlYW4oZXJyb3JzLmNvbmZpcm1QYXNzd29yZCl9XG4gICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycy5jb25maXJtUGFzc3dvcmR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDcmVhdGVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9mb3JtPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwiR3JpZCIsIkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJUZXh0RmllbGQiLCJDb250YWluZXIiLCJSZWdpc3RlckZvcm0iLCJkYXRhIiwic2V0RGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJlcnJvcnMiLCJzZXRFcnJzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInZhbGlkYXRlRm9ybSIsImlzVmFsaWQiLCJ1cGRhdGVkRXJyb3JzIiwiZW1haWx2YWxpZGF0aW9uIiwidGVzdCIsImxlbmd0aCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYXBpVXJsIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImFsZXJ0IiwiY2F0Y2giLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInZhcmlhbnQiLCJiciIsImZvcm0iLCJvblN1Ym1pdCIsInNwYWNpbmciLCJjb250YWluZXIiLCJpdGVtIiwieHMiLCJ0eXBlIiwiaWQiLCJsYWJlbCIsIm9uQ2hhbmdlIiwiQm9vbGVhbiIsImhlbHBlclRleHQiLCJmdWxsV2lkdGgiLCJyZXF1aXJlZCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/form.tsx\n"));

/***/ })

});