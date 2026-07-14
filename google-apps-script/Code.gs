const SHEET_NAME = "Registrations";
const HEADERS = [
  "Date",
  "Name",
  "Phone",
  "University",
  "Academic Year",
  "Email",
  "Message",
];

function doPost(e) {
  try {
    const sheet = getRegistrationSheet_();
    const data = getRequestData_(e);

    sheet.appendRow([
      new Date(),
      data.fullName || "",
      data.phone || "",
      data.university || "",
      data.academicYear || "",
      data.email || "",
      data.message || "",
    ]);

    return jsonResponse_({
      ok: true,
      message: "Registration completed successfully.",
    });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      message: error && error.message ? error.message : "Unknown error",
    });
  }
}

function getRequestData_(e) {
  if (e && e.parameter && Object.keys(e.parameter).length > 0) {
    return e.parameter;
  }

  if (e && e.postData && e.postData.contents) {
    return JSON.parse(e.postData.contents || "{}");
  }

  return {};
}

function doGet() {
  return jsonResponse_({
    ok: true,
    message: "Medical Academy registration endpoint is running.",
  });
}

function getRegistrationSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
