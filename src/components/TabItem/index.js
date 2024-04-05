// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onChangeTabSelection = () => {
    clickTabItem(tabId)
  }

  const activeTabButtonClassName = isActive ? 'active-btn' : ''

  return (
    <li>
      <button
        type="button"
        className={`btn 
        ${activeTabButtonClassName}`}
        onClick={onChangeTabSelection}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
