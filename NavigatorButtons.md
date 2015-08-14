

# Introduction #

Add additional Buttons to the Grid Navigator.

# Sample #
```
    <sjg:grid ...
    	id="gridWithButtons"
    	navigator="true"
    	navigatorExtraButtons="{
    		seperator: { 
    			title : 'seperator'  
    		}, 
    		hide : { 
	    		title : 'Show/Hide', 
	    		icon: 'ui-icon-wrench', 
	    		topic: 'showcolumns'
    		},
    		alert : { 
	    		title : 'Alert', 
	    		caption : 'Show Alert!', 
	    		onclick: function(){ alert('Grid Button clicked!') }
    		}
    	}"
    >
```