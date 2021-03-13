<template>
    <b-modal id="modal-1" size="lg">
          <!-- <b-card no-body> -->
            <b-tabs card>
                <b-tab title="Upload Images" :title-link-class="linkClass(0)" active>
                    <div class="uploadsA" style="border:3px dashed #1fc5b9;height:200px;border-radius:30px">
                        <div class="uploads_object">
                            <b-img src="@/assets/images/image-gallery.png" style="width:30px;"></b-img>
                            <h4 style="text-align:center">Drag and drop image here</h4>
                            <b-button class="outlined" style="align-item:center">Upload from the computer</b-button>
                            <h6 style="text-align:center">Maximum 5 images at a time. By Uploading images you agree to our <a href="">terms of service</a> </h6>
                        </div>
                    </div>
                </b-tab>
                <b-tab title="Upload Videos" :title-link-class="linkClass(0)">
                    <div class="uploadsA" style="border:3px dashed #1fc5b9;height:200px;border-radius:30px"></div>
                </b-tab>
                 <b-tab title="Upload files" :title-link-class="linkClass(0)">
                    <div class="uploadsA" style="border:3px dashed #1fc5b9;height:200px;border-radius:30px"></div>
                </b-tab>
                 <b-tab title="Write a story one" :title-link-class="linkClass(0)">
                    <div class="uploadsA" style="border:3px dashed #1fc5b9;height:200px;border-radius:30px"></div>
                </b-tab>    
            </b-tabs>
        <!-- </b-card> -->
    </b-modal>
</template>

<script>
// @ is an alias to /src


export default {
  
}
</script>

<style scoped>

</style>