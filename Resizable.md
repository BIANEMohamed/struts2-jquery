

# Introduction #

The Attributes resizeable ="true" extends the [Divs](DivTag.md), [Textareas](TextareaTag.md), [Textfields](TextfieldTag.md) and [Select Boxes](SelectTag.md) to be resizeable.

Take a look at the [Showcase](http://struts.jgeppert.com/struts2-jquery-showcase/index.action) to see what this tag provides.

# Samples #

## Sample 1 ##
A Remote Div that load AJAX content and is resizeable.
```
    <s:url var="ajax" value="/ajax3.action"/>
    <sj:div href="%{ajax}" indicator="indicator" resizable="true" resizableAnimate="true" resizableGhost="true" resizableHelper="ui-state-highlight" resizableAspectRatio="true" cssStyle="width: 250px; height: 180px;" cssClass="ui-widget-content ui-corner-all">
        <img id="indicator" src="images/indicator.gif" alt="Loading..." style="display:none"/>
    </sj:div>
```

## Sample 2 ##
```
    <sj:div resizable="true" resizableAnimate="true" resizableGhost="true" resizableHandles="all" cssClass="ui-widget-content ui-corner-all" cssStyle="width: 250px; height: 180px; padding: 0.5em;">
        Resize me!<br/>
        Resize me!<br/>
        Resize me!<br/>
    </sj:div >
```