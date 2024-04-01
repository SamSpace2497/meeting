# Copyright (c) 2024, Frappe and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document


class MeetingMinute(Document):
	pass


#.json

# {
#  "actions": [],
#  "allow_rename": 1,
#  "creation": "2024-03-26 20:24:32.580596",
#  "doctype": "DocType",
#  "editable_grid": 1,
#  "engine": "InnoDB",
#  "field_order": [
#   "description",
#   "section_break_oy5h",
#   "action",
#   "status",
#   "column_break_qjjd",
#   "assigned_to",
#   "complete_by"
#  ],
#  "fields": [
#   {
#    "fieldname": "description",
#    "fieldtype": "Text Editor",
#    "in_list_view": 1,
#    "label": "Description",
#    "reqd": 1
#   },
#   {
#    "fieldname": "action",
#    "fieldtype": "Data",
#    "in_list_view": 1,
#    "label": "Action"
#   },
#   {
#    "fieldname": "assigned_to",
#    "fieldtype": "Link",
#    "label": "Assigned To",
#    "options": "User"
#   },
#   {
#    "fieldname": "complete_by",
#    "fieldtype": "Date",
#    "label": "Complete By"
#   },
#   {
#    "fieldname": "status",
#    "fieldtype": "Select",
#    "in_standard_filter": 1,
#    "label": "Status ",
#    "options": "Open\nClosed"
#   },
#   {
#    "collapsible": 1,
#    "fieldname": "section_break_oy5h",
#    "fieldtype": "Section Break",
#    "label": "More Information"
#   },
#   {
#    "fieldname": "column_break_qjjd",
#    "fieldtype": "Column Break"
#   }
#  ],
#  "index_web_pages_for_search": 1,
#  "istable": 1,
#  "links": [],
#  "modified": "2024-03-26 22:23:35.525141",
#  "modified_by": "Administrator",
#  "module": "MeetIn",
#  "name": "Meeting Minute",
#  "owner": "Administrator",
#  "permissions": [],
#  "sort_field": "modified",
#  "sort_order": "DESC",
#  "states": []
# }