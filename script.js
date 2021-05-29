import { interfaceComponent } from './components/interface/interface.mjs';

const Nokia1100 = {
  data: function() {
    return {

    };
  },
};

const usbNokia1100App = Vue.createApp(Nokia1100)

usbNokia1100App.component('interface', interfaceComponent);

usbNokia1100App.mount('#app');
