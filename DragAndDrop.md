# Introduction #

The Attributes draggable="true" or drappable="true" enable Drag & Drop functionality for a [Div](DivTag.md).

Take a look at the [Showcase](http://struts.jgeppert.com/struts2-jquery-showcase/index.action) to see what this tag provides.

# Samples #

## Drag & Drop ##
Drag & Drop with a mix of Remote and Effect Div
```
<script type="text/javascript">
$.subscribe('ondrop', function(event,data) {
	$(event.originalEvent.ui.droppable).addClass('ui-state-highlight').find('p').html($(event.originalEvent.ui.draggable).attr('id')+' dropped!');
	$(event.originalEvent.ui.draggable).find('p').html('I was dragged!');
});
</script>        
<div class="draganddrop" style="width: 100%; height: 250px;">
	<sj:div id="draggablenonvalid" draggable="true" cssClass="noaccept ui-widget-content ui-corner-all" cssStyle="width: 100px; height: 100px; padding: 0.5em; float: left; margin: 10px 10px 10px 0;">
		I'm draggable but can't be dropped
	</sj:div>

	<sj:div id="draggable" draggable="true" draggableHandle="h3" draggableRevert="invalid" cssClass="accept ui-widget-content ui-corner-all" cssStyle="width: 100px; height: 100px; padding: 0.5em; float: left; margin: 10px 10px 10px 0;">
		<h3 class="ui-widget-header">Drag me to my target</h3>
		<p></p>
	</sj:div>

	<s:url var="urlecho" action="echo"><s:param name="echo">I'm a remote div, drag me!</s:param></s:url>
	<sj:div href="%{urlecho}" id="draggableremote"  draggable="true" indicator="indicator" cssClass="accept ui-widget-content ui-corner-all" cssStyle="width: 100px; height: 100px; padding: 0.5em; float: left; margin: 10px 10px 10px 0;" >
		<img id="indicator" src="images/indicator.gif" alt="Loading..." style="display:none"/>
	</sj:div>

	<sj:div id="droptarget" droppable="true" droppableOnDropTopics="ondrop" droppableActiveClass="ui-state-hover" droppableHoverClass="ui-state-active" droppableAccept=".accept" cssClass="ui-widget-content ui-corner-all" cssStyle="width: 220px; height: 220px; padding: 0.5em; float: left; margin: 10px;">
		<p>Drop here</p>
	</sj:div>
</div>
```