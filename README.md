# Astro Lazy YouTube Embed

Lazily embed YouTube videos with a [static placeholder using the `<iframe>` `srcdoc` attribute](https://css-tricks.com/lazy-load-embedded-youtube-videos/), which looks like the YouTube embed (at the the time of writing) but doesn't actually embed until you click.

## Install

```sh
npm i astro-lazy-youtube-embed
```

## Usage

### Thumbnails

Use `thumbnailRes` to control the resolution of the thumbnail used for the placeholder - you can pass the resolution (120, 320, 480, 640, or 1280), or one of the names YouTube maps resolutions to (default, medium/mq, high/hq, standard/sd, or maxres).

> [!CAUTION]
> Not all videos will have higher resolution thumbnails available, especially older videos - check if the thumbnail is available when using higher resolutions.

Use `thumbnail` (1, 2, or 3) to use one of the 3 alternate thumbnails YouTube provides as the placeholder - these are screenshots from the video itself.

> [!NOTE]
> Some older videos will have higher resolution thumbnails available for their alternate thumbnails than for the default thumbnail.

### Player parameters

Use `embedParams` to pass [YouTube IFrame Player API parameters](https://developers.google.com/youtube/player_parameters#Parameters) for the embed, e.g. to set start & stop times to play a particular section when clicked.

Default `embedParams` are:

```js
{
  // automatically start to play when the player loads
  autoplay: 1,
}
```

### Privacy

Videos are embedded using `www.youtube-nocookie.com/embed` by default. This is YouTube's "[privacy-enhanced mode](https://support.google.com/youtube/answer/171780?hl=en#zippy=%2Cturn-on-privacy-enhanced-mode)" URL, which prevents embedded videos from affecting a user's watch history if they're logged in to YouTube.

To embed using `www.youtube.com/embed` instead, pass a `cookie` flag:

```astro
<YouTube cookie ... />
```

### Example

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