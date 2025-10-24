module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'selector-class-pattern': null,
    'custom-property-empty-line-before': null,
    'declaration-empty-line-before': null,
    'selector-type-no-unknown': null,
    'no-descending-specificity': null,

    // Разрешить ID селекторы без kebab-case
    'selector-id-pattern': null,
    'selector-max-id': null,
    'selector-no-qualifying-type': null,

    // Разрешить кастомные свойства без префиксов
    'custom-property-pattern': null,

    // Разрешить глобальные значения для цветов
    'color-named': null,

    // Разрешить дублирование свойств для fallback
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
      },
    ],

    // Разрешить неизвестные псевдоклассы (для :focus-visible и т.д.)
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['focus-visible'],
      },
    ],

    // Порядок свойств
    'order/properties-order': [
      // Позиционирование
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'inset',

      // Блочная модель
      'display',
      'flex-direction',
      'flex-wrap',
      'justify-content',
      'align-items',
      'align-self',
      'flex',
      'flex-shrink',
      'gap',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'border',
      'border-width',
      'border-style',
      'border-color',
      'border-radius',
      'box-sizing',

      // Типографика
      'font-family',
      'font-size',
      'font-weight',
      'font-style',
      'line-height',
      'text-align',
      'text-transform',
      'color',
      'white-space',

      // Оформление
      'background',
      'background-color',
      'background-image',
      'background-size',
      'background-position',
      'background-repeat',
      'background-attachment',
      'opacity',
      'transform',
      'transition',
      'cursor',

      // Другие
      'overflow',
      'object-fit',
      'aspect-ratio',
      'mix-blend-mode',
      'filter',
    ],
  },
};
