
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
        <div class="col-9 text-center">
          <h1 style="color: #6e505e; font-weight: 700">Daily habit tips</h1>
        </div>
      </div>
      <section class="mt-5">
        <div class="row justify-content-center">
          <div class="col-5 mx-4">
            <img
              width="440"
              height="220"
              src="@/assets/homepage/dailyhabbits/shower.png"
              alt="product 1"
            />
          </div>
          <div class="col-5 mx-4">
            <img
              width="440"
              height="220"
              src="@/assets/homepage/dailyhabbits/clothing.png"
              alt="product 1"
            />
          </div>
          <div class="col-5 mx-4 mt-5">
            <img
              width="440"
              height="220"
              src="@/assets/homepage/dailyhabbits/fabric.png"
              alt="product 1"
            />
          </div>
          <div class="col-5 mx-4 mt-5">
            <img
              width="440"
              height="220"
              src="@/assets/homepage/dailyhabbits/skincare.png"
              alt="product 1"
            />
          </div>
          <div class="col-5 mx-4 mt-5">
            <img
              width="440"
              height="220"
              src="@/assets/homepage/dailyhabbits/ac.png"
              alt="product 1"
            />
          </div>
          <div class="col-5 mx-4 mt-5">
            <img
              width="440"
              height="220"
              src="@/assets/homepage/dailyhabbits/washing.png"
              alt="product 1"
            />
          </div>
          <div class="col-5 mx-4 mt-5">
            <img
              width="440"
              height="220"
              src="@/assets/homepage/dailyhabbits/water.png"
              alt="product 1"
            />
          </div>
          <div class="col-5 mx-4 mt-5">
            <img
              width="440"
              height="220"
              src="@/assets/homepage/dailyhabbits/sunlight.png"
              alt="product 1"
            />
          </div>
        </div>
      </section>
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
