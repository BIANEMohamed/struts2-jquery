

# Introduction #

The "head" tag renders required JavaScript code to configure jQuery and is required in order to use any of the tags included in the jQuery plugin.

# Samples #

## Head tag for base AJAX calls ##
```
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<html>
  <head>
    <sj:head/>
  </head>
  <body>
  </body>
</html>
```

## Head tag for AJAX calls, Effects and Widgets with Default Indicator ##
The "locale" attribute configures jQuery locale for datepicker. Default is "en" you can use all locales that are bundled with jQuery. e.g. "de, "fr", "ja", ...

The default indicator is visible at every ajax request.

```
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<html>
  <head>
    <sj:head locale="de" jqueryui="true" defaultIndicator="myDefaultIndicator"/>
  </head>
  <body>
    <img id="myDefaultIndicator" src="images/ajax-loader.gif" alt="Loading..." style="display:none"/>
  </body>
</html>
```

# Themes #

## Base Themes ##
Built in themes from Plugin

  * black-tie
  * blitzer
  * cupertino
  * dark-hive
  * dot-luv
  * eggplant
  * excite-bike
  * flick
  * hot-sneaks
  * humanity
  * le-frog
  * mint-choc
  * overcast
  * pepper-grinder
  * redmond
  * smoothness
  * south-street
  * start
  * sunny
  * swanky-purse
  * trontastic
  * ui-darkness
  * ui-lightness
  * vader

```
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<html>
  <head>
    <sj:head locale="de" jqueryui="true" jquerytheme="redmond"/>
  </head>
  <body>
  </body>
</html>
```

## Custome Themes ##
Create and Download your own Theme with [jQuery ThemeRoller](http://jqueryui.com/themeroller/)

  1. Create a folder in your WebRoot path **template/themes/mytheme**
  1. Extract downloaded theme and switch into the css folder
  1. Rename jquery-ui-x.x.x.custom.css to **jquery-ui.css**
  1. Copy **jquery-ui.css** and **images** folder into the **template/themes/mytheme** folder

```
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<html>
  <head>
    <s:url var="context" value="/" />
    <sj:head locale="de" jqueryui="true" jquerytheme="mytheme" customBasepath="%{context}template/themes"/>
  </head>
  <body>
  </body>
</html>
```

# Attributes #
> <table width='100%'>
<blockquote><tr>
<blockquote><th align='left' valign='top'><h4>Name</h4></th>
<th align='left' valign='top'><h4>Required</h4></th>
<th align='left' valign='top'><h4>Default</h4></th>
<th align='left' valign='top'><h4>Evaluated</h4></th>
<th align='left' valign='top'><h4>Type</h4></th>
<th align='left' valign='top'><h4>Description</h4></th>
</blockquote></tr>
<blockquote><tr>
<blockquote><td align='left' valign='top'>ajaxcache</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>If set to false it will force the pages that you request to not be cached by the browser.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>ajaxhistory</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>If set to true it will enable history and bookmarking for AJAX content and jQuery UI Tabs.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>compressed</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>true</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>use compressed version of jquery and jquery-ui</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>customBasepath</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>base path for custom jQuery designs</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>debug</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>enable debug logging</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>defaultErrorText</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The default error text for all AJAX actions</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>defaultIndicator</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The default indicator for all AJAX actions</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>defaultLoadingText</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The default loading text for all AJAX actions</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>jquerytheme</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>smoothness</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>jQuery UI theme</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>jqueryui</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>true</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>enable jQuery UI Scripts</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>loadAtOnce</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>do not use the on demand load for jquery ui resources</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>loadFromGoogle</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Load JavaScript from google content distribution network</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>locale</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>en or struts.local value</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>import jQuery i18n scripts.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>scriptPath</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>#your context root#/struts/</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>path to the JavaScript ressources</td>
</blockquote></tr>
</blockquote></blockquote><blockquote></table>