<template>
  <div>
    <b-card class="shadow-lg">
        <div class="uploadsA">
            <input type="file" name="" id="" @change="previewImage" accept="image/*">
        </div>
        <div class="image_preview" v-if="imageData.length">
            <img :src="imageData" alt="" class="preview">
        </div>
    </b-card>
    <br />
    <div class="image_info" v-if="imageData.length">
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
export default {
  data() {
      return {
        checked : true,
        tabIndex: 0,
        imageData : "",
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
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['modal-tabs-btn']
        } else {
          return ['bg-light', 'text-info']
        }
      },
      previewImage(e){
          var input = e.target;
          console.log(input);
          if(input.files && input.files[0]){
              var reader = new FileReader();
              reader.onload = (e) => {
                  this.imageData = e.target.result;
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
      width: 200px;
      background-color: white;
      border: 1px solid #DDD;
      padding: 5px;
  }
</style>