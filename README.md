# Astro Lazy YouTube Embed

Lazily embed YouTube videos with a [static placeholder using the `<iframe>` `srcdoc` attribute](https://css-tricks.com/lazy-load-embedded-youtube-videos/), which looks like the YouTube embed (at the the time of writing) but doesn't actually embed until you click.

## Install

```sh
npm i astro-lazy-youtube-embed
```

## Example

This component uses a `default` export, so you can import it as whichever name you prefer:

```astro
---
import YouTubeVideo from 'astro-lazy-youtube-embed'
---
<YouTubeVideo videoCode="FfTT7mxGw8I" title="Just Curious - Limmy's Homemade Show"/>

<div class="my-8">Provide your own class for additional styling:</div>

<YouTubeVideo
  class="rounded"
  videoCode="L0C5nyOVTzc"
  title="Limmy Teaches Techno - Limmy's Homemade Show"
/>
```

![Rendered version of the above example code](/example.jpg)