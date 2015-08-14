

# Introduction #

# Samples #

## Remote Link that handle an JSON Result with an onSuccessTopic ##

This Sample works with an JSON Result that returns an Array of Customers.
This Action is the same like in the [Grid](GridTag.md) Example.

```
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<html>
  <head>
    <sj:head/>
    <script type="text/javascript">
$(document).ready( function() {
    $.subscribe('handleJsonResult', function(event,data) {
        $('#result').html("<ul id='languagesList'></ul>");
        var list = $('#languagesList');
		$.each(event.originalEvent.data, function(index, value) { 
			list.append('<li>'+value+'</li>\n');
		});
    });
});    
    </script>        
  </head>
  <body>
	<div id="result">Click on the link bellow.</div>
	<s:url var="jsonurl" action="jsonlanguages"/> 
	
	<sj:a id="ajaxjsonlink" 
		href="%{jsonurl}" 
		dataType="json"
		onSuccessTopics="handleJsonResult"
		button="true" 
		buttonIcon="ui-icon-gear"
	>
  </body>
</html>
```