
<template>
  <div style="background-color: #f8f9f4">
    <b-navbar variant="faded" style="background-color: #f8f9f4; border: none">
      <b-navbar-brand href="#">
        <img src="@/assets/homepage/asset/logo.png" alt="Kitten" />
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto mr-5">
        <b-nav-item to="/">Welcome</b-nav-item>
        <b-nav-item to="/dryskin">Skin Type</b-nav-item>
        <b-nav-item to="/login">Consultation</b-nav-item>
        <b-nav-item to="/treatment">Treatment</b-nav-item>
        <b-nav-item to="/habbits">Habits</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <b-container>
      <div class="row justify-content-center mt-5">
        <div class="col-3">
          <h1 style="color: #6e505e; font-weight: 700">Treatments</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mt-5">
          <img
            width="100%"
            height="100%"
            src="@/assets/homepage/treatment/upper.png"
            alt="product 1"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12 mt-5">
          <img
            width="100%"
            height="100%"
            src="@/assets/homepage/treatment/aloevera.png"
            alt="product 1"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12 mt-5">
          <img
            width="100%"
            height="100%"
            src="@/assets/homepage/treatment/lvl2.png"
            alt="product 1"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12 mt-5">
          <img
            width="100%"
            height="100%"
            src="@/assets/homepage/treatment/lvl3.png"
            alt="product 1"
          />
        </div>
      </div>
    </b-container>
    <div class="row justify-content-center mt-5 pb-5">
      <div class="col-8">
        <p class="text-center">copyright 2021 surface</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
