import type { SkillDefinition, SkillFile, SkillTreeNode } from '@/types/skill'

const rawFiles = import.meta.glob('/src/skill-content/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

const skillMetadata = [
  {
    slug: 'ecommerce-prisma-schema-and-seed',
    title: '电商 Prisma Schema 与种子数据',
    shortTitle: 'Schema & Seed',
    description: '根据参考电商站点动态建模商品结构，并生成可直接导入的 Prisma Schema 与 SQL 种子数据。',
    version: '2.0.0',
    category: '数据库生成',
    tags: ['Prisma', 'MySQL', '数据建模'],
    accent: '#2563eb',
    entryFile: 'SKILL.md',
  },
  {
    slug: 'vue2-to-vue3-demo',
    title: 'Vue 2 公共组件重构为 Vue 3 Demo',
    shortTitle: 'Vue Migration',
    description: '从真实 Vue 2 项目抽离公共组件，迁移到 Vue 3、TypeScript 与 Vite，并整理为可运行的演示项目。',
    version: '1.0.0',
    category: '前端重构',
    tags: ['Vue 3', 'TypeScript', '组件抽离'],
    accent: '#059669',
    entryFile: 'skill.md',
  },
  {
    slug: 'enterprise-ecommerce-generator',
    title: '企业级前后端电商项目生成',
    shortTitle: 'Commerce Builder',
    description: '约束完整电商项目的前端、后端、数据库与支付模块生成流程，并附带可复用的专项参考文档。',
    version: '1.0.0',
    category: '全栈工程',
    tags: ['Vue 3', 'NestJS', 'Prisma', 'Redis'],
    accent: '#d97706',
    entryFile: 'skill.md',
  },
] as const

function languageForFile(filename: string): string {
  const extension = filename.split('.').pop()?.toLowerCase()

  return extension === 'md' ? 'Markdown' : extension?.toUpperCase() || 'Text'
}

function filesForSkill(slug: string): SkillFile[] {
  const prefix = `/src/skill-content/${slug}/`

  return Object.entries(rawFiles)
    .filter(([key]) => key.startsWith(prefix))
    .map(([key, content]) => {
      const path = key.slice(prefix.length)
      const pathParts = path.split('/')
      const name = pathParts[pathParts.length - 1] ?? path

      return {
        path,
        name,
        content,
        bytes: new TextEncoder().encode(content).length,
        language: languageForFile(name),
      }
    })
    .sort((first, second) => first.path.localeCompare(second.path, 'zh-CN'))
}

function buildTree(files: SkillFile[]): SkillTreeNode[] {
  const root: SkillTreeNode[] = []

  for (const file of files) {
    const parts = file.path.split('/')
    let currentLevel = root
    let currentPath = ''

    parts.forEach((part, index) => {
      currentPath = currentPath ? `${currentPath}/${part}` : part
      const isFile = index === parts.length - 1
      let node = currentLevel.find((item) => item.name === part)

      if (!node) {
        node = {
          name: part,
          path: currentPath,
          type: isFile ? 'file' : 'directory',
          ...(isFile ? {} : { children: [] }),
        }
        currentLevel.push(node)
      }

      if (!isFile) {
        currentLevel = node.children ?? []
      }
    })
  }

  const sortNodes = (nodes: SkillTreeNode[]): SkillTreeNode[] =>
    nodes
      .sort((first, second) => {
        if (first.type !== second.type) return first.type === 'directory' ? -1 : 1
        return first.name.localeCompare(second.name, 'zh-CN')
      })
      .map((node) => ({
        ...node,
        ...(node.children ? { children: sortNodes(node.children) } : {}),
      }))

  return sortNodes(root)
}

export const skills: SkillDefinition[] = skillMetadata.map((metadata) => {
  const files = filesForSkill(metadata.slug)

  return {
    ...metadata,
    tags: [...metadata.tags],
    files,
    tree: buildTree(files),
  }
})

export function findSkillBySlug(slug: string): SkillDefinition | undefined {
  return skills.find((skill) => skill.slug === slug)
}
