<template>
  <div>
    <div v-if="$mq === 'sm'">
      <h1>{{displayText}}</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  computed : {
    displayText : function(){
      return this.$mq == 'sm'?'you are on a mobile':'you are on a tablet';
    }
  }
}
</script>

<style scoped>

</style>