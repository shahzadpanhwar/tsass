# School Website: Notes for Later

Things that were taken off the website **for now** and may come back, plus things still waiting for information.

Last updated: 26 October 2026

---

## 1. Removed for now (may be added back later)

### Contact section: "Campus address and timings"
Removed until the school confirms its official address and opening hours.

Original wording: *"To be added after confirmation by school management."*

To add it back, put the real address and timings into the block below and paste it inside the contact card in `index.html`, right after the "Admission and general inquiries" row (inside the same box):

```html
<div class="mt-5 pt-5 border-t border-slate-700 flex items-start gap-4"><div class="w-11 h-11 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-brand-gold"><i class="fa-solid fa-location-dot"></i></div><div><h3 class="font-bold text-white">Campus address and timings</h3><p class="text-sm text-slate-300 mt-1">WRITE THE REAL ADDRESS AND OPENING HOURS HERE</p></div></div>
```

### Contact section: two internal notes (no need to bring back)
These were reminders for the school team, not text for visitors:
- "School management should confirm the official phone number, address, and opening hours before these details are published."
- "The configured email delivery must be verified before launch."

### Gallery: the four fixed photo groups
STEM & Labs, Library, Sports & Activities, and Arts & Auditorium were removed because they used stock photos, not real school photos.

To bring them back with real photos: open `admin.html`, go to the **Gallery** tab, and add posts using the matching group (STEM & Labs, Library, and so on). They then appear in the public gallery automatically.

---

## 2. Waiting for information

| Item | What is needed |
|---|---|
| Instagram, YouTube and LinkedIn icons in the footer | The school's account links (they currently go nowhere) |
| Campus address and opening hours | Confirmed details from the school |
| Official school email | A new email address for this school (see the checklist below) |
| Exact school name | One final name, to use everywhere |

---

## 3. Checklist: when the new school email is ready

The old address `lumoraacademy4@gmail.com` belongs to another project. When you have the new one, it must be changed in these places:

1. **`index.html`**
   - the top bar email link
   - the `SCHOOL_FORM_EMAIL` line in the script
   - the two form `action` links (enquiry form and admission form)
   - the sentence in the admission form that shows the email address
2. **`admin.html`**: the `ADMIN_EMAIL` line (only if the admin login email also changes)
3. **Supabase**: if the admin login email changes, re-run the SQL policies using the new email, and create that user under Authentication
4. **`privacy.html`, `terms.html`, `safeguarding.html`**: the email in the contact box at the bottom of each page
5. **FormSubmit**: submit a test form and click the one-time activation link sent to the new inbox

---

## 4. The website files

| File | Purpose |
|---|---|
| `index.html` | The public school website |
| `admin.html` | Private admin page (notices, gallery photos, newsletter subscribers). Not linked from the website |
| `privacy.html` | Privacy Policy |
| `terms.html` | Terms of Service |
| `safeguarding.html` | Safeguarding & Child Protection |
| `manifest.webmanifest`, `sw.js`, `offline.html`, `icons/` | Make `admin.html` installable as a phone app (keep the `icons` folder with them) |

Keep all five files in the same folder when you upload them.
