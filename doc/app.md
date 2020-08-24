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

#### ---save

- pg
- sequelize
- pg-hstore
- dotenv 

### Конфигурация



### База данных

Скрипт создания БД и пользователя: ./sqlz/create-db-and-user.sql
Нужно подключить 2 расширения:
- jsquery
- uuid-ossp

### Модели

### Модель User

Поля:
id: uuid - уникальный идентификатор
name: string - Представление пользователя
email: string - уникальное поле
paramsJSONB: JSONB - 
-  password: string
-  refreshJWT: uuid


## Frontend