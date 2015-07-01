/**
 * sofa-component-name - v0.0.0 - Wed Jul 01 2015 11:53:56 GMT+0200 (CEST)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (sofa, document, undefined) {
System.register([], function (_export) {
    'use strict';

    var ComponentName;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            ComponentName = (function () {
                function ComponentName($window) {
                    _classCallCheck(this, ComponentName);

                    this.$window = $window;
                    this.instVarOne = 1;
                    this.instVarTwo = 2;
                }

                _createClass(ComponentName, [{
                    key: 'method1',
                    value: function method1() {
                        return this.instVarOne + this.instVarTwo;
                    }
                }, {
                    key: 'spread',
                    value: function spread() {
                        var _this = this;

                        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
                            params[_key] = arguments[_key];
                        }

                        return params.map(function (v) {
                            return v + _this.instVarOne;
                        });
                    }
                }, {
                    key: 'destruct',
                    value: function destruct(_ref) {
                        var name = _ref.name;
                        var age = _ref.age;

                        return 'Hello, ' + name + '. You appear to be ' + age + ' Year(s) old. Fantastic';
                    }
                }]);

                return ComponentName;
            })();

            ComponentName.staticVarThree = 3;

            if (sofa) {
                sofa.define('sofa.ComponentName', function ($window) {
                    return new ComponentName($window);
                });
            }
        }
    };
});}(sofa, document));
