.PHONY: default install start test

.DEFAULT_GOAL := help

export UID = $(shell id -u)
export GID = $(shell id -g)

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install project's dependencies
	docker-compose run --rm \
		quixo-react-next yarn

start: ## Start project
	docker-compose up -d

test: ## Launch the project's tests
	docker-compose run --rm \
		quixo-react-next yarn test

lint:
	docker-compose run --rm \
		quixo-react-next yarn lint

stop:
	docker-compose down
