const keypadtopComponent = {
  template: `
  <table class="keypad--top">
    <tr class="keypad--top__top-row">
      <td>
        <button>
          <div style="width: 14px; height: 14px; border: 2px #bc483b solid; border-radius: 50%;box-sizing: border-box;margin: auto;display: flex;align-items: center; justify-content: center;">
            <div style="width: 2px; height: 6px; border: 2px #bc483b solid; border-radius: 2px;box-sizing: border-box;margin: auto;">
            </div>
          </div>
        </button>
      </td>
      <td rowspan="2">
        <button>
          <div style="width: 30px; height: 5px; background: #006cad;margin: auto;">
          </div>
        </button>
      </td>
      <td>
        <button
          type="button"
          @click="$emit('navup')"
        >
          <div style="
            height: 10px;
            overflow: hidden;
            position: relative;
            width: 100%;
          ">
            <div style="
              border: 3px #454442 solid;
              width: 10px;
              height: 10px;
              border-radius: 2px;
              transform: rotate(45deg);
              transform-origin: center center;
              position: absolute;
              top: 0;
              left: 50%;
              margin-left: -5px;
              margin-top: 3px;
            ">
            </div>
          </div>
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <button>
          <strong>C</strong>
        </button>
      </td>
      <td>
        <button
          type="button"
          @click="$emit('navdown')"
        >
          <div style="
            height: 10px;
            overflow: hidden;
            position: relative;
            width: 100%;
          ">
            <div style="
              border: 3px #454442 solid;
              width: 10px;
              height: 10px;
              border-radius: 2px;
              transform: rotate(45deg);
              transform-origin: center center;
              position: absolute;
              top: 0;
              left: 50%;
              margin-left: -5px;
              margin-top: -8px;
            ">
            </div>
          </div>
        </button>
      </td>
    </tr>
  </table>
`,
};

export { keypadtopComponent };
