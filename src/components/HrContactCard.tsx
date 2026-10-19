// No photo, per instruction — the live site's HR card photo of the previous
// recruiter is not carried over. Name updated to the current HR contact.
const HR_NAME = "SOVANNRIM RUOM";
const HR_EMAIL = "hr-recruiting@seats-inc.com";
const HR_PHONE_DISPLAY = "089 777 231";
const HR_ADDRESS = "Street 388, Sangkat Toul Svay Prey, 1, Phnom Penh.";

export default function HrContactCard() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-border">
      <p className="text-center font-bold text-heading">{HR_NAME}</p>
      <dl className="mt-4 space-y-3 text-sm text-text">
        <div>
          <dt className="font-bold text-heading">Email:</dt>
          <dd>
            <a href={`mailto:${HR_EMAIL}`} className="text-primary hover:underline">
              {HR_EMAIL}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-bold text-heading">Phone:</dt>
          <dd>
            <a href={`tel:${HR_PHONE_DISPLAY.replace(/\s/g, "")}`} className="hover:text-primary">
              {HR_PHONE_DISPLAY}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-bold text-heading">Address:</dt>
          <dd>{HR_ADDRESS}</dd>
        </div>
      </dl>
    </div>
  );
}
