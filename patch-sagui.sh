#!/bin/bash

DEV_SERVER="src/main/frontend/node_modules/sagui/lib/runner/development-server.js"
PATCH="setupHMR(saguiOptions).webpack), Object.assign(options, saguiOptions.devServer))"

echo "Patching sagui"
cp ${DEV_SERVER} "${DEV_SERVER}.backup"
cat ${DEV_SERVER} | sed "s|setupHMR(saguiOptions).webpack), options)|${PATCH}|" > patched-dev-server.js
mv patched-dev-server.js ${DEV_SERVER}
echo "done"
