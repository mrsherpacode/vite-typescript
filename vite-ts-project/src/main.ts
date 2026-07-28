import "./css/style.css";
import FullList from "./modal/FullList";
import listItem from "./modal/ListItem";
import ListTemplate from "./templates/ListTemplates";
const initApp = (): void => {
  const fullList = FullList.instance;
  const template = ListTemplate.instance;
  const itemIntryForm = document.getElementById(
    "itemEntryForm",
  ) as HTMLFormElement;
  itemIntryForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault();
    const input = document.getElementById("newItem") as HTMLInputElement;
    const newEntryText: string = input.value.trim();
    if (!newEntryText.length) return;
    const itemId: number = fullList.List.length
      ? parseInt(fullList.List[fullList.List.length - 1].id) + 1
      : 1;
    const newItem = new listItem(itemId.toString(), newEntryText);
    fullList.addItem(newItem);
    template.render(fullList);
  });

  const clearItems = document.getElementById(
    "clearItemsButton",
  ) as HTMLButtonElement;

  clearItems.addEventListener("click", (): void => {
    fullList.clearList();
    template.clear();
  });

  fullList.load();
  template.render(fullList);
};

document.addEventListener("DOMContentLoaded", initApp);
