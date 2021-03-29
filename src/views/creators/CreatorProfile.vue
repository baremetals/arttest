<template>
  <div v-if="user">
    <div
      :style="{ backgroundImage: `url(${user.backgroundImage})` }"
      class="hero-image-left-creator-page"
    >
      <b-button
        style="margin-top: 35px; position: relative; bottom: -75%; right: 2%"
        class="btn-share-customize mr-5"
      >
        <b-icon icon="share-fill" id="shareBtn"></b-icon>
      </b-button>
    </div>
    <!-- Profile & Name Section Start -->
    <b-container
      fluid
      class="bv-example-row att-padding-container intro-banner"
    >
      <b-row>
        <b-col sm="12" md="6" lg="3" xl="2" id="avatar-logo-parent">
          <b-avatar
            id="avatar-logo"
            :src="user.imageUrl"
            size="13rem"
          ></b-avatar>
        </b-col>
        <b-col sm="12" md="6" lg="3" xl="5">
          <div
            id="project-x-change"
            style="
              color: #fff;
              font-size: 24px;
              font-weight: bold;
              margin: 20px 20px;
              padding-left: 20px;
              padding-right: 20px;
            "
          >
            {{ user.fullname }}
          </div>
        </b-col>
        <b-col sm="12" md="6" lg="2" xl="2"> </b-col>
        <b-col
          id="follow-f"
          style="margin: 1% auto; position: absolute; right: -3%"
          sm="12"
          md="6"
          lg="4"
          xl="3"
        >
          <b-row>
            <b-col sm="12" md="6" lg="3" xl="3" cols="4">
              <div style="color: #fff; text-align: center; font-size: 14px">
                Entries
              </div>
              <div
                style="
                  color: #1fc5b9;
                  font-weight: bold;
                  text-align: center;
                  font-size: 18px;
                "
              >
                {{ user.totalContestsEntered }}
              </div>
            </b-col>
            <b-col sm="12" md="6" lg="3" xl="3" cols="3">
              <div style="color: #fff; text-align: center; font-size: 14px">
                Following
              </div>
              <div
                style="
                  color: #1fc5b9;
                  font-weight: bold;
                  text-align: center;
                  font-size: 18px;
                "
              >
                {{ user.followingCount }}
              </div>
            </b-col>
            <b-col sm="12" md="6" lg="3" xl="3" cols="4">
              <div style="color: #fff; text-align: center; font-size: 14px">
                Followers
              </div>
              <div
                style="
                  color: #1fc5b9;
                  font-weight: bold;
                  text-align: center;
                  font-size: 18px;
                "
              >
                {{ user.followersCount }}
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <!-- Profile & Name Section End -->

    <!-- Header Tabs Start -->
    <b-container fluid class="bv-example-row pt-pb-pr-pl-0 sub-navbar">
      <b-navbar toggleable="lg" type="light" style="padding-bottom: 0px">
        <b-collapse id="nav-collapse" is-nav>
          <b-col cols="3" sm="0"></b-col>
          <b-col cols="12" sm="12">
            <b-navbar-nav class="ml-auto c-navbar-nav">
              <b-col
                style="margin: 0px 35px 0px 0px"
                sm="12"
                md="6"
                lg="3"
                xl="1"
                v-bind:style="homeStyleObj"
              >
                <b-nav-item
                  href="#"
                  v-on:click="makeActive('home')"
                  class="black-color att-font-18"
                >
                  <p class="black-color bold-font text-place-center">
                    Timeline
                  </p>
                </b-nav-item>
              </b-col>
              <b-col
                style="margin: 0px 35px 0px 35px"
                sm="12"
                md="6"
                lg="3"
                xl="1"
                v-bind:style="postsStyleObj"
              >
                <b-nav-item
                  href="#"
                  v-on:click="makeActive('posts')"
                  class="black-color att-font-18"
                >
                  <p class="black-color bold-font text-place-center">Posts</p>
                </b-nav-item>
              </b-col>
              <b-col
                style="margin: 0px 35px 0px 35px"
                sm="12"
                md="6"
                lg="3"
                xl="1"
                v-bind:style="aboutStyleObj"
              >
                <b-nav-item
                  href="#"
                  v-on:click="makeActive('about')"
                  class="black-color att-font-18"
                >
                  <p class="black-color bold-font text-place-center">About</p>
                </b-nav-item>
              </b-col>

              <b-col
                style="margin: 0px 0px 0px 35px"
                sm="12"
                md="6"
                lg="3"
                xl="1"
                v-bind:style="peopleStyleObj"
              >
                <b-nav-item
                  href="#"
                  v-on:click="makeActive('people')"
                  class="black-color att-font-18"
                >
                  <p class="black-color bold-font text-place-center">
                    Followers
                  </p>
                </b-nav-item>
              </b-col>
              <b-col cols="3">
                <b-container>
                  <b-button
                    style="
                      max-width: 170px;
                      position: absolute;
                      right: -6%;
                      top: 0px;
                    "
                    variant="outline-turquoise-rounded"
                    >Edit Profile</b-button
                  >
                </b-container>
              </b-col>
            </b-navbar-nav>
          </b-col>
        </b-collapse>
      </b-navbar>
    </b-container>
    <!-- Header Tabs End -->
    <b-container
      style="padding: 15px 50px"
      fluid
      class="bv-example-row att-light-grey"
    >
      <b-row>
        <b-col sm="12" md="6" lg="3" xl="3">
          <Profile />
          <br />
          <Followers />
          <b-card-footer
            style="background-color: black"
            class="shadow-lg att-pl-35 att-font-700"
          >
            <a href="" style="color: #1fc5b9; text-decoration: underline"
              >Show more</a
            >
          </b-card-footer>
          <br />
          <ArtistOfTheWeek />

          <b-card-footer
            style="background-color: black"
            class="shadow-lg att-pl-35 att-font-700"
          >
            <a href="" style="color: #1fc5b9; text-decoration: underline"
              >Show more</a
            >
          </b-card-footer>
        </b-col>
        <b-col
          class="scroll-middle"
          cols="12"
          md="6"
          sm="12"
          lg="6"
          v-if="active == 'home'"
        >
          <b-row>
            <b-col>
              <FeaturedFeed />
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-row>
                <div v-for="contest in contests" :key="contest.contestId">
                  <ContestFeed :contest="contest" />
                </div>

                <div v-for="post in blogposts" :key="post.blogpostId">
                  <BlogFeed :post="post" />
                </div>

                <div>
                  <EntryFeed />
                </div>
                <div v-for="event in events" :key="event.eventId">
                  <EventFeed :event="event" />
                </div>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
        <b-col
          class="scroll-middle"
          cols="12"
          md="6"
          sm="12"
          lg="6"
          v-else-if="active == 'posts'"
        >
          <card class="shadow-lg mt-4">
            <b-container style="padding-left: 0px">
              <b-row style="padding-left: 0px" align-v="center">
                <b-col xl="1" lg="1" md="1" sm="1">
                  <a
                    href="javascript:;"
                    class="avatar avatar-xl rounded-circle"
                  >
                    <img
                      alt="Image placeholder"
                      src="@/assets/images/image/Ellipse -82.png"
                    />
                  </a>
                </b-col>
                <b-col xl="9" lg="9" md="9" sm="9">
                  <h6 class="mb-0">OO_Seth</h6>
                  <p class="text-sm text-muted mb-0">5 min ago</p>
                </b-col>
                <b-col
                  xl="2"
                  lg="2"
                  md="2"
                  sm="2"
                  style="font-size: 35px; text-align: right"
                >
                  <b-icon
                    class="hover-icon"
                    icon="three-dots"
                    style="font-size: 35px"
                  ></b-icon>
                </b-col>
              </b-row>
            </b-container>
            <b-container>
              <b-row>
                <p
                  class="pt-3 pb-3"
                  style="margin-bottom: 0px; color: #1fc5b9; font-weight: 700"
                >
                  Instagram
                </p>
                <p class="h5">
                  Project X Change presents, A Visual Poem In Collaboration
                  with, The Stephen Lawrence Day Foundation
                </p>
                <p>
                  In collaboration with Pineapple School for performancing Arts,
                  We will encourage young writers of underrepresented
                  backgrounds in the London area, to write a piece that speaks
                  to the important of equality for all
                </p>
              </b-row>
            </b-container>
            <b-container>
              <b-embed
                type="video"
                aspect="16by9"
                controls
                poster="https://insaneimpact.com/wp-content/uploads/2019/10/16-9-Formula.jpg"
              >
                <source
                  src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0"
                  type="video/webm"
                />
                <source
                  src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0"
                  type="video/mp4"
                />
              </b-embed>
            </b-container>
            <br />
            <b-container>
              <b-row align-v="center">
                <b-col xl="1" lg="1" md="1" sm="1" style="font-size: 20px">
                  <b-icon
                    icon="heart-fill"
                    style="color: red; font-size: 20px"
                  ></b-icon>
                </b-col>
                <b-col xl="9" lg="9" md="9" sm="9" class="txt-align-center">
                  <p
                    class="text-sm text-muted mb-2"
                    style="font-size: 13px; padding: 0px"
                  >
                    You and 207 peoples live this
                  </p>
                </b-col>
                <b-col lg="1" md="" sm="" cols="" style="font-size: 20px">
                  <b-icon
                    class="mb-2 hover-icon"
                    icon="chat-square-dots"
                    style="font-size: 22px"
                  ></b-icon>
                </b-col>
                <b-col lg="1" md="" sm="" cols="" style="font-size: 18px">
                  <b-icon
                    class="mb-2 hover-icon"
                    icon="share-fill"
                    style="font-size: 18px"
                  ></b-icon>
                </b-col>
              </b-row>
            </b-container>
          </card>

          <card class="shadow-lg mt-4">
            <b-container style="padding-left: 0px">
              <b-row style="padding-left: 0px" align-v="center">
                <b-col xl="1" lg="1" md="1" sm="1">
                  <a
                    href="javascript:;"
                    class="avatar avatar-xl rounded-circle"
                  >
                    <img
                      alt="Image placeholder"
                      src="@/assets/images/image/Ellipse -82.png"
                    />
                  </a>
                </b-col>
                <b-col xl="9" lg="9" md="9" sm="9">
                  <h6 class="mb-0">OO_Seth</h6>
                  <p class="text-sm text-muted mb-0">5 min ago</p>
                </b-col>
                <b-col
                  xl="2"
                  lg="2"
                  md="2"
                  sm="2"
                  style="font-size: 35px; text-align: right"
                >
                  <b-icon
                    class="hover-icon"
                    icon="three-dots"
                    style="font-size: 35px"
                  ></b-icon>
                </b-col>
              </b-row>
            </b-container>
            <b-container>
              <b-row>
                <p
                  class="pt-3 pb-3"
                  style="margin-bottom: 0px; color: #1fc5b9; font-weight: 700"
                >
                  Blog
                </p>
                <p class="h5">
                  Project X Change presents, A Visual Poem In Collaboration
                  with, The Stephen Lawrence Day Foundation
                </p>
                <p>
                  In collaboration with Pineapple School for performancing Arts,
                  We will encourage young writers of underrepresented
                  backgrounds in the London area, to write a piece that speaks
                  to the important of equality for all
                </p>
              </b-row>
            </b-container>
            <b-container>
              <b-embed
                type="video"
                aspect="16by9"
                controls
                poster="https://insaneimpact.com/wp-content/uploads/2019/10/16-9-Formula.jpg"
              >
                <source
                  src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0"
                  type="video/webm"
                />
                <source
                  src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0"
                  type="video/mp4"
                />
              </b-embed>
            </b-container>
            <br />
            <b-container>
              <b-row align-v="center">
                <b-col xl="1" lg="1" md="1" sm="1" style="font-size: 20px">
                  <b-icon
                    icon="heart-fill"
                    style="color: red; font-size: 20px"
                  ></b-icon>
                </b-col>
                <b-col xl="9" lg="9" md="9" sm="9" class="txt-align-center">
                  <p
                    class="text-sm text-muted mb-2"
                    style="font-size: 13px; padding: 0px"
                  >
                    You and 207 peoples live this
                  </p>
                </b-col>
                <b-col lg="1" md="" sm="" cols="" style="font-size: 20px">
                  <b-icon
                    class="mb-2 hover-icon"
                    icon="chat-square-dots"
                    style="font-size: 22px"
                  ></b-icon>
                </b-col>
                <b-col lg="1" md="" sm="" cols="" style="font-size: 18px">
                  <b-icon
                    class="mb-2 hover-icon"
                    icon="share-fill"
                    style="font-size: 18px"
                  ></b-icon>
                </b-col>
              </b-row>
            </b-container>
          </card>

          <card class="shadow-lg mt-4">
            <b-container style="padding-left: 0px">
              <b-row style="padding-left: 0px" align-v="center">
                <b-col xl="1" lg="1" md="1" sm="1">
                  <a
                    href="javascript:;"
                    class="avatar avatar-xl rounded-circle"
                  >
                    <img
                      alt="Image placeholder"
                      src="@/assets/images/image/Ellipse -82.png"
                    />
                  </a>
                </b-col>
                <b-col xl="9" lg="9" md="9" sm="9">
                  <h6 class="mb-0">OO_Seth</h6>
                  <p class="text-sm text-muted mb-0">5 min ago</p>
                </b-col>
                <b-col
                  xl="2"
                  lg="2"
                  md="2"
                  sm="2"
                  style="font-size: 35px; text-align: right"
                >
                  <b-icon
                    class="hover-icon"
                    icon="three-dots"
                    style="font-size: 35px"
                  ></b-icon>
                </b-col>
              </b-row>
            </b-container>
            <b-container>
              <b-row>
                <p
                  class="pt-3 pb-3"
                  style="margin-bottom: 0px; color: #1fc5b9; font-weight: 700"
                >
                  Blog
                </p>
                <p class="h5">
                  Project X Change presents, A Visual Poem In Collaboration
                  with, The Stephen Lawrence Day Foundation
                </p>
                <p>
                  In collaboration with Pineapple School for performancing Arts,
                  We will encourage young writers of underrepresented
                  backgrounds in the London area, to write a piece that speaks
                  to the important of equality for all
                </p>
              </b-row>
            </b-container>
            <b-container>
              <b-embed
                type="video"
                aspect="16by9"
                controls
                poster="https://insaneimpact.com/wp-content/uploads/2019/10/16-9-Formula.jpg"
              >
                <source
                  src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0"
                  type="video/webm"
                />
                <source
                  src="https://d1aettbyeyfilo.cloudfront.net/GenesisDigital/7865226_1581299091799WJ_4.0_VSL_v03.mp4?v=0"
                  type="video/mp4"
                />
              </b-embed>
            </b-container>
            <br />
            <b-container>
              <b-row align-v="center">
                <b-col xl="1" lg="1" md="1" sm="1" style="font-size: 20px">
                  <b-icon
                    icon="heart-fill"
                    style="color: red; font-size: 20px"
                  ></b-icon>
                </b-col>
                <b-col xl="9" lg="9" md="9" sm="9" class="txt-align-center">
                  <p
                    class="text-sm text-muted mb-2"
                    style="font-size: 13px; padding: 0px"
                  >
                    You and 207 peoples live this
                  </p>
                </b-col>
                <b-col lg="1" md="" sm="" cols="" style="font-size: 20px">
                  <b-icon
                    class="mb-2 hover-icon"
                    icon="chat-square-dots"
                    style="font-size: 22px"
                  ></b-icon>
                </b-col>
                <b-col lg="1" md="" sm="" cols="" style="font-size: 18px">
                  <b-icon
                    class="mb-2 hover-icon"
                    icon="share-fill"
                    style="font-size: 18px"
                  ></b-icon>
                </b-col>
              </b-row>
            </b-container>
          </card>
        </b-col>

        <b-col
          class="scroll-middle"
          cols="12"
          md="6"
          sm="12"
          lg="6"
          v-else-if="active == 'about'"
        >
          <card class="shadow-lg mt-4">
            <b-container>
              <p class="h4 mt-4">
                Project X Change presents, A Visial Poem in collaboration with:
                The Stephen Lawrence Day Foundation X pineapple performancing
                Arts Schools
              </p>
              <p class="h5 mt-3">
                In collaboration with Pineapple School Perfoming Arts, We will
                encourage young writers of underrepresented backgrounds in
                London are, to write a piece that speaks to the importance of
                equality for all,
              </p>
              <p class="h5 mt-3">
                In collaboration with Pineapple School Perfoming Arts, We will
                encourage young writers of underrepresented backgrounds in
                London are, to write a piece that speaks to the importance of
                equality for all,
              </p>
            </b-container>
          </card>
        </b-col>
        <b-col
          class="scroll-middle"
          cols="12"
          md="6"
          sm="12"
          lg="6"
          v-else-if="active == 'people'"
        >
          <card class="shadow">
            <h5>Followers</h5>
            <b-list-groups>
              <b-list-group-item
                class="d-flex justify-content-between align-items-center w-50 float-left"
              >
                <b-row align-v="center">
                  <b-col style="padding-left: 0px" xl="2" lg="2" md="2" sm="2">
                    <a
                      href="javascript:;"
                      class="avatar avatar-xl rounded-circle"
                    >
                      <img
                        alt="Image placeholder"
                        src="@/assets/images/image/Ellipse 48.png"
                      />
                    </a>
                  </b-col>
                  <b-col sm="5" md="5" lg="5" xl="5">
                    <h6 class="mb-0">OO_Seth</h6>
                    <p class="text-sm text-muted mb-0" style="font-size: 12px">
                      @OO_Seth
                    </p>
                  </b-col>
                  <b-col xl="5" lg="5" md="5" sm="5">
                    <b-button
                      variant="outline-turquoise-rounded"
                      style="padding: 5px 10px; min-width: 100px"
                      >Follow</b-button
                    >
                  </b-col>
                </b-row>
              </b-list-group-item>
              <b-list-group-item
                class="d-flex justify-content-between align-items-center w-50 float-left"
              >
                <b-row align-v="center">
                  <b-col style="padding-left: 0px" xl="2" lg="2" md="2" sm="2">
                    <a
                      href="javascript:;"
                      class="avatar avatar-xl rounded-circle"
                    >
                      <img
                        alt="Image placeholder"
                        src="@/assets/images/image/Ellipse 48.png"
                      />
                    </a>
                  </b-col>
                  <b-col sm="5" md="5" lg="5" xl="5">
                    <h6 class="mb-0">OO_Seth</h6>
                    <p class="text-sm text-muted mb-0" style="font-size: 12px">
                      @OO_Seth
                    </p>
                  </b-col>
                  <b-col xl="5" lg="5" md="5" sm="5">
                    <b-button
                      variant="outline-turquoise-rounded"
                      style="padding: 5px 10px; min-width: 100px"
                      >Follow</b-button
                    >
                  </b-col>
                </b-row>
              </b-list-group-item>
              <b-list-group-item
                class="d-flex justify-content-between align-items-center w-50 float-left"
              >
                <b-row align-v="center">
                  <b-col style="padding-left: 0px" xl="2" lg="2" md="2" sm="2">
                    <a
                      href="javascript:;"
                      class="avatar avatar-xl rounded-circle"
                    >
                      <img
                        alt="Image placeholder"
                        src="@/assets/images/image/Ellipse 48.png"
                      />
                    </a>
                  </b-col>
                  <b-col sm="5" md="5" lg="5" xl="5">
                    <h6 class="mb-0">OO_Seth</h6>
                    <p class="text-sm text-muted mb-0" style="font-size: 12px">
                      @OO_Seth
                    </p>
                  </b-col>
                  <b-col xl="5" lg="5" md="5" sm="5">
                    <b-button
                      variant="outline-turquoise-rounded"
                      style="padding: 5px 10px; min-width: 100px"
                      >Follow</b-button
                    >
                  </b-col>
                </b-row>
              </b-list-group-item>
              <b-list-group-item
                class="d-flex justify-content-between align-items-center w-50 float-left"
              >
                <b-row align-v="center">
                  <b-col style="padding-left: 0px" xl="2" lg="2" md="2" sm="2">
                    <a
                      href="javascript:;"
                      class="avatar avatar-xl rounded-circle"
                    >
                      <img
                        alt="Image placeholder"
                        src="@/assets/images/image/Ellipse 48.png"
                      />
                    </a>
                  </b-col>
                  <b-col sm="5" md="5" lg="5" xl="5">
                    <h6 class="mb-0">OO_Seth</h6>
                    <p class="text-sm text-muted mb-0" style="font-size: 12px">
                      @OO_Seth
                    </p>
                  </b-col>
                  <b-col xl="5" lg="5" md="5" sm="5">
                    <b-button
                      variant="outline-turquoise-rounded"
                      style="padding: 5px 10px; min-width: 100px"
                      >Follow</b-button
                    >
                  </b-col>
                </b-row>
              </b-list-group-item>
              <b-list-group-item
                class="d-flex justify-content-between align-items-center w-50 float-left"
              >
                <b-row align-v="center">
                  <b-col style="padding-left: 0px" xl="2" lg="2" md="2" sm="2">
                    <a
                      href="javascript:;"
                      class="avatar avatar-xl rounded-circle"
                    >
                      <img
                        alt="Image placeholder"
                        src="@/assets/images/image/Ellipse 48.png"
                      />
                    </a>
                  </b-col>
                  <b-col sm="5" md="5" lg="5" xl="5">
                    <h6 class="mb-0">OO_Seth</h6>
                    <p class="text-sm text-muted mb-0" style="font-size: 12px">
                      @OO_Seth
                    </p>
                  </b-col>
                  <b-col xl="5" lg="5" md="5" sm="5">
                    <b-button
                      variant="outline-turquoise-rounded"
                      style="padding: 5px 10px; min-width: 100px"
                      >Follow</b-button
                    >
                  </b-col>
                </b-row>
              </b-list-group-item>
              <b-list-group-item
                class="d-flex justify-content-between align-items-center w-50 float-left"
              >
                <b-row align-v="center">
                  <b-col style="padding-left: 0px" xl="2" lg="2" md="2" sm="2">
                    <a
                      href="javascript:;"
                      class="avatar avatar-xl rounded-circle"
                    >
                      <img
                        alt="Image placeholder"
                        src="@/assets/images/image/Ellipse 48.png"
                      />
                    </a>
                  </b-col>
                  <b-col sm="5" md="5" lg="5" xl="5">
                    <h6 class="mb-0">OO_Seth</h6>
                    <p class="text-sm text-muted mb-0" style="font-size: 12px">
                      @OO_Seth
                    </p>
                  </b-col>
                  <b-col xl="5" lg="5" md="5" sm="5">
                    <b-button
                      variant="outline-turquoise-rounded"
                      style="padding: 5px 10px; min-width: 100px"
                      >Follow</b-button
                    >
                  </b-col>
                </b-row>
              </b-list-group-item>
              <b-list-group-item
                class="d-flex justify-content-between align-items-center w-50 float-left"
              >
                <b-row align-v="center">
                  <b-col style="padding-left: 0px" xl="2" lg="2" md="2" sm="2">
                    <a
                      href="javascript:;"
                      class="avatar avatar-xl rounded-circle"
                    >
                      <img
                        alt="Image placeholder"
                        src="@/assets/images/image/Ellipse 48.png"
                      />
                    </a>
                  </b-col>
                  <b-col sm="5" md="5" lg="5" xl="5">
                    <h6 class="mb-0">OO_Seth</h6>
                    <p class="text-sm text-muted mb-0" style="font-size: 12px">
                      @OO_Seth
                    </p>
                  </b-col>
                  <b-col xl="5" lg="5" md="5" sm="5">
                    <b-button
                      variant="outline-turquoise-rounded"
                      style="padding: 5px 10px; min-width: 100px"
                      >Follow</b-button
                    >
                  </b-col>
                </b-row>
              </b-list-group-item>
              <b-list-group-item
                class="d-flex justify-content-between align-items-center w-50 float-left"
              >
                <b-row align-v="center">
                  <b-col style="padding-left: 0px" xl="2" lg="2" md="2" sm="2">
                    <a
                      href="javascript:;"
                      class="avatar avatar-xl rounded-circle"
                    >
                      <img
                        alt="Image placeholder"
                        src="@/assets/images/image/Ellipse 48.png"
                      />
                    </a>
                  </b-col>
                  <b-col sm="5" md="5" lg="5" xl="5">
                    <h6 class="mb-0">OO_Seth</h6>
                    <p class="text-sm text-muted mb-0" style="font-size: 12px">
                      @OO_Seth
                    </p>
                  </b-col>
                  <b-col xl="5" lg="5" md="5" sm="5">
                    <b-button
                      variant="outline-turquoise-rounded"
                      style="padding: 5px 10px; min-width: 100px"
                      >Follow</b-button
                    >
                  </b-col>
                </b-row>
              </b-list-group-item>

              <b-list-group-item
                class="d-flex justify-content-between align-items-center"
              >
                <b-row align-v="center">
                  <b-col
                    style="padding-left: 0px"
                    lg="2"
                    md="2"
                    sm="2"
                    cols="2"
                  >
                    <a
                      href="javascript:;"
                      class="avatar avatar-xl rounded-circle"
                    >
                      <img
                        alt="Image placeholder"
                        src="@/assets/images/image/Ellipse 48.png"
                      />
                    </a>
                  </b-col>
                  <b-col lg="5" md="5" sm="5" cols="5">
                    <h6 class="mb-0">OO_Seth</h6>
                    <p class="text-sm text-muted mb-0" style="font-size: 12px">
                      @OO_Seth
                    </p>
                  </b-col>
                  <b-col lg="5" md="5" sm="5" cols="5">
                    <b-button
                      variant="outline-turquoise-rounded"
                      style="padding: 5px 10px; min-width: 100px"
                      >Follow</b-button
                    >
                  </b-col>
                </b-row>
              </b-list-group-item>
            </b-list-groups>

            <b-card-footer
              style="background: none; border: none"
              class="text-center att-font-700"
            >
              <a href="" style="color: #1fc5b9; text-decoration: underline"
                >view more</a
              >
            </b-card-footer>
            <br />
          </card>
        </b-col>
        <b-col cols="12" md="6" sm="12" lg="3" class="mt-4">
          <OpenCalls />
          <b-card-footer
            style="background-color: black; font-size: 12px"
            class="shadow-lg"
          >
            <router-link to="" style="color: #1fc5b9"
              >Show All Live Contests</router-link
            >
          </b-card-footer>
          <br />
          <Notifications />
          <AdvertFeed />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Profile from "@/components/Creators/Profile.vue";
