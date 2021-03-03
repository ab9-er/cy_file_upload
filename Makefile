clean:
	find . -path "*report/mochawesome-report" | xargs rm -rf
	find . -path "*screenshots/*.png" | xargs rm -rf
	find . -name "*.mp4*" | xargs rm -rf

build:
	docker build -t transfer .

run-dev:
	docker run -it -v ${PWD}:/app --entrypoint sh transfer:latest

run:
	docker run --env-file $${ENV_FILE} -v ${PWD}/cypress/screenshots:/app/cypress/screenshots -v ${PWD}/cypress/videos:/app/cypress/videos -v ${PWD}/cypress/report:/app/cypress/report transfer:latest
