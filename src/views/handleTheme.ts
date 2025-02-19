/*
 * @Author: Li Jian
 * @Date: 2022-04-06 15:24:18
 * @LastEditTime: 2022-04-14 15:44:11
 * @LastEditors: Li Jian
 */
import { reactive } from 'vue'
// 实时获取页面宽度, 响应式布局
export const theme = reactive({
  width: `${document.body.clientWidth}px`,
  height: `${document.body.clientHeight}px`,
})
let isResize = false
const fn = () => {
  theme.width = `${document.body.clientWidth}px`
}
if (!isResize) {
  isResize = true
  window.addEventListener('resize', fn)
}
