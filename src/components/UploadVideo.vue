<template>
  <div>
       <b-card class="shadow-lg" id="to-upload-image" v-if="!VideoData.length">
            <div class="uploadDiv">
            <!-- <br> -->
            <b-img class="mt-4" src="@/assets/images/image-gallery.png" style="display:block;margin-right:auto;margin-left:auto;width:43.94px;height:40.28px"></b-img>
            <!-- <br> -->
            <h4 class="upload-guide-text mt-4">Drag and drop Video here</h4>
            
            <!-- <br> -->
            <div class="upload-btn mt-4">
                <input type="file" name="" id="file" @change="previewVideo" accept="video/*">
                <label for="file">Upload from Computer</label>
            </div>
            <!-- <br> -->
            <p class="upload-note-text mt-4">Maximum 5 images at a time, By uploading you agreed out our <a href="" style="color:#1fc5b9">terms of service</a></p>
            <!-- <br> -->
            </div>
        </b-card>
    <!-- <b-card class="shadow-lg" v-if="!VideoData.length">
        <div class="uploadsA">
            <input type="file" name="" id="" @change="previewVideo" accept="video/*">
        </div>
    </b-card> -->
    <b-card class="shadow-lg" v-if="VideoData.length">
        <input type="file" name="" id="" @change="previewVideo" accept="video/*">
        <b-row>
            <b-col cols="3" v-for="(video, index) in VideoData" :key="index" class="mt-4">
                <div class="display_videoDiv">
                    <p class="fsizeText">{{video.fsize}}</p>
                    <p class="fnameText">{{video.fname}}</p>
                </div>
            </b-col>
        </b-row>
    </b-card>
    
    <!-- <br> -->
    <div class="video_info mt-4" v-if="VideoData.length">
        <b-card class="shadow-lg">
            <h3>Video Information</h3>
            <hr />
            <b-row>
                <b-col>
                        <b-form>
                        <b-form-group
                        id="input-group-1"
                        label="Title:"
                        label-for="input-1"
                        description="We'll never share your email with anyone else."
                        >
                            <b-form-input
                            id="input-1"
                            type="text"
                            v-model="form.email"
                            placeholder="Title"
                            required
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group label="Description">
                            <b-form-textarea
                            id="textarea"
                            v-model="form.text"
                            placeholder="Enter something..."
                            rows="3"
                            max-rows="6"
                            ></b-form-textarea>
                        </b-form-group>
                    </b-form>
                </b-col>
                <b-col>
                    <b-form-group label="Adult Content">
                        <b-form-checkbox switch size="lg"></b-form-checkbox>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-form-group label="Select Categories">
                <b-form-textarea
                id="textarea"
                v-model="form.text"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
                ></b-form-textarea>
            </b-form-group>
            <!-- <br> -->
            <b-button type="submit mt-3" variant="primary">Submit</b-button>
        </b-card>
    </div>
  </div>
</template>

<script>
export default {
name : 'upload-video',
data() {
      return {
        VideoData : [],
        form: {
          email: '',
          name: '',
          food: null,
          checked: [],
          text : ""
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
        previewVideo(e){  
            var input = e.target;
            if(input.files && input.files[0]){
                const fsize = input.files[0].size;
                const fname = input.files[0].name;
                var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
                if (fsize == 0) return '0 Byte';
                var i = parseInt(Math.floor(Math.log(fsize) / Math.log(1024)));
                var rfsize = Math.round(fsize / Math.pow(1024, i), 2) + ' ' + sizes[i];
                console.log(rfsize);
                var reader = new FileReader();
                reader.onload = () => {
                    this.VideoData.push({ fsize : rfsize, fname : fname});
                    console.log(this.VideoData)
                }
                reader.readAsDataURL(input.files[0])
            }
        }
    }
}
</script>

<style>
    .display_videoDiv{
        width: 200px;
        height: 200px;
        background-color: #dfdfdf;
        /* border: 1px dotted rgb(170, 170, 170); */
        border-radius: 10px;
    }
    .fsizeText{
        text-align: center;
        position: absolute;
        top: 30%;
        left: 30%;
        font-size: 25px;
        font-family: serif;
        font-weight: 800;
    }
    .fnameText{
        text-align: center;
        position: absolute;
        top: 45%;
        left: 16%;
        font-family: serif;
    }
</style>