export interface SkillFile {
  path: string
  name: string
  content: string
  bytes: number
  language: string
}

export interface SkillTreeNode {
  name: string
  path: string
  type: 'directory' | 'file'
  children?: SkillTreeNode[]
}

export interface SkillDefinition {
  slug: string
  title: string
  shortTitle: string
  description: string
  version: string
  category: string
  tags: string[]
  accent: string
  files: SkillFile[]
  tree: SkillTreeNode[]
  entryFile: string
}
