# Schwalbe Bikesoap Component

## Einbindung:

```
<link href="https://www.schwalbe.shopware.guthand.com/bikesoap/fonts.css" rel="stylesheet" type="text/css" />
<schwalbe-bike-soap></schwalbe-bike-soap>
<script src="https://www.schwalbe.shopware.guthand.com/bikesoap/schwalbebikesoap_.umd.js"></script>
`<style>
    .cms-page.side-spacing .cms-section-default.boxed, .cms-block.cms-block-text, .cms-block.cms-block-moorl-twig {
        overflow: unset;
        padding-left: 0;
        padding-right: 0;
    }
    
    .cms-section {
        overflow: unset;
    }
    .cms-block-container-row {
        margin: 0 !important;
    }

    .col-12, .cms-block-container {
        padding: 0 !important;
    }
    .col-12 > .cms-element-text {
        margin-top: 0;
    }
</style>`
```

Der style-Tag ist nötig, um die ganze Bildschirmbreite zu bekommen.

## Für production bereitmachen:
Build domain  in der .env.production setzen...