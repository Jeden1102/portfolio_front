<template>
  <LayoutHeader />
  <slot />
  <LayoutFooter />
</template>
<script>
  const test = () => {
    setPageLayout('custom')
  }
</script>
