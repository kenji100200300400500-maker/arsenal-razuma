import { Category } from '../App'
import { getCategoryData } from '../data/categoryData'

interface CategoryViewProps {
  category: Category
  onBack: () => void
}

export default function CategoryView({ category, onBack }: CategoryViewProps) {
  const items = getCategoryData(category.id)

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
            {items.map((item, index) => (
              <div key={index} className="item-card">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-description">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
