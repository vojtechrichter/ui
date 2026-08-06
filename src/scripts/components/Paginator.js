import { Controller, useStimulus } from '../composables/stimulus.js'

useStimulus.register('x-paginator', class extends Controller {
  static targets = ['append', 'scroll']

  scroll() {
    this.scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  addSnippetAppend() {
    this.appendTarget.setAttribute('data-naja-snippet-append', '')
  }

  removeSnippetAppend() {
    this.appendTarget.removeAttribute('data-naja-snippet-append')
  }
})
