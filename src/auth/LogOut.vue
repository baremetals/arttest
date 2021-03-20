<template>
  
</template>

<script>
import { LOGOUT_USER } from '@/store/MutationTypes'
export default {
    created() {
      this.$store.dispatch(LOGOUT_USER)
      this.$router.push("/auth-signup")
    },
}
</script>

<style>

</style>