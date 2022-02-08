/*
 * @Author: pink
 * @Date: 2022-02-06 20:48:45
 * @LastEditors: pink
 * @LastEditTime: 2022-02-07 16:26:49
 * @Description: content
 */

const sass = require('sass')
const loadGrunpTasks = require('load-grunt-tasks')
module.exports = grunt => {
  grunt.initConfig({
    build:{
      options:{
        foo: 'bar'
      },
      css: '1',
      js: '2'
    },
    clean: {
      // 清除某个文件
      // temp: 'temp/app.js'
      // 清除某一类型后缀的文件
      temp: 'temp/*.txt'
    },
    sass:{
      options:{
        sourceMap: true,
        implementation: sass
      },
      main:{
        files: {
          'dist/css/style.css': 'src/scss/style.scss'
        }
      }
    },
    // js 文件简单处理
    babel:{
      options:{
        presets: ['@babel/preset-env']
      },
      main:{
        files:{
          'dist/js/app.js':'src/js/app.js'
        }
      }
    },
    // 添加监听模式，监听文件更改执行任务
    watch: {
      js: {
        files:['src/js/*.js'],
        tasks: ['babel']
      },
      css: {
        files: ['src/scss/*.scss'],
        tasks: ['sass']
      }
    }

  })

  // 多目标模式
  // grunt.registerMultiTask('build', function(){
  //   console.log(this.options())
  //   console.log(`target: ${this.target},data: ${this.data}`)
  // })

  // grunt.loadNpmTasks('grunt-contrib-clean')
  // grunt.loadNpmTasks('grunt-sass')
  loadGrunpTasks(grunt) //自动加载所有的grunt插件
  grunt.registerTask('default', ['sass','babel','watch'])
}