var linkFeedbackOpen = document.querySelector(".feedback-btn");

var feedbackModal = document.querySelector(".feedback-form");

var btnCloseFeedbackModal = document.querySelector(".close-form-btn");

var pageDisabler = document.querySelector(".page-wrapper");

linkFeedbackOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.remove("hidden-block");
  pageDisabler.classList.add("page-disabler");
  feedbackFormName.focus();
});

btnCloseFeedbackModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.add("hidden-block");
  pageDisabler.classList.remove("page-disabler");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!feedbackModal.classList.contains("hidden-block")) {
      feedbackModal.classList.add("hidden-block");
      pageDisabler.classList.remove("page-disabler");
    }
  }
});
