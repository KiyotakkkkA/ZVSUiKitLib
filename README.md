# Установка UI-набора

### Шаг 1 - Установка в проект

```bash
npm i @kiyotakkkka/zvs-uikit-lib
```

### Шаг 2 - Настройка компонентов

<details><summary><b>Настройка для Tailwind 4</b></summary>

По умолчанию Tailwind 4 не смотрит директорию <b>node_modules</b> поэтому чтобы стилизация работала, нужно добавить в <b>.css</b> с объявлением директивы <b>@import "tailwindcss"</b>
строку:

```css
@source "../node_modules/zvs-uikit-lib/dist/**/*.{js,cjs,mjs,ts,tsx,jsx}";
```

</details>

<details><summary><b>Настройка для Tailwind 3</b></summary>

Если вы используете Tailwind 3, то нужно добавить в конфигурацию `tailwind.config.js` следующую строку:

```js
module.exports = {
    content: [
        "./node_modules/zvs-uikit-lib/dist/**/*.{js,ts,jsx,tsx}",
        // другие пути...
    ],
    // остальные настройки...
};
```

</details>

### Шаг 3 - Цветовая палитра

Для корректного отображения компонентов, рекомендуется <b>ИСПОЛЬЗОВАТЬ СУЩЕСТВУЮЩУЮ ПАЛИТРУ НИЖЕ</b> или <b>ПЕРЕЗАПИСАТЬ СООТВЕТСТВУЮЩИЕ ПЕРЕМЕННЫЕ ПАЛИТРЫ</b>:

```css
@theme {
    --color-main-50: rgb(250 250 250);
    --color-main-100: rgb(245 245 245);
    --color-main-200: rgb(229 229 229);
    --color-main-300: rgb(212 212 212);
    --color-main-400: rgb(163 163 163);
    --color-main-500: rgb(115 115 115);
    --color-main-600: rgb(82 82 82);
    --color-main-700: rgb(64 64 64);
    --color-main-800: rgb(38 38 38);
    --color-main-900: rgb(23 23 23);
}
```
