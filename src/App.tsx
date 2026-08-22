import { useState } from 'react'
import './App.css'
import CategoryView from './components/CategoryView'

export interface Category {
  id: string
  title: string
  emoji: string
  description: string
}

const categories: Category[] = [
  {
    id: 'thinking',
    title: 'Мышление',
    emoji: '🧠',
    description: 'Методы и подходы к решению проблем'
  },
  {
    id: 'principles',
    title: 'Принципы',
    emoji: '⚖️',
    description: 'Ключевые жизненные убеждения'
  },
  {
    id: 'discipline',
    title: 'Дисциплина',
    emoji: '💪',
    description: 'Системы и привычки для саморазвития'
  },
  {
    id: 'mistakes',
    title: 'Ошибки',
    emoji: '📝',
    description: 'Уроки, извлечённые из ошибок'
  },
  {
    id: 'goals',
    title: 'Цели',
    emoji: '🎯',
    description: 'Краткосрочные и долгосрочные задачи'
  },
  {
    id: 'knowledge',
    title: 'Знания',
    emoji: '📚',
    description: 'Накопленная информация и опыт'
  }
]

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const selectedCategoryData = selectedCategory 
    ? categories.find(c => c.id === selectedCategory)
    : null

  if (selectedCategoryData) {
    return (
      <CategoryView 
        category={selectedCategoryData} 
        onBack={() => setSelectedCategory(null)} 
      />
    )
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">⚔️ Арсенал разума</h1>
        <p className="subtitle">
          Личный цифровой сайт для хранения принципов, мышления, дисциплины, целей, ошибок и знаний
        </p>
      </header>

      <main className="main">
        <div className="categories-grid">
          {categories.map((category) => (
            <button
              key={category.id}
              className="category-card"
              onClick={() => setSelectedCategory(category.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelectedCategory(category.id)
                }
              }}
              type="button"
              aria-label={`Открыть ${category.title}`}
            >
              <div className="card-emoji" aria-hidden="true">{category.emoji}</div>
              <h2 className="card-title">{category.title}</h2>
              <p className="card-description">{category.description}</p>
            </button>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Арсенал разума. Все права защищены.</p>
      </footer>
    </div>
  )
}

export default App
