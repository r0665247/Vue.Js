<template>
  <form action method="post" @submit.prevent="onSubmit">
    <div class="form-group">
      <label for>Index</label>
      <input type="text" v-model="index" class="form-control" placeholder aria-describedby="helpId" />
    </div>

    <div class="form-group">
      <label for>Year</label>
      <input type="text" v-model="year" class="form-control" placeholder aria-describedby="helpId" />
    </div>
    <div v-if="error" class="alert alert-danger" role="alert">
      {{error}}
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: "Form",
  data() {
      return {
          index : "",
          year : "",
          error : "",
      }
  },
  methods: {
      onSubmit()
      {
        if(this.index.trim().length !== 0 && this.year.trim().length !== 0){
          this.$emit("posted" , {index : this.index , year : this.year});
          this.index = "";
          this.year = "";
          this.error = "";
        }
        else
        {
          this.error = "gelieve alles in te vullen";
        }
      }
  },
};
</script>
<style>
form {
  width: 40%;
  margin: 100px;
}
</style>

