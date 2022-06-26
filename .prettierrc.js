module.exports = {
  ...require('gts/.prettierrc.json')
  , "overrides": [
    {
      "files": ["src/test/data-*.ts", "Constants.ts"],
      "options": {
        "printWidth": 999
      }
    },
  ]
}
