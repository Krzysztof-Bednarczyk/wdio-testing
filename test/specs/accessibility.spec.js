import { expect } from 'chai';
import Utils from '../axe-core-utils/Utils';

const axe = require('axe-core');

describe('When on test website', () => {
    beforeEach(() => { 
        browser.url('http://zero.webappsecurity.com');
    });

    it('I can test accessibility', () => {

        // inject the script
        browser.execute(axe.source);

        // run inside browser and get results
        const axeResults = browser.executeAsync((options, done) => {
            axe.run(options, (err, results) => {
                if (err) done(err);
                done(results);
            });
        }, {});

        // assert there are no violations
        expect(axeResults.violations).to.have.length(5);;

        // Create accessibility report
        Utils.createReport(axeResults, __filename);
    });

});