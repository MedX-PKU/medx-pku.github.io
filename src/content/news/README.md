# News Content Management

This directory contains markdown files for news articles. Each markdown file represents a news article with frontmatter metadata.

## File Naming Convention

Files should be named using the format: `YYYY-MM-DD-slug.md`

- `YYYY-MM-DD`: Publication date
- `slug`: Descriptive URL-friendly name (lowercase, hyphens only)

Examples:
- `2025-01-15-medagent-board.md`
- `2025-01-10-colacare.md`
- `2024-12-20-cell-patterns-visit.md`

## Frontmatter Schema

Each markdown file must include YAML frontmatter with the following fields:

```yaml
---
title: "Article Title"
date: YYYY-MM-DD
excerpt: "Brief description of the article"
featured: true|false
tags: ['tag1', 'tag2', 'tag3']
category: research|event|featured|other
image: /images/news/article-image.jpg
author: "Author Name (optional)"
---
```

### Required Fields
- `title`: Article title (string)
- `date`: Publication date (YYYY-MM-DD format)
- `excerpt`: Brief summary/teaser (string)

### Optional Fields
- `featured`: Whether to feature this article (boolean, default: false)
- `tags`: Array of tags for categorization (array of strings)
- `category`: Article category (string: research, event, featured, other)
- `image`: Path to header image (string, relative to public directory)
- `author`: Article author (string)

## Content Formatting

Use standard Markdown syntax for article content:

```markdown
---
title: "Example Article"
date: 2025-01-15
excerpt: "This is an example article"
featured: true
tags: ['Example', 'Demo']
category: research
---

# Main Title

This is the introduction paragraph.

## Section Title

Content with **bold** and *italic* text.

- List item 1
- List item 2
- List item 3

![Image Description](/images/news/example.jpg)

> This is a blockquote

### Code Example

```javascript
console.log('Hello World')
```

| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

## Adding New Articles

1. Create a new markdown file with proper naming convention
2. Add frontmatter with required metadata
3. Write the article content in markdown
4. Add any images to `/public/images/news/`
5. **That's it!** The article will automatically appear on the website

## Updating Articles

1. Edit the existing markdown file
2. Update frontmatter or content as needed
3. **Save the file** - changes will be reflected automatically

## Automatic Features

The system uses Vite's `import.meta.glob` to automatically:
- **Discover** all markdown files in this directory
- **Load** content dynamically without build steps
- **Cache** files efficiently for development
- **Code-split** each article into separate chunks

## Image Guidelines

- Store images in `/public/images/news/`
- Use descriptive filenames
- Recommended size: 1200x630px (16:9 aspect ratio)
- Use web-optimized formats (JPG, PNG, WebP)
- Reference images in content: `![Description](/images/news/filename.jpg)`

## Automatic Features

The system automatically handles:

- **ID Generation**: Uses filename as unique ID
- **Date Sorting**: Articles sorted by date (newest first)
- **Reading Time**: Calculated based on word count (200 words/minute)
- **Excerpt Generation**: Auto-generated if not provided
- **Category Assignment**: Can be inferred from content if not specified
- **HTML Rendering**: Markdown converted to HTML for display

## How It Works

The system loads markdown files using direct imports with Vite's `?raw` query:

```javascript
// Direct imports of markdown files
import articleName from '../content/news/YYYY-MM-DD-article-name.md?raw'
```

### Adding New Articles

**Current Approach (Manual Import)**:
1. Create markdown file with proper naming
2. Add import statement to `src/utils/newsLoader.js`
3. Add file to the `newsFiles` array
4. Done! Article appears automatically

**Example**:
```javascript
import newArticle from '../content/news/2025-01-25-new-article.md?raw'

const newsFiles = [
  { id: '2025-01-25-new-article', content: newArticle },
  // ... other files
]
```

### Benefits

- **Zero Build Scripts**: No generation steps required
- **Hot Reload**: Changes appear immediately in development
- **Type Safety**: Direct imports are validated by build tools
- **Performance**: Efficient bundling and loading
- **Reliable**: No runtime glob pattern issues

## Categories

- **research**: Research papers, academic publications, studies
- **event**: Workshops, visits, conferences, meetings
- **featured**: Important/featured articles (automatically tagged if `featured: true`)
- **other**: General news, announcements, other content

## Best Practices

1. **Consistent Naming**: Use descriptive, URL-friendly slugs
2. **Complete Metadata**: Fill out all relevant frontmatter fields
3. **Quality Content**: Use proper markdown formatting
4. **Image Optimization**: Use appropriately sized, optimized images
5. **Regular Updates**: Keep content current and relevant
6. **Testing**: Preview articles before publishing

## Troubleshooting

If articles don't appear:
1. Check file naming convention
2. Validate frontmatter syntax
3. Run the generation script
4. Check browser console for errors
5. Verify image paths are correct