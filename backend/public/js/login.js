"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogIn = void 0;
var react_1 = __importDefault(require("react"));
var LogIn = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("main", { className: "form-signin" },
            react_1.default.createElement("form", null,
                react_1.default.createElement("img", { className: "mb-4", src: "../assets/brand/bootstrap-logo.svg", alt: "", width: "72", height: "57" }),
                react_1.default.createElement("h1", { className: "h3 mb-3 fw-normal" }, "Please sign in"),
                react_1.default.createElement("div", { className: "form-floating" },
                    react_1.default.createElement("input", { type: "email", className: "form-control", id: "floatingInput", placeholder: "name@example.com" }),
                    react_1.default.createElement("label", { htmlFor: "floatingInput" }, "Email address")),
                react_1.default.createElement("div", { className: "form-floating" },
                    react_1.default.createElement("input", { type: "password", className: "form-control", id: "floatingPassword", placeholder: "Password" }),
                    react_1.default.createElement("label", { htmlFor: "floatingPassword" }, "Password")),
                react_1.default.createElement("div", { className: "checkbox mb-3" },
                    react_1.default.createElement("label", null,
                        react_1.default.createElement("input", { type: "checkbox", value: "remember-me" }, " Remember me"))),
                react_1.default.createElement("button", { className: "w-100 btn btn-lg btn-primary", type: "submit" }, "Sign in"),
                react_1.default.createElement("p", { className: "mt-5 mb-3 text-muted" }, "\u00A9 2017\u20132021")))));
};
exports.LogIn = LogIn;
