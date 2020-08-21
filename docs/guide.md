# Install
`npm install haa-form`
# PHP set up

## css link
`<link rel="stylesheet" type="text/css" href="node_modules/haa-form/dist/haa-form.css">`
## Main form file
```
<script src="node_modules/vue/dist/vue.min.js"></script>
<script src="node_modules/haa-form/dist/haa-form.umd.min.js"></script>

<?php
if(isset($_GET['geo'])) {
    $formGeo = $_GET['geo'];
} else {
    $formGeo = "N/A";
}
if(isset($_GET['camp'])) {
    $formCamp = $_GET['camp'];
} else {
    $formCamp = "N/A";
}
if(isset($_GET['clid'])) {
    $clid = $_GET['clid'];
} else {
    $clid = "N/A";
}
if(isset($_GET['adg'])) {
    $adg = $_GET['adg'];
} else {
    $adg = "N/A";
}
if($dynamic_num){  // replace with project phone var
    $formNumb = $dynamic_num;
} else {
    $formNumb = missing;
}
?>

<div id="FormHolder">
    <form-controller
    :form-type="1"
    :button-text="'hi'"
    :form-reactor="''"
    :Bjn="''"
    :add-fields="undefined"
    :cta-text="undefined"
    :client-link="'here.com'"
    :is-modal="true"
    :hide-form="false"
    :post-values="PostValues"
    :form-test="true"
    ></form-controller>
</div>

<script>
    let FormHolder = new Vue({
        el: '#FormHolder',
        data: {
            PostValues: [
                {id: 'Geo', value: "'<?php echo $formGeo; ?>'"},
                {id: 'Camp', value: "'<?php echo $formCamp; ?>'"},
                {id: 'Clid', value: "'<?php echo $clid; ?>'"},
                {id: 'ADG', value: "'<?php echo $adg; ?>'"},
                {id: 'HaaNumber', value: "'<?php echo $formNumb; ?>'"},
                {id: 'URL', value: window.location.href}
            ]
        }
    })
</script>

```

# Vue set up
## plugin
```
import Vue from 'vue'
import HaaFormComponents from "haa-form";
import 'haa-form/dist/haa-form.css'

Vue.use(HaaFormComponents)

```
## Main form file
```
<template>
  <div>
    <Nuxt />
    <form-controller
      :form-type="1"
      :button-text="'Click ME'"
      :form-reactor="''"
      :Bjn="''"
      :add-fields="undefined"
      :cta-text="undefined"
      :client-link="'here.com'"
      :is-modal="false"
      :hide-form="false"
      :consent="false"
    ></form-controller>
  </div>
</template>

```


