<template >
  <div class="login">
    <b-container>
      <b-row class="justify-content-center mt-5">
        <b-col md="4" class="text-center">
          <b-card-group deck>
            <b-card
              header="Register"
              header-tag="header"
              footer="Register only for  User"
              footer-tag="footer"
              title="Register account"
            >
              <b-alert
                v-if="error.length > 0"
                show
                variant="danger"
                dismissible
              >
                {{ error[0] }}
              </b-alert>
              <b-form @submit="onSubmit">
                <b-form-group id="input-group-1" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="form.username"
                    type="text"
                    required
                    placeholder="Enter username"
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-1" label-for="input-1">
                  <b-form-input
                    id="input-3"
                    v-model="form.nama_lengkap"
                    type="text"
                    required
                    placeholder="Enter name"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label-for="input-2">
                  <b-form-input
                    type="password"
                    id="input-4"
                    v-model="form.password"
                    required
                    placeholder="enter password"
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label-for="input-2">
                  <b-form-input
                    type="password"
                    id="input-5"
                    v-model="form.password2"
                    required
                    placeholder="re enter password"
                  ></b-form-input>
                </b-form-group>
                <b-button
                  class="btn-fill"
                  v-if="
                    !isLoading &&
                    form.password &&
                    form.password2 &&
                    form.password == form.password2
                  "
                  type="submit"
                  variant="primary"
                  >Register</b-button
                >
                <b-button
                  class="btn-fill"
                  v-if="
                    !(
                      !isLoading &&
                      form.password &&
                      form.password2 &&
                      form.password == form.password2
                    )
                  "
                  disabled
                  type="submit"
                  variant="primary"
                  >Register</b-button
                >
                <br />
                <b-button
                  class="btn-fill mt-3"
                  v-if="!isLoading"
                  @click="MoveLogin"
                  variant="secondary"
                  >goto Login</b-button
                >
                <br />
                <b-button
                  class="btn-fill mt-3"
                  v-if="!isLoading"
                  @click="Move"
                  variant="info"
                  >Back to main</b-button
                >
                <br />

                <b-button
                  v-if="isLoading"
                  class="btn-fill"
                  disabled
                  variant="primary"
                  >loading...</b-button
                >
              </b-form>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Login from "@/api/UserApi";

export default {
  data() {
    return {
      form: {
        username: "",
        password: null,
        nama_lengkap: "",
        role: "user",
        password2: null,
      },
      isLoading: false,
      error: [],
      show: true,
    };
  },
  methods: {
    Move() {
      this.$router.push({ path: "/" });
    },
    MoveLogin() {
      this.$router.push({ path: "/login" });
    },
    async onSubmit(evt) {
      evt.preventDefault();
      this.error = [];
      this.isLoading = true;
      let data = this.form;
      let res = await Login.Register(data);
      console.log(res.data.data);
      if (res.data.success) {
        try {
          this.$notify({
            message: "Register success , please Login",
            icon: "fa fa-check-circle",
            horizontalAlign: "center",
            verticalAlign: "top",
            type: "success",
          });

          // this.$router.push({ path: "/product" });
          this.$router.push({ path: "/login" });
        } catch (err) {
          console.log(err);
        }
        // console.log(role.role);
        // console.log(this.$jwtDec);

        this.isLoading = false;
      } else {
        this.isLoading = false;
        this.error.push(res.data.message);
      }
    },
  },
  created() {},
};
</script>
