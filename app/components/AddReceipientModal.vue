<script setup lang="ts">
const isOpen = defineModel<boolean>()

const form = ref({
    name: '',
    description: '',
    email: ''
})

const emit = defineEmits<{
    recipientAdded: [recipient: any],
    close: []
}>()

const handleSubmit = () => {
    const newRecipient = {
        id: Date.now(), // Simple ID generation
        name: form.value.name,
        description: form.value.description,
        email: form.value.email,
        feedbackCount: 0
    }
    
    emit('recipientAdded', newRecipient)
    
    // Reset form
    form.value = {
        name: '',
        description: '',
        email: ''
    }
    
    isOpen.value = false
}
</script>

<template>
    <UModal v-model:open="isOpen">
        <template #content>
            <div class="p-6">
                <h2 class="text-xl font-semibold mb-4">Add New Recipient</h2>
                
                <form @submit.prevent="handleSubmit" class="space-y-4 w-full">
                    <div class="w-full">
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <UInput
                            id="name"
                            v-model="form.name"
                            placeholder="Enter recipient name"
                            required
                        />
                    </div>
                    
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <UInput
                            id="email"
                            v-model="form.email"
                            type="email"
                            placeholder="Enter recipient email"
                            required
                        />
                    </div>
                    
                    <div>
                        <label for="description" class="block text-sm font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <UTextarea
                            id="description"
                            v-model="form.description"
                            placeholder="Enter recipient description"
                            rows="3"
                        />
                    </div>
                    
                    <div class="flex justify-end space-x-3 pt-4">
                        <UButton
                            type="button"
                            variant="soft"
                            @click="emit('close')"
                        >
                            Cancel
                        </UButton>
                        <UButton
                            type="submit"
                            color="primary"
                            variant="solid"
                        >
                            Add Recipient
                        </UButton>
                    </div>
                </form>
            </div>
        </template>
    </UModal>
</template>
