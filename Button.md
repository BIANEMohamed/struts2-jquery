

# Introduction #

This function allows you to use the jQuery UI Button Widget for Links and Submit Buttons.

# Samples #

## A Link as jQuery UI Button with Icon ##
```
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<html>
  <head>
    <sj:head jqueryui="true"/>
  </head>
  <body>
	<sj:a id="ajaxlink" 
		href="%{ajaxurl}" 
		targets="result" 
		indicator="indicator" 
		button="true" 
		buttonIcon="ui-icon-refresh"
	>
	  	Run AJAX Action
	</sj:a>
  </body>
</html>
```

## A Submit Button as jQuery UI Button ##

```
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<html>
  <head>
    <sj:head jqueryui="true"/>
  </head>
  <body>
	            <sj:submit 
	            	targets="formResult" 
	            	value="AJAX Submit" 
	            	indicator="indicator"
	            	button="true"
	            	/>
  </body>
</html>
```

# Attributes in Anchor and Submit Tag #
> <table width='100%'>
<blockquote><tr>
<blockquote><th align='left' valign='top'><h4>Name</h4></th>
<th align='left' valign='top'><h4>Required</h4></th>
<th align='left' valign='top'><h4>Default</h4></th>
<th align='left' valign='top'><h4>Evaluated</h4></th>
<th align='left' valign='top'><h4>Type</h4></th>
<th align='left' valign='top'><h4>Description</h4></th>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>button</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>jQuery UI Button</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>buttonIcon</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Icons to display. The primary icon is displayed on the left of the label text. Value must be a classname (String), eg. ui-icon-gear.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>buttonIconSecondary</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Icons to display. The secondary icon is displayed on the right of the label text. Value must be a classname (String), eg. ui-icon-gear.</td>
</blockquote></tr>
</blockquote><blockquote></table>