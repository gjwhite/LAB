/**
 * bem classes and modifiers.
 *
 * @constructor bem
 *
 * @param {string} className
 * - Main class that modifiers get appended to
 *
 * @param {string|Array<string>} [modifiers=null]
 * Modifiers and Utility classes.
 *
 * Can be a string, space seperated string or Array of modifiers or utilities
 * Space seperated will be split into an array
 *
 * Any classes that start with a letter followed by a dash
 * i.e c-class o-class l-class u-class. These will not be prefixed with
 *
 * bem('c-class', 'modifier')
 * >>  "c-class c-class--modifier"
 *
 * bem('c-class', 'mod mod2')
 * >>  "c-class c-class--mod c-class--mod2"
 *
 * bem('c-class', 'mod u-util')
 * >>  "c-class c-class--mod u-util"
 *
 * bem('c-class', ['mod', 'u-util'])
 * >>  "c-class c-class--mod u-util"
 *
 * bem('c-class', ['mod', ['u-util']])
 * >>  "c-class c-class--mod u-util"
 *
 */

const bem = (className = '', modifiers = null) => {
    if (!modifiers) return className;

    if (typeof modifiers == 'string') {
        modifiers = [modifiers];
    }

    if (!Array.isArray(modifiers)) return className;

    modifiers = modifiers.flat();

    modifiers = modifiers
        .filter((m) => m)
        .map((m) => {
            return m.split(/[^\w-]+/);
        });

    modifiers = modifiers.flat();
    modifiers = modifiers.map((modifier) => {
        if (modifier && /^\w-/.test(modifier)) {
            return modifier;
        }
        return modifier ? `${className}--${modifier}` : '';
    });

    modifiers.unshift(className);
    return modifiers.join(' ');
};

export default bem;
