// Copyright (c) 2024, Frappe and contributors
// For license information, please see license.txt
// frappe.ui.form.on('Meeting', {
//     send_emails: function(frm){
//         if (frm.doc.status==="Planned"){
//             frappe.call({
//                 method: "meeting.meetin.doctype.meeting.ai.send_invitation_emails",
//                 args:{
//                     meeting: frm.doc.name
//                 }
//             })
//         }
//     }
//     });


// frappe.ui.form.on("Meeting Attendee", {
//     attendee : function(frm,cdt,cdn){
//         var attendee = frappe.model.get_doc(cdt,cdn);
//         if (attendee.attendee){
//             frappe.call({
//                 method: "meeting.meetin.doctype.meeting.meeting.get_full_name",
//                 args: {
//                     attendee: attendee.attendee
//                 },
//                 callback: function(r) {
//                     frappe.model.set_value(cdt, cdn, "full_name", r.message);
//                 }
//             });
//         } else{
//             frappe.model.set_value(cdt, cdn,"full_name", null );
//         }
//     }
// // 	refresh(frm) {

// // 	},
//  });

// frappe.ui.form.on('Meeting', {
//     send_emails: function(frm) {
//         if (frm.doc.status === "Planned") {
//             frappe.call({
//                 method: "meeting.meetin.doctype.meeting.ai.send_invitation_emails",
//                 args: {
//                     meeting: frm.doc.name
//                 }
//             }).then(response => {
//                 if (response.message) {
//                     frappe.msgprint(_("Invitation Sent"));
//                 }
//             }).catch(error => {
//                 frappe.msgprint(_("Error Sending Invitation: ") + error.message);
//             });
//         }
//     }
// });

// frappe.ui.form.on('Meeting Attendee', {
//     attendee: function(frm, cdt, cdn) {
//         if (frm && frm.doc && frm.doc.name) {
//             var attendee = frappe.model.get_doc(cdt, cdn);
//             if (attendee && attendee.attendee) {
//                 frappe.call({
//                     method: "meeting.meetin.doctype.meeting.meeting.get_full_name",
//                     args: {
//                         attendee: attendee.attendee
//                     },
//                     async: false,
//                     success: function(response) {
//                         if (response.message) {
//                             frappe.model.set_value(cdt, cdn, "full_name", response.message);
//                         }
//                     },
//                     fail: function(error) {
//                         frappe.model.set_value(cdt, cdn, "full_name", null);
//                     }
//                 });
//             } else {
//                 frappe.model.set_value(cdt, cdn, "full_name", null);
//             }
//         }
//     }
// });

// frappe.ui.form.on("Meeting", {
// 	send_emails: function(frm) {
// 		if(frm.doc.__islocal) {
// 					msgprint(__("Please save before Sending."));
// 					throw "Sending error";
// 				}
// 		else{
// 		if (frm.doc.status==="Planned") {
// 			frappe.call({
// 				method: "meeting.api.send_invitation_emails",
// 				args: {
// 					meeting: frm.doc.name
// 				},
// 					callback: function(r) {
// 							frm.clear_custom_buttons()
// 							frm.refresh()
// 						}
// 			});
// 		}
// 	}

// 	},
// 		send_minutes: function(frm) {
// 			if(frm.doc.__islocal) {
// 						msgprint(__("Please save before Sending."));
// 						throw "Sending error";
// 					}
// 		else{
// 			if (frm.doc.status==="In Progress") {
// 				frappe.call({
// 					method: "meeting.api.send_minutes",
// 					args: {
// 						meeting: frm.doc.name
// 					}
// 				});
// 			}
// 		}
// 		}
// });

// frappe.ui.form.on("Meeting Attendee", {
// 	attendee: function(frm, cdt, cdn) {
// 		var attendee = frappe.model.get_doc(cdt, cdn);
// 		if (attendee.attendee) {
// 			// if attendee, get full name
// 			frappe.call({
// 				method: "meeting.meetin.doctype.meeting.meeting.get_full_name",
// 				args: {
// 					attendee: attendee.attendee
// 				},
// 				callback: function(r) {
// 					frappe.model.set_value(cdt, cdn, "full_name", r.message);
// 				}
// 			});

// 		} else {
// 			// if no attendee, clear full name
// 			frappe.model.set_value(cdt, cdn, "full_name", null);
// 		}
//  	},
// });

frappe.ui.form.on("Meeting", {
	send_emails: function(frm) {
		if(frm.doc.__islocal) {
					msgprint(__("Please save before Sending."));
					throw "Sending error";
				}
		else{
		if (frm.doc.status==="Planned") {
			frappe.call({
				method: "meeting.api.send_invitation_emails",
				args: {
					meeting: frm.doc.name
				},
					callback: function(r) {
							frm.clear_custom_buttons()
							frm.refresh()
						}
			});
		}
	}

	},
		send_minutes: function(frm) {
			if(frm.doc.__islocal) {
						msgprint(__("Please save before Sending."));
						throw "Sending error";
					}
		else{
			if (frm.doc.status==="In Progress") {
				frappe.call({
					method: "meeting.api.send_minutes",
					args: {
						meeting: frm.doc.name
					}
				});
			}
		}
		}
});

