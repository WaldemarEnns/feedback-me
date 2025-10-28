// Emotion emoji mappings and configurations
export interface EmotionConfig {
  emoji: string
  label: string
  color: string
  icon: string
}

export const EMOTIONS = {
  happy: {
    emoji: '😊',
    label: 'Happy',
    color: 'yellow',
    icon: 'i-heroicons-face-smile'
  },
  excited: {
    emoji: '🤩',
    label: 'Excited',
    color: 'orange',
    icon: 'i-heroicons-sparkles'
  },
  confident: {
    emoji: '😎',
    label: 'Confident',
    color: 'blue',
    icon: 'i-heroicons-shield-check'
  },
  calm: {
    emoji: '😌',
    label: 'Calm',
    color: 'green',
    icon: 'i-heroicons-heart'
  },
  neutral: {
    emoji: '😐',
    label: 'Neutral',
    color: 'gray',
    icon: 'i-heroicons-minus-circle'
  },
  confused: {
    emoji: '😕',
    label: 'Confused',
    color: 'amber',
    icon: 'i-heroicons-question-mark-circle'
  },
  worried: {
    emoji: '😟',
    label: 'Worried',
    color: 'yellow',
    icon: 'i-heroicons-exclamation-circle'
  },
  sad: {
    emoji: '😢',
    label: 'Sad',
    color: 'blue',
    icon: 'i-heroicons-face-frown'
  },
  angry: {
    emoji: '😠',
    label: 'Angry',
    color: 'red',
    icon: 'i-heroicons-face-frown-open'
  }
} as const

// Sentiment configurations with better colors
export interface SentimentConfig {
  color: 'success' | 'error' | 'neutral' | 'primary' | 'secondary' | 'info' | 'warning'
  icon: string
  label: string
  bgColor: string
}

export const SENTIMENTS = {
  positive: {
    color: 'success',
    icon: 'i-heroicons-check-circle',
    label: 'Positive',
    bgColor: 'bg-emerald-50'
  },
  negative: {
    color: 'error',
    icon: 'i-heroicons-x-circle',
    label: 'Negative',
    bgColor: 'bg-rose-50'
  },
  neutral: {
    color: 'neutral',
    icon: 'i-heroicons-minus-circle',
    label: 'Neutral',
    bgColor: 'bg-slate-50'
  }
} as const

// Helper functions
export const getEmotionConfig = (emotion: string): EmotionConfig => {
  const key = emotion.toLowerCase() as keyof typeof EMOTIONS
  return (EMOTIONS[key] || EMOTIONS.neutral) as EmotionConfig
}

export const getSentimentConfig = (sentiment: string): SentimentConfig => {
  const key = sentiment.toLowerCase() as keyof typeof SENTIMENTS
  return (SENTIMENTS[key] || SENTIMENTS.neutral) as SentimentConfig
}

export const getAllEmotions = (): EmotionConfig[] => {
  return Object.values(EMOTIONS)
}

export const getAllSentiments = (): SentimentConfig[] => {
  return Object.values(SENTIMENTS)
}
