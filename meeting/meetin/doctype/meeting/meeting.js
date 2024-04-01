// Copyright (c) 2024, Frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on("Meeting", {
    attendee : function(frm,cdt,cdn){
        var attendee = frappe.model.get_doc(cdt,cdn);
        if (attendee.attendee){
            frm.call({
                method: "meeting.meetin.doctype.meeting.meeting.get_full_name",
                args: {
                    attendee: attendee.attendee
                },
                callback: function(r) {
                    frappe.model.set_value(cdt, cdn, "full_name", r.message);
                }
            });
        } else{
            frappe.model.set_value(cdt, cdn,"full_name", null );
        }
    },
    send_emails: function(frm){
        if (frm.doc.status==="Planned"){
            
        }
    }


// 	refresh(frm) {

// 	},
 });
