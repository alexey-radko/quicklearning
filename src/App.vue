<template>
  <div id="app">
    <router-view @addScore="addScore"></router-view>
  </div>
</template>

<script>
var data = {
  records: 0,
  SD: window.parent
};

export default {
  name: "app",

  data: function() {
    return data;
  },

  methods: {
    addScore: function(s) {
      this.records += Number(s);
      console.log(" gen. records " + this.records);
      // this.SD.SetReachedEnd();
      // this.SD.SetScore(Number(this.score),100,0);
      // this.SD.CommitData();
    }
  }
};

// var SD = window.parent.parent

//       SD.SetScore(data.records, 100, 0);
//       SD.CommitData();
</script>

<style>
</style>
