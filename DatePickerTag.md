

# Introduction #

For custom locals use the [Head Tag](HeadTag.md)

# Samples #

## Datepicker with different formats ##
```
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<html>
  <head>
    <sj:head />
  </head>
  <body>
    <s:form id="form" theme="xhtml">
      <sj:datepicker id="date0" label="Select a Date" />
      <sj:datepicker value="%{dateValue}" id="date1" name="date1" label="Date Value from Action" />
      <sj:datepicker id="date2" name="nameValue" label="Date Value by Name" />
      <sj:datepicker value="today" id="date3" name="date3" displayFormat="dd.mm.yy" label="Today" />
      <sj:datepicker value="yesterday" id="date4" name="date4" displayFormat="mm/dd/yy" label="Yesterday" />
      <sj:datepicker value="tomorrow" id="date5" name="date5" displayFormat="DD, d MM yy" label="Tomorrow" />
      <sj:datepicker value="2004-08-14" id="date6" name="date6" displayFormat="d M, yy" label="String Value" />
    </s:form>
  </body>
</html>
```

## Datepicker with different options and animations ##
```
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<html>
  <head>
    <sj:head locale="de" jquerytheme="lightness"/>
  </head>
  <body>
    <s:form id="form" theme="xhtml">
      <sj:datepicker id="date0" name="date0" label="With Button Panel" showButtonPanel="true"/>
      <sj:datepicker id="date1" name="date1" label="Change Month and Year" changeMonth="true" changeYear="true"/>
      <sj:datepicker id="date2" name="date2" label="Custom Button Text" showOn="both" buttonText="Select a Date"/>
      <sj:datepicker id="date3" name="date3" label="Show only on Button Click" showOn="button"/>
      <sj:datepicker id="date4" name="date4" label="Text after selection" appendText=" (dd.MM.yy)" displayFormat="dd.MM.yy"/>
      <sj:datepicker id="date5" name="date5" label="With fast slideDown Animation" showAnim="slideDown" duration="fast"/>
      <sj:datepicker id="date6" name="date6" label="With slow fadeIn Animation" showAnim="fadeIn" showOptions="{direction: 'up' }" duration="slow" />
      <sj:datepicker id="date7" name="date7" label="Show 3 Months" numberOfMonths="3"/>
      <sj:datepicker id="date8" name="date8" label="Show Month Array" numberOfMonths="[2,3]"/>
      <sj:datepicker id="date9" name="date9" label="Show Years only from 2008 until 2012" yearRange="2008:2012" changeYear="true"/>
      <sj:datepicker id="date10" name="date10" label="Button Only" buttonImageOnly="true"/>
      <sj:datepicker id="date11" name="date11" label="Without Button" showOn="focus"/>
      <sj:datepicker id="date12" name="date12" label="With Close Event" onClose="onClose"/>
    </s:form>
  </body>
</html>
```

## Datepicker with Timepicker Addon ##
```
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<html>
  <head>
    <sj:head locale="de" jquerytheme="lightness"/>
  </head>
  <body>
    <s:form id="form" theme="xhtml">
      <sj:datepicker id="time0" label="Select a Date/Time" value="%{new java.util.Date()}" timepicker="true" />
      <sj:datepicker id="time1" label="Select a Time" value="%{new java.util.Date()}" timepicker="true" timepickerOnly="true"/>
      <sj:datepicker id="time2" label="With AM/PM" timepicker="true" timepickerAmPm="true"/>
      <sj:datepicker id="time3" label="Show Seconds" timepicker="true" timepickerShowSecond="true" timepickerFormat="hh:mm:ss"/>
      <sj:datepicker id="time4" label="With Steps" timepicker="true" timepickerShowSecond="true" timepickerFormat="h:m:s" timepickerStepHour="2" timepickerStepMinute="10" timepickerStepSecond="15"/>
      <sj:datepicker id="time5" label="With Seperator" timepicker="true" timepickerSeparator=" at "/>
      <sj:datepicker id="time6" label="With Grid" timepicker="true" timepickerOnly="true" timepickerGridHour="4" timepickerGridMinute="10" timepickerStepMinute="10"/>
    </s:form>
  </body>
</html>
```




# Topics #

