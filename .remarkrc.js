/**
 * @fileoverview Local remark configuration.
 */

module.exports = {
  "plugins": {
    "remark-lint": {
      // config common with other tools
      "heading-increment": false,  // MD001
      "heading-style": false,  // MD003
      "unordered-list-marker-style": false,  // MD004
      "list-item-content-indent": false,   // MD005
      "list-item-bullet-indent": false,  // MD007
      "hard-break-spaces": false,  // MD009
      "no-tabs": false,  // MD010
      "no-consecutive-blank-lines": false,  // MD012
      "maximum-line-length": false,  // MD013
      "no-multiple-toplevel-headings": false,  // MD025
      "list-item-indent": false,  // MD030
      "no-missing-blank-lines": false,  // MD031 & MD032
      "no-html": false,  // MD033
      "no-emphasis-as-heading": false,  // MD036
      "no-inline-padding": false,  // MD037-039
      "fenced-code-flag": false,  // MD040

      // config explicitly stating defaults
      "ordered-list-marker-value": "ordered",  // MD029

      // config for remark-lint only
      "no-shortcut-reference-link": false,
      "no-undefined-references": false,
      "list-item-spacing": false,
      "code-block-style": false,
      "emphasis-marker": false,
    }
  },
  "settings": {
    "bullet": "*",
    "emphasis": "_",
    "strong": "_",
  }
}
