const regex = /(\n|^)#### Summary\s+`{0,3}(SUMMARY:\s+)?(None|((Features|Content|Interface|Mods|Balance|Bugfixes|Performance|Infrastructure|Build|I18N) +".+"))`{0,3}\s*(\n|$)/i;

const pr_desc1 = `#### Summary
SUMMARY: None

This submission fixes a spelling error in the documentation file \`doc/TESTING_YOUR_CHANGES.md\` where "respository" was corrected to "repository".`;

const pr_desc2 = `This submission fixes a spelling error in the documentation file \`doc/TESTING_YOUR_CHANGES.md\` where "respository" was corrected to "repository".

---
*PR created automatically by Jules for task [1028953942906292928](https://jules.google.com/task/1028953942906292928) started by @PGrayCS*`;

const pr_desc3 = `#### Summary
SUMMARY: Bugfixes "Fixed spelling error in doc/TESTING_YOUR_CHANGES.md"

This submission fixes a spelling error...`;


console.log("1:", regex.test(pr_desc1));
console.log("2:", regex.test(pr_desc2));
console.log("3:", regex.test(pr_desc3));
