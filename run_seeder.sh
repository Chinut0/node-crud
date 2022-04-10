#!/bin/bash
# ls
STAGE='Dev'
echo - Iniciando el proceso de importación en $STAGE

docker exec node_app_3_app /bin/bash -c "node ./database/seeders/rol.seed.js"
docker exec node_app_3_app /bin/bash -c "node ./database/seeders/user.seed.js"
docker exec node_app_3_app /bin/bash -c "node ./database/seeders/categoria.seed.js"

echo - Proceso terminado
