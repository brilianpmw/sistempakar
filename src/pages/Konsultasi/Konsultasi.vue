<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-8">
          <div>
            <b-card no-body class="text-center pt-2 pb-2">
              <div class="">pilih gejala yang dirasakan</div>
            </b-card>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-8">
          <div>
            <b-card no-body class="pt-2 pb-2">
              <div class="ml-4">
                <b-form @submit="onSubmit">
                  <b-form-group
                    label="daftar gejala"
                    v-slot="{ ariaDescribedby }"
                  >
                    <b-form-checkbox-group
                      v-model="form.gejala"
                      :options="options"
                      :aria-describedby="ariaDescribedby"
                      name="flavour-2a"
                      stacked
                    ></b-form-checkbox-group>
                  </b-form-group>
                  <b-row class="justify-content-center">
                    <b-col class="text-center">
                      <b-col v-if="!show" class="text-center">
                        <div v-if="isLoading">
                          <b-spinner
                            variant="primary"
                            label="Spinning"
                          ></b-spinner>
                          <p>menganalisa...</p>
                        </div>
                        <div v-else>
                          <b-button
                            v-if="form.gejala.length > 0"
                            type="submit"
                            variant="primary"
                            >Submit</b-button
                          >
                        </div>
                      </b-col>
                    </b-col>
                  </b-row>
                </b-form>
              </div>
            </b-card>
          </div>
        </div>
      </div>
      <div v-if="show" class="row justify-content-center">
        <div v-if="found" class="col-8">
          <div style="background-color: #d9d9d9" class="card mb-3">
            <div class="card-header text-black text-center">Result</div>
            <div class="card-body">
              <div class="row justify-content-center">
                <div class="col-8">
                  <h4 class="text-black text-bold text-center">
                    {{ penyakit.nama }}
                  </h4>
                  <b-row v-if="url" class="justify-content-center">
                    <div class="bg-dark" id="preview">
                      <img width="300" height="300" v-if="url" :src="url" />
                    </div>
                  </b-row>
                  <h3 class="text-center text-bold text-black mt-4 mb-4">
                    Description
                  </h3>
                  <p class="text-black text-bold text-center">
                    {{ penyakit.deskripsi }}
                  </p>
                  <h3 class="text-center text-black mt-4 mb-4">Solution</h3>

                  <p
                    style="white-space: pre-line; text-align: left"
                    class="text-black text-bold"
                  >
                    {{ penyakit.solusi }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="col-8">
          <div class="card bg-secondary mb-3">
            <div class="card-header text-center">Penyakit tidak ditemukan</div>
            <div class="card-body">
              <div class="row justify-content-center">
                <div class="col-8">
                  <h6 class="text-black text-bold text-center">
                    penyakit tidak di temukan dengan gejala ini
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <b-col class="text-center mt-5">
          <div v-if="show">
            <b-button @click="clear" variant="primary">re check</b-button>
          </div>
        </b-col>
      </div>
    </div>
  </div>
</template>
<script>
import ChartCard from "src/components/Cards/ChartCard.vue";
import StatsCard from "src/components/Cards/StatsCard.vue";
import LTable from "src/components/Table.vue";
import Consultation from "@/api/ConsultationApi";
import Gejala from "@/api/GejalaApi";
import UrlActive from "@/api/BaseUrl";

export default {
  components: {
    LTable,
    ChartCard,
    StatsCard,
  },
  data() {
    return {
      editTooltip: "Edit Task",
      deleteTooltip: "Remove",
      options: [],
      show: false,
      found: false,
      selected: [],
      penyakit: {},
      url: null,
      form: {
        gejala: [],
        id_pengguna: "",
      },

      isLoading: false,
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      let data = this.form;
      this.isLoading = true;
      try {
        let res = await Consultation.Process(data);
        if (res.data.success) {
          if (res.data.data) {
            this.url = null;
            this.penyakit = res.data.data;
            if (res.data.data.img_path) {
              this.url = res.data.data.img_path;
            }
            this.show = true;
            this.found = true;
            this.isLoading = false;
          } else {
            this.show = true;
            this.penyakit = res.data.data;
            this.found = false;
            this.isLoading = false;
          }
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
    clear() {
      this.show = false;
      this.penyakit = null;
      this.found = false;
      this.form.gejala = [];
    },
  },
  async created() {
    try {
      let data_user = JSON.parse(this.$cookie.get("data_user"));
      this.form.id_pengguna = data_user._id;

      this.isLoading = true;
      let res = await Gejala.Get();
      if (res.data.success) {
        this.options = res.data.data.map((el) => {
          return { text: `${el.kode} - ${el.nama}`, value: el._id };
        });

        this.isLoading = false;
      } else {
        alert("error when get the api data");
      }
    } catch (error) {
      this.$notify({
        message: "unable connect to server",
        icon: "fa fa-times-circle",
        horizontalAlign: "right",
        verticalAlign: "top",
        type: "danger",
      });
      console.log(error);
    }
  },
};
</script>
<style>
</style>
