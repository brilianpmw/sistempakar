<template>
  <div>
    <b-container fluid>
      <!-- User Interface controls -->

      <b-row class="mt-5 justify-content-center">
        <b-col cols="6" md="6" class="my-1">
          <card>
            <div>
              <h1 class="text-center">update Admin</h1>
              <b-alert :show="showError" variant="danger">{{
                messageError
              }}</b-alert>
              <b-form @submit="onSubmit">
                <b-form-group
                  id="input-group-1"
                  label=" Admin Name:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="Admin"
                    v-model="form.nama_lengkap"
                    type="text"
                    required
                    placeholder="Admin name ex: Dr.boyke"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-1"
                  label=" username:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="Username"
                    v-model="form.username"
                    type="text"
                    required
                    placeholder="username yang akan digunakan untuk login"
                  ></b-form-input>
                </b-form-group>

                <b-row class="justify-content-center">
                  <b-col class="text-center">
                    <b-col class="text-center">
                      <div v-if="!isLoading">
                        <b-button
                          class="mr-1"
                          type="reset"
                          variant="danger"
                          @click="$router.go(-1)"
                          >cancel</b-button
                        >
                        <b-button type="submit" variant="primary"
                          >Submit</b-button
                        >
                      </div>
                      <div v-if="isLoading">
                        <b-spinner
                          variant="primary"
                          label="Spinning"
                        ></b-spinner>
                        <p>loading...</p>
                      </div>
                    </b-col>
                  </b-col>
                </b-row>
              </b-form>
            </div>
          </card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Doctor from "@/api/DoctorApi";

export default {
  data() {
    return {
      form: {
        username: "",
        nama_lengkap: "",
      },
      isLoading: false,
      options: [],
      show: true,
      messageError: "",
      showError: false,
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      this.isLoading = true;
      let data = this.form;
      try {
        let res = await Doctor.Update(this.$route.params.id, data);
        if (res.data.success) {
          this.success = true;
          this.$notify({
            message: "success update doctor",
            icon: "fa fa-check-circle",
            horizontalAlign: "right",
            verticalAlign: "top",
            type: "success",
          });
          this.$router.push({
            path: "/admin/user",
          });

          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.showError = true;
          this.messageError = res.data.message;
        }
      } catch (err) {
        this.isLoading = false;
        console.log(err);
      }
    },
  },
  async created() {
    try {
      this.isLoading = true;
      let res = await Doctor.Detail(this.$route.params.id);

      this.form = res.data.data[0];

      // this.form.name = "ada";
      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>