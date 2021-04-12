<template>
  <div class="wrapper">
    <side-bar v-if="role == 'admin'">
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Home</p>
      </sidebar-link>
      <sidebar-link to="/admin/admin">
        <i class="nc-icon nc-settings-tool-66"></i>
        <p>Setting admin</p>
      </sidebar-link>
      <sidebar-link to="/admin/doctor">
        <i class="nc-icon nc-single-02"></i>
        <p>Setting doctor</p>
      </sidebar-link>
      <sidebar-link to="/admin/user">
        <i class="nc-icon nc-satisfied"></i>
        <p>Setting User</p>
      </sidebar-link>
      <sidebar-link to="/admin/diagnosa">
        <i class="nc-icon nc-ambulance"></i>
        <p>history of diagnosis</p>
      </sidebar-link>
      <sidebar-link :to="url">
        <i class="nc-icon nc-lock-circle-open"></i>
        <p>edit profile</p>
      </sidebar-link>

      <!-- <sidebar-link to="/admin/notifications">
        <i class="nc-icon nc-bell-55"></i>
        <p>Notifications</p>
      </sidebar-link> -->
    </side-bar>
    <side-bar v-if="role == 'dokter'">
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Home</p>
      </sidebar-link>
      <sidebar-link to="/admin/gejala">
        <i class="nc-icon nc-notes"></i>
        <p>Setting Symptom</p>
      </sidebar-link>
      <sidebar-link to="/admin/penyakit">
        <i class="nc-icon nc-paper-2"></i>
        <p>Setting Disease</p>
      </sidebar-link>
      <sidebar-link to="/admin/rule">
        <i class="nc-icon nc-tag-content"></i>
        <p>Setting Rule</p>
      </sidebar-link>
      <sidebar-link to="/admin/diagnosa">
        <i class="nc-icon nc-ambulance"></i>
        <p>history of diagnosis</p>
      </sidebar-link>
      <sidebar-link :to="url">
        <i class="nc-icon nc-lock-circle-open"></i>
        <p>edit profile</p>
      </sidebar-link>

      <!-- <sidebar-link to="/admin/notifications">
        <i class="nc-icon nc-bell-55"></i>
        <p>Notifications</p>
      </sidebar-link> -->
    </side-bar>
    <side-bar v-if="role == 'user'">
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Home</p>
      </sidebar-link>
      <sidebar-link to="/admin/konsultasi">
        <i class="nc-icon nc-notes"></i>
        <p>Consultation</p>
      </sidebar-link>
      <sidebar-link to="/admin/diagnosa">
        <i class="nc-icon nc-ambulance"></i>
        <p>history of diagnosis</p>
      </sidebar-link>
      <sidebar-link :to="url">
        <i class="nc-icon nc-lock-circle-open"></i>
        <p>edit profile</p>
      </sidebar-link>

      <!-- <sidebar-link to="/admin/notifications">
        <i class="nc-icon nc-bell-55"></i>
        <p>Notifications</p>
      </sidebar-link> -->
    </side-bar>

    <div class="main-panel">
      <top-navbar :name="name"></top-navbar>

      <dashboard-content @click="toggleSidebar"> </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu.vue";
export default {
  data() {
    return {
      name: "",
      id: "",
      role: "",
      url: "",
    };
  },
  created() {
    let token = this.$cookie.get("token");
    let data = JSON.parse(this.$cookie.get("data_user"));
    if (this.$cookie.get("data_user") && this.$cookie.get("token")) {
      console.log(data.role);
      if (token !== null && data.role == "admin") {
        this.role = "admin";
      } else if (token !== null && data.role == "dokter") {
        this.role = "dokter";
      } else if (token !== null && data.role == "user") {
        this.role = "user";
      } else {
        this.$router.push({ path: "/login" });
      }
    } else {
      this.$router.push({ path: "/login" });
    }

    if (data.username === null) {
      this.$notify({
        message: "please login again",
        icon: "fa fa-sign-in-alt",
        horizontalAlign: "right",
        verticalAlign: "top",
        type: "warning",
      });

      this.$router.push({ path: "/login" });
    }
    this.url = "/admin/profile/update/" + data._id;
    this.id = data._id;
    this.name = data.username;
  },

  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu,
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
