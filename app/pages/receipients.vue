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

const openReceipientModal = ref(false)

const handleRecipientAdded = (newRecipient: any) => {
    receipients.value.push(newRecipient)
}
</script>

<template>
    <div>
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold">Recipients</h1>
            <UButton 
                label="Add New Recipient" 
                color="primary" 
                variant="solid"
                icon="i-heroicons-plus"
                size="lg"
                @click="openReceipientModal = true"
            />
        </div>
        
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
        
        <AddReceipientModal 
            v-model="openReceipientModal"
            @recipient-added="handleRecipientAdded"
            @close="openReceipientModal = false"
        />
    </div>
</template>
