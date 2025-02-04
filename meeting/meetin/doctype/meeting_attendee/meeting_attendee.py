# Copyright (c) 2024, Frappe and contributors
# For license information, please see license.txt

# import frappe
from __future__ import unicode_literals
import frappe
from frappe.model.document import Document


class MeetingAttendee(Document):
	pass






# .json file 


# {
#  "actions": [],
#  "allow_rename": 1,
#  "creation": "2024-03-26 21:02:43.321712",
#  "doctype": "DocType",
#  "editable_grid": 1,
#  "engine": "InnoDB",
#  "field_order": [
#   "attendee",
#   "full_name",
#   "column_break_cc2a",
#   "accepted",
#   "attended"
#  ],
#  "fields": [
#   {
#    "fieldname": "attendee",
#    "fieldtype": "Link",
#    "in_list_view": 1,
#    "label": "Attendee",
#    "options": "User"
#   },
#   {
#    "fieldname": "full_name",
#    "fieldtype": "Data",
#    "in_list_view": 1,
#    "label": "Full Name",
#    "read_only": 1
#   },
#   {
#    "fieldname": "column_break_cc2a",
#    "fieldtype": "Column Break"
#   },
#   {
#    "default": "0",
#    "fieldname": "accepted",
#    "fieldtype": "Check",
#    "in_list_view": 1,
#    "label": "Invitation Accepted?"
#   },
#   {
#    "default": "0",
#    "fieldname": "attended",
#    "fieldtype": "Check",
#    "in_list_view": 1,
#    "label": "Attended?"
#   }
#  ],
#  "index_web_pages_for_search": 1,
#  "istable": 1,
#  "links": [],
#  "modified": "2024-03-27 12:30:02.231271",
#  "modified_by": "Administrator",
#  "module": "MeetIn",
#  "name": "Meeting Attendee",
#  "owner": "Administrator",
#  "permissions": [],
#  "sort_field": "modified",
#  "sort_order": "DESC",
#  "states": []
# }