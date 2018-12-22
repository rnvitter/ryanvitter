<template>
  <div class="item-card">
    <!-- card-header -->
    <v-layout row wrap v-if="mobile">
      <v-flex xs12>
        <div style="width: 90%;">
          <h2 class="item-name">
            {{ item.title }}
          </h2>
          <div class="item-tagline">{{ item.tagline }}</div>
        </div>
      </v-flex>
      <v-flex xs12>
        <a :href="item.link" target=”_blank” style="text-decoration: none;">
          <img
            class="item-image"
            :src="getSrc()"
            width="auto"
            height="500px">
          </img>
        </a>

        <div style="display: flex;" v-if="mobile">
          <a :href="item.link" target="_blank" class="item-link mr-3">View PDF</a>
          <div @click="descriptionDialog = true" class="item-link mr-3">Details</div>
        </div>
      </v-flex>
    </v-layout>

    <v-layout row wrap v-else>
      <v-flex xs12 sm6>
        <a :href="item.link" target=”_blank” style="text-decoration: none;">
          <img
            class="item-image"
            :src="getSrc()"
            width="100%"
            height="auto">
          </img>
        </a>
      </v-flex>
      <v-flex xs12 sm6 style="padding: 20px;">
        <div style="width: 90%;">
          <h2 class="item-name">
            {{ item.title }}
          </h2>
          <div class="item-tagline">{{ item.tagline }}</div>
        </div>
        <div class="item-description" style="margin-top: 0px;">{{ item.description }}</div>
          <a :href="item.link" target="_blank" class="item-link mr-3">View PDF</a>
      </v-flex>
    </v-layout>

    <v-dialog v-model="descriptionDialog" max-width="320">
      <v-card>
        <v-card-title class="headline">{{ item.title }}</v-card-title>
        <v-card-text>{{ item.description }}</v-card-text>
        <v-card-actions>
          <v-btn color="black" flat="flat" @click="descriptionDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const props = {
  item: {
    type: Object,
    required: true
  },
  src: {
    type: String,
    required: false
  }
}

const computed = {
  ...mapGetters({
    mobile: 'ux/mobile'
  })
}

const methods = {
  getSrc () {
    return this.src
  }
}

export default {
  props,
  computed,
  methods,
  data () {
    return {
      descriptionDialog: false
    }
  }
}
</script>
