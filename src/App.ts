import { LitElement, html } from 'lit'

export class App extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" type="text/css" href="/global.css" />
      <article class="max-w-3xl mx-auto mt-24 p-3">
        <h1 class="text-4xl font-medium mb-10">Secrets recovery UX</h1>
        <main>
          <h2 class="text-2xl font-medium mb-3">
            Method 1: <span class="text-indigo-700">Secret Recovery Poem</span>
          </h2>
          <section
            class="bg-white text-black border-2 border-yellow-100 md:rounded p-8"
          >
            <srux-secret-poem></srux-secret-poem>
          </section>
        </main>
        <footer>TODO</footer>
      </article>
    `
  }
}
