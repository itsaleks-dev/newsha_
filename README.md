## NEWSHA Frontend

## Стек

• React 19
• TypeScript (strict)
• Vite
• Styled-components
• Redux Toolkit
• React Router
• Formik / React Hook Form
• Yup
• Vitest
• ESLint + Prettier

## Архитектура

Проект инициализирован и структурирован по FSD (Feature-Sliced Design).

Используется слоистая структура:
• shared — UI, утилиты, типы (не знает про бизнес)
• entities — бизнес-сущности
• features — пользовательские сценарии
• widgets — крупные UI-блоки
• pages — страницы
• app — инициализация приложения

    •	ESLint с правилами FSD (import/no-restricted-paths)
    •	Prettier для форматирования
    •	Строгие правила TypeScript:
    •	exactOptionalPropertyTypes
    •	noUnusedLocals
    •	noImplicitOverride

## Скрипты

npm run dev # запуск в dev-режиме
npm run build # сборка проекта
npm run preview # preview сборки
npm run lint # проверка eslint
npm run lint:fix # авто-фикс eslint
npm run format # prettier
npm run typecheck # проверка типов
npm run test # тесты
npm run test:ui # UI для тестов
npm run test:coverage # покрытие тестов

## Особенности

    •	Строгий TypeScript (strict, exactOptionalPropertyTypes)
    •	React Compiler (babel-plugin-react-compiler)
    •	Раздельные tsconfig для app / node / tests
    •	Чёткие правила архитектуры через ESLint
    •	Поддержка тестов и coverage

## src/types

Глобальные типы проекта.
• assets.d.ts — типы для импорта ассетов
• global.d.ts — общие глобальные декларации

Используются во всех слоях, без бизнес-логики.

## src/app

Слой app отвечает за инициализацию, конфигурацию и инфраструктуру приложения в рамках FSD.
Здесь нет бизнес-логики конкретных фич — только склейка и системные механизмы.

## Инициализация

    •	bootstrap — запуск приложения и глобальная инициализация (initializeApp)
    •	providers — подключение Router, Redux, Theme, Scroll, Error Monitoring

## Состояние

    •	store — конфигурация Redux Store
    •	model — глобальное состояние приложения и селекторы

## Маршрутизация и навигация

    •	routes — описание публичных, приватных, checkout и admin маршрутов
    •	routing — route-guards (Private, Admin, Role)
    •	navigation — хелперы, хуки и типы для навигации

UI-скелет
• layout — базовые layout’ы (основной, checkout)

## Работа с API

    •	http — HTTP-клиент, адаптеры, интерцепторы и обработка ошибок
    •	services — сервисы для работы с API (auth, cart, order, search)

## Ошибки и стабильность

    •	errors — централизованная обработка и модель ошибок
    •	ErrorMonitoringProvider — точка интеграции мониторинга ошибок

## Аналитика и SEO

    •	analytics — трекинг, хуки, типы и UI для аналитики
    •	seo — генерация и управление мета-данными

## Коммуникации и данные

    •	communication — email и sms-коммуникации
    •	mocks — мок-данные для разработки и тестирования

## src/entities

Слой entities содержит доменные модели и бизнес-логику ключевых сущностей проекта.
Не зависит от features, widgets и pages.

## Cart

    •	domain — логика корзины, правила и вычисления
    •	infrastructure — интеграция с хранилищем / API
    •	types — типы и DTO корзины

## Category

    •	domain — доменная логика категорий
    •	config — конфигурации и константы
    •	lib — вспомогательные функции
    •	types — типы категорий

## Discount

    •	domain — правила и расчёт скидок
    •	types — типы скидок

## Order

    •	domain — бизнес-логика заказов
    •	lib — вспомогательные функции
    •	types — типы и статусы заказов

## Product

    •	domain — бизнес-правила продукта
    •	config — конфигурации и константы
    •	lib — утилиты и хелперы
    •	types — типы продуктов и вариантов

