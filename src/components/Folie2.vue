<template>
  <div>
    <!-- <video autoplay muted loop id="myVideo">
      <source :src="myVideo" type="video/mp4" />Your browser does not support HTML5 video.
    </video>-->
    <div class="container" align="center">
      <h2>Quick and Dirty 2</h2>

      <div class="card" style="width:800px">
        <img class="card-img-top" :src="img" alt="Card image" style="width:100%" />
        <img class="card-img-top" :src="gifImg" alt="Card image" style="width:100%" />
        <img class="card-img-top" :src="svg" alt="Card image" style="width:100%" />
        <div class="card-body">
          <h4 class="card-title">John Doe</h4>
          <p
            class="card-text"
          >Some example text some example text. John Doe is an architect and engineer</p>
          <hr />
          <!-- <div @click="setMark(1)" class="btn btn-sm btn-outline-info text-dark">
            <router-link to><</router-link>
          </div>-->

          <!-- <div @click="setMark(3)" class="btn btn-sm btn-outline-info text-dark">
            <router-link to="/{nextFolie}">></router-link>
          </div>-->
          <!-- <router-link tag="span" to="/3">
            <button class="btn btn-sm btn-outline-info text-dark" @click="setMark(3)">></button>
          </router-link>-->
          <nav-bar :folie="this.folie"></nav-bar>
          <button class="btn btn-sm btn-outline-info text-dark" @click="stopAudio()">stop playing</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { centralData } from "../main";
import Navbar from "./Navbar.vue";
// import myImage from  "<%= BASE_URL %>./images/kodak.jpg";
import myImage from "../assets/images/kodak.jpg";
import myGif from "../assets/images/child.gif";
import mySvg from "../assets/images/I Can't Adult SVG Cut File.svg";
import myVid from "../assets/video/Drone - 23334.mp4";
var data = {
  score: 0,
  folie: 2,
  // img: require("../../images/kodak.jpg"),
  img: myImage,
  gifImg: myGif,
  svg: mySvg,

  audio: new Audio(require("../assets/audio/Beat_Your_Competition.mp3"))
};

export default {
  name: "next",
  data: function() {
    return data;
  },
  components: {
    "nav-bar": Navbar
  },

  created: function() {
    // this.playAudio();
  },
  methods: {
    playAudio: function() {
      var playPromise = this.audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(function() {
            console.log("Playing....");
          })
          .catch(function(error) {
            console.log("Failed to play...." + error);
          });
      }
    },
    stopAudio: function() {
      this.audio.stop();
    }
  }
};
</script>
