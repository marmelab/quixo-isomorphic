.PHONY: default install start test

.DEFAULT_GOAL := help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install project's dependencies
	docker-compose run --rm \
		quixo-react-next npm install

start: ## Start project
	docker-compose up -d

test: ## Launch the project's tests
	@echo "Launch the tests"

stop:
	docker-compose down
