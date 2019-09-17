<template>
  <div class="container">
    <div class="gridSys">
      <div class="titel">
        <h1>New E-Lerning experience</h1>
      </div>
      <div class="uTitel">
        <h3>time to learn like a pro</h3>
      </div>
      <button class="myBtn btn">let's get started</button>
      <!-- <video
        id="video_background"
        preload="auto"
        autoplay="true"
        loop="loop"
        muted="muted"
        volume="0"
      >
        <source :src="video" type="video/webm" />
      </video>-->
    </div>
    <my-navbar :folie="this.folie"></my-navbar>
  </div>
</template>

<script>
import myVid from "../assets/video/Drone - 23334.mp4";
import Navbar from "./Navbar.vue";
export default {
  data() {
    return {
      video: myVid,
      folie: 0
    };
  },
  components: {
    myNavbar: Navbar
  }
};
</script>

<style scoped>
@font-face {
  font-family: "OpenSans";
  /* src: url("../assets/fonts/openSans/opensans-bold-webfont.woff2") format("woff2"); */
  src: url("../assets/fonts/openSans/opensans-bold-webfont.woff") format("woff");
}
.gridSys {
  width: 1024px;
  height: 620px;
  display: grid;
  justify-items: start;
  grid-template-columns: 10% auto 10%;
  grid-template-rows: 20% 15% 10% 25% 10%;
  grid-template-areas:
    "space space space"
    ". titel . "
    ". uTitel ."
    ". . . "
    ". button . ";
}
.titel {
  grid-area: titel;
  align-self: end;
}
.uTitel {
  grid-area: uTitel;
  align-self: center;
  font-style: italic;
  color: gray;
}
.myBtn {
  grid-area: button;
  justify-self: end;
}
h1 {
  font-family: "OpenSans";
  font-size: 50px;
}

/* .container {
  display: grid;
  grid-template-columns: 40px auto 40px;
  grid-template-rows: 50px auto 50px;

  width: 1024px;
  height: 550px;
} */

video {
}
</style>
