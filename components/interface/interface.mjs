import { keypadbottomComponent } from '../keypadbottom/keypadbottom.mjs';
import { keypadtopComponent } from '../keypadtop/keypadtop.mjs';
import { displayComponent } from '../display/display.mjs';

const interfaceComponent = {
  components: {
    keypadbottom: keypadbottomComponent,
    keypadtop: keypadtopComponent,
    display: displayComponent,
  },
  props: {
    vpShadow: {
      type: Boolean,
      default: false,
    },
    vpStatus: {
      type: Number,
      default: 0,
    },
  },
  template: `
  <div
    class="interface-box"
    :class="{
      'interface-box--shadow': vpShadow,
    }"
  >
    <header>
    </header>
    <div
      class="interface-box__bg interface-box__bg--top"
      style="display: flex; align-items: center; justify-content: center;"
    >
      <div class="interface-box__speaker">
      </div>
    </div>
    <div class="interface-box__bg interface-box__bg--curve-left-top">
    </div>
    <div class="interface-box__bg interface-box__bg--curve-right-top">
    </div>
    <div class="interface-box__bg interface-box__bg--middle">
    </div>
    <div class="interface-box__bg interface-box__bg--bottom">
    </div>
    <div class="interface-box__bg interface-box__bg--curve-left-bottom">
    </div>
    <div class="interface-box__bg interface-box__bg--curve-right-bottom">
    </div>
    <display
      v-if="!vpShadow"
      :vp-status="vpStatus"
    >
    </display>
    <keypadtop
      v-if="!vpShadow"
      @navup="$emit('navup')"
      @navdown="$emit('navdown')"
    >
    </keypadtop>
    <keypadbottom v-if="!vpShadow">
    </keypadbottom>
    <footer>
    </footer>
  </div>
`,
};

export { interfaceComponent };
