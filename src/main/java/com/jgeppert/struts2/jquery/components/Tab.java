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

package com.jgeppert.struts2.jquery.components;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.views.annotations.StrutsTag;
import org.apache.struts2.views.annotations.StrutsTagAttribute;
import org.apache.struts2.views.annotations.StrutsTagSkipInheritance;

import com.opensymphony.xwork2.util.ValueStack;

/**
 * <!-- START SNIPPET: javadoc --> Renders a local or an remote tab for
 * tabbedPanel <!-- END SNIPPET: javadoc -->
 * 
 * <p>
 * Examples
 * </p>
 * <!-- START SNIPPET: example1 --> &lt;s:url id="remoteurl1"
 * action="myremoteactionone"/&gt; &lt;sj:tab id="tab1" target="tone"
 * label="My Local Tab for div tone"/&gt; &lt;sj:tab id="tab2"
 * href="%{remoteurl1}" label="My Remote Tab"/&gt; &lt;div id="tone"&gt; Test 1
 * &lt;/div&gt; <!-- END SNIPPET: example1 -->
 */
@StrutsTag(name = "tab", tldTagClass = "com.jgeppert.struts2.jquery.views.jsp.ui.TabTag", description = "Render Tab for Tabbed Pannel providing content from remote call via AJAX")
public class Tab extends AbstractRemoteBean {

  public static final String TEMPLATE       = "tab";
  public static final String TEMPLATE_CLOSE = "tab-close";
  public static final String COMPONENT_NAME = Tab.class.getName();

  protected String           target;

  public Tab(ValueStack stack, HttpServletRequest request, HttpServletResponse response) {
    super(stack, request, response);
  }

  public String getDefaultOpenTemplate()
  {
    return TEMPLATE;
  }

  protected String getDefaultTemplate()
  {
    return TEMPLATE_CLOSE;
  }

  public void evaluateExtraParams()
  {
    super.evaluateExtraParams();

    if (target != null) addParameter("target", findString(target));
  }

  @Override
  @StrutsTagSkipInheritance
  public void setTheme(String theme)
  {
    super.setTheme(theme);
  }

  @Override
  public String getTheme()
  {
    return "jquery";
  }

  @StrutsTagAttribute(description = "id of target div for tab")
  public void setTarget(String target)
  {
    this.target = target;
  }

}