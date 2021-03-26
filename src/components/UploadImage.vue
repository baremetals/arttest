<template>
  <div>
    <b-card class="shadow-lg" id="to-upload-image" v-if="!imageData.length">
        <div class="uploadDiv">
          <!-- <br> -->
          <b-img class="mt-4" src="@/assets/images/image-gallery.png" style="display:block;margin-right:auto;margin-left:auto;width:43.94px;height:40.28px"></b-img>
          <!-- <br> -->
          <h4 class="upload-guide-text mt-4">Drag and drop image here</h4>
          
          <!-- <br> -->
          <div class="upload-btn mt-4">
            <input type="file" name="" id="file" @change="previewImage" accept="image/*">
            <label for="file">Upload from Computer</label>
          </div>
          <!-- <br> -->
          <p class="upload-note-text mt-4">Maximum 5 images at a time, By uploading you agreed out our <a href="" style="color:#1fc5b9">terms of service</a></p>
          <!-- <br> -->
        </div>
    </b-card>
    <b-card class="shadow-lg" id="uploaded-image" v-if="imageData.length">
      <h2 style="font-size:24px">Image Uploads</h2>
      <hr>
      <div v-if="imageData.length">
          <b-row>
            <b-col cols="9">
              <h6 style="padding:10px">Select the photos your would like to submit or uploads more</h6>
            </b-col>
            <b-col cols="3">
              <div class="multiUploadBtn"  style="margin:0">
                <input type="file" @change="previewImage" name="" id="multifile" />
                <label for="multifile">Upload More</label>
              </div>
            </b-col>
          </b-row>
          <!-- <br> -->
          <b-row class="mt-4">
            <b-col cols="3" v-for="(image, index) in imageData" :key="index">
              <img :src="image.src" alt="" class="preview mt-2">
            </b-col>
          </b-row>
          <!-- <br> -->
          <b-row class="mt-4">
            <b-col cols="8">
              <h6 style="padding:10px">Submitting by entering this challenge you accept Arttest's <a href="">Terms of Serice</a></h6>
            </b-col>
            <b-col cols="2">
              <div class="cancelFileBtn">Cancel</div>
            </b-col>
            <b-col cols="2">
              <div class="submitFileBtn">Submit</div>
            </b-col>
          </b-row>
        </div>
    </b-card>
    <!-- <br /> -->
    <div class="image_info mt-4" v-if="imageData.length">
        <b-card class="shadow-lg">
            <h3>Image Information</h3>
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
                        <b-form-group id="input-group-2" label="Medium:" label-for="input-2">
                            <b-form-input
                            id="input-2"
                            v-model="form.name"
                            placeholder="Medium"
                            required
                            ></b-form-input>
                        </b-form-group>
                          <b-form-group id="input-group-2" label="Formart(jpg,png,etc):" label-for="input-2">
                            <b-form-input
                            id="input-2"
                            v-model="form.name"
                            placeholder="Format"
                            required
                            ></b-form-input>
                        </b-form-group>
                    </b-form>
                </b-col>
                <b-col>
                    <b-form-group label="Adult Content">
                        <b-form-checkbox switch size="lg" @change="changeSwitch"></b-form-checkbox>
                    </b-form-group>
                    <b-form-group label="Demnetions" label-for="image_width">
                        <b-form inline >
                            <label class="sr-only" for="inline-form-input-name">Name</label>
                                <b-form-input
                                id="image_width"
                                class="mb-2 mr-sm-2 mb-sm-0"
                                placeholder="Jane Doe"
                                ></b-form-input>
                                <label class="sr-only" for="inline-form-input-name">Name</label>
                            <b-form-input
                            id="inline-form-input-name"
                            class="mb-2 mr-sm-2 mb-sm-0"
                            placeholder="Jane Doe"
                            ></b-form-input>
                        </b-form>
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
            <br>
            <b-button type="submit" variant="primary">Submit</b-button>
        </b-card>
    </div>
  </div>
</template>

<script>
// var ind = 0;
export default {
  name : 'upload-images',
  data() {
      return {
        checked : true,
        tabIndex: 0,
        imageData : [],
        Video : "",
        form: {
          email: '',
          name: '',
          food: null,
          checked: "off",
          text : ""
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      previewImage(e){
          var input = e.target;
          if(input.files && input.files[0]){
              var reader = new FileReader();
              reader.onload = (e) => {
                this.imageData.push({ src : e.target.result});
                console.log(this.imageData)
              }
              reader.readAsDataURL(input.files[0])
          }
      },
      changeSwitch(){
        if(this.checked == true){
          this.form.checked = "on"
        }else{
          this.form.checked = "off"
        }
      }

    }
}
</script>

<style>
  img.preview {
    width: calc(100%);
    height: 250px;
  }
  #to-upload-image{
    border: 3px dashed #1fc5b9;
    border-radius: 20px;
    height: 332px;
  }
  .upload-btn label{
    background-color: white;
    border : 2px solid #1fc5b9;
    border-radius: 25px;
    width: 257px;
    height: 45px;
    color: #1fc5b9;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: 800;
    padding: 5px 7px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    font-size: 20px;
    font-family: Segoe UI;
  }
  #file{
    opacity: 0;
    display: none;
  }
  .uploadDiv{
    width: 50%;
    margin: auto;
  }
  .upload-guide-text{
    font-weight: bold;
    text-align: center;
    font-size: 20px;
    font-family: Segoe UI;
    color: #000000;
  }
  .upload-note-text{
    font-size: 11px;
    font-weight: 500;
    color: black;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  #multifile{
    display: none;
  }
  .multiUploadBtn{
    background-color: white;
    border : 2px solid #1fc5b9;
    border-radius: 25px;
    width: 215px;
    height: 45px;
    color: #1fc5b9;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: bold;
    padding: 7px 50px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    font-size: 18px;
    font-family: Segoe UI;
  }
  .cancelFileBtn{
    background-color: white;
    border : 2px solid #1fc5b9;
    border-radius: 25px;
    cursor: pointer;
    color: #1fc5b9;
    width: 145px;
    height: 45px;
    font-size: 20px;
    font-weight: bold;
    padding: 5px 39px;
  }
  .submitFileBtn{
    background-color: #1fc5b9;
    border : 2px solid #1fc5b9;
    border-radius: 25px;
    cursor: pointer;
    color: white;
    width: 145px;
    height: 45px;
    font-size: 20px;
    font-weight: bold;
    padding: 5px 36px;
  }
  .checkedBtn{
    position: absolute;
    bottom: 0;
    right: 0;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    background-color: #1fc5b9;
    /* background: url(../assets/images/fillclose.png); */
  }
</style>