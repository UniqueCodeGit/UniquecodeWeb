<template>
  <div class="relative">
    <img :src="image" alt="strawberryDonut" class="rounded-lg md:rounded-3xl" />
    <div
      class="w-full h-full bg-black text-white absolute top-0 left-0 rounded-lg md:rounded-3xl opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-50 transition-all cursor-pointer flex text-center flex-col"
      style="align-items: center; justify-content: center"
    >
      <div class="text-2xl">
        {{ title }}
      </div>
      <div>
        {{ description }}
      </div>
      <router-link
        :to="to"
        class="border border-white py-2 px-6 rounded-md md:rounded-xl hover:bg-white hover:text-black transition-colors"
      >
        더보기
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>
