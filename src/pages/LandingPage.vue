
<template>
  <div style="background-color: #f8f9f4">
    <b-navbar variant="faded" style="background-color: #f8f9f4">
      <b-navbar-brand href="#">
        <img src="@/assets/homepage/asset/logo.png" alt="Kitten" />
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto mr-5">
        <b-nav-item to="/">Dry Skin</b-nav-item>
        <b-nav-item to="/login">Consultation</b-nav-item>
        <b-nav-item to="/treatment">Treatment</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <div style="padding-bottom: 12vh" class="row justify-content-center">
      <div class="col-10">
        <img src="@/assets/homepage/asset/banner.png" alt="banner" />
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
