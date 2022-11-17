<script setup>
    const props = defineProps({
        head: {
            type: Array,
            required: false
        },
        columnTemplates: {
            type: String,
            required: false
        }
    })
</script>

<template>
    <div class="table-wrapper">
        <div class="table">
            <div 
            class="table-head"
            :style="{'grid-template-columns': columnTemplates}">
                <div 
                    class="table-head__name"
                    v-for="(element, i) of head"
                    :key="i">
                    {{element}}
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>


<style scoped>

.table {
    width: 100%;
    margin-bottom: 40px;
    margin-top: 21px;
}
.table-wrapper {
    display: flex;
    justify-content: center;
}   
.table-head {
    padding: 13px;
    display: grid;
    column-gap: 10px;
    align-items: center;
    border: 1px solid #E4E9EB;
}
.table-head__name {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
}
</style>