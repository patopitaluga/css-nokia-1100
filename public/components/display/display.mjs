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
          v-if="vpStatus === vdStatusList.INTRO && false"
          alt=""
          src="./display1.png"
          class="interface-box__display__content"
        />
        <div
          v-if="vpStatus === vdStatusList.INTRO"
          id="display"
          class="interface-box__display__content"
          style="display: flex;height: 100%;"
        >
        </div>
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
        <footer>
        </footer>
      </div>
    </div>
  </div>
`,
  mounted: function() {
    const canvas1 = document.createElement('canvas');
    const context1 = canvas1.getContext('2d');

    const imageObj = new Image();
    imageObj.onload = function() {
      context1.drawImage(imageObj, 0, 0);
    };
    imageObj.src = '1.jpg';

    const canvas2 = document.createElement('canvas');
    const context2 = canvas2.getContext('2d');

    const imageObj2 = new Image();
    imageObj2.onload = function() {
      context2.drawImage(imageObj2, 0, 0);
    };
    imageObj2.src = '2.jpg';

    const gutter = .35;
    const pixelSize = 2;
    let sketch = function(p) {
      p.setup = function() {
        p.background(92, 204, 7);
        p.createCanvas(184, 152);
        p.noStroke();
        p.fill(0, 0, 0);
      }

      let count = 0;
      const delay = 65;
      p.draw = function() {
        if (count === delay * 1) {
          p.background(92, 204, 7);
          for (var x = 0; x < 92; x++) {
            for (var y = 0; y < 65; y++) {
              const pixelColor = context1.getImageData(x, y, 1, 1).data; // rgba e [0,255]
              // fill(pixelColor[0], pixelColor[1], pixelColor[2]);
              const average = (pixelColor[0] + pixelColor[1] + pixelColor[2]) / 3;
              // if (average > 128) {
              if (average < 90) {
                p.rect(x * (pixelSize + gutter), y * (pixelSize + gutter), pixelSize, pixelSize);
              }
            }
          }
        }
        count++;
        if (count === delay * 2) {
          p.background(92, 204, 7);
          for (var x = 0; x < 92; x++) {
            for (var y = 0; y < 65; y++) {
              const pixelColor = context2.getImageData(x, y, 1, 1).data; // rgba e [0,255]
              // fill(pixelColor[0], pixelColor[1], pixelColor[2]);
              const average = (pixelColor[0] + pixelColor[1] + pixelColor[2]) / 3;
              // if (average > 128) {
              if (average < 90) {
                p.rect(x * (pixelSize + gutter), y * (pixelSize + gutter), pixelSize, pixelSize);
              }
            }
          }
          count = 0;
        }
      }
    }

    new p5(sketch, 'display');
  },
};

export { displayComponent };
