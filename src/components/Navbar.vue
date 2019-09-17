<template>
  <div>
    <button
      v-if="navBack"
      class="btn btn-sm btn-outline-info text-dark"
      @click="navigateBack(folie)"
    ><</button>
    <button class="btn btn-sm btn-outline-info text-dark" @click="navigateNext(folie) ">></button>
  </div>
</template>

<script>
import { centralData } from "../main";
export default {
  name: "my-navbar",
  props: ["folie"],
  data() {
    return {
      navProps: this.folie
    };
  },

  computed: {
    navBack() {
      console.log(this.navProps);
      if (Number(Number(this.navProps)) <= 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    // navigate dynamicly
    navigateNext: function(folie) {
      let pageNr = Number(folie) + 1;
      console.log(pageNr);
      this.$router.push(String(pageNr));
      this.setMark(pageNr);
    },
    navigateBack: function(folie) {
      let pageNr = Number(folie) - 1;
      console.log(pageNr);
      this.$router.push(String(pageNr));
      this.setMark(pageNr);
    },
    setMark: function(folie) {
      // if abfrage einbauen, ob man auf der Seite schon gewesen ist bzw. alles nach dem index.html/#/ muss gelöscht werden

      var currentLoc = centralData.loc.substring(
        centralData.loc.toLowerCase().lastIndexOf("/scormcontent/") + 14,
        centralData.loc.length
      );

      console.log("cuurent loc is " + currentLoc);

      var page = currentLoc.substring(0, currentLoc.lastIndexOf("/") + 1);
      centralData.SD.SetBookmark(page + folie, document.title);

      console.log("page " + page);

      centralData.SD.CommitData();
      this.testBookmark();
      // this.audio.pause();
      // this.audio.currentTime = 0;
    },

    testBookmark: function() {
      var bookmark = centralData.SD.GetBookmark();
      console.log("Bookmark is: " + bookmark);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
