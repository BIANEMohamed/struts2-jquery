/*
 * jquery.struts2.js
 *
 * Integration of jquery with struts 2 for first class support of Ajax in struts 2
 *
 * Requires use of jQuery. Tested with jQuery 1.3 and above
 *
 * Copyright (c) 2008 Eric Chijioke (obinna a-t g mail dot c o m)
 * Copyright (c) 2009 Johannes Geppert http://www.jgeppert.com
 *
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 */
(function($){
	/**
	 * Bind Struts2 Components for jQuery AJAX and UI functions
	 */
	jQuery.struts2_jquery = {
		
		historyelements: {},

		defaultIndicator: '',
		
		lasttopic: '',
			
		lastselectedrow: '',

		//pre-binding function of the type function(element){}. called before binding the element
		// returning false will prevent the binding of this element
		preBind: null,
		
		//post-binding function of the type function(element){}. called before binding the element
		postBind: null,
			
		bind: function(el, options) {
			
			if(el) {
				var $el = $(el);
				el = $el[0];
				
				var tag = el.tagName.toLowerCase();
				options.tagname = tag;
				
				//extension point to allow custom pre-binding processing
				if(typeof($.struts2_jquery.preBind) != "function" || $.struts2_jquery.preBind($el)) {
					
					if(!options.jqueryaction)
						options.jqueryaction = tag;
									
					this[options.jqueryaction]($el, options);
				
					//extension point to allow custom post-binding processing
					if($.struts2_jquery.postBind && (typeof($.struts2_jquery.postBind) == "function")) {
						return $.struts2_jquery.postBind(el);
					}
				}
				
			}
		},
		
		// register a jquery action
		jqueryaction: function(name, binder) {
			
			if(name && binder) {
				this[name] = binder;
			}
		},
		
		action: function($elem, options, loadHandler, type){

			if(options.opendialog) {
				$elem.bind('click', function(event) {
					$('#'+options.opendialog).dialog('open');
	    		    return false;
				});
			}
			
	    	//bind event to onClick topics
			if(options.onclicktopics) {  
				var topics = options.onclicktopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
									
					var topic = topics[i];
					$elem.createTopic(topic);
					var params = {};
					params.topic = topic;
					$elem.bind('click', params, function(event){
						$target = $(this);
						
						if(!$target.disabled || $target.disabled != true) {

							var publishOptions = event.data || {};
							publishOptions.disabled = false;
							
							$target.publish(event.data.topic, publishOptions, event);
						}
    	    		    return false;
					});
				}
			}
	    	var actionTopic = '_sj_action_' + options.id;
	    	
	    	var href = options.href;
	    	
	    	if(href == null || href == "") {
	    		href = "#";
	    		options.href = href;
	    	}



			var effectTopic = '_sj_div_effect_';
			var effect = {};
			effect.effect = options.effect;
			effect.effectoptions = options.effectoptions;
			effect.effectduration = options.effectduration;

			//subscribe all targets to this action's custom execute topic
	    	if(options.targets) {  
	    		
	    		//target subscription needs to be done after document load in case element exists in the dom AFTER the current action object 
	    		$(function() {
					var targets = options.targets.split(',');
					for ( var i = 0; i < targets.length; i++) {
						var target = targets[i];
						effect.targets = target;
						var tarelem = $('#' + target);
						tarelem.subscribe(actionTopic, loadHandler, options);
						tarelem.subscribe(effectTopic+target, '_s2j_effects', effect);
						if(options.listentopics) {			  
							var topics = options.listentopics.split(',');
							for ( var i = 0; i < topics.length; i++) {
								tarelem.subscribe(topics[i], loadHandler, options);
								tarelem.subscribe(topics[i], '_s2j_effects', effect);
							}
						}
		    	    	if(ajaxhistory) {
							var params = {};
							params.target = target;
							params.topic = actionTopic;
		    				$elem.bind('click', params, function(event){
		    					$.struts2_jquery.historyelements[ event.data.target ] = event.data.topic;
		    	    		    $.bbq.pushState( $.struts2_jquery.historyelements );
		    	    		    return false;
		    		    	});
		    	    	}
					}
	    		});
	    		
			} else {   // if no targets, then the action can still execute ajax request and will handle itself (no loading result into container

				effect.targets = options.id;
				$('#' + options.id).subscribe(effectTopic+options.id, '_s2j_effects', effect);
					
				//bind event topic listeners
		    	if(options.onbeforetopics || options.oncompletetopics || options.onsuccesstopics || options.onerrortopics) {
			    		$elem.subscribe(actionTopic, loadHandler, options);
		    	}
			}

	    	if(type == "a") {
				$elem.publishOnEvent('click', actionTopic);			//bind custom action topic to click event
	    	}
	    	
			
		},
			
		container: function($elem, options){

			var loadHandler = '_s2j_container_load',
			effectHandler = '_s2j_effects';
			

			this.action($elem, options, loadHandler, 'div');


			//load div using ajax
			if(options.formids || (options.href && options.href != '#')) {
				if(options.href != '#') {
	
					if(options.reloadtopics) {			  
						var topics = options.reloadtopics.split(',');
						for ( var i = 0; i < topics.length; i++) {
							$elem.subscribe(topics[i], loadHandler, options);
						}
					}
					if(options.listentopics) {			  
						var topics = options.listentopics.split(',');
						for ( var i = 0; i < topics.length; i++) {
							$elem.subscribe(topics[i], loadHandler, options);
						}
					}

					//publishing not triggering to prevent event propagation issues
			    	var divTopic = '_s2j_div_load_' + options.id;
		    		$elem.subscribe(divTopic, loadHandler);
					if(options.bindon) {
						var $bindElement = $('#'+options.bindon);
						if(options.events) {
							var events = options.events.split(',');
							for ( var i = 0; i < events.length; i++) {
								$bindElement.publishOnEvent(events[i], divTopic);
							}
						}
						else {
							$bindElement.publishOnEvent('click', divTopic);
						}
					}
					else {
						$elem.publish(divTopic,options);	
					}
					
				}
				else if(options.formids) {
					options.targets = options.id;
			    	var formTopic = '_s2j_form_topic_' + options.id;
					this.formsubmit($elem, options, formTopic);
					$elem.publish(formTopic, options);
				}
			}
			else {
					
					var divEffectTopic = '_s2j_div_effect_' + options.id;
					if(options.id && options.effect) {
						var effect = {};
						effect.targets = options.id;
						effect.effect = options.effect;
						effect.effectoptions = options.effectoptions;
						effect.effectduration = options.effectduration;
			    		$elem.subscribe(divEffectTopic, effectHandler, effect);
					}
	
	
					if(options.events || options.bindon) {
	
						var $bindElement = $elem;
						var eventsStr = 'click';
						if(options.bindon)
							$bindElement = $('#'+options.bindon);
						if(options.events) { eventsStr = options.events; }
	
						var events = eventsStr.split(',');
						for ( var i = 0; i < events.length; i++) {
							var event = events[i];
							if(options.onbeforetopics) {
								var btopics = options.onbeforetopics.split(',');
								for ( var i = 0; i < btopics.length; i++) {
									$bindElement.publishOnEvent(event, btopics[i]);
								}
							}
							$bindElement.publishOnEvent(event, divEffectTopic);
							if(options.oncompletetopics) {
								var ctopics = options.oncompletetopics.split(',');
								for ( var i = 0; i < ctopics.length; i++) {
									$bindElement.publishOnEvent(event, ctopics[i]);
								}
							}
						}
					}
					else {
						if(options.onbeforetopics) {
							var btopics = options.onbeforetopics.split(',');
							for ( var i = 0; i < btopics.length; i++) {
								$bindElement.publish(btopics[i], $elem);
							}
						}
						$elem.publish(divEffectTopic, $elem);	
						if(options.oncompletetopics) {
							var ctopics = options.oncompletetopics.split(',');
							for ( var i = 0; i < ctopics.length; i++) {
								$bindElement.publish(ctopics[i], $elem);
							}
						}
					}
					
					if(options.resizable) {
	
				        var ros = options.resizableoptions;
				        var ro = window[ros];
				        if (!ro) {
				        	ro = eval ("( " + ros + " )" );
				        }
				        else {
				        	ro = {};
				        }
				        ro.start = pubTops($elem, options.onalwaystopics, options.resizableonstarttopics);
				        ro.stop = pubTops($elem, options.onalwaystopics, options.resizableonstoptopics);
				        ro.resize = pubTops($elem, options.onalwaystopics, options.resizableonresizetopics);
						$elem.resizable(ro);
					}
				}

			if(options.draggable) {
				
		        var daos = options.draggableoptions;
		        var dao = window[daos];
		        if (!dao) {
		        	dao = eval ("( " + daos + " )" );
		        }
		        else {
		        	dao = {};
		        }
		        dao.start = pubTops($elem, options.onalwaystopics, options.draggableonstarttopics);
		        dao.stop = pubTops($elem, options.onalwaystopics, options.draggableonstoptopics);
		        dao.drap = pubTops($elem, options.onalwaystopics, options.draggableondragtopics);
				$elem.draggable(dao);
			}
			
			if(options.droppable) {

		        var doos = options.droppableoptions;
		        var doo = window[doos];
		        if (!doo) {
		        	doo = eval ("( " + doos + " )" );
		        }
		        else {
		        	doo = {};
		        }
		        doo.activate = pubTops($elem, options.onalwaystopics, options.droppableonactivatetopics);
		        doo.deactivate = pubTops($elem, options.onalwaystopics, options.droppableondeactivatetopics);
		        doo.start = pubTops($elem, options.onalwaystopics, options.droppableonstarttopics);
		        doo.stop = pubTops($elem, options.onalwaystopics, options.droppableonstoptopics);
		        doo.drop = pubTops($elem, options.onalwaystopics, options.droppableondroptopics);
				$elem.droppable(doo);
			}
			
			if(options.selectable) {

		        var seos = options.selectableoptions;
		        var seo = window[seos];
		        if (!seo) {
		        	seo = eval ("( " + seos + " )" );
		        }
		        else {
		        	seo = {};
		        }
		        seo.selected = pubTops($elem, options.onalwaystopics, options.selectableonselectedtopics);
		        seo.selecting = pubTops($elem, options.onalwaystopics, options.selectableonselectingtopics);
		        seo.start = pubTops($elem, options.onalwaystopics, options.selectableonstarttopics);
		        seo.stop = pubTops($elem, options.onalwaystopics, options.selectableonstoptopics);
		        seo.unselected = pubTops($elem, options.onalwaystopics, options.selectableonunselectedtopics);
		        seo.unselecting = pubTops($elem, options.onalwaystopics, options.selectableonunselectingTtopics);
				$elem.selectable(seo);
			}

			if(options.sortable) {

		        var soos = options.sortableoptions;
		        var soo = window[soos];
		        if (!soo) {
		        	soo = eval ("( " + soos + " )" );
		        }
		        else {
		        	soo = {};
		        }
		        soo.beforeStop = pubTops($elem, options.onalwaystopics, options.sortableonbeforestoptopics);
		        soo.stop = pubTops($elem, options.onalwaystopics, options.sortableonstoptopics);
		        soo.start = pubTops($elem, options.onalwaystopics, options.sortableonstarttopics);
		        soo.sort = pubTops($elem, options.onalwaystopics, options.sortableonsorttopics);
		        soo.activate = pubTops($elem, options.onalwaystopics, options.sortableonactivatetopics);
		        soo.deactivate = pubTops($elem, options.onalwaystopics, options.sortableondeactivatetopics);
		        soo.over = pubTops($elem, options.onalwaystopics, options.sortableonovertopics);
		        soo.out = pubTops($elem, options.onalwaystopics, options.sortableonouttopics);
		        soo.remove = pubTops($elem, options.onalwaystopics, options.sortableonremovetopics);
		        soo.receive = pubTops($elem, options.onalwaystopics, options.sortableonreceivetopics);
		        soo.change = pubTops($elem, options.onalwaystopics, options.sortableonchangetopics);
		        soo.update = pubTops($elem, options.onalwaystopics, options.sortableonupdatetopics);
				$elem.sortable(soo);
			}

		},
		
		anchor: function($elem, options){
			
			var loadHandler = '_s2j_container_load';

			if(options.formids) {
		    	var formTopic = '_s2j_form_topic_' + options.id;
				this.formsubmit($elem, options, formTopic);
				$elem.publishOnEvent('click', formTopic);
			}
			else {
				this.action($elem, options, loadHandler, 'a');
			}
		},
		
		select: function($elem, options){

			var loadHandler = '_s2j_container_load';
	    	var selectTopic = '_s2j_topic_load_' + options.id;

			if(options.href && options.href != '#') {

				if(options.reloadtopics) {			  
					var topics = options.reloadtopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						$elem.subscribe(topics[i], loadHandler, options);
					}
				}
				if(options.listentopics) {			  
					var topics = options.listentopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						$elem.subscribe(topics[i], loadHandler, options);
					}
				}
				
	    		$elem.subscribe(selectTopic, loadHandler);
	    		$elem.publish(selectTopic,options);				
			}			
		},

		button: function($elem, options){
	    	var formTopic = '_s2j_form_topic_' + options.id;
			
			if(options.formids != undefined) {
				this.formsubmit($elem, options, formTopic);
			}
			else {
				var $closestform = $elem.closest("form");
				if($closestform != undefined) {
					var formid = $closestform.attr("id");
					if(formid != undefined) {
						options.formids = formid;
						this.formsubmit($elem, options, formTopic);
					}
					else {
						var randomid = 's2jqform'+Math.floor(Math.random()*10000);
						$closestform.attr('id', randomid);
						options.formids = randomid;
						this.formsubmit($elem, options, formTopic);
					}
				}
				else {
					this.action($elem, options, '_s2j_container_load', 'a');
				}
			}
			$elem.publishOnEvent('click', formTopic);
			$elem.removeAttr('name');
		},
		formsubmit: function($elem, options, topic){
			var formHandler = '_s2j_form_submit';
	    	
			if(options.reloadtopics) {			  
				var topics = options.reloadtopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					$elem.subscribe(topics[i], formHandler, options);
				}
			}
			if(options.listentopics) {			  
				var topics = options.listentopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					$elem.subscribe(topics[i], formHandler, options);
				}
			}

			$elem.subscribe(topic, formHandler, options);
	    	if(options.targets) {  
				var targets = options.targets.split(',');
				for ( var i = 0; i < targets.length; i++) {
					var target = targets[i];
	    			$('#' + target).subscribe(topic, '_s2j_effects', options);
	    	    	if(ajaxhistory) {
						var params = {};
						params.target = target;
						params.topic = topic;
	    				$elem.bind('click', params, function(event){
	    					$.struts2_jquery.historyelements[ event.data.target ] = event.data.topic;
	    	    		    $.bbq.pushState( $.struts2_jquery.historyelements );
	    	    		    return false;
	    		    	});
	    	    	}
				}
			}
		},
		
		dialog: function($elem, options){
			
			var params = {};
			params.bgiframe = true;
			params.autoOpen = options.autoopen;
			params.modal = options.modal;
			params.resizable = options.resizable;
			params.draggable = options.draggable;
			params.position = options.position;
			params.zIndex = options.zindex;
			params.backgroundColor = options.backgroundcolor;
			params.hide = options.hide;
			params.show = options.show;
			if(options.height) { params.height = options.height; }
			if(options.width) { params.width = options.width; }
			if(options.maxheight) { params.maxHeight = options.maxheight; }
			if(options.maxwidth) { params.maxWidth = options.maxwidth; }
			if(options.minheight) { params.minHeight = options.minheight; }
			if(options.minwidth) { params.minWidth = options.minwidth; }
			
			params.title = options.title;
			
			if(options.buttons) {
		        var buttonsStr = options.buttons;
		        var buttons = window[buttonsStr];
		        if (!buttons) {
		        	params.buttons = eval ("( " + buttonsStr + " )" );
		        }
			}
			
			params.open = function(event, ui) {
				var data = {};
				data.event = event;
				data.ui = ui;

				if(options.href && options.href != '#') {
					var loadHandler = '_s2j_container_load';
			    	var divTopic = '_s2j_topic_load_' + options.id;
		    		$elem.subscribe(divTopic, loadHandler);
		    		$elem.publish(divTopic,options);				
				}			

				if(options.onalwaystopics) {			  
					var topics = options.onalwaystopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						$elem.publish(topics[i], $elem, data);
					}
				}
				if(options.onbeforetopics) {			  
					var topics = options.onbeforetopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						$elem.publish(topics[i], $elem, data);
					}
				}
				if(options.onopentopics) {			  
					var topics = options.onopentopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						$elem.publish(topics[i], $elem, data);
					}
				}
			};
			params.close = pubTops($elem, options.onalwaystopics, options.onclosetopics);
			params.focus = pubTops($elem, options.onalwaystopics, options.onfocustopics);
			params.beforeclose = pubTops($elem, options.onalwaystopics, options.onbeforeclosetopics);
			params.drag = pubTops($elem, options.onalwaystopics, options.onchangetopics);
			$elem.dialog(params);
		},
		
		tabbedpanel: function($elem, options){
			
	    	//instantiate the tabbed pane
			if(!options) { options = {}};
			var para = {};
			
			if(options.disabledtabs && options.disabledtabs != 'false') {
		        var disabledtabsStr = options.disabledtabs;
		        var disabledtabs = window[disabledtabsStr];
		        if (!disabledtabs) {
		        	para.disabled = eval("( " + disabledtabsStr + " )" );
		        }
			}
			if(options.cache)	para.cache = true;
			if(options.animate)	para.fx = { opacity: 'toggle' };
			if(options.cookie)	para.cookie = { expires: 30 };
			if(options.collapsible)	para.collapsible = true;
			if(options.openonmouseover)	para.event = 'mouseover';
			if(options.orientation)	para.orientation = options.orientation;
			if(options.spinner)	para.spinner = options.spinner;
			if(options.selectedtab)	para.selected = parseInt(options.selectedtab);
			if(options.oncompletetopics) para.ajaxOptions = { dataType:'html', complete:pubCom(options.id, options.onalwaystopics, options.oncompletetopics, null, null, {}) };
			else para.ajaxOptions = { dataType:'html' };
//			para.ajaxOptions.complete = pubCom(options.id, options.onalwaystopics, options.oncompletetopics, null, null, {});
			if(options.onbeforetopics) para.show = pubTops($elem, options.onalwaystopics, options.onbeforetopics);
			if(options.onchangetopics) para.select = pubTops($elem, options.onalwaystopics, options.onchangetopics);
			if(options.onenabletopics) para.enable = pubTops($elem, options.onalwaystopics, options.onenabletopics);
			if(options.ondisabletopics) para.disable = pubTops($elem, options.onalwaystopics, options.ondisabletopics);
			if(options.onaddtopics) para.add = pubTops($elem, options.onalwaystopics, options.onaddtopics);
			if(options.onremovetopics) para.remove = pubTops($elem, options.onalwaystopics, options.onremovetopics);
			
			$.each($('#'+options.id+' ul div'), function() {
				$(this).appendTo($elem);
			});

	    	$elem.tabs(para);

	    	// History and Bookmarking for Tabs
    		if(ajaxhistory) {
				var params = {};
				params.id = options.id;
		    	$elem.find('ul.ui-tabs-nav a').bind('click', params, function(event){
	    		    var idx = $('#'+event.data.id).tabs('option', 'selected');
	    		    $.struts2_jquery.historyelements[ event.data.id ] = idx;
	    		    $.bbq.pushState( $.struts2_jquery.historyelements );
	    		    return false;
		    	});
	    	
		    	$(window).bind('hashchange', params, function(event) {
						// In jQuery 1.4, you should use e.getState() instead of $.bbq.getState().
						var idx = $.bbq.getState( event.data.id, true ) || 0;
							$('#'+event.data.id).tabs( 'select', idx );
	    		});
	    	}
		},
		
		datepicker: function($elem, options) {
			
			var params = {};
			
			if(options) {
				
				var oat = options.onalwaystopics;
				
				if(options.onbeforetopics) {  
					var obt = options.onbeforetopics.split(',');
					params.beforeShow = function(input){
						var $input = $(input);
						for ( var i = 0; i < obt.length; i++) {
							$input.publish(obt[i], $input);
						}

						if(oat) {  
							var topics = oat.split(',');
							for ( var i = 0; i < topics.length; i++) {
								$input.publish(topics[i], $input);
							}
						}
					};
				}
				
				if(options.onbeforeshowdaytopics) {  
					var obsdt = options.onbeforeshowdaytopics.split(',');
					params.beforeShowDay = function(date){
						var $date = $(date);
						for ( var i = 0; i < obsdt.length; i++) {
							$elem.publish(obsdt[i], $date);
						}

						if(oat) {  
							var topics = oat.split(',');
							for ( var i = 0; i < topics.length; i++) {
								$elem.publish(topics[i], $date);
							}
						}
					};
				}

				if(options.onchangemonthyeartopics) {  
					var ocmyt = options.onchangemonthyeartopics.split(',');
					params.onChangeMonthYear = function(year, month, inst){
						var data = {};
						data.year = year;
						data.month = month;
						data.inst = inst;
						var $inst = $(inst);
						for ( var i = 0; i < ocmyt.length; i++) {
							$inst.publish(ocmyt[i],$inst, data);
						}

						if(oat) {  
							var topics = oat.split(',');
							for ( var i = 0; i < topics.length; i++) {
								$inst.publish(topics[i],$inst, data);
							}
						}
					};
				}

				if(options.onchangetopics) {  
					var ocat = options.onchangetopics.split(',');
					params.onSelect = function(dateText, inst){
						var $inst = $(inst);
						var data = {};
						data.dateText = dateText;
						for ( var i = 0; i < ocat.length; i++) {
							$inst.publish(ocat[i], $inst, data);
						}

						if(oat) {  
							var topics = oat.split(',');
							for ( var i = 0; i < topics.length; i++) {
								$inst.publish(topics[i], $inst, data);
							}
						}
					};
				}
				
				if(options.oncompletetopics) {  
					var ocot = options.oncompletetopics.split(',');
					params.onClose = function(dateText, inst){
						var $inst = $(inst);
						var data = {};
						data.dateText = dateText;
						for ( var i = 0; i < ocot.length; i++) {
							$inst.publish(ocot[i], $inst, data);
						}

						if(oat) {  
							var topics = oat.split(',');
							for ( var i = 0; i < topics.length; i++) {
								$inst.publish(topics[i], $inst, data);
							}
						}
					};
				}
				
				if(options.changemonth)	params.changeMonth = true;
				if(options.changeyear)	params.changeYear = true;
				if(options.showbuttonpanel)	params.showButtonPanel = true;
				if(options.buttonimageonly)	params.buttonImageOnly = true;
				params.dateFormat = options.displayformat;
				params.buttonImage = options.buttonimage;
				params.showOn = options.showon;
				params.buttonText = options.buttontext;
				params.showAnim = options.showanim;
				params.firstDay = options.firstday;
				params.yearRange = options.yearrange;
				params.duration = options.duration;
				params.appendText = options.appendtext;
				params.maxDate = options.maxdate;
				params.minDate = options.mindate;
		        
				if(options.numberofmonths) {
			        var numberofmonthsStr = options.numberofmonths;
			        var numberofmonths = window[numberofmonthsStr];
			        if (!numberofmonths) {
			        	params.numberOfMonths = eval ("( " + numberofmonthsStr + " )" );
			        }
				}
				
				if(options.showoptions) {
			        var userOptionsStr = options.showoptions;
			        var userOptions = window[userOptionsStr];
			        if (!userOptions) {
			        	params.showOptions = eval ("( " + userOptionsStr + " )" );
			        }
				}
			}
			
			$elem.datepicker(params);
			
		    if(options.year && options.month && options.day) {
		    	$elem.val($.datepicker.formatDate(options.displayformat, new Date(options.year, options.month, options.day)));
		    }
		    if(options.zindex) {
		    	$('#ui-datepicker-div').css("z-index", options.zindex); 
		    }
		},
		slider: function($elem, options) {
			
			var params = {};
			if(options) {
				
				params.start = pubTops($elem, options.onalwaystopics, options.onbeforetopics);
				params.change = pubTops($elem, options.onalwaystopics, options.onchangetopics);
				params.stop = pubTops($elem, options.onalwaystopics, options.oncompletetopics);
				
				params.slide = function(event, ui){
					 $('#'+options.hiddenid).val(ui.value);
					 if (options.displayvalueelement) {
					 	$('#'+options.displayvalueelement).html(ui.value);
					 }
				};
				
				if(options.animate)	params.animate = true;
				var value = options.value;
				if(value > 0) params.value = value;
				else params.value = 0;
				if(options.max)	params.max = options.max;
				if(options.min)	params.min = options.min;
				if(options.orientation)	params.orientation = options.orientation;
				if(options.step) params.step = options.step;

				if(options.range) {
					if(options.range == 'true')	{
						params.range = true;
					}
					else {
						params.range = options.range;
					}
				}
			}
			
			$elem.slider(params);
		},
		progressbar: function($elem, options) {
			
			var params = {};
			if(options) {
				
				params.change = pubTops($elem, options.onalwaystopics, options.onchangetopics);
				
				var value = options.value;
				if(value > 0) params.value = value;
				else params.value = 0;
			}
			$elem.progressbar(params);
		},
		accordion: function($elem, options) {
			
			var params = {};
			var active = true;
			if(options) {

				if(options.fillspace)	params.fillSpace = true;
				if(options.collapsible)	params.collapsible = true;
				if(options.clearstyle)	params.clearStyle = true;
				if(options.autoheight)	params.autoHeight = true;
				if(options.event)	params.event = options.event;
				if(options.header)	params.header = options.header;
				else				params.header = 'h3';
				if(options.animated)
				{
					if(options.animated == 'true') params.animated = true;
					else if(options.animated == false) params.animated = false;
					else params.animated = options.animated;
				}
				
				if(options.active)
				{
					if(options.active == 'true') { params.active = true; }
					else if(options.active == 'false') { params.active = false; active = false; }
					else { params.active = parseInt(options.active); }
				}
				
				var onAlwaysTopics = options.onalwaystopics;
				params.changestart = function(event, ui) {
					if(options.href)
					{
						if ( typeof $(ui.newHeader).find('a').attr('paramkeys') != "undefined" )
						{
						    var keys = $(ui.newHeader).find('a').attr('paramkeys').split(',');
						    var values = $(ui.newHeader).find('a').attr('paramvalues').split(',');
							var valueparams = {};
							jQuery.each(keys, function(i, val) {
								valueparams[val] = values[i];
			    			});
							ui.newContent.load(options.href,valueparams,function() {});
						 }
					}			
					if(options.onbeforetopics) {  
						var onBeforeTopics = options.onbeforetopics.split(',');
								var data = {};
								data.event = event;
								data.ui = ui;
							for ( var i = 0; i < onBeforeTopics.length; i++) {
								$elem.publish(onBeforeTopics[i], $elem, data);
							}

							if(onAlwaysTopics) {  
								var topics = onAlwaysTopics.split(',');
								for ( var i = 0; i < topics.length; i++) {
									$elem.publish(topics[i], $elem, data);
								}
							}
					}
				};
				
				params.change = pubTops($elem, options.onalwaystopics, options.onchangetopics);
			}
			$elem.accordion(params);
			if(options.href && active == true)
			{
				var aktiv = $("#"+options.id+" li "+params.header).filter('.ui-accordion-header').filter('.ui-state-active').find('a');
				if ( typeof $(aktiv).attr('paramkeys') != "undefined" )
				{
					var keys = $(aktiv).attr('paramkeys').split(',');
					var values = $(aktiv).attr('paramvalues').split(',');
					var valueparams = {};
					jQuery.each(keys, function(i, val) {
						valueparams[val] = values[i];
			    	});
					$("#"+options.id+" li div").filter('.ui-accordion-content-active').load(options.href,valueparams,function() {});
				}
			}
		},
		grid: function($elem, options) {
			var params = {}; 
			$.extend(params, options);
			if(options.onselectrow || options.editurl) {  
				params.onSelectRow = function(id) {
					if(options.editurl) {
					    if(id && id!==$.struts2_jquery.lastselectedrow) {
					    	$elem.restoreRow($.struts2_jquery.lastselectedrow);
					    	$elem.editRow(id,true);
					    	$.struts2_jquery.lastselectedrow=id;
					    }
					}
					if(options.onselectrow) {
						var data = {};
						data.id = id;
						var osr = options.onselectrow.split(',');
						for ( var i = 0; i < osr.length; i++) {
							$elem.publish(osr[i], $elem, data);
						}
					}
				};
			}
			$elem.jqGrid(params);
		}
	};		
		
	/** Container logic */
	//Register handler to load a container
	$.subscribeHandler('_s2j_container_load', function(event, data) {

		var container = $(event.target);
		var tagname = $(event.target)[0].tagName.toLowerCase();
		var options = {};
		if(data)
			$.extend(options, data);
		if(event.data)
			$.extend(options, event.data);
		
		var isDisabled = false;
		isDisabled = options.disabled == null ? isDisabled : options.disabled;
		isDisabled = container.attr('disabled') == null ? isDisabled : container.attr('disabled');
		if(event.originalEvent) {	//means that container load is being triggered by other action (link button/link click) need to see if that button/link is disabled
			isDisabled = $(event.originalEvent.currentTarget).attr("disabled") == null ? isDisabled : $(event.originalEvent.currentTarget).attr("disabled");
		}
							
		if(isDisabled != true && isDisabled != 'true') {
			
			//Show indicator element (if any)
			if(options) {
	
				var indicatorId = options.indicatorid;
				if(indicatorId) { $('#' + indicatorId).show(); }
				if($.struts2_jquery.defaultIndicator != '') { $('#' + $.struts2_jquery.defaultIndicator).show(); }
		
				var onAlwaysTopics = options.onalwaystopics;
				
		    	//publish all 'before' and 'always' topics
				if(onAlwaysTopics) {  
					var topics = onAlwaysTopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						container.publish(topics[i], container);
					}
				}
				
				if(options.onbeforetopics) {  
					var topics = options.onbeforetopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						container.publish(topics[i], container);
					}
				}
		    	
		    	//Set pre-loading text (if any)
				if(options.loadingtext) { container.html(options.loadingtext); }
				
				var modus = 'html';
				if(options.type) {
					if(options.type == 'text')
						modus = 'value';
					else if(options.type == 'select')
						modus = 'select';
				}
				
				var params = {};
				
				params.success = pubSuc(event.target, onAlwaysTopics, options.onsuccesstopics, indicatorId, modus, options);
				params.complete = pubCom(event.target, onAlwaysTopics, options.oncompletetopics, options.targets, indicatorId, options);
				params.error = pubErr(event.target, onAlwaysTopics, options.onerrortopics, options.errortext);
				
				//load container using ajax
				if(options.href) {
					
					params.type = "POST";
					params.url = options.href;
					if(options.hrefparameter) {
						params.data = options.hrefparameter;
					}
					
					if(options.datatype) {
						params.dataType = options.datatype;
					}
					else {
						params.dataType = 'html';
					}
					
					if(!params.data) { params.data = {}; }	//fix 'issue' wherein IIS will reject post without data
					
					//Execute Ajax Request
					$.ajax(params);
				}
			}
		}
	});

	/** Form logic */	
	//Handler to submit a form with jquery.form.js plugin 
	$.subscribeHandler('_s2j_form_submit', function(event, data) {
		var container = $(event.target);
		
		//need to also make use of original attributes registered with the container (such as onCompleteTopics)
		var options = {};
		if(data)
			$.extend(options, data);
		if(event.data)
			$.extend(options, event.data);
		
		var params = {};
		if(options.href && options.href != '#')	params.url = options.href;
		if(options.clearform && options.clearform == 'true')	params.clearForm = true;
		if(options.iframe && options.iframe == 'true')	params.iframe = true;
		if(options.resetform && options.resetform == 'true')	params.resetForm = true;
		if(options.timeout)	params.timeout = parseInt(options.timeout);
		if(options.datatype)	params.dataType = options.datatype; else params.dataType = null;
		
		params.target = '';
		if(options.targets) {
		var targets = options.targets.split(',');
			for ( var i = 0; i < targets.length; i++) {
				var target = targets[i];
				if(params.target == '') {
					params.target = '#' + target;
	    		} else {
	    			params.target = params.target +',#' + target;
	    		}
				
		    	//Set pre-loading text (if any)
				if(options.loadingtext) { $('#' + target).html(options.loadingtext); }
			}
		}

		if(options.indicatorid) { $('#' + options.indicatorid).show(); }
		if($.struts2_jquery.defaultIndicator != '') { $('#' + $.struts2_jquery.defaultIndicator).show(); }

		params.beforeSubmit = function (formData, form, formoptions) {
			
			var orginal = {};
			orginal.formData = formData;
			orginal.form = form;
			orginal.options = formoptions;

			if(options.onalwaystopics) {  
				var topics = options.onalwaystopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					container.publish(topics[i], container, orginal);
				}
			}
			
			if(options.onbeforetopics) {  
				var topics = options.onbeforetopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					container.publish(topics[i], container, orginal);
				}
			}
		}
   	
	    				
		params.success = pubSuc(event.target, options.onalwaystopics, options.onsuccesstopics, options.indicatorid, 'form', options);
		params.complete = pubCom(event.target, options.onalwaystopics, options.oncompletetopics, options.targets, options.indicatorid, options);
		params.error = pubErr(event.target, options.onalwaystopics, options.onerrortopics, options.errortext);
		
		var forms = options.formids.split(',');
		for ( var i = 0; i < forms.length; i++) {
	       $('#'+forms).ajaxSubmit(params);
		}
        
        return false;
	});
	
	/** Effects */	
    //Register handler for effects
    $.subscribeHandler('_s2j_effects', function(event, data) {
		var options = {};
		$.extend(options,event.data);
		if(options.targets || options.effect) {
			var eo = {};
			var duration = 2000;
			if(options.effectoptions) {
		        var eos = options.effectoptions;
		        eo = window[eos];
		        if (!eo) {
		        	eo = eval ("( " + eos + " )" );
		        }
			}
			if(options.effectduration) {
				duration = parseInt(options.effectduration);
			}
	        $("#"+options.targets).effect(options.effect,eo,duration);
		}
    });
	
	/** Publish UI topics */	
	function pubTops($elem, always, topics) {

		if(topics)	{
			var onTopics = topics.split(',');
			return function(event, ui){
					var data = {};
					data.event = event;
					data.ui = ui;
				for ( var i = 0; i < onTopics.length; i++) {
					$elem.publish(onTopics[i], $elem, data);
				}

				if(always) {  
					var alwaysTopics = always.split(',');
					for ( var i = 0; i < alwaysTopics.length; i++) {
						$elem.publish(alwaysTopics[i], $elem, data);
					}
				}
			};
		}
		else { 
			return null;
		}
	}
	
	/** Publish Success topics */	
	function pubSuc(cid, always, stopics, indi, modus, options) {
		var container = $(cid);
			return function (data, textStatus) {
			var orginal = {};
			orginal.status = textStatus;
			
			if(indi) { $('#' + indi).hide(); }
			if(modus == 'html')
				container.html(data);
			else if(modus == 'value')
				container.val(data);
			else if(modus == 'select')
			{
				container[0].length = 0;
                
				if(typeof(data) == "object" || $.isArray(data)) {
					var i = -1;
					var eopt = document.createElement("option");
					if(options.headerkey && options.headervalue) {
						var option = eopt.cloneNode(true);
						option.value = options.headerkey;
						option.text = options.headervalue;
						
						if(options.value == options.headervalue) {
							option.selected = true;
						}
						
						container[0].options[++i] = option;
					}
					
					if(options.emptyoption) {
						container[0].options[++i] = eopt.cloneNode(true);
					}
					
					var o = 0;
				    $.each(data[options.list], function(j, val) {
						var option = eopt.cloneNode(true);
						if(data[options.list][o] == undefined) {
							option.value = j;
							option.text = val;
						}
						else {
							if(options.listkey != undefined && options.listvalue != undefined) {
								option.value = val[options.listkey];
								option.text = val[options.listvalue];
							}
							else {
								option.value = data[options.list][o];
								option.text = data[options.list][o];
							}
						}

						if(options.value == option.value) {
							option.selected = true;
						}
						
						container[0].options[++i] = option;
						o++;
				    });
				}
			}
					
			if(stopics) {			  
				var topics = stopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					container.publish(topics[i], container, orginal);
				}
			}
			if(always) {
				var topics = always.split(',');  
				for ( var i = 0; i < topics.length; i++) {
					container.publish(topics[i], container, orginal);
				}
			}
			//Use BBQ for Ajaxhistory
	    	if(ajaxhistory) {
	    		var ahparams = {};
	    		ahparams.cid = cid;
	    		ahparams.options = options;
	    		
    			$(window).bind('hashchange', ahparams, function(event) {
    				var topic = $.bbq.getState(event.data.cid.id) || '';
    				if ( event.type === topic || topic == '' || topic == $.struts2_jquery.lasttopic ) { return; }
    				$.struts2_jquery.lasttopic = topic;
    				$.publish(topic,event.data.options);
    			});
    		}
		};
	}

	/** Publish Complete topics */	
	function pubCom(cid, always, ctopics, targets, indi, options) {
		var container = $(cid);
		return function (request, status) {
			var orginal = {};
			orginal.request = request;
			orginal.status = status;

			var orginal = {};
			orginal.request = request;
			orginal.status = status;

			if(indi) { $('#' + indi).hide(); }
			if($.struts2_jquery.defaultIndicator != '') { $('#' + $.struts2_jquery.defaultIndicator).hide(); }
			
			if(ctopics) {			  
				var topics = ctopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					container.publish(topics[i], container, orginal);
				}
			}
			if(always) {  
				var topics = always.split(',');
				for ( var i = 0; i < topics.length; i++) {
					container.publish(topics[i], container, orginal);
				}
			}
			
			var ec = targets;
			if(!ec)
				ec = options.id;
			if(ec) {
				var targetArray = ec.split(',');
				var divEffectTopic = '_sj_div_effect_';
				for ( var i = 0; i < targetArray.length; i++) {
					$element = $('#'+targetArray[i]);
					$element.publish(divEffectTopic+targetArray[i], $element);
				}
			}
			
			if(options.resizable) {

		        var ros = options.resizableoptions;
		        var ro = window[ros];
		        if (!ro) {
		        	ro = eval ("( " + ros + " )" );
		        }
		        else {
		        	ro = {};
		        }
		        ro.start = pubTops(container, options.onalwaystopics, options.resizableonstarttopics);
		        ro.stop = pubTops(container, options.onalwaystopics, options.resizableonstoptopics);
		        ro.resize = pubTops(container, options.onalwaystopics, options.resizableonresizetopics);
		        container.resizable(ro);
			}
		};
	}

	/** Publish Error topics */	
	function pubErr(cid, always, etopics, etext) {
		var container = $(cid);
		if(etopics || etext)	{
			return function (request, status, error) {
				var orginal = {};
				orginal.request = request;
				orginal.status = status;
				orginal.error = error;

				if(etext) { container.html(etext); }
				
				if(etopics || errortext)	{
					var topics = etopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						container.publish(topics[i], container, orginal);
					}
				}

				if(always) {  
					var topics = always.split(',');
					for ( var i = 0; i < topics.length; i++) {
						container.publish(topics[i], container, orginal);
					}
				}
			};
		}
		else { 
			return null;
		}
	}
})(jQuery);