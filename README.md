# default-express-ts
Express Typescript default Project Form

# 디비 env 
MYSQL_USERNAME=<br>
MYSQL_PASSWORD=<br>
MYSQL_DATABASE=<br>
MYSQL_HOST=<br>
MYSQL_PORT=<br>

# 스키마 생성
ts-node ./src/migrations/create-schema.ts

# 테이블 생성
ts-node ./src/migrations/create-table.ts
