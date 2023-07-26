


set -o errexit


yarn build
yarn typeorm migration:run -- -d dist/data-source