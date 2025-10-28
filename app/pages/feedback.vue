<script setup lang="ts">
interface Feedback {
  id: number
  recipientName: string
  date: string
  emotion: string
  feedback: string
  sentiment: 'positive' | 'negative' | 'neutral'
  avatar?: string
}

// Sample feedback data with diverse emotions and dates covering all scenarios
const feedbackList = ref<Feedback[]>([
  {
    id: 1,
    recipientName: 'John Doe',
    date: new Date().toISOString().split('T')[0], // Today
    emotion: 'happy',
    feedback: 'John has been doing excellent work on the project. His attention to detail and problem-solving skills are outstanding. He consistently delivers high-quality code and is always willing to help team members. His positive attitude makes him a pleasure to work with.',
    sentiment: 'positive',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 2,
    recipientName: 'Jane Doe',
    date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Yesterday
    emotion: 'worried',
    feedback: 'Jane seems to be struggling with the new framework implementation. She has been asking many questions and appears uncertain about the approach. While her effort is commendable, the project timeline might be affected if we don\'t provide additional support.',
    sentiment: 'negative',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 3,
    recipientName: 'John Smith',
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 3 days ago
    emotion: 'neutral',
    feedback: 'John\'s performance has been steady and consistent. He completes his tasks on time and follows the established processes well. There are no major concerns, but also no exceptional achievements to highlight.',
    sentiment: 'neutral',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 4,
    recipientName: 'Sarah Johnson',
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 5 days ago
    emotion: 'excited',
    feedback: 'Sarah\'s innovative approach to solving complex problems has been impressive. She proposed a new architecture that could significantly improve our system performance. Her enthusiasm and technical expertise are valuable assets to the team.',
    sentiment: 'positive',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 5,
    recipientName: 'Mike Wilson',
    date: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 1 week ago
    emotion: 'confused',
    feedback: 'Mike has been having difficulty understanding the new requirements. He seems to be missing some key concepts and has been making repeated mistakes. Additional training or mentoring might be necessary to get him back on track.',
    sentiment: 'negative',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 6,
    recipientName: 'Emily Chen',
    date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 2 weeks ago
    emotion: 'confident',
    feedback: 'Emily has shown remarkable leadership skills in the recent project. She confidently guided the team through complex challenges and made decisive decisions that led to successful outcomes. Her expertise and calm demeanor inspire confidence in the entire team.',
    sentiment: 'positive',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 7,
    recipientName: 'David Brown',
    date: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 3+ weeks ago (current month)
    emotion: 'calm',
    feedback: 'David maintains a steady and composed approach to his work. He handles pressure well and provides thoughtful solutions to problems. His calm presence helps maintain team stability during challenging periods.',
    sentiment: 'neutral',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 8,
    recipientName: 'Lisa Garcia',
    date: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 6+ weeks ago (past month, current year)
    emotion: 'sad',
    feedback: 'Lisa has been going through a difficult time personally, which has affected her work performance. She\'s been missing deadlines and seems disengaged from team activities. We should offer support and check in on her wellbeing.',
    sentiment: 'negative',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 9,
    recipientName: 'Alex Thompson',
    date: '2023-11-15', // Past year
    emotion: 'angry',
    feedback: 'Alex has been expressing frustration with the current project constraints and tight deadlines. While his concerns are valid, his communication style has become confrontational and is affecting team morale. We need to address this constructively.',
    sentiment: 'negative',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 10,
    recipientName: 'Maria Rodriguez',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 2 days ago
    emotion: 'excited',
    feedback: 'Maria has been showing great enthusiasm for the new project. Her creative ideas and proactive approach have been instrumental in moving the project forward. She consistently goes above and beyond expectations.',
    sentiment: 'positive',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 11,
    recipientName: 'Tom Wilson',
    date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 6 days ago
    emotion: 'confused',
    feedback: 'Tom has been struggling with the new system implementation. He needs additional training and support to get up to speed with the latest technologies and processes.',
    sentiment: 'negative',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 12,
    recipientName: 'Anna Lee',
    date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 10 days ago (1+ weeks)
    emotion: 'calm',
    feedback: 'Anna has been maintaining a steady pace with her work. She handles tasks efficiently and maintains good communication with the team. Her consistent performance is appreciated.',
    sentiment: 'neutral',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  }
])

// Show all feedback without filtering
const filteredFeedback = computed(() => {
  return feedbackList.value
})
</script>

<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold">Feedback</h1>
    </div>

    <div v-if="filteredFeedback.length === 0" class="text-center py-12">
      <UIcon name="i-heroicons-chat-bubble-left-right" class="w-12 h-12 text-gray-400 mx-auto mb-4" />
      <h3 class="text-lg font-medium text-gray-600 mb-2">No feedback found</h3>
      <p class="text-gray-500">Try adjusting your filters to see more results.</p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FeedbackCard 
        v-for="feedback in filteredFeedback" 
        :key="feedback.id"
        :feedback="feedback"
      />
    </div>

    <div class="flex justify-center pt-6">
      <UButton 
        label="Load More Feedback" 
        variant="outline"
        icon="i-heroicons-arrow-down"
        size="lg"
        class="cursor-pointer"
      />
    </div>
  </div>
</template>