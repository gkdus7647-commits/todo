const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");

// 할 일 추가
function addTodo() {
    const text = input.value.trim();

    if (text === "") {
        alert("할 일을 입력하세요!");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;

    // 완료 체크
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    // 수정 버튼
    const editBtn = document.createElement("button");
    editBtn.textContent = "수정";

    editBtn.addEventListener("click", function () {
        const newText = prompt("할 일을 수정하세요:", span.textContent);

        if (newText !== null && newText.trim() !== "") {
            span.textContent = newText.trim();
        }
    });

    // 삭제 버튼
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    list.appendChild(li);

    input.value = "";
}

// 버튼 클릭 시 추가
document.querySelector("button").addEventListener("click", addTodo);

// 엔터키 추가
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTodo();
    }
});
