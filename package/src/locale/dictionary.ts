export type ZvsDictionary = {
    accordion: {
        toggle: string;
    };
    breadcrumbs: {
        label: string;
    };
    autoFillSelector: {
        inputPlaceholder: string;
        removeTag: string;
    };
    calendar: {
        selectMonth: string;
        selectYear: string;
        time: string;
        hours: string;
        minutes: string;
    };
    carousel: {
        label: string;
        previous: string;
        next: string;
        goTo: (slide: number) => string;
    };
    chart: {
        emptyState: string;
    };
    codeView: {
        copy: string;
        copyLabel: string;
        download: string;
        downloadLabel: string;
    };
    dropdown: {
        triggerPlaceholder: string;
    };
    inputColor: {
        pick: string;
        pickSwatch: (color: string) => string;
        title: string;
        hue: string;
        alpha: string;
    };
    inputDate: {
        placeholder: string;
        clear: string;
    };
    inputDatetime: {
        placeholder: string;
        clear: string;
    };
    inputTime: {
        placeholder: string;
        clear: string;
    };
    inputDropZone: {
        emptyTitle: string;
        emptyDescription: string;
        selectedDescription: string;
        selectedReplaceHint: string;
        selectedMultipleDescription: string;
        selectedCount: (count: number) => string;
        clearLabel: string;
        clearAllLabel: string;
        removeLabel: string;
        previewAlt: string;
        uploadedFileLabel: string;
    };
    loader: {
        label: string;
    };
    modal: {
        close: string;
    };
    pagination: {
        label: string;
        empty: string;
        shownPrefix: string;
        shownSeparator: string;
        perPage: string;
        page: (page: number) => string;
        previousPage: string;
        nextPage: string;
    };
    select: {
        placeholder: string;
        searchPlaceholder: string;
        emptyMessage: string;
    };
    slidedPanel: {
        close: string;
    };
    switcher: {
        label: string;
    };
    toasts: {
        regionLabel: string;
    };
};

export type PartialZvsDictionary = {
    [Group in keyof ZvsDictionary]?: Partial<ZvsDictionary[Group]>;
};

export const defaultDictionary: ZvsDictionary = {
    accordion: {
        toggle: "Развернуть",
    },
    breadcrumbs: {
        label: "Навигационная цепочка",
    },
    autoFillSelector: {
        inputPlaceholder: "Введите для поиска",
        removeTag: "Удалить",
    },
    calendar: {
        selectMonth: "Выбрать месяц",
        selectYear: "Выбрать год",
        time: "Время",
        hours: "Часы",
        minutes: "Минуты",
    },
    carousel: {
        label: "Карусель",
        previous: "Предыдущий слайд",
        next: "Следующий слайд",
        goTo: (slide) => `Перейти к слайду ${slide}`,
    },
    chart: {
        emptyState: "Нет данных",
    },
    codeView: {
        copy: "Копировать",
        copyLabel: "Копировать код",
        download: "Скачать",
        downloadLabel: "Скачать код",
    },
    dropdown: {
        triggerPlaceholder: "Открыть",
    },
    inputColor: {
        pick: "Выбрать цвет",
        pickSwatch: (color) => `Выбрать цвет ${color}`,
        title: "Настройка цвета",
        hue: "Цветовой тон",
        alpha: "Прозрачность цвета",
    },
    inputDate: {
        placeholder: "Выберите дату",
        clear: "Очистить дату",
    },
    inputDatetime: {
        placeholder: "Выберите дату и время",
        clear: "Очистить дату и время",
    },
    inputTime: {
        placeholder: "Выберите время",
        clear: "Очистить время",
    },
    inputDropZone: {
        emptyTitle: "Перетащите картинку сюда",
        emptyDescription: "или нажмите для выбора файла",
        selectedDescription: "Файл будет загружен.",
        selectedReplaceHint:
            "Нажмите или перетащите новый файл, чтобы заменить текущий.",
        selectedMultipleDescription:
            "Нажмите или перетащите файлы, чтобы добавить еще.",
        selectedCount: (count) => `Выбрано файлов: ${count}`,
        clearLabel: "Удалить файл",
        clearAllLabel: "Удалить все файлы",
        removeLabel: "Удалить",
        previewAlt: "Предпросмотр изображения",
        uploadedFileLabel: "Загруженный файл",
    },
    loader: {
        label: "Loading",
    },
    modal: {
        close: "Закрыть окно",
    },
    pagination: {
        label: "Пагинация",
        empty: "Нет записей",
        shownPrefix: "Показано",
        shownSeparator: "из",
        perPage: "На странице",
        page: (page) => `Страница ${page}`,
        previousPage: "Предыдущая страница",
        nextPage: "Следующая страница",
    },
    select: {
        placeholder: "Выберите",
        searchPlaceholder: "Поиск...",
        emptyMessage: "Ничего не найдено",
    },
    slidedPanel: {
        close: "Закрыть панель",
    },
    switcher: {
        label: "Switcher",
    },
    toasts: {
        regionLabel: "Notifications",
    },
};

