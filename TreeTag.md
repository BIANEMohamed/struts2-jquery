

# Introduction #

The Tree Tag is based on [jsTree](http://www.jstree.com/).

To use this Feature you need to copy the struts2-jquery-tree-plugin.jar into your WEB-INF/lib path
or add it to your maven dependencies.

```
<dependencies>
    ...
    <dependency>
        <groupId>com.jgeppert.struts2.jquery</groupId>
        <artifactId>struts2-jquery-plugin</artifactId>
        <version>X.X.X</version>
    </dependency>
    <dependency>
        <groupId>com.jgeppert.struts2.jquery</groupId>
        <artifactId>struts2-jquery-tree-plugin</artifactId>
        <version>X.X.X</version>
    </dependency>
    ...
</dependencies>
```


# Samples #

## A simple static Tree Component ##

```
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<%@ taglib prefix="sjt" uri="/struts-jquery-tree-tags"%>
    	<sjt:tree id="treeStatic" jstreetheme="default" openAllOnLoad="true">
    		<sjt:treeItem title="Struts2">
	    		<sjt:treeItem title="General">
		    		<sjt:treeItem title="Struts2" href="http://struts.apache.org/2.x/index.html"/>
		    		<sjt:treeItem title="Struts2 @ Facebook" href="http://www.facebook.com/pages/Struts2-Users/103890046351798"/>
    			</sjt:treeItem>
	    		<sjt:treeItem title="Plugins">
		    		<sjt:treeItem title="Struts2 Plugins" href="https://cwiki.apache.org/S2PLUGINS/home.html"/>
		    		<sjt:treeItem title="Struts2 jQuery Plugin" href="http://code.google.com/p/struts2-jquery/"/>
		    		<sjt:treeItem title="Struts2 Full Hibernate Plugin" href="http://code.google.com/p/full-hibernate-plugin-for-struts2/"/>
    			</sjt:treeItem>
	    		<sjt:treeItem title="Blogs">
		    		<sjt:treeItem title="Struts2 jQuery News" href="http://www.jgeppert.com/category/java/struts2-jquery/"/>
    			</sjt:treeItem>
	    		<sjt:treeItem title="AJAX Links">
					<s:url id="ajax1" value="/ajax1.action"/>
		    		<sjt:treeItem title="Ajax 1" href="%{ajax1}" targets="result"/>
					<s:url id="ajax2" value="/ajax2.action"/>
		    		<sjt:treeItem title="Ajax 2" href="%{ajax2}" targets="result" effect="highlight" effectDuration="2500"/>
					<s:url id="ajax3" value="/ajax3.action"/>
		    		<sjt:treeItem title="Ajax 3" href="%{ajax3}" targets="result" onBeforeTopics="beforeLink" onCompleteTopics="completeLink"/>
					<s:url id="ajax4" value="/ajax4.action"/>
		    		<sjt:treeItem title="Ajax 4" href="%{ajax4}" targets="result" effect="bounce" effectDuration="1000"/>
    			</sjt:treeItem>
    		</sjt:treeItem>
    	</sjt:tree>
  
  <strong>Result Div :</strong>
  <div id="result" class="result ui-widget-content ui-corner-all">Click on the AJAX Links above.</div>
```


## Dynamic Tree with AJAX Links and Contextmenu ##
```
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<%@ taglib prefix="sjt" uri="/struts-jquery-tree-tags"%>
		<s:url id="echo" value="/echo.action"/>
    	<sjt:tree 
    		id="treeDynamicAjax" 
    		jstreetheme="apple"
    		rootNode="nodes"
    		childCollectionProperty="children"
    		nodeTitleProperty="title"
    		nodeIdProperty="id"
    		nodeHref="%{echo}"
    		nodeHrefParamName="echo"
    		nodeTargets="result2"
    		contextmenu="{
    			items: { 
    				'create' : false,
    				'rename' : false,
    				'ccp' : false,
    				'remove' : { 
    					'label': 'Delete this Node', 
    					'action':  function (obj) { this.remove(obj); deleteTreeNode('%{echo}', obj); }
    				} 
    			} 
    		}"
    	/>

  <strong>Result Div :</strong>
  <div id="result2" class="result ui-widget-content ui-corner-all">Click on the AJAX Links above.</div>
```


## Dynamic Tree in form with Checkboxes ##
```
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<%@ taglib prefix="sjt" uri="/struts-jquery-tree-tags"%>
    <s:form id="treeForm" action="echo" theme="simple">
    	<sjt:tree 
    		name="echo"
    		id="treeDynamicCheckboxes" 
    		jstreetheme="apple"
    		rootNode="nodes"
    		childCollectionProperty="children"
    		nodeTitleProperty="title"
    		nodeIdProperty="id"
    		openAllOnLoad="true" 
    		checkbox="true"
    		checkboxCheckAllTopics="checkAllNodesTopic"
    		checkboxUncheckAllTopics="uncheckAllNodesTopic"
    		checkboxShowTopics="showCheckboxesTopic"
    		checkboxHideTopics="hideCheckboxesTopic"
    		onClickTopics="treeClicked" 
    	/>
    	<sj:submit formIds="treeForm" targets="result3" button="true" />
    	<sj:submit onClickTopics="checkAllNodesTopic" value="Check all Nodes" button="true" />
    	<sj:submit onClickTopics="uncheckAllNodesTopic" value="Uncheck all Nodes" button="true" />
    	<sj:submit onClickTopics="showCheckboxesTopic" value="Show Checkboxes" button="true" />
    	<sj:submit onClickTopics="hideCheckboxesTopic" value="Hide Checkboxes" button="true" />
	</s:form>
  	<strong>Result Div :</strong>
  	<div id="result3" class="result ui-widget-content ui-corner-all">Click on the AJAX Submit above.</div>
```


## Tree with Types ##
```
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<%@ taglib prefix="sjt" uri="/struts-jquery-tree-tags"%>
		<s:set id="contextPath"  value="#request.get('javax.servlet.forward.context_path')" />
    	<sjt:tree 
    		id="treeTypes" 
    		jstreetheme="default" 
    		openAllOnLoad="true" 
    		types="{
					'valid_children' : [ 'root' ],
					'types' : {
						'root' : {
							'icon' : { 
								'image' : '%{contextPath}/images/root.png' 
							},
							'valid_children' : [ 'folder', 'file' ]
						},
						'folder' : {
							'icon' : { 
								'image' : '%{contextPath}/images/folder.png' 
							},
							'valid_children' : [ 'folder', 'file' ]
						},
						'file' : {
							'icon' : { 
								'image' : '%{contextPath}/images/file.png' 
							},
							'valid_children' : [ 'none' ]
						}
				}
		}">
    		<sjt:treeItem title="Root" type="root">
	    		<sjt:treeItem title="Folder One"  type="folder">
		    		<sjt:treeItem title="File One" type="file"/>
		    		<sjt:treeItem title="File Two" type="file"/>
    			</sjt:treeItem>
	    		<sjt:treeItem title="Folder Two"  type="folder">
		    		<sjt:treeItem title="Folder Three"  type="folder">
			    		<sjt:treeItem title="File Four" type="file"/>
	    			</sjt:treeItem>
		    		<sjt:treeItem title="File Three" type="file"/>
    			</sjt:treeItem>
   			</sjt:treeItem>
    	</sjt:tree>
```

## A Tree Component with a JSON Data Source. ##

### JSP Code ###
```
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<%@ taglib prefix="sjt" uri="/struts-jquery-tree-tags"%>
    	<s:url var="treeDataUrl" action="json-tree-data"/>
    	<sjt:tree 
    		id="jsonTree" 
    		href="%{treeDataUrl}"
    		onClickTopics="treeClicked" 
    	/>
```

### Java Action Code ###
```
@ParentPackage(value = "showcase")
public class JsonTreeData extends ActionSupport {

	private static final long serialVersionUID = -2886756982077980790L;
	private List<TreeNode> nodes = new ArrayList<TreeNode>();
	private String id = "";

	@Actions( { @Action(value = "/json-tree-data", results = { @Result(name = "success", type = "json", params = {
			"root", "nodes" }) }) })
	public String execute() {

		TreeNode nodeA = new TreeNode();
		nodeA.setId("A" + id);
		nodeA.setTitle("Node A" + id);
		nodeA.setState(TreeNode.NODE_STATE_CLOSED);

		TreeNode nodeB = new TreeNode();
		nodeB.setId("B" + id);
		nodeB.setState(TreeNode.NODE_STATE_CLOSED);
		nodeB.setTitle("Node B" + id);

		TreeNode nodeC = new TreeNode();
		nodeC.setId("C" + id);
		nodeC.setState(TreeNode.NODE_STATE_CLOSED);
		nodeC.setTitle("Node C" + id);

		nodes.add(nodeA);
		nodes.add(nodeB);
		nodes.add(nodeC);

		return SUCCESS;
	}

	public String getJSON() {
		return execute();
	}

	public List<TreeNode> getNodes() {
		return nodes;
	}

	public void setId(String id) {
		this.id = id;
	}
}
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
<blockquote><td align='left' valign='top'>accesskey</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Set the html accesskey attribute on rendered html element</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>animation</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>500</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Number</td>
<td align='left' valign='top'>Defines the duration of open/close animations. 0 means no animation.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>bindOn</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Bind the start of load or effect on element. e.g. button or link</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>checkbox</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Makes multiselection possible using three-state checkboxes.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>checkboxCheckAllTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>A comma delimited list of topics to check all nodes.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>checkboxHideTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>A comma delimited list of topics to hide checkboxes.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>checkboxShowTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>A comma delimited list of topics to show checkboxes.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>checkboxTwoState</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>If set to true checkboxes will be two-state only, meaning that you will be able to select parent and children independently and there will be no undetermined state.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>checkboxUncheckAllTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>A comma delimited list of topics to uncheck all nodes.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>childCollectionProperty</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The childCollectionProperty property.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>contextmenu</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Expects an JavaScript object or a function, which should return an JavaScript object. e.g. {items: { 'delete' : { 'label': 'Delete Node', 'action':  function (obj) { this.delete(obj); } } } }</td>
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
<blockquote><td align='left' valign='top'>dataType</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Type of the result. e.g. html, xml, text, json, ...</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>deferredLoading</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Defers the initial loading of this element.  The element will not be loaded until one of the reloadTopics is published.</td>
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
<blockquote><td align='left' valign='top'>draggable</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Enable draggable functionality to the DIV element. Move the draggable object by clicking on it with the mouse and dragging it anywhere within the viewport. </td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableAddClasses</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>If set to false, will prevent the ui-draggable class from being added. This may be desired as a performance optimization when calling draggable init on many hundreds of elements. Default: true</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableAppendTo</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The element passed to or selected by the appendTo option will be used as the draggable helper's container during dragging. By default, the helper is appended to the same container as the draggable. Default: parent</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableAxis</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Constrains dragging to either the horizontal (x) or vertical (y) axis. Possible values: x or y.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableCancel</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Prevents dragging from starting on specified elements.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableContainment</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Constrains dragging to within the bounds of the specified element or region. Possible string values: parent, document, window, [x1, y1, x2, y2].</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableCursor</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The css cursor during the drag operation.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableDelay</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Time in milliseconds after mousedown until dragging should start. This option can be used to prevent unwanted drags when clicking on an element.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableDistance</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Distance in pixels after mousedown the mouse must move before dragging should start. This option can be used to prevent unwanted drags when clicking on an element.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableHandle</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>If specified, restricts drag start click to the specified element(s). e.g. h2</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableHelper</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Allows for a helper element to be used for dragging display. Possible values: original, clone. Default is original</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableIframeFix</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Prevent iframes from capturing the mousemove events during a drag. Useful in combination with cursorAt, or in any case, if the mouse cursor is not over the helper. If set to true, transparent overlays will be placed over all iframes on the page. If a selector is supplied, the matched iframes will have an overlay placed over them. Default: false</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableOnDragTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event javascript function is triggered when the mouse is moved during the dragging.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableOnStartTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event javascript function is triggered when dragging starts.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableOnStopTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event javascript function is triggered when dragging stops.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableOpacity</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Opacity for the helper while being dragged. e.g. 0.75</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableRefreshPositions</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>If set to true, all droppable positions are calculated on every mousemove. Caution: This solves issues on highly dynamic pages, but dramatically decreases performance. Default: false</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableRevert</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>If set to true, the element will return to its start position when dragging stops. e.g. true, valid, invalid Default: false</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableRevertDuration</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The duration of the revert animation, in milliseconds. Ignored if revert is false.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableScope</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Used to group sets of draggable and droppable items, in addition to droppable's accept option. A draggable with the same scope value as a droppable will be accepted by the droppable.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableScroll</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>If set to true, container auto-scrolls while dragging.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableScrollSensitivity</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Distance in pixels from the edge of the viewport after which the viewport should scroll. Distance is relative to pointer, not the draggable. Default: 20</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableScrollSpeed</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The speed at which the window should scroll once the mouse pointer gets within the scrollSensitivity distance. Default: 20</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableSnap</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>If set to true, the draggable will snap to the edges of the selected elements when near an edge of the element. Default: false</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableSnapMode</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Determines which edges of snap elements the draggable will snap to. Ignored if snap is false. Possible values: inner, outer, both. Default: both</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableSnapTolerance</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The distance in pixels from the snap element edges at which snapping should occur. Ignored if snap is false. Default: 20</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>draggableZindex</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>z-index for the helper while being dragged.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>droppable</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Enable any DIV element to be droppable, a target for draggable elements.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>droppableAccept</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>All draggables that match the jQuery selector will be accepted. e.g. #myid or .myclass</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>droppableActiveClass</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>If specified, the class will be added to the droppable while an acceptable draggable is being dragged.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>droppableAddClasses</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>true</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>If set to false, will prevent the ui-droppable class from being added. This may be desired as a performance optimization when calling droppable init on many hundreds of elements. Default: true</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>droppableGreedy</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>If true, will prevent event propagation on nested droppables. Default: false</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>droppableHoverClass</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>If specified, the class will be added to the droppable while an acceptable draggable is being hovered.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>droppableOnActivateTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event javascript function is triggered any time an accepted draggable starts dragging. This can be useful if you want to make the droppable 'light up' when it can be dropped on.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>droppableOnDeactivateTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event javascript function is triggered any time an accepted draggable stops dragging.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>droppableOnDropTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event javascript function is triggered when an accepted draggable is dropped 'over' this droppable.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>droppableOnOutTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event javascript function is triggered when an accepted draggable is dragged 'out' this droppable.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>droppableOnOverTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event javascript function is triggered as an accepted draggable is dragged 'over' this droppable.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>droppableScope</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Used to group sets of draggable and droppable items, in addition to droppable's accept option. A draggable with the same scope value as a droppable will be accepted.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>droppableTolerance</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Specifies which mode to use for testing whether a draggable is over a droppable. Possible values: fit, intersect, pointer, touch. </td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>effect</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>none</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Perform a effect on the elements specified in the 'targets' attribute. e.g. bounce, highlight, pulsate, shake, size or transfer. See more details at <a href='http://docs.jquery.com/UI/Effects'>http://docs.jquery.com/UI/Effects</a></td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>effectDuration</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>2000</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Duration of effect in milliseconds. Only valid if 'effect' attribute is set</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>effectMode</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>none</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The Effect Mode. show, hide, toggle, none</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>effectOptions</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>jQuery options for effect, eg 'color : #aaaaaa' for the highlight effect or 'times : 3' for the bounce effect. Only valid if 'effect' attribute is set. See more details at <a href='http://docs.jquery.com/UI/Effects'>http://docs.jquery.com/UI/Effects</a></td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>errorElementId</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This should provide the id of the element into which the error text will be placed when an error ocurrs loading the container. If 'errorTest' is provided, that  wil be used, otherwise the ajax error message text wil be used.</td>
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
<blockquote><td align='left' valign='top'>errorText</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The text to be displayed on load error. If 'errorElement' is provided, this will display the error in the elemtn (if existing), if not, it will display the error as the contents of this container</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>events</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>click</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Start load or effect on specified event. Possible values are click, dblclick, mouseover, mouseenter, mouseleave. Default: click</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>formIds</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Comma delimited list of form ids for which to serialize all fields during submission when this element is clicked (if multiple forms have overlapping element names, it is indeterminate which will be used)</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>href</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Url used to load the list of children nodes for an specific node, whose id will be passed as a parameter named 'nodeId' (empty for root)</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>htmlTitles</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Defines whether titles can contain HTML code.</td>
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
<blockquote><td align='left' valign='top'>indicator</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>If loading content into a target, Id of element that will be displayed during loading and hidden afterwards (will override settings for the target container)</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>initiallyOpen</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'><a href='.md'>.md</a></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Defines which nodes are to be automatically opened when the tree finishes loading - a list of IDs is expected. eg.: ['id1', 'id2']</td>
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
<blockquote><td align='left' valign='top'>jstreetheme</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>theme from jquery ui</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>jstree theme. default, default-rtl, classic or apple</td>
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
<blockquote><td align='left' valign='top'>listenTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The comma separated list 'listenTopics' is the list of topic names that is used to trigger a request.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>loadingText</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>If loading content into a target, The text to be displayed during load (will be shown if any provided, will override settings for the target container)</td>
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
<blockquote><td align='left' valign='top'>nodeHref</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The href property for node.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>nodeHrefParamName</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>id</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The href parameter name for node link.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>nodeIdProperty</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The nodeIdProperty property.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>nodeTargets</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>AJAX targets for node items.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>nodeTitleProperty</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The nodeTitleProperty property.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>nodeTypeProperty</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The type property for node. This needs a valid types definition.</td>
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
<blockquote><td align='left' valign='top'>onClickTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>A comma delimited list of topics that published when the tree item is clicked</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>onCompleteTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Topics that are published before after load is completed</td>
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
<blockquote><td align='left' valign='top'>onEffectCompleteTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>A comma delimited list of topics that published when an effect is completed </td>
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
<td align='left' valign='top'>Topics that are published on a load error</td>
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
<td align='left' valign='top'>Topics that are published after a succesful load</td>
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
<blockquote><td align='left' valign='top'>openAllOnLoad</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Open all Nodes on load.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>openAllOnRefresh</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Open all Nodes on refresh.</td>
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
<blockquote><td align='left' valign='top'>reloadTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>A comma delimited list of topics that will cause this element to reload</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>requestType</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>POST</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Type of the AJAX Request. POST, GET, PUT</td>
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
<blockquote><td align='left' valign='top'>resizable</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Enable this div element to be resizable. With the cursor grab the right or bottom border and drag to the desired width or height.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>resizableAnimate</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Animates to the final size after resizing. Default: false</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>resizableAnimateDuration</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Duration time for animating, in milliseconds.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>resizableAnimateEasing</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Easing effect for animating. Default: swing</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>resizableAspectRatio</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>If set to true, resizing is constrained by the original aspect ratio. Default: false</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>resizableAutoHide</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>If set to true, automatically hides the handles except when the mouse hovers over the element. Default: false</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>resizableContainment</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Constrains resizing to within the bounds of the specified element. Possible values: 'parent', 'document' or an id</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>resizableDelay</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Tolerance, in milliseconds, for when resizing should start. If specified, resizing will not start until after mouse is moved beyond duration. This can help prevent unintended resizing when clicking on an element.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>resizableDistance</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Tolerance, in pixels, for when resizing should start. If specified, resizing will not start until after mouse is moved beyond distance. This can help prevent unintended resizing when clicking on an element.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>resizableGhost</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>If set to true, a semi-transparent helper element is shown for resizing. Default: false</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>resizableHandles</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>If specified as a string, should be a comma-split list of any of the following: 'n, e, s, w, ne, se, sw, nw, all'. Default: e, s, se</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>resizableHelper</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This is the css class that will be added to a proxy element to outline the resize during the drag of the resize handle. Once the resize is complete, the original element is sized. e.g. ui-state-highlight</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>resizableMaxHeight</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This is the maximum height the resizable should be allowed to resize to.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>resizableMaxWidth</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This is the maximum width the resizable should be allowed to resize to.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>resizableMinHeight</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This is the minimum height the resizable should be allowed to resize to.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>resizableMinWidth</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This is the minimum width the resizable should be allowed to resize to.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>resizableOnResizeTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event javascript function is triggered during the resize, on the drag of the resize handler.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>resizableOnStartTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event javascript function is triggered at the start of a resize operation.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>resizableOnStopTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event javascript function is triggered at the end of a resize operation.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>rootNode</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The rootNode property.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>rtl</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Defines whether the tree is in right-to-left mode (also make sure you are using a RTL theme - for example the included default-rtl).</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>selectable</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Enable a element to be selectable. Draw a box with your cursor to select items. Hold down the Ctrl key to make multiple non-adjacent selections.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>selectableAutoRefresh</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This determines whether to refresh (recalculate) the position and size of each selectee at the beginning of each select operation. If you have many many items, you may want to set this to false and call the refresh method manually. Default: true</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>selectableCancel</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Prevents selecting if you start on elements matching the selector. Default: ':input,option'</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>selectableDelay</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Time in milliseconds to define when the selecting should start. It helps preventing unwanted selections when clicking on an element.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>selectableDistance</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Tolerance, in pixels, for when selecting should start. If specified, selecting will not start until after mouse is dragged beyond distance.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>selectableFilter</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The matching child elements will be made selectees (able to be selected). Default: '<b>'</td>
</blockquote></tr></b><tr>
<blockquote><td align='left' valign='top'>selectableOnSelectedTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event is triggered at the end of the select operation, on each element added to the selection.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>selectableOnSelectingTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event is triggered during the select operation, on each element added to the selection.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>selectableOnStartTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event is triggered at the beginning of the select operation.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>selectableOnStopTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event is triggered at the end of the select operation.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>selectableOnUnselectedTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event is triggered at the end of the select operation, on each element removed from the selection.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>selectableOnUnselectingTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event is triggered during the select operation, on each element removed from the selection.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>selectableTolerance</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Possible values: 'touch', 'fit'. Default: 'touch'</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>showThemeDots</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>true</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Whether to show the connecting dots or not.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>showThemeIcons</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>true</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Whether to show the node icons or not.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortable</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Enable a elements to be sortable</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableAppendTo</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Defines where the helper that moves with the mouse is being appended to during the drag. Default: 'parent'</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableAxis</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>If defined, the items can be dragged only horizontally or vertically. Possible values:'x', 'y'.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableCancel</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Prevents sorting if you start on elements matching the selector. Default: ':input,button'</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableConnectWith</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Takes a jQuery selector with items that also have sortables applied. If used, the sortable is now connected to the other one-way, so you can drag from this sortable to the other. e.g. #myothersortable or .myothersortables</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableContainment</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Constrains dragging to within the bounds of the specified element - can be a DOM element, 'parent', 'document', 'window', or a jQuery selector.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableCursor</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Defines the cursor that is being shown while sorting.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableCursorAt</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Moves the sorting element or helper so the cursor always appears to drag from the same position. Coordinates can be given as a hash using a combination of one or two keys: top, left, right, bottom.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableDelay</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Time in milliseconds to define when the sorting should start. It helps preventing unwanted drags when clicking on an element.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableDistance</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Tolerance, in pixels, for when sorting should start. If specified, sorting will not start until after mouse is dragged beyond distance. Can be used to allow for clicks on elements within a handle.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableDropOnEmpty</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>If empty allows for an item to be dropped from a linked selectable. Default: true</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableForceHelperSize</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>If true, forces the helper to have a size. Default: false</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableForcePlaceholderSize</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>If true, forces the placeholder to have a size. Default: false</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableGrid</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Snaps the sorting element or helper to a grid, every x and y pixels. Array values: [x, y]</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableHandle</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Restricts sort start click to the specified element.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableHelper</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Allows for a helper element to be used for dragging display. The supplied function receives the event and the element being sorted, and should return a DOMElement to be used as a custom proxy helper. Possible values: 'original', 'clone'. Default: 'original'</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableItems</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Specifies which items inside the element should be sortable. Default: '> <b>'</td>
</blockquote></tr></b><tr>
<blockquote><td align='left' valign='top'>sortableOnActivateTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event is triggered when using connected lists, every connected list on drag start receives it.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableOnBeforeStopTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event is triggered when sorting stops, but when the placeholder/helper is still available.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableOnChangeTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event is triggered during sorting, but only when the DOM position has changed.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableOnDeactivateTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event is triggered when sorting was stopped, is propagated to all possible connected lists.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableOnOutTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event is triggered when a sortable item is moved away from a connected list.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableOnOverTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event is triggered when a sortable item is moved into a connected list.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableOnReceiveTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event is triggered when a connected sortable list has received an item from another list.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableOnRemoveTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event is triggered when a sortable item has been dragged out from the list and into another.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableOnSortTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event is triggered during sorting.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableOnStartTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event is triggered when sorting starts.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableOnStopTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event is triggered when sorting has stopped.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableOnUpdateTopics</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This event is triggered when the user stopped sorting and the DOM position has changed.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableOpacity</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Defines the opacity of the helper while sorting. From 0.01 to 1</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortablePlaceholder</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Class that gets applied to the otherwise white space.</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableRevert</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>If set to true, the item will be reverted to its new DOM position with a smooth animation. Default: false</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableScroll</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>If set to true, the page scrolls when coming to an edge. Default: true</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableScrollSensitivity</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Defines how near the mouse must be to an edge to start scrolling. Default: 20</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableScrollSpeed</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The speed at which the window should scroll once the mouse pointer gets within the scrollSensitivity distance. Default: 20</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableTolerance</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>This is the way the reordering behaves during drag. Possible values: 'intersect', 'pointer'. In some setups, 'pointer' is more natural. Default: 'intersect'</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>sortableZindex</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>Z-index for element/helper while being sorted. Default: 1000</td>
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
<blockquote><td align='left' valign='top'>targets</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>A comma separated list of ids of container elements to load with the contents from the result of this request</td>
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
<blockquote><td align='left' valign='top'>timeout</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>3000</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Integer</td>
<td align='left' valign='top'>jQuery options for timeout. Default is 3000</td>
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
<blockquote><td align='left' valign='top'>types</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>The types enables node types - each node can have a type, and you can define rules on how that type should behave - maximum children count, maximum depth, valid children types, selectable or not, etc.</td>
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