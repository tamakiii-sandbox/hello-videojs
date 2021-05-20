.PHONY: help setup server clean

help:
	@cat $(firstword $(MAKEFILE_LIST))

setup: \
	node_modules

server:
	npx --no-install http-server -a 0.0.0.0 -p 80 .

node_modules:
	npm install --dev

clean:
	rm -rf node_modyues
