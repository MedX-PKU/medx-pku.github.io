import { marked } from 'marked'
import { parse, format } from 'date-fns'

// Configure marked options
marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: true,
  mangle: false,
})

/**
 * Simple YAML frontmatter parser
 * Splits content into frontmatter and body
 */
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)

  if (!match) {
    return {
      data: {},
      content: content
    }
  }

  const frontmatterText = match[1]
  const body = match[2]
  const data = {}

  // Simple YAML parser with robust type checking
  frontmatterText.split('\n').forEach((line, index) => {
    const colonIndex = line.indexOf(':')
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim()
      let value = line.substring(colonIndex + 1).trim()

      // Skip empty values
      if (!value || value.trim() === '') {
        return
      }

      // Ensure value is always a string before any string operations
      value = String(value)

      // Remove quotes if present (only if still a string)
      if (typeof value === 'string') {
        if ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1)
        }

        // Parse boolean values
        if (value === 'true') {
          value = true
        } else if (value === 'false') {
          value = false
        }

        // Parse arrays (only if still a string)
        if (typeof value === 'string' && value.startsWith('[') && value.endsWith(']')) {
          const arrayContent = value.slice(1, -1)
          value = arrayContent
            .split(',')
            .map(item => {
              const trimmed = item.trim()
              return trimmed.replace(/^['"]|['"]$/g, '')
            })
            .filter(item => item && item.length > 0)
        }
      }

      data[key] = value
    }
  })

  return {
    data,
    content: body.trim()
  }
}

// Direct imports of all markdown files
import patternsAicare from '../content/news/2025-02-18-patterns-aicare.md?raw'
import patternsCovid19benchmark from '../content/news/2025-02-20-patterns-covid19benchmark.md?raw'
import guangxiMedicalLecture from '../content/news/2025-02-27-guangxi-medical-lecture.md?raw'
import www2025Act from '../content/news/2025-03-23-www2025-act.md?raw'
import www2025Colacare from '../content/news/2025-03-27-www2025-colacare.md?raw'
import kdd2025Pai from '../content/news/2025-04-24-kdd2025-pai.md?raw'
import www2025Presentation from '../content/news/2025-05-20-www2025-presentation.md?raw'
import gaojunyiBaiduScholarship from '../content/news/2025-05-29-gaojunyi-baidu-scholarship.md?raw'
import hdsDietaryIntake from '../content/news/2025-07-09-hds-dietary-intake.md?raw'
import medAiCourse from '../content/news/2025-07-10-med-ai-course.md?raw'
import theInnovationFmSurvey from '../content/news/2025-09-01-the-innovation-fm-survey.md?raw'
import neurips2025Medagentboard from '../content/news/2025-10-30-neurips2025-medagentboard.md?raw'
import neurips2025Magical from '../content/news/2025-11-02-neurips2025-magical.md?raw'
import njuFutianfanLecture from '../content/news/2025-11-03-nju-futianfan-lecture.md?raw'
import beijingHealthLecture from '../content/news/2025-11-05-beijing-health-lecture.md?raw'

const newsFiles = [
  { id: '2025-11-05-beijing-health-lecture', content: beijingHealthLecture },
  { id: '2025-11-03-nju-futianfan-lecture', content: njuFutianfanLecture },
  { id: '2025-11-02-neurips2025-magical', content: neurips2025Magical },
  { id: '2025-10-30-neurips2025-medagentboard', content: neurips2025Medagentboard },
  { id: '2025-09-01-the-innovation-fm-survey', content: theInnovationFmSurvey },
  { id: '2025-07-10-med-ai-course', content: medAiCourse },
  { id: '2025-07-09-hds-dietary-intake', content: hdsDietaryIntake },
  { id: '2025-05-29-gaojunyi-baidu-scholarship', content: gaojunyiBaiduScholarship },
  { id: '2025-05-20-www2025-presentation', content: www2025Presentation },
  { id: '2025-04-24-kdd2025-pai', content: kdd2025Pai },
  { id: '2025-03-27-www2025-colacare', content: www2025Colacare },
  { id: '2025-03-23-www2025-act', content: www2025Act },
  { id: '2025-02-27-guangxi-medical-lecture', content: guangxiMedicalLecture },
  { id: '2025-02-20-patterns-covid19benchmark', content: patternsCovid19benchmark },
  { id: '2025-02-18-patterns-aicare', content: patternsAicare }
]

/**
 * Process markdown content and return news data
 */
