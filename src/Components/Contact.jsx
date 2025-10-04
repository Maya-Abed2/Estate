import SectionsHeader from "./SectionsHeader";
import { useState } from "react";
export default function Contact() {
     const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bfca9e17-d7e9-44ba-9c9e-77c61dfa0dbe");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      alert('Form Submitted Successfully')
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message)
      setResult("");
    }
}
  return (
    <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="Contact">
      <SectionsHeader title='Contact' title2='With Us' content="Ready to Make a Move? Let's Build Your Future Together"/>


      <form className="max-w-2xl mx-auto text-gray-800 pt-8" onSubmit={onSubmit}>
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 text-left flex flex-col">
                 <label htmlFor="Name">Your Name</label>
                <input type="text" id="Name" placeholder="Your Name" className="border border-gray-300 rounded py-3 px-4 mt-2" name="Name" required />
            </div>
            <div className="w-full md:w-1/2 text-left md:pl-4 flex flex-col">
                 <label htmlFor="Email">Your Email</label>
                <input type="email" id="Email" placeholder="Your Email" className="border border-gray-300 rounded py-3 px-4 mt-2" name="Email" required />
            </div>
        </div>

        <div className="my-6 text-left flex flex-col">
                 <label htmlFor="Massage">Message</label>
                <textarea className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none" name="Message" id="Message" required placeholder="Message"></textarea>
            </div>
            <button className="bg-blue-600 text-white rounded px-12 py-2 mb-8 cursor-pointer" >{result?result : 'Send Message'}</button>
      </form>

    </div>
  )
}
