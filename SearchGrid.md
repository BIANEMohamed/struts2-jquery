

# Make your Grid searchable #

## Enable Search Icon in your Navigator ##
```
<sjg:grid
	id="mygrid"
	caption="My searchable Grid"
	href="%{remoteurl}"
	pager="true"
	navigator="true"
	navigatorSearch="true"
	...
>
```


## Search Options for Grid Column ##

With the Attributes **search** and **searchoptions** in the sjg:gridColumn tag you can specify search options for every column.

### A Grid Column only with equals ant not equals search ###
```
<sjg:gridColumn
	...
	search="true"
	searchoptions="{sopt:['eq','ne']}"
/>
```

### A Grid Column with Datepicker in the search dialog ###

first create a javascript function.

```
<script type="text/javascript">
datePick = function(elem) {
	$(elem).datepicker();
	$('#ui-datepicker-div').css("z-index", 2000);
}
</script>
```

now you can use this function in your search options.

```
<sjg:gridColumn
	...
	formatter="date"
	formatoptions="{newformat : 'd.m.Y H:i', srcformat : 'Y-m-d H:i:s'}"
	width="90"
	search="true"
	searchoptions="{sopt:['eq','ne','lt','gt'], dataInit:datePick, attr:{title:'Your Search Date'}}"
/>
```

### A Grid Column with Select Box in the search dialog ###

create an Action that returns a Select Box with searchable values.

```
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ page contentType="text/html; charset=UTF-8" %>
<s:select list="mySearchValuesList" theme="simple" emptyOption="true"/>
```

Create a URL to your select box action and use it in your search options.
```
<s:url var="selecturl" action="select" />
<sjg:gridColumn
	...
	search="true"
	searchtype="select"
	searchoptions="{sopt:['eq','ne'], dataUrl : '%{selecturl}'}"
	...
/>
```

## Search Propertys in your Action ##

You should add three property's in your Struts2 Grid Action.

```
	// Search Field
	private String searchField;

	// The Search String
	private String searchString;

	// he Search Operation
	private String searchOper;
.
.
.
	public void setSearchField(String searchField) {
		this.searchField = searchField;
	}

	public void setSearchString(String searchString) {
		this.searchString = searchString;
	}

	public void setSearchOper(String searchOper) {
		this.searchOper = searchOper;
	}
```

With this property's you are able to build hibernate criterias or build a custom SQL String. Take a look at the Class _JsonTableAction_ in the Grid Showcase to see how you can build a hibernate criteria.

# Use filterGrid for searching in the Grid #

First add an empty div above the grid tag.
```
<div id="mygridfilter"></div>
```

Now add following script code after your grid tags.

```
    <script type="text/javascript">

    $(document).ready(function () {

    	$("#mygridfilter").jqGrid('filterGrid','#mygridid',{
    		autosearch : false,
    		gridNames : true,
    		formtype : 'vertical',
    		autosearch : false,
    		enableSearch : true,
    		enableClear : true,
    		gridModel : true,
    		buttonclass : 'ui-state-default ui-corner-all'
    	});
    });

    </script>
```

See jqGrid Wiki for more informations.
http://www.trirand.com/jqgridwiki/doku.php?id=wiki:custom_searching

# Enable Multi Search for your Grid #

You can Enable the Multi Search in your **navigatorSearchOptions** Attribute.

```
<sjg:grid
	id="mygrid"
	caption="My searchable Grid"
	href="%{remoteurl}"
	pager="true"
	navigator="true"
	navigatorSearch="true"
	navigatorSearchOptions="{multipleSearch:true}"
...
>
```

![http://www.jgeppert.com/struts2-jquery/jqgrid_multiple_search.jpg](http://www.jgeppert.com/struts2-jquery/jqgrid_multiple_search.jpg)

After sumbiting the search you receive a JSON Object in your Action. How to handle this can you read in this short [tutorial](http://www.jgeppert.com/2010/06/how-to-parse-a-json-object-when-using-multisearch-for-jqgrid-with-java/).