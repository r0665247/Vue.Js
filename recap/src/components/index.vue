<template>
  <div>
    <div v-for="index in indexes">
      <div  class="card bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header"><slot name="year"></slot></div>
      <div class="card-body">
        <h5 class="card-title"><slot name="index"></slot></h5>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Index",
  data(){
    indexes
  },
  mounted(){
    //axios request
  }
};
</script>
<style>
</style>
