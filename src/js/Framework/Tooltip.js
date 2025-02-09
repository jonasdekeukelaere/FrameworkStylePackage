export class Tooltip {
  constructor () {
    this.initTooltip()
  }

  initTooltip () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl)
    })
  }
}
