generateTestData:
	npx tsc
	node dist/generateTestData.js

test:
		npm test
