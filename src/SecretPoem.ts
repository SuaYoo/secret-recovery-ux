import { LitElement, html } from 'lit'

export class SecretPoem extends LitElement {
  static properties = {
    isLoading: { state: true },
    secret: { state: true },
  }

  // TODO remove placeholder
  private secret?: string = `The city's always on my mind
  All the morning talkin' 'bout what you know
  The timebends and the highway blues
  You could walk on water forever`
  private isLoading: boolean = false

  firstUpdated() {
    if (!this.secret) {
      this.generateSecret()
    }
  }

  render() {
    return html`
      <link rel="stylesheet" type="text/css" href="/global.css" />

      <h3 class="text-lg font-medium">Your Secret Recovery Poem</h3>
      <p class="my-3">
        Your secret recovery poem can be used to recover your account if you're
        locked out.
      </p>

      <pre
        class="inline-block bg-indigo-50 text-indigo-700 border-2 border-indigo-100 rounded whitespace-pre-line my-4 py-3 p-3"
      >
        ${this.secret}
      </pre
      >

      <p class="my-3">Too hard to memorize?</p>

      <button
        class="transition-all bg-indigo-600 hover:bg-indigo-500 text-white rounded py-2 px-4 font-medium shadow-md hover:shadow-sm"
        @click=${this.generateSecret}
        ?disabled=${this.isLoading}
      >
        ${this.isLoading ? 'Loading...' : 'Generate new secret poem'}
      </button>
    `
  }

  private async generateSecret() {
    this.isLoading = true

    const resp = await fetch('/api/poem', {
      headers: {
        'content-type': 'application/json',
      },
    })

    const lines = (await resp.json()).lyrics

    this.secret = lines.split('\n').slice(0, 4).join('\n')
    this.isLoading = false
  }
}
