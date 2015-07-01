'use strict';
/* global sofa */

import ComponentName from '../src/sofaComponentName';

describe('sofaComponentName', () => {

    var componentName;

    beforeEach(() => {
        componentName = new ComponentName();
    });

    it('should be defined', () => {
        expect(componentName).toBeDefined();
    });
});
