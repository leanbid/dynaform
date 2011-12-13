# Dynaform

Dynaform is JQuery plugin that allows you to build and edit web forms in your browser.

## Installation

Make sure JQuery along with the following Javascript files have been loaded in your html header:

* dynaform.jquery.js
* example_type.dynaform.jquery.js etc...

Current types include:

* textbox.dynaform.jquery.js
* textarea.dynaform.jquery.js
* tickbox.dynaform.jquery.js
* email.dynaform.jquery.js

## How to use

Once the above installation is complete Dynaform is really easy to use - simply add a "dynaform" class attribute to any form input element e.g:

> &lt;input name="form_schema" type="hidden" class="dynaform" /&gt;

## API

### The "Dynaform" object

The Dynaform API is exposed through the "Dynamform" object, which has two methods:

* addType(DynaformType type)
* type(String name)

#### Dynamform.addType(DynaformType type)

This method allows you to define your own types. For more information on creating custom types please see the "Creating Custom Types" section (below).

#### Dynamform.type(String name)

The method allows you get any type that has already been added by name e.g.:

> var textbox_type =  Dynamform.type("textbox");

You could now (if you wanted to) modify this type with a custom preview;

> textbox_type.htmlPreview = function(){ 
>   return "My custom preview!!!";
> };

### Creating Custom Types



#### DynamformType class




