import type {EmbedParams, Props, Thumbnail, ThumbnailRes, ToggleParam} from '../../index'

const video = {videoId: 'FfTT7mxGw8I', title: "Limmy's Homemade Show"}
const params: EmbedParams = {start: 19, controls: 0}
const thumbnail: Thumbnail = 3
const resolution: ThumbnailRes = 'maxres'
const toggle: ToggleParam = '0'

const stringStyle: Props = {
  ...video, class: 'video', id: 'classic', style: 'max-width:640px',
  aspectRatio: 4 / 3, embedParams: params, thumbnail, thumbnailRes: resolution,
  allow: 'autoplay;picture-in-picture', allowfullscreen: false,
  frameborder: 0, width: 640, height: 480, referrerpolicy: 'strict-origin-when-cross-origin',
}
const objectStyle: Props = {...video, style: {maxWidth: '640px', border: 0, '--accent': 'red'}}
const nullableAttributes: Props = {...video, style: null, class: null, id: null, allow: null, allowfullscreen: null}
void [stringStyle, objectStyle, nullableAttributes, toggle]

// @ts-expect-error A video title is required.
const missingTitle: Props = {videoId: video.videoId}
// @ts-expect-error The component supplies the iframe source.
const customSource: Props = {...video, src: 'https://example.com'}
// @ts-expect-error Iframe attributes are passed directly to the Astro component.
const nestedAttributes: Props = {...video, iframeAttributes: {class: 'video'}}
void [missingTitle, customSource, nestedAttributes]
