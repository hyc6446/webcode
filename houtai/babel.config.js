// module.exports = {
//   presets: [
//     '@vue/app'
//   ]
// }
module.exports = {
  "plugins": [
    ["@babel/plugin-syntax-dynamic-import"],
    ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
]
}