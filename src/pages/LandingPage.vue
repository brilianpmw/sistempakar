
<template>
  <div style="background-color: #f8f9f4">
    <b-navbar variant="faded" style="background-color: #f8f9f4; border: none">
      <b-navbar-brand href="/">
        <img src="@/assets/homepage/asset/logo.png" alt="Kitten" />
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto mr-5"> </b-navbar-nav>
    </b-navbar>
    <div class="row">
      <div class="col-9">
        <div style="padding-bottom: 12vh" class="row justify-content-center">
          <div class="col-10">
            <img
              src="@/assets/homepage/home/banner2.png"
              width="1000"
              height="600"
              alt="banner"
            />
          </div>
        </div>
      </div>
      <div class="col-2" style="margin-left: 100px">
        <div style="padding-bottom: 12vh" class="row justify-content-center">
          <div class="col-10">
            <router-link to="/">
              <h3 style="color: #ba55d3">Home</h3>
            </router-link>
            <router-link to="/welcome">
              <h3 style="color: #ba55d3">Welcome</h3>
            </router-link>
            <router-link to="/dryskin"
              ><h3 style="color: #ba55d3">Skin Type</h3></router-link
            >
            <router-link to="/login"
              ><h3 style="color: #ba55d3">Consultation</h3></router-link
            >
            <router-link to="/treatment"
              ><h3 style="color: #ba55d3">Treatment</h3></router-link
            >
            <router-link to="/habbits"
              ><h3 style="color: #ba55d3">Habit</h3></router-link
            >
            <router-link to="/references"
              ><h3 style="color: #ba55d3">References</h3></router-link
            >
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="row justify-content-center md-5">
      <div class="col-10 text-center">
        <p style="text-align: justify; text-justify: newspaper">
          Hi there! Welcome. This site is made in 2020 to help anyone who
          suffers from a skin condition that is related to dry skin. It all
          started with my interest and passion for skincare and the beauty of
          perfectly imperfect skin. Every human has their skin type and their
          preferences when it comes to diet, beauty products, skincare, and so
          many others . <br /><br />Now why dry skin? Well, I experience it
          myself. Although what I am facing isn't anything severe, there are
          times where I don't feel confident about it. There are times where I
          try researching as so as trying products, as it turns out none of them
          work effectively.They were things that made me a little conscious and
          scared un-knowing why is it happening to me. As time pass by, I
          decided to consult my self with a dermatologist. Every time I went
          there, answers that came back were "it's not something to be afraid
          of" or "it's nothing severe." But what questioned to my head was, why
          isn't it gone yet? Until when will I have this condition. In the end,
          I realize it was genetic, and the only way is to take care of it step
          by step, little by little. <br /><br />
          It was a relief knowing what is this? Why is it happening? Knowing
          these things will guide you on what to do and what to change to
          minimize your problem. That is why I created this platform for you
          all, knowing that "dry skin" is a common thing to occur. <br /><br />
          If you don't know your ways here, here's a little guidance. First,
          start with the "dry skin" page to add a little knowledge regarding
          what it is. Next, if you are ready, consult your self by doing a
          self-check that is accessible on the "consultation" page. It will
          automatically give you the result on the information about the skin
          condition you are suffering and guidance to the treatment. For general
          treatment, you can go ahead and click on the "treatment" page.
          Additionally, All the resources used are on the "resource" page. Now
          feel free to start! Best regards, Surface.
          <br /><br /><br /><br />
          Best regards,<br /><br /><br />
          Surface.
        </p>
      </div>
    </div> -->
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
