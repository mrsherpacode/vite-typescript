import listItem from "./ListItem";

interface List {
  List: listItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: listItem): void;
  removeItem(id: string): void;
}

export default class FullList implements List {
  static instance: FullList = new FullList();
  private constructor(private _list: listItem[] = []) {}

  get List(): listItem[] {
    return this._list;
  }

  load(): void {
    const storedlist: string | null = localStorage.getItem("myList");
    if (typeof storedlist !== "string") return;
    const parsedList: { _id: string; _item: string; _checkded: boolean }[] =
      JSON.parse(storedlist);

    parsedList.forEach((itemObj) => {
      const newListItem = new listItem(
        itemObj._id,
        itemObj._item,
        itemObj._checkded,
      );
      FullList.instance.addItem(newListItem);
    });
  }

  save(): void {
    localStorage.setItem("myList", JSON.stringify(this._list));
  }

  clearList(): void {
    this._list = [];
    this.save();
  }

  addItem(itemObj: listItem): void {
    this._list.push(itemObj);
    this.save();
  }
  removeItem(id: string): void {
    this._list = this._list.filter((item) => item.id !== id);
    this.save();
  }
}
