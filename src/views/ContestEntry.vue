<template>
  <div>
        <b-container fluid>
            <br>
            <h2 style="font-size:42px;color:black">Host Contest Form</h2>
            <br>
            <b-row>
                <b-col>
                    <b-card-header style="background-color:black" class="shadow-lg">
                        <h4 style="font-size:15px;color:white">CONTEST INFORMATION</h4>
                    </b-card-header>
                    <card class="shadow-lg">
                        <b-form>
                            <b-form-group
                            id="input-group-1"
                            label="Title*"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.email"
                            type="email"
                            placeholder="e.g Old Age Picture"
                            required
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Mode (public or private)*" label-for="input-2">
                            <b-form-input
                            id="input-2"
                            v-model="form.name"
                            placeholder="Select Mode"
                            required
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group label="Schedule Start Date(Yes or No)" id="input-group-4" v-slot="{ ariaDescribedby }">
                            <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A">YES</b-form-radio>
                            <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">NO</b-form-radio>
                        </b-form-group>
                        </b-form>
                         <b-form-group id="input-group-4" label="Entry fee($)*" label-for="input-4">
                            <b-form-input
                            id="input-4"
                            v-model="form.name"
                            placeholder="Free"
                            required
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-5" label="Maximum number of submissions for entry fee*" label-for="input-5">
                            <b-form-input
                            id="input-5"
                            v-model="form.name"
                            placeholder="1"
                            required
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-6" label="Fee per additional entry($)*" label-for="input-6">
                            <b-form-input
                            id="input-6"
                            v-model="form.name"
                            placeholder="Free"
                            required
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-6" label="Total Number of submission permitted per user*" label-for="input-6">
                            <b-form-input
                            id="input-6"
                            v-model="form.name"
                            placeholder="1"
                            required
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group label="Entry submission End Date">
                            <b-input-group class="mb-3">
                            <b-form-input
                                id="example-input"
                                v-model="value"
                                type="text"
                                placeholder="YYYY-MM-DD"
                                autocomplete="off"
                            ></b-form-input>
                            <b-input-group-append>
                                <b-form-datepicker
                                v-model="value"
                                button-only
                                right
                                locale="en-US"
                                aria-controls="example-input"
                                @context="onContext"
                                ></b-form-datepicker>
                            </b-input-group-append>
                            </b-input-group>
                        </b-form-group>
                        <b-form-group label="Voting End Date">
                            <b-input-group class="mb-3">
                            <b-form-input
                                id="example-input"
                                v-model="value"
                                type="text"
                                placeholder="YYYY-MM-DD"
                                autocomplete="off"
                            ></b-form-input>
                            <b-input-group-append>
                                <b-form-datepicker
                                v-model="value"
                                button-only
                                right
                                locale="en-US"
                                aria-controls="example-input"
                                @context="onContext"
                                ></b-form-datepicker>
                            </b-input-group-append>
                            </b-input-group>
                        </b-form-group>
                        <b-form-group id="input-group-3" label="Category*" label-for="input-3">
                            <b-form-select
                            id="input-3"
                            v-model="form.food"
                            :options="foods"
                            required
                            ></b-form-select>
                        </b-form-group>
                        <b-form-group label="Image*">
                            <input type="file" name="" id="">
                        </b-form-group>
                        <b-form-group label="Description*">
                            <b-form-textarea
                            id="textarea"
                            v-model="text"
                            placeholder="Enter something..."
                            rows="3"
                            max-rows="6"
                            ></b-form-textarea>
                        </b-form-group>
                    </card>
                </b-col>
                <b-col>
                    <b-card-header style="background-color:black" class="shadow-lg">
                        <h4 style="font-size:15px;color:white">JUDGE INFORMATION</h4>
                    </b-card-header>
                    <card class="shadow-lg">
                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" href="#" role="tab" v-b-toggle.accordion-1 style="border-top:2px solid #1FC5B9;padding:0 0">
                                 <h5 class="mb-0">1st Judge</h5>
                            </b-card-header>
                            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</b-card-text>
                            </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" href="#" role="tab" v-b-toggle.accordion-2 style="border-top:2px solid #1FC5B9;padding:0 0">
                            <h5 class="mb-0">2st Judge</h5>
                            </b-card-header>
                            <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</b-card-text>
                            </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" href="#" role="tab" v-b-toggle.accordion-3 style="border-top:2px solid #1FC5B9;padding:0 0">
                                <h5 class="mb-0">3st Judge</h5>
                            </b-card-header>
                            <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                    </card>
                    <br>
                    <b-card-header style="background-color:black" class="shadow-lg">
                        <h4 style="font-size:15px;color:white">ORGANISATION INFORMATION</h4>
                    </b-card-header>
                    <card class="shadow-lg">
                          <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" href="#" role="tab" v-b-toggle.accordion-1 style="border-top:2px solid #1FC5B9;padding:0 0">
                            <h5 class="mb-0">1st Judge</h5>
                            </b-card-header>
                            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</b-card-text>
                            </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" href="#" role="tab" v-b-toggle.accordion-2 style="border-top:2px solid #1FC5B9;padding:0 0">
                            <h5 class="mb-0">2st Judge</h5>
                            </b-card-header>
                            <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</b-card-text>
                            </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" href="#" role="tab" v-b-toggle.accordion-3 style="border-top:2px solid #1FC5B9;padding:0 0">
                                <h5 class="mb-0">3st Judge</h5>
                            </b-card-header>
                            <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                    </card>
                    <br>
                    <b-card-header style="background-color:black" class="shadow-lg">
                        <h4 style="font-size:15px;color:white">PRIZE INFORMATION</h4>
                    </b-card-header>
                    <card class="shadow-lg">
                        <h5>First Price Information</h5>
                        <b-form-group
                            id="input-group-1"
                            label="First Price*"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.email"
                            type="email"
                            placeholder="1st Price"
                            required
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group
                            id="input-group-1"
                            label="First prize information list(separate with commas)*"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.email"
                            type="email"
                            placeholder="e.g. Social Media Promotion, Cannon camera $500 cash prize"
                            required
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group
                        label="Prize Image">
                            <input type="file" name="" id="">
                        </b-form-group>
                        <h5>Second Price Information</h5>
                        <b-form-group
                            id="input-group-1"
                            label="First Price*"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.email"
                            type="email"
                            placeholder="1st Price"
                            required
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group
                            id="input-group-1"
                            label="First prize information list(separate with commas)*"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.email"
                            type="email"
                            placeholder="e.g. Social Media Promotion, Cannon camera $500 cash prize"
                            required
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group
                        label="Prize Image">
                            <input type="file" name="" id="">
                        </b-form-group>
                        <h5>Second Price Information</h5>
                        <b-form-group
                            id="input-group-1"
                            label="First Price*"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.email"
                            type="email"
                            placeholder="1st Price"
                            required
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group
                            id="input-group-1"
                            label="First prize information list(separate with commas)*"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.email"
                            type="email"
                            placeholder="e.g. Social Media Promotion, Cannon camera $500 cash prize"
                            required
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group
                        label="Prize Image">
                            <input type="file" name="" id="">
                        </b-form-group>
                    </card>
                </b-col>
                <br>
            </b-row>
        </b-container>
  </div>
</template>

<script>
export default {
  data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: [],
        },
        foods: [{ text: '- Select Category -', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true,
        selected : '',
        value: '',
        formatted: '',
        text : ''
      }
    },
}
</script>

<style>
</style>