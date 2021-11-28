import { LitElement, html } from 'lit'

export class SecretPictograph extends LitElement {
  static properties = {
    isLoading: { state: true },
    secret: { state: true },
    emojisTotal: { state: true },
  }

  private secret?: string
  private isLoading: boolean = false
  private emojisTotal?: number

  firstUpdated() {
    if (!this.secret) {
      this.generateSecret()
    }
  }

  render() {
    return html`
      <link rel="stylesheet" type="text/css" href="/global.css" />

      <h3 class="text-lg font-medium">Your Secret Recovery Pictograph</h3>

      <p class="my-3">
        A picture is worth a thousand words. And when there are
        ${this.emojisTotal ? this.emojisTotal.toLocaleString() : '...'}
        pictures, you get... a lot of words.
      </p>

      <pre
        class="text-6xl inline-block bg-indigo-50 text-indigo-700 border-2 border-indigo-100 rounded whitespace-pre-line my-4 py-3 p-3"
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
        Generate new secret pictograph
      </button>
    `
  }

  private async generateSecret() {
    this.isLoading = true

    const resp = await fetch('/api/emojis?count=25', {
      headers: {
        'content-type': 'application/json',
      },
    })

    const { emojis, total } = await resp.json()
    const groupedEmojis = emojis.reduce((acc, curr, i) => {
      const idx = Math.floor(i / 5)
      const line = acc[idx] || ''
      acc[idx] = `${line}${curr}`

      return acc
    }, [])

    this.isLoading = false
    this.secret = groupedEmojis.join('\n')
    this.emojisTotal = total
  }
}
