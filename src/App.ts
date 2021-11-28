import { LitElement, html } from 'lit'

export class App extends LitElement {
  static properties = {
    emojisCount: { state: true },
  }

  private emojisCount?: number

  async firstUpdated() {
    this.emojisCount = (
      await fetch('/api/emojis/total').then((resp) => resp.json())
    ).total
  }

  render() {
    return html`
      <link rel="stylesheet" type="text/css" href="/global.css" />
      <article class="max-w-3xl mx-auto my-24 p-3">
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
          <h2 class="text-2xl font-medium mt-12 mb-3">
            Method 1:
            <span
              >Secret Recovery
              <a
                class="text-indigo-500 hover:text-indigo-400"
                href="https://en.wikipedia.org/wiki/Hermeticism_(poetry)"
                target="_blank"
                >Hermetic</a
              >
              Poem</span
            >
          </h2>
          <p class="my-3">
            An
            <a
              class="text-indigo-500 hover:text-indigo-400"
              href="https://boredhumans.com/poetry_generator.php"
              target="_blank"
              >AI-generated poem</a
            >
            strikes the right balance of being too hermetic to memorize at first
            read but just weird enough to be memorize with some practice.
          </p>
          <section
            class="bg-white text-black border-2 border-yellow-100 md:rounded p-3 md:p-8 flex justify-center"
          >
            <srux-secret-poem></srux-secret-poem>
          </section>

          <h2 class="text-2xl font-medium mt-12 mb-3">
            Method 2:
            <span
              >Secret Recovery
              <a
                class="text-indigo-500 hover:text-indigo-400"
                href="https://en.wikipedia.org/wiki/Pictogram"
                target="_blank"
                >Pictograph</a
              ></span
            >
          </h2>
          <p class="my-3">
            If a picture is worth <em>you know</em>,
            ${this.emojisCount ? this.emojisCount.toLocaleString() : '...'}
            pictures are worth... a lot of words.
          </p>
          <p class="my-3">
            Combined with a randomly generated title, you could encourage the
            user to create a memorizable story from the emoji sequence.
          </p>
          <section
            class="bg-white text-black border-2 border-yellow-100 md:rounded p-3 md:p-8 flex justify-center"
          >
            <srux-secret-pictograph></srux-secret-pictograph>
          </section>
        </main>
      </article>
    `
  }
}
