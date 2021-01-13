<template>
  <div>
    <b-container fluid>
      <!-- User Interface controls -->

      <b-row class="mt-5 justify-content-center">
        <b-col cols="6" md="6" class="my-1">
          <card>
            <div>
              <h1 class="text-center">Add Penyakit</h1>
              <b-alert :show="showError" variant="danger">{{
                messageError
              }}</b-alert>
              <b-form @submit="onSubmit">
                <b-form-group
                  id="input-group-1"
                  label="  kode Penyakit:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="kode"
                    v-model="form.kode"
                    type="text"
                    required
                    placeholder="kode Penyakit"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-1"
                  label=" nama Penyakit:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="nama"
                    v-model="form.nama"
                    type="text"
                    required
                    placeholder="nama Penyakit"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-1"
                  label=" nama deskirpsi:"
                  label-for="textarea"
                >
                  <b-form-textarea
                    id="textarea"
                    v-model="form.deskripsi"
                    placeholder="masukan deskripsi"
                    rows="3"
                    required
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
                <b-form-group
                  id="input-group-1"
                  label=" nama solusi:"
                  label-for="textarea"
                >
                  <b-form-textarea
                    id="textarea"
                    v-model="form.solusi"
                    placeholder="masukan solusi"
                    rows="3"
                    required
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
                <b-form-group
                  id="file"
                  label="Pilih gambar penyakit :"
                  label-for="f"
                >
                  <b-form-file
                    @change="onFileChange"
                    id="file-default"
                  ></b-form-file>
                </b-form-group>
                <div class="row" v-if="url">
                  <div class="col-12">
                    <p class="text-center">preview gambar</p>
                  </div>
                </div>
                <b-row class="justify-content-center">
                  <div class="bg-dark" id="preview">
                    <img width="300" height="300" v-if="url" :src="url" />
                  </div>
                </b-row>
                <b-row class="justify-content-center mt-5">
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
import Penyakit from "@/api/PenyakitApi";

export default {
  data() {
    return {
      form: {
        kode: "",
        nama: "",
        deskripsi: "",
        solusi: "",
        file: null,
      },
      url: null,

      isLoading: false,
      options: [],
      show: true,
      messageError: "",
      showError: false,
    };
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.form.file = file;
      this.url = URL.createObjectURL(file);
    },
    async onSubmit(evt) {
      evt.preventDefault();
      this.isLoading = true;
      let data = new FormData();
      data.append("img_disease", this.form.file);
      data.append("kode", this.form.kode);
      data.append("nama", this.form.nama);
      data.append("deskripsi", this.form.deskripsi);
      data.append("solusi", this.form.solusi);

      try {
        let res = await Penyakit.Add(data);
        if (res.data.success) {
          this.success = true;
          this.$notify({
            message: "success add Penyakit",
            icon: "fa fa-check-circle",
            horizontalAlign: "right",
            verticalAlign: "top",
            type: "success",
          });
          this.$router.push({
            path: "/admin/Penyakit",
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
    // console.log(vendor_data[0]._id);
    // this.items = res.data.data;
  },
};
</script>