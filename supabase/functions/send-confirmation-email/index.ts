import { serve } from "https://deno.land/std@0.208.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailPayload {
  type: "contact" | "demo";
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message?: string;
  // Demo-specific
  companyName?: string;
  firmSize?: string;
  ipArea?: string;
  preferredDate?: string;
}

// ── HTML email templates ──────────────────────────────────────────────────────

function buildContactEmailHtml(p: EmailPayload): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>We received your message — Clinentora</title>
</head>
<body style="margin:0;padding:0;background:#0E0E0E;font-family:'Inter','Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0E0E0E;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#141414;border-radius:20px;border:1px solid #2C2C2C;overflow:hidden;max-width:600px;">
          <tr>
            <td style="background:#141414;padding:40px 48px 32px;border-bottom:1px solid #2C2C2C;">
              <img src="https://clinentora.com/images/common/logo.svg" alt="Clinentora" height="40" style="display:block;"/>
            </td>
          </tr>
          <tr>
            <td style="padding:48px 48px 32px;">
              <p style="margin:0 0 8px;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#FF8975;">Contact Confirmation</p>
              <h1 style="margin:0 0 24px;font-size:28px;font-weight:500;color:#FFFFFF;letter-spacing:-0.02em;line-height:1.2;">
                We've received your message, ${p.firstName}.
              </h1>
              <p style="margin:0 0 24px;font-size:16px;color:#ACAFB9;line-height:1.6;">
                Thank you for reaching out to Clinentora. A member of our team will review your enquiry and get back to you within <strong style="color:#FFFFFF;">1–2 business days</strong>.
              </p>
              <p style="margin:0 0 32px;font-size:16px;color:#ACAFB9;line-height:1.6;">
                If you have an urgent query, feel free to reply to this email or call us at <strong style="color:#FFFFFF;">+(91) 76579 91807</strong>.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#0E0E0E;border-radius:12px;border:1px solid #2C2C2C;margin-bottom:32px;">
                <tr>
                  <td style="padding:24px 28px;">
                    <p style="margin:0 0 16px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#6B6E7B;">Your submission</p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;font-size:14px;color:#6B6E7B;width:40%;">Name</td>
                        <td style="padding:6px 0;font-size:14px;color:#FFFFFF;">${p.firstName} ${p.lastName}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:14px;color:#6B6E7B;">Email</td>
                        <td style="padding:6px 0;font-size:14px;color:#FFFFFF;">${p.email}</td>
                      </tr>
                      ${p.phone ? `<tr><td style="padding:6px 0;font-size:14px;color:#6B6E7B;">Phone</td><td style="padding:6px 0;font-size:14px;color:#FFFFFF;">${p.phone}</td></tr>` : ""}
                    </table>
                  </td>
                </tr>
              </table>
              <a href="https://clinentora.com" style="display:inline-block;background:linear-gradient(to bottom,#FFFFFF,#D1D1D1);color:#0D0D0D;font-size:14px;font-weight:600;text-decoration:none;padding:14px 28px;border-radius:100px;letter-spacing:-0.01em;">
                Visit Clinentora →
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 48px;border-top:1px solid #2C2C2C;">
              <p style="margin:0;font-size:12px;color:#6B6E7B;line-height:1.6;">
                © ${new Date().getFullYear()} Clinentora · Intelligent IP Docketing<br/>
                SCO 4, VIP Road, Zirakpur, SAS Nagar (Mohali), Punjab 140603<br/>
                <a href="mailto:info@clinentora.com" style="color:#ACAFB9;text-decoration:none;">info@clinentora.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildDemoEmailHtml(p: EmailPayload): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Demo request received — Clinentora</title>
</head>
<body style="margin:0;padding:0;background:#0E0E0E;font-family:'Inter','Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0E0E0E;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#141414;border-radius:20px;border:1px solid #2C2C2C;overflow:hidden;max-width:600px;">
          <tr>
            <td style="background:#141414;padding:40px 48px 32px;border-bottom:1px solid #2C2C2C;">
              <img src="https://clinentora.com/images/common/logo.svg" alt="Clinentora" height="40" style="display:block;"/>
            </td>
          </tr>
          <tr>
            <td style="padding:48px 48px 32px;">
              <p style="margin:0 0 8px;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#FF8975;">Demo Request Confirmed</p>
              <h1 style="margin:0 0 24px;font-size:28px;font-weight:500;color:#FFFFFF;letter-spacing:-0.02em;line-height:1.2;">
                Your demo request is in, ${p.firstName}.
              </h1>
              <p style="margin:0 0 24px;font-size:16px;color:#ACAFB9;line-height:1.6;">
                Thank you for your interest in Clinentora. We'll review your request and reach out within <strong style="color:#FFFFFF;">2 business day</strong> to confirm a time that works for you.
              </p>
                  <!-- 
              <p style="margin:0 0 32px;font-size:16px;color:#ACAFB9;line-height:1.6;">
                During the demo, we'll walk through a live docketing workflow on your firm's filings — office actions, EPO notices, court orders — all reviewed and confirmed by your paralegals.
              </p>

