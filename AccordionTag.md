

# Introduction #

This Tag renders a accordion from a given list or an map

For custom themes for the Accordion take look at the [Head Tag](HeadTag.md).

# Samples #

## Accordion with Items ##

```
<s:url var="urlajax1" action="ajax1"/>
<s:url var="urlajax4" action="ajax4"/>
<sj:accordion id="accordion" heightStyle="content" animate="true">
	<sj:accordionItem title="Mauris mauris ante">
		<sj:div id="divInAccrodionItem1" href="%{urlajax1}"/>
	</sj:accordionItem>
	<sj:accordionItem title="Sed non urna">
		Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In suscipit faucibus urna.
	</sj:accordionItem>
	<sj:accordionItem title="Nam enim risus">
		Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis. Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui.
	</sj:accordionItem>
	<sj:accordionItem title="Cras dictum" onClickTopics="loadAccordionDiv">
		<sj:div id="divInAccrodionItem4" href="%{urlajax4}" listenTopics="loadAccordionDiv" deferredLoading="true"/>
	</sj:accordionItem>
</sj:accordion>
```


## Fill List in Action ##
```
public class Test {

        private Map<String, String>        mylist;

        public String execute() {
                mylist = new HashMap<String, String>();
                mylist.put("Section 1", "Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.");
                mylist.put("Section 2", "Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In suscipit faucibus urna.");
                mylist.put("Section 3", "Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis. Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui.");
                mylist.put("Section 4", "Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est. Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.");

                return SUCCESS;
        }

        public Map<String, String> getMylist() {
                return mylist;
        }
```

## Render Accordion ##
```
<sj:accordion list="mylist"/>
```

Open the Accordion on mouse over.
```
<sj:accordion list="mylist" openOnMouseover="true"/>
```

## Accordion with AJAX Content ##

You can use the Attributes paramKeys and paramValues to append parameters to each URL.

```
<s:url var="urlecho" action="echo"/>
<sj:accordion
		id="accordionremote"
		list="accordion"
		listKey="title"
		listValue="content"
		paramKeys="echo"
		paramValues="content"
		href="%{urlecho}"
		active="false"
		heightStyle="content"
		/>
```

# Topics #

| **Topic** | **Event** | **Parameter** |
|:----------|:----------|:--------------|
| onBeforeTopics | changestart | event.originalEvent.event, event.originalEvent.ui |
| onChangeTopics | change    | event.originalEvent.event, event.originalEvent.ui |

# Attributes #

> <table width='100%'>
<blockquote><tr>
<blockquote><td><h4>Dynamic Attributes Allowed:</h4> false</td>
</blockquote></tr>
<tr>
<blockquote><td>&nbsp;</td>
</blockquote></tr>
<tr>
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
<blockquote><td align='left' valign='top'>active</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Selector for the active element. Set to false to display none at start. Needs collapsible: true.  Default: 0</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>animate</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>If and how to animate changing panels. Can be Boolean, Number, String (Escaped with simple ' sign) or JavaScript Object</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>collapsible</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Whether all the sections can be closed at once. Allows collapsing the active section by the triggering event. Default: false</td>
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
<blockquote><td align='left' valign='top'>errorPosition</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Define error position of form element (top|bottom)</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>header</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>h3</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Selector for the header element. Default: h3</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>heightStyle</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>auto</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Controls the height of the accordion and each panel. Possible values 'auto': All panels will be set to the height of the tallest panel, 'content': Each panel will be only as tall as its content, 'fill': Expand to the available height based on the accordion's parent height.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>href</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The URL to call to obtain the content. Note: If used with ajax context, the value must be set as an url tag value.</td>
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
<blockquote><td align='left' valign='top'>list</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Iterable source to populate from. If the list is a Map (key, value), the Map key will become the option 'value' parameter and the Map value will become the option body.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>listKey</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Property of list objects to get field value from</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>listValue</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Property of list objects to get field content from</td>
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
<blockquote><td align='left' valign='top'>onCreateTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>A comma delimited list of topics that published when the accordion is created</td>
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
<blockquote><td align='left' valign='top'>openOnMouseover</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>open accordion on mouse over event. Default: false</td>
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
<blockquote><td align='left' valign='top'>paramKeys</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Comma delimited List of parameter names for the href url. e.g. queryParam1,queryParam2</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>paramValues</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Comma delimited List of List Keys for parameter values. e.g. queryValue1,queryValue2</td>
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
<td align='left' valign='top'>Preset the value of input element.</td>
</blockquote></tr>
</blockquote></blockquote><blockquote></table>