export type ProjectType = 'application' | 'component'

export type DemoStatus = 'live' | 'preparing' | 'offline'

export interface ProjectLinks {
  demo?: string
  website?: string
  source?: string
  frontendSource?: string
  backendSource?: string
  apiDocs?: string
  caseStudy?: string
}

export interface ProjectSite {
  name: string
  url: string
  description: string
  requiresLogin?: boolean
}

export interface Project {
  id: string
  slug: string
  order: number
  title: string
  shortTitle: string
  summary: string
  description: string
  type: ProjectType
  stack: string[]
  highlights: string[]
  challenges: string[]
  architecture: string[]
  links: ProjectLinks
  sites?: ProjectSite[]
  accessNote?: string
  demoStatus: DemoStatus
  accent: string
  code: string
  featured?: boolean
}

export interface ProjectFilter {
  value: 'all' | ProjectType
  label: string
  count: number
}
