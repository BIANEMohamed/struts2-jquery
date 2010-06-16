<#--
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
-->
</a>
<script type="text/javascript">
<#if parameters.formId?if_exists != "">
$('#${parameters.id?html}').click(function() {
<#if parameters.openDialog?if_exists != "">
    $('#${parameters.openDialog?trim}').dialog('open');
</#if>
<#if parameters.targets?if_exists != "">
    <#assign target>
    <#list parameters.targets?split(",") as tmp>#${tmp?trim}<#if tmp_has_next>,</#if></#list>
</#assign>
       var options${parameters.id?html} = {
        beforeSubmit:  before_${parameters.id?html},
        success:       complete_${parameters.id?html},
   <#if parameters.dataType?if_exists != "">
        success:       '${parameters.dataType?html}',
   </#if>
   		timeout:	   ${parameters.timeout?default("3000")},
        target:        '${target?trim}'
      };

   $('#${parameters.formId?html}').ajaxForm(options${parameters.id?html});
   $('#${parameters.formId?html}').submit();
    
    function before_${parameters.id?html}() {
  <#if parameters.indicator?if_exists != "">
    $('#${parameters.indicator?trim}').show();
  </#if>
    <#if parameters.beforeSend?if_exists != "">
        ${parameters.beforeSend?html}();
    </#if>
    }
    function complete_${parameters.id?html}() {
      <#if parameters.indicator?if_exists != "">
        $('#${parameters.indicator?trim}').hide();
      </#if>
      <#if parameters.effect?if_exists != "">
        var optionse${parameters.id?html} = { <#if parameters.effectOptions?if_exists != "">${parameters.effectOptions?html}</#if> };
          <#if parameters.effectDuration?if_exists == "">
            $("${target?trim}").effect("${parameters.effect?html}",optionse${parameters.id?html},2500);
          <#else>
            $("${target?trim}").effect("${parameters.effect?html}",optionse${parameters.id?html},${parameters.effectDuration?html});
          </#if>
      </#if>
      <#if parameters.complete?if_exists != "">
        ${parameters.complete?html}();
      </#if>
      
    }
</#if>
});
<#else>
$('#${parameters.id?html}').click(function() {
  <#if parameters.openDialog?if_exists != "">
    $('#${parameters.openDialog?trim}').dialog('open');;
  </#if>
<#if parameters.targets?if_exists != "">
  <#if parameters.indicator?if_exists != "">
    $('#${parameters.indicator?trim}').show();
  </#if>
<#list parameters.targets?split(",") as target>
    $("#${target?trim}").load(
        "${parameters.href}", 
        {
  <#if parameters.beforeSend?if_exists != "">
            beforeSend : function(xhr) {
                            ${parameters.beforeSend?html}(xhr);<#rt/>
                         },
  </#if>
  <#if parameters.complete?if_exists != "">
            complete : function(xhr,status) {
                            ${parameters.complete?html}(xhr, status);<#rt/>
                         },
  </#if>
  <#if parameters.error?if_exists != "">
            error : function(xhr,status,error) {
                            ${parameters.error?html}(xhr, status, error);<#rt/>
                         },
  </#if>
  <#if parameters.dataType?if_exists != "">
            ajaxOptions:{ dataType:'${parameters.dataType?html}', timeout : ${parameters.timeout?default("3000")}<#rt/>
  <#else>
             ajaxOptions:{ dataType:'html', timeout : ${parameters.timeout?default("3000")} }
  </#if>
        },
        function() {
  <#if parameters.indicator?if_exists != "">
    $('#${parameters.indicator?trim}').hide();
  </#if>
  <#if parameters.effect?if_exists != "">
    var options${parameters.id?html} = { <#if parameters.effectOptions?if_exists != "">${parameters.effectOptions?html}</#if> };
      <#if parameters.effectDuration?if_exists == "">
        $("#${target?trim}").effect("${parameters.effect?html}",options${parameters.id?html},2500);
      <#else>
        $("#${target?trim}").effect("${parameters.effect?html}",options${parameters.id?html},${parameters.effectDuration?html});
      </#if>
  </#if>
        }
        );
</#list>
  </#if>
  });

</#if>
</script>