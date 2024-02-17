show dbs
mongo
show dbs
mongo --eval "db.getSiblingDB('admin').runCommand({ listDatabases: 1 })"
