const moment = require("moment");

console.log(" ");
console.log("------ 1st ------");
console.log(moment().add(2, 'days').format('yyyy-MMM-DD'));
console.log(moment().add(2, 'days').add(6, 'weeks').format('yyyy-MMM-DD'));
console.log(" ");
console.log("------ 2nd ------");
console.log(moment().add(3, 'days').add(6, 'weeks').format('yyyy-MMM-DD'));
console.log(moment().add(2, 'days').add(6+4, 'weeks').format('yyyy-MMM-DD'));
console.log(" ");
console.log("------ 3rd ------");
console.log(moment().add(3, 'days').add(6+4, 'weeks').format('yyyy-MMM-DD'));
console.log(moment().add(2, 'days').add(6+4+3, 'weeks').format('yyyy-MMM-DD'));
console.log(" ");
console.log("------ 4th ------");
console.log(moment().add(3, 'days').add(6+4+3, 'weeks').format('yyyy-MMM-DD'));
console.log(moment().add(2, 'days').add(6+4+3+3, 'weeks').format('yyyy-MMM-DD'));