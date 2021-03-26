<template>
<div>
  <b-navbar toggleable="lg" class="att-black" type="dark">
            <b-navbar-brand to="/"><img src="@/assets/images/attest-logo-white.svg" alt="arttest-logo"/></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-navbar-nav class="attnav-container">
                        <b-nav-item class="attnav-item-li" to="/">Home</b-nav-item>
                        <b-nav-item class="attnav-item-li" to="/contests">Contests</b-nav-item>
                        <b-nav-item class="attnav-item-li" to="/events">Events</b-nav-item>
                        <b-nav-item class="attnav-item-li" to="/explore">Explore</b-nav-item>
                        <b-nav-item class="attnav-item-li" to="/blogs">Blog</b-nav-item>
                        <b-nav-item class="attnav-item-li" to="/vote">Vote</b-nav-item>
                    </b-navbar-nav>
                    <b-nav-item to="/arttest">
                        <b-button variant="outline-turquoise">HOST A CONTEST</b-button>
                    </b-nav-item>
                    <b-nav-item to="/auth-signup">
                        <b-button variant="outline-light">LOGIN / SIGN UP</b-button>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
</div>
</template>

<script>
export default {

}
</script>



<!-- Header Css Start -->
<style scoped>
    .navbar {
    padding: 1rem 1.5rem;
    position: fixed;
    z-index: 100;
    width: 100%;
}
    .attnav-container {
        padding-top: 13px;
        padding-left: 25px;
        padding-right: 35px;
    }
    .attnav-item-li {
        font-weight: 900;
        font-size: 18px;
        padding-left: 45px;
    }
    
</style>
<!-- Header Css Ends -->





