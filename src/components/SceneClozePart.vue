<template>
  <div>
    <div>SceneClozePart</div>
    <ul>
      <li :key="index+'clozepart'" v-for="(item,index) in myICards">
        <!-- <img class="img" :src = "item.urlsrc"/> -->
        <p>
          	{{item.urlsrc}}
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SceneClozePart",

  data() {
  	return{
  		myICards: []
  	}
    
  },
  mounted() {
    var self = this;
    this.axios.get('static/lessonParts.json').then((response) => {

      //       		"ListenPart":
      // {
      //   "levels": [

      //     {
      //       "title": "When is Teachers day?",
      //       "options": [

     self.myICards = response.data.listenPart.levels[0].options;



    })

  }
}

</script>
<style scoped>


</style>
