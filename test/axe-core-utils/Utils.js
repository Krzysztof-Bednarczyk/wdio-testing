const fs = require('fs');
const path = require('path');

const reportDirectory = './test-reports/';

const Utils = {
    createReport(results, filePath) {
        const report = [];

        results.violations.forEach((violation, index) => {
            report.push(
                `${index + 1}.Violation Description: ${violation.description}
Id: ${violation.id}
HelpUrl: ${violation.helpUrl}
Rule tags: ${violation.tags}
Severity: ${violation.impact}

${violation.nodes.map((value) => `${value.failureSummary.replace('\n', '')}\nAffected element: ${value.target}`).join("\n")}
------`
            );
        });

        if (report.length > 0) {
            if (!fs.existsSync(reportDirectory)) {
                fs.mkdirSync(reportDirectory);
            }
            
            const reportDate = new Date().toISOString().split("T")[0];
            const file = fs.createWriteStream(`${reportDirectory}${reportDate}-${this.getFileName(filePath)}-wcag.report.txt`);
            file.on('error', (err) => { throw err; });
            report.forEach((v) => { file.write(`${v.concat(',\n\n')}`); });
            file.end();
        }

        return report;
    },

    getFileName(filePath) {

        return path.basename(filePath).split(".")[0];
    },

};
export default Utils;