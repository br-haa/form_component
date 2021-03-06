# Install
`npm install haa-form`
# PHP set up

## type **npm init** (and then hammer return)

## Web pack install
`npm install webpack-cli webpack copy-webpack-plugin --save-dev`

## Web pack config (webpack.config.js)
```javascript
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "production",
    entry:{
       form:'./node_modules/haa-form/dist/haa-form.umd.min.js'
    }
    ,
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: './node_modules/haa-form/dist/haa-form.css', to: 'form.css' },
                { from: './node_modules/vue/dist/vue.min.js', to: 'vue.min.js' },
            ],
        }),
    ],
};
```
# type __webpack__ in the command line
## css link
`<link rel="stylesheet" type="text/css" href="dist/form.css">`

## Main form file
```html
<script src="dist/vue.min.js"></script>
<script src="dist/form.js"></script>

<?php
if($dynamic_num){  // replace with project phone var
    $formNumb = $dynamic_num;
} else {
    $formNumb = missing;
}
?>

<div id="FormHolder">
    <form-controller
    :form-type="1"
    :form-reactor="''"
    :Bjn="''"
    :client-link="'replaceme.com'"
    :post-values="PostValues"
    ></form-controller>
</div>

<script>
    let FormHolder = new Vue({
        el: '#FormHolder',
        data: {
            PostValues: [
                {id: 'HaaNumber', value: "'<?php echo $formNumb; ?>'"},
                {id: 'URL', value: window.location.href}
            ]
        }
    })
</script>

```

# Vue set up
## plugin
```javascript
import Vue from 'vue'
import HaaFormComponents from "haa-form";
import 'haa-form/dist/haa-form.css'

Vue.use(HaaFormComponents)

```
## Main form file
```vue
<template>
  <div>
    <Nuxt />
    <form-controller
         :form-type="1"
         :form-reactor="''"
         :Bjn="''"
         :client-link="'replaceme.com'"
         :post-values="PostValues"
    ></form-controller>
  </div>
</template>

```


