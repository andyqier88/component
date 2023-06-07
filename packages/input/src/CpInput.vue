<template>
  <div class="cp-input-wrapper">
    <div class="cp-input-label" :class="[focusState ? 'cp-input-label_focus' : '']">
      <label @click="focus" :for="label">{{ label }}</label>
    </div>
    <input :id="label" type="text" 
      autocomplete="off"
      :value="modelValue"
      @focus="focus" 
      @blur="blur"
      @input="handleInput"
      :placeholder="placeholder" 
      class="cp-input-inner">
  </div>
</template>
<script lang="ts">
  export default {
    name: 'CpInput',
    componentName: 'CpInput',
  };
</script>
<script lang="ts" setup>

import { ref } from 'vue';
let emit = defineEmits(['update:modelValue']);
let focusState = ref(false);
// let isExitVal = ref(false);
let inputValue = ref("")
let props = defineProps({
label: {
  type: String,
  require: true,
  default: () => {
    return "";
  },
},
placeholder: {
  type: String,
  require: false,
  default: () => {
    return "";
  },
},
modelValue: {
  type: String,
  require: false,
  default: () => {
    return "";
  },
}
});
function focus() {
focusState.value = true;
}
function blur() {
focusState.value = inputValue.value ? true: false;
}
function handleInput(e) {
console.log(e.target.value);
inputValue.value = e.target.value
emit('update:modelValue', e.target.value)
}
console.log(props.modelValue);

</script>
<style scoped>
.cp-input-wrapper {
position: relative;
margin-bottom: 10px;
}
.cp-input-inner {
border: 1px solid #dcdfe6;
border-radius: 4px;
padding: 5px 10px;
color: #555;
outline: #409eff;
z-index: 2;
}

.cp-input-inner:focus,
.cp-input-inner:focus-visible {
border: 1px solid #409eff;
}

.cp-input-inner::placeholder {
color: #000;
font-size: 14px;
}
.cp-input-inner::placeholder:focus {
position: absolute;
left: 5px;
top: -8px;
font-size: 12px;
padding: 0 2px;
background-color: #fff;
color: #409eff;
transition: all 0.5s ease-out;
}
.cp-input-label {
position: absolute;
top: 8px;
left: 10px;
font-size: 14px;
transition: all 0.4s ease-in;
z-index: 0;
}
.cp-input-label_focus {
position: absolute;
left: 8px;
top: -8px;
font-size: 12px;
padding: 0 2px;
background-color: #fff;
color: #409eff;
transition: all 0.4s ease-in;
}
</style>