-->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#0E0E0E;border-radius:12px;border:1px solid #2C2C2C;margin-bottom:32px;">
                <tr>
                  <td style="padding:24px 28px;">
                    <p style="margin:0 0 16px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#6B6E7B;">Your booking details</p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;font-size:14px;color:#6B6E7B;width:40%;">Name</td>
                        <td style="padding:6px 0;font-size:14px;color:#FFFFFF;">${p.firstName} ${p.lastName}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:14px;color:#6B6E7B;">Email</td>
                        <td style="padding:6px 0;font-size:14px;color:#FFFFFF;">${p.email}</td>
                      </tr>
                      ${p.companyName ? `<tr><td style="padding:6px 0;font-size:14px;color:#6B6E7B;">Firm</td><td style="padding:6px 0;font-size:14px;color:#FFFFFF;">${p.companyName}</td></tr>` : ""}
                      ${p.firmSize ? `<tr><td style="padding:6px 0;font-size:14px;color:#6B6E7B;">Firm size</td><td style="padding:6px 0;font-size:14px;color:#FFFFFF;">${p.firmSize} attorneys</td></tr>` : ""}
                      ${p.ipArea ? `<tr><td style="padding:6px 0;font-size:14px;color:#6B6E7B;">IP area</td><td style="padding:6px 0;font-size:14px;color:#FFFFFF;">${p.ipArea}</td></tr>` : ""}
                      ${p.preferredDate ? `<tr><td style="padding:6px 0;font-size:14px;color:#6B6E7B;">Preferred date</td><td style="padding:6px 0;font-size:14px;color:#FFFFFF;">${p.preferredDate}</td></tr>` : ""}
                    </table>
                  </td>
                </tr>
              </table>
              <a href="https://clinentora.com" style="display:inline-block;background:linear-gradient(to bottom,#FFFFFF,#D1D1D1);color:#0D0D0D;font-size:14px;font-weight:600;text-decoration:none;padding:14px 28px;border-radius:100px;letter-spacing:-0.01em;">
                Visit Clinentora →
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 48px;border-top:1px solid #2C2C2C;">
              <p style="margin:0;font-size:12px;color:#6B6E7B;line-height:1.6;">
                © ${new Date().getFullYear()} Clinentora · Intelligent IP Docketing<br/>
                SCO 4, VIP Road, Zirakpur, SAS Nagar (Mohali), Punjab 140603<br/>
                <a href="mailto:info@clinentora.com" style="color:#ACAFB9;text-decoration:none;">info@clinentora.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ── Microsoft Graph API email sender ─────────────────────────────────────────

async function getGraphAccessToken(
  tenantId: string,
  clientId: string,
  clientSecret: string,
): Promise<string> {
  const url = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
      scope: "https://graph.microsoft.com/.default",
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Failed to get Graph access token: ${err}`);
  }

  const json = await res.json();
  return json.access_token as string;
}

async function sendViaGraph(opts: {
  tenantId: string;
  clientId: string;
  clientSecret: string;
  fromEmail: string;
  toEmail: string;
  subject: string;
  html: string;
}): Promise<void> {
  const token = await getGraphAccessToken(
    opts.tenantId,
    opts.clientId,
    opts.clientSecret,
  );

  const endpoint = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(opts.fromEmail)}/sendMail`;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: {
        subject: opts.subject,
        body: {
          contentType: "HTML",
          content: opts.html,
        },
        toRecipients: [{ emailAddress: { address: opts.toEmail } }],
        from: {
          emailAddress: {
            name: "Clinentora",
            address: opts.fromEmail,
          },
        },
      },
      saveToSentItems: true,
    }),
  });

  // Graph returns 202 Accepted on success (no body)
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Graph sendMail failed (${res.status}): ${err}`);
  }
}

// ── Main handler ──────────────────────────────────────────────────────────────

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const payload: EmailPayload = await req.json();

    // Read secrets
    const tenantId = Deno.env.get("M365_TENANT_ID") ?? "";
    const clientId = Deno.env.get("M365_CLIENT_ID") ?? "";
    const clientSecret = Deno.env.get("M365_CLIENT_SECRET") ?? "";
    const fromEmail = "tamal@clinentora.com";

    if (!tenantId || !clientId || !clientSecret) {
      throw new Error(
        "Missing required secrets: M365_TENANT_ID, M365_CLIENT_ID, M365_CLIENT_SECRET",
      );
    }

    const isDemo = payload.type === "demo";
    const subject = isDemo
      ? "Demo request confirmed — Clinentora"
      : "We've received your message — Clinentora";
    const html = isDemo
      ? buildDemoEmailHtml(payload)
      : buildContactEmailHtml(payload);

    await sendViaGraph({
      tenantId,
      clientId,
      clientSecret,
      fromEmail,
      toEmail: payload.email,
      subject,
      html,
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("send-confirmation-email error:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : String(error),
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      },
    );
  }
});
