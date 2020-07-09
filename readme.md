# bootstrap.lightbox.js

A lightweight(1.7kb minified) lightbox plugin based on the bootstrap modal plugin.

## Example

[http://var.tw/mfmftwtw/bootstrap.lightbox.js/examples/](http://var.tw/mfmftwtw/bootstrap.lightbox.js/examples/)

## Quick Start

1\. Include Bootstrap

```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
```

2\. Include bootstrap.lightbox.js

```html
<script src="js/bootstrap.lightbox.min.js"></script>
```

## Documentation

| Name     | Default  | Description                                                                                                                                      |
| -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | 
| backdrop | `true`   | Includes a modal-backdrop element. Alternatively, specify `static` for a backdrop which doesn't close the modal on click or on escape key press. |
| keyboard | `true`   | Closes the modal when escape key is pressed.                                                                                                     |
| focus    | `true`   | Puts the focus on the modal when initialized.                                                                                                    |

### Advanced settings

| Name    | Default         | Description                                                                                                                                                                          |
| ------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | 
| target  | `'#myLightbox'` | The attribute accepts a CSS selector to apply the collapse to. Be sure to add the class collapse to the collapsible element.                                                         |
| animate | `'fade'`        | Open and close animation type. Can be set to `false` or `'fade'`.                                                                                                                    |
| size    | `false`         | Lightbox have three optional sizes. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports. Can be set to `false`, `'sm'`,`'lg'` or `'xs'`. |
| header  | `'show'`        | If set to `'hide'`, it'll hide lightbox header. Can be set to `'show'` or `'hide'`.                                                                                                  |
| footer  | `'show'`        | If set to `'hide'`, It'll hide lightbox footer. Can be set to `'show'` or `'hide'`.                                                                                                  |
| center  | `true`          | Vertically center the Modal.                                                                                                                                                         |
| title   |                 | Add captions to lightbox.                                                                                                                                                            |

## Browser Support

bootstrap.lightbox.jss was tested in the following browsers.

- Chrome
- Firefox
- Safari

## License

MIT © MFHsueh