export const enDictionary: ZvsDictionary = {
    accordion: {
        toggle: "Expand",
    },
    breadcrumbs: {
        label: "Breadcrumb",
    },
    autoFillSelector: {
        inputPlaceholder: "Type to search",
        removeTag: "Remove",
    },
    calendar: {
        selectMonth: "Select month",
        selectYear: "Select year",
        time: "Time",
        hours: "Hours",
        minutes: "Minutes",
    },
    carousel: {
        label: "Carousel",
        previous: "Previous slide",
        next: "Next slide",
        goTo: (slide) => `Go to slide ${slide}`,
    },
    chart: {
        emptyState: "No data",
    },
    codeView: {
        copy: "Copy",
        copyLabel: "Copy code",
        download: "Download",
        downloadLabel: "Download code",
    },
    dropdown: {
        triggerPlaceholder: "Open",
    },
    inputColor: {
        pick: "Pick a color",
        pickSwatch: (color) => `Pick color ${color}`,
        title: "Color settings",
        hue: "Hue",
        alpha: "Opacity",
    },
    inputDate: {
        placeholder: "Pick a date",
        clear: "Clear date",
    },
    inputDatetime: {
        placeholder: "Pick a date and time",
        clear: "Clear date and time",
    },
    inputTime: {
        placeholder: "Pick a time",
        clear: "Clear time",
    },
    inputDropZone: {
        emptyTitle: "Drop an image here",
        emptyDescription: "or click to choose a file",
        selectedDescription: "The file will be uploaded.",
        selectedReplaceHint: "Click or drop a new file to replace this one.",
        selectedMultipleDescription: "Click or drop files to add more.",
        selectedCount: (count) => `${count} files selected`,
        clearLabel: "Remove file",
        clearAllLabel: "Remove all files",
        removeLabel: "Remove",
        previewAlt: "Image preview",
        uploadedFileLabel: "Uploaded file",
    },
    loader: {
        label: "Loading",
    },
    modal: {
        close: "Close dialog",
    },
    pagination: {
        label: "Pagination",
        empty: "No records",
        shownPrefix: "Showing",
        shownSeparator: "of",
        perPage: "Per page",
        page: (page) => `Page ${page}`,
        previousPage: "Previous page",
        nextPage: "Next page",
    },
    select: {
        placeholder: "Select",
        searchPlaceholder: "Search...",
        emptyMessage: "Nothing found",
    },
    slidedPanel: {
        close: "Close panel",
    },
    switcher: {
        label: "Switcher",
    },
    toasts: {
        regionLabel: "Notifications",
    },
};

export const mergeDictionary = (
    base: ZvsDictionary,
    overrides?: PartialZvsDictionary,
): ZvsDictionary => {
    if (!overrides) return base;

    const groups = base as unknown as Record<string, Record<string, unknown>>;
    const merged: Record<string, Record<string, unknown>> = { ...groups };

    for (const [group, values] of Object.entries(overrides)) {
        if (!values) continue;

        merged[group] = { ...groups[group], ...values };
    }

    return merged as unknown as ZvsDictionary;
};
