

# Introduction #

Enable AJAX Client Validation for Forms.

# Prerequisite #

The **jsonValidationWorkflowStack** is a part of the struts2-json-plugin. Include the struts2-json-plugin.jar into your classpath.

```
<dependency>
	<groupId>org.apache.struts</groupId>
	<artifactId>struts2-json-plugin</artifactId>
	<version>${struts2.version}</version>
</dependency>
```

# Samples #

## Sample Action with Struts2 Validation Annotions ##
```
@ParentPackage(value = "showcase")
@InterceptorRef("jsonValidationWorkflowStack")
@Validations(requiredStrings = {
    @RequiredStringValidator(fieldName = "loginuser", type = ValidatorType.FIELD, message = "Login User is required"), 
    @RequiredStringValidator(fieldName = "loginpassword", type = ValidatorType.FIELD, message = "Password is required")
}, expressions = {
  @ExpressionValidator(expression = "loginpassword.trim().equals('test') == true", message = "Password must be test."),
})
public class Login extends ActionSupport {

  private static final long serialVersionUID = 7968544374444173511L;
  private static final Log  log              = LogFactory.getLog(Login.class);

  private String            loginuser;
  private String            loginpassword;
  private String            echo;

  @Action(value = "/login", results = {
    @Result(location = "simpleecho.jsp", name = "success")
  })
  public String execute() throws Exception
  {
    echo = "Welcome " + loginuser;
    log.info(echo);

    return SUCCESS;
  }

  public String getEcho()
  {
    return echo;
  }

  public String getLoginuser()
  {
    return loginuser;
  }

  public void setLoginuser(String loginuser)
  {
    this.loginuser = loginuser;
  }

  public String getLoginpassword()
  {
    return loginpassword;
  }

  public void setLoginpassword(String loginpassword)
  {
    this.loginpassword = loginpassword;
  }
}
```

## Use Validation with Struts2 XHTML Theme ##

```
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<html>
  <head>
    <sj:head jqueryui="true"/>
    
	<!-- This files are needed for AJAX Validation of XHTML Forms -->
	<script language="JavaScript" src="${pageContext.request.contextPath}/struts/utils.js" type="text/javascript"></script>
	<script language="JavaScript" src="${pageContext.request.contextPath}/struts/xhtml/validation.js" type="text/javascript"></script>
  </head>
  <body>
	<div id="result">Submit form bellow.</div>

    <s:form id="formValidate" action="login" theme="xhtml">
     	<s:textfield 
     		id="loginuser" 
     		name="loginuser" 
     		label="User" 
     		required="true"
     	/>
     	<s:textfield 
     		id="loginpassword" 
     		name="loginpassword" 
     		label="Password (test)" 
     		required="true"
     	/>
    	<sj:submit 
    		targets="result" 
    		button="true" 
    		validate="true" 
    		value="Submit" 
    		indicator="indicator"
    		/>
    </s:form>
  </body>
</html>
```

## Use Validation with Custome Themes ##

Struts2 JsonValidation returns a JSON Result like this:

```
{ 
	"errors":["Password must be test."],
	"fieldErrors": {
		"loginuser":["Login User is required"],
		"loginpassword":["Password is required"]
	}
}
```

For the Custome Validation you need two pieces of JavaScript.
First a Topic that clears current Validation Messages like this.

```
$(document).ready( function() {
	$.subscribe('removeErrors', function(event,data) {
		$('.errorLabel').html('').removeClass('errorLabel');
		$('#formerrors').html('');
	});
});	
```

And a simple function that handle the JSON Result.

```
function customeValidation(form, errors) {
	
	//List for errors
	var list = $('#formerrors');
	
	//Handle non field errors 
	if (errors.errors) {
		$.each(errors.errors, function(index, value) { 
			list.append('<li>'+value+'</li>\n');
		});
	}
	
	//Handle field errors 
	if (errors.fieldErrors) {
		$.each(errors.fieldErrors, function(index, value) { 
			var elem = $('#'+index+'Error');
			if(elem)
			{
				elem.html(value[0]);
				elem.addClass('errorLabel');
			}
		});
	}
}
```

A corresponding Form can look like this.

```
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<html>
  <head>
    <sj:head jqueryui="true"/>
  </head>
  <body>
	<div id="result">Submit form bellow.</div>
    
	<!-- A List for Global Error Messages -->
    <ul id="formerrors" class="errorMessage"></ul>
    
    <s:form id="formValidateCustom" action="login" theme="simple" cssClass="yform">
        <fieldset>
            <legend>AJAX Form with Validation</legend>
	        <div class="type-text">
	            <label for="echo">User: <span id="loginuserError"></span></label>
			   	<s:textfield 
		     		id="loginuser" 
		     		name="loginuser" 
		     	/>
	        </div>
	        <div class="type-text">
	            <label for="echo">Password: <span id="loginpasswordError"></span></label>
		     	<s:textfield 
		     		id="loginpassword" 
		     		name="loginpassword" 
		     	/>
	        </div>
	        <div class="type-button">
		    	<sj:submit 
		    		targets="result" 
		    		button="true" 
		    		validate="true" 
		    		validateFunction="customeValidation"
		    		onBeforeTopics="removeErrors"
		    		onSuccessTopics="removeErrors"
		    		value="Submit" 
		    		indicator="indicator"
		    	/>
	        </div>
        </fieldset>
    </s:form>
    <img id="indicator" src="images/indicator.gif" alt="Loading..." style="display:none"/>    
  </body>
</html>
```

# Attributes in Submit Tag #
> <table width='100%'>
<blockquote><tr>
<blockquote><th align='left' valign='top'><h4>Name</h4></th>
<th align='left' valign='top'><h4>Required</h4></th>
<th align='left' valign='top'><h4>Default</h4></th>
<th align='left' valign='top'><h4>Evaluated</h4></th>
<th align='left' valign='top'><h4>Type</h4></th>
<th align='left' valign='top'><h4>Description</h4></th>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>validate</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>Boolean</td>
<td align='left' valign='top'>Enable client AJAX validation</td>
</blockquote></tr>
<tr>
<blockquote><td align='left' valign='top'>validateFunction</td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'></td>
<td align='left' valign='top'>false</td>
<td align='left' valign='top'>String</td>
<td align='left' valign='top'>A function that handle the client validation result. eg.: myValidation(form, errors)</td>
</blockquote></tr>
</blockquote><blockquote></table>