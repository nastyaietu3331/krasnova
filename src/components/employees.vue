<template>
  <div id="app">
      <div class="container"> 
        <h1>Добавить сотрудников</h1>
        <br>
        <div class="row" id="employess">
        <div class="form-group w-100">
          <label for="surname">Фамилия</label>
          <input type="text" id="surname" class="form-control" v-model="surname">
        </div>

        <div class="form-group w-100">
          <label for="name">Имя</label>
          <input type="text" id="name" class="form-control" v-model="name">
        </div>

        <div class="form-group w-100">
          <label for="patronymic">Отчество</label>
          <input type="text" id="patronymic" class="form-control" v-model="patronymic">
        </div>

        <div class="form-group w-100">
          <label for="department">Отдел</label>
          <input type="text" id="department" class="form-control" v-model="department">
        </div>

        <button class="btn btn-success w-100" @click="onSave()">Сохранить</button>
      </div>

      <br>

        <div class="row">
            <div class="col-3" ><span class="badge badge-pill badge-warning">Фамилия</span></div>
            <div class="col-3"><span class="badge badge-pill badge-warning">Имя</span></div>
            <div class="col-3"><span class="badge badge-pill badge-warning">Отчество</span></div>
            <div class="col-3"><span class="badge badge-pill badge-warning">Отдел</span></div>
            <hr>
        </div>

        <div class="row" v-for="staff in staffs" :key="staff.id">
            <div class="col-3">{{staff.name}}</div>
            <div class="col-3">{{staff.surname}}</div>
            <div class="col-3">{{staff.patronymic}}</div>
            <div class="col-3">{{staff.department}}</div>
            <hr>
        </div>

      </div>
    </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      staffs: [],
      surname: '',
      name: '',
      patronymic: '',
      department: '',
    }
  },
  components: {},
  methods: {
    async onSave(){
      let staff = {
        surname: this.surname,
        name: this.name,
        patronymic: this.patronymic,
        department: this.department
      };
      try {
        await this.$http.post('http://localhost:3000/employees', staff);
        this.updateData();
      } catch(err) {
        console.error(err);
      }
    },

    updateData(){
      try {
        this.$http.get('http://localhost:3000/employees')
        .then((res) => res.json())
        .then((res) => (this.staffs = res));
      } catch (err) {
        console.error(err);
      }
    },
  },
  created() {
    this.updateData();
  },
}
</script>