import OpenCalls from "@/components/Creators/OpenCalls.vue";
import Notifications from "@/components/Creators/Notifications.vue";
import Followers from "@/components/Creators/Followers.vue";
import FeaturedFeed from "@/components/Creators/FeaturedFeed.vue";
import ArtistOfTheWeek from "@/components/Creators/ArtistOfTheWeek.vue";
import EntryFeed from "@/components/Creators/EntryFeed.vue";
import BlogFeed from "@/components/Creators/BlogFeed.vue";
import EventFeed from "@/components/Creators/EventFeed.vue";
import ContestFeed from "@/components/Creators/ContestFeed.vue";
import AdvertFeed from "@/components/Creators/AdvertFeed.vue";
export default {
  name: "Creator-Profile",
  components: {
    Profile,
    OpenCalls,
    Notifications,
    Followers,
    ArtistOfTheWeek,
    FeaturedFeed,
    ContestFeed,
    BlogFeed,
    EventFeed,
    EntryFeed,
    AdvertFeed,
  },
  data() {
    return {
      active1: true,
      active: "home",
      homeStyleObj: {
        borderBottom: "5px solid #1FC5B9",
      },
      aboutStyleObj: {
        borderBottom: "",
      },
      postsStyleObj: {
        borderBottom: "",
      },
      peopleStyleObj: {
        borderBottom: "",
      },
      videoStyleObj: {
        borderBottom: "",
      },
    };
  },
  methods: {
    makeActive: function (item) {
      this.active = item;
      if (item == "home") {
        this.homeStyleObj.borderBottom = "5px solid #1FC5B9";
        this.aboutStyleObj.borderBottom = "";
        this.postsStyleObj.borderBottom = "";
        this.peopleStyleObj.borderBottom = "";
        this.videoStyleObj.borderBottom = "";
      } else if (item == "about") {
        this.homeStyleObj.borderBottom = "";
        this.aboutStyleObj.borderBottom = "5px solid #1FC5B9";
        this.postsStyleObj.borderBottom = "";
        this.peopleStyleObj.borderBottom = "";
        this.videoStyleObj.borderBottom = "";
      } else if (item == "posts") {
        this.homeStyleObj.borderBottom = "";
        this.aboutStyleObj.borderBottom = "";
        this.postsStyleObj.borderBottom = "5px solid #1FC5B9";
        this.peopleStyleObj.borderBottom = "";
        this.videoStyleObj.borderBottom = "";
      } else if (item == "people") {
        this.homeStyleObj.borderBottom = "";
        this.aboutStyleObj.borderBottom = "";
        this.postsStyleObj.borderBottom = "";
        this.peopleStyleObj.borderBottom = "5px solid #1FC5B9";
        this.videoStyleObj.borderBottom = "";
      } else {
        this.homeStyleObj.borderBottom = "";
        this.aboutStyleObj.borderBottom = "";
        this.postsStyleObj.borderBottom = "";
        this.peopleStyleObj.borderBottom = "";
        this.videoStyleObj.borderBottom = "5px solid #1FC5B9";
      }
    },
  },
  computed: {
    ...mapGetters(["userData", "contests", "events", "blogposts"]),
    user() {
      return this.userData.credentials;

    },
    // created() {
    //   return timeline.push(this.contests);
    // }, not needed

    
  },
};
</script>
 
