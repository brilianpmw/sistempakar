<template>
  <div>
    <b-container fluid>
      <!-- User Interface controls -->

      <b-row class="mt-5 justify-content-center">
        <b-col cols="6" md="6" class="my-1">
          <card>
            <div>
              <h1 class="text-center">Add Rule</h1>
              <b-alert :show="showError" variant="danger">{{
                messageError
              }}</b-alert>
              <b-form @submit="onSubmit">
                <b-form-group
                  id="input-group-1"
                  label="  penyakit:"
                  label-for="input-1"
                >
                  <b-form-select
                    v-model="form.id_penyakit"
                    :options="options"
                  ></b-form-select>
                </b-form-group>
                <b-form-group
                  id="input-group-1"
                  label="  Gejala:"
                  label-for="input-1"
                >
                  <multiselect
                    v-model="form.gejala"
                    tag-placeholder="pilih gejala"
                    placeholder="pilih atau cari gejala"
                    label="name"
                    track-by="code"
                    :options="options_gejala"
                    :multiple="true"
                    :taggable="true"
                    @tag="addTag"
                  ></multiselect>
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
import Rule from "@/api/RuleApi";
import Gejala from "@/api/GejalaApi";
import Penyakit from "@/api/PenyakitApi";
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      form: {
        id_penyakit: "",
        gejala: [],
      },
      options_gejala: [],
      isLoading: false,
      options: [],
      show: true,
      messageError: "",
      showError: false,
    };
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
      };
      this.options_gejala.push(tag);
      this.form.gejala.push(tag);
    },
    async onSubmit(evt) {
      evt.preventDefault();
      this.isLoading = true;
      let data = this.form;
      let convert_data = this.form.gejala.map((el) => el.code);
      let fix_data = {
        id_penyakit: data.id_penyakit,
        gejala: convert_data,
      };
      try {
        let res = await Rule.Add(fix_data);
        if (res.data.success) {
          this.success = true;
          this.$notify({
            message: "success add doctor",
            icon: "fa fa-check-circle",
            horizontalAlign: "right",
            verticalAlign: "top",
            type: "success",
          });
          this.$router.push({
            path: "/admin/rule",
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
    this.isLoading = true;
    let res = await Penyakit.Get();

    if (res.data.success) {
      let data = res.data.data;
      let create_opt = data.map((el) => {
        return { value: el._id, text: `${el.kode} - ${el.nama}` };
      });

      this.options = create_opt;
    }
    let res_gejala = await Gejala.Get();

    if (res_gejala.data.success) {
      let data = res_gejala.data.data;
      let create_opt = data.map((el) => {
        return { code: el._id, name: `${el.kode} - ${el.nama}` };
      });

      this.options_gejala = create_opt;
    }

    // this.form.name = "ada";
    this.isLoading = false;
    // console.log(vendor_data[0]._id);
    // this.items = res_gejala.data.data;
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
