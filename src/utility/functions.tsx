export default {
    detectWrap: (className: string) => {
        let wrappedItems: Array<Element> = [];
        let prevItem = {top: 0};
        let currItem = {top: 0};
        let items: HTMLCollectionOf<Element> = document.getElementsByClassName(className);

        for (let i: number = 0; i < items.length; i++) {
            currItem = items[i].getBoundingClientRect();
            if (prevItem && prevItem.top < currItem.top) {
                wrappedItems.push(items[i])
            }
            prevItem = currItem
        }
        return wrappedItems.length === document.getElementsByClassName(className)!.length
    }
}