<template>
  <div class="container-monitor">
    <bread-crumb :bread-list="breadList"></bread-crumb>
    <item-bar :bar-list="barList"></item-bar>
  </div>
</template>

<script>
import BreadCrumb from "~/components/monitor/BreadCrumb.vue";
import ItemBar from "~/components/monitor/ItemBar.vue";
 
export default {
  mounted() {},
  components: {
    BreadCrumb,
    ItemBar
  },
  data() {
    return {
      breadList: ["交换监控", "区县详情"],
      barList: [
        {
          name: "区本级"
        },
        {
          name: "区发改委"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        }
      ]
    };
  }
};
</script>

<style>
</style>
