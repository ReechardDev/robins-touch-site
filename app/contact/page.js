import SectionTitle from "../../components/SectionTitle";

export default function Page(){
  return (
    <section className="section">
      <div className="container">
        <SectionTitle kicker="Contact" title="Request Care" subtitle="Tell us about your needs and we’ll respond promptly."/>
        <div className="grid md:grid-cols-2 gap-8">
          <form name="contact" method="POST" data-netlify="true" className="card p-6 space-y-4">
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label className="text-sm font-semibold">Full Name</label>
              <input name="name" className="w-full mt-1 border rounded-xl px-3 py-2" required/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold">Phone</label>
                <input name="phone" className="w-full mt-1 border rounded-xl px-3 py-2" required/>
              </div>
              <div>
                <label className="text-sm font-semibold">Email</label>
                <input type="email" name="email" className="w-full mt-1 border rounded-xl px-3 py-2"/>
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold">City</label>
              <input name="city" className="w-full mt-1 border rounded-xl px-3 py-2"/>
            </div>
            <div>
              <label className="text-sm font-semibold">Service Type</label>
              <select name="service" className="w-full mt-1 border rounded-xl px-3 py-2">
                <option>Transportation</option>
                <option>Companionship</option>
                <option>Light Home Help</option>
                <option>Daily Check-ins</option>
                <option>Custom Plan</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold">Message</label>
              <textarea name="message" rows={5} className="w-full mt-1 border rounded-xl px-3 py-2" placeholder="Tell us about schedule, frequency, or special notes"></textarea>
            </div>
            <label className="inline-flex items-center gap-2 text-sm">
              <input type="checkbox" required />
              <span>I agree this is a non-medical companion & support service.</span>
            </label>
            <button className="btn" type="submit">Send Request</button>
            <p className="text-xs text-gray-500">Or call <a href="tel:7206908765" className="underline">720-690-8765</a> for faster help.</p>
          </form>
          <div className="card p-6">
            <h3 className="font-bold text-brand-teal text-xl">Service Area</h3>
            <p className="mt-2 text-sm">Denver • Aurora • Lakewood • Littleton • Centennial • Thornton</p>
            <div className="mt-6">
              <h4 className="font-semibold">Direct Contact</h4>
              <p className="text-sm mt-1">Phone: 720-690-8765</p>
              <p className="text-sm">Email: miller.76.robin@gmail.com</p>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold">Downloads</h4>
              <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
                <li><a className="underline" href="#" onClick={(e)=>e.preventDefault()}>Client Consent Form (PDF)</a></li>
              </ul>
              <p className="text-xs text-gray-500 mt-2">Add your own PDF link when ready.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}