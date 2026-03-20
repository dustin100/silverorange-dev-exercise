# silverorange Frontend Developer Exercise

This exercise is designed to assess how you approach tasks representative of
the front-end developer role at silverorange. We are as interested in your
process as we are in the final results. **Please use descriptive Git commit
messages, and include comments where you think your code may be unclear.**

## 1 - Update Existing Page

With the provided static page in the `/existing-page` folder, make the following
changes. No mockups are provided, use your judgement and the base styles
provided in `style.css`. The implementation should use
[newly available baseline support](https://web-platform-dx.github.io/web-features/):

1. Move the main and aside content into a two-column layout at larger screen
   sizes. At a minimum, the aside content should be 300px wide and the main
   content should be 500px wide. The footer should always remain at the bottom
   of the viewport.

2. Move _Show more information_ section into a modal. Use accent colors to
   style the trigger for this modal, which should have accessible name
   _Show more information_.

**BONUS**: add light/dark mode (according to system or user agent-level preference)

### Approach

**Footer and two-column layout** — I used CSS Grid on the body to keep the footer pinned to the bottom. For the two-column layout, I wrapped main and aside in a shared content class container and used css grid at larger breakpoints, with minmax values to set the minimum width for each column.

**Modal** — I implemented the modal as a JS web component (`<modal-dialog>`) without the shadow DOM. I've gotten use to this pattern from working with Shopify themes, where it's common. It keeps the behavior self contained and reusable.

**Light/dark mode** — I used prefers-color-scheme: dark media query to remap the three neutral color tokens. This could benefit from a toggle, but would require some JS.

## 2 - Build Out New Page

Using the provided Vite application base in the `/new-page` folder, implement
the page from the Figma file sent to you via email.

If you create a free Figma account, you’ll have access to export assets and
inspect details in the mockup.

For this exercise we are just interested in replicating the visual appearance
of the mockup—**no functionality is required**. [Widely available baseline support](https://web-platform-dx.github.io/web-features/) is expected.

A basic responsive template is included in the project to get you started.

If you are comfortable with React and Typescript, you can split the page into components, but this is not a requirement.

If you would prefer a JavaScript version of this exercise, please let us know.

### Approach

**Component structure** — I broke the page into reusable components without going too granular. ReviewContent is a bit bigger, but could be split into smaller individual components if needed.

**Content** — I hardcoded most content to keep things simple given my limited time. Ideally, this data would live in a JSON file to simulate an API response, and stored in component state.

**Figma** — Without access to the dev/inspect view, I did my best to match everything as close as possible. I think some the fonts were different to mention just one thing.

### Running and Testing the New Page

```sh
cd new-page/
pnpm install
pnpm dev
```

The page will hot-reload as you save changes.

## Environment

For this exercise, Vite requires Node.js version 20.19+, 22.12+.
