export type InlineToken =
  | { type: 'text' | 'strong' | 'code'; content: string }
  | { type: 'link'; content: string; href: string }

export type MarkdownBlock =
  | { type: 'heading'; level: number; content: InlineToken[] }
  | { type: 'paragraph' | 'quote'; content: InlineToken[] }
  | { type: 'list'; ordered: boolean; items: InlineToken[][] }
  | { type: 'table'; headers: InlineToken[][]; rows: InlineToken[][][] }
  | { type: 'code'; language: string; content: string }
  | { type: 'hr' }

const blockStartPattern = /^(#{1,6})\s+|^```|^\s*([-*+]\s+|\d+\.\s+)|^>\s?|^\s*(---+|___+|\*\*\*+)\s*$/

export function stripFrontmatter(markdown: string): string {
  return markdown.replace(/^---\s*\n[\s\S]*?\n---\s*\n?/, '')
}

export function parseInline(text: string): InlineToken[] {
  const tokens: InlineToken[] = []
  const pattern = /(\*\*([^*]+)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\))/g
  let cursor = 0
  let match: RegExpExecArray | null

  while ((match = pattern.exec(text))) {
    if (match.index > cursor) {
      tokens.push({ type: 'text', content: text.slice(cursor, match.index) })
    }

    if (match[2]) tokens.push({ type: 'strong', content: match[2] })
    else if (match[3]) tokens.push({ type: 'code', content: match[3] })
    else tokens.push({ type: 'link', content: match[4] ?? '', href: match[5] ?? '' })

    cursor = pattern.lastIndex
  }

  if (cursor < text.length) {
    tokens.push({ type: 'text', content: text.slice(cursor) })
  }

  return tokens.length ? tokens : [{ type: 'text', content: text }]
}

export function parseMarkdown(markdown: string): MarkdownBlock[] {
  const lines = stripFrontmatter(markdown).replace(/\r\n/g, '\n').split('\n')
  const blocks: MarkdownBlock[] = []
  let index = 0

  while (index < lines.length) {
    const line = lines[index] ?? ''

    if (!line.trim()) {
      index += 1
      continue
    }

    const fence = line.match(/^```\s*([^\s]*)/)
    if (fence) {
      const code: string[] = []
      index += 1
      while (index < lines.length && !/^```/.test(lines[index] ?? '')) {
        code.push(lines[index] ?? '')
        index += 1
      }
      index += 1
      blocks.push({ type: 'code', language: fence[1] ?? '', content: code.join('\n') })
      continue
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/)
    if (heading) {
      blocks.push({ type: 'heading', level: heading[1]?.length ?? 1, content: parseInline(heading[2] ?? '') })
      index += 1
      continue
    }

    if (/^\s*(---+|___+|\*\*\*+)\s*$/.test(line)) {
      blocks.push({ type: 'hr' })
      index += 1
      continue
    }

    if (/^>\s?/.test(line)) {
      const quote: string[] = []
      while (index < lines.length && /^>\s?/.test(lines[index] ?? '')) {
        quote.push((lines[index] ?? '').replace(/^>\s?/, ''))
        index += 1
      }
      blocks.push({ type: 'quote', content: parseInline(quote.join(' ')) })
      continue
    }

    const tableSeparator = lines[index + 1] ?? ''
    if (line.includes('|') && /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(tableSeparator)) {
      const parseCells = (row: string) =>
        row
          .trim()
          .replace(/^\|/, '')
          .replace(/\|$/, '')
          .split('|')
          .map((cell) => parseInline(cell.trim()))

      const headers = parseCells(line)
      const rows: InlineToken[][][] = []
      index += 2

      while (index < lines.length && (lines[index] ?? '').includes('|') && (lines[index] ?? '').trim()) {
        rows.push(parseCells(lines[index] ?? ''))
        index += 1
      }

      blocks.push({ type: 'table', headers, rows })
      continue
    }

    const listItem = line.match(/^\s*([-*+]|\d+\.)\s+(.+)$/)
    if (listItem) {
      const ordered = /\d+\./.test(listItem[1] ?? '')
      const items: InlineToken[][] = []
      while (index < lines.length) {
        const item = (lines[index] ?? '').match(/^\s*([-*+]|\d+\.)\s+(.+)$/)
        if (!item || /\d+\./.test(item[1] ?? '') !== ordered) break
        items.push(parseInline(item[2] ?? ''))
        index += 1
      }
      blocks.push({ type: 'list', ordered, items })
      continue
    }

    const paragraph = [line.trim()]
    index += 1
    while (index < lines.length && (lines[index] ?? '').trim() && !blockStartPattern.test(lines[index] ?? '')) {
      paragraph.push((lines[index] ?? '').trim())
      index += 1
    }
    blocks.push({ type: 'paragraph', content: parseInline(paragraph.join(' ')) })
  }

  return blocks
}
