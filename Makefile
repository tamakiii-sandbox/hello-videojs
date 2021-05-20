.PHONY: help setup server icons clean

ICONS := \
	image/icon/icon-72x72.png \
	image/icon/icon-114x114.png \
	image/icon/icon-120x120.png \
	image/icon/icon-144x144.png

help:
	@cat $(firstword $(MAKEFILE_LIST))

setup: \
	node_modules

server:
	npx --no-install http-server -a 0.0.0.0 -p 80 .

node_modules:
	npm install --dev

icons: $(ICONS)

$(ICONS): | image/icon
	convert -size $(shell echo $@ | grep -oE '[0-9]+x[0-9]+') xc:white $@

image/icon: | image
	-mkdir $@

image:
	-mkdir $@

clean:
	rm -rf node_modyues
