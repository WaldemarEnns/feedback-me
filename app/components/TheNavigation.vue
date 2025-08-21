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
    {
        label: 'Feedback',
        to: '/feedback',
        icon: 'i-heroicons-chat-bubble-bottom-center-text',
    }
    
]
</script>

<template>
    <UNavigationMenu
        orientation="vertical"
        class="w-full"
        :items="items"
    ></UNavigationMenu>
</template>