# Astro Lazy YouTube Embed

Lazily embed YouTube videos with a [static placeholder using the `<iframe>` `srcdoc` attribute](https://css-tricks.com/lazy-load-embedded-youtube-videos/), which looks like the YouTube embed (at the the time of writing) but doesn't actually embed until you click.

## Install

```sh
npm i astro-lazy-youtube-embed
```

## Usage

Use `embedParams` to pass [YouTube IFrame Player API parameters](https://developers.google.com/youtube/player_parameters#Parameters) for the embed, e.g. to set start & stop times to play a particular section when clicked.

Default `embedParams` are:

```js
{
  // automatically start to play when the player loads
  autoplay: 1,
}
```

Use `thumbnailRes` to control the resolution of the thumbnail used for the placeholder.

```astro
---
import {YouTube} from 'astro-lazy-youtube-embed'
---
<YouTube
  title="Just Curious - Limmy's Homemade Show"
  videoId="FfTT7mxGw8I"
/>

<div class="my-8">Configure the embed features and thumbnail size:</div>

<YouTube
  embedParams={{start: 19, end: 22}}
  thumbnailRes="maxres"
  title="Frimmerang"
  videoId="xptCWoB_VCE"
/>

<div class="my-8">Pass other HTML attributes for the <code>&lt;iframe&gt;</code>:</div>

<YouTube
  class="rounded-2xl"
  id="techno"
  title="Limmy Teaches Techno - Limmy's Homemade Show"
  videoId="L0C5nyOVTzc"
/>
```

![Rendered version of the above example code](./example.jpg)