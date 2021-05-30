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

const displayComponent = {
  props: {
    vpStatus: {
      type: Number,
      required: true,
    },
  },
  data: function() {
    return {
      vdStatusList: statusList,
    };
  },
  template: `
  <div class="interface-box__display">
    <div class="interface-box__display__frame">
      <div class="interface-box__display__screen interface-box__display__screen--on">
        <header>
        </header>
          <img
            v-if="vpStatus === vdStatusList.INTRO"
            alt=""
            src="./display1.png"
            class="interface-box__display__content"
          />
          <div
            v-if="vpStatus === vdStatusList.READY"
            class="interface-box__display__content"
            style="display: flex;height: 100%;justify-content: flex-end;align-items: center;flex-direction: column;"
          >
            a
            menu
            b
          </div>
          <div
            v-if="vpStatus === vdStatusList.MENU_MESSAGES"
            class="interface-box__display__content"
          >
            MENU_MESSAGES
          </div>
          <div
            v-if="vpStatus === vdStatusList.MENU_CONTACTS"
            class="interface-box__display__content"
          >
            MENU_CONTACTS
          </div>
          <div
            v-if="vpStatus === vdStatusList.MENU_CALL_REG"
            class="interface-box__display__content"
          >
            MENU_CALL_REG
          </div>
          <div
            v-if="vpStatus === vdStatusList.MENU_TONES"
            class="interface-box__display__content"
          >
            MENU_TONES
          </div>
          <div
            v-if="vpStatus === vdStatusList.MENU_PROFILES"
            class="interface-box__display__content"
          >
            MENU_PROFILES
          </div>
          <div
            v-if="vpStatus === vdStatusList.MENU_SETTINGS"
            class="interface-box__display__content"
          >
            MENU_SETTINGS
          </div>
          <div
            v-if="vpStatus === vdStatusList.MENU_ALARM"
            class="interface-box__display__content"
          >
            MENU_ALARM
          </div>
          <div
            v-if="vpStatus === vdStatusList.MENU_REMINDERS"
            class="interface-box__display__content"
          >
            MENU_REMINDERS
          </div>
          <div
            v-if="vpStatus === vdStatusList.MENU_GAMES"
            class="interface-box__display__content"
          >
            MENU_GAMES
          </div>
          <div
            v-if="vpStatus === vdStatusList.MENU_EXTRAS"
            class="interface-box__display__content"
          >
            MENU_EXTRAS
          </div>
        </div>
        <footer>
        </footer>
      </div>
    </div>
  </div>
`,
};

export { displayComponent };
