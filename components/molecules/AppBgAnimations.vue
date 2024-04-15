<template>
  <div
    class="hidden md:block pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden"
  >
    <div class="absolute bottom-0 left-0 rotate-45">
      <client-only>
        <Vue3Lottie
          animationLink="bg-animation.json"
          :height="1000"
          :width="500"
        />
      </client-only>
    </div>
    <div class="absolute bottom-0 right-0 rotate-45">
      <client-only>
        <Vue3Lottie
          animationLink="bg-animation.json"
          :height="1000"
          :width="500"
        />
      </client-only>
    </div>
  </div>
</template>
