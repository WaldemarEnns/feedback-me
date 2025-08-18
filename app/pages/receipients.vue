<script setup lang="ts">
const receipients = ref([
    {
        id: 1,
        name: 'John Doe',
        description: 'John Doe is a software engineer at Google',
        feedbackCount: 10,
    },
    
    {
        id: 2,
        name: 'Jane Doe',
        description: 'Jane Doe is a software engineer at Facebook',
        feedbackCount: 10,
    },
    
    {
        id: 3,
        name: 'John Smith',
        description: 'John Smith is a software engineer at Apple',
        feedbackCount: 10,
    },
    
])
</script>

<template>
    <div>
        <h1 class="text-2xl font-bold">Receipients</h1>
        <UTable
            :data="receipients"
        >
            <template #feedbackCount-header>
                <span>Feedback given</span>
            </template>
            <template #feedbackCount-cell="{ row }">
                <UBadge>{{ row.original.feedbackCount }}</UBadge>
            </template>
        </UTable>
    </div>
</template>
