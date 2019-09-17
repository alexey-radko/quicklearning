<template>
  <div>
    <div class="container" align="center">
      <h2>Quick and Dirty 3</h2>

      <div class="card" style="width:800px">
        <img
          class="card-img-top"
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt="Card image"
          style="width:100%"
        />
        <div class="card-body">
          <h4 class="card-title">John Doe</h4>
          <p
            class="card-text"
          >Some example text some example text. John Doe is an architect and engineer</p>
          <hr />
          <nav-bar :folie="this.folie"></nav-bar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "./Navbar.vue";
var data = {
  score: 0,
  folie: 3,

  SD: window.parent,
  loc: window.location.href
};

export default {
  name: "next",
  components: {
    "nav-bar": Navbar
  },
  data: function() {
    return data;
  }
};
</script>
