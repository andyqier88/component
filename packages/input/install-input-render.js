import CpInput from './src/CpInput.vue';

CpInput.install = function (app) {
  app.component(CpInput.name, CpInput);
};

const components = [CpInput];

const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install,
  CpInput,
};
