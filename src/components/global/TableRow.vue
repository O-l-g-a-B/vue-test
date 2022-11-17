<script setup>
    const props = defineProps({
        columnTemplates: {
            type: String,
            required: false
        },
        bgRow: {
            type: String,
            required: false
        }
    })
</script>

<template>
    <div 
        class="table-row"
        :style="{
        'grid-template-columns': columnTemplates,
        'background-color': bgRow}">
        <slot></slot>
    </div>
</template>

<style scoped>
.table-row {
  border: 1px solid #E4E9EB;
  position: relative;
  display: grid;
  column-gap: 10px;
  align-items: center;
  padding: 10px 40px;
}

</style>