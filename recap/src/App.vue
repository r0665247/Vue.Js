<template>
  <div id="app" class="justify-content-center">
    <HelloWorld msg="First App Recap" />
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
          aria-selected="true">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="form-tab" data-toggle="tab" href="#form" role="tab" aria-controls="form"
          aria-selected="false">Form</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="indexes-tab" data-toggle="tab" href="#indexes" role="tab" aria-controls="indexes"
          aria-selected="false">Indexes</a>
      </li>
    </ul>
    <div class="tab-content justify-content-center" id="myTabContent" >
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <template inline-template>
          <div>
            <div v-for="index in lastIndex" class="card bg-light mb-3" style="max-width: 18rem;">
              <div class="card-header">{{index.year}}</div>
              <div class="card-body">
                <h5 class="card-title">{{index.index}}</h5>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="tab-pane fade" id="form" role="tabpanel" aria-labelledby="form-tab">
        <Form @posted="add($event)"></Form>
      </div>
      <div class="tab-pane fade" id="indexes" role="tabpanel" aria-labelledby="indexes-tab">
        <Index v-for="index in indexes"> <p slot="index">{{index.index}}</p> <p slot="year">{{index.year}}</p> </Index>
      </div>
    </div>
  </div>
</template>

<script>
  import HelloWorld from "./components/HelloWorld.vue";
  import Form from "./components/form.vue";
  import Index from "./components/index.vue";
  export default {
    name: "app",
    components: {
      HelloWorld,
      Form,
      Index
    },
    data() {
      return { indexes: [], }
    },
    methods: {
      add(data) {
        let newIndex = data;
        this.indexes.push(newIndex);
      },
      delete(index) {
        let i = this.indexes.filter(i => i === index).indexOf();
        this.indexes.splice(i, 1);
      }
    },
    computed: {
      lastIndex: function () {
        return this.indexes.filter(i => i.year > 2018);
      }
    },
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>