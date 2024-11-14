<h1 id="home">Homework :clipboard:</h1>

## react-hw-05-movies_ts

- 🇺🇸 [English](#en)
- 🇺🇦 [Ukrainian](#uk)
- 🇷🇺 [Russian](#ru)

---

<h3 id="en">📚 EN 📚</h3>

# Acceptance criteria

- A repository has been created `react-hw-05-movies_ts`
- When submitting homework, there are links to: source files and working pages
  of each project on `GitHub Pages`
- The component state stores the minimum required set of data, the rest is
  computed
- When running the task code, there are no errors or warnings in the console
- For each component, there is a separate folder with a React component file and
  a style file
- `interfaces` are described for components
- Everything that the component expects as props is passed to it when called.
- Component names are clear and descriptive
- The JS code is clean and clear, using `Prettier`
- Styling is done by `CSS Modules` or `Styled Components`.
- Getting state using a library `TanStack Query (FKA React Query)`

## Task "Kinopoisk"

Create basic routing for the application of searching and storing movies.
Preview of the working application
[see the link](https://drive.google.com/file/d/1vR0hi3n1236Q5Bg4-se-8JVKD9UKSfId/view?usp=sharing).

## themoviedb.org API

For the backend, use the [themoviedb.org API](https://www.themoviedb.org/). You
need to register (you can enter arbitrary data) and get an API key. The
following endpoints will be used in this work.

- [/trending/get-trending](https://developers.themoviedb.org/3/trending/get-trending)
  list of the most popular movies today to create a collection on the main page.
- [/search/search-movies](https://developers.themoviedb.org/3/search/search-movies)
  search for a movie by keyword on the movies page.
- [/movies/get-movie-details](https://developers.themoviedb.org/3/movies/get-movie-details)
  request full information about a movie for a movie page.
- [/movies/get-movie-credits](https://developers.themoviedb.org/3/movies/get-movie-credits)
  request information about the cast for a movie page.
- [/movies/get-movie-reviews](https://developers.themoviedb.org/3/movies/get-movie-reviews)
  Request reviews for a movie page.

[Documentation link](https://developers.themoviedb.org/3/getting-started/introduction)

## Routes

The application must have the following routes. If the user enters a
non-existent route, he must be redirected to the home page.

- `'/'` - `<HomePage>` component, home page with a list of popular movies.
- `'/movies'` - `<MoviesPage>` component, page for searching movies by keyword.
- `'/movies/:movieId'` - `<MovieDetailsPage>` component, page with detailed
  information about a movie.
- `/movies/:movieId/cast` - `<Cast>` component, information about the cast.
  Rendered on the `<MovieDetailsPage>` page.
- `/movies/:movieId/reviews` - ​​`<Reviews>` component, information about
  reviews. Rendered on the `<MovieDetailsPage>` page.

## Code Splitting

Add asynchronous loading of JS code for application routes using `React.lazy()`
and `Suspense`.

---

---

<h3 id="uk">📚 UK 📚 <a href="#home">⬆ Home ⬆</a></h3>

# Критерії вступу

- Створено репозиторій `react-hw-05-movies_ts`
- При здачі домашнього завдання є посилання на: вихідні файли та робочі сторінки
  кожного проекту на `GitHub Pages`
- Стан компонента зберігає мінімально необхідний набір даних, Решта
  розраховується
- При виконанні коду завдання в консолі відсутні помилки і попередження
- Для кожного компонента є окрема папка з файлом компонента React та Стилі
- Для компонентів описані `interfaces`
- Все, що компонент очікує як пропси, передається йому під час його виклику
- Назви компонентів зрозумілі та описові
- JS-код чистий і зрозумілий, використовується `Prettier`
- Стилізація здійснюється за допомогою `CSS Modules` або `Styled Components`.
- Отримання стану за допомогою бібліотеки `TanStack Query (FKA React Query)`

## Завдання "Кинопоиск"

Створіть базову маршрутизацію для програми пошуку та зберігання фільмів.
Попередній перегляд Робочий додаток
[див. посилання](https://drive.google.com/file/d/1vR0hi3n1236Q5Bg4-se-8JVKD9UKSfId/view?usp=sharing).

## API themoviedb.org

Для серверної частини використовуйте
[themoviedb.org API](https://www.themoviedb.org/). Необхідно зареєструватися
(можна вводити довільні дані) і отримати Ключ API. У цій роботі будуть
використовуватися наступні кінцеві точки.

- [/trending/get-trending](https://developers.themoviedb.org/3/trending/get-trending)
  Список найпопулярніших фільмів сучасності для створення колекції на головній
  сторінці Сторінка.
- [/search/search-movies](https://developers.themoviedb.org/3/search/search-movies)
  Знайдіть фільм за ключовим словом на сторінці фільмів.
- [/movies/get-movie-details](https://developers.themoviedb.org/3/movies/get-movie-details)
  Надішліть запит на повну інформацію про фільм на сторінці фільму.
- [/movies/get-movie-credits](https://developers.themoviedb.org/3/movies/get-movie-credits)
  Надішліть запит на інформацію про акторський склад для сторінки фільму.
- [/movies/get-movie-reviews](https://developers.themoviedb.org/3/movies/get-movie-reviews)
  Надішліть запит на рецензії на сторінку фільму.

[Посилання на документацію](https://developers.themoviedb.org/3/getting-started/introduction)

## Маршрути

У додатку повинні бути наступні маршрути. Якщо користувач увійшов за маршрутом,
якого не існує, його необхідно перенаправити на головну сторінку.

- `'/'` - компонент `<HomePage>`, домашня сторінка зі списком популярних
  фільмів.
- `'/movies'` - компонент `<MoviesPage>`, сторінка для пошуку фільмів за
  ключовим словом.
- `'/movies/:movieId'` - компонент, `<MovieDetailsPage>` сторінка з детальною
  інформацією про фільм.
- `'/movies/:movieId/cast'` - компонент `<Cast>`, інформація про акторський
  склад. Відображається на сторінці.`<MovieDetailsPage>`
- `'/movies/:movieId/reviews'` - компонент `<Reviews>`, інформація про відгуки.
  Відображається на сторінці.`<MovieDetailsPage>`

## Розбиття коду

Додано асинхронне завантаження JS для маршрутів додатків за допомогою
`React.lazy()` та `Suspense`.

---

---

<h3 id="ru">📚 RU 📚 <a href="#home">⬆ Home ⬆</a></h3>

# Критерии приема

- Создан репозиторий `react-hw-05-movies_ts`
- При сдаче домашней работы есть ссылки: на исходные файлы и рабочие страницы
  каждого проекта на `GitHub Pages`
- В состоянии компонентов хранится минимально необходимый набор данных,
  остальное вычисляется
- При запуске кода задания, в консоли нету ошибок и предупреждений
- Для каждого компонента есть отдельная папка с файлом React-компонента и файлом
  стилей
- Для компонентов описаны `interfaces`
- Все что компонент ожидает в виде пропов, передается ему при вызове
- Имена компонентов понятные, описательные
- JS-код чистый и понятный, используется `Prettier`
- Стилизация выполнена `CSS-модулями` или `Styled Components`.
- Получение состояния с помощью библиотеки `TanStack Query (FKA React Query)`

## Задание «Кинопоиск»

Создай базовую маршрутизацию для приложения поиска и хранения фильмов. Превью
рабочего приложения
[смотри по ссылке](https://drive.google.com/file/d/1vR0hi3n1236Q5Bg4-se-8JVKD9UKSfId/view?usp=sharing).

## API themoviedb.org

Для бекенда используй [themoviedb.org API](https://www.themoviedb.org/).
Необходимо зарегистриваться (можно ввести произвольные данные) и получить
API-ключ. В этой работе будут использоваться следующие ендпоинты.

- [/trending/get-trending](https://developers.themoviedb.org/3/trending/get-trending)
  список самых популярных фильмов на сегодня для создания коллекции на главной
  странице.
- [/search/search-movies](https://developers.themoviedb.org/3/search/search-movies)
  поиск кинофильма по ключевому слову на странице фильмов.
- [/movies/get-movie-details](https://developers.themoviedb.org/3/movies/get-movie-details)
  запрос полной информации о фильме для страницы кинофильма.
- [/movies/get-movie-credits](https://developers.themoviedb.org/3/movies/get-movie-credits)
  запрос информации о актёрском составе для страницы кинофильма.
- [/movies/get-movie-reviews](https://developers.themoviedb.org/3/movies/get-movie-reviews)
  запрос обзоров для страницы кинофильма.

[Ссылка на документацию](https://developers.themoviedb.org/3/getting-started/introduction)

## Маршруты

В приложении должны быть следующие маршруты. Если пользователь зашел по
несуществующему маршруту, его необходимо перенаправлять на домашнюю страницу.

- `'/'` - компонент `<HomePage>`, домашняя страница со списком популярных
  кинофильмов.
- `'/movies'` - компонент `<MoviesPage>`, страница поиска фильмов по ключевому
  слову.
- `'/movies/:movieId'` - компонент `<MovieDetailsPage>`, страница с детальной
  информацией о кинофильме.
- `/movies/:movieId/cast` - компонент `<Cast>`, информация о актерском составе.
  Рендерится на странице `<MovieDetailsPage>`.
- `/movies/:movieId/reviews` - компонент `<Reviews>`, информация об обзорах.
  Рендерится на странице `<MovieDetailsPage>`.

## Code Splitting (разделение кода)

Добавь асинхронную загрузку JS-кода для маршрутов приложения используя
`React.lazy()` и `Suspense`.
