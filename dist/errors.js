"use strict";

/**
 * Copyright 2014 Shape Security, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ErrorMessages = exports.ErrorMessages = {
  UNEXPECTED_TOKEN: "Unexpected token {0}",
  UNEXPECTED_ILLEGAL_TOKEN: "Unexpected token ILLEGAL",
  UNEXPECTED_NUMBER: "Unexpected number",
  UNEXPECTED_STRING: "Unexpected string",
  UNEXPECTED_IDENTIFIER: "Unexpected identifier",
  UNEXPECTED_RESERVED_WORD: "Unexpected reserved word",
  UNEXPECTED_EOS: "Unexpected end of input",
  UNEXPECTED_LINE_TERMINATOR: "Unexpected line terminator",
  NEWLINE_AFTER_THROW: "Illegal newline after throw",
  INVALID_REGULAR_EXPRESSION: "Invalid regular expression",
  UNTERMINATED_REG_EXP: "Invalid regular expression: missing /",
  INVALID_LHS_IN_ASSIGNMENT: "Invalid left-hand side in assignment",
  INVALID_LHS_IN_FOR_IN: "Invalid left-hand side in for-in",
  MULTIPLE_DEFAULTS_IN_SWITCH: "More than one default clause in switch statement",
  NO_CATCH_OR_FINALLY: "Missing catch or finally after try",
  UNKNOWN_LABEL: "Undefined label '{0}'",
  LABEL_REDECLARATION: "Label '{0}' has already been declared",
  ILLEGAL_CONTINUE: "Illegal continue statement",
  ILLEGAL_BREAK: "Illegal break statement",
  ILLEGAL_RETURN: "Illegal return statement",
  STRICT_MODE_WITH: "Strict mode code may not include a with statement",
  STRICT_CATCH_VARIABLE: "Catch variable may not be eval or arguments in strict mode",
  STRICT_VAR_NAME: "Variable name may not be eval or arguments in strict mode",
  STRICT_PARAM_NAME: "Parameter name eval or arguments is not allowed in strict mode",
  STRICT_PARAM_DUPE: "Strict mode function may not have duplicate parameter names",
  STRICT_FUNCTION_NAME: "Function name may not be eval or arguments in strict mode",
  STRICT_OCTAL_LITERAL: "Octal literals are not allowed in strict mode.",
  STRICT_DELETE: "Delete of an unqualified identifier in strict mode.",
  DUPLICATE_PROTO_PROPERTY: "Duplicate __proto__ property in object literal not allowed",
  DUPLICATE_BINDING: "Duplicate binding '{0}'",
  LEXICALLY_BOUND_LET: "Invalid lexical binding name 'let'",
  ACCESSOR_DATA_PROPERTY: "Object literal may not have data and accessor property with the same name",
  ACCESSOR_GET_SET: "Object literal may not have multiple get/set accessors with the same name",
  STRICT_LHS_ASSIGNMENT: "Assignment to eval or arguments is not allowed in strict mode",
  STRICT_LHS_POSTFIX: "Postfix increment/decrement may not have eval or arguments operand in strict mode",
  STRICT_LHS_PREFIX: "Prefix increment/decrement may not have eval or arguments operand in strict mode",
  STRICT_RESERVED_WORD: "Use of future reserved word in strict mode",
  ILLEGAL_ARROW_FUNCTION_PARAMS: "Illegal arrow function parameter list",
  INVALID_VAR_INIT_FOR_IN: "Invalid variable declaration in for-in statement",
  INVALID_VAR_INIT_FOR_OF: "Invalid variable declaration in for-of statement",
  UNEXPECTED_SUPER_CALL: "Unexpected super call",
  UNEXPECTED_SUPER_PROPERTY: "Unexpected super property",
  IMPORT_DUPE: "Duplicate imported names in import declaration",
  UNEXPECTED_NEW_TARGET: "Unexpected new . target",
  DUPLICATE_EXPORTED_NAME: "Duplicate export of '{0}'",
  MODULE_EXPORT_UNDEFINED: "Export '{0}' is not defined in module",
  ILLEGAL_PROPERTY: "Illegal property initializer",
  DUPLICATE_CATCH_BINDING: "Catch parameter '{0}' redeclared as var in for-of loop" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcnJvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JPLElBQU0sYUFBYSxXQUFiLGFBQWEsR0FBRztBQUMzQixrQkFBZ0IsRUFBRSxzQkFBc0I7QUFDeEMsMEJBQXdCLEVBQUUsMEJBQTBCO0FBQ3BELG1CQUFpQixFQUFFLG1CQUFtQjtBQUN0QyxtQkFBaUIsRUFBRSxtQkFBbUI7QUFDdEMsdUJBQXFCLEVBQUUsdUJBQXVCO0FBQzlDLDBCQUF3QixFQUFFLDBCQUEwQjtBQUNwRCxnQkFBYyxFQUFFLHlCQUF5QjtBQUN6Qyw0QkFBMEIsRUFBRSw0QkFBNEI7QUFDeEQscUJBQW1CLEVBQUUsNkJBQTZCO0FBQ2xELDRCQUEwQixFQUFFLDRCQUE0QjtBQUN4RCxzQkFBb0IsRUFBRSx1Q0FBdUM7QUFDN0QsMkJBQXlCLEVBQUUsc0NBQXNDO0FBQ2pFLHVCQUFxQixFQUFFLGtDQUFrQztBQUN6RCw2QkFBMkIsRUFBRSxrREFBa0Q7QUFDL0UscUJBQW1CLEVBQUUsb0NBQW9DO0FBQ3pELGVBQWEsRUFBRSx1QkFBdUI7QUFDdEMscUJBQW1CLEVBQUUsdUNBQXVDO0FBQzVELGtCQUFnQixFQUFFLDRCQUE0QjtBQUM5QyxlQUFhLEVBQUUseUJBQXlCO0FBQ3hDLGdCQUFjLEVBQUUsMEJBQTBCO0FBQzFDLGtCQUFnQixFQUFFLG1EQUFtRDtBQUNyRSx1QkFBcUIsRUFBRSw0REFBNEQ7QUFDbkYsaUJBQWUsRUFBRSwyREFBMkQ7QUFDNUUsbUJBQWlCLEVBQUUsZ0VBQWdFO0FBQ25GLG1CQUFpQixFQUFFLDZEQUE2RDtBQUNoRixzQkFBb0IsRUFBRSwyREFBMkQ7QUFDakYsc0JBQW9CLEVBQUUsZ0RBQWdEO0FBQ3RFLGVBQWEsRUFBRSxxREFBcUQ7QUFDcEUsMEJBQXdCLEVBQUUsNERBQTREO0FBQ3RGLG1CQUFpQixFQUFFLHlCQUF5QjtBQUM1QyxxQkFBbUIsRUFBRSxvQ0FBb0M7QUFDekQsd0JBQXNCLEVBQUUsMkVBQTJFO0FBQ25HLGtCQUFnQixFQUFFLDJFQUEyRTtBQUM3Rix1QkFBcUIsRUFBRSwrREFBK0Q7QUFDdEYsb0JBQWtCLEVBQUUsbUZBQW1GO0FBQ3ZHLG1CQUFpQixFQUFFLGtGQUFrRjtBQUNyRyxzQkFBb0IsRUFBRSw0Q0FBNEM7QUFDbEUsK0JBQTZCLEVBQUUsdUNBQXVDO0FBQ3RFLHlCQUF1QixFQUFFLGtEQUFrRDtBQUMzRSx5QkFBdUIsRUFBRSxrREFBa0Q7QUFDM0UsdUJBQXFCLEVBQUUsdUJBQXVCO0FBQzlDLDJCQUF5QixFQUFFLDJCQUEyQjtBQUN0RCxhQUFXLEVBQUUsZ0RBQWdEO0FBQzdELHVCQUFxQixFQUFFLHlCQUF5QjtBQUNoRCx5QkFBdUIsRUFBRSwyQkFBMkI7QUFDcEQseUJBQXVCLEVBQUUsdUNBQXVDO0FBQ2hFLGtCQUFnQixFQUFFLDhCQUE4QjtBQUNoRCx5QkFBdUIsRUFBRSx3REFBd0QsRUFDbEYsQ0FBQyIsImZpbGUiOiJzcmMvZXJyb3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNCBTaGFwZSBTZWN1cml0eSwgSW5jLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBjb25zdCBFcnJvck1lc3NhZ2VzID0ge1xuICBVTkVYUEVDVEVEX1RPS0VOOiBcIlVuZXhwZWN0ZWQgdG9rZW4gezB9XCIsXG4gIFVORVhQRUNURURfSUxMRUdBTF9UT0tFTjogXCJVbmV4cGVjdGVkIHRva2VuIElMTEVHQUxcIixcbiAgVU5FWFBFQ1RFRF9OVU1CRVI6IFwiVW5leHBlY3RlZCBudW1iZXJcIixcbiAgVU5FWFBFQ1RFRF9TVFJJTkc6IFwiVW5leHBlY3RlZCBzdHJpbmdcIixcbiAgVU5FWFBFQ1RFRF9JREVOVElGSUVSOiBcIlVuZXhwZWN0ZWQgaWRlbnRpZmllclwiLFxuICBVTkVYUEVDVEVEX1JFU0VSVkVEX1dPUkQ6IFwiVW5leHBlY3RlZCByZXNlcnZlZCB3b3JkXCIsXG4gIFVORVhQRUNURURfRU9TOiBcIlVuZXhwZWN0ZWQgZW5kIG9mIGlucHV0XCIsXG4gIFVORVhQRUNURURfTElORV9URVJNSU5BVE9SOiBcIlVuZXhwZWN0ZWQgbGluZSB0ZXJtaW5hdG9yXCIsXG4gIE5FV0xJTkVfQUZURVJfVEhST1c6IFwiSWxsZWdhbCBuZXdsaW5lIGFmdGVyIHRocm93XCIsXG4gIElOVkFMSURfUkVHVUxBUl9FWFBSRVNTSU9OOiBcIkludmFsaWQgcmVndWxhciBleHByZXNzaW9uXCIsXG4gIFVOVEVSTUlOQVRFRF9SRUdfRVhQOiBcIkludmFsaWQgcmVndWxhciBleHByZXNzaW9uOiBtaXNzaW5nIC9cIixcbiAgSU5WQUxJRF9MSFNfSU5fQVNTSUdOTUVOVDogXCJJbnZhbGlkIGxlZnQtaGFuZCBzaWRlIGluIGFzc2lnbm1lbnRcIixcbiAgSU5WQUxJRF9MSFNfSU5fRk9SX0lOOiBcIkludmFsaWQgbGVmdC1oYW5kIHNpZGUgaW4gZm9yLWluXCIsXG4gIE1VTFRJUExFX0RFRkFVTFRTX0lOX1NXSVRDSDogXCJNb3JlIHRoYW4gb25lIGRlZmF1bHQgY2xhdXNlIGluIHN3aXRjaCBzdGF0ZW1lbnRcIixcbiAgTk9fQ0FUQ0hfT1JfRklOQUxMWTogXCJNaXNzaW5nIGNhdGNoIG9yIGZpbmFsbHkgYWZ0ZXIgdHJ5XCIsXG4gIFVOS05PV05fTEFCRUw6IFwiVW5kZWZpbmVkIGxhYmVsICd7MH0nXCIsXG4gIExBQkVMX1JFREVDTEFSQVRJT046IFwiTGFiZWwgJ3swfScgaGFzIGFscmVhZHkgYmVlbiBkZWNsYXJlZFwiLFxuICBJTExFR0FMX0NPTlRJTlVFOiBcIklsbGVnYWwgY29udGludWUgc3RhdGVtZW50XCIsXG4gIElMTEVHQUxfQlJFQUs6IFwiSWxsZWdhbCBicmVhayBzdGF0ZW1lbnRcIixcbiAgSUxMRUdBTF9SRVRVUk46IFwiSWxsZWdhbCByZXR1cm4gc3RhdGVtZW50XCIsXG4gIFNUUklDVF9NT0RFX1dJVEg6IFwiU3RyaWN0IG1vZGUgY29kZSBtYXkgbm90IGluY2x1ZGUgYSB3aXRoIHN0YXRlbWVudFwiLFxuICBTVFJJQ1RfQ0FUQ0hfVkFSSUFCTEU6IFwiQ2F0Y2ggdmFyaWFibGUgbWF5IG5vdCBiZSBldmFsIG9yIGFyZ3VtZW50cyBpbiBzdHJpY3QgbW9kZVwiLFxuICBTVFJJQ1RfVkFSX05BTUU6IFwiVmFyaWFibGUgbmFtZSBtYXkgbm90IGJlIGV2YWwgb3IgYXJndW1lbnRzIGluIHN0cmljdCBtb2RlXCIsXG4gIFNUUklDVF9QQVJBTV9OQU1FOiBcIlBhcmFtZXRlciBuYW1lIGV2YWwgb3IgYXJndW1lbnRzIGlzIG5vdCBhbGxvd2VkIGluIHN0cmljdCBtb2RlXCIsXG4gIFNUUklDVF9QQVJBTV9EVVBFOiBcIlN0cmljdCBtb2RlIGZ1bmN0aW9uIG1heSBub3QgaGF2ZSBkdXBsaWNhdGUgcGFyYW1ldGVyIG5hbWVzXCIsXG4gIFNUUklDVF9GVU5DVElPTl9OQU1FOiBcIkZ1bmN0aW9uIG5hbWUgbWF5IG5vdCBiZSBldmFsIG9yIGFyZ3VtZW50cyBpbiBzdHJpY3QgbW9kZVwiLFxuICBTVFJJQ1RfT0NUQUxfTElURVJBTDogXCJPY3RhbCBsaXRlcmFscyBhcmUgbm90IGFsbG93ZWQgaW4gc3RyaWN0IG1vZGUuXCIsXG4gIFNUUklDVF9ERUxFVEU6IFwiRGVsZXRlIG9mIGFuIHVucXVhbGlmaWVkIGlkZW50aWZpZXIgaW4gc3RyaWN0IG1vZGUuXCIsXG4gIERVUExJQ0FURV9QUk9UT19QUk9QRVJUWTogXCJEdXBsaWNhdGUgX19wcm90b19fIHByb3BlcnR5IGluIG9iamVjdCBsaXRlcmFsIG5vdCBhbGxvd2VkXCIsXG4gIERVUExJQ0FURV9CSU5ESU5HOiBcIkR1cGxpY2F0ZSBiaW5kaW5nICd7MH0nXCIsXG4gIExFWElDQUxMWV9CT1VORF9MRVQ6IFwiSW52YWxpZCBsZXhpY2FsIGJpbmRpbmcgbmFtZSAnbGV0J1wiLFxuICBBQ0NFU1NPUl9EQVRBX1BST1BFUlRZOiBcIk9iamVjdCBsaXRlcmFsIG1heSBub3QgaGF2ZSBkYXRhIGFuZCBhY2Nlc3NvciBwcm9wZXJ0eSB3aXRoIHRoZSBzYW1lIG5hbWVcIixcbiAgQUNDRVNTT1JfR0VUX1NFVDogXCJPYmplY3QgbGl0ZXJhbCBtYXkgbm90IGhhdmUgbXVsdGlwbGUgZ2V0L3NldCBhY2Nlc3NvcnMgd2l0aCB0aGUgc2FtZSBuYW1lXCIsXG4gIFNUUklDVF9MSFNfQVNTSUdOTUVOVDogXCJBc3NpZ25tZW50IHRvIGV2YWwgb3IgYXJndW1lbnRzIGlzIG5vdCBhbGxvd2VkIGluIHN0cmljdCBtb2RlXCIsXG4gIFNUUklDVF9MSFNfUE9TVEZJWDogXCJQb3N0Zml4IGluY3JlbWVudC9kZWNyZW1lbnQgbWF5IG5vdCBoYXZlIGV2YWwgb3IgYXJndW1lbnRzIG9wZXJhbmQgaW4gc3RyaWN0IG1vZGVcIixcbiAgU1RSSUNUX0xIU19QUkVGSVg6IFwiUHJlZml4IGluY3JlbWVudC9kZWNyZW1lbnQgbWF5IG5vdCBoYXZlIGV2YWwgb3IgYXJndW1lbnRzIG9wZXJhbmQgaW4gc3RyaWN0IG1vZGVcIixcbiAgU1RSSUNUX1JFU0VSVkVEX1dPUkQ6IFwiVXNlIG9mIGZ1dHVyZSByZXNlcnZlZCB3b3JkIGluIHN0cmljdCBtb2RlXCIsXG4gIElMTEVHQUxfQVJST1dfRlVOQ1RJT05fUEFSQU1TOiBcIklsbGVnYWwgYXJyb3cgZnVuY3Rpb24gcGFyYW1ldGVyIGxpc3RcIixcbiAgSU5WQUxJRF9WQVJfSU5JVF9GT1JfSU46IFwiSW52YWxpZCB2YXJpYWJsZSBkZWNsYXJhdGlvbiBpbiBmb3ItaW4gc3RhdGVtZW50XCIsXG4gIElOVkFMSURfVkFSX0lOSVRfRk9SX09GOiBcIkludmFsaWQgdmFyaWFibGUgZGVjbGFyYXRpb24gaW4gZm9yLW9mIHN0YXRlbWVudFwiLFxuICBVTkVYUEVDVEVEX1NVUEVSX0NBTEw6IFwiVW5leHBlY3RlZCBzdXBlciBjYWxsXCIsXG4gIFVORVhQRUNURURfU1VQRVJfUFJPUEVSVFk6IFwiVW5leHBlY3RlZCBzdXBlciBwcm9wZXJ0eVwiLFxuICBJTVBPUlRfRFVQRTogXCJEdXBsaWNhdGUgaW1wb3J0ZWQgbmFtZXMgaW4gaW1wb3J0IGRlY2xhcmF0aW9uXCIsXG4gIFVORVhQRUNURURfTkVXX1RBUkdFVDogXCJVbmV4cGVjdGVkIG5ldyAuIHRhcmdldFwiLFxuICBEVVBMSUNBVEVfRVhQT1JURURfTkFNRTogXCJEdXBsaWNhdGUgZXhwb3J0IG9mICd7MH0nXCIsXG4gIE1PRFVMRV9FWFBPUlRfVU5ERUZJTkVEOiBcIkV4cG9ydCAnezB9JyBpcyBub3QgZGVmaW5lZCBpbiBtb2R1bGVcIixcbiAgSUxMRUdBTF9QUk9QRVJUWTogXCJJbGxlZ2FsIHByb3BlcnR5IGluaXRpYWxpemVyXCIsXG4gIERVUExJQ0FURV9DQVRDSF9CSU5ESU5HOiBcIkNhdGNoIHBhcmFtZXRlciAnezB9JyByZWRlY2xhcmVkIGFzIHZhciBpbiBmb3Itb2YgbG9vcFwiLFxufTtcbiJdfQ==