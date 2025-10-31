<script setup lang="ts">
import { EMOTIONS, SENTIMENTS } from '~/utils/emotions'
import type { Emotion, Sentiment } from '~/utils/emotions'

interface Props {
  recipients: string[]
}

const props = defineProps<Props>()
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap gap-4 items-end">
      <!-- Recipient Filter -->
      <div class="flex-1 min-w-[200px]">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Recipient
        </label>
        <USelectMenu
          :options="props.recipients"
          placeholder="All recipients"
          searchable
          class="cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>

