import frappe

def send_invitation_emails(meeting):
    meeting = frappe.get_doc("Meeting", meeting)
    meeting.has_permission()

    if meeting.status == "Planned":
        frappe.sendmail (
            recipients = [d.attendee for d in meeting.attendees],
            sender=frappe.session.user,
            subject=meeting.title,
            message=meeting.inbitation_message,
            reference_doctype=meeting.doctype
            reference_name=meeting.name,
            as_bulk=True     
        )  
        

        meeting.status = "Invitation sent"