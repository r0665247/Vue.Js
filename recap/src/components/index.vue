<template>
  <div>
    <div  class="card bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header"><slot name="year"></slot></div>
      <div class="card-body">
        <h5 class="card-title"><slot name="index"></slot></h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Index",
  mounted(){
    
  }
};
</script>
<style>
</style>
