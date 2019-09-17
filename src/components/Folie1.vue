<template>
  <div>
    <div class="container" align="center">
      <div>
        <!-- <label for="customRange">grade yourself</label>
        <input type="text" class="form-control w-25" v-model="score" />
        <input type="range" class="custom-range" id="customRange" min="0" max="30" v-model="score" />
        <button class="btn" @click="$emit('addScore', score)">push me!</button>-->
        <!-- <button class="btn btn-primary stretched-link" type="button"  v-on:click="send_statement">submit</button> -->
      </div>
      <h2>Quick and Dirty 1</h2>

      <div class="card" style="width:800px">
        <img
          class="card-img-top"
          src="https://images.unsplash.com/photo-1536585319842-8e16d53d64c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Card image"
          style="width:100%"
        />
        <div class="card-body">
          <h4 class="card-title">John Doe</h4>
          <p
            class="card-text"
          >Some example text some example text. John Doe is an architect and engineer</p>
          <!-- <button class="btn btn-primary stretched-link" type="button"  v-on:click="send_statement">Send Statements</button> -->
          <hr />
          <nav-bar :folie="this.folie"></nav-bar>
          <!-- <router-link class="btn btn-sm btn-outline-info text-dark" to="/checkout">checkout</router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "./Navbar.vue";
var data = {
  score: 0,
  SD: window.parent,
  loc: window.location.href,
  folie: 1
};
var getmark = data.SD.GetBookmark();
console.log("start vue:  " + getmark);

export default {
  name: "start",
  components: {
    "nav-bar": Navbar
  },
  data: function() {
    return data;
  },
  methods: {
    setMark: function(folie) {
      // if abfrage einbauen, ob man auf der Seite schon gewesen ist bzw. alles nach dem index.html/#/ muss gelöscht werden

      var currentLoc = this.loc.substring(
        this.loc.toLowerCase().lastIndexOf("/scormcontent/") + 14,
        this.loc.length
      );

      console.log("cuurent loc is " + currentLoc);

      var page = currentLoc.substring(0, currentLoc.lastIndexOf("/") + 1);
      this.SD.SetBookmark(page + folie, document.title);

      console.log("page " + page);

      this.SD.CommitData();
      this.testBookmark();
    },

    testBookmark: function() {
      var bookmark = this.SD.GetBookmark();
      console.log("Bookmark is: " + bookmark);
    }
  }
};
</script>
