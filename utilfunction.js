// Attribute helper
export function createElement(tag, option = {}) {
    const el = document.createElement(tag);

    Object.entries(option).forEach(([key, value]) => {
        if (key === 'classList') {
            el.classList.add(...value);
        } else if (key in el) {
            el[key] = value;
        } else {
            el.setAttribute(key, value);
        }
    });

    return el;
};

export function createInputField(type, options = {}) {
    const { htmlFor, id, labelText, classList = [], ...attrs } = options;

    const label = createElement('label', {
        htmlFor: id,
        textContent: labelText,
    });

    const input = createElement('input', {
        id,
        name: id,
        type,
        classList,
        ...attrs,
    });

    return { label, input };
};