function processMarkdownFile(id, content) {
  try {
    const { data: frontmatter, content: markdownContent } = parseFrontmatter(content)

    // Parse date from frontmatter or filename
    let date = frontmatter.date
    if (!date) {
      const dateMatch = id.match(/^(\d{4}-\d{2}-\d{2})/)
      if (dateMatch) {
        date = dateMatch[1]
      }
    }

    const parsedDate = date ? parse(date, 'yyyy-MM-dd', new Date()) : new Date()
    const formattedDate = format(parsedDate, 'yyyy-MM-dd')

    // Convert markdown content to HTML
    const htmlContent = marked(markdownContent)

  // Auto-generate excerpt if not provided
  let excerpt = frontmatter.excerpt
  if (!excerpt) {
    const firstParagraph = markdownContent.match(/^#.*?\n\n(.*?)(\n\n|$)/m)
    if (firstParagraph) {
      excerpt = firstParagraph[1].replace(/\*\*/g, '').replace(/\*/g, '').substring(0, 150) + '...'
    } else {
      excerpt = markdownContent.replace(/^#.*?\n\n/, '').substring(0, 150) + '...'
    }
  }

  // Process category
  let category = frontmatter.category || 'other'
  if (!category && frontmatter.featured) {
    category = 'featured'
  }

  const categoryLabels = {
    featured: 'news.categories.featured',
    research: 'news.categories.research',
    event: 'news.categories.event',
    other: 'news.categories.other'
  }

  // Calculate reading time
  const wordsPerMinute = 200
  const words = markdownContent.split(/\s+/).length
  const readTime = Math.ceil(words / wordsPerMinute)

  return {
    id,
    title: frontmatter.title || 'Untitled',
    date: formattedDate,
    excerpt,
    content: htmlContent,
    rawContent: markdownContent,
    featured: frontmatter.featured || false,
    tags: frontmatter.tags || [],
    category: {
      id: category,
      label: categoryLabels[category] || 'news.categories.other'
    },
    image: frontmatter.image || null,
    author: frontmatter.author || null,
    readTime
  }
  } catch (error) {
    console.error('Error processing markdown file:', id, error)
    return {
      id,
      title: 'Error Loading Article',
      date: '2024-01-01',
      excerpt: 'There was an error loading this article.',
      content: '<p>There was an error loading this article.</p>',
      rawContent: '',
      featured: false,
      tags: [],
      category: { id: 'other', label: 'news.categories.other' },
      image: null,
      author: null,
      readTime: 1
    }
  }
}

/**
 * Load all news items
 */
export async function loadAllNews() {
  try {
    const newsItems = newsFiles.map(file => processMarkdownFile(file.id, file.content))

    // Sort by date (newest first)
    return newsItems.sort((a, b) => new Date(b.date) - new Date(a.date))

  } catch (error) {
    console.error('Error loading news:', error)
    return []
  }
}

/**
 * Load a single news item by ID
 */
export async function loadNewsById(id) {
  try {
    const newsFile = newsFiles.find(file => file.id === id)
    if (!newsFile) {
      console.log('Simple news loader: File not found for ID:', id)
      return null
    }

    return processMarkdownFile(id, newsFile.content)

  } catch (error) {
    console.error(`Error loading news item ${id}:`, error)
    return null
  }
}

/**
 * Get news items by category
 */
export async function getNewsByCategory(categoryId) {
  const allNews = await loadAllNews()

  if (categoryId === 'all') {
    return allNews
  }

  return allNews.filter(item => item.category.id === categoryId)
}

/**
 * Get featured news items
 */
export async function getFeaturedNews() {
  const allNews = await loadAllNews()
  return allNews.filter(item => item.featured)
}

/**
 * Get latest news items (limited)
 */
export async function getLatestNews(limit = 6) {
  const allNews = await loadAllNews()
  return allNews.slice(0, limit)
}

/**
 * Get news categories with counts
 */
export async function getNewsCategories() {
  const allNews = await loadAllNews()

  const categories = [
    { id: 'all', label: 'news.categories.all', count: allNews.length },
    { id: 'featured', label: 'news.categories.featured', count: allNews.filter(item => item.featured).length },
    { id: 'research', label: 'news.categories.research', count: allNews.filter(item => item.category.id === 'research').length },
    { id: 'event', label: 'news.categories.event', count: allNews.filter(item => item.category.id === 'event').length },
    { id: 'other', label: 'news.categories.other', count: allNews.filter(item => item.category.id === 'other').length }
  ]

  return categories
}