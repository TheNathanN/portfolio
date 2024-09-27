export interface ListItem {
  id: number
  label: string
  link?: string
}

export interface ProjectInfo {
  name: string
  details: ListItem[]
  liveLink: string
  repoLink?: string
  imageComponent: JSX.Element
}
