<template>
  <div>
    <b-skeleton-table
      :rows="3"
      :columns="4"
      animation="throb"
      :table-props="{ bordered: true, striped: true }"
    ></b-skeleton-table>
  </div>
</template>

<script>
export default {
  name: "LoadingTable",
};
</script>

