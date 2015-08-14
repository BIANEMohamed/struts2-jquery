

# Predefined Formatter #

There are several predefined formatter available. For details about each formatter and the format options please take a look into the [jqGrid Wiki](http://www.trirand.com/jqgridwiki/doku.php?id=wiki:predefined_formatter).

## Currency Formatter Example ##

```
<sjg:gridColumn 	
	name="creditLimit" 
	...
	formatter="currency" 
	...
/>
```

## Integer Formatter Example ##

```
<sjg:gridColumn 
	name="id"
	key="true"
	...
	formatter="integer"
	...
/>
```

## Date Formatter Example ##

The following Example shows how to format a date. The JSON Result give us a date formatted like this "Y-m-d H:i:s'" and now we want to show this in e.g. German date format.

```
<sjg:gridColumn
	name="dateColumn"
	...
	formatter="date"
	formatoptions="{newformat : 'd.m.Y H:i', srcformat : 'Y-m-d H:i:s'}"
	...
/>
```


# Custom Formatter #

This Example is taken form [Grid Showcase](http://struts.jgeppert.com/struts2-jquery-grid-showcase/index.action). This Steps describe how to open an custom dialog form Grid Column.

## Create a jQuery UI Dialog ##

```
<sj:dialog 
	id="employees_details" 
	title="Employee Details" 
	autoOpen="false" 
	modal="true"
	width="400"
>
```

## Create two JavaScript Functions ##

  1. Create an URL to Struts2 Action
  1. Create a Function that formats your Column
  1. Create a Function which loads and open your Dialog

```
<s:url var="empurl" action="employees-detail" />
<script type="text/javascript">
	function formatLink(cellvalue, options, rowObject) {
		return "<a href='#' onClick='javascript:openDialog("+cellvalue+")'>" + cellvalue + "</a>";
	}
	function openDialog(employee) {
		$("#employees_details").load("<s:property value="empurl"/>?id="+employee);
		$("#employees_details").dialog('open');
	}
</script>
```

## Grid Column with custome Formatter ##

```
<sjg:gridColumn 
	name="salesemployee.employeenumber" 
	index="employeenumber" 
	title="Employee" 
	...
	formatter="formatLink"
	...
/>
```