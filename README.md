# Notebook

Тестовый проект "Запиская книжка", сделан на стеке Angular ( ngRx ), Nest.js, mySql

Реализована авторизация, аутентификация, регистрация ( по получению ключа подтверждения на почту ).

На клиенте добавлена подгрузка записей пользователя, их просмотр, сортировка, поддержка многооконного режима (по сохранению данных в локальное хранилище браузера), удаление, добавление.

# Тестовые креды:

# для phpAdmin (http://localhost:8080/):

Пользователь: root
Пароль: root

# для авторизации ( Создан тестовый пользователь, но так же вы можете сами зарегистрироваться ):

Пользователь: test@test.ru
Пароль: testtest

# для поднятия проекта (в Docker):

# Необходимо в корне прописать команду:

docker-compose up -d

# Структуру баз данных можно будет посмотреть в phpAdmin, но вот краткое описание:

# Таблица User

email: string;
password: string;
isAcceptKey: boolean;
acceptKey: string;
authToken: string;
date: Date;

# Таблица Note

id: string;
title: string;
description: string;
date: Date
которая имеет отношение к таблице User как "многие к одному", тоесть за одним пользователем привязывается много "записей" по ID пользователя