<style>
.fix-h3 {
  font-size: 20px;
}
.att-font-14 {
  font-size: 14px;
}
.att-font-18 {
  font-size: 18px;
}
.att-light-grey {
  background-color: #f1f1f1;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: 0px;
  margin-left: 0px;
}
.att-p-20 {
  padding: 20px;
}
.att-pl-10 {
  padding-left: 10px;
}
.att-pl-20 {
  padding-left: 20px;
}
.att-pl-35 {
  padding-left: 35px;
}
.att-pl-10 {
  padding-right: 10px;
}
.att-pr-20 {
  padding-right: 20px;
}
.att-pt-20 {
  padding-top: 20px;
}
.att-pb-20 {
  padding-bottom: 20px;
}

.att-pb-35 {
  padding-bottom: 35px;
}
.att-mt-35 {
  margin-top: 12px;
  margin-bottom: 12px;
}
.att-mb-35 {
  margin-bottom: 35px;
}
.att-font-700 {
  font-weight: 700;
}
.turquoise-color {
  color: #1fc5b9;
}
.pt-pb-pr-pl-0 {
  padding: 0;
}
.btn-outline-customize {
  color: #1fc5b9;
  background-color: white;
  border-color: #1fc5b9;
}
.bold-font {
  font-weight: 700;
}
.black-color {
  color: black;
}
.fit-fontsize {
  font-size: 12px;
}
.img-center {
  /* display: block; */
  display: table-cell;
  margin-left: auto;
  margin-right: auto;
  vertical-align: middle;
}
.btn-share-customize {
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 50%;
  padding: 7px 5px;
  height: 50px;
  width: 50px;
  position: static;
  float: right;
}
.hero-image-left-creator-page {
  background-color: #cccccc;
  height: 30rem;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
}
.btn-outline-light {
  color: #f8f9fa;
  border-color: #fff;
  width: 100%;
  max-width: 100%;
  border-radius: 50rem !important;
  border-width: 4px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  padding: 8px 8px;
  font-weight: bolder;
}
.btn-outline-turquoise-rounded {
  color: #1fc5b9;
  border-color: #1fc5b9;
  width: 100%;
  max-width: 100%;
  border-radius: 50rem !important;
  border-width: 4px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  padding: 8px 40px;
  font-weight: bolder;
}
.btn-outline-turquoise-rounded:hover {
  color: #fff;
  border-color: #1fc5b9;
  width: 100%;
  max-width: 100%;
  border-radius: 50rem !important;
  border-width: 4px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  padding: 8px 40px;
  font-weight: bolder;
  background: #1fc5b9;
}
.btn-outline-turquoise-rounded-solid {
  color: #fff;
  border-color: #1fc5b9;
  background-color: #1fc5b9;
  width: 100%;
  max-width: 100%;
  border-radius: 50rem !important;
  border-width: 4px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  padding: 8px 40px;
  font-weight: bolder;
}
.btn-outline-turquoise-rounded-solid:hover {
  color: #fff;
  border-color: #000;
  background-color: #000;
  width: 100%;
  max-width: 100%;
  border-radius: 50rem !important;
  border-width: 4px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  padding: 8px 40px;
  font-weight: bolder;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 0.5rem;
  background-color: transparent;
  border: none;
  text-shadow: none;
}
.text-place-center {
  text-align: center;
}
.scroll-middle {
  height: 100%;
  overflow-y: scroll;
}
.scroll-middle::-webkit-scrollbar {
  width: 3px;
}
.scroll-middle::-webkit-scrollbar-track {
  background-color: transparent;
}
.scroll-middle::-webkit-slider-thumb {
  background: rgb(34, 18, 18);
}
.scroll-middle::-webkit-scrollbar-thumb:hover {
  background: rgb(138, 77, 77);
}
.intro-banner {
  background-color: #1f1717;
  /* height: 800px !important; */
}
.editProfileBtn-parent {
  display: none;
}

@media screen and (min-width: 1200px) {
  .intro-banner {
    height: 80px;
  }
  #avatar-logo {
    margin-top: -55px;
    border: 5px solid #fff;
    margin-left: 50px;
    margin-right: 50px;
  }
}

.hover-icon:hover {
  color: #1fc5b9;
}
.txt-align-center {
  margin-left: 0px;
  padding-left: 0px;
  margin-top: 5px;
}

.btn-outline-success:hover {
  color: #fff;
  background-color: #1fc5b9;
  border-color: #1fc5b9;
}
</style>
