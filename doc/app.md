# Описание разработчика

## Стек технологий
### backend

- Express
- Postgresql
- JWT
- Typescript 

### frontend

- ReactJS
- MobX
- Typescript

## Backend
### Пакеты
#### --save-dev

- sequelize-cli
- @types/dotenv
- @types/express
- @types/node
- concurrently
- nodemon
- typescript

#### ---save

- pg
- sequelize
- pg-hstore
- dotenv
- express 

### Конфигурация

## Sequelize

Файл .sequelizerc содержит настройки миграции БД
Файл .env - основной файл значений конфигурации
- DEV_DATABASE_URL строка подключения к БД в виде url
- DEV_EXPRESS_PORT=3000 - порт Express
 

### База данных

Скрипт создания БД и пользователя: ./sqlz/create-db-and-user.sql
Нужно подключить 2 расширения:
- jsquery
- uuid-ossp

### Модели

#### Модель User

Поля:
id: uuid - уникальный идентификатор
name: string - Представление пользователя
email: string - уникальное поле
paramsJSONB: JSONB - 
-  password: string
-  refreshJWT: uuid


## Frontend