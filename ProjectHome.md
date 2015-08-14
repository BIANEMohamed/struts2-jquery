# Struts2 jQuery Plugin #
A Plugin for the popular java web framework struts2 to provide ajax functionality and UI Widgets based on the jQuery javascript framework.

### [Download](https://oss.sonatype.org/content/groups/staging/com/jgeppert/struts2/jquery/) ###

**This project is now active maintained at new repository location on [github.com](https://github.com/struts-community-plugins/struts2-jquery)**

## News ##

<wiki:gadget url="http://google-code-feed-gadget.googlecode.com/svn/trunk/gadget.xml" up\_feeds="http://www.jgeppert.com/category/java/struts2-jquery/feed/" up\_maxFeeds="3" width="600px" height="200px" border="0" />

## Features ##

### AJAX support ###
Easy AJAX Form submission and remote call with the anchor and div tag.
Support for AJAX in the Tabs.

```
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<html>
  <head>
    <sj:head/>
  </head>
  <body>
    <div id="div1">Div 1</div>
    <s:url id="ajaxTest" value="/AjaxTest.action"/>

    <sj:a id="link1" href="%{ajaxTest}" targets="div1">
      Update Content
    </sj:a>
  </body>
</html>
```

### Support for themes ###
Built in themes from jQuery
  * black-tie
  * blitzer
  * cupertino
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
  * start
  * sunny
  * swanky-purse
  * trontastic
  * ui-darkness
  * ui-lightness
  * vader
  * Your custom theme create with [jQuery ThemeRoller](http://jqueryui.com/themeroller/)

More about themes see the [Head Tag](HeadTag.md)

Use of Build in themes:
```
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<html>
  <head>
    <sj:head jqueryui="true" jquerytheme="cupertino"/>
  </head>
  <body>
  </body>
</html>
```
Use of your costume theme:
```
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<html>
  <head>
    <sj:head jqueryui="true" jquerytheme="mytheme" customBasepath="template/themes"/>
  </head>
  <body>
  </body>
</html>
```

### UI widgets ###
  * [Tabbed Panel](TabbedPanelTag.md)
  * [Datepicker](DatePickerTag.md)
  * [Dialog](DialogTag.md)
  * [Menu](MenuTag.md)
  * [Accordion](AccordionTag.md)
  * [Autocompleter](AutocompleterTag.md)
  * [Button](Button.md)
  * [Buttonset](Buttonset.md)
  * [Progressbar](ProgressbarTag.md)
  * [Slider](SliderTag.md)
  * [Grid](GridTag.md)
  * [Richtext Editor](RichtextEditor.md)
  * [Charts](ChartTag.md)
  * [Spinner](SpinnerTag.md)

### UI interactions ###
  * [Resizable](Resizable.md) for Divs
  * [Drag and Drop](DragAndDrop.md) for Divs
  * [Selectable](Selectable.md) for Divs
  * [Sortable](Sortable.md) for Divs
