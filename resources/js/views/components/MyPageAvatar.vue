<template>
  <div class="header__center">
    <form @submit.prevent="save" class="header__center-image" action="POST">
      <img
        @mouseenter="hoverClass = 'show-upload'"
        @mouseleave="hoverClass = 'hide-upload'"
        class="image-block"
        :src="userAvatar[userAvatar.length - 1].path"
        alt=""
      />
      <div
        @mouseenter="hoverClass = 'show-upload'"
        @mouseleave="hoverClass = 'hide-upload'"
        :class="hoverClass"
        class="header__center-group__input"
      >
        <input @change="handleOnChange" id="headerSearchImage" type="file" />
        <label v-if="sessionId == user.id" for="headerSearchImage"></label>
      </div>
      <div class="canvas-group" v-show="canvasShow">
        <div class="canvas__input-group">
          <input
            v-model="inputHeightValue"
            type="number"
            class="input-height"
          /><input
            v-model="inputWidthValue"
            type="number"
            class="input-width"
          />
          <input type="number" v-model="inputTopValue" />
          <input type="number" v-model="inputLeftValue" />
        </div>
        <img ref="canvasImg" class="canvas-img" :src="picSrc" alt="" />
        <canvas
          @mousedown="mousedown"
          @mousemove="mousemove"
          @mouseup="mouseup"
          ref="canvas"
          :class="canvas"
          class="canvas"
        ></canvas>
        <button type="submit" class="canvas-btn">сохранить миниатюру</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "myPageAvatar",
  props: {
    user: {},
    sessionId: {},
    userAvatar: [],
  },

  data: () => ({
    ctx: {},
    picSrc: "",
    inputWidthValue: 350,
    inputHeightValue: 250,
    inputTopValue: 0,
    inputLeftValue: 0,
    drag: false,
    hoverClass: {},
    canvas: {},
    avatar: "",
    createAvatar: {},
    canvasShow: false,
    formData: {},
  }),

  methods: {
    mousedown(e) {
      this.drag = true;
      return this.drag;
    },

    mouseup(e) {
      this.drag = false;
      return this.drag;
    },

    mousemove(e) {
      let ctx = this.$refs.canvas.getContext("2d");
      let canvas = this.$refs.canvas;
      let selection = {
        mDown: this.drag,
        x: 0,
        y: 0,
        top: 50,
        left: this.inputLeftValue,
        width: parseInt(this.inputWidthValue),
        height: parseInt(this.inputHeightValue),
      };

      function CheckSelection() {
        if (selection.width < 100) {
          selection.width = 100;
        }

        if (selection.height < 100) {
          selection.height = 100;
        }

        if (selection.width > canvas.width) {
          selection.width = canvas.width;
        }

        if (selection.height > canvas.height) {
          selection.height = canvas.height;
        }

        if (selection.left < 0) {
          selection.left = 0;
        }

        if (selection.top < 0) {
          selection.top = 0;
        }

        if (selection.left > canvas.width - selection.width) {
          selection.left = canvas.width - selection.width;
        }

        if (selection.top > canvas.height - selection.height) {
          selection.top = canvas.height - selection.height;
        }
      }
      function Update() {
        DrawSelection();
      }

      function DrawSelection() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)";

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.clearRect(
          selection.left,
          selection.top,
          selection.width,
          selection.height
        );

        ctx.strokeStyle = "#fff";

        ctx.beginPath();

        ctx.moveTo(selection.left, 0);
        ctx.lineTo(selection.left, canvas.height);

        ctx.moveTo(selection.left + selection.width, 0);
        ctx.lineTo(selection.left + selection.width, canvas.height);

        ctx.moveTo(0, selection.top);
        ctx.lineTo(canvas.width, selection.top);

        ctx.moveTo(0, selection.top + selection.height);
        ctx.lineTo(canvas.width, selection.top + selection.height);

        ctx.stroke();
      }
      if (selection.mDown == true) {
        selection.x = e.x - canvas.offsetLeft - 383;
        selection.y = e.y - canvas.offsetTop;

        if (
          (this.inputLeftValue = selection.x - this.inputWidthValue / 2 >= 0)
        ) {
          this.inputLeftValue = selection.x - this.inputWidthValue / 2;
        } else {
          this.inputLeftValue = 0;
        }
        if (this.inputLeftValue >= canvas.width - this.inputWidthValue) {
          this.inputLeftValue = canvas.width - this.inputWidthValue;
        }

        if (
          (this.inputTopValue = selection.y - this.inputHeightValue / 2 >= 0)
        ) {
          this.inputTopValue = selection.y - this.inputHeightValue / 2;
        } else {
          this.inputTopValue = 0;
        }
        if (this.inputTopValue >= canvas.height - this.inputHeightValue) {
          this.inputTopValue = canvas.height - this.inputHeightValue;
        }

        selection.left = selection.x - selection.width / 2;
        selection.top = selection.y - selection.height / 2;

        CheckSelection();

        Update();
      }
    },

    handleOnChange(e) {
      this.avatar = e.target.files[0];

      let urlImage = URL.createObjectURL(this.avatar);

      let canvas = this.$refs.canvas;

      let canvasImg = this.$refs.canvasImg;

      let pic = new Image();

      pic.src = this.picSrc = urlImage;

      this.canvasShow = true;

      pic.onload = function (e) {
        canvas.height = canvasImg.height;

        canvas.width = canvasImg.width;

        return;
      };

      const formData = new FormData();

      formData.set("avatar", this.avatar);

      this.formData = formData;

      return;
    },

    async save() {
      await axios
        .post("/upload", this.formData)
        .then((response) => (this.createAvatar = response.data));
      this.$emit("avatar", this.createAvatar);
      this.canvasShow = false;
      return;
    },
  },
};
</script>
