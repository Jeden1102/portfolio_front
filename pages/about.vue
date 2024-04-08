<template>
  <div
    class="container-custom my-8 flex flex-col items-center gap-8 text-gray-200 md:flex-row lg:gap-20"
  >
    <div
      class="mb-6 flex flex-col gap-2 rounded-md"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <p class="text-lg lg:text-2xl" data-aos="fade-up" data-aos-delay="150">
        Hi! I'm Dominik Raducki - FrontEnd developer with more than
        <b>2 years of commercial experience.</b>
      </p>

      <h1 class="text-lg">{{ $t('about.softSkills') }}</h1>
      <div class="flex flex-wrap gap-2">
        <AtomsBadge>Nuxt</AtomsBadge>
        <AtomsBadge>Vue</AtomsBadge>
        <AtomsBadge>React</AtomsBadge>
        <AtomsBadge>TS</AtomsBadge>
        <AtomsBadge>PHP</AtomsBadge>
        <AtomsBadge>Drupal</AtomsBadge>
      </div>
      <client-only>
        <Vue3Lottie
          animationLink="about-animation.json"
          :height="250"
          :width="250"
        />
      </client-only>
      <NuxtLink
        class="atoms-button mx-auto mb-4 mt-4 flex w-fit justify-center text-center"
        to="/skills"
      >
        {{ $t('skillsPage') }}
      </NuxtLink>
      <NuxtLink
        href="#journey"
        class="animate-bounce text-center font-bold md:hidden"
      >
        {{ $t('about.myJourney') }} <Icon name="solar:alt-arrow-down-outline" />
      </NuxtLink>
    </div>
    <div id="journey" class="py-4">
      <p data-aos="fade-up" data-aos-delay="200">
        {{ $t('about.title') }}
      </p>
      <MoleculesTimeline />
    </div>
  </div>
</template>
