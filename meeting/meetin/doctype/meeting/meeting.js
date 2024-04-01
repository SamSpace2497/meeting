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