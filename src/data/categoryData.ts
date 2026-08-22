export interface Item {
  title: string
  description: string
}

const categoryDataMap: Record<string, Item[]> = {
  thinking: [],
  principles: [
    {
      title: 'Принцип последствий',
      description: 'Каждое действие имеет последствия. Прежде чем действовать, необходимо анализировать возможные исходы и нести ответственность за свой выбор.'
    },
    {
      title: 'Факт или интерпретация?',
      description: 'Важно различать объективные факты от субъективных интерпретаций. Это помогает принимать правильные решения на основе реальности, а не предположений.'
    },
    {
      title: 'Принцип действия',
      description: 'Знание без действия бесполезно. Приоритет — воплощение идей в реальность. Только практика приводит к результатам.'
    }
  ],
  discipline: [],
  mistakes: [],
  goals: [],
  knowledge: []
}

export function getCategoryData(categoryId: string): Item[] {
  return categoryDataMap[categoryId] || []
}
