/*
 * @Author: pink
 * @Date: 2022-02-06 21:33:29
 * @LastEditors: pink
 * @LastEditTime: 2022-02-07 16:27:05
 * @Description: content
 */
;((window,document)=>{
  document.querySelector('#btn').addEventListenner('click',()=>{
    alert(Date.now())
    
  })
})(window,document)