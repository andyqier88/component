### 使用

1. 安装 `pnpm add @wyq/cpinput`
2. 引入
```
import CpInput from '@wyq/cpinput';
import "@wyq/cpinput/dist/style.css";
app.use(CpInput)
```
3. 组件内使用 `<cp-input v-model="test" label="名称" />`

支持props: label、v-model
