<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<%@ taglib prefix="sjg" uri="/struts-jquery-grid-tags"%>


    <s:url id="remoteurl" action="json-table" />
    <s:url id="editurl" action="edit-customer" /> 
    <s:url id="selectcountrysurl" action="customer-countrys" /> 
    <s:url id="selectemployeesurl" action="employees" /> 
    <s:url id="empurl" action="employees-detail" />
	<script type="text/javascript">
		function formatLink(cellvalue, options, rowObject) {
            return "<a href='#' onClick='javascript:openDialog("+cellvalue+")'>" + cellvalue + "</a>";
        }
		function openDialog(employee) {
			$("#employees_details").load("<s:property value="empurl"/>?id="+employee);
			$("#employees_details").dialog('open');
        }
	</script>
	<sj:dialog 
		id="employees_details" 
		title="Employee Details" 
		autoOpen="false" 
		modal="true"
		width="400"
	>
	
	</sj:dialog>
    <h2>Grid</h2>
    <p>
		<strong>The Database in this Showcase is per default read-only!</strong><br/>
		Make Samples editable with following <sj:a id="openStepsDialog" openDialog="readWriteSteps" cssStyle="font-weight: bold; text-decoration: underline;">Steps</sj:a>.
		<sj:dialog id="readWriteSteps" modal="true" autoOpen="false" width="600">
		<ol>
			<li>Copy BirtSample.jar from the WEB-INF/lib folder to your Harddrive (e.g. C:\)</li>
			<li>Extract BirtSample.jar to C:\BirtSample)</li>
			<li>Edit WEB-INF/classes/hibernate.cfg.xml</li>
			<li>&lt;property name=&quot;hibernate.connection.url&quot;&gt;jdbc:derby:directory:C:/BirtSample/BirtSample&lt;/property&gt;</li>
		</ol>
		</sj:dialog>
    </p>
    <sjg:grid 
    	id="customerstable" 
    	caption="Customers (Editable/Multiselect)" 
    	dataType="json" 
    	href="%{remoteurl}" 
    	pager="true" 
    	navigator="true"
    	navigatorAddOptions="{height:280,reloadAfterSubmit:true}"
    	navigatorEditOptions="{height:280,reloadAfterSubmit:false}"
    	navigatorEdit="true"
    	navigatorView="true"
    	navigatorDelete="true"
    	navigatorDeleteOptions="{height:280,reloadAfterSubmit:true}"
    	gridModel="gridModel"
    	rowList="10,15,20"
    	rowNum="15"
    	editurl="%{editurl}"
    	editinline="false"
    	multiselect="true"
    	viewrecords="true"
    >
    	<sjg:gridColumn name="customernumber" 
    		index="customernumber" 
    		key="true" 
    		title="ID" 
    		width="50"
    		formatter="integer" 
    		sortable="true" 
    		search="true" 
    		searchoptions="{sopt:['eq','ne','lt','gt']}"
    	/>
    	<sjg:gridColumn 
    		name="customername" 
    		index="customername" 
    		title="Company" 
    		width="300"
    		sortable="true" 
    		editable="true" 
    		edittype="text" 
    	/>
    	<sjg:gridColumn 
    		name="contactlastname" 
    		index="contactlastname" 
    		title="Last Name" 
    		sortable="true" 
    		hidden="true" 
    		editable="true" 
    		edittype="text" 
    		editrules="{ edithidden : true } "
    		/>
    	<sjg:gridColumn 
    		name="contactfirstname" 
    		index="contactfirstname" 
    		title="First Name" 
    		sortable="true" 
    		hidden="true" 
    		editable="true" 
    		edittype="text" 
    		editrules="{ edithidden : true } "
    		/>
    	<sjg:gridColumn 
    		name="addressLine1" 
    		index="addressLine1" 
    		title="Adress" 
    		sortable="true" 
    		hidden="true" 
    		search="true"
    		searchoptions="{sopt:['eq','ne','bw','cn']}"
    		/>
    	<sjg:gridColumn 
    		name="country" 
    		index="country" 
    		title="Country" 
    		sortable="true" 
    		search="true"
    		searchoptions="{sopt:['eq','ne','bw','cn']}"
    		editable="true" 
    		edittype="select" 
    		editoptions="{ dataUrl : '%{selectcountrysurl}' }"
    		formoptions="{label:'Select a Country'}"
    		/>
    	<sjg:gridColumn 
    		name="city" 
    		index="city" 
    		title="City" 
    		sortable="true" 
    		search="true"
    		searchoptions="{sopt:['eq','ne','bw','cn']}"
    		editable="true" 
    		edittype="text"/>
    	<sjg:gridColumn 	
    		name="creditlimit" 
    		index="creditlimit" 
    		title="Credit Limit" 
    		align="right"
    		editable="true" 
    		editrules="{
    					number: true, 
    					required: true, 
    					minValue : 100.0, 
    					maxValue : 1000000.0
    				}" 
    		formatter="currency" 
    		sortable="true" 
    		search="true"
    		searchoptions="{sopt:['eq','ne','lt','gt']}"
    		/>
    	<sjg:gridColumn 
    		name="salesemployee.employeenumber" 
    		index="employeenumber" 
    		title="Employee" 
    		align="center"
    		formatter="formatLink"
    		cssClass="link"
    		sortable="true" 
    		search="true"
    		searchoptions="{sopt:['eq','ne','lt','gt']}"
    		editable="true"
    		edittype="select" 
    		editoptions="{ dataUrl : '%{selectemployeesurl}' }"
    		formoptions="{label:'Select a Employee'}"
    		/>
    </sjg:grid>