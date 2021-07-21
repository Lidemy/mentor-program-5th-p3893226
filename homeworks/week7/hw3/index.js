// 點擊&按鍵輸入
document.querySelector('.btn-add').addEventListener('click', () =>
  addNew()
)
document.querySelector('.todo__input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addNew()
  }
})
// 使用事件代理-刪除
document.querySelector('.todo__list').addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-del')) {
    e.target.parentNode.remove()
  }
})
// 新增項目
function addNew() {
  const inputValue = document.querySelector('.todo__input').value
  // 避免輸入空白
  if (inputValue.trim().length === 0) {
    return false
  }
  const newItem = document.createElement('li')
  newItem.classList.add('todo__item')
  newItem.innerHTML = `
    <label class="todo__detail"><input class="todo__check" type="checkbox"><span>${inputValue}</span>
    </label>
    <button class="btn-del"></button>
    `
  const firstItem = document.querySelectorAll('li')[0]
  document.querySelector('.todo__list').insertBefore(newItem, firstItem)
  // 新增後歸零
  document.querySelector('.todo__input').value = ''
}