## Review

    •	domain — логика отзывов
    •	types — типы и модели отзывов

## src/features

Слой features содержит реализованные пользовательские сценарии.
Каждая feature инкапсулирует свою логику, состояние, UI и интеграции с entities.

## Общие принципы

    •	feature = один пользовательский сценарий
    •	может использовать entities и shared
    •	не зависит от других features
    •	UI, model, hooks и domain лежат рядом

⸻

## Основные features

## Auth

Авторизация и регистрация пользователя.
• формы логина и регистрации
• доменная логика сессии
• Redux-состояние и UI-модалки
• fake и real репозитории

## Cart

Полный сценарий работы с корзиной.
• добавление / удаление товаров
• модалка корзины
• undo, checkout submit
• use-cases и репозитории
• отдельная UI-структура корзины

## Product

Работа с продуктами.
• карточки, списки, гриды
• сортировка и фильтрация
• адаптация доменных данных под UI
• бизнес-утилиты цен и сортировки

## Catalog / Category

Каталог и категории.
• построение меню
• загрузка и хранение категорий
• состояние и селекторы

## Checkout

Оформление заказа.
• расчёт стоимости
• форма checkout
• адаптация данных корзины в заказ

## Orders

Заказы пользователя.
• загрузка заказов
• преобразование доменных данных
• Redux-состояние

## Search

Поиск по продуктам.
• локальный и API-поиск
• нормализация запросов
• умные плейсхолдеры
• overlay и UI-компоненты

## Wishlist

Избранные товары.
• добавление / удаление
• Redux-состояние
• хук useWishlist

⸻

## UI и состояние

## Banner

Баннеры и промо-блоки.
• загрузка
• селекторы
• сборка данных для UI

## Navigation

Навигация и мегаменю.
• состояние меню
• хуки и типы

## BurgerUI / ConsultationUI

UI-состояния интерфейса.
• мобильное меню
• консультации
• только UI + model

⸻

## Интеграции и вспомогательные features

## FakeBackend

Фейковый backend для разработки.
• продукты, категории, заказы, пользователи
• API, data, domain
• полностью изолирован от реального API

## RecentlyViewed

Недавно просмотренные товары.
• сервис
• local storage
• типы

## Review / Cooperation

Формы отзывов и сотрудничества.
• схемы форм
• API-интеграция
• доменная логика

## src/pages

Слой pages содержит страницы приложения.
Каждая папка — отдельная route-страница, собирающая widgets и features.

## Страницы

    •	HomePage — главная страница
    •	CatalogPage — каталог товаров
    •	ProductPage — страница продукта
    •	SearchPage — поиск
    •	Cart / CheckoutPage / CheckoutSuccessPage — оформление заказа
    •	AccountPage — личный кабинет
    •	AdminPage — админ-зона
    •	About / Contacts / Cooperation — информационные страницы
    •	DeliveryPayment / ReturnExchange / PrivacyPolicy / PublicOffer — статические страницы
    •	ErrorPage — страница ошибок
    •	StaticPage — универсальная страница для статического контента

## src/shared

Слой shared — общие переиспользуемые части проекта.
Не содержит бизнес-логики и не зависит от других слоёв.

## Состав

    •	config — env, тексты, роуты, навигация
    •	constants — глобальные константы
    •	hooks — универсальные хуки
    •	lib — утилиты (async, debounce, cache, storage, validation и т.д.)
    •	styles — глобальные стили и типы styled-components
    •	theme — дизайн-система (цвета, шрифты, миксины, брейкпоинты)
    •	types — примитивные и общие типы
    •	ui — базовые UI-компоненты (Button, Input, Modal, Form, Toast и др.)
    •	layout — базовые layout-компоненты

## public

## Статические ресурсы проекта.

    •	fonts — шрифты
    •	icons — иконки
    •	images — изображения

Используются напрямую, без импорта через сборщик.
