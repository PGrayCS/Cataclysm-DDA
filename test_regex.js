const regex = /(\n|^)#### Summary\s+`{0,3}(SUMMARY:\s+)?(None|((Features|Content|Interface|Mods|Balance|Bugfixes|Performance|Infrastructure|Build|I18N) +".+"))`{0,3}\s*(\n|$)/i;

const commit_msg = `Fix typos in HELP_MENU.md documentation

#### Summary
Bugfixes "Fixes spelling errors in HELP_MENU.md"

Corrects two spelling errors in doc/JSON/HELP_MENU.md: 'respresents' to 'represents' and 'seperated' to 'separated'.`;

console.log(regex.test(commit_msg));
