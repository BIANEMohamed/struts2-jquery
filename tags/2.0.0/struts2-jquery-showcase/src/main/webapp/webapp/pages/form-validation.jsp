<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<div id="col1">
  <div id="col1_content" class="clearfix">
    <ul>
      <li><s:url id="urlform" action="form"/><sj:a id="remoteformlink" href="%{urlform}" targets="main">AJAX Forms</sj:a></li>
      <li><s:url id="urlformeffect" action="form-effect"/><sj:a id="remoteformeffectlink" href="%{urlformeffect}" targets="main">AJAX Forms with Effects</sj:a></li>
      <li><s:url id="urlformout" action="form-out"/><sj:a id="remoteformoutlink" href="%{urlformout}" targets="main">AJAX Forms with Outside Button</sj:a></li>
      <li><s:url id="urlformftl" action="form-ftl"/><sj:a id="remoteformftllink" href="%{urlformftl}" targets="main">AJAX Forms with Freemarker</sj:a></li>
      <li><s:url id="urlformvel" action="form-velocity"/><sj:a id="remoteformvellink" href="%{urlformvel}" targets="main">AJAX Forms with Velocity</sj:a></li>
      <li><s:url id="urlformevent" action="form-event"/><sj:a id="remoteformeventlink" href="%{urlformevent}" targets="main">AJAX Forms with Events</sj:a></li>
      <li><s:url id="urlformvalidation" action="form-validation"/><sj:a id="remoteformvalidationlink" href="%{urlformvalidation}" targets="main">AJAX Forms with Validation</sj:a></li>
      <li><s:url id="urlformvalidationcust" action="form-validation-custome"/><sj:a id="remoteformvalidationcustlink" href="%{urlformvalidationcust}" targets="main">AJAX Forms with Custome Validation</sj:a></li>
      <li><s:url id="urlformtextarea" action="form-textarea"/><sj:a id="remoteformtextarealink" href="%{urlformtextarea}" targets="main">AJAX Textarea</sj:a></li>
      <li><s:url id="urlformtextarearesize" action="form-textarea-resizeable"/><sj:a id="remoteformtextarearesizelink" href="%{urlformtextarearesize}" targets="main">AJAX Textarea / Resizable</sj:a></li>
      <li><s:url id="urlformtextfieldresize" action="form-textfield-resizeable"/><sj:a id="remoteformtextfieldresizelink" href="%{urlformtextfieldresize}" targets="main">AJAX Textfield / Resizable</sj:a></li>
      <li><s:url id="urlformselect" action="form-select"/><sj:a id="remoteformselectlink" href="%{urlformselect}" targets="main">AJAX Select</sj:a></li>
      <li><s:url id="urlformdoubleselect" action="form-doubleselect"/><sj:a id="remoteformdoubleselectlink" href="%{urlformdoubleselect}" targets="main">AJAX Select (Doubleselect)</sj:a></li>
    </ul>
  </div>
</div>
<div id="col3">
  <div id="col3_content" class="clearfix">
	<h2>Form submission with AJAX Validation</h2>
	<p>
	   A Form submission with AJAX Validation for Forms with XHTML Theme.
	</p>
    <strong>Result Div :</strong>
	<div id="result" class="result ui-widget-content ui-corner-all">Submit form bellow.</div>
    
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
    <img id="indicator" src="images/indicator.gif" alt="Loading..." style="display:none"/>    
    
    <br/>
    
    <sj:tabbedpanel id="localtabs" cssClass="list">
      <sj:tab id="tab1" target="jsp" label="JSP Code"/>
      <sj:tab id="tab2" target="java" label="Action Code with Validation"/>
      <sj:tab id="tab2" target="javascript" label="Required JavaScript"/>
      <div id="jsp">
	  <pre>
    &lt;s:form id=&quot;formValidate&quot; action=&quot;login&quot; theme=&quot;xhtml&quot;&gt;
     	&lt;s:textfield 
     		id=&quot;loginuser&quot; 
     		name=&quot;loginuser&quot; 
     		label=&quot;User&quot; 
     		required=&quot;true&quot;
     	/&gt;
     	&lt;s:textfield 
     		id=&quot;loginpassword&quot; 
     		name=&quot;loginpassword&quot; 
     		label=&quot;Password (test)&quot; 
     		required=&quot;true&quot;
     	/&gt;
    	&lt;sj:submit 
    		targets=&quot;result&quot; 
    		button=&quot;true&quot; 
    		validate=&quot;true&quot; 
    		effect=&quot;pulsate&quot; 
    		value=&quot;Submit&quot; 
    		indicator=&quot;indicator&quot;
    		/&gt;
    &lt;/s:form&gt;
	  </pre>
	  </div>
      <div id="java">
	  <pre>
@ParentPackage(value = &quot;showcase&quot;)
@InterceptorRef(&quot;jsonValidationWorkflowStack&quot;)
@Validations(requiredStrings = {
    @RequiredStringValidator(fieldName = &quot;loginuser&quot;, type = ValidatorType.FIELD, message = &quot;Login User is required&quot;),
	@RequiredStringValidator(fieldName = &quot;loginpassword&quot;, type = ValidatorType.FIELD, message = &quot;Password is required&quot;)
})
public class Login extends ActionSupport {

  private static final long serialVersionUID = 7968544374444173511L;
  private static final Log  log              = LogFactory.getLog(Login.class);

  private String            loginuser;
  private String            loginpassword;
  private String            echo;

  @Action(value = &quot;/login&quot;, results = {
    @Result(location = &quot;simpleecho.jsp&quot;, name = &quot;success&quot;)
  })
  public String execute() throws Exception
  {
    echo = &quot;Welcome &quot; + loginuser;
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
	  </pre>
	  </div>
      <div id="javascript">
	  <pre>
	&lt;script 
		language=&quot;JavaScript&quot; 
		src=&quot;${pageContext.request.contextPath}/struts/utils.js&quot; 
		type=&quot;text/javascript&quot;&gt;
	&lt;/script&gt;
	&lt;script 
		language=&quot;JavaScript&quot; 
		src=&quot;${pageContext.request.contextPath}/struts/xhtml/validation.js&quot; 
		type=&quot;text/javascript&quot;&gt;
	&lt;/script&gt;
	  </pre>
	  </div>
    </sj:tabbedpanel>
  </div>
  <!-- IE Column Clearing -->
  <div id="ie_clearing"> &#160; </div>
</div>