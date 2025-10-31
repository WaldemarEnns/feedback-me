<script setup lang="ts">
interface Props {
  sortOrder: 'asc' | 'desc' | null
}

interface Emits {
  (e: 'update:sortOrder', value: 'asc' | 'desc' | null): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const sortModel = computed({
  get: () => props.sortOrder,
  set: (value) => emit('update:sortOrder', value)
})

const sortOptions = [
  { value: null, label: 'No sorting' },
  { value: 'desc', label: 'Newest first' },
  { value: 'asc', label: 'Oldest first' }
]
</script>

<template>
  <div class="flex-1 min-w-[200px]">
    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      Sort by Date
    </label>
    <USelectMenu
      v-model="sortModel"
      :options="sortOptions"
      placeholder="Sort order"
      searchable
      class="cursor-pointer"
    />
  </div>
</template>

