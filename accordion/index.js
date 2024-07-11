const accordion = document.querySelector(".accordion");
const accordionItems = document.querySelectorAll(".accordion-item");
const panels = document.querySelectorAll(".panel");

const handleClick = (e) => {
  if (e.target.classList.contains("accordion-item")) {
    const accordionItem = e.target;
    const isActive = accordionItem.classList.contains("active");
    accordionItem.classList.toggle("active");
    const panel = accordionItem.nextElementSibling;
    if (isActive) {
      panel.style.maxHeight = "0";
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }

    accordionItems.forEach((item) => {
      if (item !== accordionItem) {
        item.classList.remove("active");
        const panelItem = item.nextElementSibling;
        if (panelItem !== panel && panelItem.style.maxHeight)
          panelItem.style.maxHeight = "0";
      }
    });
  }
};

accordion.addEventListener("click", handleClick);
