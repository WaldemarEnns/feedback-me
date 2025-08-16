<script setup lang="ts">
const items = [
    {
        label: 'Home',
        to: '/',
        icon: 'i-heroicons-home',
    },
    
]
</script>

<template>
    <UNavigationMenu
        orientation="vertical"
        class="w-full"
        :items="items"
    ></UNavigationMenu>
</template>