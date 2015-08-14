# Introduction #

The Attributes sortable="true" extends the [Divs](DivTag.md) to be sortable.

Take a look at the [Showcase](http://struts.jgeppert.com/struts2-jquery-showcase/index.action) to see what this tag provides.

# Samples #

## Sample 1 ##
**Styles:**
```
.sortable {
border:1px solid #000;
height:20px;
margin:5px;
padding:10px;
text-align: center;
}
```

**JSP Code:**
```
    <sj:div id="sortable" sortable="true" sortableOpacity="0.8" sortablePlaceholder="ui-state-highlight" sortableForcePlaceholderSize="true" cssStyle="width: 300px;">
        <div id="one" class="sortable ui-widget-content ui-corner-all">One</div>
        <div id="two" class="sortable ui-widget-content ui-corner-all">Two</div>
        <div id="three" class="sortable ui-widget-content ui-corner-all">Three</div>
        <div id="four" class="sortable ui-widget-content ui-corner-all">Four</div>
        <div id="five" class="sortable ui-widget-content ui-corner-all">Five</div>
        <div id="six" class="sortable ui-widget-content ui-corner-all">Six</div>
        <div id="seven" class="sortable ui-widget-content ui-corner-all">Seven</div>
    </sj:div>
```