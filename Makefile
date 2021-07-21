# This is a makefile to streamline running of the app

build:
	yarn && yarn build

run: build
	serve -s build

docs:
	yarn docs

add:
	git add .

commit:
	git commit

git: add commit