# News Images

This folder contains header images for news articles.

Images should be:
- Recommended size: 1200x630px (16:9 aspect ratio)
- File format: JPG, PNG, or WebP
- Optimized for web (max 500KB)

## Image Naming Convention

Use descriptive names that relate to the news content:
- `medagent-board-header.jpg`
- `colacare-system.png`
- `cell-patterns-visit.jpg`
- `medx-workshop.jpg`
- `nature-medicine-cover.jpg`

## Usage

In your markdown frontmatter, reference images like this:

```yaml
---
title: "Your News Title"
image: /images/news/your-image-name.jpg
---
```

The image path should be relative to the public directory.