/**
 * sofa-component-name - v0.0.0 - Wed Jul 01 2015 11:53:56 GMT+0200 (CEST)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */

class ComponentName {
    constructor($window) {
        this.$window = $window;
        this.instVarOne = 1;
        this.instVarTwo = 2;
    }
    method1() {
        return this.instVarOne + this.instVarTwo;
    }
    spread(...params) {
        return params.map(v => v + this.instVarOne);
    }
    destruct({name, age}) {
        return `Hello, ${name}. You appear to be ${age} Year(s) old. Fantastic`;
    }
}

ComponentName.staticVarThree = 3;

// @SofaWrapper
