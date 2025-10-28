<script setup lang="ts">
import { getEmotionConfig, getSentimentConfig } from '~/utils/emotions'
import { formatRelativeDate, formatStandardDate } from '~/utils/dates'

interface Feedback {
  id: number
  recipientName: string
  date: string
  emotion: string
  feedback: string
  sentiment: 'positive' | 'negative' | 'neutral'
  avatar?: string
}

interface Props {
  feedback: Feedback
}

const props = defineProps<Props>()

const emotionConfig = computed(() => getEmotionConfig(props.feedback.emotion))
const sentimentConfig = computed(() => getSentimentConfig(props.feedback.sentiment))
</script>

<template>
  <UCard class="hover:shadow-lg transition-shadow duration-200">
    <template #header>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <UAvatar 
            :alt="feedback.recipientName"
            size="md"
            :src="feedback.avatar"
            icon="i-heroicons-user"
          />
          <div>
            <h3 class="font-semibold text-lg">{{ feedback.recipientName }}</h3>
            <UTooltip :text="formatStandardDate(feedback.date)">
              <p class="text-sm text-gray-500 dark:text-gray-400 cursor-help">{{ formatRelativeDate(feedback.date) }}</p>
            </UTooltip>
          </div>
        </div>
        <UBadge 
          :color="sentimentConfig.color as any" 
          variant="soft"
          :icon="sentimentConfig.icon"
          size="lg"
        >
          {{ sentimentConfig.label }}
        </UBadge>
      </div>
    </template>

    <div class="space-y-3">
      <div class="flex items-center gap-2">
        <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
          {{ emotionConfig.emoji }} {{ emotionConfig.label }}
        </span>
      </div>
      
      <div class="flex-1">
        <div class="h-20 overflow-hidden">
          <p class="text-gray-500 dark:text-gray-400 leading-relaxed overflow-hidden text-ellipsis" style="display: -webkit-box; -webkit-line-clamp: 4; line-clamp: 4; -webkit-box-orient: vertical;">
            {{ feedback.feedback }}
          </p>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="flex justify-end">
        <UButton 
          variant="ghost" 
          size="sm"
          icon="i-heroicons-eye"
          label="View Full Feedback"
          class="cursor-pointer"
        />
      </div>
    </template>
  </UCard>
</template>
