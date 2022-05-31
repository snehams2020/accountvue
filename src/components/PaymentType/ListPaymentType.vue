<template>
  <div align="center">
    <h2>Manage Payment Type</h2>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-link :to="'/add-payment-type'">Add Payment Type</b-link>
    <button @click="LoadData" v-show="false">Load</button>

    <p v-if="success">
      <b-alert variant="success" show>Success Alert</b-alert>
    </p>
    <p v-if="error">
      <b-alert variant="danger" show>Not Saved</b-alert>
    </p>
  <b-container fluid>


    <!-- Main table element -->
    <b-table
      :items="results"
      
      stacked="md"
      show-empty
      small
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #cell(actions)="row">
         <b-link
        :to="{ name: 'EditPaymentType', params:{id:row.item.id}}"
        variant="primary">Edit</b-link>
 <b-link v-on:click="deleteData(row.item.id)" variant="danger">Delete</b-link>
        <!-- <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
          Info modal
        </b-button> -->
        <!-- <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button> -->
      </template>

      <!-- <template #row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template> -->
    </b-table>

    <!-- Info modal -->
    <!-- <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <pre>{{ infoModal.content }}</pre>
    </b-modal> -->
  </b-container>
    <!-- <b-card
      v-for="result in results"
      :key="result.names"
      style="max-width: 20rem"
      class="mb-2">
      <b-card-text>
        {{result.names}}
      </b-card-text>
      <b-link
        :to="{ name: 'EditPaymentType', params:{id:result.id,name:result.names}}"
        variant="primary">Edit</b-link>


      <b-link v-on:click="deleteData(result.id)" variant="danger"
        >Delete</b-link>
    </b-card> -->
  </div>
</template>

<script>
export default {

     data() {
      return {
        results:[],
        success:false,
      error:false,
        "token":(localStorage.getItem('token'))?localStorage.getItem('token'):"",   

         items: [
          {
            text: 'Home',
            href: '#'
          },

          {
            text: 'Manage Payment Type',
            active: true
          }
        ]
      }
    },
     mounted(){
this.LoadData()
   },

   methods:{
      LoadData(){
      fetch('http://127.0.0.1:8000/api/get-payment-type',{
    method: 'GET',
    headers: {
        'Authorization': 'Bearer '+this.token,

    },
} ).then((response)=>{
        console.log(response);
        if(response.ok){
         return response.json();
        }



      }).then((datas)=>{
  // console.log(datas);

 const results=[];
 for(const data in datas['paymentType']){
   //console.log(data);

results.push({
   id: datas['paymentType'][data].id,

  names: datas['paymentType'][data].name,
actions:""


});
 }
 this.results=results;
  });
      },
      deleteData(id){

   fetch('http://127.0.0.1:8000/api/delete-payment-type?id='+id,{
    method: 'DELETE',
    headers: {
        'Authorization': 'Bearer '+this.token,

    },
} ).then((response)=>{

        if(response.ok){
                       // console.log(datas.status);

          this.success=true;
        }else{
                             //    console.log(datas.status);

          this.error=true;
        }



      })

;


      }


    }
}
</script>

<style></style>
