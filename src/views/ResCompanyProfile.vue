<template>
   <div>
      <mq-layout mq="xxl">
         <laptop-lcompany />
      </mq-layout>
      <mq-layout mq="xl">
         <laptop-lcompany />
      </mq-layout>
      <mq-layout mq="lg">
         <laptop-company />
      </mq-layout>
      <mq-layout mq="md">
         <laptop-company />
      </mq-layout>
      <mq-layout mq="sm">
         <tablet-company />
      </mq-layout>
      <mq-layout mq="xs">
         <phone-company />
      </mq-layout>
   </div>
</template>

<script>
import LaptopCompany from '../components/RespCompany/LaptopCompany.vue';
import LaptopLcompany from '../components/RespCompany/LaptopLcompany.vue';
import PhoneCompany from '../components/RespCompany/PhoneCompany.vue';
import TabletCompany from '../components/RespCompany/TabletCompany.vue';

export default {
   name : 'Rcompany',
   components : {
      PhoneCompany,
      TabletCompany,
      LaptopLcompany,
      LaptopCompany
   }
}
</script>
