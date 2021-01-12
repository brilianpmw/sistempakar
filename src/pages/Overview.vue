<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="nc-icon nc-single-02 text-primary"></i>
            </div>
            <div slot="content">
              <p class="card-category">Dokter</p>
              <div class="card-title" v-if="isLoading">
                <b-spinner
                  variant="primary"
                  style="width: 3rem; height: 3rem"
                  label="Large Spinner"
                ></b-spinner>
              </div>
              <h4 v-if="!isLoading" class="card-title">
                {{ data.dokter.total }}
              </h4>
            </div>
            <div slot="footer"><i class="fa fa-calendar-o"></i>until now</div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-success">
              <i class="nc-icon nc-tag-content text-danger"></i>
            </div>
            <div slot="content">
              <p class="card-category">Penyakit</p>
              <div class="card-title" v-if="isLoading">
                <b-spinner
                  variant="danger"
                  style="width: 3rem; height: 3rem"
                  label="Large Spinner"
                ></b-spinner>
              </div>
              <h4 v-if="!isLoading" class="card-title">
                {{ data.penyakit.total }}
              </h4>
            </div>
            <div slot="footer"><i class="fa fa-calendar-o"></i>until now</div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-danger">
              <i class="nc-icon nc-puzzle-10 text-warning"></i>
            </div>
            <div slot="content">
              <p class="card-category">Gejala</p>
              <div class="card-title" v-if="isLoading">
                <b-spinner
                  variant="warning"
                  style="width: 3rem; height: 3rem"
                  label="Large Spinner"
                ></b-spinner>
              </div>
              <h4 v-if="!isLoading" class="card-title">
                {{ data.gejala.total }}
              </h4>
            </div>
            <div slot="footer"><i class="fa fa-calendar-o"></i>Until now</div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-info">
              <i class="nc-icon nc-key-25 text-success"></i>
            </div>
            <div slot="content">
              <p class="card-category">Rule</p>
              <div class="card-title" v-if="isLoading">
                <b-spinner
                  style="width: 3rem; height: 3rem"
                  label="Large Spinner"
                  variant="success"
                ></b-spinner>
              </div>
              <h4 v-if="!isLoading" class="card-title">
                {{ data.rule.total }}
              </h4>
            </div>
            <div slot="footer"><i class="fa fa-calendar-o"></i>until now</div>
          </stats-card>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <div>
            <b-card
              title="Sistem Pakar diagnosa penyakit Kulit"
              img-src="https://jeda.id/files/2019/08/kulit-kering-1200x900.jpg"
              img-alt="Image"
              img-bottom
              class="mb-2"
            >
              <b-card-text>
                sistem pakar adalah cabang dari ilmu kecerdasan buatan dimana
                kali ini akan dimanfaatkan untuk mendiagnosa penyakit kulit
              </b-card-text>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ChartCard from "src/components/Cards/ChartCard.vue";
import StatsCard from "src/components/Cards/StatsCard.vue";
import LTable from "src/components/Table.vue";
import Dashboard from "@/api/DashboardApi";

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
      data: {
        dokter: {
          total: 0,
        },
        rule: {
          total: 0,
        },
        penyakit: {
          total: 0,
        },
        gejala: {
          total: 0,
        },
      },

      isLoading: false,
    };
  },
  async created() {
    try {
      this.isLoading = true;
      let res = await Dashboard.Get();
      if (res.data.success) {
        this.data = res.data.data;
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
