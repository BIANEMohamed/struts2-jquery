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
<#assign escapedOptionId="${parameters.id?string?replace('.', '_')}">
  <#if parameters.draggable?default(false)> 
	options_${escapedOptionId?html}.draggable = true;<#rt/>
  </#if>
  <#if parameters.draggableOptions?if_exists != ""> 
	options_${escapedOptionId?html}.draggableoptions = "${parameters.draggableOptions?html}";<#rt/>
  </#if>
  <#if parameters.draggableOnStartTopics?if_exists != "">
 	options_${escapedOptionId?html}.draggableonstarttopics = "${parameters.draggableOnStartTopics?html}";<#rt/>
   </#if>
  <#if parameters.draggableOnStopTopics?if_exists != "">
	options_${escapedOptionId?html}.draggableonstoptopics = "${parameters.draggableOnStopTopics?html}";<#rt/>
   </#if>
  <#if parameters.draggableOnDragTopics?if_exists != "">
	options_${escapedOptionId?html}.draggableondragtopics = "${parameters.draggableOnDragTopics?html}";<#rt/>
   </#if>
