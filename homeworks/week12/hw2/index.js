/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable no-useless-escape */

// 刪除
$(".list-group").on("click", ".btn-delete-list", (e) => {
  $(e.target).closest(".list-group-item").remove();
});

// 新增
$(".add-todo-btn").click((e) => {
  addItem();
});
$(".add-todo-wrapper").on("keydown", ".add-todo-input", (e) => {
  if (e.keyCode === 13) {
    addItem();
  }
});
// 編輯
$(".list-group").on("dblclick", ".lead", (e) => {
  contentEditable($(e.target), true);
});

$(".list-group").on("keydown", ".lead", (e) => {
  if (e.keyCode === 13) {
    contentEditable($(e.target), false);
  }
});
// 清除
$(".btn-danger").click((e) => {
  $(".list-group-item").remove();
});
// 標記
$(".list-group").on("click", "input[type=checkbox]", (e) => {
  const list = $(e.target).closest(".list-group-item");
  const content = $(e.target).closest(".list-content");
  list.toggleClass("checked");
  content.toggleClass("text-decoration-line-through text-muted");
});
// 篩選
$(".filter-option").change(() => {
  filterList();
});

function addItem() {
  const inputValue = $(".add-todo-input").val();
  if (inputValue.trim().length === 0) {
    return false;
  }
  appendItemToDOM($(".list-group"), inputValue, true);
  $(".add-todo-input").val("");
}

function filterList() {
  const option = $("select option:selected").text();
  if (option === "All") {
    $(".list-group-item").removeClass("visually-hidden");
  } else if (option === "Active") {
    $(".list-group-item").removeClass("visually-hidden");
    $(".checked").closest(".list-group-item").addClass("visually-hidden");
  } else {
    $(".list-group-item").addClass("visually-hidden");
    $(".checked").closest(".list-group-item").removeClass("visually-hidden");
  }
}

function contentEditable(node, IsEditable) {
  IsEditable
    ? node.attr("contenteditable", "true")
    : node.attr("contenteditable", "false");
}

function appendItemToDOM(container, item, isPrepend) {
  const outerHtml = `
  <li class="col col-11 list-group-item d-flex align-items-center ps-2 py-2 rounded-0 border-0 bg-transparent">
  <div class="list-content d-flex align-items-center">
    <input
      class="form-check-input p-2 mx-4"
      type="checkbox"
      value=""
      id="flexCheckChecked1"
      aria-label="..."
    />
    <span  title="Click to edit" contenteditable="false" class="px-2 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
      <p class="lead fw-normal mb-0">${escapeHTML(item)}</p>
    </span>
  </div>
  <button type="button" class=" btn-delete-list border-0 bg-transparent ms-auto" aria-label="Close">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="currentColor" class="bi bi-trash" viewBox="0 0 14 14">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>
  </button>
  </li>
  `;
  isPrepend ? container.prepend(outerHtml) : container.append(outerHtml);
}

function escapeHTML(toOutput) {
  if (toOutput) {
    return toOutput
      .replace(/\&/g, "&amp;")
      .replace(/\</g, "&lt;")
      .replace(/\>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/\'/g, "&#x27")
      .replace(/\//g, "&#x2F");
  }
}
