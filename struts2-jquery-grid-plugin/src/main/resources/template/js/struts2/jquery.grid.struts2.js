/*
 * jquery.grid.struts2.js
 *
 * Integration of jqGrid with struts 2 
 *
 * Requires use of jquery.struts2.js
 *
 * Copyright (c) 2010 Johannes Geppert http://www.jgeppert.com
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 */

/*global $, jQuery, window,  s2jlog, publishTopic, pubTops, pubCom, pubErr, escId  */
/*jslint evil: true */

( function($) {
	
	/**
	 * Bind jqGrid to Struts2 Component
	 */
	$.struts2_jquery_grid = {

	lastselectedrow :'',

	grid : function($elem, options) {
		s2jlog('grid for : '+options.id);
		$.require("i18n/grid.locale-"+this.gridLocal+".js", function() {
			$.jgrid.no_legacy_api = true;
			$.jgrid.useJSON = true;
		});
		if (!$.struts2_jquery.loadAtOnce) {
			$.require(
					[
					 "js/base/jquery.ui.widget"+this.minSuffix+".js",
					 "js/base/jquery.ui.mouse"+this.minSuffix+".js",
					 "js/base/jquery.ui.position"+this.minSuffix+".js",
					 "js/base/jquery.ui.button"+this.minSuffix+".js",
					 "js/base/jquery.ui.draggable"+this.minSuffix+".js",
					 "js/base/jquery.ui.droppable"+this.minSuffix+".js",
					 "js/base/jquery.ui.sortable"+this.minSuffix+".js",
					 "js/base/jquery.ui.selectable"+this.minSuffix+".js",
					 "js/base/jquery.ui.resizable"+this.minSuffix+".js",
					 "js/base/jquery.bgiframe"+this.minSuffix+".js",
					 "js/base/jquery.effects.core"+this.minSuffix+".js",
					 "js/base/jquery.effects.scale"+this.minSuffix+".js",
					 "js/base/jquery.effects.drop"+this.minSuffix+".js",
					 "js/base/jquery.ui.dialog"+this.minSuffix+".js",
					 "js/plugins/jquery.jqGrid.js"
					 ]);
		}
		else {
			$.require("js/plugins/jquery.jqGrid.js");
		}
		$.requireCss("themes/ui.jqgrid.css");
		var params = {};
		$.extend(params, options);
		if (options.onselectrowtopics || options.editurl) {
			params.onSelectRow = function(id) {
				var data = {};
				data.id = id;

				publishTopic($elem, options.onalwaystopics, data);
				publishTopic($elem, options.onselectrowtopics, data);
				if (options.editurl && options.editinline === true) {
					if (id && id !== this.lastselectedrow) {
						$elem.jqGrid('restoreRow', this.lastselectedrow);
						$elem.jqGrid('editRow', id, true);
						this.lastselectedrow = id;
					}
				}
			};
		}

		params.loadBeforeSend = function(xhr) {

			var orginal = {};
			orginal.xhr = xhr;

			publishTopic($elem, options.onalwaystopics, orginal);
			publishTopic($elem, options.onbeforetopics, orginal);
		};

		params.onPaging = function(pgButton) {

			var orginal = {};
			orginal.pgButton = pgButton;

			publishTopic($elem, options.onalwaystopics, orginal);
			publishTopic($elem, options.onpagingtopics, orginal);
		};

		params.onSortCol = function(index, iCol, sortorder) {

			var orginal = {};
			orginal.index = index;
			orginal.iCol = iCol;
			orginal.sortorder = sortorder;

			publishTopic($elem, options.onalwaystopics, orginal);
			publishTopic($elem, options.onsortcoltopics, orginal);
		};

		params.onCellSelect = function(rowid, iCol, cellcontent, e) {

			var orginal = {};
			orginal.rowid = rowid;
			orginal.iCol = iCol;
			orginal.cellcontent = cellcontent;
			orginal.e = e;

			publishTopic($elem, options.onalwaystopics, orginal);
			publishTopic($elem, options.oncellselecttopics, orginal);
		};

		params.gridComplete = function() {

			var orginal = {};

			publishTopic($elem, options.onalwaystopics, orginal);
			publishTopic($elem, options.ongridcompletetopics, orginal);
		};

		params.loadComplete = pubCom($elem, options.onalwaystopics, options.oncompletetopics, null, null, options);
		params.loadError = pubErr($elem, options.onalwaystopics, options.onerrortopics, options.errortext);

		if (options.subgrid) {
			params.subGrid = true;

			// gridview can't be true when using the subgrid feature
			params.gridview = false;
			params.subGridRowExpanded = function(subgrid_id, row_id) {
				var subgrid_table_id = subgrid_id + "_table";
				var subgrid = $(escId(subgrid_id));
				var subgridhtml = "<table id='" + subgrid_table_id + "' class='scroll'></table>";
				if (options.subgridoptions.pager && options.subgridoptions.pager != "") {
					subgridhtml = subgridhtml + "<div id='" + subgrid_id + "_pager'></div>";
					options.subgridoptions.pager = subgrid_id + "_pager";
				}
				if (options.subgridoptions.navigator && options.subgridoptions.navigator != "") {
					subgridhtml = subgridhtml + "<div id='" + subgrid_id + "_navigator'></div>";
					options.subgridoptions.navigator = subgrid_id + "_navigator";
				}

				subgrid.html(subgridhtml);

				if (options.subgridoptions.url) {
					var to = options.subgridoptions.url.indexOf('?');
					if (to > 0) { options.subgridoptions.url = options.subgridoptions.url.substring(0, to); }
					options.subgridoptions.url = options.subgridoptions.url + "?id=" + row_id;
				}
				$(escId(subgrid_table_id)).jqGrid(options.subgridoptions);
			};
		}
		else {
			params.gridview = true;
		}
		
		$elem.jqGrid(params);
		

		if (options.resizable) {
			var ros = options.resizableoptions;
			var ro = window[ros];
			if (!ro) {
				ro = eval("( " + ros + " )");
			}
			else {
				ro = {};
			}
			ro.start = pubTops($elem, options.onalwaystopics, options.resizableonstarttopics);
			ro.stop = pubTops($elem, options.onalwaystopics, options.resizableonstoptopics);
			ro.resize = pubTops($elem, options.onalwaystopics, options.resizableonresizetopics);
			$elem.jqGrid('gridResize', ro);
		}

		if (options.draggable && options.droppable) {
			s2jlog('drag and drop for grid : '+options.id);
			var daos = options.draggableoptions;
			var dao = window[daos];
			if (!dao) {
				dao = eval("( " + daos + " )");
			}
			else {
				dao = {};
			}
			dao.drap = pubTops($elem, options.onalwaystopics, options.draggableondragtopics);

			var doos = options.droppableoptions;
			var doo = window[doos];
			if (!doo) {
				doo = eval("( " + doos + " )");
			}
			else {
				doo = {};
			}
			doo.activate = pubTops($elem, options.onalwaystopics, options.droppableonactivatetopics);
			doo.deactivate = pubTops($elem, options.onalwaystopics, options.droppableondeactivatetopics);
			doo.start = pubTops($elem, options.onalwaystopics, options.droppableonstarttopics);
			doo.stop = pubTops($elem, options.onalwaystopics, options.droppableonstoptopics);

			var ddo = {};
			ddo.drag_opts = dao;
			ddo.drop_opts = doo;
			ddo.connectWith = options.connectWith;
			ddo.onstart = pubTops($elem, options.onalwaystopics, options.draggableonstarttopics);
			ddo.onstop = pubTops($elem, options.onalwaystopics, options.draggableonstoptopics);
			ddo.ondrop = pubTops($elem, options.onalwaystopics, options.droppableondroptopics);
			$elem.jqGrid('gridDnD', ddo);
		}

		if (options.sortable) {
			s2jlog('sortable : '+options.id);
			var soos = options.sortableoptions;
			var soo = window[soos];
			if (!soo) {
				soo = eval("( " + soos + " )");
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
			$elem.jqGrid('sortableRows', soo);
		}

		if (options.navigator) {
			var navparams = {};
			navparams.add = options.navigatoradd;
			navparams.del = options.navigatordel;
			navparams.edit = options.navigatoredit;
			navparams.refresh = options.navigatorrefresh;
			navparams.search = options.navigatorsearch;
			navparams.view = options.navigatorview;
			$elem.jqGrid('navGrid', escId(options.pager), navparams, options.navigatoreditoptions, options.navigatoraddoptions, options.navigatordeleteoptions, options.navigatorsearchoptions, options.navigatorviewoptions);
		}
		if (options.filter) {
			var fpara = {};
			if (options.filteroptions) { fpara = options.filteroptions; }
			$elem.jqGrid('filterToolbar', fpara);
		}
	}
	};
	
	// Extend it from orginal plugin
	$.extend($.struts2_jquery_grid, $.struts2_jquery);
})(jQuery);
