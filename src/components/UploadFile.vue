<template>
  <div>
    <b-card class="shadow-lg" id="to-upload-image" v-if="!FileData.length">
            <div class="uploadDiv">
            <!-- <br> -->
            <b-img class="mt-4" src="@/assets/images/image-gallery.png" style="display:block;margin-right:auto;margin-left:auto;width:43.94px;height:40.28px"></b-img>
            <!-- <br> -->
            <h4 class="upload-guide-text mt-4">Drag and drop File here</h4>
            
            <!-- <br> -->
            <div class="upload-btn mt-4">
                <input type="file" name="" id="file" @change="previewFile" accept="*">
                <label for="file">Upload from Computer</label>
            </div>
            <!-- <br> -->
            <p class="upload-note-text mt-4">Maximum 5 images at a time, By uploading you agreed out our <a href="" style="color:#1fc5b9">terms of service</a></p>
            <!-- <br> -->
            </div>
        </b-card>
    <!-- <b-card class="shadow-lg" v-if="!FileData.length">
        <div class="uploadsA">
            <input type="file" name="" id="" @change="previewFile" accept="*">
        </div>
    </b-card> -->
    <b-card class="shadow-lg" v-if="FileData.length">
      <input type="file" name="" id="" @change="previewFile" accept="*">
      <b-row>
        <b-col cols="3" v-for="(file, index) in FileData" :key="index" class="mt-4">
          <div class="divplay_fileDiv">
            <p class="fsizeText">{{file.fsize}}</p>
            <p class="fnameText">{{file.fname}}</p>
          </div>
        </b-col>
      </b-row>
    </b-card>
    <div class="video_info mt-4" v-if="FileData.length">
        <b-card class="shadow-lg">
            <h3>File Information</h3>
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
            <b-form-group label="Select Categories">
              <!-- <multi-select
              v-model="values"
              :options="options">
              </multi-select> -->
            </b-form-group>
            <b-button class="mt-4" type="submit" variant="primary">Submit</b-button>
        </b-card>
    </div>
  </div>
</template>

<script>
// import vueMultiSelect from 'vue-multi-select';
// import 'vue-multi-select/dist/lib/vue-multi-select.css';
export default {
  name : 'upload-file',
  data() {
      return {
        values: [],
        selected: null,
        options: ['list', 'of', 'options'],
        FileData : [],
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
      previewFile(e){
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
                this.FileData.push({ fsize : rfsize, fname : fname});
                console.log(this.FileData)
            }
            reader.readAsDataURL(input.files[0])
        }
      },
      customLabel (option) {
        return `${option.library} - ${option.language}`
      }
    }
}
</script>
<style scoped>
  .divplay_fileDiv{
    height: 200px;
    width: 200px;
    background-color: #dfdfdf;
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

