<script setup>

</script>

<template>
    <div class="wrapper">
      <Sidebar/>
      <div>
        <Header/>
        <Main/>
      </div>
    </div>
      
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 170px 1fr;
  margin: 0;
  padding: 0;
}
</style>
