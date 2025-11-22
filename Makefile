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
	rm -rf dist coverage site/*.js tmp
	rm -rf .qlty/logs .qlty/out .qlty/plugin_cachedir .qlty/results .qlty/sources

build:
	npm install
	npm test
	.github/scripts/run-webpack.sh

release:
	# update package.json
	scripts/create-release.sh
