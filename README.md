## Submit your own theme to Logdown

1. Fork this repository
2. Create a new directory `your-theme-name`
3. Create your theme and [test its result](#test-your-theme).
4. Submit a pull request. ( Please also attach a proper license)
5. We'll review your theme and put it on Logdown theme catelogue.
6. Thanks for submitting!

The theme API is available at: <https://github.com/logdown/themes-guide>

## Structure convention

Please follow this convention to design your theme:

```
your-theme-name
├── index.liquid  // The blog template
├── _sass  // Will be compiled into stylesheets/
│   ├── screen.scss
│   ├── _layout.scss
│   └── _components.scss
├── stylesheets
│   ├── font-awesome.min.css
│   ├── normalize.min.css
├── font
│   ├── fontawesome-webfont.eot
│   ├── fontawesome-webfont.svg
│   ├── fontawesome-webfont.svgz
│   ├── fontawesome-webfont.ttf
│   └── fontawesome-webfont.woff
├── images
│   └── any_images.jpg
└── javascripts
    ├── jquery.min.js
    └── blog.js
```    

## Test your theme

You can test how your theme will look like by apply your template to your Logdown blog via “Edit HTML”.

We have prepared a test case markdown file so you can ensure most elements that might appear on a Logdown blog will be well covered in your design. Just create an article on Logdown and paste all contents from `testcase.md` to see the results.

