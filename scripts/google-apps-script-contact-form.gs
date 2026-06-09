const SHEET_NAME = "Sheet1";
const SECRET_PROPERTY = "CONTACT_FORM_SECRET";

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const expectedSecret = PropertiesService.getScriptProperties().getProperty(SECRET_PROPERTY);

    if (!expectedSecret || payload.secret !== expectedSecret) {
      return jsonResponse({ ok: false, error: "Unauthorized" });
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) {
      throw new Error("Sheet not found: " + SHEET_NAME);
    }

    // Column order must match your sheet headers:
    // Timestamp | FirstName | LastName | Email | Phone | Company | Interest | Message | Marketing Consent
    sheet.appendRow([
      new Date(),
      payload.firstName || "",
      payload.lastName || "",
      payload.email || "",
      payload.phone || "",
      payload.company || "",
      payload.interest || "",
      payload.message || "",
      payload.marketingConsent === true ? "Yes" : "No",
    ]);

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

function jsonResponse(body) {
  const output = ContentService.createTextOutput(JSON.stringify(body));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
