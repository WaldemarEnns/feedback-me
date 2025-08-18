<script setup lang="ts">
const items = [
    {
        label: 'Home',
        to: '/',
        icon: 'i-heroicons-home',
    },
    {
        label: 'Receipients',
        to: '/receipients',
        icon: 'i-heroicons-user-group',
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