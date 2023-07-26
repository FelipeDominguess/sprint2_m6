// build.sh
#!/usr/bin/env bash
# exit on error
chmod +x sprint2/backend/build.sh

set -o errexit

npm install
yarn run build
npm run typeorm migration:run -- -d dist/data-source