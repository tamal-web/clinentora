-- ============================================================
-- Clinentora: Contact Enquiries Table
-- ============================================================
CREATE TABLE public.contacts (
  id           UUID                     NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name   TEXT                     NOT NULL,
  last_name    TEXT                     NOT NULL,
  email        TEXT                     NOT NULL,
  phone        TEXT,
  message      TEXT                     NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to INSERT (public contact form — no auth required)
CREATE POLICY "Anyone can submit a contact enquiry"
ON public.contacts
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only the service role (your backend / Supabase dashboard) can read rows
CREATE POLICY "Service role can read contacts"
ON public.contacts
FOR SELECT
TO service_role
USING (true);


-- ============================================================
-- Clinentora: Demo Booking Requests Table
-- ============================================================
CREATE TABLE public.demo_bookings (
  id               UUID                     NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name       TEXT                     NOT NULL,
  last_name        TEXT                     NOT NULL,
  email            TEXT                     NOT NULL,
  phone            TEXT,
  company_name     TEXT                     NOT NULL,
  firm_size        TEXT                     NOT NULL,  -- '1-5' | '6-20' | '21-50' | '50+'
  ip_area          TEXT                     NOT NULL,  -- 'Patent' | 'Trademark' | 'Copyright' | 'Litigation' | 'Mixed'
  preferred_date   DATE,
  message          TEXT,
  submitted_at     TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.demo_bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to INSERT (public form — no auth required)
CREATE POLICY "Anyone can submit a demo booking"
ON public.demo_bookings
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only the service role can read rows
CREATE POLICY "Service role can read demo bookings"
ON public.demo_bookings
FOR SELECT
TO service_role
USING (true);
