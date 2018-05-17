//一劳永逸的组件注册

import Vue from 'vue'

function capitalizeFirstLetter(string) {

  return string.charAt(0).toUpperCase() + string.slice(1)

}

 

const requireComponent = require.context(

  './practice', false, /\.vue$/
  	// 第一个是 路径  第二个是是否还应该搜索它的子目录   第三个是匹配.vue
   //找到components文件夹下以.vue命名的文件

)

 

requireComponent.keys().forEach(fileName => {

  const componentConfig = requireComponent(fileName)

 

  const componentName = capitalizeFirstLetter(

    fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')

    //因为得到的filename格式是: './baseButton.vue', 所以这里我们去掉头和尾，只保留真正的文件名

  )

 

  Vue.component(componentName, componentConfig.default || componentConfig)

})