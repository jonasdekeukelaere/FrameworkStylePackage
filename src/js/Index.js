// External frameworks
import * as bootstrap from 'bootstrap/dist/js/bootstrap.js'
import Vue from 'vue'

// Vue components
import Toast from './Framework/Components/Toast'

// Other components
import { Form } from './Framework/Form'
import { GoBack } from './Framework/GoBack'
import { Link } from './Framework/Link'
import { Navbar } from './Framework/Navbar'
import { Popover } from './Framework/Popover'
import { Scrolling } from './Framework/Scrolling'
import { SetHeight } from './Framework/SetHeight'
import { Sidebar } from './Framework/Sidebar'
import { Searchbar } from './Framework/Searchbar'
import { Select } from './Framework/Select'
import { Slider } from './Framework/Slider'
import { DragAndDrop } from './Framework/DragAndDrop'
import { Table } from './Framework/Table'
import { Tabs } from './Framework/Tabs'
import { Tooltip } from './Framework/Tooltip'
import { FormCollection } from './Framework/FormCollection'
import { DatePicker } from './Framework/DateTimePicker/DatePicker'
import { DateTimePicker } from './Framework/DateTimePicker/DateTimePicker'
import { TimePicker } from './Framework/DateTimePicker/TimePicker'
import { Clipboard } from './Framework/Clipboard'
import { ScrollEvent } from './Framework/ScrollEvent'
import { Theme } from './Framework/Theme'

window.bootstrap = bootstrap

export class Framework {
  constructor () {
    this.form = new Form()
    this.link = new Link()
    this.navbar = new Navbar()
    this.scrolling = new Scrolling()
    this.setHeight = new SetHeight()
    this.sidebar = new Sidebar()
    this.searchBar = new Searchbar()
    this.table = new Table()
    this.tabs = new Tabs()
    this.goBack = new GoBack()
    this.scrollEvent = new ScrollEvent()
    this.tooltip = new Tooltip()

    Framework.initializeSliders()
    Framework.initializeDragAndDrop()
    Framework.initializePopovers()
    Framework.initializeSelects()
    Framework.initializeCollections()
    Framework.initializeDateTimePickers()
    Framework.initializeClipboard()
  }

  static initializeSliders () {
    document.querySelectorAll('.slider').forEach((element) => {
      element.slider = new Slider(element)
    })
  }

  static initializeDragAndDrop () {
    document.querySelectorAll('.sortable').forEach((element) => {
      element.sortable = new DragAndDrop(element)
    })
  }

  static initializePopovers () {
    document.querySelectorAll('[data-toggle="popover"]').forEach((element) => {
      element.popover = new Popover(element)
    })
  }

  static initializeSelects () {
    document.querySelectorAll('.select2').forEach((element) => {
      element.select2 = new Select(element)
    })
  }

  static initializeCollections () {
    document.querySelectorAll('[data-role="collection"]').forEach((element) => {
      element.collection = new FormCollection(element)
    })
  }

  static initializeDateTimePickers () {
    document.querySelectorAll('[data-role="date-picker"]').forEach((element) => {
      element.datepicker = new DatePicker(element)
    })

    document.querySelectorAll('[data-role="time-picker"]').forEach((element) => {
      element.timepicker = new TimePicker(element)
    })

    document.querySelectorAll('[data-role="date-time-picker"]').forEach((element) => {
      element.datetimepicker = new DateTimePicker(element)
    })
  }

  static initializeClipboard () {
    document.querySelectorAll('[data-role="clipboard"]').forEach((element) => {
      element.clipboard = new Clipboard(element)
    })
  }

  static initializeTheme () {
    this.theme = new Theme()
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const toastWrapper = document.querySelector('#toast-wrapper')
  if (toastWrapper !== null) {
    document.toastComponent = new Vue({
      el: '#toast-wrapper',
      components: { Toast }
    })
  }

  Framework.initializeTheme()
})
