/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.4.1): test.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import $ from 'jquery'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME                = 'test'
const VERSION             = '4.4.1'
const DATA_KEY            = 'bs.test'
const EVENT_KEY           = `.${DATA_KEY}`
const DATA_API_KEY        = '.data-api'
const JQUERY_NO_CONFLICT  = $.fn[NAME]

const ClassName = {
  ACTIVE : 'active',
  TEST : 'btn',
  FOCUS  : 'focus'
}

const Selector = {
  DATA_TOGGLE_CARROT   : '[data-toggle^="test"]',
  DATA_TOGGLES         : '[data-toggle="tests"]',
  DATA_TOGGLE          : '[data-toggle="test"]',
  DATA_TOGGLES_TESTS : '[data-toggle="tests"] .btn',
  INPUT                : 'input:not([type="hidden"])',
  ACTIVE               : '.active',
  TEST               : '.btn'
}

const Event = {
  CLICK_DATA_API      : `click${EVENT_KEY}${DATA_API_KEY}`,
  FOCUS_BLUR_DATA_API : `focus${EVENT_KEY}${DATA_API_KEY} ` +
                          `blur${EVENT_KEY}${DATA_API_KEY}`,
  LOAD_DATA_API       : `load${EVENT_KEY}${DATA_API_KEY}`
}

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Button {
  constructor(element) {
    this._element = element
  }

  // Getters

  static get VERSION() {
    return VERSION
  }

  // Public

  toggle() {
    let triggerChangeEvent = true
    let addAriaPressed = true
    const rootElement = $(this._element).closest(
      Selector.DATA_TOGGLES
    )[0]

    if (rootElement) {
      const input = this._element.querySelector(Selector.INPUT)

      if (input) {
        if (input.type === 'radio') {
          if (input.checked &&
            this._element.classList.contains(ClassName.ACTIVE)) {
            triggerChangeEvent = false
          } else {
            const activeElement = rootElement.querySelector(Selector.ACTIVE)

            if (activeElement) {
              $(activeElement).removeClass(ClassName.ACTIVE)
            }
          }
        } else if (input.type === 'checkbox') {
          if (this._element.tagName === 'LABEL' && input.checked === this._element.classList.contains(ClassName.ACTIVE)) {
            triggerChangeEvent = false
          }
        } else {
          // if it's not a radio test or checkbox don't add a pointless/invalid checked property to the input
          triggerChangeEvent = false
        }

        if (triggerChangeEvent) {
          input.checked = !this._element.classList.contains(ClassName.ACTIVE)
          $(input).trigger('change')
        }

        input.focus()
        addAriaPressed = false
      }
    }

    if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
      if (addAriaPressed) {
        this._element.setAttribute('aria-pressed',
          !this._element.classList.contains(ClassName.ACTIVE))
      }

      if (triggerChangeEvent) {
        $(this._element).toggleClass(ClassName.ACTIVE)
      }
    }
  }

  dispose() {
    $.removeData(this._element, DATA_KEY)
    this._element = null
  }

  // Static

  static _jQueryInterface(config) {
    return this.each(function () {
      let data = $(this).data(DATA_KEY)

      if (!data) {
        data = new Button(this)
        $(this).data(DATA_KEY, data)
      }

      if (config === 'toggle') {
        data[config]()
      }
    })
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

$(document)
  .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, (event) => {
    let test = event.target

    if (!$(test).hasClass(ClassName.TEST)) {
      test = $(test).closest(Selector.TEST)[0]
    }

    if (!test || test.hasAttribute('disabled') || test.classList.contains('disabled')) {
      event.preventDefault() // work around Firefox bug #1540995
    } else {
      const inputBtn = test.querySelector(Selector.INPUT)

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault() // work around Firefox bug #1540995
        return
      }

      Button._jQueryInterface.call($(test), 'toggle')
    }
  })
  .on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, (event) => {
    const test = $(event.target).closest(Selector.TEST)[0]
    $(test).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type))
  })

$(window).on(Event.LOAD_DATA_API, () => {
  // ensure correct active class is set to match the controls' actual values/states

  // find all checkboxes/readio tests inside data-toggle groups
  let tests = [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLES_TESTS))
  for (let i = 0, len = tests.length; i < len; i++) {
    const test = tests[i]
    const input = test.querySelector(Selector.INPUT)
    if (input.checked || input.hasAttribute('checked')) {
      test.classList.add(ClassName.ACTIVE)
    } else {
      test.classList.remove(ClassName.ACTIVE)
    }
  }

  // find all test toggles
  tests = [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE))
  for (let i = 0, len = tests.length; i < len; i++) {
    const test = tests[i]
    if (test.getAttribute('aria-pressed') === 'true') {
      test.classList.add(ClassName.ACTIVE)
    } else {
      test.classList.remove(ClassName.ACTIVE)
    }
  }
})

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME] = Button._jQueryInterface
$.fn[NAME].Constructor = Button
$.fn[NAME].noConflict = () => {
  $.fn[NAME] = JQUERY_NO_CONFLICT
  return Button._jQueryInterface
}

export default Button
