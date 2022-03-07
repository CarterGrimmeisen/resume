import { App } from 'vue'
import { HeadClient } from '@vueuse/head'

interface AppContext {
  app: App<Element>
  head: HeadClient | undefined
}

export type UserModule = (ctx: AppContext) => void

export type Messages = Record<string, {
  education: {
    completed: string
    degree: string
    institution: string
  }[]

  experience: {
    position: string
    period: string
    company: string
    description: string
  }[]

  projects: {
    name: string
    github: string
    technologies: string[]
    description: string
  }[]

  info: {
    profile: string
    title: string
  }

  skills: string[]
  certifications: string[]

  label: {
    contact: string
    education: string
    experience: string
    profile: string
    skills: string
  }
}>
