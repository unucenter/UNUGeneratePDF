#UNUGeneratePDF

A jQuery plugin which allows to generate a PDF file **client-side** from a HTML form.

Can for example be used for rendering the filled data of job applicants.

## Demo

[![UNUGeneratePDF Demo](http://unucenter.github.io/UNUGeneratePDF/demo.png)](http://unucenter.github.io/UNUGeneratePDF/)

[Try the DEMO!](http://unucenter.github.io/UNUGeneratePDF/index.html)

## Requirements

[jQuery](http://jquery.com/) >= 1.9

[Bootstrap](http://getbootstrap.com/) >= 3.0.0

## Installation

Clone from source.

## Usage
1. Require jQuery.
2. Require Bootstrap and its accordion and form-horizontal HTML and classes structure.

```html
<form id="history-form" class="form-horizontal">
  <div id="accordion" class="panel-group">

      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" href="#collapse_1">
              Personal data
            </a>
          </h4>
        </div>

        <div id="collapse_1" class="panel-collapse collapse">
              <div class="panel-body">
            <div class="form-group unuelement-input">
              <label for="familyName" class="col-sm-2 control-label">Family name</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="familyName">
              </div>
            </div>
            <div class="form-group unuelement-input">
              <label for="firstName" class="col-sm-2 control-label">First name</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="firstName">
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  <button id="pdfGenerate" class="button btn btn-primary">Generate pdf</button>
</form>
<script>
(function($){
  $("#history-form").UNUGeneratePDF();
  $("#pdfGenerate").on('click', function(event){
      $("#history-form").UNUGeneratePDF('generatePDF');
      event.preventDefault();
    });
})(jQuery);
</script>
```
Please use the following CSS classes which determine the data type (for the parsing process) :
* `unuelement-input` – for input or textarea,
* `unuelement-table` – for table,
* `unuelement-radio` – for radio button,
* `unuelement-section` – for compound data,
* `unuelement-question` – for question

Please use the following CSS classes for dynamically adding or removing HTML node :
* `unuTableButton` – wrapper for adding and removing table entries,
* `unuSectionButton` – wrapper for adding and removing section records

Do take a look at [demo file source](http://unucenter.github.io/UNUGeneratePDF/index.html) to understand usage.

## Options

You can pass an options object on UNUGeneratePDF initialization.

```javascript
$('#yourForm').UNUGeneratePDF({
      outputFileName: "personalHistory",
      image64: "data:image/png;base64,iVBORwggg==",
      metadata:{
        title: 'Personal history document',
        subject: 'Personal history PDF generated from a HTML form',
        author: 'C3 UNU, Tokyo',
        keywords: 'application, HTML form, pdf',
        creator: 'sakai@unu.edu'
        },
      footer:{
        description: "I understand that any misrepresentation made on a the prensent form renders a staff member liable to instant termination and dismissal.",
        fields:['Date', 'Signature']
    }
  });
```
Possible options are:

* `outputFileName` – name of the generated file – *string*,
* `image64` – base64 encoded PNG image (80x235) – *string*,
* `metadata` – PDF metadata – *object*,
  * `title` – document title – *string*,
  * `subject` – document suject – *string*,
  * `author` – document author – *string*,
  * `keywords` – document keywords – *string*,
  * `creator` – document creator – *string*
* `footer`– PDF metadata – *object*
  * `description` – confirmation or statement - *string*,
  * `fields` - inputs - *array of strings*

## Dependencies
[jsPDF](https://github.com/MrRio/jsPDF)

## License
Copyright (c) 2014 United Nations University, Tokyo.

Source code licensed under the MIT license.

Content licensed under CC BY-NC-SA.  