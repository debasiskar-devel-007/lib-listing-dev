# Listing

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Code scaffolding

Run `ng generate component component-name --project listing` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project listing`.
> Note: Don't forget to add `--project listing` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build listing` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build listing`, go to the dist folder `cd dist/listing` and run `npm publish`.

## Running unit tests

Run `ng test listing` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
## How to make PDF file downloadable in listing 
 added your html page like  `[url]= [example url ]` custom url.


## Config CKeditor
 public ckeConfig: any = {
        toolbar: [
            { name: "editing", items: ["Scayt", "Find", "Replace", "SelectAll"] },
            {
                name: "clipboard",
                items: [
                    "Cut",
                    "Copy",
                    "Paste",
                    "PasteText",
                    "PasteFromWord",
                    "-",
                    "Undo",
                    "Redo"
                ]
            },
            { name: "links", items: ["Link", "Unlink", "Anchor"] },
            {
                name: "tools",
                items: ["Maximize", "ShowBlocks", "Preview", "Print", "Templates"]
            },
            { name: "document", items: ["Source"] },
            {
                name: "insert",
                items: [
                    "Image",
                    "Table",
                    "HorizontalRule",
                    "SpecialChar",
                    "Iframe",
                    "imageExplorer"
                ]
            },
            "/",
            {
                name: "basicstyles",
                items: [
                    "Bold",
                    "Italic",
                    "Underline",
                    "Strike",
                    "Subscript",
                    "Superscript",
                    "-",
                    "RemoveFormat"
                ]
            },
            {
                name: "paragraph",
                items: [
                    "NumberedList",
                    "BulletedList",
                    "-",
                    "Outdent",
                    "Indent",
                    "CreateDiv",
                    "-",
                    "Blockquote"
                ]
            },
            {
                name: "justify",
                items: [
                    "JustifyLeft",
                    "JustifyCenter",
                    "JustifyRight",
                    "JustifyBlock"
                ]
            },
            {
                name: "styles",
                items: ["Styles", "Format", "FontSize", "-", "TextColor", "BGColor"]
            }
        ]
    }