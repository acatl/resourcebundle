# What is it for?

ResourceBundle is a jQuery Plugin, it is intended to help you separate content from code and localize your applications. 

For example if you wish to display a message on your page, you will not have to hardcode the message on the page/javascript itself, instead you will pull your messages from property source that the ResourceBundle will load and parse. Then you will be able to access the resources through the ResourceBundle plugin.

# Implementing ResourceBundle 

## Step 1

Download the file "jquery.resourcebundle.js":https://github.com/acatl/resourcebundle/blob/master/jquery.resourcebundle.js 

## Step 2

Add the file to your HTML 

```html
<script src="https://yoursite.com/javascripts/plugins/jquery.resourcebundle.js" type="text/javascript"></script> 
```

## Step 3

Add a `<script>` tag that will contain your property source that ResourceBundle will be linked to:

```html
<script id="resources" type="text/plain">
</script>
```

##Step 4

Add some properties to your resource `<script>` tag, each property should be in the form of `key=value` pairs.

```html
<script id="resources" type="text/plain">
message1=Hi this is a message
message2=Another message
template_message=Hello my name is: ${Name} how are you today?
</script>
```

## Step 5

You now may load your resource bundle for example: 

```js
$(document).ready( function () {
  var resources = $.getResourceBundle("resources");
});
```

## Step 6

To access your resources you may do:

```js
$(document).ready( function () {
	var resources = $.getResourceBundle("resources");
	alert(resources.getString("message2"));
});
```
which would result in an alert with: Another message

## Step 7

enjoy! feedback is more than welcomed!
















