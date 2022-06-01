export const hasClass = (el: HTMLElement | any, cssClass: string): boolean => {
  return el.getAttribute('class').split(' ').includes(cssClass)
}
