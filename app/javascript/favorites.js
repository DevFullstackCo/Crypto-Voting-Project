function showPopUp(popupElement) {
  popupElement.style.display="flex";
}

function hidePopUp(popupElement) {
  popupElement.style.display="none";
}

function closePopUpOnSubmit(popupElement, formElement) {
  if (formElement) {
    formElement.addEventListener("submit", function () {
      alert("Your preferences have been saved!");
      popupElement.style.display = "none";
    });
  }
}

function initializePopUp() {
  const btnFavorites = document.getElementById("open-favorite-popup");
  const popup = document.getElementById("popup-favorite");
  const closeBtn = document.getElementById("close");
  const form = document.getElementById("favorite-form");

  if (btnFavorites) {
    btnFavorites.addEventListener("click", function() {
      showPopUp(popup);
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", function() {
      hidePopUp(popup);
    });
  }

  closePopUpOnSubmit(popup, form);
}

document.addEventListener("DOMContentLoaded", initializePopUp);


