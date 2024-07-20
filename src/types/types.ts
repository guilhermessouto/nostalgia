// Category

export interface Categories {
  items: Category[]
}

export interface Category {
  id: string
  name: string
  href?: string
  icons: {
    url: string
    height: number
    width: number
  }[]
}