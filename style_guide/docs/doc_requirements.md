# Requirements

---

## Browser Support

We aim to support the widest range of browsers possible, while also taking into account that in order to achieve some more modern layout techniques &ndash; specifically responsive design &ndash; that it also makes sense to part ways with legacy browsers as their usage declines.

### Desktop

To that end, we support the latest versions of&hellip;

* [Chrome](http://www.google.com/chrome/)
* [Firefox](http://www.mozilla.org/firefox/)
* [IE / Edge](http://www.browserfordoing.com/)
* [Opera](http://www.opera.com/)
* [Safari](http://www.apple.com/safari/)

&hellip;on the various platforms for which they are available.

Typically, this means Mac and Windows, with the exception of Safari (Mac) and IE (Windows only) which run solely on their respective operating systems.

### Mobile / Tablet

We support the latest versions of major browsers on mobile platforms as well. Due to the myriad of available browsers in the mobile landscape, one cannot say with impunity that full 100% coverage is possible, but we endeavor to support at least the default browser on all major mobile operating systems.

---

## CSS3 Support

We will use CSS to achieve aesthetic effects whenever possible, as this reduces the overhead of creating multiple images, and incuring additional download size.

This includes, but is not limited to, visual nuances such as&hellip;

* `border-radius` for rounder corners
* `box-shadow` for drop shadows
* `linear-gradient` color transitions

Some older browsers do not support these more modern techniques. We will provide reasonable fallbacks that still allow the page to be usable, without going overboard and addition additional code (and potential breakage) for legacy browsers.

---

## Native HTML Controls

When it comes to creating custom UI elements, when one is readily available as a native control &ndash; buttons, checkboxes, radio buttons, textual inputs &ndash; we take a *"Just because you can, doesn't mean you should"* attitude. Meaning, while it is technically possible to create one-off replacements for native UI, the tradeoff is rarely worth it, and leads to a brittle testing cycle in each emergent device or new browser.

Additionally, when opting to create custom controls, you also lose out on the inherent accessibility that each native control affords. So, it is our strongly held opinion that it is simply not worth throwing out decades of improvements for short-term gain. In this way, we advocate for your users first and foremost.

---

## Accessibility & SEO

As touched on in the previous section, accessibility is an important issue. We strive to *keep* &mdash; not *make* &ndash; our front-end code accessible. The emphasis here is **keep** things accessible because HTML by its very nature "just works," and it is only the irresponsible application of CSS and JavaScript that (can potentially) wreak havoc.

Therefore, we will make use of [ARIA](https://en.wikipedia.org/wiki/WAI-ARIA) `role` and `aria-*` attributes, to describe the semantics of documents and web applicaitons to assitive technologies such as [screen readers](https://en.wikipedia.org/wiki/Screen_reader). Additionally, as the project necessitates, we will use attributes that adhere to the [Schema.org](http://schema.org/) patterns, in order to make search engines more aware of what each page pertains to.

The nice aspect is, what is good for accessibility is inherently good for SEO. So, it's a win-win!

---

## Build & Delivery

We will build fully functional front-end templates. These will consist of HTML, CSS, and JavaScript. Depending on the needs of the project, this may also include a fully functional client-side app, that hits mocked up JSON endpoints. In as much as possible, we will attempt to mirror the same data structure(s) that are used by the real APIs of a given company.

QA testing will be performed on the front-end templates to ensure adherence to the functional project requirements as well as design governance guidelines. One we are assured that the front-end templates are solid in isolation, then those templates can be taken for use in an application environment.

Unless specifically stated in the scope of the project, we are not responsible for bugs that may arise the implementation phase. If that work deviates significantly from the initial front-end templates, we cannot be reasonably certain they will function as intended.