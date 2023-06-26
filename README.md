# BookCart 
`This is basic project of playwright typescript with cucumber`

# SetUp
1. clone or downloan the project
2. Extract and open in the VS-code
3. `npm i` to install all the dependencies
4. `npx playwright install` to install the browser
5. `npm test` to execute the test

# FolderStructure

1. `src/pages` - All the pages
2. `src/test/features` - Write your features 
3. `src/test/steps` - Step definition goes here
4. `src/hooks/hooks.ts` - Browser setup and teardown logic
5. `src/hooks/pageFixture.ts` - Simple way to share the page objects to steps
6. `src/helper/env` - Multiple environment are handled
7. `src/helper/types` - To get environment code suggestions
8. `src/helper/report` - To generate the report
9. `src/helper/utils` - contains logger and test-data
10. `cucumber.json` - One file do all the magic
11. `package.json` - contain all the dependencies 