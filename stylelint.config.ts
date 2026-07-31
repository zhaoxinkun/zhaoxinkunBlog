export default {
  extends: ["stylelint-config-standard", "stylelint-config-recommended-scss"],
  rules: {
    // recommended rules
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    // ...
    // any other rules you'd want to change e.g.
    "scss/dollar-variable-pattern": "^foo",
    "scss/selector-no-redundant-nesting-selector": true,
  },
};
