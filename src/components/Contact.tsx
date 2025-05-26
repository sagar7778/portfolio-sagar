import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, Linkedin, Send, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_loq0cxe", // ✅ Your EmailJS service ID
        "template_m4m55hp", // ✅ Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "w7Y_fbjv2BYBMz3K0" // ✅ Your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormStatus({
            submitted: true,
            success: true,
            message: "Thank you! Your message has been sent successfully.",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });

          setTimeout(() => {
            setFormStatus(null);
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error);
          setFormStatus({
            submitted: true,
            success: false,
            message: "Oops! Something went wrong. Please try again.",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Feel free to reach out if you have any questions or would like to
            work together.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl p-8 shadow-md h-full">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-violet-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <a
                      href="mailto:sagarkoshti6531@gmail.com"
                      className="text-slate-600 hover:text-violet-600 transition-colors"
                    >
                      sagarkoshti6531@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-violet-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <a
                      href="tel:+919409307167"
                      className="text-slate-600 hover:text-violet-600 transition-colors"
                    >
                      +91 9409307167
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-violet-100 p-3 rounded-lg">
                    <Linkedin className="h-6 w-6 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/sagar-koshti-1b6957219/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-violet-600 transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-violet-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-slate-600">India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              {formStatus && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    formStatus.success
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
