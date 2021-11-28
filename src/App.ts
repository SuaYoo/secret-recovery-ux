import { LitElement, html } from 'lit'

export class App extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" type="text/css" href="/global.css" />
      <article class="max-w-3xl mx-auto mt-24 p-3">
        <h1 class="text-4xl font-medium mb-10">Recovery Secret UX</h1>
        <p class="my-4">
          Secret recovery keys or backup codes may be used to regain access to
          your account after losing a device or forgetting a password.
        </p>
        <p class="my-4">
          This demo explores a few options for generating recovery secrets that
          are <span class="whitespace-nowrap">🌈impossible✨</span> to guess but
          <em>not</em> impossible to memorize.
        </p>
        <p class="my-4 bg-red-50 text-red-600">
          <strong>Warning</strong>
          I am not a security expert and this is not security advice. This demo
          has not been reviewed by a security expert and is not intended to be
          used as an actual secrets generator.
        </p>

        <main>
          <h2 class="text-2xl font-medium mt-10 mb-3">
            Method 1: <span class="text-indigo-700">Secret Recovery Poem</span>
          </h2>
          <section
            class="bg-white text-black border-2 border-yellow-100 md:rounded p-8"
          >
            <srux-secret-poem></srux-secret-poem>
          </section>

          <h2 class="text-2xl font-medium mt-10 mb-3">
            Method 2:
            <span class="text-indigo-700">Secret Recovery Pictograph</span>
          </h2>
          <p class="mb-3">
            Combined with a randomly generated title, you could encourage the
            user to create a memorizable story from the emoji sequence.
          </p>
          <section
            class="bg-white text-black border-2 border-yellow-100 md:rounded p-8"
          >
            <srux-secret-pictograph></srux-secret-pictograph>
          </section>
        </main>
        <footer>TODO</footer>
      </article>
    `
  }
}
