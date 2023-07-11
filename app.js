const unreadMessages = document.querySelectorAll(".unread");
const number = document.querySelector(".number");
const markAll = document.querySelector(".mark-all");

number.innerText = unreadMessages.length;

unreadMessages.forEach((message) => {
  message.addEventListener("click", () => {
    message.classList.remove("unread");
    const newUnreadMessages = document.querySelectorAll(".unread");
    number.innerText = newUnreadMessages.length;
  });
});

markAll.addEventListener("click", () => {
  unreadMessages.forEach((message) => {
    message.classList.remove("unread");
  });
  const newUnreadMessages = document.querySelectorAll(".unread");
  number.innerHTML = newUnreadMessages.length;
});
