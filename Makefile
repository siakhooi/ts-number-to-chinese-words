generateTestData:
	npx tsc
	node dist/generateTestData.js

test:
		npm test

pack:
	npx webpack build --entry ./dist/main/index.js \
										--output-path ./site \
										--output-filename number-to-chinese-words.bundle.js \
										--output-library-type window \
										--mode production 

clean:
	rm -rf dist coverage site/*.js

