const { eslintConfig } = require('@rblock919/eslint-config');

module.exports = {
  ...eslintConfig,
  rules: {
    ...eslintConfig.rules,
    'new-cap': 'off', // occurs in nestjs code when injecting models and using new to create a new entry
    'class-methods-use-this': 'off', // again... occurs quite often in the nestjs framework
    'func-names': 'off', // when defining mongoose schema methods you can't use the arrow function in most cases due to the 'this' usage
  },
};
