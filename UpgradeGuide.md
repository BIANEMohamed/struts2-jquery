

# Struts2 jQuery 3.7.0 Upgrade Guide #

In Struts 2.3.16 the interface org.apache.struts2.views.TagLibrary was removed and replaced by two interfaces org.apache.struts2.views.TagLibraryDirectiveProvider and org.apache.struts2.views.TagLibraryModelProvider.
This means that **Struts2 jQuery Plugin version 3.7.0 and higher is not compatible to any Struts release before 2.3.16**.

# Struts2 jQuery 3.6.0 Upgrade Guide #

## Dialog Tag ##

  * Attribute zindex was removed
  * Support for new attribute appendTo

# Struts2 jQuery 3.5.0 Upgrade Guide #

## Accordion Tag ##

  * Attributes autoHeight, clearStyle, and fillSpace are removed and merged into new attribute heightStyle
  * Attribute animated is replaced by attribute animate which can be a Boolean, Number or JavaScript Object Value

## Tabbedpanel Tag ##

  * spinner attribute was dropped. See http://jqueryui.com/upgrade-guide/1.9/#deprecated-spinner-option
  * Attribute animate is replaced with two new attributes show and hide which can be a Boolean, Number or JavaScript Object Value
  * Attributes onAddTopics and onRemoveTopics was dropped. See http://jqueryui.com/upgrade-guide/1.9/#deprecated-add-and-remove-methods-and-events-use-refresh-method


## Spinner Tag ##

The Spinner Tag is now based on the jQuery UI Spinner Widget.

  * Attributes point, showOn, suffix, and prefix are removed.
  * New attributes culture, numberFormat, incremental and page.