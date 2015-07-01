
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
