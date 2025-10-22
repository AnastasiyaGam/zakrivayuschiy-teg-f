module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'selector-class-pattern': null,
    'custom-property-empty-line-before': null,
    'declaration-empty-line-before': null,
    'selector-type-no-unknown': null,
    'no-descending-specificity': null,
    'order/properties-order': [
      // Позиционирование
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',

      // Блочная модель
      'display',
      'flex-direction',
      'flex-wrap',
      'justify-content',
      'align-items',
      'width',
      'height',
      'margin',
      'padding',
      'border',

      // Типографика
      'font-family',
      'font-size',
      'line-height',
      'color',
      'text-align',

      // Оформление
      'background',
      'opacity',
      'transform',
    ],
  },
};