| **Topic** | **Event** | **Parameter** |
|:----------|:----------|:--------------|
| onBeforeTopics | beforeShow | event.originalEvent.input, event.originalEvent.inst |
| onBeforeShowDayTopics | beforeShowDay | event.originalEvent.date |
| onChangeMonthYearTopics | onChangeMonthYear | event.originalEvent.year, event.originalEvent.month, event.originalEvent.inst |
| onChangeTopics | onSelect  | event.originalEvent.dateText, event.originalEvent.inst |
| onCompleteTopics | onClose   | event.originalEvent.dateText, event.originalEvent.inst |

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
<blockquote><td align='left' valign='top'>accesskey</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set the html accesskey attribute on rendered html element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>appendText</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The text to display after each date field, e.g. to show the required format. Default: ''</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>buttonImage</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Path to image for calender button. e.g. images/calendar.gif</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>buttonImageOnly</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Set to true to place an image after the field to use as the trigger without it appearing on a button. Default: false</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>buttonText</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The text to display on the trigger button. Use in conjunction with showOn equal to 'button' or 'both'. Default: '...'</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>changeMonth</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Show select box for change months. true or false</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>changeYear</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Show select box for change years. true or false</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>cssClass</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The css class to use for element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>cssErrorClass</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The css error class to use for element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>cssErrorStyle</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The css error style definitions for element to use</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>cssStyle</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The css style definitions for element to use</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>disabled</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set the html disabled attribute on rendered html element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>displayFormat</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>yy-mm-dd</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>A pattern used for the visual display of the formatted date, e.g. yy-mm-dd , dd.mm.yy</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>duration</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Control the speed at which the datepicker appears, it may be a time in milliseconds, a string representing one of the three predefined speeds ('slow', 'normal', 'fast'). Default: 'normal'</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>errorPosition</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Define error position of form element (top|bottom)</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>firstDay</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set the first day of the week: Sunday is 0, Monday is 1, ... . Default: 0</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>id</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>HTML id attribute</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>inline</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Display the Datepicker inline. Default: false</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>javascriptTooltip</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Use JavaScript to generate tooltips</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>key</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set the key (name, value, label) for this particular component</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>label</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Label expression used for rendering an element specific label</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>labelSeparator</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>:</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>String that will be appended to the label</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>labelposition</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Define label position of form element (top/left)</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>maxDate</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set a maximum selectable date via a number of days from today (e.g. +7) or a string of values and periods ('y' for years, 'm' for months, 'w' for weeks, 'd' for days, e.g. '+1m +1w'). Can also be a Java Date Object.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>maxlength</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Integer</td>
<td align='left' valign='top'>HTML maxlength attribute</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>minDate</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set a minimum selectable date via a number of days from today (e.g. +7) or a string of values and periods ('y' for years, 'm' for months, 'w' for weeks, 'd' for days, e.g. '-1y -1m'). Can also be a Java Date Object.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>name</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The name to set for element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>numberOfMonths</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set how many months to show at once. The value can be a straight integer, or can be a two-element array to define the number of rows and columns to display. e.g. 3 or an array like [2, 3]. Default: 1</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onAfterValidationTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>A comma delimited list of topics that published after the Ajax validation. event.originalEvent.formvalidate to see if validation passed/failed.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onAlwaysTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>A comma delimited list of topics that published always</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onBeforeShowDayTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>A comma delimited list of topics that published for each day in the datepicker before is it displayed.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onBeforeTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Topics that are published before a load</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onBlurTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>A comma delimited list of topics that published when the element is blured</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onChangeMonthYearTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>A comma delimited list of topics that published when the datepicker moves to a new month and/or year. The function receives the selected year, month (1-12), and the datepicker instance as parameters. this refers to the associated input field.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onChangeTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>A comma delimited list of topics that published when the element changed</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onCompleteTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>A comma delimited list of topics that published when the element ajax request is completed (will override settings for a target container if provided)</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onDisableTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>A comma delimited list of topics that published when the element disabled</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onEnableTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>A comma delimited list of topics that published when the element is enabled</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onErrorTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>A comma delimited list of topics that published when the element ajax request returns an error (will override settings for a target container if provided)</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onFocusTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>A comma delimited list of topics that published when the element is focused</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onSuccessTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>A comma delimited list of topics that published when the element ajax request is completed successfully  (will override settings for a target container if provided)</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onblur</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'> Set the html onblur attribute on rendered html element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onchange</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set the html onchange attribute on rendered html element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onclick</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set the html onclick attribute on rendered html element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>ondblclick</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set the html ondblclick attribute on rendered html element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onfocus</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set the html onfocus attribute on rendered html element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onkeydown</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set the html onkeydown attribute on rendered html element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onkeypress</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set the html onkeypress attribute on rendered html element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onkeyup</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set the html onkeyup attribute on rendered html element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onmousedown</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set the html onmousedown attribute on rendered html element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onmousemove</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set the html onmousemove attribute on rendered html element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onmouseout</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set the html onmouseout attribute on rendered html element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onmouseover</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set the html onmouseover attribute on rendered html element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onmouseup</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set the html onmouseup attribute on rendered html element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onselect</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set the html onselect attribute on rendered html element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>openTemplate</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set template to use for opening the rendered html.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>parentTheme</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The parent theme. Default: value of parent form tag or simple if no parent form tag is available</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>readonly</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Whether the input is readonly</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>requiredLabel</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>If set to true, the rendered element will indicate that input is required</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>requiredPosition</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Define required position of required form element (left|right)</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>showAnim</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set the name of the animation used to show/hide the datepicker. Use 'show' (the default), 'slideDown', 'fadeIn', or any of the show/hide jQuery UI effects. Default: 'show'</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>showButtonPanel</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Show button panel in the calender. true or false</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>showOn</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Have the datepicker appear automatically when the field receives focus ('focus'), appear only when a button is clicked ('button'), or appear when either event takes place ('both'). Default: 'both'</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>showOptions</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>If using one of the jQuery UI effects for showAnim, you can provide additional settings for that animation via this option. e.g. {direction: 'up' }. Default: '-10:+10'</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>size</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Integer</td>
<td align='left' valign='top'>HTML size attribute</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>tabindex</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set the html tabindex attribute on rendered html element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>template</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The template (other than default) to use for rendering the element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>templateDir</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The template directory.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>timepicker</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Add Timepicker to the current Datepicker instance</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>timepickerAmPm</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Show time in AM/PM 12 hour format</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>timepickerCloseText</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Done</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Localization</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>timepickerCurrentText</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Now</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Localization</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>timepickerFormat</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>hh:mm tt</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Time Format. e.g. hh:mm tt or h:m</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>timepickerGridHour</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Integer</td>
<td align='left' valign='top'>To show numbered grids under the hour slider.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>timepickerGridMinute</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Integer</td>
<td align='left' valign='top'>To show numbered grids under the minute slider.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>timepickerGridSecond</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Integer</td>
<td align='left' valign='top'>To show numbered grids under the second slider.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>timepickerHourText</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Hour</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Localization</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>timepickerMinuteText</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Minute</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Localization</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>timepickerOnly</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Show only the Timepicker</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>timepickerSecondText</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Second</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Localization</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>timepickerSeparator</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>SPACE</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Place holder between date and time.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>timepickerShowHour</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>true</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Show the hour</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>timepickerShowMinute</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>true</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Show the minute</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>timepickerShowSecond</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Show the second</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>timepickerStepHour</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Integer</td>
<td align='left' valign='top'>Hour steps. e.g. 2</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>timepickerStepMinute</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Integer</td>
<td align='left' valign='top'>Minute steps. e.g. 15 for 15, 30, 45 steps</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>timepickerStepSecond</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Integer</td>
<td align='left' valign='top'>Second steps</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>timepickerTimeOnlyTitle</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Choose Time</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Localization</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>timepickerTimeText</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Time</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Localization</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>title</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set the html title attribute on rendered html element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>tooltip</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set the tooltip of this particular component</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>tooltipConfig</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Deprecated. Use individual tooltip configuration attributes instead.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>tooltipCssClass</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>StrutsTTClassic</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>CSS class applied to JavaScrip tooltips</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>tooltipDelay</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Classic</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Delay in milliseconds, before showing JavaScript tooltips </td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>tooltipIconPath</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Icon path used for image that will have the tooltip</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>value</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Preset the value of input element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>yearRange</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Control the range of years displayed in the year drop-down: either relative to current year (-nn:+nn) or absolute (nnnn:nnnn). Default: '-10:+10'</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>zindex</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The z-index for the datepicker, usefull when run in a dialog e.g. 2006.</td>
</blockquote></tr>
</blockquote></blockquote><blockquote></table>