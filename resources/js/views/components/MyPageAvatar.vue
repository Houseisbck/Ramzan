<template>
  <div class="imageBlock">
    <div
      class="imageBlock__canvas-group"
      ref="canvasGroup"
      v-click-outside="toggleCanvasShow"
      v-show="canvasShow"
    >
      <div class="imageBlock__canvas-box" ref="canvasBox">
        <img
          id="canvasImg"
          ref="canvasImg"
          class="imageBlock__canvas-img"
          :src="picSrc"
          alt=""
        />
        <canvas
          @mousedown="mousedown"
          @mousemove="mousemove"
          @mouseup="mouseup"
          ref="canvas"
          :class="canvas"
          class="imageBlock__canvas"
        ></canvas>
      </div>
      <div class="imageBlock__canvas-input-group">
        <button
          @click.prevent="save"
          type="submit"
          class="imageBlock__canvas-btn"
        >
          сохранить миниатюру
        </button>
        <div class="imageBlock__canvas-input-box">
          <input
            v-model="inputHeightValue"
            type="number"
            class="imageBlock__canvas-input"
          />
          <div class="imageBlock__canvas-input-descr">высота</div>
        </div>
        <div class="imageBlock__canvas-input-box">
          <input
            v-model="inputWidthValue"
            type="number"
            class="imageBlock__canvas-input"
          />
          <div class="imageBlock__canvas-input-descr">ширина</div>
        </div>
      </div>
    </div>
    <form @submit.prevent="save" class="imageBlock__form" action="POST">
      <img
        v-if="userAvatar[0]"
        @mouseenter="hoverClass = 'show-upload'"
        @mouseleave="hoverClass = 'hide-upload'"
        @click="toggleShowSlider"
        class="imageBlock__image"
        :src="userAvatar[0].path_miniature"
        alt=""
      />
      <div
        class="imageBlock__slider"
        v-click-outside="toggleShowSlider"
        v-if="sliderShow === true"
      >
        <div
          class="imageBlock__slider-group"
          v-for="(objectAvatar, avatar) in userAvatar"
          :key="avatar"
        >
          <div
            class="imageBlock__slider-box"
            :style="{ 'margin-left': '-' + 100 * sliderIndex + '%' }"
          >
            <div class="imageBlock__slider-image-group">
              <img
                class="imageBlock__slider-image"
                :src="objectAvatar.path"
                alt=""
              />
            </div>
            <div class="imageBlock__slider-descr">
              <div class="imageBlock__slider-crud">
                <button
                  @click.prevent="deleteImg(objectAvatar)"
                  class="imageBlock__slider-delete"
                >
                  Удалить изображение
                </button>
                <button
                  @click.prevent="editImg(objectAvatar)"
                  class="imageBlock__slider-edit"
                >
                  Редактировать
                </button>
                <button
                  @click.prevent="switchImg(objectAvatar)"
                  class="imageBlock__slider-upload"
                >
                  Сделать фотографией профиля
                </button>
                <div class="imageBlock__slider-slick-group">
                  <button
                    @click.prevent="SliderSlickPrev"
                    class="imageBlock__slider-slick-prev"
                  ></button>
                  <button
                    @click.prevent="SliderSlickNext"
                    class="imageBlock__slider-slick-next"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        @mouseenter="hoverClass = 'show-upload'"
        @mouseleave="hoverClass = 'hide-upload'"
        :class="hoverClass"
        class="imageBlock__group-input"
      >
        <input @change="handleOnChange" id="headerSearchImage" type="file" />
        <label v-if="sessionId == user.id" for="headerSearchImage"></label>
      </div>
    </form>
  </div>
</template>

<style scoped>
@import "slick-carousel/slick/slick.css";
</style>

<script>
export default {
  name: "myPageAvatar",

  props: {
    user: {},
    sessionId: {},
    userAvatar: [],
  },

  data: () => ({
    sliderIndex: 0,
    sliderShow: true,
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
    updateAvatar: {},
    canvasShow: false,
    selection: {},
  }),

  methods: {
    SliderSlickPrev() {
      if (this.sliderIndex > 0) {
        this.sliderIndex--;
      }
    },

    SliderSlickNext() {
      if (this.sliderIndex < this.userAvatar.length - 1) {
        this.sliderIndex++;
      }
    },

    toggleCanvasShow() {
      this.canvasShow = false;
    },

    async switchImg(objectAvatar) {
      const switchAvatar = new FormData();
      objectAvatar = JSON.stringify(objectAvatar);
      switchAvatar.append("objectAvatar", objectAvatar);
      await axios
        .post("/updateAvatarImage", switchAvatar)
      //   .then((response) => (this.updateAvatar = response.data));
      // this.$emit("avatar", this.updateAvatar);
      return;
    },

    async deleteImg(objectAvatar) {
      if (this.sliderIndex > 0) {
        this.sliderIndex--;
      }
      const deleteAvatar = new FormData();
      objectAvatar = JSON.stringify(objectAvatar);
      deleteAvatar.append("objectAvatar", objectAvatar);
      await axios
        .post("/deleteAvatarImage", deleteAvatar)
        .then((response) => (this.updateAvatar = response.data));
      this.$emit("avatar", this.updateAvatar);
      return;
    },

    toggleShowSlider() {
      this.sliderShow = !this.sliderShow;
      return;
    },

    showSlider() {
      this.sliderShow = true;
      return;
    },

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
        top: this.inputTopValue,
        left: this.inputLeftValue,
        width: parseInt(this.inputWidthValue),
        height: parseInt(this.inputHeightValue),
      };

      this.selection = selection;

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
        selection.x = e.x - $("#canvasImg").offset().left;
        selection.y = e.y - $("#canvasImg").offset().top;

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

        if (this.inputWidthValue >= canvas.width) {
          this.inputWidthValue = canvas.width;
        }

        if (this.inputHeightValue >= canvas.height) {
          this.inputHeightValue = canvas.height;
        }

        selection.left = selection.x - selection.width / 2;
        selection.top = selection.y - selection.height / 2;

        CheckSelection();

        Update();

        return;
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

      this.canvas = canvas;

      pic.onload = function (e) {
        canvas.height = canvasImg.height;

        canvas.width = canvasImg.width;

        return;
      };
      return;
    },

    async save() {
      const uploadAvatar = new FormData();
      let canvas = {
        width: this.canvas.width,
        height: this.canvas.height,
      };
      let canvasJson = JSON.stringify(canvas);
      let selectionJson = JSON.stringify(this.selection);
      uploadAvatar.set("avatar", this.avatar);
      uploadAvatar.append("selection", selectionJson);
      uploadAvatar.append("canvas", canvasJson);
      await axios
        .post("/uploadAvatar", uploadAvatar)
        .then((response) => (this.updateAvatar = response.data));
      this.$emit("avatar", this.updateAvatar);
      this.canvasShow = false;
      return;
    },
  },
};
</script>