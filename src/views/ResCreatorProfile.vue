<template>
   <div>
      <mq-layout mq="xxl">
         <laptop-l-creator />
      </mq-layout>
      <mq-layout mq="xl">
         <laptop-l-creator />
      </mq-layout>
      <mq-layout mq="lg">
         <laptop-creator />
      </mq-layout>
      <mq-layout mq="md">
         <laptop-creator />
      </mq-layout>
      <mq-layout mq="sm">
         <tablet-creator />
      </mq-layout>
      <mq-layout mq="xs">
         <phone-creator />
      </mq-layout>
   </div>
</template>
<script>
import LaptopCreator from '../components/ResCreator/LaptopCreator.vue'
import LaptopLCreator from '../components/ResCreator/LaptopLCreator.vue'
import PhoneCreator from '../components/ResCreator/PhoneCreator.vue'
import TabletCreator from '../components/ResCreator/TabletCreator.vue'
export default {
  components: { LaptopLCreator, LaptopCreator, TabletCreator, PhoneCreator },
}
</script>
<style lang="scss">

</style>