frappe.ui.form.on("Meeting Attendee", {
	attendee: function(frm, cdt, cdn) {
		var attendee = frappe.model.get_doc(cdt, cdn);
		if (attendee.attendee) {
			// if attendee, get full name
			frappe.call({
				method: "meeting.meetin.doctype.meeting.meeting.get_full_name",
				args: {
					attendee: attendee.attendee
				},
				callback: function(r) {
					frappe.model.set_value(cdt, cdn, "full_name", r.message);
				}
			});

		} else {
			// if no attendee, clear full name
			frappe.model.set_value(cdt, cdn, "full_name", null);
		}
 	},
});



//MEETING.JSON

// {
//  "actions": [],
//  "allow_rename": 1,
//  "autoname": "Meeting-.#",
//  "creation": "2024-03-26 17:20:07.253807",
//  "doctype": "DocType",
//  "engine": "InnoDB",
//  "field_order": [
//   "title",
//   "status",
//   "column_break_unhh",
//   "date",
//   "from_time",
//   "to_time",
//   "agenda_section",
//   "agenda",
//   "attendees_section",
//   "attendees",
//   "invitation_section",
//   "invitation_message",
//   "send_emails",
//   "minutes_section",
//   "minutes"
//  ],
//  "fields": [
//   {
//    "fieldname": "title",
//    "fieldtype": "Data",
//    "label": "Title"
//   },
//   {
//    "fieldname": "date",
//    "fieldtype": "Date",
//    "in_list_view": 1,
//    "label": "Date",
//    "reqd": 1
//   },
//   {
//    "fieldname": "from_time",
//    "fieldtype": "Time",
//    "label": "From Time",
//    "reqd": 1
//   },
//   {
//    "fieldname": "to_time",
//    "fieldtype": "Time",
//    "label": "To Time",
//    "reqd": 1
//   },
//   {
//    "fieldname": "status",
//    "fieldtype": "Select",
//    "label": "Status",
//    "options": "Planned\nInvitation Sent\nIn Progress\nCompleted\nCancelled",
//    "reqd": 1
//   },
//   {
//    "collapsible": 1,
//    "fieldname": "agenda_section",
//    "fieldtype": "Section Break",
//    "label": "Agenda"
//   },
//   {
//    "fieldname": "agenda",
//    "fieldtype": "Table",
//    "label": "Agenda",
//    "options": "Meeting Agenda"
//   },
//   {
//    "fieldname": "minutes",
//    "fieldtype": "Table",
//    "label": "Minutes",
//    "options": "Meeting Minute"
//   },
//   {
//    "collapsible": 1,
//    "fieldname": "minutes_section",
//    "fieldtype": "Section Break",
//    "label": "Minutes"
//   },
//   {
//    "fieldname": "column_break_unhh",
//    "fieldtype": "Column Break"
//   },
//   {
//    "collapsible": 1,
//    "fieldname": "attendees_section",
//    "fieldtype": "Section Break",
//    "label": "Attendees"
//   },
//   {
//    "fieldname": "attendees",
//    "fieldtype": "Table",
//    "label": "Attendees",
//    "options": "Meeting Attendee"
//   },
//   {
//    "collapsible": 1,
//    "fieldname": "invitation_section",
//    "fieldtype": "Section Break",
//    "label": "Invitation"
//   },
//   {
//    "fieldname": "invitation_message",
//    "fieldtype": "Text Editor",
//    "label": "Invitation Message",
//    "reqd": 1
//   },
//   {
//    "fieldname": "send_emails",
//    "fieldtype": "Button",
//    "label": "Send Emails",
//    "read_only_depends_on": "eval:doc.status===\"Planned\""
//   }
//  ],
//  "index_web_pages_for_search": 1,
//  "links": [],
//  "modified": "2024-03-28 23:45:44.483389",
//  "modified_by": "Administrator",
//  "module": "MeetIn",
//  "name": "Meeting",
//  "naming_rule": "Expression (old style)",
//  "owner": "Administrator",
//  "permissions": [
//   {
//    "create": 1,
//    "delete": 1,
//    "email": 1,
//    "export": 1,
//    "print": 1,
//    "read": 1,
//    "report": 1,
//    "role": "System Manager",
//    "share": 1,
//    "write": 1
//   },
//   {
//    "create": 1,
//    "delete": 1,
//    "email": 1,
//    "export": 1,
//    "print": 1,
//    "read": 1,
//    "report": 1,
//    "role": "Meeting Manager",
//    "share": 1,
//    "write": 1
//   }
//  ],
//  "quick_entry": 1,
//  "sort_field": "modified",
//  "sort_order": "DESC",
//  "states": [],
//  "title_field": "title",
//  "track_changes": 1
// }