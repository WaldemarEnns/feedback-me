// Date formatting helper for human-readable durations
export interface DateFormatOptions {
  includeTime?: boolean
  locale?: string
}

/**
 * Formats a date string to show human-readable durations
 * Rules:
 * - Today: "Today"
 * - Yesterday: "Yesterday" 
 * - 2-6 days ago: "X days ago"
 * - 1-2 weeks ago: "X weeks ago"
 * - 3+ weeks ago: Show month (e.g., "January")
 * - Past year: Show month and year (e.g., "January 2023")
 */
export const formatRelativeDate = (dateString: string, options: DateFormatOptions = {}): string => {
  const date = new Date(dateString)
  const now = new Date()
  
  // Reset time to start of day for accurate day comparison
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const targetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  
  const diffInMs = today.getTime() - targetDate.getTime()
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
  
  // Today
  if (diffInDays === 0) {
    return 'Today'
  }
  
  // Yesterday
  if (diffInDays === 1) {
    return 'Yesterday'
  }
  
  // 2-6 days ago
  if (diffInDays >= 2 && diffInDays <= 6) {
    return `${diffInDays} days ago`
  }
  
  // 1-2 weeks ago
  if (diffInDays >= 7 && diffInDays <= 14) {
    const weeks = Math.floor(diffInDays / 7)
    return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`
  }
  
  // 3+ weeks ago - show month
  const currentYear = now.getFullYear()
  const targetYear = date.getFullYear()
  
  // If it's a past year, show month and year
  if (targetYear < currentYear) {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    })
  }
  
  // Same year, just show month
  return date.toLocaleDateString('en-US', {
    month: 'long'
  })
}

/**
 * Formats a date string to a standard format
 * Used for fallback or when full date is needed
 */
export const formatStandardDate = (dateString: string, options: DateFormatOptions = {}): string => {
  const date = new Date(dateString)
  const { locale = 'en-US', includeTime = false } = options
  
  const formatOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }
  
  if (includeTime) {
    formatOptions.hour = '2-digit'
    formatOptions.minute = '2-digit'
  }
  
  return date.toLocaleDateString(locale, formatOptions)
}

/**
 * Gets a human-readable duration between two dates
 */
export const getDurationBetween = (startDate: string, endDate: string): string => {
  const start = new Date(startDate)
  const end = new Date(endDate)
  const diffInMs = end.getTime() - start.getTime()
  
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
  const diffInWeeks = Math.floor(diffInDays / 7)
  const diffInMonths = Math.floor(diffInDays / 30)
  const diffInYears = Math.floor(diffInDays / 365)
  
  if (diffInYears > 0) {
    return diffInYears === 1 ? '1 year' : `${diffInYears} years`
  }
  
  if (diffInMonths > 0) {
    return diffInMonths === 1 ? '1 month' : `${diffInMonths} months`
  }
  
  if (diffInWeeks > 0) {
    return diffInWeeks === 1 ? '1 week' : `${diffInWeeks} weeks`
  }
  
  if (diffInDays > 0) {
    return diffInDays === 1 ? '1 day' : `${diffInDays} days`
  }
  
  return 'Less than a day'
}

/**
 * Checks if a date is today
 */
export const isToday = (dateString: string): boolean => {
  const date = new Date(dateString)
  const today = new Date()
  
  return date.getDate() === today.getDate() &&
         date.getMonth() === today.getMonth() &&
         date.getFullYear() === today.getFullYear()
}

/**
 * Checks if a date is yesterday
 */
export const isYesterday = (dateString: string): boolean => {
  const date = new Date(dateString)
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  
  return date.getDate() === yesterday.getDate() &&
         date.getMonth() === yesterday.getMonth() &&
         date.getFullYear() === yesterday.getFullYear()
}

/**
 * Checks if a date is within the last N days
 */
export const isWithinDays = (dateString: string, days: number): boolean => {
  const date = new Date(dateString)
  const now = new Date()
  const diffInMs = now.getTime() - date.getTime()
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
  
  return diffInDays <= days
}
