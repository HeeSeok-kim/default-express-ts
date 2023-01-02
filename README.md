# default-express-ts
Express Typescript default Form

# 디비 env 
MYSQL_USERNAME=
MYSQL_PASSWORD=
MYSQL_DATABASE=
MYSQL_HOST=
MYSQL_PORT=

# 스키마 생성
ts-node ./src/migrations/create-schema.ts

# 테이블 생성
ts-node ./src/migrations/create-table.ts
