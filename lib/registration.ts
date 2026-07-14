export type RegistrationPayload = {
  fullName: string;
  phone: string;
  university: string;
  academicYear: string;
  email?: string;
  message?: string;
};

export const continueOnWhatsAppHref =
  "https://wa.me/201096592805?text=Hello%20Doctor,%20I%20would%20like%20to%20register%20for%20the%20Anatomy%20%26%20Embryology%20Course.";

export async function submitRegistration(payload: RegistrationPayload) {
  const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;

  if (!scriptUrl) {
    throw new Error("Google Apps Script URL is not configured.");
  }

  await postToGoogleAppsScript(scriptUrl, payload);

  return { ok: true };
}

async function postToGoogleAppsScript(
  scriptUrl: string,
  payload: RegistrationPayload,
) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 15000);
  const body = new URLSearchParams();

  Object.entries(payload).forEach(([name, value]) => {
    body.set(name, value || "");
  });

  try {
    await fetch(scriptUrl, {
      method: "POST",
      mode: "no-cors",
      body,
      signal: controller.signal,
    });
  } catch (error) {
    throw new Error(
      error instanceof DOMException && error.name === "AbortError"
        ? "Registration request timed out."
        : "Registration could not be submitted.",
    );
  } finally {
    window.clearTimeout(timeout);
  }
}
