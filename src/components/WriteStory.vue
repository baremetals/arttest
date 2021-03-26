<template>
  <div>
    <b-card class="shadow-lg">
      <b-row>
        <b-col>
              <b-form>
                <b-form-group
                id="input-group-1"
                label="Title:"
                label-for="input-1"
                >
                    <b-form-input
                    id="input-1"
                    type="text"
                    v-model="form.email"
                    placeholder="Enter your title"
                    required
                    ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Category:" label-for="input-2">
                    <b-form-select
                    v-model="form.food"
                    :options="foods"
                    required>
                    </b-form-select>
                </b-form-group>
                <b-form-group id="input-group-2" label="Formart(jpg,png,etc):" label-for="input-2">
                    <b-form-input
                    id="input-2"
                    v-model="form.name"
                    placeholder="Format"
                    required
                    ></b-form-input>
                </b-form-group>
                <b-form-group label="Short Description">
                    <form>
                      <!-- <html-editor></html-editor> -->
                    </form>
                </b-form-group>
            </b-form>
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
      <!-- <TextEditor /> -->
      <br>
      <b-button type="submit" variant="primary"></b-button>
    </b-card>
  </div>
</template>

<script>

export default {
  name : 'write-story',
  data(){
    return{
      form : {email : "", name : "", text : ""},
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
    }
  }
}
</script>

<style>

</style>