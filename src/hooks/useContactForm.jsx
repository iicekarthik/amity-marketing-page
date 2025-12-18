import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const useContactForm = ({ apiKey, apiUrl, onSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    course: "",
    program_level: "",
    conset: false,
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes including sanitization for phone number
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "phone") {
      const phoneValue = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, [name]: phoneValue }));
    } else if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, state, course, city, program_level, conset } =
      form;

    // Validate required fields
    if (!name.trim() || !email || !phone || !state || !course) {
      toast.warning("Please fill all required fields before submitting!");
      return;
    }

    setLoading(true);

    const nameParts = name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName =
      nameParts.length > 1 ? nameParts.slice(1).join(" ") : "N/A";

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
            city: city || "N/A",
            state: state || "N/A",
            needs: program_level + " - " + course,
            subject: conset ? `${course} (Consent Accepted)` : course,
            source: "Marketing Vidyarishi Website",
          },
        ]),
      },
    ]);

    const formData = new URLSearchParams();
    formData.append("apiKey", apiKey);
    formData.append("apiParams", apiParams);

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const responseText = response.data;
      const match = responseText.match(/<errorCode>(\d+)<\/errorCode>/);
      const errorCode = match ? match[1] : null;

      if (errorCode === "200") {
        toast.info("Please try after some time.");
      } else if (errorCode === "305") {
        toast.warning("This Mobile Number is already used.");
      } else if (errorCode === "201") {
        toast.warning("Missing required data. Please fill all fields.");
      } else if (responseText.includes("-1")) {
        toast.success("We will contact you shortly!");
        setTimeout(() => {
          setForm({
            name: "",
            email: "",
            phone: "",
            state: "",
            city: "",
            course: "",
            program_level: "",
            conset: false,
          });
          if (onSuccess) onSuccess();
        }, 1500);
      } else {
        toast.error("There was an error processing your request.");
      }
    } catch (error) {
      console.error("API Error:", error);
      toast.error("Error sending data.");
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    loading,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;
