import { interfaceComponent } from './components/interface/interface.mjs';

const statusList = {
  INTRO: 1,
  READY: 2,
  MENU_MESSAGES: 3,
  MENU_CONTACTS: 4,
  MENU_CALL_REG: 5,
  MENU_TONES: 6,
  MENU_PROFILES: 7,
  MENU_SETTINGS: 8,
  MENU_ALARM: 9,
  MENU_REMINDERS: 10,
  MENU_GAMES: 11,
  MENU_EXTRAS: 12,
};

const Nokia1100 = {
  data: function() {
    return {
      vdStatus: statusList.INTRO,
    };
  },
  methods: {
    /**
     * Nav the menu up.
     */
    mtdNavUp: function() {
      if (this.vdStatus <= statusList.MENU_MESSAGES) {
        this.vdStatus = statusList.MENU_EXTRAS;
        return;
      }
      this.vdStatus--;
    },

    /**
     * Nav the menu up.
     */
    mtdNavDown: function() {
      if (this.vdStatus >= statusList.MENU_EXTRAS) {
        this.vdStatus = statusList.MENU_MESSAGES;
        return;
      }
      this.vdStatus++;
    },
  },
};

const usbNokia1100App = Vue.createApp(Nokia1100)

usbNokia1100App.component('interface', interfaceComponent);

usbNokia1100App.mount('#app');
