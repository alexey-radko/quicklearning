<template>
  <div>
    <div class="container" align="center">
      <!-- <h1>
        <label for="customRange">Grade yourself</label>
      </h1>

      <input type="text" class="form-control w-25" v-model="score" />
      <input type="range" class="custom-range" id="customRange" min="0" max="100" v-model="score" />
      <button class="btn" @click="addScore(score)">push me!</button>-->
      <h2>Quick and Dirty 4</h2>

      <div class="card" style="width:800px">
        <img
          class="card-img-top"
          src="https://images.unsplash.com/photo-1567972223014-d8b1e7ac9fc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="Card image"
          style="width:100%"
        />
        <div class="card-body">
          <div>
            <h3 class="card-text">Was ist auf dem Bild abgebildet?</h3>

            <div class="container mt-3">
              <label class="p-2 bg-warning pl-md-4 pr-md-5" for="check1">
                <input
                  @click=" checkAnswer($event)"
                  type="checkbox"
                  class="form-check-input"
                  id="check1"
                  name="option1"
                  value="something"
                />Scheinwerfer
              </label>

              <label class="p-2 bg-warning pl-md-4" for="check2">
                <input
                  @click=" checkAnswer($event)"
                  type="checkbox"
                  class="form-check-input"
                  id="check2"
                  name="option2"
                  value="something"
                />Auto
              </label>

              <label class="p-2 bg-warning pl-md-4 pr-md-5" for="check3">
                <input
                  @click=" checkAnswer($event)"
                  type="checkbox"
                  class="form-check-input"
                  id="check3"
                  name="option2"
                  value="something"
                />Porsche
              </label>
              <button type="submit" class="btn btn-primary" @click="sendScore">Submit</button>
              <br />
              <span v-if="records>0">your Score {{records}}</span>
            </div>
            <hr />
          </div>
          <br />
          <div @click="setMark(3)" class="btn btn-sm btn-outline-info text-dark">
            <router-link to="/3"><</router-link>
          </div>

          <button class="btn btn-sm btn-outline-info text-dark" @click="finish">finish the course</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var data = {
  score: 30,
  records: 0,
  SD: window.parent,
  loc: window.location.href,
  folie: 4
};

export default {
  name: "last",
  data: function() {
    return data;
  },
  methods: {
    checkAnswer: function(event) {
      if (event.target.checked) {
        this.records += this.score;
      } else {
        this.records -= this.score;
      }
    },
    sendScore: function() {
      this.SD.SetScore(Number(this.records), 90, 62);
      this.SD.CommitData();
    },
    finish: function() {
      this.SD.SetReachedEnd();
      this.SD.CommitData();
    },
    addScore: function(score) {
      this.records += Number(score);
      var getmark = this.SD.GetBookmark();
      console.log("next vue:  " + getmark);
    },
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
