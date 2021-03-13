<template>
  <div>
    <b-card class="shadow-lg">
        <div class="uploadsA">
            <input type="file" name="" id="" @change="previewVideo" accept="video/*">
        </div>
    </b-card>
    <br>
    <div class="video_info" v-if="VideoData.length">
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
            <br>
            <b-button type="submit" variant="primary">Submit</b-button>
        </b-card>
    </div>
  </div>
</template>

<script>
export default {
  components : {
  
  },
  data() {
      return {
        VideoData : "",
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
      previewVideo(){
          this.VideoData = "0000";
          console.log(this.VideoData.length)
      }
    }
}
</script>

<style>

</style>