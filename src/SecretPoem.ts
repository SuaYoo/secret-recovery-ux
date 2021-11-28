import { LitElement, html } from 'lit'

export class SecretPoem extends LitElement {
  static properties = {
    isLoading: { state: true },
    secret: { state: true },
  }

  // TODO remove placeholder
  private secret?: string = `Title: I'm An Old Cowboy

  So what's the world to do
  I'm an old cowboy
  Well, I'm an old cowboy
  But I love big machine`
  private isLoading: boolean = false

  firstUpdated() {
    if (!this.secret) {
      this.generateSecret()
    }
  }

  render() {
    return html`
      <link rel="stylesheet" type="text/css" href="/global.css" />

      <h3 class="text-lg font-bold">Your Secret Recovery Poem</h3>
      <pre
        class="inline-block bg-green-50 text-green-700 border-2 border-green-100 rounded whitespace-pre-line my-4 py-3 p-3"
      >
        ${this.secret}
      </pre
      >

      <p class="my-3">Too hard to memorize?</p>
      <button
        class="transition-all bg-green-600 hover:bg-green-500 text-white rounded py-2 px-4 font-medium shadow-md hover:shadow-sm"
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

    const data = await resp.json()
    this.secret = `Title: ${data.title}\n\n${data.lyrics
      .split('\n')
      .slice(0, 4)
      .join('\n')}`
    this.isLoading = false
  }
}
