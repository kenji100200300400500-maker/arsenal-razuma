import { useState } from 'react'
import { Category } from '../App'
import { getCategoryData, Item } from '../data/categoryData'

interface CategoryViewProps {
  category: Category
  onBack: () => void
}

export default function CategoryView({ category, onBack }: CategoryViewProps) {
  const items = getCategoryData(category.id)
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)

  if (selectedItem) {
    return (
      <div className="item-detail-view">
        <header className="item-detail-header">
          <button 
            className="back-button" 
            onClick={() => setSelectedItem(null)}
            type="button"
            aria-label="Вернуться к списку"
          >
            ← Назад к списку
          </button>
        </header>

        <main className="item-detail-content">
          <div className="item-detail-wrapper">
            <h1 className="item-detail-title">{selectedItem.title}</h1>
            
            <div className="detail-section">
              <h2 className="detail-section-title">Описание</h2>
              <p className="detail-text">{selectedItem.description}</p>
            </div>

            <div className="detail-section">
              <h2 className="detail-section-title">Что это значит?</h2>
              <p className="detail-text">{selectedItem.meaning}</p>
            </div>

            <div className="detail-section">
              <h2 className="detail-section-title">Почему это важно?</h2>
              <p className="detail-text">{selectedItem.why}</p>
            </div>

            <div className="detail-section">
              <h2 className="detail-section-title">Пример</h2>
              <p className="detail-text">{selectedItem.example}</p>
            </div>

            <div className="detail-section">
              <h2 className="detail-section-title">Рефлексия</h2>
              <p className="detail-question">{selectedItem.question}</p>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="category-view">
      <header className="category-header">
        <button 
          className="back-button" 
          onClick={onBack}
          type="button"
          aria-label="Вернуться к категориям"
        >
          ← Назад
        </button>
        <h1 className="category-view-title">
          <span className="category-view-title-emoji" aria-hidden="true">
            {category.emoji}
          </span>
          {category.title}
        </h1>
      </header>

      <main className="category-content">
        {items.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-emoji" aria-hidden="true">✨</div>
            <p className="empty-state-text">Раздел пока пуст</p>
          </div>
        ) : (
          <div className="items-list">
            {items.map((item) => (
              <button
                key={item.id}
                className="item-card"
                onClick={() => setSelectedItem(item)}
                type="button"
                aria-label={`Подробнее о ${item.title}`}
              >
                <h3 className="item-title">{item.title}</h3>
                <p className="item-description">{item.description}</p>
                <span className="item-expand-hint">Нажмите для подробнее →</span>
              </button>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
