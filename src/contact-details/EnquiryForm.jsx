import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { xml2js } from "xml-js";

const EnquiryForm = ({ onClose, showClose }) => {
  const apiKey = import.meta.env.VITE_BIZIVERSE_APIKEY;
  const apiUrl = import.meta.env.VITE_BIZIVERSE_APIURL;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    level: "",
    course: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);

  // const countryCodes = [
  //   { code: "+91", country: "India" },
  //   { code: "+1", country: "United States" },
  //   { code: "+44", country: "United Kingdom" },
  //   { code: "+61", country: "Australia" },
  //   { code: "+81", country: "Japan" },
  //   { code: "+971", country: "United Arab Emirates" },
  //   { code: "+65", country: "Singapore" },
  //   { code: "+49", country: "Germany" },
  //   { code: "+33", country: "France" },
  //   { code: "+94", country: "Sri Lanka" },
  //   { code: "+880", country: "Bangladesh" },
  //   { code: "+92", country: "Pakistan" },
  //   { code: "+93", country: "Afghanistan" },
  //   { code: "+86", country: "China" },
  //   { code: "+7", country: "Russia" },
  //   { code: "+39", country: "Italy" },
  //   { code: "+34", country: "Spain" },
  //   { code: "+55", country: "Brazil" },
  //   { code: "+27", country: "South Africa" },
  //   { code: "+82", country: "South Korea" },
  //   { code: "+60", country: "Malaysia" },
  //   { code: "+64", country: "New Zealand" },
  //   { code: "+351", country: "Portugal" },
  //   { code: "+31", country: "Netherlands" },
  //   { code: "+90", country: "Turkey" },
  //   { code: "+254", country: "Kenya" },
  //   { code: "+20", country: "Egypt" },
  //   { code: "+966", country: "Saudi Arabia" },
  //   { code: "+62", country: "Indonesia" },
  //   { code: "+84", country: "Vietnam" },
  //   { code: "+63", country: "Philippines" },
  //   { code: "+45", country: "Denmark" },
  //   { code: "+46", country: "Sweden" },
  //   { code: "+47", country: "Norway" },
  //   { code: "+358", country: "Finland" },
  //   { code: "+41", country: "Switzerland" },
  //   { code: "+48", country: "Poland" },
  //   { code: "+43", country: "Austria" },
  //   { code: "+40", country: "Romania" },
  //   { code: "+380", country: "Ukraine" },
  //   { code: "+56", country: "Chile" },
  //   { code: "+57", country: "Colombia" },
  //   { code: "+52", country: "Mexico" },
  //   { code: "+598", country: "Uruguay" },
  //   { code: "+234", country: "Nigeria" },
  //   { code: "+212", country: "Morocco" },
  //   { code: "+251", country: "Ethiopia" },
  //   { code: "+36", country: "Hungary" },
  //   { code: "+420", country: "Czech Republic" },
  //   { code: "+421", country: "Slovakia" },
  //   { code: "+30", country: "Greece" },
  //   { code: "+386", country: "Slovenia" },
  //   { code: "+353", country: "Ireland" },
  //   { code: "+507", country: "Panama" },
  //   { code: "+505", country: "Nicaragua" },
  //   { code: "+595", country: "Paraguay" },
  //   { code: "+591", country: "Bolivia" },
  //   { code: "+58", country: "Venezuela" },
  // ];

  const [countryCodes, setCountries] = useState([]);

  useEffect(() => {
    const fetchDialCodes = async () => {
      try {
        const response = await axios.get(
          "https://countriesnow.space/api/v0.1/countries/codes"
        );
        setCountries(response.data.data);
      } catch (error) {
        console.error("Error fetching country codes:", error);
      }
    };

    fetchDialCodes();
  }, []);

  const courses = {
    UG: ["BA", "BCA", "BBA", "B.Com", "B.Sc"],
    PG: ["MBA", "MCA", "M.Com", "MA", "M.Sc"],
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, level, course, consent } = form;
    const city = form.city || "N/A";
    const state = form.state || "N/A";
    const program_level = level;

    if (!name || !email || !phone || !level || !course) {
      toast.warning("Please fill all required fields!");
      return;
    }

    if (!consent) {
      toast.warning("Please agree to the consent!");
      return;
    }

    setLoading(true);

    try {
      const nameParts = name.trim().split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "N/A";

      const apiParams = JSON.stringify([
        {
          moduleID: 25,
          actionType: "setLead",
          data: JSON.stringify([
            {
              companyName: "N/A",
              title: "Mr/Ms",
              firstName,
              lastName,
              email,
              mobile: phone,
              designation: "N/A",
              city,
              state,
              needs: `${program_level} - ${course}`,
              subject: consent ? `${course} (Consent Accepted) ` : course,
              source: "Amity University Landing Page, Vidyarishi Website",
            },
          ]),
        },
      ]);

      const formData = new URLSearchParams();
      formData.append("apiKey", apiKey);
      formData.append("apiParams", apiParams);

      const response = await axios.post(apiUrl, formData, {
        headers: { "Content-Type": "text/xml; charset=utf-8" },
      });

      // Parse XML
      const xmlResponse = xml2js(response.data, { compact: true });
      const error = xmlResponse.apiResp.error._text === "true";
      const errorMessage = xmlResponse.apiResp.errorMessage._text;

      let responseText = response.data;

      // Use Regex to Detect Error Codes in XML Response
      const match = responseText.match(/<errorCode>(\d+)<\/errorCode>/);
      const errorCode = match ? match[1] : null;

      if (errorCode === "200") {
        toast.info("Please Try After Some Times");
      } else if (errorCode === "305") {
        toast.warning("This Mobile Number Already Used.");
      } else if (errorCode === "201") {
        toast.warning("Missing required data. Please fill all fields.");
      } else if (responseText.includes("-1")) {
        toast.success("We Will Contact You Shortlyyy!");
        setTimeout(() => {
          setContactForm({
            name: "",
            email: "",
            phone: "",
            countryCode: "+91",
            level: "",
            course: "",
            consent: false,
          });
          setIsOpen(false);
        }, 1500);
      } else {
        toast.error("There was an error processing your request.");
      }
    } catch (error) {
      toast.error("Error sending data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-white rounded-2xl p-6 shadow-lg max-w-md w-full">
      {showClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-lg"
        >
          ✕
        </button>
      )}

      <h3 className="text-2xl font-bold text-center mb-6">Enquiry Now</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3 mt-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter full name"
              required
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="abc@xyz.com"
              required
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <div className="flex border border-gray-300 rounded-xl overflow-hidden">
            <select
              name="countryCode"
              value={form.countryCode}
              onChange={handleChange}
              className="px-2 py-2 max-w-28 text-sm bg-gray-50 border-r border-gray-300 outline-none"
            >
              {countryCodes.map((c, idx) => (
                <option key={idx} value={c?.dial_code}>
                  {c?.code} ({c?.dial_code})
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
              className="w-full px-3 py-2 text-sm outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Program Level *
            </label>
            <select
              name="level"
              value={form.level}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-yellow-400 outline-none"
            >
              <option value="">Select Level</option>
              <option value="UG">UG</option>
              <option value="PG">PG</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Program Course *
            </label>
            <select
              name="course"
              value={form.course}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-yellow-400 outline-none"
            >
              <option value="">Select Course</option>
              {form.level &&
                courses[form.level].map((course, idx) => (
                  <option key={idx} value={course}>
                    {course}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="flex items-start gap-3 mt-4">
          <label className="flex items-start gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              name="consent"
              checked={form?.consent}
              onChange={handleChange}
              required
              className="w-5 h-5 mt-1 accent-yellow-400 rounded border-gray-300 focus:ring-2 focus:ring-yellow-400 transition"
            />
            <span className="text-gray-700 text-sm leading-relaxed">
              I agree that associates can contact me via Email, SMS, WhatsApp,
              and Voice calls as per the Privacy Policy. This consent overrides any DNC/NDNC registration.
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full mt-8 bg-[#002147] text-white py-3 rounded-xl font-semibold hover:bg-[#1a3a6d] transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Submitting..." : "SUBMIT"}
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
